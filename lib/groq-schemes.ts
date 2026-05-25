// =============================================================================
// Groq AI Pipeline — Government Schemes
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

/** Database row shape for schemes (snake_case columns from Supabase). */
export interface SchemeRow {
  id: string;
  slug: string;
  title: string;
  ministry: string;
  launched_by: string;
  objective: string;
  eligibility: string[];
  benefits: string[];
  documents: string[];
  how_to_apply: string;
  official_portal: string;
  helpline_number: string;
  category: string;
  state: string;
  published_at: string;
  updated_at: string;
  description: string;
  content: string;
  reading_time: string;
  image: string | null;
  faqs: { question: string; answer: string }[] | null;
  is_active: boolean;
  quality_flag: string[] | null;
  reviewed_at: string | null;
  completeness_score: number | null;
  [key: string]: unknown;
}

/** Map structured JSON keys to Supabase column names. */
export const SCHEME_FIELD_MAP: Record<string, string> = {
  ministry: "ministry",
  launched_by: "launched_by",
  objective: "objective",
  eligibility: "eligibility",
  benefits: "benefits",
  documents: "documents",
  how_to_apply: "how_to_apply",
  official_portal: "official_portal",
  helpline_number: "helpline_number",
  faqs: "faqs",
};

const SCHEME_SYSTEM_PROMPT = `You are a government scheme content writer for an Indian government information portal.
You must ONLY use the data provided. Never guess, assume, or invent any \
information. If a field is missing, write 'Details awaited from official \
notification' — never fabricate eligibility criteria, benefits, or documents.

BANNED PHRASES — never write any of these in the article:
- 'certain date'
- 'will be announced'
- 'may vary'
- 'to be announced'
Instead, if a detail is unknown write: 'Details not yet available. \
Bookmark this page for updates.'

FAQ RULES:
- Only include a FAQ question if you can answer it factually from the data.
- If the answer would be 'Details awaited' or unknown, omit that Q&A entirely.
- It is better to have 3 good FAQs than 5 padded ones.`;

function buildScrapedSchemeJson(scheme: SchemeRow): string {
  const data: Record<string, unknown> = {
    title: scheme.title || "",
    ministry: scheme.ministry || "",
    launched_by: scheme.launched_by || "",
    objective: scheme.objective || "",
    category: scheme.category || "",
    source_page_text: scheme.description || "",
    eligibility: scheme.eligibility || [],
    benefits: scheme.benefits || [],
    documents: scheme.documents || [],
    how_to_apply: scheme.how_to_apply || "",
    official_portal: scheme.official_portal || "",
    helpline_number: scheme.helpline_number || "",
    state: scheme.state || "",
  };

  const filtered: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (
      v !== "" &&
      v !== null &&
      v !== undefined &&
      !(typeof v === "object" && !Array.isArray(v) && Object.keys(v as object).length === 0) &&
      !(Array.isArray(v) && v.length === 0)
    ) {
      filtered[k] = v;
    }
  }

  return JSON.stringify(filtered, null, 2);
}

