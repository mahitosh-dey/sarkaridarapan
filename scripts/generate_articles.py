"""
SarkariDarapan Article Generator

Generates SEO-optimized, original markdown articles for draft jobs and schemes
(is_active=false, content is null/empty) using the Groq API (Llama 3.3 70B).
Saves content back to Supabase, activates the rows, and pings Google/Bing.

Originality is critical — Google AdSense and Search Console reject duplicate
content.  The prompts instruct the model to produce fully rewritten, unique
articles from the raw scraped metadata.
"""

from __future__ import annotations

import os
import re
import sys
import json
import math
import time
import logging
import argparse
from pathlib import Path

from urllib.parse import urlparse

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
COMPLETENESS_THRESHOLD = 70  # minimum score to send to Groq for rewriting

VAGUE_PHRASES = [
    "to be announced", "will be announced",
    "certain date", "may vary",
    "likely to be", "expected to be",
    "tba",
]
MIN_WORD_COUNT = 400

ENTRANCE_EXAM_KEYWORDS = re.compile(r"\b(JEE|NEET|CUET|CMAT)\b", re.IGNORECASE)


def is_entrance_exam(job: dict) -> bool:
    """Return True if the job title matches a known entrance exam."""
    return bool(ENTRANCE_EXAM_KEYWORDS.search(job.get("title", "")))

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
    """Query jobs where is_active=false, content is empty, and score > threshold.

    Jobs with completeness_score <= COMPLETENESS_THRESHOLD stay as drafts
    and are not sent to Groq for rewriting.
    """
    resp = (
        client.table("jobs")
        .select("*")
        .eq("is_active", False)
        .gte("completeness_score", COMPLETENESS_THRESHOLD)
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

JOB_SYSTEM_PROMPT = """\
You are a government job content writer for an Indian job portal.
You must ONLY use the data provided. Never guess, assume, or invent any \
information. If a field is missing, write 'Details awaited from official \
notification' — never fabricate dates, salaries, or vacancy numbers.

BANNED PHRASES — never write any of these in the article:
- 'certain date'
- 'will be announced'
- 'may vary'
- 'to be announced'
Instead, if a date is unknown write: 'Application dates not yet released. \
Bookmark this page for updates.'

ENTRANCE EXAMS (JEE, NEET, CUET, CMAT):
- These are competitive entrance exams, NOT sarkari naukri (government jobs).
- Never mention salary, pay scale, or compensation — entrance exams have none.
- Do not write a Salary & Benefits section for entrance exams.

FAQ RULES:
- Only include a FAQ question if you can answer it factually from the data.
- If the answer would be 'Details awaited' or unknown, omit that Q&A entirely.
- It is better to have 3 good FAQs than 5 padded ones."""


def _build_scraped_data_json(job: dict) -> str:
    """Serialize the scraped job data into a clean JSON string for the prompt."""
    data = {
        "title": job.get("title", ""),
        "organization": job.get("organization", ""),
        "category": job.get("category", ""),
        "description": job.get("description", ""),
        "vacancies": job.get("vacancies", 0),
        "last_date": job.get("last_date", ""),
        "salary": job.get("salary", ""),
        "official_link": job.get("official_link", ""),
        "notification_link": job.get("notification_link", ""),
        "state": job.get("state", ""),
        "post_name": job.get("post_name", ""),
        "qualification": job.get("qualification", ""),
        "eligibility": job.get("eligibility", {}),
        "application_fee": job.get("application_fee", {}),
        "important_dates": job.get("important_dates", {}),
        "selection_process": job.get("selection_process", []),
        "how_to_apply": job.get("how_to_apply", ""),
    }

    # Strip salary for entrance exams — they have no pay scale
    if is_entrance_exam(job):
        data.pop("salary", None)

    # Drop empty values so the model sees only what we actually have
    return json.dumps(
        {k: v for k, v in data.items() if v and v != 0 and v != {} and v != []},
        indent=2, ensure_ascii=False,
    )


def build_job_prompt(job: dict) -> tuple[str, str]:
    """Construct the system + user prompts for a job article.

    Returns (system_prompt, user_prompt).
    The user prompt asks for a fenced ```json block with structured fields
    followed by the full markdown article.
    """
    scraped_json = _build_scraped_data_json(job)

    exam = is_entrance_exam(job)

    # Build entrance-exam-specific or regular job rules
    if exam:
        salary_rule = "- This is an entrance exam — do NOT write a Salary & Benefits section. Entrance exams have no salary."
        salary_section = "3. ## Exam Pattern — marks, duration, sections, negative marking (ONLY from data)"
        dates_missing_text = "Application dates not yet released. Bookmark this page for updates."
        tone_note = "- Keep tone simple and helpful for Indian students and exam aspirants"
    else:
        salary_rule = "- If salary is unknown, say 'Details awaited from official notification'"
        salary_section = "3. ## Salary & Benefits — ONLY mention salary if present in data, otherwise say 'Details awaited from official notification'"
        dates_missing_text = "Application dates not yet released. Bookmark this page for updates."
        tone_note = "- Keep tone simple and helpful for Indian government job seekers\n- Use Hindi-English terms naturally (lakh, crore, sarkari naukri, bharti, etc.)"

    user_prompt = f"""Write a helpful {"entrance exam" if exam else "job"} page using ONLY this data:

{scraped_json}

STRICT RULES — read carefully:
- Never invent dates not present in the data
- Never invent salary figures not in the data
- Never invent vacancy numbers not in the data
{salary_rule}
- If application dates are missing, write EXACTLY: '{dates_missing_text}'
- If vacancy count is 0 or missing, say 'Details awaited from official notification'
{tone_note}

BANNED PHRASES — do NOT use any of these anywhere in the article:
- 'certain date'
- 'will be announced'
- 'may vary'
- 'to be announced'
- 'TBA'
If a date or detail is unknown, write 'Not yet released' or omit the row entirely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1: Structured JSON block
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Output a fenced ```json block containing structured data about this {"exam" if exam else "job"}.
Use this EXACT schema (use null for any field NOT present in the data above):

```json
{{
  "post_name": "<from data or null>",
  "qualification": "<from data or null>",
  "eligibility": {{
    "age": "<from data or null>",
    "education": "<from data or null>"
  }},
  "salary": {"null" if exam else '"<from data or null>"'},
  "application_fee": {{
    "general": "<from data or null>",
    "sc_st": "<from data or null>",
    "women": "<from data or null>",
    "ph": "<from data or null>"
  }},
  "important_dates": {{
    "startDate": "<from data in YYYY-MM-DD or null>",
    "lastDate": "<from data in YYYY-MM-DD or null>",
    "examDate": "<from data in YYYY-MM-DD or null>"
  }},
  "selection_process": ["<from data or empty array>"],
  "how_to_apply": "<from data or null>"
}}
```

**JSON Rules:**
- ONLY use values that appear in the scraped data above
- Unknown fields = null. Do NOT guess or fill in from general knowledge
- selection_process must be an array of strings
{"- salary MUST be null for entrance exams — they have no pay scale" if exam else ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2: Markdown Article (1000 words)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After the JSON block, write a 1000-word original article for Indian {"exam aspirants" if exam else "job seekers"}.

**Structure (use ## for section headings):**
1. ## Overview — {"what this exam is, who should appear" if exam else "why this job matters, who should apply"}
2. ## Eligibility — age limits, education, category relaxations (ONLY from data)
{salary_section}
4. ## Important Dates — markdown table (Event | Date). Use ONLY dates from the data. For missing dates write 'Not yet released' or omit the row
5. ## How to Apply — step by step, include the official website URL from data
6. ## Selection Process — ONLY from data, otherwise say 'Details awaited from official notification'
7. ## Preparation Tips — genuine advice for {"exam" if exam else "government exam"} preparation
8. ## Frequently Asked Questions — 3 to 5 Q&As, conversational tone. ONLY include a Q&A if you can answer it factually from the data. If the answer would be unknown, OMIT that question entirely. Quality over quantity.
9. ## Official Links — bullet list with markdown links from data
10. *Disclaimer* — italic paragraph telling readers to verify on the official source

**Output rules:**
- Output ONLY the JSON block followed by the markdown body
- Do NOT start the markdown with # (the page already has the h1 title). Start with ##
- No YAML frontmatter, no --- delimiters
- Every sentence must be originally written — zero copy-paste from any source"""

    return JOB_SYSTEM_PROMPT, user_prompt


SCHEME_SYSTEM_PROMPT = """\
You are a government scheme content writer for an Indian government portal.
You must ONLY use the data provided. Never guess, assume, or invent any \
information. If a field is missing, write 'Details awaited from official \
notification' — never fabricate amounts, dates, or eligibility criteria."""


def build_scheme_prompt(scheme: dict) -> tuple[str, str]:
    """Construct the system + user prompts for a government scheme article.

    Returns (system_prompt, user_prompt).
    """
    data = {
        "title": scheme.get("title", ""),
        "ministry": scheme.get("ministry", ""),
        "launched_by": scheme.get("launched_by", ""),
        "objective": scheme.get("objective", ""),
        "description": scheme.get("description", ""),
        "category": scheme.get("category", ""),
        "state": scheme.get("state", ""),
        "official_portal": scheme.get("official_portal", ""),
        "helpline": scheme.get("helpline_number", ""),
        "eligibility": scheme.get("eligibility", []),
        "benefits": scheme.get("benefits", []),
        "documents": scheme.get("documents", []),
        "how_to_apply": scheme.get("how_to_apply", ""),
    }
    scraped_json = json.dumps(
        {k: v for k, v in data.items() if v and v != [] and v != {}},
        indent=2, ensure_ascii=False,
    )

    user_prompt = f"""Write a helpful scheme page using ONLY this data:

{scraped_json}

STRICT RULES:
- Never invent eligibility criteria not present in the data
- Never invent benefit amounts not in the data
- Never invent dates or deadlines not in the data
- If any detail is unknown, say 'Details awaited from official notification'
- Keep tone simple and helpful for Indian citizens
- Use Hindi-English terms naturally (yojana, sarkar, aadhaar, panchayat, etc.)

Write a 1000-word original article.

**Structure (use ## for section headings):**
1. ## Overview — what this scheme does, who it helps, why it matters
2. ## Eligibility — clear simple language, who qualifies, income limits if any (ONLY from data)
3. ## Benefits — what the beneficiary actually gets (ONLY from data)
4. ## Documents Required — bullet list (ONLY from data, otherwise say 'Check official portal')
5. ## How to Apply — step by step, include the official portal URL from data
6. ## Important Details — markdown table (Detail | Information)
7. ## Preparation Tips — genuine advice on making the application process smooth
8. ## Frequently Asked Questions — 5 Q&As, conversational tone
9. ## Official Links — bullet list with markdown links from data
10. *Disclaimer* — italic paragraph telling readers to verify on the official source

**Output rules:**
- Output ONLY the markdown body. No YAML frontmatter, no --- delimiters
- Do NOT start with # (the page already has the h1 title). Start with ##
- Every sentence must be originally written — zero copy-paste from any source"""

    return SCHEME_SYSTEM_PROMPT, user_prompt


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


def build_backfill_prompt(job: dict) -> tuple[str, str]:
    """Build a shorter extraction-only prompt for backfilling structured fields.

    Used with --backfill to populate structured columns for jobs that already
    have article content but empty structured fields.
    Returns (system_prompt, user_prompt).
    """
    scraped_json = _build_scraped_data_json(job)

    system = JOB_SYSTEM_PROMPT

    user = f"""Extract structured data from this job metadata. Output ONLY a
fenced ```json block. No markdown, no explanation.

Job data:
{scraped_json}

Output this EXACT JSON schema. Use ONLY values present in the data above.
If a field is not in the data, use null — never guess or invent values:

```json
{{
  "post_name": "<from data or null>",
  "qualification": "<from data or null>",
  "eligibility": {{
    "age": "<from data or null>",
    "education": "<from data or null>"
  }},
  "salary": "<from data or null>",
  "application_fee": {{
    "general": "<from data or null>",
    "sc_st": "<from data or null>",
    "women": "<from data or null>",
    "ph": "<from data or null>"
  }},
  "important_dates": {{
    "startDate": "<from data in YYYY-MM-DD or null>",
    "lastDate": "<from data in YYYY-MM-DD or null>",
    "examDate": "<from data in YYYY-MM-DD or null>"
  }},
  "selection_process": ["<from data or empty array>"],
  "how_to_apply": "<from data or null>"
}}
```

Rules:
- ONLY use values from the data above — never invent dates, salaries, fees, or vacancy numbers
- Unknown fields = null"""

    return system, user


# ---------------------------------------------------------------------------
# Generation with retry
# ---------------------------------------------------------------------------

def call_groq(groq_client: Groq, user_prompt: str,
              system_prompt: str = "") -> str:
    """Call Groq with system + user messages and retry on rate-limit (429)."""
    messages: list[dict] = []
    if system_prompt:
        messages.append({"role": "system", "content": system_prompt})
    messages.append({"role": "user", "content": user_prompt})

    for attempt in range(MAX_RETRIES + 1):
        try:
            response = groq_client.chat.completions.create(
                model=GROQ_MODEL,
                messages=messages,
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
# Quality gate
# ---------------------------------------------------------------------------

def _extract_numbers(text: str) -> set[int]:
    """Extract all integers > 100 from a string (likely salary figures)."""
    return {int(n) for n in re.findall(r"\d+", text) if int(n) > 100}


def check_content_quality(content: str, structured_data: dict,
                          original_job: dict) -> list[str]:
    """Validate Groq output against the original scraped data.

    Returns a list of flag reasons (empty list means the article passed).
    """
    flags: list[str] = []
    content_lower = content.lower()

    # 1. Vague phrases
    for phrase in VAGUE_PHRASES:
        if phrase in content_lower:
            flags.append(f"vague_phrase: '{phrase}'")

    # 2. Entrance exam salary check — exams should never have salary
    if is_entrance_exam(original_job):
        groq_salary_val = structured_data.get("salary")
        if groq_salary_val and str(groq_salary_val).strip().lower() not in ("", "null", "none"):
            flags.append(
                f"entrance_exam_salary: Groq wrote salary '{groq_salary_val}' "
                f"but entrance exams have no salary"
            )

    # 3. Salary hallucination
    groq_salary = str(structured_data.get("salary") or "")
    original_salary = str(original_job.get("salary") or "")

    groq_nums = _extract_numbers(groq_salary)
    original_nums = _extract_numbers(original_salary)

    if groq_nums and not original_salary.strip():
        flags.append(
            f"hallucinated_salary: Groq wrote '{groq_salary}' "
            f"but original had no salary"
        )
    elif groq_nums:
        invented = groq_nums - original_nums
        if invented:
            flags.append(
                f"salary_mismatch: Groq introduced numbers {invented} "
                f"not in original '{original_salary}'"
            )

    # 3. Word count
    word_count = len(content.split())
    if word_count < MIN_WORD_COUNT:
        flags.append(f"word_count_below_{MIN_WORD_COUNT}: {word_count}")

    # 4. Official link missing from article body
    official_link = original_job.get("official_link", "")
    if official_link:
        # Check full URL or at least the domain
        domain = urlparse(official_link).netloc
        if official_link not in content and (not domain or domain not in content):
            flags.append(f"official_link_not_in_article: {official_link}")

    return flags


def send_telegram_alert(flags: list[str], job: dict) -> None:
    """Send a Telegram message listing quality flag reasons for a job.

    Silently returns if credentials are missing — never breaks the pipeline.
    """
    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")
    if not token or not chat_id:
        log.warning("  Telegram credentials missing — skipping alert")
        return

    title = job.get("title", "Unknown")
    slug = job.get("slug", "")
    org = job.get("organization", "")
    score = job.get("completeness_score", 0)

    reasons = "\n".join(f"• {f}" for f in flags)
    text = (
        f"⚠️ *Quality Flag*\n\n"
        f"*Title:* {title}\n"
        f"*Slug:* `{slug}`\n"
        f"*Org:* {org}\n"
        f"*Score:* {score}\n\n"
        f"*Reasons:*\n{reasons}"
    )

    try:
        resp = requests.post(
            f"https://api.telegram.org/bot{token}/sendMessage",
            json={"chat_id": chat_id, "text": text, "parse_mode": "Markdown"},
            timeout=10,
        )
        if resp.status_code == 200:
            log.info("  Telegram alert sent")
        else:
            log.warning(f"  Telegram alert failed: {resp.status_code} {resp.text}")
    except requests.RequestException as e:
        log.warning(f"  Telegram alert error: {e}")


def send_daily_quality_digest(client: Client) -> None:
    """Send a Telegram digest summarizing all pending flagged jobs.

    Queries jobs where quality_flag IS NOT NULL and reviewed_at IS NULL,
    then sends a summary message with counts and a link to the admin dashboard.
    Silently returns if credentials are missing.
    """
    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")
    if not token or not chat_id:
        log.warning("Telegram credentials missing — skipping digest")
        return

    resp = (
        client.table("jobs")
        .select("title, organization, quality_flag")
        .not_("quality_flag", "is", "null")
        .is_("reviewed_at", "null")
        .order("updated_at", desc=True)
        .limit(20)
        .execute()
    )

    pending_jobs = resp.data or []
    if not pending_jobs:
        log.info("No pending flagged jobs — skipping digest")
        return

    lines = []
    for idx, job in enumerate(pending_jobs, 1):
        title = (job.get("title") or "Untitled")[:40]
        flags = job.get("quality_flag") or []
        flag_count = len(flags) if isinstance(flags, list) else 0
        lines.append(f"{idx}. {title}... ({flag_count} flag{'s' if flag_count != 1 else ''})")

    total_text = f"{len(pending_jobs)} job{'s' if len(pending_jobs) != 1 else ''} pending review"
    job_list = "\n".join(lines)

    text = (
        f"📋 *Daily Quality Report*\n\n"
        f"{total_text}:\n\n"
        f"{job_list}\n\n"
        f"🔗 [Review Dashboard](https://www.sarkaridarapan.info/admin/quality-check)"
    )

    try:
        resp_tg = requests.post(
            f"https://api.telegram.org/bot{token}/sendMessage",
            json={"chat_id": chat_id, "text": text, "parse_mode": "Markdown"},
            timeout=10,
        )
        if resp_tg.status_code == 200:
            log.info("Daily quality digest sent via Telegram")
        else:
            log.warning(f"Telegram digest failed: {resp_tg.status_code} {resp_tg.text}")
    except requests.RequestException as e:
        log.warning(f"Telegram digest error: {e}")


def update_job_flagged(client: Client, slug: str, content: str,
                       reading_time: str, structured_data: dict | None,
                       flags: list[str]):
    """Save generated content but keep the job unpublished with quality flags."""
    payload: dict = {
        "content": content,
        "reading_time": reading_time,
        "is_active": False,
        "quality_flag": flags,
    }

    if structured_data:
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


# ---------------------------------------------------------------------------
# Processing loops
# ---------------------------------------------------------------------------

def process_jobs(supabase: Client, groq_client: Groq) -> tuple[int, int, int]:
    """Generate articles for all pending jobs. Returns (generated, failed, flagged)."""
    log.info("Fetching pending jobs (completeness_score >= %d%%)...", COMPLETENESS_THRESHOLD)
    jobs = fetch_pending_jobs(supabase)
    log.info(f"  Found {len(jobs)} jobs ready for article generation")

    # Count low-score drafts for visibility
    all_inactive = (
        supabase.table("jobs")
        .select("slug,completeness_score")
        .eq("is_active", False)
        .execute()
    )
    no_content = [j for j in all_inactive.data
                  if not j.get("content") or str(j.get("content", "")).strip() == ""]
    low_score = [j for j in no_content
                 if (j.get("completeness_score") or 0) < COMPLETENESS_THRESHOLD]
    if low_score:
        log.info(f"  Skipped {len(low_score)} draft jobs with score below {COMPLETENESS_THRESHOLD}%%")

    generated = 0
    failed = 0
    flagged = 0

    for i, job in enumerate(jobs, 1):
        title = job.get("title", job.get("slug", "unknown"))
        slug = job.get("slug", "")
        log.info(f'Generating job article {i}/{len(jobs)}: "{title}"...')

        # Auto-recategorize entrance exams
        if is_entrance_exam(job) and job.get("category") != "entrance-exams":
            old_cat = job.get("category", "")
            log.info(f"  Recategorizing from '{old_cat}' → 'entrance-exams'")
            try:
                supabase.table("jobs").update({"category": "entrance-exams"}).eq("slug", slug).execute()
                job["category"] = "entrance-exams"
            except Exception as e:
                log.warning(f"  Category update failed: {e}")

        try:
            system_prompt, user_prompt = build_job_prompt(job)
            raw_content = call_groq(groq_client, user_prompt, system_prompt)
        except Exception as e:
            log.error(f"  Groq API error: {e}")
            failed += 1
            continue

        structured_data, content = parse_structured_response(raw_content)

        # Hard strip salary from entrance exams even if Groq returned one
        if is_entrance_exam(job) and structured_data:
            structured_data.pop("salary", None)

        if structured_data:
            log.info(f"  Extracted structured fields: {list(structured_data.keys())}")

        word_count = len(content.split())
        reading_time = calculate_reading_time(content)
        log.info(f"  Generated {word_count} words ({reading_time})")

        # Quality gate — check before publishing
        flags = check_content_quality(content, structured_data, job)

        if flags:
            log.warning(f"  Quality flags: {flags}")
            try:
                update_job_flagged(supabase, slug, content, reading_time,
                                   structured_data, flags)
                log.info("  Saved as draft (flagged, not published).")
                flagged += 1
            except Exception as e:
                log.error(f"  Supabase update error: {e}")
                failed += 1
            send_telegram_alert(flags, job)
            continue

        try:
            update_job(supabase, slug, content, reading_time, structured_data)
            log.info("  Saved and published.")
            generated += 1
        except Exception as e:
            log.error(f"  Supabase update error: {e}")
            failed += 1

    return generated, failed, flagged


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
            system_prompt, user_prompt = build_scheme_prompt(scheme)
            content = call_groq(groq_client, user_prompt, system_prompt)
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
            system_prompt, user_prompt = build_backfill_prompt(job)
            raw_content = call_groq(groq_client, user_prompt, system_prompt)
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
    parser.add_argument(
        "--digest",
        action="store_true",
        help="Send daily quality digest via Telegram and exit",
    )
    args = parser.parse_args()

    load_env()
    supabase = get_supabase()

    if args.digest:
        send_daily_quality_digest(supabase)
        return

    groq_client = get_groq()

    if args.backfill:
        updated, failed = backfill_jobs(supabase, groq_client)
        log.info(f"Backfill done. Updated: {updated}, failed: {failed}")
        return

    jobs_gen, jobs_fail, jobs_flagged = process_jobs(supabase, groq_client)
    schemes_gen, schemes_fail = process_schemes(supabase, groq_client)

    total_gen = jobs_gen + schemes_gen
    total_fail = jobs_fail + schemes_fail

    if total_gen > 0:
        log.info("Pinging search engines...")
        ping_search_engines()

    log.info(f"Done. Jobs generated: {jobs_gen}, failed: {jobs_fail}, flagged: {jobs_flagged}")
    log.info(f"      Schemes generated: {schemes_gen}, failed: {schemes_fail}")
    log.info(f"      Total: {total_gen} generated, {total_fail} failed, {jobs_flagged} flagged")

    # Send daily digest at end of pipeline run
    send_daily_quality_digest(supabase)


if __name__ == "__main__":
    main()
