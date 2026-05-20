"""
SarkariDarapan Job & Scheme Scraper

Scrapes government portals for job notifications and scheme announcements,
checks Supabase for duplicates, and inserts new entries as unpublished
drafts (is_active=false) for AI rewriting before publication.
"""

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

try:
    from playwright.sync_api import sync_playwright
    HAS_PLAYWRIGHT = True
except ImportError:
    HAS_PLAYWRIGHT = False

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


_BAD_TITLE_PATTERNS = ["{{", "translate", "loading"]

# Minimum number of alphabetic words (3+ letters each) a title must contain
_MIN_REAL_WORDS = 2


def _validate_title(title: str) -> str | None:
    """Validate a scraped title. Returns a reason string if invalid, None if OK."""
    stripped = title.strip()
    if not stripped:
        return "empty"
    lower = stripped.lower()
    for pat in _BAD_TITLE_PATTERNS:
        if pat in lower:
            return f"contains '{pat}'"
    if len(stripped) > 200:
        return f"too long ({len(stripped)} chars)"
    real_words = [w for w in re.findall(r"[a-zA-Z]{3,}", stripped)]
    if len(real_words) < _MIN_REAL_WORDS:
        return "no real words (only symbols/codes)"
    return None


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
# Job Scrapers
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


def scrape_railways() -> list[dict]:
    """Scrape latest notifications from Indian Railways recruitment page."""
    jobs: list[dict] = []
    url = (
        "https://indianrailways.gov.in/railwayboard/"
        "view_section.jsp?lang=0&id=0,7,1281"
    )
    session = _session()

    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach Indian Railways: {e}")
        return jobs

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 15:
            continue
        keywords = ["recruitment", "vacancy", "notification", "rrb", "rrc",
                     "ntpc", "group d", "alp", "technician", "apprentice",
                     "apply", "engagement"]
        if not any(kw in text.lower() for kw in keywords):
            continue

        norm = text.lower().strip()
        if norm in seen_titles:
            continue
        seen_titles.add(norm)

        # Railway site uses relative paths with different patterns
        if href.startswith("/"):
            href = "https://indianrailways.gov.in" + href
        elif not href.startswith("http"):
            href = (
                "https://indianrailways.gov.in/railwayboard/" + href
            )

        last_date = _parse_date(text)
        jobs.append(_make_job(
            title=text,
            organization="Indian Railways",
            category="Railway",
            official_link=href,
            last_date=last_date,
        ))

    return jobs


def scrape_upsc() -> list[dict]:
    """Scrape latest notifications from UPSC (upsc.gov.in)."""
    jobs: list[dict] = []
    url = "https://www.upsc.gov.in"
    notices_url = f"{url}/notices"
    session = _session()

    try:
        resp = session.get(notices_url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach UPSC: {e}")
        return jobs

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 15:
            continue
        keywords = ["recruitment", "vacancy", "examination", "notification",
                     "advt", "apply", "civil services", "ies", "ifs", "nda",
                     "cds", "capf", "epfo", "cms", "geo-scientist",
                     "engineering", "medical", "combined", "lateral"]
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
            organization="Union Public Service Commission (UPSC)",
            category="UPSC",
            official_link=href,
            last_date=last_date,
        ))

    return jobs


def scrape_nta() -> list[dict]:
    """Scrape latest exam notifications from NTA (nta.ac.in)."""
    jobs: list[dict] = []
    url = "https://www.nta.ac.in"
    session = _session()

    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach NTA: {e}")
        return jobs

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 15:
            continue
        keywords = ["neet", "jee", "cuet", "ugc net", "csir net", "gate",
                     "cmat", "gpat", "icar", "duet", "examination",
                     "notification", "registration", "admit card", "result",
                     "apply", "exam", "test"]
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
            organization="National Testing Agency (NTA)",
            category="Entrance Exam",
            official_link=href,
            last_date=last_date,
        ))

    return jobs


