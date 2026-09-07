#!/usr/bin/env python3
"""
NVS PGT TGT 2026: the structured date fields blended two different recruitments.

Verified 2026-09-05 against Testbook, Adda247, CareerPower, FreeJobAlert and
the regional NVS notifications.

Navodaya Vidyalaya Samiti runs TWO tracks, and the page's 3,232-word body
handles them correctly, with a dedicated "Regular CBT track versus contractual
walk-in track" section. The structured columns did not:

  exam_date         "PGT admit card 8 Jan 2026, TGT Tier-1 CBT 10-11 Jan 2026,
                     TGT Tier-2 CBT 29 Mar 2026"      <- REGULAR track
  application_start 2026-04-03                        <- CONTRACTUAL track
  application_end   2026-04-17                        <- CONTRACTUAL track

Rendered together, that told a reader the exam finished in March 2026 while
applications stayed open until 17 April 2026. applicationEnd also fed
validThrough in the page's schema, so Google was handed an application deadline
that belongs to no actual track.

WHAT IS TRUE:
  Regular track, CBSE-conducted KVS-NVS Common Recruitment 2026, 5,841 NVS
  vacancies, notified 13 November 2025. Applications ran 14 November to
  4 December 2025 and are long closed. Tier 1 CBT was held on 10 and 11
  January 2026.

  Contractual track, region-wise walk-in recruitment for the 2026-27 session,
  has NO single national window. Each regional office sets its own: Pune
  walk-ins 6 to 8 April 2026, Shillong registration 13 to 28 April with
  interviews 6 to 9 May, Bhopal applications to 30 April, Lucknow 10 to 18 May.

So 3 to 17 April 2026 is not the deadline for either track. It is cleared
rather than replaced, per the project rule: strip the fabrication, do not
substitute a different guess. The body already explains both tracks, and the
exam_date string now names which track its dates belong to.
"""
import os
import importlib.util
spec = importlib.util.spec_from_file_location(
    "apply_data_fix", os.path.join(os.path.dirname(os.path.abspath(__file__)), "apply-data-fix.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

mod.apply(
    "entrance_exams",
    "nvs-pgt-tgt-2026",
    {
        "exam_date": (
            "Regular CBSE track: TGT Tier 1 CBT held 10 and 11 January 2026. "
            "Contractual track for the 2026-27 session: region-wise walk-in "
            "interviews, with dates set separately by each NVS regional office."
        ),
        "application_start": None,
        "application_end": None,
    },
    reason=(
        "Structured fields blended two NVS recruitments: exam dates from the "
        "regular CBSE track with an application window that matched neither. "
        "The contractual track has no national window, only regional ones. "
        "Cleared rather than replaced; the 3,232-word body already separates "
        "the two tracks correctly."
    ),
)
