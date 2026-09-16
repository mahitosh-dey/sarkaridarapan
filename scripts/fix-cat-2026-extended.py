#!/usr/bin/env python3
"""
CAT 2026: the deadline moved. This page was one step from being made wrong.

scripts/audit-stale-apply-intent.py flagged cat-2026 today as "closed 1d ago",
because our stored application_end was 2026-09-15. The queued action was to
reposition it to closed.

That would have been wrong. IIM Indore EXTENDED registration to 22 September
2026, 5:00 PM. Repositioning would have told candidates with six days left that
the window had shut, which is the precise harm this whole line of work exists to
prevent, and it would have been done by a tool designed to prevent it.

The audit reads OUR stored date. It cannot know about an extension. So a page it
reports as newly closed has to be VERIFIED against the source before anything is
rewritten. That is now written into the audit's own output.

Verified 2026-09-16 across shiksha, kollegeapply, catmock, findmycollege,
campusutra, quantifiers, imtsinstitute and eduadvice, which agree:

    original last date   15 September 2026
    extended last date   22 September 2026, 5:00 PM
    further extension    ruled out; the IIMs have said this is final
    exam                 29 November 2026, three sessions
    admit card           4 November 2026
    fee                  unchanged, Rs 2,700 and Rs 1,350

SECOND EXTENSION CAUGHT IN TEN DAYS. The NSP Pre-Matric deadline moved from
31 August to 30 September, found on 7 September. Extensions are routine in this
vertical, they are announced close to the original date, and nothing about a
stored date reflects them. A page whose deadline is near needs checking against
the source, not against our own database.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "cat-2026"
row = next(r for r in json.load(open("data/entrance_exams.json")) if r["slug"] == SLUG)
c = row["content"]

n = c.count("15 September 2026")
print(f"'15 September 2026' occurrences in content: {n}")

edits = [
 ("Registration opened at 10:00 am on 3 August 2026 and closes at 5:00 pm on 15 September 2026",
  "Registration opened at 10:00 am on 3 August 2026 and closes at 5:00 pm on 22 September 2026, extended by a week from the original 15 September"),
 ("| Registration closes | 15 September 2026, 5:00 pm |",
  "| Registration closes | 22 September 2026, 5:00 pm (extended from 15 September) |"),
 ("Registration opened at 10:00 am on 3 August 2026 and closes at 5:00 pm on 15 September 2026 on iimcat.ac.in.",
  "Registration opened at 10:00 am on 3 August 2026 and closes at 5:00 pm on 22 September 2026 on iimcat.ac.in, after IIM Indore extended the original 15 September deadline by a week. The IIMs have said this date is final and there is no late-fee route once it passes."),
]
applied = 0
for old, new in edits:
    if old in c:
        c = c.replace(old, new, 1)
        applied += 1
print(f"targeted edits applied: {applied}/{len(edits)}")

# Anything still pointing at the old date is a leftover.
c = c.replace("closes at 5:00 pm on 15 September 2026", "closes at 5:00 pm on 22 September 2026")
c = c.replace("15 September 2026, 5:00 pm", "22 September 2026, 5:00 pm")

description = ("CAT 2026 registration is extended to 22 September and the exam is on 29 November. "
               "Check the 68-question pattern, sectional limits, TITA marking and fee.")
assert 150 <= len(description) <= 160, f"description {len(description)}c"

idates_note = ("IIM Indore extended CAT 2026 registration from 15 September to 22 September 2026, "
               "5:00 PM, and has said the date is final with no late-fee route. Exam on 29 "
               "November 2026 in three sessions, admit card from 4 November.")

fields = {"description": description, "application_end": "2026-09-22", "content": c}

probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["2026-09-15", "to 15 September", "on 15 September 2026"]:
        if bad in s:
            stale.append((k, bad))
print(f"stale old-deadline references remaining: {len(stale)}")
for k, b in stale: print(f"   {k}: {b}")
assert not stale, "an old-deadline reference survived"
print(f"preflight OK: description={len(description)}c application_end=2026-09-22")

mod.apply("entrance_exams", SLUG, fields,
    reason=("IIM Indore extended CAT 2026 registration 15 Sep -> 22 Sep 2026. The apply-intent "
            "audit had flagged the page as closed based on our own stored date; repositioning "
            "it would have told candidates with six days left that the window had shut."))
