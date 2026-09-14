#!/usr/bin/env python3
"""
Find relative time that rots.

The third defect class, and the one no other audit catches. The deadline audit
asks whether a date is wrong. The apply-intent audit asks whether a window is
still framed as open. Both miss this, because nothing here is a date and
nothing is a window:

    "roughly a month from now"
    "the session is now open for registration"
    "the decision needs making now rather than in late August"

Every one was true on the day it was written and false on a fixed schedule
afterwards. MAT September 2026 carried all three; on 14 September its "roughly a
month from now" pointed at a deadline a week past, for an exam held the day
before. Project memory records 27 rows of this found once already, so it recurs.

RISK IS AGE, NOT WORDING. A phrase like "next month" is fine on a page edited
yesterday and rotten on one untouched since July. Findings are ranked by how
long the page has sat, and anything under 14 days old is reported separately as
low risk rather than flagged.

Read-only.
"""
import json, re, sys
from datetime import date, datetime

TODAY = date.today()

# Phrases whose truth depends on when they are read.
PATTERNS = [
    # Distance from the moment of writing. Always rots.
    (r"\b(?:roughly |about |around )?(?:a|one|two|three|four|five|six|several|a few) (?:days?|weeks?|months?) (?:from now|away)\b", "distance from now"),
    (r"\b\d+ (?:days?|weeks?|months?) (?:from now|away|left|remaining)\b", "countdown"),
    # Claims that something is open or current AT READING TIME.
    (r"\bis open now\b", "open-now claim"),
    (r"\b(?:open|ongoing|live|available) right now\b", "open-now claim"),
    (r"\bnow open for (?:registration|applications?)\b", "open-now claim"),
    (r"\bcurrently (?:open|ongoing|live|accepting)\b", "open-now claim"),
    (r"\btoday is the last\b", "today-is claim"),
    (r"\bUPCOMING\b", "shouted upcoming"),
    (r"\bwill be (?:released|announced) shortly\b", "shortly"),
    (r"\brather than in (?:late |early |mid[- ])?(?:January|February|March|April|May|June|July|August|September|October|November|December)\b", "advice keyed to a month"),
]

# Deliberately NOT flagged: bare "next month", "this month", "in the coming
# weeks". The first run matched 25 pages and most were legitimate process
# language, "the missed month is clubbed with the next month's credit", "first
# full-length mock in this month". An audit that cries wolf gets ignored, which
# is the same failure this project just fixed in the sitemap. These patterns
# only match claims that are about the reader's present moment.


FIELDS = ["content", "description", "title", "how_to_apply", "selection_process",
          "eligibility", "important_dates", "exam_date", "faqs"]


def age_days(row):
    v = row.get("updated_at")
    if not isinstance(v, str):
        return None
    try:
        d = datetime.fromisoformat(v.replace("Z", "+00:00")).date()
    except ValueError:
        try:
            d = datetime.strptime(v[:10], "%Y-%m-%d").date()
        except ValueError:
            return None
    return (TODAY - d).days


hits = []
for table, route in [("jobs", "/sarkari-naukri"), ("schemes", "/sarkari-yojana"),
                     ("entrance_exams", "/entrance-exams"), ("blog_posts", "/blog")]:
    for r in json.load(open(f"data/{table}.json")):
        if r.get("is_active") is not True:
            continue
        age = age_days(r)
        found = []
        for f in FIELDS:
            v = r.get(f)
            if v is None:
                continue
            text = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
            for pat, label in PATTERNS:
                for m in re.finditer(pat, text, re.I):
                    a, b = max(0, m.start() - 55), min(len(text), m.end() + 55)
                    found.append((f, label, m.group(0), text[a:b].replace("\n", " ")))
        if found:
            hits.append((age if age is not None else 9999, table, route, r["slug"], found))

hits.sort(reverse=True)
stale = [h for h in hits if h[0] >= 14]
fresh = [h for h in hits if h[0] < 14]

print(f"Today is {TODAY}.\n")
print(f"RELATIVE TIME ON PAGES UNTOUCHED 14+ DAYS: {len(stale)}")
print("   The phrase was true when written. The page has not been edited since.\n")
for age, table, route, slug, found in stale:
    print(f"  {age:>4}d old  [{table[:6]}] {slug}")
    for f, label, phrase, ctx in found[:3]:
        print(f"        {f}: \"{phrase}\"  ({label})")
        print(f"          ...{ctx.strip()[:130]}...")
    if len(found) > 3:
        print(f"        ... and {len(found) - 3} more in this page")
    print()

print(f"\nSAME PHRASES ON RECENTLY EDITED PAGES: {len(fresh)}")
print("   Lower risk; the writer saw them recently.\n")
for age, table, route, slug, found in fresh:
    print(f"  {age:>4}d old  [{table[:6]}] {slug}: {', '.join(sorted({p for _, _, p, _ in found}))[:110]}")

sys.exit(0)
