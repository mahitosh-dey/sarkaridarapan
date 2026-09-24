#!/usr/bin/env python3
"""
Find pages whose opening claims a live stage for a cycle that has closed.

The sixth defect class, and the five existing audits all miss it because every
sentence on the page is grammatically correct and in the right tense.

    "## JEE Advanced 2026: Result Is Out, Counselling Is Live"
    "## UGC NET June 2026: Everything You Need to Know Before June 22"

Both were true when written. Neither contains a present-tense verb governing a
passed date, so audit-past-events-present-tense passes them. Neither frames a
closed application window as open, so audit-stale-apply-intent passes them.
Neither says "next month", so audit-relative-time passes them. What is wrong is
the FRAMING: the headline asserts the reader has arrived mid-cycle, while the
cycle finished months ago. On 24 September 2026 the JEE page was telling readers
to fill JoSAA choices before 11 June, and JoSAA had closed on 16 July.

THE TEST. A page whose opening asserts a live stage should be able to point at
something still ahead of it. So: find live-stage language in the title and the
first few paragraphs, then look for any future date anywhere on the page. A
genuinely live page has one. A page that has nothing ahead of it and still says
"happening now" is stale at the stage level.

This is a heuristic, not a proof. Ongoing schemes with no fixed calendar are the
expected false positive, which is why the output shows the newest date found so
a reader can judge in one glance. Findings are ranked by how long the page has
sat untouched, because risk here is age.

Read-only.
"""
import json, re, sys
from datetime import date, datetime

TODAY = date.today()
DATA = ("jobs", "schemes", "entrance_exams", "blog_posts")
ROUTE = {"jobs": "/sarkari-naukri", "schemes": "/sarkari-yojana",
         "entrance_exams": "/entrance-exams", "blog_posts": "/blog"}

# Framing that tells the reader they have arrived while something is happening.
LIVE = re.compile(
    r"\b("
    r"is live|are live|counselling is live|"
    r"happening now|is ongoing|are ongoing|"
    r"right now|as we speak|"
    r"everything you need to know before|"
    r"if you'?re reading this|if you are reading this|"
    r"is expected by \w+ \d{1,2}|"
    r"slip is out|window is open now|currently open"
    r")\b", re.I)

MONTHS = {m: i + 1 for i, m in enumerate(
    "January February March April May June July August September "
    "October November December".split())}
DATE_PATTERNS = [
    re.compile(r"\b(\d{1,2}) ([A-Z][a-z]+),? (20\d{2})\b"),
    re.compile(r"\b([A-Z][a-z]+) (\d{1,2}),? (20\d{2})\b"),
]


def dates_in(text):
    """Every parseable date on the page, as date objects."""
    found = []
    for pat in DATE_PATTERNS:
        for m in pat.finditer(text):
            a, b, y = m.groups()
            if a in MONTHS:
                mon, day = MONTHS[a], b
            elif b in MONTHS:
                mon, day = MONTHS[b], a
            else:
                continue
            try:
                found.append(date(int(y), mon, int(day)))
            except ValueError:
                continue
    return found


def age_days(row):
    raw = str(row.get("updated_at") or "")[:10]
    try:
        return (TODAY - datetime.strptime(raw, "%Y-%m-%d").date()).days
    except ValueError:
        return 0


def main():
    findings = []
    for table in DATA:
        try:
            rows = json.load(open(f"data/{table}.json"))
        except FileNotFoundError:
            continue
        for row in rows:
            if not row.get("is_active"):
                continue
            content = row.get("content") or ""
            opening = "\n".join(content.split("\n")[:14])
            phrases = sorted({m.group(0).lower()
                              for m in LIVE.finditer(f"{row.get('title','')} {opening}")})
            if not phrases:
                continue
            found = dates_in(content)
            future = [d for d in found if d > TODAY]
            if future:
                continue                       # something is still ahead: plausibly live
            newest = max(found) if found else None
            findings.append((age_days(row), table, row["slug"], phrases, newest))

    findings.sort(reverse=True)
    print(f"Today is {TODAY}.\n")
    print(f"PAGES CLAIMING A LIVE STAGE WITH NOTHING AHEAD OF THEM: {len(findings)}\n")
    for age, table, slug, phrases, newest in findings:
        stale = f"newest date on page: {newest}" if newest else "no dates found on page"
        print(f"  {age:5d}d since edit  [{table[:6]}] {ROUTE[table]}/{slug}")
        print(f"        says: {', '.join(repr(p) for p in phrases[:3])}")
        print(f"        {stale}")
    if not findings:
        print("  none")
    return 0


if __name__ == "__main__":
    sys.exit(main())
