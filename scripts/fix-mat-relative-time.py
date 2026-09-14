#!/usr/bin/env python3
"""
MAT September 2026: relative time that stopped being true.

Verified 2026-09-14 against pw.live, careers360 and mbauniverse, which agree
with every date already on the page:

    PBT registration closed   7 September 2026
    PBT exam HELD            13 September 2026   (yesterday)
    CBT registration closes  14 September 2026   (today)
    CBT exam                 20 September 2026
    admit cards              PBT 10 Sep, CBT 17 Sep

Nothing here is factually wrong, and the CBT window is still open today, so the
page is NOT being repositioned to "closed". That is the AAI lesson: telling a
reader a window has shut while they still have hours is the same harm inverted.

What is wrong is relative time, written on 5 August and frozen since:

  "the September 2026 session is now open for registration"
      Half true. The PBT half closed a week ago and its exam is over.

  "Registration for the paper based test closes on 7 September, roughly a month
   from now, and the exam follows six days later ... the decision needs making
   now rather than in late August."
      Every clause is past. "Roughly a month from now" is now a week ago, and
      the exam it points at happened yesterday.

This is the hardcoded-relative-time class already recorded in project memory:
correct when written, false on a fixed schedule, and invisible to a date audit
because no date is wrong.

The rewrite states positions instead of distances, so it cannot rot. The page
becomes fully closed after today, and gets repositioned then.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "mat-september-2026"
row = next(r for r in json.load(open("data/entrance_exams.json")) if r["slug"] == SLUG)
content = row["content"]

edits = [
 ("MAT, the Management Aptitude Test conducted by the All India Management Association, is held four times a year, and the September 2026 session is now open for registration. The Paper Based Test is on 13 September 2026 and the Computer Based Test on 20 September 2026, with registration closing on 7 September and 14 September respectively.",
  "MAT, the Management Aptitude Test conducted by the All India Management Association, is held four times a year. In the September 2026 session the Paper Based Test was held on 13 September 2026, its registration having closed on 7 September. The Computer Based Test is on 20 September 2026 and registration for it closes on 14 September, so only the CBT route remains open in this session."),

 ("Note how short the runway is. Registration for the paper based test closes on 7 September, roughly a month from now, and the exam follows six days later. If you intend to sit this session, the decision needs making now rather than in late August.",
  "Note how short the runway is between closing and sitting. PBT registration closed on 7 September and the exam followed six days later, on the 13th. The CBT repeats that pattern: registration closes on 14 September for an exam on the 20th, with the admit card released on 17 September. Six days is not enough to start preparing, which is the practical argument for deciding on a MAT session well before its deadline."),
]
for old, new in edits:
    assert old in content, f"not found: {old[:70]}"
    content = content.replace(old, new, 1)

description = ("MAT September 2026: PBT was held 13 September, CBT is on 20 September with "
               "registration closing on the 14th. Pattern, marking and accepting institutes.")
assert 150 <= len(description) <= 160, f"description {len(description)}c"

title = "MAT September 2026: CBT 20 Sep, Pattern and Cutoffs"
assert 50 <= len(title) <= 65, f"title {len(title)}c"

fields = {"title": title, "description": description, "content": content}

# Every field, not just the one being edited.
probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["roughly a month from now", "now open for registration",
                "rather than in late August", "weeks away", "days away"]:
        if bad in s:
            stale.append((k, bad))
print(f"relative-time phrases remaining: {len(stale)}")
for k, b in stale: print(f"   {k}: {b}")
assert not stale, "a relative-time phrase survived"
print(f"preflight OK: title={len(title)}c description={len(description)}c")

mod.apply("entrance_exams", SLUG, fields,
    reason=("Relative time written 5 Aug had rotted: 'roughly a month from now' pointed at "
            "a deadline a week past and an exam held yesterday. Dates were all correct; only "
            "the framing was stale. CBT window left open because it closes today."))
