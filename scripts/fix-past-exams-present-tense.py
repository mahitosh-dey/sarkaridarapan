#!/usr/bin/env python3
"""
Sixteen pages describe an exam that has already happened as still scheduled.

Found by scripts/audit-past-events-present-tense.py, built today to close the
gap the other four audits left. RRB Group D showed a page can be a month out of
date while every existing audit reports it clean, because they detect defined
defect classes and none of them asks whether a sentence describes the present.

The high-confidence signature is a scheduling verb governing a date that has
passed: "The Preliminary Examination is scheduled for May 16, 2026", read on
21 September.

UNCOMFORTABLE PART. Thirteen of the sixteen are the state PSC pages whose
DESCRIPTIONS were rewritten on 8 September to stop advertising closed
application windows. That fixed the search snippet and never touched the page
body, which went on describing a past exam as upcoming. A shallow fix that
looked complete because the audit measuring it only read titles and
descriptions.

    bpsc-70th-cce-2026          prelims 128 days ago
    appsc-group-2-2026                   92
    tnpsc-group-4-2026                   85
    tspsc-group-2-2026                   71
    hpsc-hcs-2026                        64
    ppsc-pcs-2026                        57
    upsc-cms-2026 / opsc-ocs / gpsc      50
    jpsc-combined-civil-services         43
    apsc-cce-2026                        36
    ukpsc-pcs-2026                       29
    cgpsc-state-service-2026             22
    hppsc-has-2026                       15
    nda-na-2026                           8
    rrb-ntpc-2026                         4

WHAT THIS CHANGES AND WHAT IT DOES NOT. The tense is corrected, which removes a
false claim about the present. It does NOT assert the exam took place: a
scheduled exam can be postponed, and verifying sixteen outcomes is a separate
job from removing sixteen falsehoods. "Was scheduled for" is true either way.

Queued next: research each outcome and reposition to the live stage, the way
RRB Group D was handled this morning.
"""
import os, importlib.util, json, re

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

TARGETS = [
 ("jobs","bpsc-70th-cce-2026"), ("jobs","appsc-group-2-2026"), ("jobs","tnpsc-group-4-2026"),
 ("jobs","tspsc-group-2-2026"), ("jobs","hpsc-hcs-2026"), ("jobs","ppsc-pcs-2026"),
 ("jobs","upsc-cms-2026"), ("jobs","opsc-ocs-2026"), ("jobs","gpsc-class-1-2-2026"),
 ("jobs","jpsc-combined-civil-services-2026"), ("jobs","apsc-cce-2026"),
 ("jobs","ukpsc-pcs-2026"), ("jobs","cgpsc-state-service-2026"), ("jobs","hppsc-has-2026"),
 ("jobs","nda-na-2026"), ("jobs","rrb-ntpc-2026"),
]

MONTHS = {m: i for i, m in enumerate(
    ["january","february","march","april","may","june","july","august",
     "september","october","november","december"], 1)}
MON = "|".join(MONTHS)
from datetime import date
TODAY = date.today()

def date_is_past(t):
    t = t.replace(",", " ")
    m = re.match(rf"\s*(\d{{1,2}})\s+({MON})\s+(\d{{4}})", t, re.I)
    if m: return date(int(m[3]), MONTHS[m[2].lower()], int(m[1])) < TODAY
    m = re.match(rf"\s*({MON})\s+(\d{{1,2}})\s+(\d{{4}})", t, re.I)
    if m: return date(int(m[3]), MONTHS[m[1].lower()], int(m[2])) < TODAY
    return False

# Only rewrite where the governed date has actually passed. A page can carry
# both a past prelims and a future mains in the same paragraph.
PAT = re.compile(
    rf"\b(is|are) scheduled for\s+((?:\d{{1,2}}\s+(?:{MON})|(?:{MON})\s+\d{{1,2}}),?\s+\d{{4}})", re.I)

total = 0
for table, slug in TARGETS:
    rows = json.load(open(f"data/{table}.json"))
    row = next((r for r in rows if r["slug"] == slug), None)
    if row is None:
        print(f"  SKIP {slug}: not found"); continue
    changed = {}
    for field in ["content", "description", "selection_process"]:
        v = row.get(field)
        if not isinstance(v, str): continue
        def sub(m):
            if not date_is_past(m.group(2)): return m.group(0)
            return ("was" if m.group(1).lower() == "is" else "were") + " scheduled for " + m.group(2)
        new = PAT.sub(sub, v)
        if new != v: changed[field] = new
    if not changed:
        print(f"  none in {slug}"); continue
    n = sum(len(PAT.findall(row[f])) for f in changed)
    print(f"  {slug}: {n} phrase(s) in {', '.join(changed)}")
    total += 1
    mod.apply(table, slug, changed,
        reason=("Exam date had passed but the page still said 'is scheduled for'. Tense "
                "corrected; the outcome is NOT asserted, since a scheduled exam can be "
                "postponed and verifying that is separate work."))

print(f"\npages updated: {total}/{len(TARGETS)}")
