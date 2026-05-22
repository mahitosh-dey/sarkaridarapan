#!/usr/bin/env python3
"""
Single-URL scraper for the admin dashboard.

Downloads the notification page/PDF, extracts structured data, and inserts
a draft job (is_active=false) into Supabase for the admin to review and
trigger Groq content generation from the dashboard.

Usage:
    python scripts/scrape_single.py \
        --url "https://example.gov.in/notification.pdf" \
        --title "SSC CGL 2025 Recruitment" \
        --org "SSC" \
        --category "ssc" \
        --state "all-india"
"""

from __future__ import annotations

import argparse
import sys
import logging

logging.basicConfig(level=logging.INFO, format="%(message)s")
log = logging.getLogger(__name__)

# Import shared helpers from scraper.py (same directory)
from scraper import (
    load_env,
    get_supabase,
    _session,
    _process_notification_pdf,
    _make_job,
    row_exists,
    save_rows,
)


def main():
    parser = argparse.ArgumentParser(
        description="Scrape a single notification URL and insert as a draft job"
    )
    parser.add_argument("--url", required=True, help="Notification URL (page or PDF)")
    parser.add_argument("--title", required=True, help="Job title")
    parser.add_argument("--org", required=True, help="Organization name")
    parser.add_argument("--category", required=True, help="Job category slug")
    parser.add_argument("--state", default="all-india", help="State slug (default: all-india)")
    args = parser.parse_args()

    load_env()
    client = get_supabase()
    session = _session()

    log.info(f"Scraping: {args.url}")
    log.info(f"Title: {args.title}")
    log.info(f"Org: {args.org}, Category: {args.category}, State: {args.state}")

    # Extract base URL for resolving relative PDF links
    from urllib.parse import urlparse
    parsed = urlparse(args.url)
    base_url = f"{parsed.scheme}://{parsed.netloc}"

    # Attempt PDF extraction
    log.info("Attempting PDF extraction...")
    pdf_data = _process_notification_pdf(session, args.url, base_url)
    if pdf_data:
        log.info(f"Extracted PDF fields: {list(pdf_data.keys())}")
    else:
        log.info("No PDF data extracted (page may not have a downloadable PDF)")

    # Build the job record
    job = _make_job(
        title=args.title,
        organization=args.org,
        category=args.category,
        official_link=args.url,
        notification_link=args.url,
        state=args.state,
        pdf_data=pdf_data if pdf_data else None,
    )

    # Mark as manual draft
    job["quality_flag"] = ["manual_draft"]

    slug = job["slug"]
    log.info(f"Generated slug: {slug}")
    log.info(f"Completeness score: {job.get('completeness_score', 0)}")

    # Check for duplicate
    if row_exists(client, "jobs", slug):
        log.error(f"Job with slug '{slug}' already exists. Aborting.")
        sys.exit(1)

    # Insert into Supabase
    count = save_rows(client, "jobs", [job])
    if count > 0:
        log.info(f"Draft job inserted successfully: {slug}")
    else:
        log.error("Failed to insert job into Supabase")
        sys.exit(1)


if __name__ == "__main__":
    main()
