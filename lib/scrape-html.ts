/**
 * HTML scraping and structured data extraction for government job pages.
 *
 * Ports the regex extractors from scripts/scraper.py to TypeScript,
 * using cheerio for HTML parsing instead of BeautifulSoup.
 */

import * as cheerio from "cheerio";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ScrapedData {
  vacancies: number;
  last_date: string;
  salary: string;
  post_name: string;
  qualification: string;
  eligibility: Record<string, string>;
  application_fee: Record<string, string>;
  important_dates: Record<string, string>;
  selection_process: string[];
  how_to_apply: string;
  description: string;
  completeness_score: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MONTHS =
  "january|february|march|april|may|june|july|august|" +
  "september|october|november|december|" +
  "jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
  "AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/120.0.0.0 Safari/537.36";

const FETCH_TIMEOUT_MS = 15_000;

// ---------------------------------------------------------------------------
// Regex extractors (ported from scraper.py)
// ---------------------------------------------------------------------------

export function parseVacancies(text: string): number {
  // Pattern 1: number followed by vacancy/post/opening keyword
  let m = text.match(/(\d[\d,]+)\s*(?:\+\s*)?(?:vacanc|post|opening|nos)/i);
  if (m) return parseInt(m[1].replace(/,/g, ""), 10);

  // Pattern 2: "Total Vacancies: 1000" or "Vacancy: 500"
  m = text.match(/(?:total\s+)?vacanc(?:y|ies)\s*[:\-\u2013]\s*(\d[\d,]+)/i);
  if (m) return parseInt(m[1].replace(/,/g, ""), 10);

  // Pattern 3: "for 1000" or "of 500"
  m = text.match(/(?:for|of)\s+(\d[\d,]+)\s+(?:vacanc|post|seat)/i);
  if (m) return parseInt(m[1].replace(/,/g, ""), 10);

  return 0;
}

export function parseLastDate(text: string): string {
  // Pattern 1: "Last Date" / "closing date" followed by DD/MM/YYYY
  let m = text.match(
    /(?:last\s+date|closing\s+date|end\s+date)[:\s\-\u2013to]*(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4})/i
  );
  if (m) return m[1];

  // Pattern 2: "Last Date: 15 January 2026"
  const p2 = new RegExp(
    `(?:last\\s+date|closing\\s+date)[:\\s\\-\\u2013to]*(\\d{1,2}(?:st|nd|rd|th)?\\s+(?:${MONTHS})\\s+\\d{4})`,
    "i"
  );
  m = text.match(p2);
  if (m) return m[1];

  // Pattern 3: DD/MM/YYYY standalone
  m = text.match(/(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4})/);
  if (m) return m[1];

  // Pattern 4: "15 January 2026" or "15th Jan 2026"
  const p4 = new RegExp(
    `(\\d{1,2}(?:st|nd|rd|th)?\\s+(?:${MONTHS})\\s+\\d{4})`,
    "i"
  );
  m = text.match(p4);
  if (m) return m[1];

  // Pattern 5: "January 2026" (month + year only)
  const p5 = new RegExp(`((?:${MONTHS})\\s+\\d{4})`, "i");
  m = text.match(p5);
  if (m) return m[1];

  return "";
}

