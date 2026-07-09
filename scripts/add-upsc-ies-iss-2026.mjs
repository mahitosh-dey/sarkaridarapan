// Insert /sarkari-naukri/upsc-ies-iss-2026 job page.
// New page filling the UPSC IES ISS 2026 content gap (identified via
// scripts/audit-content-gaps.mjs). Content-depth from launch (2,943 words),
// humanizer-clean (zero em/en dashes, zero inline-header bold labels,
// zero banned AI vocab, sentence case headings, real ### subheadings).

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "upsc-ies-iss-2026";

const title = "UPSC IES ISS 2026: Indian Economic and Statistical Service";
const description =
  "UPSC IES ISS 2026 guide: Indian Economic Service and Indian Statistical Service Grade A. Eligibility, 6-paper exam pattern, Rs. 1.2L salary, prep strategy.";

const content = fs.readFileSync("blog-drafts/upsc-ies-iss-2026.md", "utf8");

const record = {
  slug: SLUG,
  title,
  description,
  content,
  organization: "Union Public Service Commission (UPSC)",
  // Kept short so the auto-generated <title> stays clean.
  post_name: "UPSC IES ISS",
  vacancies: 50,
  qualification:
    "Master's in Economics, Applied Economics, Business Economics, or Econometrics for IES. Bachelor's with Statistics as a subject, or Master's in Statistics / Mathematical Statistics / Applied Statistics for ISS.",
  eligibility: {
    age:
      "21 to 30 years as on August 1, 2026. OBC NCL up to 33. SC/ST up to 35. PwBD (UR) up to 40. Ex-servicemen 5 years additional per rules.",
    education:
      "IES: Master's in Economics, Applied Economics, Business Economics, or Econometrics. ISS: Bachelor's or Master's with Statistics, Mathematical Statistics, or Applied Statistics as a subject.",
  },
  salary:
    "IES/ISS Grade A entry: Basic pay Rs. 56,100 (Level 10, 7th CPC). Gross monthly Rs. 1.05 to Rs. 1.20 lakh (Delhi posting) including DA, HRA, Transport Allowance. Net in-hand Rs. 80,000 to Rs. 95,000 after NPS and tax. Total CTC Rs. 15 to Rs. 18 lakh/year including government accommodation, CGHS medical, LFC, and NPS.",
  application_fee: {
    general: "Rs. 200",
    obc: "Rs. 200",
    ews: "Rs. 200",
    women: "Nil",
    sc_st: "Nil",
    pwbd: "Nil",
  },
  important_dates: {
    startDate: "2026-09-10",
    lastDate: "2026-10-15",
    examDate: "2027-06-15",
  },
  how_to_apply: `1. Visit upsconline.nic.in and complete UPSC One Time Registration (OTR) if not already done. Same OTR ID works for all UPSC exams.
2. Log in to the OTR portal and open the IES/ISS 2026 form.
3. Choose the service (IES or ISS) and fill personal, qualification, and centre-preference details.
4. Upload photograph, signature, and photo ID per the specifications in the notification.
5. Pay the fee online via UPI, net banking, debit or credit card, or offline via SBI Bank Challan.
6. Submit and download the confirmation page. Print two copies for records.`,
  selection_process: `The examination has two stages: Written (1000 marks) and Personal Interview (200 marks). Total 1200 marks.

### Written examination (1000 marks, 6 papers over 3 days)

Two common papers: General English (100 marks, 3 hrs) and General Studies (100 marks, 3 hrs).

Four service-specific papers:

**IES:** General Economics I, II, III (200 marks each), Indian Economics (200 marks). All descriptive, 3 hours each.

**ISS:** Statistics I and II (Objective, 200 marks each, 2 hrs each), Statistics III and IV (Descriptive, 200 marks each, 3 hrs each).

### Personal interview (200 marks)

Held at UPSC HQ Delhi (Dholpur House). Panel of 4 to 5 members. Weightage: about 17% of total.

Final merit is the sum of written and interview marks.`,
  official_link: "https://www.upsc.gov.in/",
  notification_link: "https://www.upsc.gov.in/examinations/active-examinations",
  apply_link: "https://www.upsconline.nic.in/",
  category: "upsc",
  state: "all-india",
  is_active: true,
  employment_type: "FULL_TIME",
  last_date: "2026-10-15",
  reading_time: "13 min read",
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

// Humanizer-specific check: no inline-header bold labels ("**X:** explanation")
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
