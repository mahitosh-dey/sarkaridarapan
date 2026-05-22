// =============================================================================
// Groq API Utilities — TypeScript port of generate_articles.py
// =============================================================================

const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 60_000;

const VAGUE_PHRASES = [
  "to be announced",
  "will be announced",
  "certain date",
  "may vary",
  "likely to be",
  "expected to be",
  "tba",
];

const MIN_WORD_COUNT = 400;

const ENTRANCE_EXAM_RE = /\b(JEE|NEET|CUET|CMAT)\b/i;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function isEntranceExam(title: string): boolean {
  return ENTRANCE_EXAM_RE.test(title);
}

export function calculateReadingTime(text: string): string {
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

// ---------------------------------------------------------------------------
// Groq API caller with retry
// ---------------------------------------------------------------------------

export async function callGroq(
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("GROQ_API_KEY environment variable is not set");
  }

  const messages: { role: string; content: string }[] = [];
  if (systemPrompt) {
    messages.push({ role: "system", content: systemPrompt });
  }
  messages.push({ role: "user", content: userPrompt });

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: GROQ_MODEL, messages }),
    });

    if (res.status === 429 && attempt < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
      continue;
    }

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Groq API error ${res.status}: ${body}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? "";
  }

  throw new Error("Groq API: exhausted retries");
}

// ---------------------------------------------------------------------------
// Prompt builder — port of build_job_prompt() from generate_articles.py
// ---------------------------------------------------------------------------

const JOB_SYSTEM_PROMPT = `You are a government job content writer for an Indian job portal.
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
- It is better to have 3 good FAQs than 5 padded ones.`;

/** Database row shape (snake_case columns from Supabase). */
export interface JobRow {
  id: string;
  slug: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  vacancies: number;
  last_date: string;
  salary: string;
  official_link: string;
  notification_link: string;
  state: string;
  post_name: string;
  qualification: string;
  eligibility: Record<string, string> | null;
  application_fee: Record<string, string> | null;
  important_dates: Record<string, string> | null;
  selection_process: string[] | string | null;
  how_to_apply: string;
  content: string;
  reading_time: string;
  is_active: boolean;
  completeness_score: number | null;
  quality_flag: string[] | null;
  reviewed_at: string | null;
  [key: string]: unknown;
}

function buildScrapedDataJson(job: JobRow): string {
  const data: Record<string, unknown> = {
    title: job.title || "",
    organization: job.organization || "",
    category: job.category || "",
    description: job.description || "",
    vacancies: job.vacancies || 0,
    last_date: job.last_date || "",
    salary: job.salary || "",
    official_link: job.official_link || "",
    notification_link: job.notification_link || "",
    state: job.state || "",
    post_name: job.post_name || "",
    qualification: job.qualification || "",
    eligibility: job.eligibility || {},
    application_fee: job.application_fee || {},
    important_dates: job.important_dates || {},
    selection_process: job.selection_process || [],
    how_to_apply: job.how_to_apply || "",
  };

  // Strip salary for entrance exams
  if (isEntranceExam(job.title)) {
    delete data.salary;
  }

  // Drop empty values
  const filtered: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (
      v !== "" &&
      v !== 0 &&
      v !== null &&
      v !== undefined &&
      !(typeof v === "object" && Object.keys(v as object).length === 0) &&
      !(Array.isArray(v) && v.length === 0)
    ) {
      filtered[k] = v;
    }
  }

  return JSON.stringify(filtered, null, 2);
}

export function buildJobPrompt(job: JobRow): [string, string] {
  const scrapedJson = buildScrapedDataJson(job);
  const exam = isEntranceExam(job.title);

  const salaryRule = exam
    ? "- This is an entrance exam — do NOT write a Salary & Benefits section. Entrance exams have no salary."
    : "- If salary is unknown, say 'Details awaited from official notification'";

  const salarySection = exam
    ? "3. ## Exam Pattern — marks, duration, sections, negative marking (ONLY from data)"
    : "3. ## Salary & Benefits — ONLY mention salary if present in data, otherwise say 'Details awaited from official notification'";

  const datesMissingText =
    "Application dates not yet released. Bookmark this page for updates.";

  const toneNote = exam
    ? "- Keep tone simple and helpful for Indian students and exam aspirants"
    : "- Keep tone simple and helpful for Indian government job seekers\n- Use Hindi-English terms naturally (lakh, crore, sarkari naukri, bharti, etc.)";

  const userPrompt = `Write a helpful ${exam ? "entrance exam" : "job"} page using ONLY this data:

${scrapedJson}

STRICT RULES — read carefully:
- Never invent dates not present in the data
- Never invent salary figures not in the data
- Never invent vacancy numbers not in the data
${salaryRule}
- If application dates are missing, write EXACTLY: '${datesMissingText}'
- If vacancy count is 0 or missing, say 'Details awaited from official notification'
${toneNote}

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

Output a fenced \`\`\`json block containing structured data about this ${exam ? "exam" : "job"}.
Use this EXACT schema (use null for any field NOT present in the data above):

\`\`\`json
{
  "post_name": "<from data or null>",
  "qualification": "<from data or null>",
  "eligibility": {
    "age": "<from data or null>",
    "education": "<from data or null>"
  },
  "salary": ${exam ? "null" : '"<from data or null>"'},
  "application_fee": {
    "general": "<from data or null>",
    "sc_st": "<from data or null>",
    "women": "<from data or null>",
    "ph": "<from data or null>"
  },
  "important_dates": {
    "startDate": "<from data in YYYY-MM-DD or null>",
    "lastDate": "<from data in YYYY-MM-DD or null>",
    "examDate": "<from data in YYYY-MM-DD or null>"
  },
  "selection_process": ["<from data or empty array>"],
  "how_to_apply": "<from data or null>"
}
\`\`\`

**JSON Rules:**
- ONLY use values that appear in the scraped data above
- Unknown fields = null. Do NOT guess or fill in from general knowledge
- selection_process must be an array of strings
${exam ? "- salary MUST be null for entrance exams — they have no pay scale" : ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2: Markdown Article (1000 words)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After the JSON block, write a 1000-word original article for Indian ${exam ? "exam aspirants" : "job seekers"}.

**Structure (use ## for section headings):**
1. ## Overview — ${exam ? "what this exam is, who should appear" : "why this job matters, who should apply"}
2. ## Eligibility — age limits, education, category relaxations (ONLY from data)
${salarySection}
4. ## Important Dates — markdown table (Event | Date). Use ONLY dates from the data. For missing dates write 'Not yet released' or omit the row
5. ## How to Apply — step by step, include the official website URL from data
6. ## Selection Process — ONLY from data, otherwise say 'Details awaited from official notification'
7. ## Preparation Tips — genuine advice for ${exam ? "exam" : "government exam"} preparation
8. ## Frequently Asked Questions — 3 to 5 Q&As, conversational tone. ONLY include a Q&A if you can answer it factually from the data. If the answer would be unknown, OMIT that question entirely. Quality over quantity.
9. ## Official Links — bullet list with markdown links from data
10. *Disclaimer* — italic paragraph telling readers to verify on the official source

**Output rules:**
- Output ONLY the JSON block followed by the markdown body
- Do NOT start the markdown with # (the page already has the h1 title). Start with ##
- No YAML frontmatter, no --- delimiters
- Every sentence must be originally written — zero copy-paste from any source`;

  return [JOB_SYSTEM_PROMPT, userPrompt];
}