export function buildSchemePrompt(scheme: SchemeRow): [string, string] {
  const scrapedJson = buildScrapedSchemeJson(scheme);

  const userPrompt = `Write a helpful government scheme article using ONLY this data:

${scrapedJson}

IMPORTANT — MINING SOURCE TEXT:
The source_page_text field contains raw text scraped from the official page. Extract any additional details from it even if they aren't in the structured fields:
- Eligibility criteria details
- Benefits and financial assistance amounts
- Required documents list
- Application process steps
- Important dates and deadlines
- Any other structured data that would make the article more useful

STRICT RULES — read carefully:
- Never invent eligibility criteria not present in the data
- Never invent benefit amounts not in the data
- Never invent document requirements not in the data
- If details are missing, write EXACTLY: 'Details not yet available. Bookmark this page for updates.'
- Keep tone simple and helpful for Indian citizens
- Use Hindi-English terms naturally (sarkari yojana, labh, patra, etc.)
- Write like a helpful government information guide

BANNED PHRASES — do NOT use any of these anywhere in the article:
- 'certain date'
- 'will be announced'
- 'may vary'
- 'to be announced'
- 'TBA'
If a detail is unknown, write 'Not yet available' or omit the section entirely.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1: Structured JSON block
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Output a fenced \`\`\`json block containing structured data about this scheme.
Use this EXACT schema (use null for any field NOT present in the data above):

\`\`\`json
{
  "ministry": "<from data or null>",
  "launched_by": "<from data or null>",
  "objective": "<from data or null>",
  "eligibility": ["<criteria from data>"],
  "benefits": ["<benefits from data>"],
  "documents": ["<documents from data>"],
  "how_to_apply": "<from data or null>",
  "official_portal": "<from data or null>",
  "helpline_number": "<from data or null>",
  "faqs": [
    {"question": "<factual question>", "answer": "<factual answer from data>"}
  ]
}
\`\`\`

**JSON Rules:**
- ONLY use values that appear in the scraped data above (including source_page_text)
- Unknown fields = null. Do NOT guess or fill in from general knowledge
- eligibility, benefits, documents must be arrays of strings

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 2: Markdown Article (1500 words)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After the JSON block, write a 1500-word original article for Indian citizens.

**Structure (use ## for section headings):**
1. ## Overview — what the scheme is, who launched it, its objective
2. ## Eligibility Criteria — who can apply, category-wise details
3. ## Benefits & Features — what beneficiaries receive, financial amounts if available
4. ## Required Documents — list of documents needed to apply
5. ## Application Process — step-by-step how to apply (online/offline)
6. ## Important Dates — if any deadlines exist in the data
7. ## Frequently Asked Questions — 3 to 5 Q&As, conversational tone. ONLY factual answers.
8. ## Official Links — bullet list with official portal, helpline numbers
9. *Disclaimer* — italic paragraph telling readers to verify on the official source

**Output rules:**
- Output ONLY the JSON block followed by the markdown body
- Do NOT start the markdown with # (the page already has the h1 title). Start with ##
- No YAML frontmatter, no --- delimiters
- Every sentence must be originally written — zero copy-paste from any source
- Aim for at least 1500 words — cover each section with real depth, not filler`;

  return [SCHEME_SYSTEM_PROMPT, userPrompt];
}

export function checkSchemeContentQuality(
  content: string,
  _structuredData: Record<string, unknown>,
  originalScheme: SchemeRow
): string[] {
  const flags: string[] = [];
  const contentLower = content.toLowerCase();

  // 1. Vague phrases
  for (const phrase of VAGUE_PHRASES) {
    if (contentLower.includes(phrase)) {
      flags.push(`vague_phrase: '${phrase}'`);
    }
  }

  // 2. Word count
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  if (wordCount < MIN_WORD_COUNT) {
    flags.push(`word_count_below_${MIN_WORD_COUNT}: ${wordCount}`);
  }

  // 3. Official portal missing from article body
  const officialPortal = originalScheme.official_portal || "";
  if (officialPortal) {
    let domain = "";
    try {
      domain = new URL(officialPortal).hostname;
    } catch {
      // ignore bad URL
    }
    if (
      !content.includes(officialPortal) &&
      (!domain || !content.includes(domain))
    ) {
      flags.push(`official_link_not_in_article: ${officialPortal}`);
    }
  }

  return flags;
}

export async function generateSchemeContent(scheme: SchemeRow) {
  const [systemPrompt, userPrompt] = buildSchemePrompt(scheme);
  const rawContent = await callGroq(systemPrompt, userPrompt);
  const [structuredData, content] = parseStructuredResponse(rawContent);
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = calculateReadingTime(content);
  const flags = checkSchemeContentQuality(content, structuredData, scheme);

  return { structuredData, content, wordCount, readingTime, flags };
}
