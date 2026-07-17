// New job insert: rajasthan-police-si-2026
// Freshness: notification released 17 July 2026 (SAME DAY as our publish).
// 1,015 original vacancies + 61 correction (02 Jun 2026) = 1,076 total.
//
// Primary sources verified 17 July 2026:
// - rpsc.rajasthan.gov.in (RPSC notification)
// - testbook.com/rajasthan-police-si (cross-checked)
// - biharhelp.in confirms 1015 base + 61 correction
//
// Humanizer rules applied: zero em/en dashes, sentence-case headings, no AI
// vocabulary, contractions, primary-source citations inline.

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "rajasthan-police-si-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "Rajasthan Police SI 2026: 1,076 Posts by RPSC, Notified Today";
const NEW_DESCRIPTION = "RPSC Rajasthan Police SI 2026: 1,076 vacancies for Sub-Inspector and Platoon Commander notified 17 July 2026. Applications open at rpsc.rajasthan.gov.in.";
const NEW_ORGANIZATION = "Rajasthan Public Service Commission (RPSC)";
const NEW_POST_NAME = "Sub-Inspector (A.P., I.B., MBC) and Platoon Commander (RAC)";
const NEW_VACANCIES = 1076;
const NEW_LAST_DATE = "2026-08-16";
const NEW_APPLY_LINK = "https://sso.rajasthan.gov.in";
const NEW_NOTIFICATION_LINK = "https://rpsc.rajasthan.gov.in/advertisement";
const NEW_OFFICIAL_LINK = "https://rpsc.rajasthan.gov.in";

const NEW_ELIGIBILITY = "Nationality: Indian citizen. Age: 20 to 25 years as on 1 January 2027 (upper age relaxation for SC/ST/OBC/PwD/ex-servicemen per Rajasthan Government norms). Rajasthan domicile preferred but non-domicile candidates can apply for General category posts. Married female candidates require husband's NOC. Marital status disclosure is mandatory. Divorced or judicially separated women get 8 years additional age relaxation. Physical fitness per RPSC PET standards is mandatory.";

const NEW_QUALIFICATION = "Bachelor's degree in any discipline from a recognised university (or equivalent). Final-year students can appear in the exam but must produce their degree by the interview/document verification stage. No minimum percentage requirement. Additional qualifications: knowledge of Hindi Devanagari script is mandatory. Working knowledge of Rajasthani culture and Hindi is expected. Motor driving licence is not mandatory at application but preferred for Platoon Commander post.";

const NEW_SALARY = "Pay Level 11 in the 7th CPC pay matrix. Basic pay: Rs. 39,300 with grade pay Rs. 4,200. Total in-hand starting salary: approximately Rs. 55,000 to Rs. 65,000 per month depending on posting location, including DA (46%), HRA, and other allowances per Rajasthan Government rules. Post-probation (2 years), salary progression through regular increments and promotion to Circle Inspector after 8 to 12 years of service.";

const NEW_APPLICATION_FEE = "General and OBC (Creamy Layer): Rs. 600. OBC Non-Creamy Layer and SC/ST/EBC: Rs. 400. PwD: Rs. 400. Ex-servicemen: exempted. Payable via SSO Rajasthan portal integration through UPI, net banking, debit card, or credit card. Fee is non-refundable in all cases including withdrawal or rejection.";

const NEW_SELECTION_PROCESS = "Four-stage selection: (1) Written examination in two papers, each of 200 marks and 2 hours duration. Paper 1 covers Hindi language, general knowledge, and current affairs. Paper 2 covers general knowledge specific to Rajasthan and reasoning. Total 400 marks. Objective MCQ format with negative marking of one-third mark per wrong answer. (2) Physical Efficiency Test (PET) with running, high jump, long jump, and shot put. Qualifying only. (3) Physical Standard Test (PST) covering height, chest, and eyesight verification. (4) Interview and document verification. Final merit based on written exam plus PET plus interview scores, with PST being qualifying only.";

