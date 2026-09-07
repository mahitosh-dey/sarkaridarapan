#!/usr/bin/env python3
"""
Cycle-conflation audit over data/*.json.

DETECTION RULE, which needs no external source: an examination cannot precede
its own application window. If a stored exam date ENDS BEFORE the application
window CLOSES, that exam date belongs to a different recruitment cycle.

This is stronger than comparing years, which false-positives on legitimate
notified-in-year-N / examined-in-N+1 recruitments.

Three pages have already been caught by hand this way: AAI JE ATC (a concluded
2025 cycle conflated with the open 2026 one), RRB Technician (CBT dates from
CEN 02/2025 attached to CEN 02/2026), and DSSSB, where the stored exam window
actually belonged to advertisement 03/25 rather than 03/2026.

Read-only. Reports, writes nothing.

Replaces scripts/day32-1-conflation-audit.mjs, which queried Supabase and so
could never run during the egress outage.
"""
import json, re, sys
from datetime import date

MONTHS = {m: i for i, m in enumerate(
    ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"], 1)}

NON_DATES = re.compile(
    r"^(not announced|tba|to be announced|awaited|expected|nil|n/?a|-{1,2})$", re.I)


def extract(raw):
    """Return (first, last, fuzzy) as ISO strings, or None."""
    if not isinstance(raw, str):
        return None
    s = raw.strip()
    if not s or NON_DATES.match(s):
        return None

    found = []
    for m in re.finditer(r"\b(\d{4})-(\d{2})-(\d{2})\b", s):
        found.append(f"{m[1]}-{m[2]}-{m[3]}")
    for m in re.finditer(r"\b(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})\b", s):
        mo = MONTHS.get(m[2][:3].lower())
        if mo:
            found.append(f"{m[3]}-{mo:02d}-{int(m[1]):02d}")

    if found:
        found.sort()
        return found[0], found[-1], False

    # Bare "July 2026": widen to the whole month so a month-level value can
    # never manufacture a precise-looking conflict.
    bare = []
    for m in re.finditer(r"\b([A-Za-z]{3,9})\s+(\d{4})\b", s):
        mo = MONTHS.get(m[1][:3].lower())
        if mo:
            bare.append((int(m[2]), mo))
    if not bare:
        return None
    fy, fm = bare[0]
    ly, lm = bare[-1]
    last_day = 31
    for d in (31, 30, 29, 28):
        try:
            date(ly, lm, d); last_day = d; break
        except ValueError:
            continue
    return f"{fy}-{fm:02d}-01", f"{ly}-{lm:02d}-{last_day:02d}", True


# A field is a CLEAN date value if it is essentially just dates and
# connectors. Prose that happens to mention dates ("expected October to
# November 2026. AAI had not published a date as of 14 August 2026") is not,
# and a date lifted out of it cannot be compared as though it were the field's
# value. Two of the first three findings were exactly that mistake.
PROSE = re.compile(r"[a-z]{4,}")

def is_clean_date_value(raw):
    if not isinstance(raw, str):
        return False
    stripped = re.sub(
        r"\d{4}-\d{2}-\d{2}|\d{1,2}\s+[A-Za-z]{3,9}\s+\d{4}|[A-Za-z]{3,9}\s+\d{4}",
        " ", raw)
    stripped = re.sub(r"\b(to|and|or|from|tier|cbt|paper|shift|session|exam|st|nd|rd|th)\b",
                      " ", stripped, flags=re.I)
    # Anything left that looks like a word means this is prose.
    return not PROSE.search(stripped.lower())


def pick(obj, *keys):
    if not isinstance(obj, dict):
        return None
    for k in keys:
        v = obj.get(k)
        if isinstance(v, str) and v.strip():
            return v
    return None


findings = []
prose = []

def check(table, route, rows, get_exam, get_close, get_open):
    for r in rows:
        if r.get("is_active") is not True:
            continue
        exam_raw, close_raw, open_raw = get_exam(r), get_close(r), get_open(r)
        exam = extract(exam_raw)
        if not exam:
            continue

        # Only compare when the exam field IS a date value. Otherwise flag it
        # for a human rather than asserting a conflict from a parsed fragment.
        if not is_clean_date_value(exam_raw):
            prose.append((table, route, r["slug"], exam_raw))
            continue

        close, opn = extract(close_raw), extract(open_raw)

        if close and exam[1] < close[1]:
            findings.append((table, route, r["slug"],
                             f"exam ends {exam[1]} but applications close {close[1]}",
                             exam_raw, close_raw, exam[2] or close[2]))
        elif opn and exam[0] < opn[0]:
            findings.append((table, route, r["slug"],
                             f"exam starts {exam[0]} but applications open {opn[0]}",
                             exam_raw, open_raw, exam[2] or opn[2]))


jobs = json.load(open("data/jobs.json"))
exams = json.load(open("data/entrance_exams.json"))

check("jobs", "/sarkari-naukri", jobs,
      lambda r: pick(r.get("important_dates"), "examDate", "exam_date"),
      lambda r: pick(r.get("important_dates"), "lastDate") or r.get("last_date"),
      lambda r: pick(r.get("important_dates"), "startDate"))

check("entrance_exams", "/entrance-exams", exams,
      lambda r: r.get("exam_date"),
      lambda r: r.get("application_end"),
      lambda r: r.get("application_start"))

active_jobs = sum(1 for r in jobs if r.get("is_active") is True)
active_exams = sum(1 for r in exams if r.get("is_active") is True)
print(f"Scanned {active_jobs} active jobs and {active_exams} active exams.\n")
print(f"IMPOSSIBLE DATE ORDERINGS: {len(findings)}")
for t, route, slug, detail, ex, cl, fuzzy in findings:
    print(f"\n  [{t}] {slug}{'  (month-level, verify by hand)' if fuzzy else ''}")
    print(f"     {detail}")
    print(f"     examDate : {ex!r}")
    print(f"     window   : {cl!r}")
    print(f"     https://www.sarkaridarapan.com{route}/{slug}")

print(f"\n\nPROSE EXAM-DATE FIELDS, not auto-checkable: {len(prose)}")
print("(dates inside a sentence cannot be compared as a field value; skim these)")
for t, route, slug, raw in prose:
    print(f"\n  [{t}] {slug}")
    print(f"     {str(raw)[:150]}")

sys.exit(0)
