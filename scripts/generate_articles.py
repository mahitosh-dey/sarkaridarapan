"""
SarkariDarapan Article Generator

Generates SEO-optimized, original markdown articles for draft jobs and schemes
(is_active=false, content is null/empty) using the Groq API (Llama 3.3 70B).
Saves content back to Supabase, activates the rows, and pings Google/Bing.

Originality is critical — Google AdSense and Search Console reject duplicate
content.  The prompts instruct the model to produce fully rewritten, unique
articles from the raw scraped metadata.
"""

import os
import re
import sys
import json
import math
import time
import logging
import argparse
from pathlib import Path

import requests
from dotenv import load_dotenv
from supabase import create_client, Client
from groq import Groq

logging.basicConfig(level=logging.INFO, format="%(message)s")
log = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

GROQ_MODEL = "llama-3.3-70b-versatile"
RETRY_DELAY = 60          # seconds to wait on 429 rate-limit
MAX_RETRIES = 2           # retry attempts per article

# ---------------------------------------------------------------------------
# Environment & Clients
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


def get_groq() -> Groq:
    """Return a Groq client configured with the API key."""
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        log.error("Missing GROQ_API_KEY in .env.local")
        sys.exit(1)
    return Groq(api_key=api_key)


# ---------------------------------------------------------------------------
# Database helpers
# ---------------------------------------------------------------------------

def fetch_pending_jobs(client: Client) -> list[dict]:
    """Query jobs where is_active=false and content is null or empty."""
    resp = (
        client.table("jobs")
        .select("*")
        .eq("is_active", False)
        .execute()
    )
    return [
        job for job in resp.data
        if not job.get("content") or job["content"].strip() == ""
    ]


def fetch_pending_schemes(client: Client) -> list[dict]:
    """Query schemes where content is null or empty (not yet rewritten).

    NOTE: The schemes table does not have an is_active column yet.
    We select all schemes and filter client-side for empty content.
    """
    resp = (
        client.table("schemes")
        .select("*")
        .execute()
    )
    return [
        s for s in resp.data
        if not s.get("content") or s["content"].strip() == ""
    ]


def update_job(client: Client, slug: str, content: str, reading_time: str,
               structured_data: dict | None = None):
    """Update a job row with generated content, structured fields, and set is_active=true."""
    payload: dict = {
        "content": content,
        "reading_time": reading_time,
        "is_active": True,
    }

    if structured_data:
        # Map structured fields to DB columns — only set non-empty values
        field_map = {
            "post_name": "post_name",
            "qualification": "qualification",
            "eligibility": "eligibility",
            "salary": "salary",
            "application_fee": "application_fee",
            "important_dates": "important_dates",
            "selection_process": "selection_process",
            "how_to_apply": "how_to_apply",
        }
        for src_key, db_col in field_map.items():
            value = structured_data.get(src_key)
            if value is not None and value != "" and value != []:
                payload[db_col] = value

    client.table("jobs").update(payload).eq("slug", slug).execute()


def update_scheme(client: Client, slug: str, content: str, reading_time: str):
    """Update a scheme row with generated content.

    NOTE: The schemes table does not have is_active yet. We only update
    content and reading_time. The frontend filters by non-empty content.
    """
    client.table("schemes").update({
        "content": content,
        "reading_time": reading_time,
    }).eq("slug", slug).execute()


# ---------------------------------------------------------------------------
# Prompt builders
# ---------------------------------------------------------------------------