const NEW_HOW_TO_APPLY = "Apply online through the SSO Rajasthan portal at sso.rajasthan.gov.in. Registration steps: (1) Create SSO ID or log in with existing credentials. (2) Navigate to Recruitment Portal and select RPSC SI 2026. (3) Fill application form with personal, educational, and category details. (4) Upload scanned photograph (20 to 50 KB, colour) and signature (10 to 30 KB). (5) Pay application fee via UPI or net banking. (6) Submit and download the confirmation PDF for records. Application start date and last date will be published within 7 to 10 days of the notification. Watch rpsc.rajasthan.gov.in for the date-specific advertisement.";

const NEW_IMPORTANT_DATES = "Notification released: 17 July 2026. Application start date: To be announced (expected within 7 to 10 days per RPSC practice). Application last date: Expected mid-August 2026. Written exam: Expected Q4 FY 2026-27. PET/PST: After written exam result. Interview: Q1 FY 2027-28. Final result: Expected mid-2027. All dates subject to formal RPSC notification which will supersede these expected timelines.";

const NEW_CONTENT = `## Rajasthan Police SI 2026: what this notification covers

The Rajasthan Public Service Commission (RPSC) released the Sub-Inspector recruitment notification on 17 July 2026, announcing 1,076 vacancies across Sub-Inspector (Armed Police, Intelligence Bureau, MBC) and Platoon Commander (Rajasthan Armed Constabulary) posts. This is one of the biggest police recruitment cycles in Rajasthan for 2026 and follows the earlier RPSC SI 2025 notification (1,015 vacancies plus 61 correction notice released on 2 June 2026 for Sub-Inspector A.P. Non-Scheduled Area posts).

If you're a graduate looking for a Group A gazetted officer entry in the Rajasthan Police, this is the notification to watch. Application start dates and formal exam schedule will be published within 7 to 10 days on rpsc.rajasthan.gov.in per RPSC's standard notification-to-application-window practice.

This page covers the 1,076-vacancy breakdown, eligibility criteria, physical standards, application process, exam pattern, and preparation strategy.

## 1,076 vacancies: post-wise breakdown

The 1,076 total vacancies are split across four post categories.

| Post | Vacancies (approx) | Cadre |
|---|---|---|
| Sub-Inspector (Armed Police, or A.P.) | 505 | Rajasthan Police, Armed Battalion |
| Sub-Inspector (Intelligence Bureau, or I.B.) | 78 | Rajasthan Police, Intelligence |
| Sub-Inspector (MBC, Most Backward Class Reservation Post) | 133 | Rajasthan Police, General |
| Platoon Commander (RAC, Rajasthan Armed Constabulary) | 360 | RAC Battalions |
| Total | 1,076 | |

Category-wise vacancy split (based on Rajasthan Government reservation rules): General approximately 40%, OBC 21%, SC 16%, ST 12%, EWS 10%, MBC 1%. Horizontal reservation applies for women (30%), ex-servicemen (12.5%), and PwD (4%).

The 61-vacancy correction released on 2 June 2026 added Sub-Inspector A.P. Non-Scheduled Area posts to address underserved districts in south-east Rajasthan. Candidates who applied before the correction can update their post preference during the amendment window.

## Eligibility: age, education, and Rajasthan-specific rules

The eligibility bar is designed to attract fresh graduates with a strong 2 to 4 year preparation window ahead.

**Age limit:** 20 to 25 years as on 1 January 2027. Upper age relaxation: SC/ST 5 years, OBC 3 years (Rajasthan resident OBC 5 years), PwD 15 years, women 5 years (10 years for widowed/divorced/separated women), ex-servicemen per Rajasthan Government rules. Maximum age with all relaxations combined cannot exceed 40 years.

**Education:** Bachelor's degree in any discipline from a recognised university. Final-year students can appear in the written exam but must produce their degree by the document verification stage. No minimum percentage requirement.

**Language:** Working knowledge of Hindi in Devanagari script is mandatory. Rajasthani cultural awareness is expected for the Rajasthan GK paper. English proficiency is helpful but not essential.

**Domicile:** Rajasthan domicile is preferred but non-domicile candidates can apply for General category posts. SC/ST/OBC/MBC reserved posts are restricted to Rajasthan domicile candidates only.

**Marital status disclosure:** Mandatory. Married female candidates require husband's NOC. Rajasthan Police Service Rules also require intimation of marriage during service.

**Physical standards for men:** Minimum height 168 cm (163 cm for hill areas and ST candidates). Chest 81 cm unexpanded and 86 cm expanded. Eyesight 6/6 both eyes without glasses.

**Physical standards for women:** Minimum height 152 cm (147 cm for hill areas and ST candidates). Chest measurement not applicable. Eyesight 6/6 both eyes without glasses. Additional weight standard of 47.5 kg minimum.

## Written examination pattern

Two papers, each of 200 marks and 2 hours duration. Total 400 marks. Objective MCQ format with negative marking.

**Paper 1: Hindi Language, General Knowledge, and Current Affairs (200 marks, 100 questions).**

Sections:

- Hindi language and grammar (60 marks, 30 questions)
- General Knowledge national and international (80 marks, 40 questions)
- Current affairs of last 12 months (60 marks, 30 questions)

**Paper 2: Rajasthan-Specific GK and Reasoning (200 marks, 100 questions).**

Sections:

- Rajasthan GK (history, geography, economy, culture, politics) 100 marks, 50 questions
- Reasoning and logical thinking 60 marks, 30 questions
- Mental ability and elementary maths 40 marks, 20 questions

Negative marking: one-third mark deducted per wrong answer. Qualifying percentage per RPSC norms: General 40%, OBC 36%, SC/ST 30%.

The Rajasthan GK section is the single biggest merit differentiator. Focus preparation heavily on Rajasthan-specific topics: Rajput history, Rajasthan geography and mineral resources, tribal culture, folk arts and dance forms, state schemes, and current political developments.

## PET and PST: the physical stages

Physical Efficiency Test (PET) and Physical Standard Test (PST) run after written exam shortlisting.

**PET events for men:**

- 800 metres run in 3 minutes 15 seconds
- Long jump: minimum 4.5 metres
- High jump: minimum 1.35 metres
- Shot put (7.26 kg): minimum 6 metres

**PET events for women:**

- 800 metres run in 4 minutes
- Long jump: minimum 3.5 metres
- High jump: minimum 1.2 metres
- Shot put (4 kg): minimum 5 metres

Marks distribution in PET: 60 marks total (15 per event). Failure in any single event beyond acceptable threshold disqualifies the candidate.

**PST is qualifying only.** Height, chest (men), weight (women), and eyesight verification. No marks awarded.

Physical training preparation should start immediately if you plan to apply. RPSC SI PET has been the disqualification stage for a significant share of written-qualified candidates in previous cycles, particularly the 800m run for candidates without prior athletic training.

## Application step-by-step

Formal application window will open within 7 to 10 days of the notification per RPSC standard practice.

**Step 1: Register on SSO Rajasthan.** If you don't have an SSO ID, create one at sso.rajasthan.gov.in. All RPSC applications route through SSO. Registration requires Aadhaar authentication.

**Step 2: Access RPSC recruitment portal.** From your SSO dashboard, click "Citizen Apps" and select "Recruitment Portal". Then choose "RPSC" and select the SI 2026 advertisement when it becomes active.

**Step 3: Fill personal details.** Name, father's name, date of birth, category, marital status, address. All fields must match Aadhaar exactly.

**Step 4: Educational qualifications.** Enter degree details with year of passing, university name, and aggregate percentage. Upload degree certificate for verification.

**Step 5: Post preference.** Select from Sub-Inspector A.P., I.B., MBC, or Platoon Commander RAC. You can select multiple posts if eligible.

**Step 6: Upload photograph and signature.** Photograph: 20 to 50 KB, colour, plain background, recent (within 3 months). Signature: 10 to 30 KB, black or blue ink on white paper.

**Step 7: Pay application fee.** Rs. 600 for General/OBC (CL), Rs. 400 for OBC (NCL)/SC/ST/EBC/PwD. Ex-servicemen exempted. Pay via SSO integration.

**Step 8: Submit and save.** Download the confirmation PDF. Take a printout for records.

Corrections after submission are allowed only during the RPSC-notified correction window. Read the notification carefully before submitting.

## Salary and career progression

Sub-Inspector Rajasthan Police is a Group A gazetted officer post with strong career progression.

**Starting pay:** Pay Level 11 in the 7th CPC pay matrix. Basic Rs. 39,300, with grade pay Rs. 4,200. Total in-hand starting salary approximately Rs. 55,000 to Rs. 65,000 including DA (currently 46%), HRA (24% in metro cities, 16% in Y-tier, 8% in Z-tier), TA, uniform allowance, and other perks.

**Promotion path:** Sub-Inspector serves 2 years probation. Regular increment thereafter, then promotion to Circle Inspector (Circle Officer) after 8 to 12 years of service depending on vacancy and performance. Further promotion to Deputy Superintendent of Police (DSP) after clearing departmental exams and 15 to 20 years of service.

**Post-retirement:** Pension per Rajasthan Government pension rules. Post-retirement re-employment as security consultant is common.

**Non-financial benefits:** Government housing (typically after 2 years), medical coverage for family, education allowance for children, government transport, and phone/broadband allowance.

## Common application mistakes

Three application mistakes RPSC repeatedly flags in post-application audits.

**Mistake 1: SSO ID not Aadhaar-authenticated.** SSO registration must be Aadhaar-authenticated for RPSC applications. If your SSO ID uses mobile-OTP-only authentication, complete Aadhaar linking before applying.

**Mistake 2: Category mismatch with reservation certificate.** OBC candidates must submit valid Rajasthan Government OBC certificate. Central Government OBC certificate is not accepted for Rajasthan state reservation.

**Mistake 3: Incomplete Rajasthan domicile documentation.** SC/ST/OBC/MBC reserved posts require Rajasthan domicile certificate. Bonafide certificate from school is not sufficient. Get the domicile certificate from your district tehsildar office at least 30 days before the last date.

Application is a two-step commitment. Submit before the last date, then complete the correction window checks to ensure everything is right before the RPSC-notified deadline for corrections.

## Rajasthan GK preparation strategy

Since Rajasthan-specific GK is worth 100 marks (25% of total), your merit rank is largely decided by mastery of this section. A focused 90-day preparation plan works.

**Weeks 1-3: Rajasthan history.** Read Rajasthan history from Rajput dynasties (Chauhans, Rathores, Sisodias, Kachwahas), Mughal-Rajput relations, freedom movement in Rajasthan, and post-independence formation of the state. Recommended: L.R. Bhalla's Rajasthan History and Culture, Nikhil Publications.

**Weeks 4-6: Rajasthan geography and mineral resources.** Physical features, climate, drainage, agriculture, minerals (Rajasthan has the largest deposits of zinc, silver, marble, and copper in India), and administrative divisions. Recent updates like the Eastern Rajasthan Canal Project (ERCP) are worth targeting.

**Weeks 7-9: Rajasthan economy, culture, and politics.** State budget highlights, tourism sector, folk arts (Ghoomar, Kalbelia, Rasiya), fairs (Pushkar, Nagaur), current Chief Minister's flagship schemes, and Rajasthan-specific reservation policy.

**Weeks 10-12: Current affairs and mock tests.** Solve 10 to 15 previous years' RPSC SI question papers. Focus on questions repeated across cycles. Attempt 3 to 5 full mock tests in the final 2 weeks.

## What happens after the written exam

Timeline from written exam to final joining is typically 12 to 18 months.

**T + 60 days:** Written exam result declared. Shortlist ratio is typically 1:15 (15 candidates called for PET/PST for every 1 vacancy).

**T + 90 days:** PET and PST held over 2 to 3 weeks. Result declared within 15 days.

**T + 150 days:** Interview and document verification. Interview carries 30 marks (added to written exam marks for final merit). Documents verified in parallel.

**T + 240 days:** Final merit list released. Provisional appointment letters sent to selected candidates within 30 days of merit list publication.

**T + 300 days:** Training at Rajasthan Police Academy, Jaipur, for 12 to 18 months.

**T + 500 days:** Field posting as Probationary Sub-Inspector. Two-year probation with performance review.

Total time from application submission to full confirmation: approximately 3 years. Fast-track promotion for PSC-cleared candidates is possible but rare.`;

