#!/usr/bin/env python3
"""
Find pages whose stated deadline may have moved since the page was written.

Motivated by the NSP page, which was written on 21 July 2026 stating a
Pre-Matric deadline of 31 August, then went stale when that deadline was
extended to 30 September. Nothing in the page was fabricated; it simply aged.
That is the most damaging error this site can publish, because a reader plans
around the date.

Two signals, neither of which needs an external source:

  RECENTLY PASSED   a deadline that fell in the last 60 days. Either the page
                    should be repositioned to the post-application stage, or
                    the deadline was extended and the page never caught up.

  APPROACHING       a deadline inside the next 45 days, where the page has not
                    been touched since well before it. Extensions are announced
                    close to the original date, so an untouched page here is
                    the most likely to be wrong.

Read-only. Ranked by risk, worst first.
"""
import json, re, sys
from datetime import date, datetime, timedelta

TODAY = date.today()
MONTHS = {m: i for i, m in enumerate(
    ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"], 1)}


def iso(s):
    if not isinstance(s, str):
        return None
    m = re.match(r"^(\d{4})-(\d{2})-(\d{2})", s.strip())
    if m:
        try:
            return date(int(m[1]), int(m[2]), int(m[3]))
        except ValueError:
            return None
    return None


def updated(row):
    d = iso(row.get("updated_at") or "")
    return d


def deadlines_in_text(text):
    """Explicit 'deadline / last date / closes on' dates stated in prose."""
    out = []
    if not isinstance(text, str):
        return out
    for m in re.finditer(
        r"(?:deadline|last date|closes? on|close on|apply by|until)\D{0,40}?"
        r"(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})", text, re.I):
        mo = MONTHS.get(m[2][:3].lower())
        if not mo:
            continue
        try:
            out.append(date(int(m[3]), mo, int(m[1])))
        except ValueError:
            pass
    return out


rows = []
for table, route, field in [
    ("jobs", "/sarkari-naukri", "last_date"),
    ("entrance_exams", "/entrance-exams", "application_end"),
    ("schemes", "/sarkari-yojana", None),
]:
    for r in json.load(open(f"data/{table}.json")):
        if r.get("is_active") is not True:
            continue
        upd = updated(r)
        cands = []
        if field:
            d = iso(r.get(field) or "")
            if d:
                cands.append((d, field))
        # Schemes have no deadline column, so read the prose.
        for d in deadlines_in_text(r.get("content")):
            cands.append((d, "content"))
        if not cands:
            continue
        # The deadline that matters is the soonest one still meaningful.
        future = sorted([c for c in cands if c[0] >= TODAY])
        past = sorted([c for c in cands if c[0] < TODAY], reverse=True)
        pick = future[0] if future else past[0]
        rows.append((table, route, r["slug"], pick[0], pick[1], upd))

passed, approaching = [], []
for t, route, slug, d, src, upd in rows:
    age = (TODAY - upd).days if upd else None
    if TODAY - timedelta(days=60) <= d < TODAY:
        passed.append((d, t, route, slug, src, upd, age))
    elif TODAY <= d <= TODAY + timedelta(days=45):
        # Riskiest when the page has not been touched recently.
        approaching.append((d, t, route, slug, src, upd, age))

print(f"Today is {TODAY}. Scanned {len(rows)} active pages carrying a deadline.\n")

print(f"=== A. DEADLINE PASSED IN THE LAST 60 DAYS: {len(passed)} ===")
print("    Either reposition to the post-application stage, or the date was extended.\n")
for d, t, route, slug, src, upd, age in sorted(passed):
    print(f"  {d}  [{t[:6]}] {slug}")
    print(f"              from {src}, page last updated {upd} ({age} days ago)")

print(f"\n=== B. DEADLINE WITHIN 45 DAYS: {len(approaching)} ===")
print("    Extensions are announced close to the original date. Verify the ones")
print("    whose page has not been touched since well before the deadline.\n")
for d, t, route, slug, src, upd, age in sorted(approaching):
    days_out = (d - TODAY).days
    flag = "  <-- untouched for 30+ days" if age and age > 30 else ""
    print(f"  {d}  (in {days_out:>2}d)  [{t[:6]}] {slug}{flag}")
    print(f"              from {src}, page last updated {upd} ({age} days ago)")

sys.exit(0)