def build_job_prompt(job: dict) -> str:
    """Construct the Groq prompt for a job article.

    The prompt asks the AI to output a fenced ```json block with structured
    fields first, then the full markdown article.  This lets us populate both
    the structured database columns and the long-form content in one call.
    """
    title = job.get("title", "")
    organization = job.get("organization", "")
    category = job.get("category", "")
    official_link = job.get("official_link", "")
    description = job.get("description", "")
    last_date = job.get("last_date", "")
    vacancies = job.get("vacancies", 0)
    notification_link = job.get("notification_link", "")
    state = job.get("state", "")

    return f"""You are an expert Indian government jobs content writer with 10 years of experience.

Your task has TWO parts — output them in order:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1: Structured JSON block
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Output a fenced ```json block containing structured data about this job.
Use this EXACT schema (all fields required — use null for genuinely unknown values):

```json
{{
  "post_name": "<specific post/position name, e.g. 'Combined Graduate Level Examination'>",
  "qualification": "<minimum education required, e.g. 'Graduation from recognized university'>",
  "eligibility": {{
    "age": "<age range with relaxations, e.g. '18-27 years (5 years relaxation for SC/ST)'>",
    "education": "<education details, e.g. 'Bachelor's Degree from a recognized university'>"
  }},
  "salary": "<pay scale or salary range, e.g. 'Rs. 25,500 - 81,100 (Pay Level 4-7)'>",
  "application_fee": {{
    "general": "<fee for General/OBC, e.g. 'Rs. 100'>",
    "sc_st": "<fee for SC/ST, e.g. 'Nil' or 'Rs. 0'>",
    "women": "<fee for women candidates, e.g. 'Nil' or null if same as general>",
    "ph": "<fee for PH/Divyang, e.g. 'Nil' or null>"
  }},
  "important_dates": {{
    "startDate": "<application start date in YYYY-MM-DD or null>",
    "lastDate": "<last date to apply in YYYY-MM-DD or null>",
    "examDate": "<exam date in YYYY-MM-DD or null>"
  }},
  "selection_process": ["<step 1>", "<step 2>", "<step 3>"],
  "how_to_apply": "<clear step-by-step instructions as a single string>"
}}
```

**JSON Rules:**
- Use null for genuinely unknown fields — NEVER invent dates or vacancy numbers
- For dates: ONLY use dates from the source data below. Unknown = null
- For salary: Use realistic pay scales based on government pay commission norms for well-known positions
- For application_fee: Use standard government exam fee norms if not explicitly provided
- selection_process must be an array of strings

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2: Markdown Article (1000 words)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After the JSON block, write a 1000-word, 100% original, helpful article about {title} for Indian job seekers.

**Source data (use these facts — but rewrite everything in your own words):**
- Job Title: {title}
- Organization: {organization}
- Category: {category}
- Description: {description}
- Vacancies: {vacancies}
- Last Date to Apply: {last_date}
- Official Link: {official_link}
- Notification Link: {notification_link}
- State/Region: {state}

**STRICT RULES:**
- Write in a warm, helpful, human tone like you are advising a friend
- Never copy any text from official sources
- Include practical tips candidates actually need
- Add realistic salary comparison with private sector
- Mention specific documents needed
- Write FAQ answers conversationally, not robotically
- Vary sentence length — mix short punchy sentences with longer ones
- Add one motivational line for candidates who are nervous about applying
- Use Hindi-English terms naturally (lakh, crore, sarkari naukri, bharti, etc.)

**Structure (use ## for section headings):**
1. ## Overview — why this job matters, who should apply, what makes it worth pursuing
2. ## Eligibility — clear simple language, age limits, education, category relaxations
3. ## Salary & Benefits — with real context, compare with private sector, mention perks
4. ## Important Dates — markdown table (Event | Date), with advice on preparation timeline
5. ## How to Apply — step by step, practical, include the official website URL
6. ## Selection Process — what to expect at each stage, ground-reality tips
7. ## Preparation Tips — genuine advice from someone who knows the system
8. ## Frequently Asked Questions — 5 Q&As, conversational answers not robotic
9. ## Official Links — bullet list with markdown links
10. *Disclaimer* — italic paragraph telling readers to verify on the official source

**Output rules:**
- Output ONLY the JSON block followed by the markdown body. No YAML frontmatter, no --- delimiters
- Do NOT start the markdown with # (the page already has the h1 title). Start with ##
- If any detail (salary, exam date, etc.) is unknown, write "To be announced"
- Do NOT invent vacancy numbers or dates — use only what is provided above
- Every sentence must be originally written — zero copy-paste from any source"""