export function parseSalary(text: string): string {
  // Pattern 1: "Rs. X - Y" or "Rs X,XXX to Y,YYY"
  let m = text.match(
    /(?:Rs\.?\s*|INR\s*)(\d[\d,]+(?:\s*[/\-\u2013to]+\s*(?:Rs\.?\s*)?\d[\d,]+)?)(?:\s*(?:per\s+month|p\.?m\.?|per\s+annum|p\.?a\.?))?/i
  );
  if (m) {
    let salary = `Rs. ${m[1].trim()}`;
    const gp = text.match(
      /(?:GP|Grade\s+Pay)\s*[:\-]?\s*(?:Rs\.?\s*)?(\d[\d,]+)/i
    );
    if (gp) salary += ` + GP ${gp[1]}`;
    const lvl = text.match(/(?:Pay\s+)?Level\s*[:\-]?\s*(\d+)/i);
    if (lvl) salary += ` (Level ${lvl[1]})`;
    return salary;
  }

  // Pattern 2: "Pay Level X" standalone
  m = text.match(
    /(?:Pay\s+)?Level\s*[:\-]?\s*(\d+)(?:\s*(?:to|[-\u2013])\s*(?:Level\s*)?(\d+))?/i
  );
  if (m) {
    if (m[2]) return `Pay Level ${m[1]} to ${m[2]}`;
    return `Pay Level ${m[1]}`;
  }

  // Pattern 3: "Pay Band" with range
  m = text.match(
    /Pay\s+Band\s*[:\-]?\s*(?:Rs\.?\s*)?(\d[\d,]+\s*[-\u2013]\s*\d[\d,]+)/i
  );
  if (m) return `Pay Band Rs. ${m[1]}`;

  return "";
}

export function extractPostName(text: string): string {
  const patterns = [
    /(?:Name\s+of\s+(?:the\s+)?Post|Post\s+Name|Designation)\s*[:\-\u2013]\s*(.+?)(?:\n|$)/i,
    /(?:Name\s+of\s+Post)\s*(.+?)(?:\n|$)/i,
  ];
  for (const pat of patterns) {
    const m = text.match(pat);
    if (m) {
      const val = m[1].trim().replace(/^[:\-\u2013]+/, "").trim();
      if (val.length > 5) return val.slice(0, 200);
    }
  }
  return "";
}

export function extractQualification(text: string): string {
  const patterns = [
    /(?:Educational\s+Qualification|Qualification\s+Required|Essential\s+Qualification)\s*[:\-\u2013]\s*([\s\S]+?)(?:\n\n|\n(?=[A-Z\d]))/i,
    /(?:Qualification)\s*[:\-\u2013]\s*([\s\S]+?)(?:\n\n|\n(?=[A-Z\d]))/i,
  ];
  for (const pat of patterns) {
    const m = text.match(pat);
    if (m) {
      const val = m[1].trim();
      if (val.length > 10) return val.slice(0, 500);
    }
  }
  return "";
}

export function extractAgeLimit(text: string): string {
  const patterns = [
    /(?:Age\s+Limit|Age\s+as\s+on)\s*[:\-\u2013]\s*([\s\S]+?)(?:\n\n|\n(?=[A-Z][a-z]))/i,
    /(?:Age\s+Limit)\s*([\s\S]+?)(?:\n\n)/i,
  ];
  for (const pat of patterns) {
    const m = text.match(pat);
    if (m) {
      const val = m[1].trim();
      if (val.length > 5) return val.slice(0, 300);
    }
  }
  return "";
}

export function extractApplicationFee(text: string): Record<string, string> {
  const fee: Record<string, string> = {};
  const sectionMatch = text.match(
    /(?:Application\s+Fee|Examination\s+Fee|Fee\s+Details?)\s*[:\-\u2013]\s*([\s\S]+?)(?:\n\n|\n(?=[A-Z][a-z]{3}))/i
  );
  if (!sectionMatch) return fee;

  const section = sectionMatch[1];

  // Pattern: "General/OBC: Rs. 100" or "SC/ST: Rs. 0/-"
  const catPattern =
    /((?:General|UR|OBC|SC|ST|EWS|PwD|PH|Women|Female|Ex-?Servicem[ae]n)[/\w\s]*?)\s*[:\-\u2013]\s*(?:Rs\.?\s*)?([\d,]+)/gi;
  let m: RegExpExecArray | null;
  while ((m = catPattern.exec(section)) !== null) {
    const category = m[1].trim();
    const amount = m[2].replace(/,/g, "");
    fee[category] = `Rs. ${amount}`;
  }

  // Fallback: single fee for all
  if (Object.keys(fee).length === 0) {
    const single = section.match(/(?:Rs\.?\s*)([\d,]+)/);
    if (single) {
      fee["all"] = `Rs. ${single[1].replace(/,/g, "")}`;
    }
  }

  return fee;
}

