"""
One-off script: Deactivate jobs that match quality criteria.

Conditions (any one triggers deactivation):
1. important_dates values ALL say "To be announced" (case-insensitive)
2. Title contains entrance exam keywords (JEE, NEET, CUET, CMAT)
3. Content contains "certain date" or "will be announced by NTA"

Usage:
  python scripts/deactivate_jobs.py            # dry run (default)
  python scripts/deactivate_jobs.py --apply    # actually update rows
"""

from __future__ import annotations

import os
import re
import sys
import json
import argparse
from pathlib import Path

from dotenv import load_dotenv
from supabase import create_client

# ---------------------------------------------------------------------------

ENTRANCE_EXAM_PATTERN = re.compile(
    r"\b(JEE|NEET|CUET|CMAT)\b", re.IGNORECASE
)

CONTENT_BAD_PHRASES = [
    "certain date",
    "will be announced by nta",
]


def load_env():
    env_path = Path(__file__).resolve().parent.parent / ".env.local"
    if env_path.exists():
        load_dotenv(env_path)


def get_supabase():
    url = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not key:
        print("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
        sys.exit(1)
    return create_client(url, key)


def all_dates_tba(important_dates) -> bool:
    """Return True if every value in important_dates is 'To be announced' or null."""
    if not important_dates or not isinstance(important_dates, dict):
        return False  # empty/missing dates — not the same as all TBA

    values = list(important_dates.values())
    if not values:
        return False

    for v in values:
        if v is None or str(v).strip() == "":
            continue
        if str(v).strip().lower() != "to be announced":
            return False  # found a real date

    return True


def is_entrance_exam(title: str) -> bool:
    return bool(ENTRANCE_EXAM_PATTERN.search(title or ""))


def content_has_bad_phrases(content: str) -> bool:
    lower = (content or "").lower()
    return any(phrase in lower for phrase in CONTENT_BAD_PHRASES)


def main():
    parser = argparse.ArgumentParser(
        description="Deactivate jobs matching quality criteria"
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Actually update rows (default is dry run)",
    )
    args = parser.parse_args()

    load_env()
    sb = get_supabase()

    print("Fetching active jobs...")
    resp = (
        sb.table("jobs")
        .select("id, slug, title, important_dates, content, category")
        .eq("is_active", True)
        .execute()
    )
    jobs = resp.data or []
    print(f"  Found {len(jobs)} active jobs\n")

    matched = []

    for job in jobs:
        reasons = []
        title = job.get("title", "")
        content = job.get("content", "")
        dates = job.get("important_dates")

        if all_dates_tba(dates):
            reasons.append("all dates TBA")

        if is_entrance_exam(title):
            reasons.append(f"entrance exam in title")

        if content_has_bad_phrases(content):
            phrases_found = [
                p for p in CONTENT_BAD_PHRASES if p in (content or "").lower()
            ]
            reasons.append(f"bad phrase: {', '.join(phrases_found)}")

        if reasons:
            matched.append((job, reasons))

    if not matched:
        print("No jobs matched the criteria. Nothing to do.")
        return

    print(f"{'DRY RUN — ' if not args.apply else ''}{len(matched)} jobs matched:\n")
    print(f"{'#':<4} {'Slug':<55} {'Reasons'}")
    print("-" * 110)
    for i, (job, reasons) in enumerate(matched, 1):
        slug = job.get("slug", "?")[:54]
        print(f"{i:<4} {slug:<55} {'; '.join(reasons)}")

    if not args.apply:
        print(f"\nDry run complete. Pass --apply to deactivate these {len(matched)} jobs.")
        return

    # Apply updates
    print(f"\nDeactivating {len(matched)} jobs...")
    success = 0
    failed = 0
    for job, reasons in matched:
        try:
            sb.table("jobs").update({"is_active": False}).eq("id", job["id"]).execute()
            success += 1
        except Exception as e:
            print(f"  Error updating {job.get('slug')}: {e}")
            failed += 1

    print(f"\nDone. Deactivated: {success}, failed: {failed}")


if __name__ == "__main__":
    main()
