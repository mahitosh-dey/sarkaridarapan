"""
SarkariDarapan Job & Scheme Scraper

Scrapes government portals for job notifications and scheme announcements,
checks Supabase for duplicates, and inserts new entries as unpublished
drafts (is_active=false) for AI rewriting before publication.
"""

from __future__ import annotations

import os
import re
import sys
import logging
from datetime import datetime, timezone
from pathlib import Path

import requests
import urllib3
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from supabase import create_client, Client

# Suppress InsecureRequestWarning — government sites often have broken SSL certs
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

logging.basicConfig(level=logging.INFO, format="%(message)s")
log = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Environment & Supabase
# ---------------------------------------------------------------------------

def load_env():
    """Load environment variables from .env.local if it exists (skipped in CI)."""
    env_path = Path(__file__).resolve().parent.parent / ".env.local"
    if env_path.exists():
        load_dotenv(env_path)
    else:
        log.info("No .env.local found — using environment variables directly")


def get_supabase() -> Client:
    """Return an authenticated Supabase client using the service role key."""
    url = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not key:
        log.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
        sys.exit(1)
    return create_client(url, key)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _session() -> requests.Session:
    """Return a requests session with SSL verification disabled."""
    s = requests.Session()
    s.verify = False
    s.headers.update({
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        )
    })
    return s


def generate_slug(title: str) -> str:
    """Convert a title to a URL-friendly slug, appending the current year."""
    text = title.lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s-]+", "-", text).strip("-")
    year = str(datetime.now().year)
    if not text.endswith(year):
        text = f"{text}-{year}"
    return text


def row_exists(client: Client, table: str, slug: str) -> bool:
    """Check whether a row with the given slug already exists."""
    resp = client.table(table).select("slug").eq("slug", slug).execute()
    return len(resp.data) > 0


def save_rows(client: Client, table: str, rows: list[dict]) -> int:
    """Insert a list of row dicts into Supabase. Returns count inserted."""
    if not rows:
        return 0
    resp = client.table(table).insert(rows).execute()
    return len(resp.data)


def _parse_vacancies(text: str) -> int:
    """Try to extract a vacancy count from text like '1000+ vacancies'."""
    m = re.search(r"(\d[\d,]+)\s*(?:\+\s*)?(?:vacanc|post|opening)", text, re.I)
    if m:
        return int(m.group(1).replace(",", ""))
    return 0


def _parse_date(text: str) -> str:
    """Try to find a date string like '15-06-2025' or '15/06/2025' in text."""
    m = re.search(r"\d{1,2}[/-]\d{1,2}[/-]\d{4}", text)
    return m.group(0) if m else ""


# ---------------------------------------------------------------------------
# Title Validation
# ---------------------------------------------------------------------------

def is_valid_title(title):
    """Validate a scraped title before saving. Returns True if title is OK."""
    bad_patterns = ["{{", "translate", "Loading...", "undefined", "null"]
    if not title or len(title) < 10:
        return False
    for pattern in bad_patterns:
        if pattern in title:
            return False
    return True


def _make_job(
    title: str,
    organization: str,
    category: str,
    official_link: str,
    notification_link: str = "",
    description: str = "",
    vacancies: int = 0,
    last_date: str = "",
    state: str = "all-india",
) -> dict:
    """Build a job dict matching the Supabase jobs table schema."""
    slug = generate_slug(title)
    return {
        "slug": slug,
        "title": title.strip(),
        "organization": organization,
        "vacancies": vacancies or _parse_vacancies(title),
        "last_date": last_date,
        "official_link": official_link,
        "category": category,
        "state": state,
        "is_active": False,
        "description": (description or title)[:200],
        "notification_link": notification_link or official_link,
    }


def _make_scheme(
    title: str,
    ministry: str,
    category: str,
    official_portal: str,
    description: str = "",
    objective: str = "",
    state: str = "all-india",
) -> dict:
    """Build a scheme dict matching the Supabase schemes table schema."""
    slug = generate_slug(title)
    return {
        "slug": slug,
        "title": title.strip(),
        "ministry": ministry,
        "category": category,
        "state": state,
        "description": (description or title)[:200],
        "objective": objective or description or title,
        "official_portal": official_portal,
    }


# ---------------------------------------------------------------------------
# Job Scrapers (SSC + IBPS only — static HTML sites)
# ---------------------------------------------------------------------------