export function extractImportantDates(text: string): Record<string, string> {
  const dates: Record<string, string> = {};
  const datePat = `(\\d{1,2}[/\\-.]\\d{1,2}[/\\-.]\\d{4}|\\d{1,2}(?:st|nd|rd|th)?\\s+(?:${MONTHS})\\s+\\d{4})`;

  const patterns: Record<string, RegExp[]> = {
    start_date: [
      new RegExp(
        `(?:Starting\\s+Date|Date\\s+of\\s+(?:Opening|Commencement)|Apply\\s+From)\\s*[:\\-\\u2013]\\s*${datePat}`,
        "i"
      ),
    ],
    last_date: [
      new RegExp(
        `(?:Last\\s+Date|Closing\\s+Date|End\\s+Date|Last\\s+Date\\s+(?:to|of|for)\\s+(?:Apply|Submission|Receipt))\\s*[:\\-\\u2013]\\s*${datePat}`,
        "i"
      ),
    ],
    exam_date: [
      new RegExp(
        `(?:Date\\s+of\\s+(?:Exam|Examination|Test|CBT|Written\\s+Test)|Exam\\s+Date)\\s*[:\\-\\u2013]\\s*${datePat}`,
        "i"
      ),
    ],
  };

  for (const [key, pats] of Object.entries(patterns)) {
    for (const pat of pats) {
      const m = text.match(pat);
      if (m) {
        dates[key] = m[1].trim();
        break;
      }
    }
  }

  return dates;
}

export function extractSelectionProcess(text: string): string[] {
  const m = text.match(
    /(?:Selection\s+Process|Mode\s+of\s+Selection|Scheme\s+of\s+(?:Exam|Selection))\s*[:\-\u2013]\s*([\s\S]+?)(?:\n\n|\n(?=[A-Z][a-z]{4}))/i
  );
  if (!m) return [];

  const section = m[1].trim();
  const steps: string[] = [];

  for (const line of section.split("\n")) {
    const cleaned = line.replace(/^[\s\d.)\-\u2022]+/, "").trim();
    if (cleaned.length > 5) steps.push(cleaned);
  }

  return steps.slice(0, 10);
}

export function extractHowToApply(text: string): string {
  const m = text.match(
    /(?:How\s+to\s+Apply|Mode\s+of\s+Application|Application\s+Procedure)\s*[:\-\u2013]\s*([\s\S]+?)(?:\n\n|\n(?=[A-Z][a-z]{4}))/i
  );
  if (m) {
    const val = m[1].trim();
    if (val.length > 20) return val.slice(0, 1000);
  }
  return "";
}

// ---------------------------------------------------------------------------
// Completeness score (ported from scraper.py _calculate_completeness_score)
// ---------------------------------------------------------------------------

function isFilled(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim() !== "" && value.trim() !== "0" && value.trim() !== '""';
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.keys(value as Record<string, unknown>).length > 0;
  if (typeof value === "number") return value > 0;
  return Boolean(value);
}