def build_scheme_prompt(scheme: dict) -> str:
    """Construct the Groq prompt for a government scheme article."""
    title = scheme.get("title", "")
    ministry = scheme.get("ministry", "")
    launched_by = scheme.get("launched_by", "")
    objective = scheme.get("objective", "")
    description = scheme.get("description", "")
    category = scheme.get("category", "")
    state = scheme.get("state", "")
    official_portal = scheme.get("official_portal", "")
    helpline = scheme.get("helpline_number", "")
    eligibility = scheme.get("eligibility", [])
    benefits = scheme.get("benefits", [])
    documents = scheme.get("documents", [])
    how_to_apply = scheme.get("how_to_apply", "")

    return f"""You are an expert Indian government schemes content writer with 10 years of experience.
Write a 1000-word, 100% original, helpful article about {title} for Indian citizens.

**Source data (use these facts — but rewrite everything in your own words):**
- Scheme Name: {title}
- Ministry/Department: {ministry}
- Launched By: {launched_by}
- Objective: {objective}
- Description: {description}
- Category: {category}
- State/Region: {state}
- Official Portal: {official_portal}
- Helpline: {helpline}
- Eligibility: {eligibility}
- Benefits: {benefits}
- Documents Required: {documents}
- How to Apply: {how_to_apply}

**STRICT RULES:**
- Write in a warm, helpful, human tone like you are advising a friend
- Never copy any text from official sources
- Include practical tips citizens actually need to apply successfully
- Explain benefits in real terms people can understand (monthly amounts, what it covers)
- Mention specific documents needed and where to get them
- Write FAQ answers conversationally, not robotically
- Vary sentence length — mix short punchy sentences with longer ones
- Add one encouraging line for people who find government processes intimidating
- Use Hindi-English terms naturally (yojana, sarkar, aadhaar, panchayat, etc.)

**Structure (use ## for section headings):**
1. ## Overview — what this scheme does, who it helps, why it matters
2. ## Eligibility — clear simple language, who qualifies, income limits if any
3. ## Benefits — what the beneficiary actually gets, in real practical terms
4. ## Documents Required — bullet list, mention where to get each document
5. ## How to Apply — step by step, practical, include the official portal URL
6. ## Important Details — markdown table (Detail | Information)
7. ## Preparation Tips — genuine advice on making the application process smooth
8. ## Frequently Asked Questions — 5 Q&As, conversational answers not robotic
9. ## Official Links — bullet list with markdown links
10. *Disclaimer* — italic paragraph telling readers to verify on the official source

**Output rules:**
- Output ONLY the markdown body. No YAML frontmatter, no --- delimiters
- Do NOT start with # (the page already has the h1 title). Start with ##
- If any detail is unknown, write "To be announced" or "Check official portal"
- Every sentence must be originally written — zero copy-paste from any source"""


# ---------------------------------------------------------------------------
# Structured response parsing
# ---------------------------------------------------------------------------

def parse_structured_response(raw_content: str) -> tuple[dict, str]:
    """Extract structured JSON and markdown from an AI response.

    The expected format is a fenced ```json ... ``` block followed by the
    markdown article body.  Falls back gracefully: if no JSON block is found,
    returns ({}, full_raw_content).
    """
    match = re.search(r"```json\s*\n(.*?)\n\s*```", raw_content, re.DOTALL)
    if not match:
        return {}, raw_content.strip()

    json_str = match.group(1).strip()
    # Remove trailing commas before } or ] (common LLM mistake)
    json_str = re.sub(r",\s*([}\]])", r"\1", json_str)

    try:
        structured = json.loads(json_str)
    except json.JSONDecodeError as e:
        log.warning(f"  JSON parse error: {e} — falling back to empty structured data")
        structured = {}

    # Everything after the closing ``` of the JSON block is the markdown
    markdown = raw_content[match.end():].strip()
    if not markdown:
        # If the model put everything inside the JSON block, use original
        markdown = raw_content.strip()

    return structured, markdown


def build_backfill_prompt(job: dict) -> str:
    """Build a shorter extraction-only prompt for backfilling structured fields.

    Used with --backfill to populate structured columns for jobs that already
    have article content but empty structured fields.
    """
    title = job.get("title", "")
    organization = job.get("organization", "")
    category = job.get("category", "")
    description = job.get("description", "")
    last_date = job.get("last_date", "")
    vacancies = job.get("vacancies", 0)
    state = job.get("state", "")

    return f"""You are an expert on Indian government jobs. Based on the metadata below,
output ONLY a fenced ```json block with structured data. No markdown, no explanation.

**Job metadata:**
- Title: {title}
- Organization: {organization}
- Category: {category}
- Description: {description}
- Vacancies: {vacancies}
- Last Date: {last_date}
- State: {state}

Output this EXACT JSON schema (use null for genuinely unknown values):

```json
{{
  "post_name": "<specific post/position name>",
  "qualification": "<minimum education required>",
  "eligibility": {{
    "age": "<age range with relaxations>",
    "education": "<education details>"
  }},
  "salary": "<pay scale or salary range>",
  "application_fee": {{
    "general": "<fee for General/OBC>",
    "sc_st": "<fee for SC/ST>",
    "women": "<fee for women or null>",
    "ph": "<fee for PH/Divyang or null>"
  }},
  "important_dates": {{
    "startDate": null,
    "lastDate": "{last_date or 'null'}",
    "examDate": null
  }},
  "selection_process": ["<step 1>", "<step 2>"],
  "how_to_apply": "<step-by-step instructions>"
}}
```

Rules:
- ONLY use dates from the metadata above. Unknown dates = null
- Use realistic salary/fee based on standard government norms for this type of position
- Never invent vacancy numbers"""


