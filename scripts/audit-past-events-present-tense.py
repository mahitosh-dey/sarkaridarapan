#!/usr/bin/env python3
"""
Find events that have happened, still written as though they have not.

The gap the other four audits left. RRB Group D said "the CBT window is 3 to 21
August 2026, and admit cards release on 31 July 2026" on 21 September, a month
after the exam finished, and every audit reported it clean:

  apply-intent    needs "apply" wording in the title or description
  stale-deadline  reads application_end only, and only within 60 days
  relative-time   matches distances ("a month from now"), not stated dates
  conflation      the internal ordering was consistent

None of them asks the plain question: does this sentence describe the present?

THE SIGNATURE is a date already in the past, governed by a present or future
tense verb. "The exam IS 13 September" is correct in August and wrong in
October. "Admit cards RELEASE on 31 July" likewise. Past-tense wording about the
same date is fine, and is how a correctly maintained page reads.

Read-only. Ranked by how long ago the date passed, since an event three months
gone is more embarrassing than one from last week.
"""
import json, re, sys
from datetime import date

TODAY = date.today()
MONTHS = {m: i for i, m in enumerate(
    ["january","february","march","april","may","june","july","august",
     "september","october","november","december"], 1)}
MON_RE = "|".join(MONTHS)

# A date written out, e.g. "13 September 2026" or "September 13, 2026".
DATE_RE = re.compile(
    rf"\b(\d{{1,2}})\s+({MON_RE})\s+(\d{{4}})\b|\b({MON_RE})\s+(\d{{1,2}}),?\s+(\d{{4}})\b", re.I)

# Verbs asserting the event is still ahead, or currently happening.
FUTURE = re.compile(
    r"\b(is|are|runs?|will|shall|releases?|opens?|closes?|begins?|starts?|"
    r"takes place|scheduled for|due on|happens?|falls? on|expected on)\b", re.I)

# Wording that correctly places it behind us. If present, not a finding.
PAST = re.compile(
    r"\b(was|were|had|has been|have been|held|ran|closed on|released on|"
    r"concluded|finished|took place|happened|ended|completed|done|over|"
    r"previous|last year|earlier|preceding|historical|cycle\b)\b", re.I)

# A date only matters here if the sentence is about an EVENT. The first version
# of this audit matched any past date near any present-tense verb and reported
# 116 pages, almost all false: "born between 2 July 1990 and 1 July 2008" is an
# eligibility window, "launched on 5 April 2016" is a historical fact, "accounts
# opened after 28 August 2018" is a rule. An audit that cries wolf gets ignored,
# which is the failure this project already fixed in the sitemap and twice in
# the relative-time audit.
EVENT = re.compile(
    r"\b(exam|cbt|cbe|test|paper|admit card|hall ticket|call letter|result|"
    r"interview|ssb|notification|registration|application|window|prelims|"
    r"preliminary|mains|counselling|answer key|last date|deadline|apply)\b", re.I)

# Phrasing that marks a date as a rule or a birth bound rather than an event.
NOT_AN_EVENT = re.compile(
    r"\b(born|birth|date of birth|launched|established|introduced|inception|"
    r"since|opened after|enrolled|as on|with effect from|w\.e\.f|commenced in|"
    r"between)\b", re.I)

# An event more than a year past stated in present tense is a different and much
# rarer problem. Restricting to the last year keeps this about pages that have
# simply not been updated since their event ran.
MAX_AGE_DAYS = 365

# Markdown table rows are timelines. "| Applications open | 15 September 2025 |"
# uses a present-tense COLUMN LABEL against a historical date, which is how a
# timeline is supposed to read. Matching those produced most of the second
# round's 73 findings. FAQ question lines are the same: "**What is the last date
# to apply?**" carries the verb in the question, and the answer below it is a
# fact, not a claim about the present.
#
# The defect this audit exists for lives in PROSE: "the CBT window is 3 to 21
# August 2026" written in a paragraph a month after the exam.
SKIP_LINE = re.compile(r"^\s*(\||\*\*.*\?\*\*\s*$|#{1,6}\s)")


def prose_only(text):
    """Blank out table rows, FAQ questions and headings, keeping offsets."""
    out = []
    for line in text.split("\n"):
        out.append(" " * len(line) if SKIP_LINE.match(line) else line)
    return "\n".join(out)


FIELDS = ["content", "description", "title", "exam_date", "how_to_apply",
          "important_dates", "selection_process"]


def parse(m):
    if m.group(1):
        d, mo, y = int(m.group(1)), MONTHS[m.group(2).lower()], int(m.group(3))
    else:
        mo, d, y = MONTHS[m.group(4).lower()], int(m.group(5)), int(m.group(6))
    try:
        return date(y, mo, d)
    except ValueError:
        return None


findings = []
for table, route in [("jobs", "/sarkari-naukri"), ("schemes", "/sarkari-yojana"),
                     ("entrance_exams", "/entrance-exams"), ("blog_posts", "/blog")]:
    for r in json.load(open(f"data/{table}.json")):
        if r.get("is_active") is not True:
            continue
        hits = []
        for f in FIELDS:
            v = r.get(f)
            if v is None:
                continue
            text = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
            text = re.sub(r"https?://\S+", " ", text)
            text = prose_only(text)
            for m in DATE_RE.finditer(text):
                d = parse(m)
                if not d or d >= TODAY:
                    continue
                # The governing verb sits just before the date.
                days_past = (TODAY - d).days
                if days_past > MAX_AGE_DAYS:
                    continue
                lead = text[max(0, m.start() - 70):m.start()]
                if not FUTURE.search(lead) or PAST.search(lead):
                    continue
                if NOT_AN_EVENT.search(lead) or not EVENT.search(lead):
                    continue
                ctx = text[max(0, m.start() - 90):min(len(text), m.end() + 45)]
                hits.append((days_past, f, m.group(0), ctx.replace("\n", " ").strip()))
        if hits:
            hits.sort(reverse=True)
            findings.append((hits[0][0], table, route, r["slug"], hits))

findings.sort(reverse=True)
print(f"Today is {TODAY}.\n")
print(f"PAST EVENTS STILL WRITTEN AS UPCOMING: {len(findings)} pages\n")
for worst, table, route, slug, hits in findings:
    print(f"  {worst:>4}d past  [{table[:6]}] {slug}   ({len(hits)} phrase(s))")
    for days, f, datestr, ctx in hits[:2]:
        print(f"        {f}: \"{datestr}\"  passed {days}d ago")
        print(f"          ...{ctx[:140]}...")
    print()
sys.exit(0)
