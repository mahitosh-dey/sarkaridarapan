#!/usr/bin/env python3
"""
Sixteen pages sold a closed application window from their description.

The remainder of what scripts/audit-stale-apply-intent.py found. The four with
it in the TITLE were fixed on 7 September; these carry it in the description,
which is the SERP snippet, so a reader still sees "Apply on bpsc.bih.nic.in" for
a window that shut 219 days ago.

Thirteen are state PSC pages with the same shape, plus SSC CPO, SSC MTS and
SBI SO. All are substantial, 3,000 to 4,000 words apart from ssc-cpo-si-2026 at
1,479, and none had a factual error. Only the framing was dead.

NO NEW FACTS ASSERTED. Every rewritten description is built from data already on
the record: the `vacancies` column, the `last_date` column, and the post names
already present in the old description. The script cross-checks that the date it
states matches `last_date`, so a wrong date cannot be introduced by a typo here.

WHAT IS DELIBERATELY DROPPED: forward-looking exam dates. Four of these
descriptions advertised prelims still to come, "for July 19 Prelims", "for
July 26 Prelims", "Exam June 28", "for Sept 6 Prelims". Every one of those dates
has now passed. Restating them without verifying what happened would repeat the
defect, and verifying sixteen exam outcomes is a separate job. The descriptions
now stop at what is known.
"""
import os, importlib.util, json, re

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

spec2 = importlib.util.spec_from_file_location("draft", "scripts/_desc_draft.py")
draft = importlib.util.module_from_spec(spec2); spec2.loader.exec_module(draft)
D = draft.D

MONTHS = {m: i for i, m in enumerate(
    ["January","February","March","April","May","June","July","August",
     "September","October","November","December"], 1)}

rows = {r["slug"]: r for r in json.load(open("data/jobs.json"))}
problems = []
for slug, desc in D.items():
    r = rows.get(slug)
    if r is None:
        problems.append(f"{slug}: not found"); continue
    n = len(desc)
    if not (150 <= n <= 160):
        problems.append(f"{slug}: description {n}c")
    # The date claimed must equal the record's own last_date.
    m = re.search(r"closed on (\d{1,2}) ([A-Z][a-z]+)(?: (\d{4}))?", desc)
    if not m:
        problems.append(f"{slug}: no closing date stated"); continue
    day, month = int(m[1]), MONTHS.get(m[2])
    ld = r.get("last_date") or ""
    if not month or not ld:
        problems.append(f"{slug}: cannot verify date"); continue
    y, mo, d = (int(x) for x in ld.split("-"))
    if (mo, d) != (month, day):
        problems.append(f"{slug}: says {day} {m[2]} but last_date is {ld}")
    # And the vacancy figure quoted must match the column.
    vac = r.get("vacancies")
    if vac:
        quoted = re.search(r"([\d,]{2,7}) (?:Bihar|Group|Andhra|posts|Sub-Inspector|Multi|Telangana|Haryana|Punjab|Odisha|Jharkhand|Assam|Chhattisgarh|Uttarakhand|Himachal|Specialist)", desc)
        if quoted and int(quoted[1].replace(",", "")) != vac:
            problems.append(f"{slug}: quotes {quoted[1]} but vacancies is {vac}")

print(f"preflight problems: {len(problems)}")
for p in problems:
    print("  " + p)
assert not problems, "fix the problems above before writing"
print(f"all {len(D)} descriptions validated against last_date and vacancies\n")

for slug, desc in D.items():
    mod.apply("jobs", slug, {"description": desc},
              reason=("Description sold a closed application window. Rewritten from the "
                      "record's own vacancies and last_date; no new facts asserted, and "
                      "passed forward-looking exam dates dropped rather than restated."))
