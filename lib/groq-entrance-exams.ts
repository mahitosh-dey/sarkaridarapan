// =============================================================================
// Groq AI Pipeline — Entrance Exams
// =============================================================================

import { callGroq, parseStructuredResponse, calculateReadingTime } from "./groq";

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

/** Database row shape for entrance_exams (snake_case columns from Supabase). */
export interface ExamRow {
  id: string;
  slug: string;
  title: string;
  conducting_body: string;
  exam_date: string;
  application_start: string;
  application_end: string;
  eligibility: string;
  syllabus: string;
  exam_pattern: Record<string, unknown> | null;
  admit_card_link: string;
  result_link: string;
  official_link: string;
  category: string;
  state: string;
  content: string;
  description: string;
  is_active: boolean;
  published_at: string | null;
  updated_at: string;
  reading_time: string;
  quality_flag: string[] | null;
  reviewed_at: string | null;
  completeness_score: number | null;
  image: string | null;
  [key: string]: unknown;
}

/** Map structured JSON keys to Supabase column names. */
export const EXAM_FIELD_MAP: Record<string, string> = {
  conducting_body: "conducting_body",
  eligibility: "eligibility",
  syllabus: "syllabus",
  exam_pattern: "exam_pattern",
  admit_card_link: "admit_card_link",
  result_link: "result_link",
  exam_date: "exam_date",
  application_start: "application_start",
  application_end: "application_end",
};

const EXAM_SYSTEM_PROMPT = `You are an entrance exam content writer for an Indian education and exam portal.
You must ONLY use the data provided. Never guess, assume, or invent any \
information. If a field is missing, write 'Details awaited from official \
notification' — never fabricate dates, eligibility, or exam pattern details.

IMPORTANT:
- These are competitive entrance exams, NOT government jobs.
- NEVER mention salary, pay scale, or compensation — entrance exams have none.
- Do NOT write a Salary & Benefits section.
- Focus on exam preparation, eligibility, dates, and application process.

BANNED PHRASES — never write any of these in the article:
- 'certain date'
- 'will be announced'
- 'may vary'
- 'to be announced'
Instead, if a date is unknown write: 'Dates not yet released. \
Bookmark this page for updates.'

FAQ RULES:
- Only include a FAQ question if you can answer it factually from the data.
- If the answer would be 'Details awaited' or unknown, omit that Q&A entirely.
- It is better to have 3 good FAQs than 5 padded ones.`;

function buildScrapedExamJson(exam: ExamRow): string {
  const data: Record<string, unknown> = {
    title: exam.title || "",
    conducting_body: exam.conducting_body || "",
    exam_date: exam.exam_date || "",
    application_start: exam.application_start || "",
    application_end: exam.application_end || "",
    eligibility: exam.eligibility || "",
    syllabus: exam.syllabus || "",
    exam_pattern: exam.exam_pattern || null,
    admit_card_link: exam.admit_card_link || "",
    result_link: exam.result_link || "",
    official_link: exam.official_link || "",
    category: exam.category || "",
    source_page_text: exam.description || "",
    state: exam.state || "",
  };

  const filtered: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (
      v !== "" &&
      v !== null &&
      v !== undefined &&
      !(typeof v === "object" && !Array.isArray(v) && Object.keys(v as object).length === 0)
    ) {
      filtered[k] = v;
    }
  }

  return JSON.stringify(filtered, null, 2);
}