def scrape_bpsc() -> list[dict]:
    """Scrape latest notifications from BPSC (bpsc.bih.nic.in)."""
    jobs: list[dict] = []
    url = "https://www.bpsc.bih.nic.in"
    session = _session()

    try:
        resp = session.get(url, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        log.warning(f"  Could not reach BPSC: {e}")
        return jobs

    soup = BeautifulSoup(resp.text, "html.parser")

    links = soup.find_all("a", href=True)
    seen_titles: set[str] = set()

    for link in links:
        text = link.get_text(strip=True)
        href = link["href"]

        if not text or len(text) < 15:
            continue
        keywords = ["recruitment", "vacancy", "examination", "notification",
                     "advt", "advertisement", "apply", "admit card", "result",
                     "combined", "teacher", "judicial", "pcs", "engineer",
                     "professor", "lecturer", "assistant"]
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
            organization="Bihar Public Service Commission (BPSC)",
            category="State PSC",
            official_link=href,
            last_date=last_date,
            state="bihar",
        ))

    return jobs


def scrape_uppsc() -> list[dict]:
    """Scrape latest notifications from UPPSC (uppsc.up.nic.in).

    UPPSC uses AngularJS for rendering so a plain HTTP GET returns template
    strings like ``{{'Examinations_HM' | translate}}``.  We use Playwright
    (headless Chromium) to let JavaScript execute before reading the DOM.
    """
    jobs: list[dict] = []
    url = "https://uppsc.up.nic.in"

    if not HAS_PLAYWRIGHT:
        log.warning("  Playwright not installed — skipping UPPSC (pip install playwright && playwright install chromium)")
        return jobs

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(
                user_agent=(
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) "
                    "Chrome/120.0.0.0 Safari/537.36"
                ),
                ignore_https_errors=True,
            )
            page.goto(url, wait_until="networkidle", timeout=60000)
            # Wait for Angular to finish rendering
            page.wait_for_timeout(3000)

            # Extract all links from the rendered DOM
            link_data = page.evaluate("""() => {
                return Array.from(document.querySelectorAll('a[href]')).map(a => ({
                    text: a.innerText.trim(),
                    href: a.href,
                }));
            }""")

            browser.close()
    except Exception as e:
        log.warning(f"  Playwright error scraping UPPSC: {e}")
        return jobs

    seen_titles: set[str] = set()
    keywords = ["recruitment", "vacancy", "examination", "notification",
                 "advt", "advertisement", "apply", "admit card", "result",
                 "combined", "pcs", "ro", "aro", "review officer",
                 "lecturer", "medical", "dental", "engineer", "teacher"]

    for item in link_data:
        text = item.get("text", "")
        href = item.get("href", "")

        if not text or len(text) < 15:
            continue
        reason = _validate_title(text)
        if reason:
            log.info(f"    Skipped (UPPSC): {reason} — {text[:80]!r}")
            continue
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
            organization="Uttar Pradesh Public Service Commission (UPPSC)",
            category="State PSC",
            official_link=href,
            last_date=last_date,
            state="uttar-pradesh",
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

    # ── Jobs ───────────────────────────────────────────────────────────────
    job_scrapers = [
        ("SSC", scrape_ssc),
        ("IBPS", scrape_ibps),
        ("Indian Railways", scrape_railways),
        ("UPSC", scrape_upsc),
        ("NTA", scrape_nta),
        ("BPSC", scrape_bpsc),
        ("UPPSC", scrape_uppsc),
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

    # Validate all titles before saving
    valid_jobs: list[dict] = []
    for j in all_jobs:
        reason = _validate_title(j["title"])
        if reason:
            log.info(f"  Skipped job: {reason} — {j['title'][:80]!r}")
        else:
            valid_jobs.append(j)
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

    # Validate all scheme titles before saving
    valid_schemes: list[dict] = []
    for s in all_schemes:
        reason = _validate_title(s["title"])
        if reason:
            log.info(f"  Skipped scheme: {reason} — {s['title'][:80]!r}")
        else:
            valid_schemes.append(s)
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
