#!/usr/bin/env python3
"""
Apply a field-level fix to data/*.json AND record it for replay into Supabase.

Why the log matters: the site now renders from data/*.json, but Supabase is
still the authoring database and is cut off until 19 September. Any fix made
directly to the JSON would be silently REVERTED the next time the tables are
re-exported. Every change therefore appends to data/sync/pending-supabase.json
so scripts/replay-to-supabase.mjs can push the same edits back once the API is
reachable.

Usage: import and call apply(table, slug, {field: value, ...}, reason)
"""
import json, os, sys
from datetime import datetime, timezone

PENDING = "data/sync/pending-supabase.json"


def apply(table, slug, changes, reason):
    path = f"data/{table}.json"
    rows = json.load(open(path))
    row = next((r for r in rows if r.get("slug") == slug), None)
    if row is None:
        print(f"ABORT: {table}/{slug} not found")
        sys.exit(1)

    before = {k: row.get(k) for k in changes}
    if before == changes:
        print(f"  no change needed for {table}/{slug}")
        return

    print(f"\n{table}/{slug}")
    for k, new in changes.items():
        print(f"  {k}")
        print(f"    before: {str(before.get(k))[:150]!r}")
        print(f"    after : {str(new)[:150]!r}")
        row[k] = new

    stamp = datetime.now(timezone.utc).isoformat(sep=" ", timespec="seconds")
    row["updated_at"] = stamp
    print(f"  updated_at -> {stamp}")

    with open(path, "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=0, separators=(",", ":"))

    pending = json.load(open(PENDING)) if os.path.exists(PENDING) else []
    pending.append({
        "recorded_at": datetime.now(timezone.utc).isoformat(),
        "table": table,
        "slug": slug,
        "changes": changes,
        "previous": before,
        "reason": reason,
        "applied_to_supabase": False,
    })
    with open(PENDING, "w", encoding="utf-8") as f:
        json.dump(pending, f, ensure_ascii=False, indent=2)
    print(f"  recorded in {PENDING} for replay into Supabase")


if __name__ == "__main__":
    print("This module is imported by fix scripts, not run directly.")