# ---------------------------------------------------------------------------
# Generation with retry
# ---------------------------------------------------------------------------

def call_groq(groq_client: Groq, prompt: str) -> str:
    """Call Groq with automatic retry on rate-limit (429) errors."""
    for attempt in range(MAX_RETRIES + 1):
        try:
            response = groq_client.chat.completions.create(
                model=GROQ_MODEL,
                messages=[{"role": "user", "content": prompt}],
            )
            return response.choices[0].message.content
        except Exception as e:
            if "429" in str(e) and attempt < MAX_RETRIES:
                log.warning(f"  Rate limited. Waiting {RETRY_DELAY}s before retry {attempt + 1}/{MAX_RETRIES}...")
                time.sleep(RETRY_DELAY)
                continue
            raise
    return ""  # unreachable, keeps type checker happy


def calculate_reading_time(text: str) -> str:
    """Return reading time as 'X min read' (200 words per minute, rounded up)."""
    word_count = len(text.split())
    minutes = math.ceil(word_count / 200)
    return f"{minutes} min read"


# ---------------------------------------------------------------------------
# Search engine ping
# ---------------------------------------------------------------------------

def ping_search_engines():
    """Ping the site's API endpoint to notify Google and Bing."""
    url = "https://www.sarkaridarapan.info/api/ping"
    try:
        resp = requests.get(url, timeout=30)
        if resp.status_code == 200:
            log.info("  Ping successful")
        else:
            log.warning(f"  Ping returned status {resp.status_code}")
    except requests.RequestException as e:
        log.warning(f"  Ping failed: {e}")


# ---------------------------------------------------------------------------
# Processing loops
# ---------------------------------------------------------------------------

def process_jobs(supabase: Client, groq_client: Groq) -> tuple[int, int]:
    """Generate articles for all pending jobs. Returns (generated, failed)."""
    log.info("Fetching pending jobs...")
    jobs = fetch_pending_jobs(supabase)
    log.info(f"  Found {len(jobs)} jobs without content")

    generated = 0
    failed = 0

    for i, job in enumerate(jobs, 1):
        title = job.get("title", job.get("slug", "unknown"))
        slug = job.get("slug", "")
        log.info(f'Generating job article {i}/{len(jobs)}: "{title}"...')

        try:
            prompt = build_job_prompt(job)
            raw_content = call_groq(groq_client, prompt)
        except Exception as e:
            log.error(f"  Groq API error: {e}")
            failed += 1
            continue

        structured_data, content = parse_structured_response(raw_content)
        if structured_data:
            log.info(f"  Extracted structured fields: {list(structured_data.keys())}")

        word_count = len(content.split())
        reading_time = calculate_reading_time(content)
        log.info(f"  Generated {word_count} words ({reading_time})")

        try:
            update_job(supabase, slug, content, reading_time, structured_data)
            log.info("  Saved and published.")
            generated += 1
        except Exception as e:
            log.error(f"  Supabase update error: {e}")
            failed += 1

    return generated, failed


