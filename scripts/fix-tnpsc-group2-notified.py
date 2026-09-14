#!/usr/bin/env python3
"""
TNPSC Group 2 and 2A 2026: written in anticipation, and every anticipated figure was wrong.

Surfaced by scripts/audit-relative-time.py on "Working back from a 25 October
2026 prelims, there is roughly three months from now". Chasing that phrase found
the page was wrong about far more than the phrasing.

The page was written expecting a notification. TNPSC released it on 11 August
2026, and the real figures differ from the guesses on every count.

Verified 2026-09-14 by direct fetch of testbook's notification report, agreeing
with verandarace, entri and examdetail, and the vacancy split reconciles:

    notification   released 11 August 2026
    vacancies      821 total, being 41 Group II and 780 Group IIA  (41+780=821)
    applications   11 August to 9 September 2026, CLOSED five days ago
    prelims        1 NOVEMBER 2026

Against what the page held:

    vacancies                874          a guess, off by 53
    last_date                2026-02-14   the PREVIOUS cycle's date, feeding
                                          validThrough in JobPosting schema
    prelims                  25 October   a week early
    notification             "expected"   it had been out for a month

The prelims date is the damaging one. A candidate planning around 25 October
prepares to a deadline a week before the real paper, and one planning around
"notification expected 11 August" does not realise applications had already
opened and then closed.

Same anticipation defect recorded in project memory and fixed on UPSC IES ISS
and IBPS RRB: prose hedges, structured fields assert. Here the prose said
"expected" while vacancies, last_date and examDate carried hard values.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "tnpsc-group-2-2026"
row = next(r for r in json.load(open("data/jobs.json")) if r["slug"] == SLUG)
c = row["content"]

n = c.count("25 October 2026")
print(f"'25 October 2026' occurrences in content: {n}")
c = c.replace("25 October 2026", "1 November 2026")

edits = [
 ("For the 2026 cycle, the notification is expected on 11 August 2026",
  "For the 2026 cycle, TNPSC released the notification on 11 August 2026"),
 ("Waiting for the notification to start. The prelims falls on 1 November 2026 and the notification is only expected on 11 August 2026, which leaves about ten weeks between the two.",
  "Waiting for the notification to start. The notification appeared on 11 August 2026 and the prelims falls on 1 November 2026, which leaves about twelve weeks between the two, and applications closed on 9 September within that span."),
 ("Working back from a 1 November 2026 prelims, there is roughly three months from now.",
  "Working back from a 1 November 2026 prelims, the preparation window is what remains between today and that date."),
 ("The preliminary examination, the Combined Civil Services Examination II, is scheduled for 1 November 2026, with the notification expected on 11 August 2026.",
  "The preliminary examination, the Combined Civil Services Examination II, is scheduled for 1 November 2026. The notification was released on 11 August 2026 for 821 vacancies, 41 in Group II and 780 in Group IIA, and applications ran to 9 September 2026."),
]
for old, new in edits:
    assert old in c, f"anchor missing: {old[:70]}"
    c = c.replace(old, new, 1)

description = ("TNPSC Group 2 and 2A 2026: 821 posts notified 11 August, applications closed "
               "9 September, prelims on 1 November. Pattern, posts, salary and mains explained.")
title = "TNPSC Group 2 and 2A 2026: 821 Posts, Prelims 1 November"
assert 50 <= len(title) <= 65, f"title {len(title)}c"
assert 150 <= len(description) <= 160, f"description {len(description)}c"

idates = json.loads(json.dumps(row["important_dates"]))
idates["examDate"] = "Preliminary examination (CCSE-II) on 1 November 2026"
idates["notificationDate"] = "2026-08-11"
idates["startDate"] = "2026-08-11"
idates["lastDate"] = "2026-09-09"
idates["note"] = ("TNPSC notified CCSE-II on 11 August 2026 for 821 vacancies, 41 Group II and "
                  "780 Group IIA. Applications ran 11 August to 9 September 2026 and are closed. "
                  "The preliminary examination is on 1 November 2026. Group II posts carry a "
                  "prelims, mains and interview; Group IIA is decided on the written stages "
                  "alone.")

how_to_apply = (
    "Applications were filed on tnpsc.gov.in and the window closed on 9 September 2026, so "
    "there is no route into this cycle now. Candidates who applied should download the hall "
    "ticket when TNPSC releases it ahead of the preliminary examination on 1 November 2026. "
    "For a future cycle: complete the TNPSC One Time Registration first, since the profile is "
    "reused across TNPSC examinations and stays valid for five years; read the advertisement "
    "for the post list, vacancy count and eligibility, because these change between cycles; "
    "apply within the window selecting your group and post preferences and your language paper "
    "option; upload photograph and signature in the specified format; and pay the fee online, "
    "noting the concessions available to candidates who have not exhausted their free-chance "
    "entitlement under TNPSC rules."
)

fields = {"title": title, "description": description, "vacancies": 821,
          "last_date": "2026-09-09", "important_dates": idates,
          "how_to_apply": how_to_apply, "content": c}

probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["25 October", "874", "2026-02-14", "notification is expected",
                "three months from now", "notification expected on 11 August"]:
        if bad in s:
            stale.append((k, bad))
print(f"stale references remaining: {len(stale)}")
for k, b in stale: print(f"   {k}: {b}")
assert not stale, "a stale reference survived"
assert 41 + 780 == 821, "vacancy split does not reconcile"
print(f"preflight OK: title={len(title)}c desc={len(description)}c vacancies=821")

mod.apply("jobs", SLUG, fields,
    reason=("Page written before the notification. TNPSC notified 11 Aug 2026: 821 posts not "
            "874, prelims 1 November not 25 October, applications closed 9 Sep. last_date held "
            "2026-02-14 from the previous cycle and was feeding validThrough."))