export function buildExamPrompt(exam: ExamRow): [string, string] {
  const scrapedJson = buildScrapedExamJson(exam);

  const userPrompt = `Write a helpful entrance exam article using ONLY this data:

${scrapedJson}

IMPORTANT — MINING SOURCE TEXT:
The source_page_text field contains raw text scraped from the official page. Extract any additional details from it even if they aren't in the structured fields:
- Eligibility criteria (age, education, nationality)
- Exam pattern details (sections, questions, marks, duration, negative marking)
- Syllabus topics
- Important dates (application start/end, exam date, admit card, result)
- Application fee details
- Any other structured data that would make the article more useful

STRICT RULES — read carefully:
- NEVER mention salary, pay scale, or compensation — entrance exams have none
- Never invent dates not present in the data
- Never invent eligibility criteria not in the data
- Never invent exam pattern details not in the data
- If dates are missing, write EXACTLY: 'Dates not yet released. Bookmark this page for updates.'
- Keep tone simple and helpful for Indian students and exam aspirants
- Write like a mentor who's been through the process, not a Wikipedia article

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

Output a fenced \`\`\`json block containing structured data about this exam.
Use this EXACT schema (use null for any field NOT present in the data above):

\`\`\`json
{
  "conducting_body": "<from data or null>",
  "eligibility": "<from data or null>",
  "syllabus": "<from data or null>",
  "exam_pattern": {
    "sections": [
      {"name": "<section name>", "questions": "<number or null>", "marks": "<number or null>", "duration": "<duration or null>"}
    ],
    "total_marks": "<number or null>",
    "total_duration": "<duration or null>",
    "negative_marking": "<details or null>"
  },
  "admit_card_link": "<from data or null>",
  "result_link": "<from data or null>",
  "exam_date": "<from data or null>",
  "application_start": "<from data or null>",
  "application_end": "<from data or null>"
}
\`\`\`

**JSON Rules:**
- ONLY use values that appear in the scraped data above (including source_page_text)
- Unknown fields = null. Do NOT guess or fill in from general knowledge
- exam_pattern: populate sections array from data; set entire object to null if no exam pattern data exists
- NEVER include salary — entrance exams have no salary

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2: Markdown Article (1500 words)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After the JSON block, write a 1500-word original article for Indian exam aspirants.

**Structure (use ## for section headings):**
1. ## Overview — what this exam is, who should appear, conducting body
2. ## Eligibility — age limits, education requirements, nationality, category relaxations (ONLY from data)
3. ## Exam Pattern — markdown table (Section | Questions | Marks | Duration). Include total marks, duration, negative marking details
4. ## Syllabus — key topics and subjects covered
5. ## Important Dates — markdown table (Event | Date). Application start/end, exam date, admit card, result dates
6. ## Application Process — step by step, include the official website URL
7. ## Admit Card — how to download, when available
8. ## Results — how to check, expected timeline
9. ## Preparation Tips — genuine, practical advice. Be specific — mention book names, previous year papers, time management strategies
10. ## Frequently Asked Questions — 3 to 5 Q&As, conversational tone. ONLY factual answers.
11. ## Official Links — bullet list with markdown links
12. *Disclaimer* — italic paragraph telling readers to verify on the official source

**Output rules:**
- Output ONLY the JSON block followed by the markdown body
- Do NOT start the markdown with # (the page already has the h1 title). Start with ##
- No YAML frontmatter, no --- delimiters
- Every sentence must be originally written — zero copy-paste from any source
- Aim for at least 1500 words — cover each section with real depth, not filler`;

  return [EXAM_SYSTEM_PROMPT, userPrompt];
}

export function checkExamContentQuality(
  content: string,
  structuredData: Record<string, unknown>,
  originalExam: ExamRow
): string[] {
  const flags: string[] = [];
  const contentLower = content.toLowerCase();

  // 1. Vague phrases
  for (const phrase of VAGUE_PHRASES) {
    if (contentLower.includes(phrase)) {
      flags.push(`vague_phrase: '${phrase}'`);
    }
  }

  // 2. Salary check — entrance exams should never have salary
  const groqSalary = structuredData.salary;
  if (
    groqSalary &&
    !["", "null", "none"].includes(String(groqSalary).trim().toLowerCase())
  ) {
    flags.push(
      `entrance_exam_salary: AI wrote salary '${groqSalary}' but entrance exams have no salary`
    );
  }

  // 3. Word count
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  if (wordCount < MIN_WORD_COUNT) {
    flags.push(`word_count_below_${MIN_WORD_COUNT}: ${wordCount}`);
  }

  // 4. Official link missing from article body
  const officialLink = originalExam.official_link || "";
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

export async function generateExamContent(exam: ExamRow) {
  const [systemPrompt, userPrompt] = buildExamPrompt(exam);
  const rawContent = await callGroq(systemPrompt, userPrompt);
  const [structuredData, content] = parseStructuredResponse(rawContent);

  // Hard strip salary from structured data
  delete structuredData.salary;

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = calculateReadingTime(content);
  const flags = checkExamContentQuality(content, structuredData, exam);

  return { structuredData, content, wordCount, readingTime, flags };
}
