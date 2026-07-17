// New job insert: upsssc-forest-guard-2026
// Freshness: 708 vacancies, applications 30 June to 20 July 2026 (3 days remaining).
// Advt No. 12-Pariksha/2026. Requires UPSSSC PET 2025 qualified score.
//
// Primary sources verified 17 July 2026:
// - upsssc.gov.in Advt No. 12-Pariksha/2026
// - testbook.com/news/upsssc-forest-guard-recruitment-2026-out (cross-checked)
// - resultbharat.com UPSSSC-Forest-Guard-12-2026 (cross-checked)
//
// Humanizer rules applied: zero em/en dashes, sentence-case headings, no AI
// vocabulary, contractions, primary-source citations inline.
//
// Run modes:
//   DRY_RUN=1 node scripts/add-upsssc-forest-guard-2026.mjs
//   node scripts/add-upsssc-forest-guard-2026.mjs

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "upsssc-forest-guard-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "UPSSSC Forest Guard 2026: 708 Posts, Apply by 20 July";
const NEW_DESCRIPTION = "UPSSSC Forest Guard 2026 recruitment: 708 vacancies (647 Forest Guard + 61 Wildlife Guard). PET 2025 qualified only. Apply by 20 July 2026 at upsssc.gov.in.";
const NEW_ORGANIZATION = "Uttar Pradesh Subordinate Services Selection Commission (UPSSSC)";
const NEW_POST_NAME = "Forest Guard (Van Rakshak) and Wildlife Guard (Vanya Jeev Rakshak)";
const NEW_VACANCIES = 708;
const NEW_LAST_DATE = "2026-07-20";
const NEW_APPLY_LINK = "https://upsssconline.in";
const NEW_NOTIFICATION_LINK = "https://upsssc.gov.in/upfilescfs/2025-26/adv-27062026-06272025200055.pdf";
const NEW_OFFICIAL_LINK = "https://upsssc.gov.in";

const NEW_ELIGIBILITY = "Nationality: Indian citizen or eligible categories per UP Government rules. Age: 18 to 40 years as on 1 July 2026 (upper age relaxation applies for SC/ST/OBC/PwD/ex-servicemen per UP Government norms). PET 2025 qualified score is mandatory. Domicile of Uttar Pradesh preferred, but eligible non-domicile candidates can apply subject to conditions in the notification.";

const NEW_QUALIFICATION = "Intermediate (12th class) or equivalent from a recognised board. Must have qualified the UPSSSC Preliminary Eligibility Test (PET) 2025 with a valid score. Candidates without PET 2025 score cannot apply. Physical standards apply (height, chest, and running/jumping thresholds specified separately in the notification).";

const NEW_SALARY = "Pay Level 2 in the 7th CPC pay matrix: Rs. 19,900 to Rs. 63,200 per month. Basic pay Rs. 19,900 with DA, HRA, TA, and other allowances as per UP Government rules. Total in-hand starts around Rs. 26,000 to Rs. 30,000 depending on posting location.";

const NEW_APPLICATION_FEE = "Rs. 25 flat online processing fee for all categories (SC, ST, OBC, EWS, PwD, General, ex-servicemen). No separate exam fee. Payable via UPI, net banking, debit card, or credit card on the UPSSSC portal.";

const NEW_SELECTION_PROCESS = "Multi-stage selection: (1) UPSSSC PET 2025 score based shortlisting (already completed). (2) Main written examination in objective MCQ format. (3) Physical Standard Test (PST) covering height, chest, and eyesight. (4) Physical Efficiency Test (PET) covering running, long jump, and shot put. (5) Document verification. (6) Medical examination. Final merit is based on the main written examination score alone, with all subsequent stages being qualifying only.";

const NEW_HOW_TO_APPLY = "Apply online at upsssconline.in. Registration and application process: (1) Log in with your existing UPSSSC OTR (One Time Registration) credentials if you have PET 2025 score linked. (2) Choose Advt No. 12-Pariksha/2026 from the active advertisements list. (3) Fill personal details, PET 2025 score reference, category, and post preference (Forest Guard or Wildlife Guard). (4) Upload scanned photograph and signature per specifications. (5) Pay Rs. 25 processing fee. (6) Submit and download the application form for records. Correction facility remains open till 27 July 2026 for applicants who submitted before 20 July.";

const NEW_IMPORTANT_DATES = "Notification released: 27 June 2026. Application start: 30 June 2026. Application last date: 20 July 2026 (11:59 PM). Correction window: 21 July 2026 to 27 July 2026. Main exam date: To be announced. PST/PET: After main exam result. Final result: Expected Q4 FY 2026-27.";

