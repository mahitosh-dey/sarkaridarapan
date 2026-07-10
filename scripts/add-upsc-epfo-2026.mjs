// Insert /sarkari-naukri/upsc-epfo-2026 job page.
// New page filling the UPSC EPFO 2026 content gap (identified via
// scripts/audit-content-gaps.mjs). Content-depth from launch (3,401 words),
// humanizer-clean (zero em/en dashes, zero inline-header bold labels,
// zero banned AI vocab, sentence case headings, real ### subheadings).

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "upsc-epfo-2026";

const title = "UPSC EPFO 2026: Enforcement Officer and Accounts Officer";
const description =
  "UPSC EPFO 2026 guide: Enforcement Officer and Accounts Officer combined recruitment. Eligibility, exam syllabus, Rs. 90,000 monthly salary, prep tips.";

const content = fs.readFileSync("blog-drafts/upsc-epfo-2026.md", "utf8");

const record = {
  slug: SLUG,
  title,
  description,
  content,
  organization: "Union Public Service Commission (UPSC) for EPFO, Ministry of Labour and Employment",
  post_name: "UPSC EPFO",
  vacancies: 500,
  qualification:
    "EO: Bachelor's degree in any discipline. AO: Bachelor's degree plus ACA (Chartered Accountancy) or ACMA (Cost Accountancy) or SAS certification or equivalent central/state accounts department qualification.",
  eligibility: {
    age:
      "30 years maximum as on the cut-off date. OBC NCL up to 33. SC/ST up to 35. PwBD (UR) up to 40. Ex-servicemen 3 years plus service period. Central government employees with 3 years continuous service up to 35.",
    education:
      "EO: Bachelor's degree in any discipline from a recognised university. Preferred: Law, CS, CA, ICWA, or diploma in Personnel Management, Industrial Relations, Social Work, or Labour Welfare. AO: Bachelor's degree plus ACA (ICAI) or ACMA (ICMAI) or Subordinate Accounts Service certificate or equivalent.",
  },
  salary:
    "UPSC EPFO EO/AO entry: Basic pay Rs. 47,600 (Level 8, 7th CPC). Gross monthly Rs. 82,000 to Rs. 90,000 (Class X city) or Rs. 72,000 to Rs. 78,000 (Class Y city) including DA, HRA, Transport Allowance. Net in-hand Rs. 58,000 to Rs. 70,000 after NPS and tax. Perks: government accommodation or HRA, CGHS medical, LTC every 4 years, TA/DA on inspection tours (EO), NPS with 14% government contribution.",
  application_fee: {
    general: "Rs. 25",
    obc: "Rs. 25",
    ews: "Rs. 25",
    women: "Nil",
    sc_st: "Nil",
    pwbd: "Nil",
  },
  important_dates: {
    startDate: "2026-07-25",
    lastDate: "2026-09-05",
    examDate: "2026-11-15",
  },
  how_to_apply: `1. Visit upsconline.nic.in and complete UPSC One Time Registration (OTR) if not already done. Same OTR ID works for all UPSC exams.
2. Log in to the OTR portal and open the EPFO 2026 examination form.
3. Fill personal details, educational qualifications, and centre preference (Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad, Ahmedabad, and others).
4. Indicate post preference: EO only, AO only, or both. Choosing both maximises selection probability for CA/CMA/Commerce background candidates.
5. Upload photograph, signature, and photo identification per specifications.
6. Pay the Rs. 25 fee online via UPI, net banking, debit or credit card, or offline via SBI Bank Challan.
7. Submit and download the confirmation page. Print two copies for records.`,
  selection_process: `Two stages: Recruitment Test (written, 120 marks) and Personality Test (interview, 100 marks). Final merit is 75% written + 25% interview.

### Recruitment Test (written, 120 marks, 2 hours)

Single-paper objective test with 120 questions across 10 sections: General English, Indian Freedom Struggle, Current Events, Indian Polity and Economy, General Accounting Principles, Industrial Relations and Labour Laws, General Science and Computer Applications, General Mental Ability and Quantitative Aptitude, and Social Security in India. Negative marking is one-third of the marks assigned per question. UR cutoffs historically run around 90 to 100 out of 120.

### Personality Test (interview, 100 marks)

Held at UPSC HQ Delhi (Dholpur House). Panel of 4 to 5 members. Focus areas: EPF Act and EPS scheme understanding, 2020 Labour Codes, current economic issues affecting workers, and reason for choosing EPFO over SSC CGL or banking.

### Post allocation

Final merit calculated from written (300 marks scaled) plus interview (100). Post allocation between EO and AO is based on merit rank and preference. AO cutoffs run lower due to the qualification bar filtering candidates.`,
  official_link: "https://www.upsc.gov.in/",
  notification_link: "https://www.upsc.gov.in/examinations/active-examinations",
  apply_link: "https://www.upsconline.nic.in/",
  category: "upsc",
  state: "all-india",
  is_active: true,
  employment_type: "FULL_TIME",
  last_date: "2026-09-05",
  reading_time: "14 min read",
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

const inlineHeaderPattern = /^\s*-?\s*\*\*[^*\n]+:\s*\*\*/gm;
const inlineHits = content.match(inlineHeaderPattern) || [];
if (inlineHits.length > 0) {
  console.error(`FAIL: ${inlineHits.length} inline-header bold labels (violates humanizer §16):`);
  inlineHits.slice(0, 3).forEach((h) => console.error("  " + h.trim()));
  process.exit(1);
}

console.log(`title: ${title.length} OK`);
console.log(`description: ${description.length} OK`);
console.log(`content: ${content.trim().split(/\s+/).length} words OK`);
console.log("no bad chars, no banned vocab, no inline-header bold labels.");

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
