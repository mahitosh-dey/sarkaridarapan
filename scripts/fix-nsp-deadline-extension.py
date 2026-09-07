#!/usr/bin/env python3
"""
NSP 2026-27: the Pre-Matric deadline moved and the page still showed the old one.

Verified 2026-09-05 against school.careers360.com/articles/nsp-scholarship-last-date-2026-27,
which states: "The last date to apply for pre-matric scholarships and post-matric
scholarships has been extended till September 30, 2026 and October 31, 2026,
respectively."

The page was last written on 21 July 2026, when 31 August was correct. It has
been wrong since the extension. That is worse than a thin page: it told a
reader the Pre-Matric window had closed on 31 August when applications were in
fact still open until 30 September. The page draws 124 impressions a month on
"nsp last date 2026" and "nsp scholarship last date 2026", which is exactly the
reader who would act on it.

CARE TAKEN ON A CONFLATION RISK. Most coverage of this extension is about
NMMSS, the National Means-cum-Merit Scholarship Scheme, which is a different
scheme from the Pre-Matric SC/ST/OBC/Minorities scholarships in our table.
Treating one as the other is the same defect class fixed on the AAI, RRB,
DSSSB and NVS pages this week. The careers360 source states the extension for
pre-matric scholarships as a category, and places NMMS inside that category, so
the category-level change is supported. The page keeps its existing advice to
confirm the specific scheme on scholarships.gov.in, and the wording attributes
the extension rather than asserting it flatly.

Post-Matric is unchanged at 31 October 2026.

Title and description also now lead with the dates, because the queries that
reach this page ask for exactly that.
"""
import os, importlib.util

spec = importlib.util.spec_from_file_location(
    "apply_data_fix", os.path.join(os.path.dirname(os.path.abspath(__file__)), "apply-data-fix.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

import json
rows = json.load(open("data/schemes.json"))
row = next(r for r in rows if r["slug"] == "national-scholarship-portal-nsp-2026-27-2026")
content = row["content"]

OLD_PROSE = (
    "For AY 2026-27, the portal opened for fresh registrations on 1 June 2026. "
    "Two deadlines matter now. Pre-Matric applications close on 31 August 2026 "
    "and Post-Matric applications close on 31 October 2026."
)
NEW_PROSE = (
    "For AY 2026-27, the portal opened for fresh registrations on 1 June 2026. "
    "Two deadlines matter now. Pre-Matric applications close on 30 September 2026, "
    "extended from the original 31 August, and Post-Matric applications close on "
    "31 October 2026."
)
assert OLD_PROSE in content, "prose paragraph not found"
content = content.replace(OLD_PROSE, NEW_PROSE, 1)

OLD_ROW = "| Pre-Matric SC/ST/OBC/Minorities | 31 August 2026 | 31 August 2026 |"
NEW_ROW = "| Pre-Matric SC/ST/OBC/Minorities | 30 September 2026 | 30 September 2026 |"
assert OLD_ROW in content, "table row not found"
content = content.replace(OLD_ROW, NEW_ROW, 1)

OLD_NOTE = ("Deadline structure by scheme category, based on scholarships.gov.in "
            "student announcements as of July 2026.")
NEW_NOTE = ("Deadline structure by scheme category. The Pre-Matric deadline was "
            "extended from 31 August to 30 September 2026, per Careers360's tracking "
            "of the scholarships.gov.in student announcements. Confirm your own "
            "scheme on the portal before relying on any date here, because "
            "extensions are announced per category rather than all at once.")
assert OLD_NOTE in content, "table caption not found"
content = content.replace(OLD_NOTE, NEW_NOTE, 1)

title = "NSP Last Date 2026-27: 30 Sep Pre-Matric, 31 Oct Post-Matric"
description = (
    "NSP 2026-27 deadlines: Pre-Matric extended to 30 September and Post-Matric "
    "31 October 2026. Face authentication, fresh vs renewal, ranked rejection fixes."
)
assert 50 <= len(title) <= 65, f"title {len(title)}c"
assert 150 <= len(description) <= 160, f"description {len(description)}c"
for bad in ["—", "–", "“", "”"]:
    assert bad not in title + description + content, "dash or smart quote introduced"
assert "31 August 2026" not in content, "a stale 31 August reference survived"

print(f"preflight OK: title={len(title)}c description={len(description)}c")

mod.apply(
    "schemes",
    "national-scholarship-portal-nsp-2026-27-2026",
    {"title": title, "description": description, "content": content},
    reason=("Pre-Matric NSP deadline extended 31 Aug -> 30 Sep 2026; page still "
            "showed the old date and told readers a live window had closed. "
            "Title and description now lead with the dates, matching the "
            "'nsp last date 2026' queries that reach this page."),
)