// ---------------------------------------------------------------------------
// Structured response parser
// ---------------------------------------------------------------------------

export function parseStructuredResponse(
  rawContent: string
): [Record<string, unknown>, string] {
  const match = rawContent.match(/```json\s*\n([\s\S]*?)\n\s*```/);
  if (!match) {
    return [{}, rawContent.trim()];
  }

  let jsonStr = match[1].trim();
  // Remove trailing commas before } or ] (common LLM mistake)
  jsonStr = jsonStr.replace(/,\s*([}\]])/g, "$1");

  let structured: Record<string, unknown> = {};
  try {
    structured = JSON.parse(jsonStr);
  } catch {
    // Fall back to empty structured data on parse error
  }

  // Everything after the closing ``` is the markdown
  let markdown = rawContent.slice(match.index! + match[0].length).trim();
  if (!markdown) {
    markdown = rawContent.trim();
  }

  return [structured, markdown];
}

// ---------------------------------------------------------------------------
// Quality checks
// ---------------------------------------------------------------------------

function extractNumbers(text: string): Set<number> {
  const nums = new Set<number>();
  for (const m of text.matchAll(/\d+/g)) {
    const n = parseInt(m[0], 10);
    if (n > 100) nums.add(n);
  }
  return nums;
}

export function checkContentQuality(
  content: string,
  structuredData: Record<string, unknown>,
  originalJob: JobRow
): string[] {
  const flags: string[] = [];
  const contentLower = content.toLowerCase();

  // 1. Vague phrases
  for (const phrase of VAGUE_PHRASES) {
    if (contentLower.includes(phrase)) {
      flags.push(`vague_phrase: '${phrase}'`);
    }
  }

  // 2. Entrance exam salary check
  if (isEntranceExam(originalJob.title)) {
    const groqSalaryVal = structuredData.salary;
    if (
      groqSalaryVal &&
      !["", "null", "none"].includes(
        String(groqSalaryVal).trim().toLowerCase()
      )
    ) {
      flags.push(
        `entrance_exam_salary: Groq wrote salary '${groqSalaryVal}' but entrance exams have no salary`
      );
    }
  }

  // 3. Salary hallucination
  const groqSalary = String(structuredData.salary ?? "");
  const originalSalary = String(originalJob.salary ?? "");
  const groqNums = extractNumbers(groqSalary);
  const originalNums = extractNumbers(originalSalary);

  if (groqNums.size > 0 && !originalSalary.trim()) {
    flags.push(
      `hallucinated_salary: Groq wrote '${groqSalary}' but original had no salary`
    );
  } else if (groqNums.size > 0) {
    const invented = new Set([...groqNums].filter((n) => !originalNums.has(n)));
    if (invented.size > 0) {
      flags.push(
        `salary_mismatch: Groq introduced numbers ${JSON.stringify([...invented])} not in original '${originalSalary}'`
      );
    }
  }

  // 4. Word count
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  if (wordCount < MIN_WORD_COUNT) {
    flags.push(`word_count_below_${MIN_WORD_COUNT}: ${wordCount}`);
  }

  // 5. Official link missing from article body
  const officialLink = originalJob.official_link || "";
  if (officialLink) {
    let domain = "";
    try {
      domain = new URL(officialLink).hostname;
    } catch {
      // ignore bad URL
    }
    if (
      !content.includes(officialLink) &&
      (!domain || !content.includes(domain))
    ) {
      flags.push(`official_link_not_in_article: ${officialLink}`);
    }
  }

  return flags;
}
