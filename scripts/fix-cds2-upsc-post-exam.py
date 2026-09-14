#!/usr/bin/env python3
"""
CDS 2 and UPSC CSE: two exams that have happened, still written as upcoming.

Both surfaced by scripts/audit-relative-time.py.

CDS 2 2026. The exam was held on 13 SEPTEMBER 2026, yesterday, and the page
still carried "Upcoming: your current cycle" in its comparison table, with a
title leading on the exam date and a heading offering a "Preparation plan for
the September 13 exam". A candidate arriving today is looking for the answer
key, the cut-off and the SSB, not a revision timetable for an exam they sat.

Verified 2026-09-14 against careerpower, adda247 and prepp:
    exam        13 September 2026, three sessions: English 09:00 to 11:00,
                General Knowledge 12:30 to 14:30, Elementary Maths 16:00 to 18:00
    answer key  coaching keys out within hours, set by set. UPSC publishes its
                OFFICIAL key only after the whole selection process including
                SSB concludes, which is months away
    result      written result expected late October to mid-November 2026
    SSB         call-ups historically 2 to 3 months after the result

UPSC Civil Services 2026. The page said the Main examination "begins on 21
August 2026. If you cleared the Preliminary examination, that is 17 days away at
the time of writing." Written in August, so the countdown expired before the
exam did. Mains ran 21, 22, 23, 29 and 30 August 2026 and is over.

    result      the last five cycles put it 60 to 75 days after the final paper,
                so late October to mid-November 2026 on that pattern
    then        Personality Test at UPSC in New Delhi, 275 marks, with the final
                merit list usually in April or May of the following year

NOT ASSERTED: any specific result date for either. Sources give ranges that do
not agree, one putting CSE Mains results as late as January 2027. Both pages
state the historical pattern and name it as a pattern.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

# ---------------------------------------------------------------- CDS 2
SLUG = "cds-2-2026"
row = next(r for r in json.load(open("data/entrance_exams.json")) if r["slug"] == SLUG)
c = row["content"]

edits = [
 ("CDS 2 2026 has **451 vacancies**. The exam is September 13, 2026. Application closed June 9.",
  "CDS 2 2026 has **451 vacancies**. The written examination was held on 13 September 2026 in three sessions, and applications had closed on 9 June. What matters now is the answer key, the cut-off and the SSB."),
 ("| **CDS 2 2026** | **September 13, 2026** | **Upcoming: your current cycle** |",
  "| **CDS 2 2026** | **September 13, 2026** | **Written exam held, result awaited** |"),
 ("## Preparation plan for the September 13 exam",
  "## What happens now the exam is over"),
]
for old, new in edits:
    assert old in c, f"CDS2 anchor missing: {old[:60]}"
    c = c.replace(old, new, 1)

title = "CDS 2 2026: Exam Held, Answer Key, Cut Off and SSB"
description = ("CDS 2 2026 written exam was held on 13 September for 451 vacancies. Answer key, "
               "expected cut-off, result timing and what the SSB interview stage involves.")
assert 50 <= len(title) <= 65, f"cds title {len(title)}c"
assert 150 <= len(description) <= 160, f"cds desc {len(description)}c"

probe = dict(row); probe.update({"title": title, "description": description, "content": c})
bad = [(k, b) for k, v in probe.items()
       for b in ["Upcoming: your current cycle", "The exam is September 13"]
       if b in (v if isinstance(v, str) else json.dumps(v, ensure_ascii=False))]
assert not bad, f"CDS2 stale claim survived: {bad}"
print(f"CDS2 preflight OK: title={len(title)}c desc={len(description)}c")
mod.apply("entrance_exams", SLUG, {"title": title, "description": description, "content": c},
    reason=("Exam held 13 Sep 2026; page still said 'Upcoming: your current cycle' and offered "
            "a preparation plan. Repositioned to answer key, cut-off, result and SSB."))

# ---------------------------------------------------------------- UPSC CSE
SLUG2 = "upsc-civil-services-2026"
row2 = next(r for r in json.load(open("data/jobs.json")) if r["slug"] == SLUG2)
c2 = row2["content"]

OLD = ("UPSC Civil Services Examination 2026 is recruiting for 933 posts across the Group A and "
       "Group B services, and the Main examination begins on 21 August 2026. If you cleared the "
       "Preliminary examination, that is 17 days away at the time of writing.")
NEW = ("UPSC Civil Services Examination 2026 is recruiting for 933 posts across the Group A and "
       "Group B services. The Main examination ran on 21, 22, 23, 29 and 30 August 2026 and is "
       "over. Candidates who sat it are waiting on the result, which across the last five cycles "
       "has come 60 to 75 days after the final paper, putting it around late October to "
       "mid-November on that pattern rather than on any announced date.")
assert OLD in c2, "UPSC anchor missing"
c2 = c2.replace(OLD, NEW, 1)

title2 = "UPSC Civil Services 2026: 933 Posts, Mains Done, Result"
description2 = ("UPSC Civil Services 2026: 933 posts. Mains ran 21 to 30 August and the result is "
                "awaited. Pattern, the Personality Test stage, services and salary explained.")
assert 50 <= len(title2) <= 65, f"upsc title {len(title2)}c"
assert 150 <= len(description2) <= 160, f"upsc desc {len(description2)}c"

probe2 = dict(row2); probe2.update({"title": title2, "description": description2, "content": c2})
bad2 = [(k, b) for k, v in probe2.items()
        for b in ["17 days away", "Mains 21 Aug", "begins on 21 August"]
        if b in (v if isinstance(v, str) else json.dumps(v, ensure_ascii=False))]
assert not bad2, f"UPSC stale claim survived: {bad2}"
print(f"UPSC preflight OK: title={len(title2)}c desc={len(description2)}c")
mod.apply("jobs", SLUG2, {"title": title2, "description": description2, "content": c2},
    reason=("'17 days away at the time of writing' expired before the exam did. Mains ran 21-30 "
            "Aug 2026 and is over; repositioned to the result wait and Personality Test."))