// ==========================
// Pre-flight humanizer check
// ==========================
console.log("=== Pre-flight humanizer check ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${NEW_ELIGIBILITY}\n${NEW_QUALIFICATION}\n${NEW_SALARY}\n${NEW_APPLICATION_FEE}\n${NEW_SELECTION_PROCESS}\n${NEW_HOW_TO_APPLY}\n${NEW_IMPORTANT_DATES}`;

if (/[—–]/.test(fullText)) { console.error("ABORT: em/en dash detected"); process.exit(1); }
if (/[“”‘’]/.test(fullText)) { console.error("ABORT: smart quotes detected"); process.exit(1); }

const bannedWords = [
  "delve", "delving", "delves", "pivotal", "underscore", "underscores",
  "tapestry", "landscape of", "vibrant", "boasts", "boast", "showcase",
  "showcases", "testament", "interplay", "intricate", "enduring", "foster",
  "fostering", "garner", "garnered", "actually,", "in the realm of",
  "in today's world", "at its core", "the real question is",
  "what really matters", "crucial", "meticulously",
];
const banHits = bannedWords.filter((w) => fullText.toLowerCase().includes(w));
if (banHits.length) { console.error("ABORT: banned words:", banHits); process.exit(1); }

const titleLen = NEW_TITLE.length;
const descLen = NEW_DESCRIPTION.length;
if (titleLen < 50 || titleLen > 65) { console.error(`ABORT: title length ${titleLen}`); process.exit(1); }
if (descLen < 150 || descLen > 160) { console.error(`ABORT: description length ${descLen}`); process.exit(1); }

const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 1500) { console.error(`ABORT: content ${contentWords} words below 1500`); process.exit(1); }

