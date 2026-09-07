#!/usr/bin/env python3
"""
Find pages whose application window has CLOSED but which still read as "apply now".

The companion to audit-stale-deadlines.py. That one asks whether a date is
wrong. This one asks whether a page whose date is RIGHT is still framed around
an action the reader can no longer take.

A page that says "Apply by 7 Sep" in its title, three weeks after 7 September,
is not lying about the date. It is selling a closed window, which wastes the
click and reads as neglect to both the reader and to Google.

Title and description matter most: they are what appears in search results, and
they are the part a reader acts on before ever reaching the page.

Read-only. Ranked by how long the window has been shut.
"""
import json, re, sys
from datetime import date

TODAY = date.today()

APPLY_INTENT = re.compile(
    r"\bapply (?:by|before|online|now|from)\b|\bapply@|\bapplication (?:open|window open)"
    r"|\bregistration (?:open|begins|started)\b|\blast date to apply\b|\bapply\b",
    re.I)

# Wording that already signals the window is shut. A page carrying these is
# framed correctly and is not reported.
CLOSED_INTENT = re.compile(
    r"\bclosed\b|\bconcluded\b|\bwindow (?:has )?closed\b|\bapplications closed\b"
    r"|\bexam (?:held|was held)\b|\badmit card\b|\bresult\b|\banswer key\b"
    r"|\bwhat happens next\b|\bpost-application\b", re.I)


def iso(s):
    if not isinstance(s, str):
        return None
    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})", s.strip())
    if not m:
        return None
    try:
        return date(int(m[1]), int(m[2]), int(m[3]))
    except ValueError:
        return None


findings = []
for table, route, field in [("jobs", "/sarkari-naukri", "last_date"),
                            ("entrance_exams", "/entrance-exams", "application_end")]:
    for r in json.load(open(f"data/{table}.json")):
        if r.get("is_active") is not True:
            continue
        d = iso(r.get(field) or "")
        if not d or d >= TODAY:
            continue
        closed_days = (TODAY - d).days

        title = r.get("title") or ""
        desc = r.get("description") or ""
        hits = []
        for label, text in (("title", title), ("description", desc)):
            if APPLY_INTENT.search(text) and not CLOSED_INTENT.search(text):
                hits.append(label)
        if hits:
            findings.append((closed_days, table, route, r["slug"], hits, title, desc))

print(f"Today is {TODAY}.\n")
print(f"CLOSED WINDOWS STILL FRAMED AS 'APPLY NOW': {len(findings)}\n")
for days, table, route, slug, hits, title, desc in sorted(findings, reverse=True):
    print(f"  closed {days:>3}d ago  [{table[:6]}] {slug}   ({', '.join(hits)})")
    print(f"      title: {title}")
    print(f"      desc : {desc[:150]}")
    print()

print("Pages whose title or description already signals a closed window are not listed.")
sys.exit(0)
