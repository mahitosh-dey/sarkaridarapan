#!/usr/bin/env python3
"""
GATE 2027: page written in anticipation, never updated once IIT Madras announced.

Verified 2026-09-07 against pw.live and news.kollegeapply.com, which agree
exactly, and consistent with testbook and shiksha coverage:

    Registration opened          2 September 2026
    Last date WITHOUT late fee   27 September 2026
    Last date WITH late fee      5 October 2026
    Conducting institute         IIT Madras
    Exam dates                   6, 7, 13, 14, 20 and 21 February 2027

The page was written on 7 July 2026, before any of that was published, and
said "Registration opens: August 2026", "Last date to apply (regular fee):
September 30, 2026" and "Late fee window: Early October 2026". Reasonable
guesses at the time; wrong now.

The 30 September figure is the damaging one. It is three days AFTER the real
regular deadline, so a reader planning around this page would miss the
no-late-fee window entirely and either pay the late fee or lose the cycle. The
real deadline is 20 days out at the time of writing, so this is live.

Found by scripts/audit-stale-deadlines.py, which flagged the page as carrying a
deadline inside 45 days while untouched for 62 days. That combination is the
signal: extensions and confirmations land close to the original date, so a page
that has not been touched since well before its own deadline is the most likely
to be stale.

Title deliberately unchanged. It carries no date, so it cannot go stale, and a
deadline 20 days out has no business in a title that will outlive it.
"""
import os, importlib.util, json

spec = importlib.util.spec_from_file_location("apply_data_fix", "scripts/apply-data-fix.py")
mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)

SLUG = "gate-2027"
rows = json.load(open("data/entrance_exams.json"))
row = next(r for r in rows if r["slug"] == SLUG)
content = row["content"]

edits = [
    ("| Registration opens | **August 2026** |",
     "| Registration opens | **2 September 2026** |"),
    ("| Last date to apply (regular fee) | **September 30, 2026** |",
     "| Last date to apply (no late fee) | **27 September 2026** |"),
    ("| Late fee window | Early October 2026 |",
     "| Last date with late fee | **5 October 2026** |"),
    # The intro carried the same guesses, plus a wrong exam schedule: it said
    # February 7, 8, 14 and 15, where IIT Madras has published 6, 7, 13, 14,
    # 20 and 21. Four listed days, two of them wrong, and two real days missing.
    ("Registration is expected in August 2026 and the exam runs across "
     "February 7, 8, 14, and 15, 2027.",
     "Registration opened on 2 September 2026 and closes on 27 September, or "
     "5 October with a late fee. The exam runs across six days: February 6, 7, "
     "13, 14, 20 and 21, 2027."),
]
for old, new in edits:
    assert old in content, f"not found: {old}"
    content = content.replace(old, new, 1)

description = ("GATE 2027 by IIT Madras: apply by 27 September 2026, or 5 October "
               "with a late fee. Exam on 6, 7, 13, 14, 20 and 21 February 2027 for "
               "M.Tech and PSU hiring.")
assert 150 <= len(description) <= 160, f"description {len(description)}c"

fields = {
    "description": description,
    "application_start": "2026-09-02",
    "application_end": "2026-09-27",
    "exam_date": "6, 7, 13, 14, 20 and 21 February 2027",
    "content": content,
}

# Check EVERY field for the superseded dates, not just the one being edited.
# The NSP fix earlier today missed a stale date sitting in `faqs`.
probe = dict(row); probe.update(fields)
stale = []
for k, v in probe.items():
    s = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
    for bad in ["September 30, 2026", "30 September 2026", "2026-09-30", "August 2026"]:
        if bad in s:
            stale.append((k, bad))
print(f"stale date references remaining: {len(stale)}")
for k, bad in stale:
    print(f"   {k}: {bad}")
assert not stale, "a superseded date survived"
print(f"preflight OK: description={len(description)}c")

mod.apply("entrance_exams", SLUG, fields,
    reason=("Page written 7 Jul 2026 in anticipation; IIT Madras has since "
            "published the real schedule. Stated regular deadline of 30 Sep was "
            "three days AFTER the real 27 Sep cutoff, so a reader would have "
            "missed the no-late-fee window."))
