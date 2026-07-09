// Insert /sarkari-naukri/sebi-grade-a-2026 job page.
// New page targeting the "SEBI Grade A 2026" high-search-intent query.
// Content-depth (2,623 words) from launch, following the RBI Grade B structural pattern.
// Reads Supabase creds from .env.local.

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "sebi-grade-a-2026";

const title = "SEBI Grade A 2026: Officer Recruitment, Salary, Prep Guide";
const description =
  "SEBI Grade A 2026: notification expected August 2026, Phase 1 in October. Streams: General, Legal, IT, Research. Salary up to Rs. 1.45L. Full exam guide.";

const content = fs.readFileSync("blog-drafts/sebi-grade-a-2026.md", "utf8");

const record = {
  slug: SLUG,
  title,
  description,
  content,
  organization: "Securities and Exchange Board of India (SEBI)",
  post_name: "Officer Grade A (Assistant Manager): General, Legal, IT, Engineering (Civil/Electrical), Research, Rajbhasha, Official Language",
  vacancies: 100,
  qualification:
    "Bachelor's degree with 60% marks (55% SC/ST/PwBD) for General stream. Stream-specific: LLB for Legal; BE/BTech/MCA in Computer Science/IT/Electronics for IT; BE/BTech in Civil or Electrical for Engineering; Master's in Statistics/Economics/Finance/Commerce for Research; Master's in Hindi or English (with Hindi paper) for Rajbhasha and Official Language.",
  eligibility: {
    age: "30 years maximum for General as on the reference date in notification (typically August 1). OBC NCL: up to 33. SC/ST: up to 35. PwBD: up to 40. Ex-servicemen: 5 years additional per rules.",
    education:
      "Bachelor's degree with 60% marks (55% SC/ST/PwBD) for General stream. Stream-specific qualifications apply for Legal (LLB), IT (BE/BTech/MCA), Engineering (BE/BTech Civil or Electrical), Research (Master's in Statistics/Economics/Finance), Rajbhasha and Official Language (Master's with Hindi as a subject).",
  },
  salary:
    "SEBI Grade A Officer (Assistant Manager) starting pay: Rs. 44,500/month basic. Total emoluments including DA, HRA, Grade Allowance, Family Allowance, Special Allowance approximately Rs. 1.35 to Rs. 1.45 lakh/month at Mumbai posting. Net in-hand Rs. 1.05 to Rs. 1.15 lakh after NPS and tax. Annual CTC Rs. 20 to Rs. 24 lakh including leased accommodation in Mumbai, medical cover, LFC, and concessional loans.",
  application_fee: {
    general: "Rs. 1,000",
    obc: "Rs. 1,000",
    ews: "Rs. 1,000",
    sc_st: "Rs. 100",
    pwbd: "Rs. 100",
    women: "Rs. 100",
    ex_servicemen: "Nil",
  },
  important_dates: {
    startDate: "2026-08-15",
    lastDate: "2026-09-15",
    examDate: "2026-10-25",
  },
  how_to_apply: `1. Visit sebi.gov.in Careers section and click Recruitment.
2. Register with your name, email, mobile number, and date of birth. You receive a registration ID and password by email.
3. Log in with the registration ID and complete the application form: personal, educational, work experience, and stream preference.
4. Upload photograph (200 KB max, JPG), signature (100 KB max, JPG), and category or PwBD certificate if applicable.
5. Pay the application fee online via UPI, net banking, debit card, or credit card.
6. Submit and download the final application form. Print at least two copies for interview and future reference.`,
  selection_process: `**Phase 1: Online Screening (200 marks, 60 minutes)**

Qualifying stage. Sectional and total cutoffs must be cleared to progress.

| Section | Questions | Marks | Time |
|---|---|---|---|
| General Awareness | 40 | 40 | 25 mins |
| English Language | 40 | 40 | 25 mins |
| Quantitative Aptitude | 40 | 40 | 25 mins |
| Reasoning | 40 | 40 | 25 mins |
| Awareness of Securities Market | 40 | 40 | 25 mins |

Negative marking: 1/4 of the marks for a correct answer.

**Phase 2: Online Descriptive + Objective (300 marks, 3 papers)**

Phase 2 marks count in the final merit.

- Paper 1: English (Descriptive), 100 marks, 60 minutes. Essay, precis, comprehension.
- Paper 2: Stream-specific (Objective), 100 marks, 60 minutes.
- Paper 3: Stream-specific (Mix), 100 marks, 60 minutes.

**Interview: 100 marks.**

Held at SEBI Mumbai HQ (BKC). Final merit = 85% Phase 2 + 15% Interview.`,
  official_link: "https://www.sebi.gov.in/",
  notification_link: "https://www.sebi.gov.in/careers.html",
  apply_link: "https://www.sebi.gov.in/careers.html",
  category: "banking",
  state: "all-india",
  is_active: true,
  employment_type: "FULL_TIME",
  last_date: "2026-09-15",
  reading_time: "12 min read",
  image: "",
  published_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  verified_at: new Date().toISOString(),
};

// ---------- validation ----------
console.log("\n=== VALIDATION ===");
if (title.length < 50 || title.length > 65) {
  console.error(`FAIL: title ${title.length} outside 50-65`);
  process.exit(1);
}
if (description.length < 150 || description.length > 160) {
  console.error(`FAIL: description ${description.length} outside 150-160`);
  process.exit(1);
}

// Deep-scan all string values in the record for em/en dashes and smart quotes.
const badChars = /[—–“”‘’]/;
const walk = (obj, path = "") => {
  if (typeof obj === "string") {
    if (badChars.test(obj)) return `bad char in ${path}: ${obj.substring(0, 80)}`;
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const err = walk(obj[i], `${path}[${i}]`);
      if (err) return err;
    }
  } else if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      const err = walk(v, path ? `${path}.${k}` : k);
      if (err) return err;
    }
  }
  return null;
};
const badErr = walk(record);
if (badErr) {
  console.error("FAIL:", badErr);
  process.exit(1);
}

const banned = [
  "actually", "delve", "crucial", "pivotal", "tapestry", "testament",
  "align with", "underscore", "garner", "showcase", "landscape of",
  "interplay", "intricate", "vibrant", "enduring", "additionally",
  "fostering", "foster",
];
const cLower = content.toLowerCase();
const hits = banned.filter((w) => cLower.includes(w));
if (hits.length > 0) {
  console.error("FAIL: banned vocab:", hits.join(", "));
  process.exit(1);
}

console.log(`title: ${title.length} OK`);
console.log(`description: ${description.length} OK`);
console.log(`content: ${content.trim().split(/\s+/).length} words OK`);
console.log("no bad chars, no banned vocab.");

// ---------- check dup ----------
console.log("\n=== CHECK DUPE ===");
const { data: existing } = await supabase
  .from("jobs")
  .select("slug")
  .eq("slug", SLUG)
  .maybeSingle();
if (existing) {
  console.error("FAIL: row already exists for slug", SLUG);
  process.exit(1);
}
console.log("no existing row.");

// ---------- insert ----------
console.log("\n=== INSERT ===");
const { data: inserted, error: iErr } = await supabase
  .from("jobs")
  .insert(record)
  .select()
  .single();
if (iErr) {
  console.error("Insert failed:", iErr);
  process.exit(1);
}
console.log(`Inserted OK. ID: ${inserted.id}`);
console.log(`Slug: ${inserted.slug}`);
console.log(`is_active: ${inserted.is_active}`);
console.log(`Content words: ${inserted.content.trim().split(/\s+/).length}`);

console.log("\nDone.");