export function calculateCompletenessScore(job: Record<string, unknown>): number {
  let filled = 0;

  // 1. vacancies
  if (isFilled(job.vacancies)) filled++;

  // 2. application_start_date (inside important_dates)
  const dates = (job.important_dates as Record<string, string>) || {};
  if (typeof dates === "object" && dates !== null) {
    const start = dates.startDate || dates.start_date || "";
    if (isFilled(start)) filled++;
  }

  // 3. application_end_date (important_dates or top-level last_date)
  let end = "";
  if (typeof dates === "object" && dates !== null) {
    end = dates.lastDate || dates.last_date || "";
  }
  if (!isFilled(end)) {
    end = (job.last_date as string) || "";
  }
  if (isFilled(end)) filled++;

  // 4. exam_date
  if (typeof dates === "object" && dates !== null) {
    const exam = dates.examDate || dates.exam_date || "";
    if (isFilled(exam)) filled++;
  }

  // 5. age_limit (inside eligibility)
  const elig = (job.eligibility as Record<string, string>) || {};
  if (typeof elig === "object" && elig !== null) {
    const age = elig.age || elig.age_limit || "";
    if (isFilled(age)) filled++;
  }

  // 6. qualification
  if (isFilled(job.qualification)) filled++;

  // 7. application_fee
  const fee = job.application_fee;
  if (typeof fee === "object" && fee !== null && Object.keys(fee as Record<string, unknown>).length > 0) {
    filled++;
  } else if (typeof fee === "string" && fee.trim() !== "" && fee.trim() !== '""') {
    filled++;
  }

  // 8. salary
  if (isFilled(job.salary)) filled++;

  // 9. selection_process
  const sp = job.selection_process;
  if (Array.isArray(sp) && sp.length > 0) {
    filled++;
  } else if (typeof sp === "string" && sp.trim() !== "" && sp.trim() !== '""') {
    filled++;
  }

  return Math.round((filled / 9) * 1000) / 10;
}

// ---------------------------------------------------------------------------
// HTML table extraction
// ---------------------------------------------------------------------------

function extractTablesText($: cheerio.CheerioAPI): string {
  const parts: string[] = [];
  $("table").each((_, table) => {
    const rows: string[] = [];
    $(table)
      .find("tr")
      .each((_, tr) => {
        const cells: string[] = [];
        $(tr)
          .find("td, th")
          .each((_, cell) => {
            cells.push($(cell).text().trim());
          });
        if (cells.length > 0) rows.push(cells.join(" | "));
      });
    if (rows.length > 0) parts.push(rows.join("\n"));
  });
  return parts.join("\n\n");
}

// ---------------------------------------------------------------------------
// Main scrape function
// ---------------------------------------------------------------------------

export async function scrapeHtmlPage(url: string): Promise<ScrapedData | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const response = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!response.ok) return null;

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("text/plain")) {
      return null;
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Remove script, style, nav, footer, header tags to get cleaner text
    $("script, style, nav, footer, header, noscript, iframe").remove();

    // Get body text
    const bodyText = $("body").text().replace(/\s+/g, " ").trim();

    // Also get table text separately (tables often have structured fee/vacancy data)
    const tablesText = extractTablesText($);

    // Combine body text and tables text for extraction
    const fullText = bodyText + "\n\n" + tablesText;

    // Run all extractors
    const vacancies = parseVacancies(fullText);
    const last_date = parseLastDate(fullText);
    const salary = parseSalary(fullText);
    const post_name = extractPostName(fullText);
    const qualification = extractQualification(fullText);
    const age_limit = extractAgeLimit(fullText);
    const application_fee = extractApplicationFee(fullText);
    const important_dates = extractImportantDates(fullText);
    const selection_process = extractSelectionProcess(fullText);
    const how_to_apply = extractHowToApply(fullText);

    // Build eligibility object
    const eligibility: Record<string, string> = {};
    if (age_limit) eligibility.age_limit = age_limit;

    // Truncated description for Groq context
    const description = bodyText.slice(0, 2000);

    // Build the result object for completeness scoring
    const result: ScrapedData = {
      vacancies,
      last_date,
      salary,
      post_name,
      qualification,
      eligibility,
      application_fee,
      important_dates,
      selection_process,
      how_to_apply,
      description,
      completeness_score: 0,
    };

    result.completeness_score = calculateCompletenessScore(
      result as unknown as Record<string, unknown>
    );

    return result;
  } catch {
    // Network error, timeout, parse error — return null for graceful fallback
    return null;
  }
}