def scrape_ssc() -> list[dict]:
    """Scrape latest notifications from SSC (ssc.gov.in)."""
    jobs: list[dict] = []
    url = "https://ssc.gov.in"
    session = _session()

    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach SSC: {e}")
        return jobs

    soup = BeautifulSoup(resp.text, "html.parser")

    # SSC uses various containers for notices — look for common patterns
    # Try notice/notification sections and anchor tags with recruitment keywords
    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        # Filter to recruitment-related links
        if not text or len(text) < 15:
            continue
        if not is_valid_title(text):
            log.info(f"    Skipped (SSC): invalid title — {text[:80]!r}")
            continue
        keywords = ["recruitment", "vacancy", "examination", "notification",
                     "admit card", "result", "apply", "cgl", "chsl", "mts",
                     "gd constable", "si", "je", "steno"]
        if not any(kw in text.lower() for kw in keywords):
            continue

        # Deduplicate by normalized title
        norm = text.lower().strip()
        if norm in seen_titles:
            continue
        seen_titles.add(norm)

        # Resolve relative URLs
        if href.startswith("/"):
            href = url + href
        elif not href.startswith("http"):
            href = url + "/" + href

        last_date = _parse_date(text)
        jobs.append(_make_job(
            title=text,
            organization="Staff Selection Commission (SSC)",
            category="SSC",
            official_link=href,
            last_date=last_date,
        ))

    return jobs


def scrape_ibps() -> list[dict]:
    """Scrape latest notifications from IBPS (ibps.in)."""
    jobs: list[dict] = []
    url = "https://www.ibps.in"
    session = _session()

    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach IBPS: {e}")
        return jobs

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 15:
            continue
        if not is_valid_title(text):
            log.info(f"    Skipped (IBPS): invalid title — {text[:80]!r}")
            continue
        keywords = ["clerk", "po", "so", "rrb", "recruitment", "notification",
                     "vacancy", "apply", "examination", "cwe", "officer",
                     "probationary", "specialist"]
        if not any(kw in text.lower() for kw in keywords):
            continue

        norm = text.lower().strip()
        if norm in seen_titles:
            continue
        seen_titles.add(norm)

        if href.startswith("/"):
            href = url + href
        elif not href.startswith("http"):
            href = url + "/" + href

        last_date = _parse_date(text)
        jobs.append(_make_job(
            title=text,
            organization="IBPS",
            category="Banking",
            official_link=href,
            last_date=last_date,
        ))

    return jobs


# ---------------------------------------------------------------------------
# Scheme Scrapers
# ---------------------------------------------------------------------------

