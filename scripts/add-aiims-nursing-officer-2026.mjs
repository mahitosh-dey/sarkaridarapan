// Insert /sarkari-naukri/aiims-nursing-officer-2026 job page.
// Sixth and final of the audit-content-gaps.mjs high-search-intent pages
// (SEBI + IES ISS + IB ACIO + EPFO + IRDAI + AIIMS NO all now done).
// Content-depth from launch (3,214 words), humanizer-clean. Different
// cluster (health/medical) so cross-links go to SSC CGL, Agniveer, and EPFO
// as tenuous adjacencies rather than the regulator cluster.
//
// Pre-insert gate includes all 3 humanizer validation patterns as of the
// 2026-07-10 hardened checklist: §16 strict, bulleted-bold-label §15/§16
// hybrid, and For-**X**: opener.

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "aiims-nursing-officer-2026";

const title = "AIIMS Nursing Officer 2026: NORCET recruitment guide";
const description =
  "AIIMS Nursing Officer 2026 guide: NORCET recruitment for 3,000+ vacancies across all AIIMS in India. Eligibility, syllabus, Rs. 85,000 salary, prep tips.";

const content = fs.readFileSync("blog-drafts/aiims-nursing-officer-2026.md", "utf8");

const record = {
  slug: SLUG,
  title,
  description,
  content,
  organization: "All India Institute of Medical Sciences (AIIMS), New Delhi",
  post_name: "AIIMS Nursing Officer",
  vacancies: 3000,
  qualification:
    "B.Sc Nursing (4-year regular) OR Post-Basic B.Sc Nursing (2-year following GNM) OR Diploma in General Nursing and Midwifery (GNM, 3.5-year) from an Indian Nursing Council recognised institution. State Nursing Council registration mandatory.",
  eligibility: {
    age:
      "18 to 30 years as on cut-off date. OBC NCL up to 33. SC/ST up to 35. PwBD (UR) up to 40. Ex-servicemen 3 years plus service period. Central government employees with 3 years continuous service up to 35. AIIMS contractual nursing staff with 3+ years service up to 40.",
    education:
      "B.Sc Nursing (4-year regular) OR Post-Basic B.Sc Nursing (2-year following GNM) OR GNM Diploma (3.5-year) from INC-recognised institution. Mandatory State Nursing Council or Delhi Nursing Council registration. Provisional applications accepted for candidates awaiting registration certificate.",
  },
  salary:
    "AIIMS Nursing Officer entry: Basic pay Rs. 44,900 (Level 7, 7th CPC). Nursing Allowance Rs. 7,200/month. Gross monthly Rs. 80,000 to Rs. 88,000 (Class X cities) or Rs. 70,000 to Rs. 76,000 (Class Y) or Rs. 62,000 to Rs. 68,000 (Class Z) including DA, HRA, Transport, Nursing, Uniform, and Washing allowances plus Night Duty Allowance for shifts. Net in-hand Rs. 55,000 to Rs. 65,000 after NPS and tax. Perks: AIIMS campus accommodation or HRA, CGHS medical plus AIIMS in-house treatment access, LTC every 4 years, education advance for children, NPS with 14% government contribution.",
  application_fee: {
    general: "Rs. 3,000",
    obc: "Rs. 3,000",
    ews: "Rs. 3,000",
    women: "Rs. 3,000 (Gen/OBC/EWS women); Nil for SC/ST/PwBD",
    sc_st: "Rs. 2,400",
    pwbd: "Nil",
  },
  important_dates: {
    startDate: "2026-03-05",
    lastDate: "2026-04-10",
    examDate: "2026-05-15",
  },
  how_to_apply: `1. Visit aiimsexams.ac.in and register with basic details (name, email, mobile) to receive a registration ID and password.
2. Log in and open the NORCET 2026 application form.
3. Fill personal details, educational qualifications (with year of passing and marks), nursing council registration details, and centre preferences.
4. Rank AIIMS preferences separately (used at counselling stage after NORCET result).
5. Upload photograph, signature, thumb impression, nursing degree certificate, and nursing council registration certificate.
6. Pay the fee online via UPI, net banking, debit card, or credit card.
7. Submit and download the confirmation page. Print two copies for records.`,
  selection_process: `Selection is entirely through NORCET, a two-stage computer-based test. No interview and no physical efficiency test.

### NORCET Stage 1 (screening test, 200 marks, 3 hours)

Objective computer-based test with 200 questions across 4 sections: Nursing subject (160 questions covering medical-surgical, pediatric, obstetric, community, psychiatric nursing), General Knowledge (10), General English (10), and Aptitude and Reasoning (20). Negative marking is one-third of the marks per wrong answer. Only shortlisted candidates (typically top 10 to 15 times the vacancy count) proceed to Stage 2.

### NORCET Stage 2 (main test, 200 marks, 3 hours)

Same syllabus and pattern as Stage 1 with a slightly harder question mix. This is the merit-list-determining test. Stage 1 marks do not carry forward; only Stage 2 score decides ranking.

### Institute-wise counselling

After merit list publication, candidates are called for counselling in merit order. Each candidate chooses one AIIMS from the remaining vacancy list, undergoes document verification, completes a basic medical fitness examination, and receives the appointment offer.`,
  official_link: "https://www.aiimsexams.ac.in/",
  notification_link: "https://www.aiimsexams.ac.in/",
  apply_link: "https://www.aiimsexams.ac.in/",
  category: "central-government",
  state: "all-india",
  is_active: true,
  employment_type: "FULL_TIME",
  last_date: "2026-04-10",
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

// §16 strict: **X:** with colon inside bold
const inlineHeaderPattern = /^\s*-?\s*\*\*[^*\n]+:\s*\*\*/gm;
const inlineHits = content.match(inlineHeaderPattern) || [];
if (inlineHits.length > 0) {
  console.error(`FAIL: ${inlineHits.length} inline-header (§16 strict):`);
  inlineHits.slice(0, 3).forEach((h) => console.error("  " + h.trim()));
  process.exit(1);
}

// §15/§16 hybrid: bulleted lines starting with **Bold label**
const bulletedBoldPattern = /^\s*-\s*\*\*[^*\n]+\*\*/gm;
const bulletedBoldHits = content.match(bulletedBoldPattern) || [];
if (bulletedBoldHits.length > 0) {
  console.error(`FAIL: ${bulletedBoldHits.length} bulleted-bold-label (§15/§16 hybrid):`);
  bulletedBoldHits.slice(0, 3).forEach((h) => console.error("  " + h.trim()));
  process.exit(1);
}

// "For **X**:" opener pattern
const forBoldPattern = /\bFor \*\*[^*\n]+\*\*:/g;
const forBoldHits = content.match(forBoldPattern) || [];
if (forBoldHits.length > 0) {
  console.error(`FAIL: ${forBoldHits.length} For-**X**: opener:`);
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
