#!/usr/bin/env python3
"""
Four pages still sold a closed application window from their TITLE.

Found by scripts/audit-stale-apply-intent.py, which reports pages whose window
has shut but whose title or description still reads as "apply now". Twenty
pages matched; these four carry it in the title, which is what appears in a
search result, so they are the ones actively wasting the click.

    upsssc-forest-guard-2026      "Apply by 20 July"     closed 49 days
    nbems-recruitment-2026        "Apply by 20 Jul"      closed 49 days
    indian-navy-ssc-officer-2026  "Apply by 27 Jul"      closed 42 days
    ibps-clerk-2026               "Apply by 21 August"   closed 17 days

Nothing here is factually wrong. The dates are correct. The framing is stale:
each page is built around an action the reader can no longer take, while the
stage they actually care about now (exam, SSB, prelims, result) is buried.

NEW TITLES CARRY NO DATE, deliberately. A title is the part that outlives the
cycle, and "Apply by 20 July" is what put these pages here in the first place.
That is the same call made on GATE 2027 earlier today, and the opposite of the
NSP title, which does carry dates because the queries reaching it literally ask
for them. The rule that reconciles them: a date belongs in a title only when
the date IS the query, and then it needs a refresh date of its own.

Current stage for each is taken from the page's own documented dates, not
invented: UPSSSC main exam awaited with PST/PET after, NBEMS CBT scheduled
5 and 6 September, Navy SSB called individually by email, IBPS Clerk prelims
10 and 11 October with mains 27 December.

Descriptions now open by saying applications are closed, which is both true and
what makes the audit stop reporting them.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

FIXES = [
 ("upsssc-forest-guard-2026",
  "UPSSSC Forest Guard 2026: 708 Posts, Exam Pattern and PET",
  "UPSSSC Forest Guard 2026 applications closed on 20 July. 708 posts for PET "
  "2025 qualified candidates. Main exam awaited, then the physical test. Full guide.",
  "Applications closed 49 days ago; title still read 'Apply by 20 July'. "
  "Repositioned to the main exam and PST/PET stage."),

 ("nbems-recruitment-2026",
  "NBEMS Recruitment 2026: 53 Central Government Posts Guide",
  "NBEMS Recruitment 2026 applications closed on 20 July for 53 permanent posts at "
  "the New Delhi HQ. CBT was set for 5 and 6 September. Pattern and salary.",
  "Applications closed 49 days ago; title still read 'Apply by 20 Jul'. "
  "Repositioned to the CBT and result stage."),

 ("indian-navy-ssc-officer-2026",
  "Indian Navy SSC Officer 2026: 275 Posts, SSB and Training",
  "Indian Navy SSC Officer 2026 applications closed on 27 July. 275 posts across 12 "
  "branches. SSB call-ups go out by email, training from June 2027 at INA.",
  "Applications closed 42 days ago; title still read 'Apply by 27 Jul'. "
  "Repositioned to the SSB interview stage."),

 ("ibps-clerk-2026",
  "IBPS Clerk 2026: 11,403 CSA Posts, Prelims and Mains Guide",
  "IBPS Clerk 2026 applications closed on 21 August for 11,403 Customer Service "
  "Associate posts. Prelims 10 and 11 October, mains 27 December. Pattern guide.",
  "Applications closed 17 days ago; title still read 'Apply by 21 August'. "
  "Repositioned to the prelims and mains stage."),
]

rows = json.load(open("data/jobs.json"))
ok = True
for slug, title, desc, _ in FIXES:
    t, d = len(title), len(desc)
    flag = "" if (50 <= t <= 65 and 150 <= d <= 160) else "   <-- OUT OF RANGE"
    print(f"  {slug:<32} title={t}c desc={d}c{flag}")
    if flag:
        ok = False
    assert next((r for r in rows if r["slug"] == slug), None), f"{slug} not found"
    # A title must not smuggle a date back in.
    for bad in ["Apply by", "apply by", "Apply Online", "Apply Now"]:
        assert bad not in title, f"{slug}: apply-intent survived in title"
assert ok, "a title or description is outside the length limits"
print("\npreflight OK\n")

for slug, title, desc, reason in FIXES:
    mod.apply("jobs", slug, {"title": title, "description": desc}, reason=reason)