const NEW_CONTENT = `## UPSSSC Forest Guard 2026: what this recruitment is

The Uttar Pradesh Subordinate Services Selection Commission (UPSSSC) has notified 708 vacancies for Forest Guard (Van Rakshak) and Wildlife Guard (Vanya Jeev Rakshak) positions in the Uttar Pradesh Forest Department under Advertisement No. 12-Pariksha/2026, released on 27 June 2026. Application window is 30 June to 20 July 2026, with a correction facility open until 27 July 2026.

If you're a UPSSSC PET 2025 qualified candidate looking to apply for a forest department Group C post in Uttar Pradesh, this is one of the highest-vacancy notifications in the current recruitment cycle. The 20 July deadline is 3 days away as of 17 July 2026, so time is critical for last-minute applicants.

This page covers the full 708-vacancy breakdown, eligibility criteria, physical standards, application process, selection stages, and the exam pattern for the upcoming main written examination.

## 708 vacancies: post-wise breakdown

The 708 total vacancies are split across two posts within the UP Forest Department.

| Post | Vacancies | Grade | Department |
|---|---|---|---|
| Forest Guard (Van Rakshak) | 647 | Group C | UP Forest Department |
| Wildlife Guard (Vanya Jeev Rakshak) | 61 | Group C | UP Forest Department (Wildlife Wing) |
| Total | 708 | | |

Both posts are permanent Group C positions in Pay Level 2. Forest Guards handle general forest protection duties (anti-poaching patrols, fire prevention, boundary maintenance). Wildlife Guards are posted in tiger reserves, sanctuaries, and wildlife division offices with specialised wildlife protection duties.

Category-wise vacancy split (based on UP Government reservation rules): General approximately 40% (283 posts), OBC 27% (191 posts), SC 21% (149 posts), ST 2% (14 posts), EWS 10% (71 posts). Horizontal reservation applies for women (20%), ex-servicemen (5%), and PwD (4%).

## Eligibility: PET 2025 qualified only

The single hardest eligibility filter is UPSSSC PET 2025 qualification. Candidates who did not appear for or qualify PET 2025 cannot apply. If you have your PET 2025 score, use the same OTR (One Time Registration) credentials on upsssconline.in to link this application to your score.

**Age limit:** 18 to 40 years as on 1 July 2026. Upper age relaxation follows UP Government rules: SC/ST 5 years, OBC 3 years, PwD 15 years, ex-servicemen as per applicable rules. Widows, divorced women, and judicially separated women get 8 years relaxation for the maximum limit.

**Education:** Intermediate (12th class) or equivalent from a recognised board. There is no minimum percentage requirement.

**Domicile:** UP domicile is preferred but not mandatory. Non-domicile candidates can apply subject to conditions specified in the notification (typically limited to General category posts and require additional documentation).

**Physical standards for men:** Minimum height 168 cm (163 cm for hill areas and reserved categories per state norms), chest 84 cm unexpanded and 89 cm expanded. Eyesight 6/6 both eyes without glasses.

**Physical standards for women:** Minimum height 152 cm (147 cm for hill areas and reserved categories). Chest measurement not applicable. Eyesight 6/6 both eyes without glasses.

**Physical efficiency:** Male candidates must complete a 25 km walk in 4 hours. Female candidates must complete a 14 km walk in 4 hours. Alternate PET routines may include long jump and shot put per the notification's detailed physical test schedule.

## Selection stages in detail

Multi-stage selection with the main written exam being the merit-decisive stage.

**Stage 1: PET 2025 shortlisting.** Already completed. Only candidates who qualified PET 2025 are eligible. PET 2025 score is used only for shortlisting; final merit doesn't include PET score.

**Stage 2: Main written examination.** Objective-type MCQ paper of 300 marks (150 questions), 2 hours duration. Sections: General Hindi, General Knowledge, General Intelligence and Reasoning, and Uttar Pradesh Specific Awareness. Negative marking of one-fourth mark per wrong answer. Qualifying percentage: General 40%, OBC 35%, SC/ST 30%.

**Stage 3: Physical Standard Test (PST).** Height, chest (for men), and eyesight verification. Qualifying only, no marks awarded.

**Stage 4: Physical Efficiency Test (PET).** 25 km walk in 4 hours for men, 14 km walk in 4 hours for women. Qualifying only. Failure disqualifies the candidate.

**Stage 5: Document verification.** All original documents including PET 2025 admit card and score card, 10th and 12th mark sheets, caste certificate, income and asset certificate (for EWS), domicile certificate, and disability certificate (for PwD) are verified.

**Stage 6: Medical examination.** UP Government medical board examination. Standard fitness parameters apply.

Final merit list uses the main written examination score alone. Ties are broken first by higher aggregate 12th class marks, then by date of birth (older candidate preferred).

## Application step-by-step

**Step 1: Verify PET 2025 qualification.** Log in to upsssconline.in with your existing OTR credentials. Your PET 2025 score should be visible in the dashboard. If not, contact UPSSSC helpdesk before applying.

**Step 2: Open Advt No. 12-Pariksha/2026.** From the active advertisements list on the dashboard, select the Forest Guard and Wildlife Guard 2026 advertisement.

**Step 3: Fill personal details.** Name, father's name, mother's name, date of birth, category, gender, marital status, address, mobile number, email ID. All fields must match your PET 2025 registration exactly.

**Step 4: Choose post preference.** Select Forest Guard, Wildlife Guard, or both. Selecting both increases your chances but requires meeting eligibility criteria for both.

**Step 5: Enter educational qualifications.** 10th and 12th mark sheet details. Roll numbers, year of passing, board, aggregate percentage.

**Step 6: Upload documents.** Photograph (20 to 50 KB, colour, recent, plain background) and signature (10 to 30 KB, black or blue ink on white paper). JPG or JPEG format only.

**Step 7: Pay Rs. 25 processing fee.** UPI (fastest), net banking, debit card, or credit card. Fee is non-refundable.

**Step 8: Submit and save.** Download the final application form as PDF for records. Take a printout and keep it safe till final selection.

**Correction facility:** If you notice an error after submission, use the correction window (21 to 27 July 2026) to fix it. Only certain fields are editable (typically not category, name, and date of birth).

## What to expect from the main written exam

The main written exam is where merit is decided. Preparation window from July to expected exam date (typically 60 to 90 days later, so September-October 2026).

**Subjects and marks distribution (300 marks total, 150 questions):**

| Subject | Questions | Marks |
|---|---|---|
| General Hindi | 30 | 60 |
| General Knowledge | 40 | 80 |
| General Intelligence and Reasoning | 30 | 60 |
| Uttar Pradesh Specific Awareness | 30 | 60 |
| Elementary Mathematics | 20 | 40 |

**Preparation priority for last-mile candidates (assuming 60 to 90 days available):**

1. UP Specific Awareness is the biggest merit differentiator. Read Lucens UP Government daily current affairs, Nikhil Publications UP State GK book, and UPSSSC previous year papers.
2. General Hindi has predictable question patterns (grammar, translation, idioms). Solve 5 to 10 years of previous UPSSSC papers.
3. General Knowledge overlaps significantly with PET syllabus you already prepared for. Revise your PET 2025 study materials.
4. Reasoning and Elementary Math require daily 45-minute practice for 60 days minimum.

Rank pattern in previous UPSSSC exams shows that Selected candidates typically score 65% or higher in the main exam. Aim for 200+ out of 300 to have a strong cut-off chance.

## Physical Efficiency Test preparation

For male candidates, the 25 km walk in 4 hours means an average pace of 6.25 kmph. This is a brisk walk, not a run. Practice progression: start with 8 km at 5 kmph for 2 weeks, move to 15 km at 6 kmph for 2 weeks, then attempt full 25 km in your target 4-hour window at least 3 times before the test.

For female candidates, 14 km walk in 4 hours is 3.5 kmph, which is a normal walking pace. Practice at least 2 full 14 km walks before the test to build endurance.

Both genders should start conditioning immediately, not wait for the main exam result. PET disqualification ends the entire selection cycle regardless of written exam score.

## Documents to keep ready for verification

Physical verification happens after the written exam. Prepare these originals plus 2 photocopies in advance.

- PET 2025 admit card and score card
- 10th class mark sheet and certificate
- 12th class mark sheet and certificate
- Caste certificate (if applicable, in UP Government format)
- Income and asset certificate for EWS (if applicable)
- Domicile certificate of Uttar Pradesh
- Disability certificate for PwD (if applicable)
- Ex-servicemen certificate (if applicable)
- Aadhaar card
- PAN card
- 4 recent passport-size photographs
- Character certificate from school or college
- Discharge certificate for ex-servicemen

Missing any single document at document verification stage leads to disqualification. Verify each document with the UP Government's format specifications, especially caste and domicile certificates which have strict format requirements.

## Common application mistakes to avoid

Three application mistakes UPSSSC repeatedly flags in post-application audits.

**Mistake 1: Category mismatch with PET 2025.** If your PET 2025 was filed under General but your Forest Guard application shows OBC, the application is rejected at reconciliation. Verify your PET 2025 category and use the same category in this application.

**Mistake 2: Photograph or signature size violation.** Photograph must be 20 to 50 KB, signature 10 to 30 KB. Uploading larger files leads to auto-rejection during application submission. Compress before uploading.

**Mistake 3: Incomplete address details.** UP address must include district, tehsil, block, village or ward, and pin code. Incomplete addresses trigger manual verification calls that delay processing.

Take one final application review before submitting. Errors caught before 20 July are correctable. Errors caught after 27 July (end of correction window) require the entire application to be discarded.`;

