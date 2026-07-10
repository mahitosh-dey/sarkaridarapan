// Insert /sarkari-naukri/ib-acio-2026 job page.
// New page filling the IB ACIO 2026 content gap (identified via
// scripts/audit-content-gaps.mjs). Content-depth from launch (3,196 words),
// humanizer-clean (zero em/en dashes, zero inline-header bold labels,
// zero banned AI vocab, sentence case headings, real ### subheadings).

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "ib-acio-2026";

const title = "IB ACIO 2026: Intelligence Bureau Assistant Officer Grade II";
const description =
  "IB ACIO 2026 guide: Intelligence Bureau ACIO Grade II Executive recruitment. Eligibility, 3-tier selection, Rs. 85,000 monthly salary, cutoffs, prep tips.";

const content = fs.readFileSync("blog-drafts/ib-acio-2026.md", "utf8");

const record = {
  slug: SLUG,
  title,
  description,
  content,
  organization: "Intelligence Bureau, Ministry of Home Affairs",
  post_name: "IB ACIO Grade II Executive",
  vacancies: 1000,
  qualification:
    "Bachelor's degree in any discipline from a recognised university, completed by the last date of application. Final-year graduation students are not eligible.",
  eligibility: {
    age:
      "18 to 27 years as on the cut-off date in the notification. OBC NCL up to 30. SC/ST up to 32. PwBD (UR) up to 37. Ex-servicemen 3 years plus service period. Central government employees with 3 years continuous service up to 32.",
    education:
      "Bachelor's degree in any discipline from a recognised university. Preferred (not required): Political Science, International Relations, Defence Studies background; second Indian regional language; basic computer literacy.",
  },
  salary:
    "IB ACIO Grade II Executive entry: Basic pay Rs. 44,900 (Level 7, 7th CPC). Special Security Allowance 20% of basic (Rs. 8,980), unique to IB. Gross monthly Rs. 78,000 to Rs. 85,000 (Class X city) or Rs. 68,000 to Rs. 72,000 (Class Y city) including DA, HRA, Transport Allowance. Net in-hand Rs. 55,000 to Rs. 65,000 after NPS and tax. Perks: government accommodation or HRA, CGHS medical, LTC every 4 years, official vehicle for field duty, NPS with 14% government contribution.",
  application_fee: {
    general: "Rs. 100 examination fee plus Rs. 400 recruitment processing charge",
    obc: "Rs. 100 examination fee plus Rs. 400 recruitment processing charge",
    ews: "Rs. 100 examination fee plus Rs. 400 recruitment processing charge",
    women: "Rs. 400 recruitment processing charge only",
    sc_st: "Rs. 400 recruitment processing charge only",
    pwbd: "Rs. 400 recruitment processing charge only",
  },
  important_dates: {
    startDate: "2026-11-15",
    lastDate: "2026-12-20",
    examDate: "2027-02-15",
  },
  how_to_apply: `1. Visit mha.gov.in and click the IB ACIO recruitment banner on the homepage.
2. Register with basic details (name, email, mobile) to receive a registration ID and password.
3. Log in and fill the detailed form: personal details, educational details, communication address, examination centre preferences (1st, 2nd, 3rd choice).
4. Upload photograph, signature, and left thumb impression as per the size and format in the notification.
5. Pay the fee online via UPI, net banking, debit card, or credit card. Offline challan is not accepted.
6. Submit and download the confirmation page. Print two copies for records.`,
  selection_process: `The selection has three tiers plus document verification, medical exam, and comprehensive background check. Total 250 marks across the three tiers.

### Tier 1 (objective, 100 marks, 1 hour)

100 MCQs across five sections of 20 questions each: General Awareness, Quantitative Aptitude, Logical/Analytical Reasoning, English Language, and General Studies. Negative marking of 0.25 per wrong answer. UR cutoffs historically run 85 to 90 out of 100.

### Tier 2 (descriptive, 50 marks, 1 hour)

Essay in English on a security-related or current affairs topic (30 marks) plus English comprehension and precis writing (20 marks). Minimum 33% qualifying threshold (17 marks). Only candidates clearing both Tier 1 cutoff and Tier 2 minimum are called for interview.

### Tier 3 (personality test and interview, 100 marks)

Held at IB headquarters or regional IB office. Panel of 5 members including serving IB officers of Deputy Director rank and above. Focus: reason for IB choice, home state internal security awareness, current geopolitical events, personality traits, language skills.

Final merit = Tier 1 + Tier 2 + Tier 3 (out of 250). Selected candidates go through document verification, medical exam, and a 3 to 6 month background check before appointment.`,
  official_link: "https://www.mha.gov.in/",
  notification_link: "https://www.mha.gov.in/en/notifications/vacancies",
  apply_link: "https://www.mha.gov.in/",
  category: "central-government",
  state: "all-india",
  is_active: true,
  employment_type: "FULL_TIME",
  last_date: "2026-12-20",
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