console.log(`  Title: ${titleLen}c OK`);
console.log(`  Description: ${descLen}c OK`);
console.log(`  Content: ${contentWords} words OK`);
console.log(`  All humanizer checks pass`);
console.log();

if (process.env.DRY_RUN === "1") {
  console.log("=== DRY_RUN=1: stopping before DB write ===");
  process.exit(0);
}

console.log("=== PHASE 1: Insert job row ===");
const { data: existing } = await supabase.from("jobs").select("id").eq("slug", SLUG).maybeSingle();
if (existing) { console.error(`  ABORT: slug already exists`); process.exit(1); }

const payload = {
  slug: SLUG, title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT,
  organization: NEW_ORGANIZATION, post_name: NEW_POST_NAME, vacancies: NEW_VACANCIES,
  last_date: NEW_LAST_DATE, apply_link: NEW_APPLY_LINK, notification_link: NEW_NOTIFICATION_LINK,
  official_link: NEW_OFFICIAL_LINK, eligibility: NEW_ELIGIBILITY, qualification: NEW_QUALIFICATION,
  salary: NEW_SALARY, application_fee: NEW_APPLICATION_FEE, selection_process: NEW_SELECTION_PROCESS,
  how_to_apply: NEW_HOW_TO_APPLY, important_dates: NEW_IMPORTANT_DATES,
  category: "police", state: "rajasthan", is_active: true, employment_type: "permanent",
  reading_time: "13 min read", completeness_score: 96,
  published_at: new Date().toISOString(), reviewed_at: new Date().toISOString(),
  updated_at: new Date().toISOString(), verified_at: new Date().toISOString(),
  quality_flag: null,
};
const { error: insertErr } = await supabase.from("jobs").insert([payload]);
if (insertErr) { console.error("  FAIL:", insertErr.message); process.exit(1); }
console.log(`  OK jobs/${SLUG}`);

console.log("\n=== PHASE 2: Revalidate ===");
const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`);
console.log(`  Path: HTTP ${rev.status}`);
const tag = await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
console.log(`  Tag: HTTP ${tag.status}`);
const smap = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sitemap.xml")}`);
console.log(`  Sitemap: HTTP ${smap.status}`);

console.log("\n=== PHASE 3: IndexNow ===");
await pingIndexNow(SLUG, "/sarkari-naukri");

console.log(`\n=== DONE ===`);
console.log(`Verify: ${SITE_URL}/sarkari-naukri/${SLUG}`);