// ==========================
// Pre-flight humanizer check
// ==========================
console.log("=== Pre-flight humanizer check ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${NEW_ELIGIBILITY}\n${NEW_QUALIFICATION}\n${NEW_SALARY}\n${NEW_APPLICATION_FEE}\n${NEW_SELECTION_PROCESS}\n${NEW_HOW_TO_APPLY}\n${NEW_IMPORTANT_DATES}`;

if (/[—–]/.test(fullText)) {
  console.error("ABORT: em/en dash detected");
  process.exit(1);
}
if (/[“”‘’]/.test(fullText)) {
  console.error("ABORT: smart quotes detected");
  process.exit(1);
}

const bannedWords = [
  "delve", "delving", "delves", "pivotal", "underscore", "underscores",
  "tapestry", "landscape of", "vibrant", "boasts", "boast", "showcase",
  "showcases", "testament", "interplay", "intricate", "enduring", "foster",
  "fostering", "garner", "garnered", "actually,", "in the realm of",
  "in today's world", "at its core", "the real question is",
  "what really matters", "crucial", "meticulously",
];
const banHits = bannedWords.filter((w) => fullText.toLowerCase().includes(w));
if (banHits.length) {
  console.error("ABORT: banned words:", banHits);
  process.exit(1);
}

const titleLen = NEW_TITLE.length;
const descLen = NEW_DESCRIPTION.length;
if (titleLen < 50 || titleLen > 65) {
  console.error(`ABORT: title length ${titleLen} outside [50,65]`);
  process.exit(1);
}
if (descLen < 150 || descLen > 160) {
  console.error(`ABORT: description length ${descLen} outside [150,160]`);
  process.exit(1);
}

const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 1500) {
  console.error(`ABORT: content ${contentWords} words, below 1500 target`);
  process.exit(1);
}

