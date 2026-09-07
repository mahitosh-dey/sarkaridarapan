#!/usr/bin/env python3
"""
UPSC IES ISS 2026: page predicted a cycle that had already happened.

Written 16 July 2026 as a forward-looking guess. Its prose hedged correctly
("Confirm every date against upsc.gov.in when the official notification is
released. Dates above reflect the typical IES/ISS cycle timing from 2023, 2024
and 2025"), but the structured columns did not hedge at all:

    last_date        2026-10-15     a hard date
    important_dates  examDate 2027-06-15, lastDate 2026-10-15,
                     startDate 2026-09-10
    vacancies        50             a guess

Those render as a confident date box and feed JobPosting schema, including
validThrough. That is the anticipation defect recorded in project memory: prose
hedges, structured fields assert.

The larger problem is that the prediction was already wrong when written. The
IES/ISS 2026 cycle was notified on 11 February 2026, five months BEFORE this
page was published, and its exam was held 19 to 21 June 2026, a month before.
The page told readers to expect a September 2026 notification for a
recruitment whose application window had closed on 3 March.

Verified 2026-09-07 against testbook.com and studyiq.com, which agree:
    notification      11 February 2026
    applications      to 3 March 2026, 6:00 PM
    vacancies         44, being IES 16 and ISS 28
    written exam      19 to 21 June 2026

NOT ASSERTED: result status. The exam date is past, but no source consulted
established that a result has been declared, so the page says the exam was held
and stops there.

The next cycle is not given invented dates either. UPSC notified this one in
February, so the page points at that pattern and at upsc.gov.in rather than
manufacturing a 2027 schedule, which is the same mistake this commit fixes.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "upsc-ies-iss-2026"
row = next(r for r in json.load(open("data/jobs.json")) if r["slug"] == SLUG)
content = row["content"]

OLD_INTRO_TAIL = ("The 2026 notification is expected in September 2026 with the written "
                  "exam in June or July 2027. Total vacancies typically range from 30 to "
                  "60 across both services combined.")
NEW_INTRO_TAIL = ("UPSC notified the 2026 cycle on 11 February 2026 for 44 posts, 16 in the "
                  "IES and 28 in the ISS. Applications closed on 3 March 2026 and the "
                  "written examination was held from 19 to 21 June 2026, so this cycle is "
                  "past its application stage. Candidates targeting the next one should "
                  "note that UPSC opened this cycle in February, not in the autumn.")
assert OLD_INTRO_TAIL in content
content = content.replace(OLD_INTRO_TAIL, NEW_INTRO_TAIL, 1)

OLD_TABLE = """| Event | Date (expected) |
|---|---|
| Official notification | September 2026 |
| Registration opens | September 2026 |
| Last date to apply | October 2026 |
| Admit card release | May or June 2027 |
| Written examination | June or July 2027 |
| Written result | September 2027 |
| Personal interview | November or December 2027 |
| Final result | January or February 2028 |

Confirm every date against upsc.gov.in when the official notification is released. Dates above reflect the typical IES/ISS cycle timing from 2023, 2024, and 2025 recruitments."""
NEW_TABLE = """| Event | Date |
|---|---|
| Official notification | 11 February 2026 |
| Applications closed | 3 March 2026, 6:00 PM |
| Written examination | 19 to 21 June 2026 |
| Written result | Announced by UPSC on upsc.gov.in |
| Personal interview | Follows the written result |

These are the dates UPSC actually set for the 2026 cycle, per Testbook and StudyIQ. An earlier version of this page predicted a September 2026 notification with a 2027 exam. That prediction was wrong: the notification had already been issued in February 2026 and the examination was held in June.

For the next cycle, UPSC opened this one in February. No 2027 dates are stated here until UPSC publishes them, and the annual calendar on upsc.gov.in is where they appear first."""
assert OLD_TABLE in content
content = content.replace(OLD_TABLE, NEW_TABLE, 1)

OLD_VAC = """Vacancy distribution varies by cycle. Using recent years as a reference:

| Year | IES vacancies | ISS vacancies | Total |
|---|---|---|---|
| 2023 | 25 | 26 | 51 |
| 2024 | 22 | 26 | 48 |
| 2025 | 20 | 27 | 47 |

Expect 2026 vacancies to fall in the 40 to 60 range."""
NEW_VAC = """UPSC advertised 44 posts for the 2026 cycle, 16 in the Indian Economic Service and 28 in the Indian Statistical Service, described as tentative in the notification. That continues a steady pattern rather than breaking it:

| Year | IES vacancies | ISS vacancies | Total |
|---|---|---|---|
| 2023 | 25 | 26 | 51 |
| 2024 | 22 | 26 | 48 |
| 2025 | 20 | 27 | 47 |
| 2026 | 16 | 28 | 44 |

The ISS share has grown while the IES share has shrunk in each of the last four cycles, which is worth weighing if you are choosing between the two papers."""
assert OLD_VAC in content
content = content.replace(OLD_VAC, NEW_VAC, 1)

description = ("UPSC IES ISS 2026: 44 posts, 16 IES and 28 ISS. Notified 11 February, "
               "applications closed 3 March, exam held 19 to 21 June 2026. Pattern and "
               "salary guide.")
assert 150 <= len(description) <= 160, f"description {len(description)}c"

fields = {
    "description": description,
    "vacancies": 44,
    "last_date": "2026-03-03",
    "important_dates": {
        "notificationDate": "2026-02-11",
        "startDate": "2026-02-11",
        "lastDate": "2026-03-03",
        "examDate": "19 to 21 June 2026",
        "note": ("UPSC notified this cycle on 11 February 2026 and applications closed on "
                 "3 March 2026 at 6:00 PM. The written examination was held from 19 to 21 "
                 "June 2026. An earlier version of this page carried predicted dates of a "
                 "September 2026 notification and a 2027 exam, which were already wrong "
                 "when written. No dates are given for the next cycle until UPSC publishes "
                 "them on upsc.gov.in."),
    },
    "content": content,
}

probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["2026-10-15", "2027-06-15", "2026-09-10", "October 2026 |", "September 2026 |"]:
        if bad in s:
            stale.append((k, bad))
print(f"stale predicted-date references remaining: {len(stale)}")
for k, bad in stale:
    print(f"   {k}: {bad}")
assert not stale, "a predicted date survived"
print(f"preflight OK: description={len(description)}c vacancies=44")

mod.apply("jobs", SLUG, fields,
    reason=("Page written 16 Jul 2026 predicted a Sept 2026 notification and 2027 exam "
            "for a cycle UPSC had already notified on 11 Feb 2026 and examined 19-21 Jun "
            "2026. Prose hedged; last_date, important_dates and vacancies did not, and fed "
            "JobPosting schema. Repositioned to the real cycle; vacancies 50 -> 44."))
