#!/usr/bin/env python3
"""
RRB Group D: CBT finished a month ago, page still describes it as upcoming.

Found by SAMPLING the 160 pages never examined, rather than by any audit. None
of the four audits caught it, and the reason is worth recording:

  - apply-intent audit: needs "apply" language in the title or description.
    This page says "CBT + PET Prep Guide". No match.
  - stale-deadline audit: reads application_end, which closed in March. Long
    past its 60-day window, so it stopped being reported months ago.
  - relative-time audit: "the CBT window is 3 to 21 August 2026" states a date
    rather than a distance. No match.
  - conflation audit: the ordering is consistent. No match.

So a page can be a month out of date while every audit reports it clean. The
audits catch defined defect classes; they do not read a page and ask whether it
describes the present. Sampling does.

Verified 2026-09-21 against testbook, adda247, prepp, careerpower, shiksha and
kollegeapply, which agree:

    CBT held       3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21 and
                   25 August 2026, sixteen days
    applicants     52,39,760
    answer key     released 7 September 2026, with response sheets
    objections     window closed 15 September 2026, 5pm
    result         expected fourth week of October 2026, after normalisation

The page also understated the CBT window in prose as "3 to 21 August", omitting
the 25 August sitting. The structured exam_date field had the same gap. A
candidate who sat on the 25th would have found their own exam date missing.

NOT ASSERTED: a result date. "Fourth week of October" is an expectation
reported by coaching sites, not an RRB announcement, and the page says so.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "rrb-group-d-2026"
row = next(r for r in json.load(open("data/entrance_exams.json")) if r["slug"] == SLUG)
c = row["content"]

edits = [
 ("If you're preparing for RRB Group D 2026, the CBT window is 3 to 21 August 2026, and admit cards release on 31 July 2026 per rrbcdg.gov.in.",
  "The CBT is done. It ran across sixteen days in August 2026, from the 3rd to the 25th, and 52,39,760 candidates sat it. RRB released the answer key and response sheets on 7 September 2026 and the objection window closed on 15 September. What remains is normalisation and the result, which coaching sites expect in the fourth week of October 2026, though RRB has announced no date."),

 ("**When is the CBT for RRB Group D 2026?** The CBT window is 3 to 21 August 2026. Your exact date, shift, and centre are on your admit card, which releases on 31 July 2026 at rrbapply.gov.in and your zonal RRB portal.",
  "**Has the RRB Group D 2026 CBT happened?** Yes. It ran on 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21 and 25 August 2026, sixteen days in total, for 52,39,760 candidates. The answer key and response sheets came out on 7 September 2026 and objections closed on 15 September. The result follows normalisation, expected around the fourth week of October on the pattern of previous cycles rather than on an announced date."),
]
for old, new in edits:
    assert old in c, f"anchor missing: {old[:60]}"
    c = c.replace(old, new, 1)

title = "RRB Group D 2026: Answer Key Out, Result and Cut Off"
description = ("RRB Group D 2026 CBT ran 3 to 25 August for 22,195 posts. Answer key out 7 "
               "September, objections closed, result expected late October. Cut-offs and PET.")
assert 50 <= len(title) <= 65, f"title {len(title)}c"
assert 150 <= len(description) <= 160, f"description {len(description)}c"

fields = {
    "title": title,
    "description": description,
    # Prose and the structured field both omitted the 25 August sitting.
    "exam_date": ("CBT held over sixteen days in August 2026: 3, 4, 5, 6, 9, 10, 11, 12, 13, "
                  "14, 17, 18, 19, 20, 21 and 25 August. Answer key released 7 September 2026, "
                  "objection window closed 15 September. Result awaited."),
    "content": c,
}

probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["CBT window is 3 to 21", "August 3 to 21, 2026", "admit cards release on 31 July",
                "If you're preparing for RRB Group D 2026, the CBT"]:
        if bad in s:
            stale.append((k, bad))
print(f"stale CBT-upcoming references remaining: {len(stale)}")
for k, b in stale: print(f"   {k}: {b}")
assert not stale, "a stale reference survived"
print(f"preflight OK: title={len(title)}c description={len(description)}c")

mod.apply("entrance_exams", SLUG, fields,
    reason=("CBT finished 25 Aug 2026; answer key out 7 Sep, objections closed 15 Sep, result "
            "due late Oct. Page still described the CBT as upcoming and omitted the 25 August "
            "sitting from both prose and exam_date. Found by sampling, not by any audit."))