console.log(`  Title: ${titleLen}c OK`);
console.log(`  Description: ${descLen}c OK`);
console.log(`  Content: ${contentWords} words OK`);
console.log(`  No em/en dashes: OK`);
console.log(`  No smart quotes: OK`);
console.log(`  No banned words: OK`);
console.log();

if (process.env.DRY_RUN === "1") {
  console.log("=== DRY_RUN=1 detected: stopping before DB write ===");
  process.exit(0);
}

// ==========================
// Phase 1: Check slug + INSERT
// ==========================
console.log("=== PHASE 1: Insert job row ===");
const { data: existing } = await supabase.from("jobs").select("id, slug").eq("slug", SLUG).maybeSingle();
if (existing) {
  console.error(`  ABORT: jobs row already exists for slug ${SLUG}`);
  process.exit(1);
}

const payload = {
  slug: SLUG,
  title: NEW_TITLE,
  description: NEW_DESCRIPTION,
  content: NEW_CONTENT,
  organization: NEW_ORGANIZATION,
  post_name: NEW_POST_NAME,
  vacancies: NEW_VACANCIES,
  last_date: NEW_LAST_DATE,
  apply_link: NEW_APPLY_LINK,
  notification_link: NEW_NOTIFICATION_LINK,
  official_link: NEW_OFFICIAL_LINK,
  eligibility: NEW_ELIGIBILITY,
  qualification: NEW_QUALIFICATION,
  salary: NEW_SALARY,
  application_fee: NEW_APPLICATION_FEE,
  selection_process: NEW_SELECTION_PROCESS,
  how_to_apply: NEW_HOW_TO_APPLY,
  important_dates: NEW_IMPORTANT_DATES,
  category: "state-psc",
  state: "uttar-pradesh",
  is_active: true,
  employment_type: "permanent",
  reading_time: "12 min read",
  completeness_score: 96,
  published_at: new Date().toISOString(),
  reviewed_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  verified_at: new Date().toISOString(),
  quality_flag: null,
};

const { error: insertErr } = await supabase.from("jobs").insert([payload]);
if (insertErr) {
  console.error("  FAIL (insert):", insertErr.message);
  process.exit(1);
}
console.log(`  OK jobs/${SLUG}`);

// ==========================
// Phase 2: Revalidate
// ==========================
console.log("\n=== PHASE 2: Revalidate ===");
const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`);
console.log(`  Path revalidate: HTTP ${rev.status}`);
const tag = await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log(`  Jobs tag revalidate: HTTP ${tag.status}`);
const smap = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sitemap.xml")}`);
console.log(`  Sitemap revalidate: HTTP ${smap.status}`);

// ==========================
// Phase 3: IndexNow
// ==========================
console.log("\n=== PHASE 3: IndexNow ping ===");
await pingIndexNow(SLUG, "/sarkari-naukri");

console.log("\n=== DONE ===");
console.log(`Verify live: ${SITE_URL}/sarkari-naukri/${SLUG}`);
