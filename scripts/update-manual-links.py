#!/usr/bin/env python3
"""
Refresh the Pending section of manual_link.md.

Why this is generated rather than hand-written: the queue changes every time a
page is corrected, and a hand-maintained list goes stale in exactly the way the
pages themselves were going stale. Running this after a batch of fixes keeps the
submission order honest.

ORDERING. Newest correction first, then longest. Both halves matter. Google is
being asked to spend a crawl on this URL, and a page whose facts were corrected
this week is a better use of that crawl than one untouched since July, because
the version Google holds is the one from June. Length is the tiebreak, not the
driver.

EXCLUSIONS. Anything already listed in the Priority 1 or Priority 2 blocks, and
anything already ticked off in the Submitted log, so the pending list only ever
shows work not yet done. Inactive rows and redirected slugs never appear.

Read-only apart from manual_link.md itself.
"""
import json, re, sys
from datetime import date

DOC = "manual_link.md"
SITE = "https://www.sarkaridarapan.com"
PER_DAY = 10
ROUTES = {"jobs": "/sarkari-naukri", "schemes": "/sarkari-yojana",
          "entrance_exams": "/entrance-exams", "blog_posts": "/blog"}
START, END = "<!-- PENDING:START -->", "<!-- PENDING:END -->"


def already_listed(doc: str) -> set[str]:
    """Every sarkaridarapan URL that appears above the pending block or in the log."""
    head = doc.split(START)[0]
    tail = doc.split(END)[-1] if END in doc else ""
    found = re.findall(rf"{re.escape(SITE)}(/[^\s\)|]*)", head + tail)
    return {u.rstrip("/") or "/" for u in found}


def candidates(skip: set[str]):
    rows = []
    for table, route in ROUTES.items():
        try:
            data = json.load(open(f"data/{table}.json"))
        except FileNotFoundError:
            continue
        for r in data:
            if not r.get("is_active"):
                continue
            path = f"{route}/{r['slug']}"
            if path in skip:
                continue
            rows.append({
                "path": path,
                "words": len((r.get("content") or "").split()),
                "updated": str(r.get("updated_at") or "")[:10],
                "title": (r.get("title") or "")[:52],
            })
    rows.sort(key=lambda x: (x["updated"], x["words"]), reverse=True)
    return rows


def render(rows) -> str:
    if not rows:
        return "Nothing pending. Every active page is either submitted or listed above.\n"
    out = [f"{len(rows)} pages pending, newest correction first. "
           f"Generated {date.today()}.\n"]
    for i in range(0, min(len(rows), PER_DAY * 5), PER_DAY):
        batch = rows[i:i + PER_DAY]
        out.append(f"\n**Batch {i // PER_DAY + 1}** ({len(batch)} URLs, one day's quota)\n")
        for r in batch:
            out.append(f"- [ ] {SITE}{r['path']}")
            out.append(f"      <!-- {r['updated']} · {r['words']}w · {r['title']} -->")
    remaining = len(rows) - PER_DAY * 5
    if remaining > 0:
        out.append(f"\n_{remaining} further pages below this cut. Regenerate after working "
                   f"through the batches above; by then the ordering will have changed anyway._")
    return "\n".join(out) + "\n"


def main() -> int:
    try:
        doc = open(DOC, encoding="utf-8").read()
    except FileNotFoundError:
        print(f"ABORT: {DOC} not found. Run from the repository root.")
        return 1
    if START not in doc or END not in doc:
        print(f"ABORT: {DOC} is missing the {START} / {END} markers.")
        return 1

    skip = already_listed(doc)
    rows = candidates(skip)
    body = render(rows)

    head, rest = doc.split(START, 1)
    _, tail = rest.split(END, 1)
    open(DOC, "w", encoding="utf-8").write(f"{head}{START}\n{body}{END}{tail}")

    print(f"{DOC} updated.")
    print(f"  excluded as already listed or submitted: {len(skip)}")
    print(f"  pending: {len(rows)}")
    for r in rows[:5]:
        print(f"    {r['updated']}  {r['words']:5d}w  {r['path']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