def process_schemes(supabase: Client, groq_client: Groq) -> tuple[int, int]:
    """Generate articles for all pending schemes. Returns (generated, failed)."""
    log.info("Fetching pending schemes...")
    schemes = fetch_pending_schemes(supabase)
    log.info(f"  Found {len(schemes)} schemes without content")

    generated = 0
    failed = 0

    for i, scheme in enumerate(schemes, 1):
        title = scheme.get("title", scheme.get("slug", "unknown"))
        slug = scheme.get("slug", "")
        log.info(f'Generating scheme article {i}/{len(schemes)}: "{title}"...')

        try:
            prompt = build_scheme_prompt(scheme)
            content = call_groq(groq_client, prompt)
        except Exception as e:
            log.error(f"  Groq API error: {e}")
            failed += 1
            continue

        word_count = len(content.split())
        reading_time = calculate_reading_time(content)
        log.info(f"  Generated {word_count} words ({reading_time})")

        try:
            update_scheme(supabase, slug, content, reading_time)
            log.info("  Saved and published.")
            generated += 1
        except Exception as e:
            log.error(f"  Supabase update error: {e}")
            failed += 1

    return generated, failed


# ---------------------------------------------------------------------------
# Backfill structured fields for existing jobs
# ---------------------------------------------------------------------------

def fetch_backfill_jobs(client: Client) -> list[dict]:
    """Find active jobs with content but empty post_name (need structured data)."""
    resp = (
        client.table("jobs")
        .select("*")
        .eq("is_active", True)
        .execute()
    )
    return [
        job for job in resp.data
        if job.get("content") and job["content"].strip()
        and (not job.get("post_name") or job["post_name"].strip() == "")
    ]


def update_job_structured_only(client: Client, slug: str, structured_data: dict):
    """Update only structured fields for a job — does not touch content or is_active."""
    payload: dict = {}
    field_map = {
        "post_name": "post_name",
        "qualification": "qualification",
        "eligibility": "eligibility",
        "salary": "salary",
        "application_fee": "application_fee",
        "important_dates": "important_dates",
        "selection_process": "selection_process",
        "how_to_apply": "how_to_apply",
    }
    for src_key, db_col in field_map.items():
        value = structured_data.get(src_key)
        if value is not None and value != "" and value != []:
            payload[db_col] = value

    if payload:
        client.table("jobs").update(payload).eq("slug", slug).execute()


def backfill_jobs(supabase: Client, groq_client: Groq) -> tuple[int, int]:
    """Backfill structured fields for active jobs missing them."""
    log.info("Fetching jobs that need structured data backfill...")
    jobs = fetch_backfill_jobs(supabase)
    log.info(f"  Found {len(jobs)} jobs needing backfill")

    updated = 0
    failed = 0

    for i, job in enumerate(jobs, 1):
        title = job.get("title", job.get("slug", "unknown"))
        slug = job.get("slug", "")
        log.info(f'Backfilling {i}/{len(jobs)}: "{title}"...')

        try:
            prompt = build_backfill_prompt(job)
            raw_content = call_groq(groq_client, prompt)
        except Exception as e:
            log.error(f"  Groq API error: {e}")
            failed += 1
            continue

        structured_data, _ = parse_structured_response(raw_content)
        if not structured_data:
            log.warning("  No structured data extracted — skipping")
            failed += 1
            continue

        log.info(f"  Extracted: {list(structured_data.keys())}")

        try:
            update_job_structured_only(supabase, slug, structured_data)
            log.info("  Structured fields updated.")
            updated += 1
        except Exception as e:
            log.error(f"  Supabase update error: {e}")
            failed += 1

    return updated, failed


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="SarkariDarapan Article Generator")
    parser.add_argument(
        "--backfill",
        action="store_true",
        help="Backfill structured fields for active jobs that already have content",
    )
    args = parser.parse_args()

    load_env()
    supabase = get_supabase()
    groq_client = get_groq()

    if args.backfill:
        updated, failed = backfill_jobs(supabase, groq_client)
        log.info(f"Backfill done. Updated: {updated}, failed: {failed}")
        return

    jobs_gen, jobs_fail = process_jobs(supabase, groq_client)
    schemes_gen, schemes_fail = process_schemes(supabase, groq_client)

    total_gen = jobs_gen + schemes_gen
    total_fail = jobs_fail + schemes_fail

    if total_gen > 0:
        log.info("Pinging search engines...")
        ping_search_engines()

    log.info(f"Done. Jobs generated: {jobs_gen}, failed: {jobs_fail}")
    log.info(f"      Schemes generated: {schemes_gen}, failed: {schemes_fail}")
    log.info(f"      Total: {total_gen} generated, {total_fail} failed")


if __name__ == "__main__":
    main()