def scrape_myscheme() -> list[dict]:
    """Scrape government schemes from MyScheme (myscheme.gov.in)."""
    schemes: list[dict] = []
    url = "https://www.myscheme.gov.in"
    session = _session()

    try:
        resp = session.get(f"{url}/find-scheme", timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach MyScheme: {e}")
        return schemes

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 10:
            continue
        if not is_valid_title(text):
            log.info(f"    Skipped (MyScheme): invalid title — {text[:80]!r}")
            continue
        keywords = ["scheme", "yojana", "mission", "programme", "program",
                     "abhiyan", "pension", "scholarship", "subsidy",
                     "insurance", "loan", "benefit", "grant", "allowance"]
        if not any(kw in text.lower() for kw in keywords):
            continue

        norm = text.lower().strip()
        if norm in seen_titles:
            continue
        seen_titles.add(norm)

        if href.startswith("/"):
            href = url + href
        elif not href.startswith("http"):
            href = url + "/" + href

        schemes.append(_make_scheme(
            title=text,
            ministry="Government of India",
            category="Central Scheme",
            official_portal=href,
        ))

    return schemes


def scrape_pmindia() -> list[dict]:
    """Scrape flagship government schemes from pmindia.gov.in."""
    schemes: list[dict] = []
    url = "https://www.pmindia.gov.in/en/major_initiatives/"
    session = _session()

    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach PM India: {e}")
        return schemes

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 10:
            continue
        if not is_valid_title(text):
            log.info(f"    Skipped (PMIndia): invalid title — {text[:80]!r}")
            continue
        keywords = ["yojana", "mission", "scheme", "programme", "abhiyan",
                     "initiative", "pradhan mantri", "digital india",
                     "make in india", "swachh", "ujjwala", "mudra",
                     "ayushman", "kisan", "jan dhan"]
        if not any(kw in text.lower() for kw in keywords):
            continue

        norm = text.lower().strip()
        if norm in seen_titles:
            continue
        seen_titles.add(norm)

        if href.startswith("/"):
            href = "https://www.pmindia.gov.in" + href
        elif not href.startswith("http"):
            href = "https://www.pmindia.gov.in/" + href

        schemes.append(_make_scheme(
            title=text,
            ministry="Prime Minister's Office",
            category="Central Scheme",
            official_portal=href,
        ))

    return schemes


def scrape_india_gov_schemes() -> list[dict]:
    """Scrape scheme listings from india.gov.in."""
    schemes: list[dict] = []
    url = "https://www.india.gov.in/my-government/schemes"
    session = _session()

    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach India.gov.in: {e}")
        return schemes

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 10:
            continue
        if not is_valid_title(text):
            log.info(f"    Skipped (India.gov): invalid title — {text[:80]!r}")
            continue
        keywords = ["scheme", "yojana", "mission", "programme", "pension",
                     "insurance", "scholarship", "subsidy", "welfare",
                     "benefit", "employment", "housing", "health",
                     "education", "skill", "mudra", "kisan"]
        if not any(kw in text.lower() for kw in keywords):
            continue

        norm = text.lower().strip()
        if norm in seen_titles:
            continue
        seen_titles.add(norm)

        if href.startswith("/"):
            href = "https://www.india.gov.in" + href
        elif not href.startswith("http"):
            href = "https://www.india.gov.in/" + href

        schemes.append(_make_scheme(
            title=text,
            ministry="Government of India",
            category="Central Scheme",
            official_portal=href,
        ))

    return schemes


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    load_env()
    client = get_supabase()

    # ── Jobs (SSC + IBPS only) ─────────────────────────────────────────────
    job_scrapers = [
        ("SSC", scrape_ssc),
        ("IBPS", scrape_ibps),
    ]

    all_jobs: list[dict] = []

    for name, scraper_fn in job_scrapers:
        log.info(f"Scraping {name}...")
        try:
            found = scraper_fn()
        except Exception as e:
            log.warning(f"  Error scraping {name}: {e}")
            found = []
        log.info(f"  Found {len(found)} notifications")
        all_jobs.extend(found)

    # Final validation pass — reject anything that slipped through
    valid_jobs: list[dict] = []
    for j in all_jobs:
        if is_valid_title(j["title"]):
            valid_jobs.append(j)
        else:
            log.info(f"  Skipped job (final filter): {j['title'][:80]!r}")
    if len(valid_jobs) < len(all_jobs):
        log.info(f"  Filtered out {len(all_jobs) - len(valid_jobs)} invalid job titles")
    all_jobs = valid_jobs

    # Deduplicate across scrapers by slug
    unique_jobs: dict[str, dict] = {}
    for job in all_jobs:
        if job["slug"] not in unique_jobs:
            unique_jobs[job["slug"]] = job

    log.info("Checking for duplicate jobs...")
    new_jobs = [j for j in unique_jobs.values() if not row_exists(client, "jobs", j["slug"])]
    log.info(f"  {len(new_jobs)} new jobs to insert")

    if new_jobs:
        log.info("Saving jobs to Supabase...")
        count = save_rows(client, "jobs", new_jobs)
        log.info(f"  Inserted {count} new jobs (is_active=false)")
    else:
        log.info("  Nothing new to insert.")

    # ── Schemes ────────────────────────────────────────────────────────────
    scheme_scrapers = [
        ("MyScheme.gov.in", scrape_myscheme),
        ("PM India", scrape_pmindia),
        ("India.gov.in Schemes", scrape_india_gov_schemes),
    ]

    all_schemes: list[dict] = []

    for name, scraper_fn in scheme_scrapers:
        log.info(f"Scraping {name}...")
        try:
            found = scraper_fn()
        except Exception as e:
            log.warning(f"  Error scraping {name}: {e}")
            found = []
        log.info(f"  Found {len(found)} schemes")
        all_schemes.extend(found)

    # Final validation pass for schemes
    valid_schemes: list[dict] = []
    for s in all_schemes:
        if is_valid_title(s["title"]):
            valid_schemes.append(s)
        else:
            log.info(f"  Skipped scheme (final filter): {s['title'][:80]!r}")
    if len(valid_schemes) < len(all_schemes):
        log.info(f"  Filtered out {len(all_schemes) - len(valid_schemes)} invalid scheme titles")
    all_schemes = valid_schemes

    unique_schemes: dict[str, dict] = {}
    for s in all_schemes:
        if s["slug"] not in unique_schemes:
            unique_schemes[s["slug"]] = s

    log.info("Checking for duplicate schemes...")
    new_schemes = [s for s in unique_schemes.values() if not row_exists(client, "schemes", s["slug"])]
    log.info(f"  {len(new_schemes)} new schemes to insert")

    if new_schemes:
        log.info("Saving schemes to Supabase...")
        count = save_rows(client, "schemes", new_schemes)
        log.info(f"  Inserted {count} new schemes (is_active=false)")
    else:
        log.info("  Nothing new to insert.")

    log.info("Done.")


if __name__ == "__main__":
    main()
