// Insert /sarkari-naukri/irdai-assistant-manager-2026 job page.
// Fifth of the audit-content-gaps.mjs high-search-intent pages. Content-depth
// from launch (3,744 words), humanizer-clean. Closes the financial-regulator
// cluster (SEBI + RBI + EPFO + IRDAI).
//
// New in this script: `bulleted-bold-label` regex added to the pre-insert
// gate. Codifies the lesson from the UPSC EPFO 2026-07-10 post-launch
// humanizer audit where two §15/§16 hybrid patterns evaded the older
// `^\s*-?\s*\*\*[^*\n]+:\s*\*\*` check (colon sat outside the bold).

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "irdai-assistant-manager-2026";

const title = "IRDAI Assistant Manager 2026: Grade A across 7 streams";
const description =
  "IRDAI Assistant Manager 2026 guide: Grade A insurance regulator officer across 7 streams. Eligibility, 3-stage selection, Rs. 1.15 lakh salary, prep tips.";

const content = fs.readFileSync("blog-drafts/irdai-assistant-manager-2026.md", "utf8");

const record = {
  slug: SLUG,
  title,
  description,
  content,
  organization: "Insurance Regulatory and Development Authority of India (IRDAI)",
  post_name: "IRDAI Assistant Manager",
  vacancies: 50,
  qualification:
    "Stream-specific. Generalist: Bachelor's with 60%. Legal: LLB with 60%. Actuarial: Bachelor's plus 7 IAI subjects cleared. Finance: Bachelor's plus CA/CMA/CFA/Master's in Finance. Accounts: Bachelor's plus CA/CMA. IT: B.E./B.Tech in CS/IT/Electronics with 60% or MCA. Research: Master's with 55% in Economics/Statistics/Actuarial Science/Maths.",
  eligibility: {
    age:
      "21 to 30 years as on the cut-off date. OBC NCL up to 33. SC/ST up to 35. PwBD (UR) up to 40. Ex-servicemen 5 years additional. Widows/divorced women up to 35 (UR), 38 (OBC), 40 (SC/ST).",
    education:
      "Stream-specific. Each stream has its own educational floor; wrong stream applications are rejected at scrutiny. See qualification field for stream-wise breakdown. Streams: Generalist, Legal, Actuarial, Finance, Accounts, IT, Research.",
  },
  salary:
    "IRDAI Assistant Manager entry: Basic pay Rs. 44,500 on IRDAI's own pay scale (44,500 to 89,150 progression), broadly Level 10 equivalent. Gross monthly Rs. 1.05 to Rs. 1.20 lakh (Hyderabad HQ) or Rs. 1.15 to Rs. 1.25 lakh (Delhi/Mumbai) including DA, Grade Allowance (Rs. 6,800), HRA, Special Allowance (Rs. 15,000), Learning Allowance. Net in-hand Rs. 78,000 to Rs. 90,000 after NPS and tax. Total CTC Rs. 15 to Rs. 18 lakh/year including leased accommodation, medical benefits, LTC every 4 years, education advance, NPS with 14% IRDAI contribution.",
  application_fee: {
    general: "Rs. 750",
    obc: "Rs. 750",
    ews: "Rs. 750",
    women: "Rs. 750 (General/OBC/EWS women); Rs. 100 (SC/ST/PwBD women)",
    sc_st: "Rs. 100",
    pwbd: "Rs. 100",
  },
  important_dates: {
    startDate: "2026-06-25",
    lastDate: "2026-07-31",
    examDate: "2026-08-30",
  },
  how_to_apply: `1. Visit irdai.gov.in and open the Careers section during the notification window.
2. Register with basic details (name, email, mobile) to receive a registration ID and password.
3. Log in and fill the detailed form. Choose stream carefully; stream cannot be changed after submission.
4. Fill personal details, educational qualifications, work experience, and centre preference (Hyderabad, Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Pune, Ahmedabad).
5. Upload photograph, signature, and stream-specific qualification certificates.
6. Pay the fee online via UPI, net banking, debit card, or credit card.
7. Submit and download the confirmation page. Print two copies for records.`,
  selection_process: `Three stages: Phase 1 (preliminary objective 160 marks) + Phase 2 (main, 3 papers, 300 marks) + Interview (100 marks). Final merit 85% written + 15% interview.

### Phase 1 (preliminary, 160 marks, 2 hours)

Objective test with 4 sections: Reasoning (40 questions, 40 marks), English Language (40 questions, 40 marks), General Awareness (40 questions, 40 marks), Quantitative Aptitude (40 questions, 40 marks). Negative marking is one-fourth of the marks per wrong answer. Sectional cutoff of 40% (44% General) plus overall cutoff. UR cutoffs typically 110 to 120 out of 160.

### Phase 2 (main examination, 300 marks, 3 papers)

Paper 1 (English descriptive, 100 marks, 60 minutes): essay writing, precis writing, comprehension. Paper 2 (economic and social issues, 100 marks, 40 questions objective, 40 minutes): common across streams. Paper 3 (stream-specific, 100 marks, 40 questions objective, 40 minutes): specialisation-specific covering domain knowledge for the chosen stream. Combined cutoff of 40% (45% General) plus stream-wise merit cutoff.

### Interview (personality test, 100 marks)

Held at IRDAI HQ Hyderabad. Panel of 5 members including Chief General Manager rank officers plus one external subject-matter expert for specialist streams. Focus: Insurance Act 1938, IRDAI Act 1999, current regulations, stream-specific technical depth, personality traits.`,
  official_link: "https://www.irdai.gov.in/",
  notification_link: "https://www.irdai.gov.in/careers",
  apply_link: "https://www.irdai.gov.in/careers",
  category: "banking",
  state: "all-india",
  is_active: true,
  employment_type: "FULL_TIME",
  last_date: "2026-07-31",
  reading_time: "15 min read",
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

// Humanizer §16 strict form: **X:** with colon inside bold
const inlineHeaderPattern = /^\s*-?\s*\*\*[^*\n]+:\s*\*\*/gm;
const inlineHits = content.match(inlineHeaderPattern) || [];
if (inlineHits.length > 0) {
  console.error(`FAIL: ${inlineHits.length} inline-header bold labels (humanizer §16 strict):`);
  inlineHits.slice(0, 3).forEach((h) => console.error("  " + h.trim()));
  process.exit(1);
}

// Humanizer §15/§16 hybrid: bulleted lines starting with **Bold label**.
// New check added after UPSC EPFO 2026-07-10 post-launch audit.
const bulletedBoldPattern = /^\s*-\s*\*\*[^*\n]+\*\*/gm;
const bulletedBoldHits = content.match(bulletedBoldPattern) || [];
if (bulletedBoldHits.length > 0) {
  console.error(`FAIL: ${bulletedBoldHits.length} bulleted-bold-label patterns (humanizer §15/§16 hybrid):`);
  bulletedBoldHits.slice(0, 3).forEach((h) => console.error("  " + h.trim()));
  process.exit(1);
}

// "For **X**:" opener pattern (colon outside bold). Same escape family
// as bulleted-bold-label. Also from the EPFO lesson.
const forBoldPattern = /\bFor \*\*[^*\n]+\*\*:/g;
const forBoldHits = content.match(forBoldPattern) || [];
if (forBoldHits.length > 0) {
  console.error(`FAIL: ${forBoldHits.length} "For **X**:" opener patterns:`);
  forBoldHits.slice(0, 3).forEach((h) => console.error("  " + h.trim()));
  process.exit(1);
}

console.log(`title: ${title.length} OK`);
console.log(`description: ${description.length} OK`);
console.log(`content: ${content.trim().split(/\s+/).length} words OK`);
console.log("no bad chars, no banned vocab, no §16 strict, no §15/§16 hybrid, no For-**X**: opener.");

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
console.log(`Content words: ${inserted.content.trim().split(/\s+/).length}`);
console.log("\nDone.");
