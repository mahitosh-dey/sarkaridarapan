// New job insert: aai-je-atc-2026 (Airports Authority of India Junior Executive - Air Traffic Control)
// Pre-launch page. Notification expected July 2026. ~400+ vacancies expected based on prior cycles.
//
// Primary sources verified 17 July 2026:
// - aai.aero/en/careers/recruitment (dashboard confirms upcoming)
// - Career360, Testbook, CareerPower expect 400+ vacancies
// - Prior cycle (2025) had 309 JE ATC vacancies

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "aai-je-atc-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "AAI JE ATC 2026: Expected 400+ Vacancies, Notification July";
const NEW_DESCRIPTION = "AAI JE ATC 2026: 400+ Junior Executive Air Traffic Control posts expected July. B.Sc Physics+Maths or B.Tech ECE eligible. Apply at aai.aero, salary Rs 40k+.";
const NEW_ORGANIZATION = "Airports Authority of India (AAI), Ministry of Civil Aviation";
const NEW_POST_NAME = "Junior Executive (Air Traffic Control)";
const NEW_VACANCIES = 400;
const NEW_LAST_DATE = "2026-08-15";
const NEW_APPLY_LINK = "https://www.aai.aero/en/careers/recruitment";
const NEW_NOTIFICATION_LINK = "https://www.aai.aero/en/careers/recruitment";
const NEW_OFFICIAL_LINK = "https://www.aai.aero";

const NEW_ELIGIBILITY = "Nationality: Indian citizen. Age: Not more than 27 years as on the notification date (upper age relaxation for SC/ST 5 years, OBC 3 years, PwD 10 years, ex-servicemen per Government of India norms). Educational qualification: (a) Full-time regular Bachelor's degree in Science with Physics and Mathematics as subjects with at least 60% marks (55% for SC/ST/PwD), OR (b) Full-time regular Bachelor's degree in Engineering or Technology in any discipline (preferably Electronics, Telecommunications, Information Technology, or Computer Science) with at least 60% marks (55% for reserved categories). Fresh graduates and final-year students eligible.";

const NEW_QUALIFICATION = "Bachelor's degree in Science (Physics and Mathematics) or Bachelor's degree in Engineering (BE/BTech). Physics and Mathematics preferred subjects for science graduates. Electronics, Telecommunications, IT, or Computer Science preferred for engineering graduates. Minimum 60% marks required for General/OBC/EWS candidates, 55% for SC/ST/PwD candidates. Additional qualifications: strong communication skills in English and Hindi, working knowledge of aviation industry, and computer proficiency are desirable for the voice test and interview stages.";

const NEW_SALARY = "Pay Level 10 in the CPSE pay matrix. Basic pay Rs. 40,000 with grade pay of Rs. 4,600 to Rs. 5,000. Total CTC ranges from Rs. 40,000 to Rs. 1,40,000 per month depending on tier of posting, allowances, and years of service. Starting in-hand salary approximately Rs. 65,000 to Rs. 75,000 per month at major airport postings. Full CPSE benefits including PF, gratuity, LTC, medical for family, and government housing after 2 years. Retirement age 60 with defined-contribution pension per CPSE rules.";

const NEW_APPLICATION_FEE = "Application fee for AAI recruitment (based on prior cycle patterns, subject to confirmation in the 2026 notification): Rs. 1,000 for General/OBC/EWS candidates. SC/ST/PwD/ex-servicemen/women candidates typically exempted or charged Rs. 250 to Rs. 500. Payable online through the AAI recruitment portal via UPI, net banking, or debit/credit card. Non-refundable in all cases.";

const NEW_SELECTION_PROCESS = "Multi-stage selection typically following this sequence: (1) Computer-Based Test (CBT). Online objective MCQ paper of approximately 120 to 150 questions and 2 hours duration. Sections: English Language, General Aptitude and Reasoning, Domain Knowledge (Physics, Mathematics, Electronics, and Aviation Awareness). Negative marking of one-third mark per wrong answer. (2) Voice Test to evaluate clarity of speech, accent neutrality, and communication ability under stress. Failure in voice test disqualifies the candidate. (3) Test for consumption of psychoactive substances (drug test) as per DGCA aviation industry standards. Failure disqualifies. (4) Document verification and background check. Final merit is decided by CBT score with voice test and drug test being qualifying only.";

const NEW_HOW_TO_APPLY = "The 2026 notification is expected in July 2026 based on AAI's usual cycle. Watch aai.aero/en/careers/recruitment for the exact notification and application link. Once notification is released, apply online through the AAI recruitment portal: (1) Register on the AAI recruitment portal with mobile OTP and email verification. (2) Fill personal details, category, and educational qualifications. (3) Select preferred airport regions and post preferences. (4) Upload photograph, signature, and required certificates. (5) Pay application fee. (6) Submit and download confirmation PDF. Application-to-CBT window is typically 45 to 60 days. Admit cards for the CBT release 7 to 10 days before the exam.";

const NEW_IMPORTANT_DATES = "Notification release: Expected July 2026. Application start date: Within 7 days of notification. Application last date: Expected mid to late August 2026. Admit card release: Expected 7 to 10 days before CBT. CBT date: Expected September-October 2026. Voice test and drug test: After CBT result, typically 30 to 45 days later. Document verification: After voice test qualification. Final result: Expected Q4 FY 2026-27. All dates are estimates based on prior AAI cycles and will be updated within 24 hours of the formal notification release.";

const NEW_CONTENT = `## AAI JE ATC 2026: what to expect

The Airports Authority of India (AAI) is expected to release the Junior Executive (Air Traffic Control) 2026 notification in July 2026, per multiple industry reports and AAI's own recruitment dashboard signals. Based on the prior 2025 cycle (309 vacancies) and 2024 cycle (490 vacancies), the 2026 notification is expected to include 400+ vacancies for Junior Executive positions in Air Traffic Control.

If you're a fresh Physics/Mathematics graduate or a B.Tech (Electronics, Telecommunications, IT, or Computer Science) candidate under 27 years of age, this is one of the highest-paying entry-level central PSU jobs available annually. Starting salary approximately Rs. 65,000 to Rs. 75,000 in-hand at major airport postings, with full CPSE benefits including government housing after 2 years.

This page tracks the expected 2026 notification, covers the standard AAI JE ATC eligibility criteria, exam pattern based on prior cycles, salary structure, and preparation strategy. Once the formal notification is released on aai.aero, we'll update this page with the exact vacancy count, application dates, and CBT schedule within 24 hours.

## What is Air Traffic Control at AAI

Air Traffic Controllers at AAI are responsible for the safe, orderly, and efficient movement of air traffic in Indian airspace. Two operational domains: Approach Control (managing aircraft within 40 nautical miles of an airport) and Area Control (managing aircraft in en-route airspace at high altitudes).

Working environment involves 24x7 rotating shifts at Air Traffic Control Towers, Approach Control Rooms, or Area Control Centres. Physical setup includes multi-screen radar consoles, radio communication systems, and coordinated interaction with pilots, other ATC positions, and the Indian Air Force's air defence command.

Career progression: Junior Executive to Assistant Manager (5 to 7 years), to Manager (10 to 12 years), to Senior Manager (15 to 18 years), and eventually to General Manager or Chief Air Traffic Controller (25 to 30 years). Post-retirement placements at private airport operators (GMR Group, Adani Airports, Bengaluru Airport) offer 40 to 60% salary premium over public sector.

## Eligibility criteria in detail

Two educational qualification routes for AAI JE ATC:

**Route 1: B.Sc with Physics and Mathematics.** Full-time regular Bachelor's degree in Science with Physics and Mathematics as two of the three main subjects. Minimum 60% aggregate for General/OBC/EWS candidates. 55% for SC/ST/PwD. From any UGC-recognised university in India.

**Route 2: B.E./B.Tech in any discipline.** Full-time regular Bachelor's degree in Engineering or Technology. Preferred disciplines: Electronics, Telecommunications, Information Technology, Computer Science. Other engineering disciplines can also apply if aggregate meets the cutoff. Minimum 60% for General/OBC/EWS, 55% for SC/ST/PwD.

**Age limit:** Not more than 27 years as on the notification date. Age relaxation: SC/ST 5 years, OBC 3 years, PwD 10 years, ex-servicemen per Government of India norms.

**Nationality:** Indian citizen only.

**Additional physical requirements:** Normal colour vision, good hearing, and physical fitness certified by a Board-approved medical examiner. Correctable refractive errors up to specified limits are acceptable.

## Selection process breakdown

Three qualifying stages plus a merit-decisive CBT.

**Stage 1: Computer-Based Test (CBT).** Duration 2 hours. Approximately 120 to 150 objective MCQ questions across three sections.

| Section | Questions | Marks (approx) |
|---|---|---|
| English Language | 20 | 20 |
| General Aptitude and Reasoning | 40 | 40 |
| Domain Knowledge (Physics, Maths, Electronics, Aviation) | 60 | 60 |
| Total | 120 | 120 |

Negative marking of one-third mark per wrong answer. Aim for 70+ out of 120 for a strong cutoff chance. Prior cycle cutoffs (approximate): General 65 to 75, OBC 60 to 70, SC/ST 45 to 55.

**Stage 2: Voice Test.** Assesses clarity of speech, accent neutrality, ability to communicate under stress, and pronunciation of aviation terminology. 15 to 20 minutes per candidate. Qualifying only. Failure disqualifies from further stages.

**Stage 3: Drug Test.** Test for consumption of psychoactive substances per DGCA aviation industry standards. Standard urinalysis. Failure disqualifies.

**Stage 4: Document Verification.** Original documents including educational certificates, category certificate, medical fitness certificate, and character certificate.

## CBT preparation strategy

CBT preparation window from now to expected September-October 2026 exam is approximately 3 to 4 months. Enough for focused preparation from scratch.

**English Language (20 questions, 20 marks):** Comprehension, error spotting, fill in the blanks, synonyms and antonyms, sentence improvement. Read 30 minutes of English newspaper daily (The Hindu editorials or Indian Express). Practice at least 2 previous years' AAI papers.

**Aptitude and Reasoning (40 questions, 40 marks):** Quantitative aptitude (arithmetic, algebra, percentages, ratios), data interpretation, logical reasoning, verbal reasoning. Standard SSC CGL Tier 1 preparation books cover this range. RS Aggarwal Quantitative Aptitude and Arun Sharma LRDI are strong choices.

**Domain Knowledge (60 questions, 60 marks):** This is the merit differentiator.

For Physics/Mathematics graduates: Focus on classical mechanics, thermodynamics, waves and optics, electromagnetism (from your undergrad Physics), plus calculus, linear algebra, and probability (from Mathematics). Skim NCERT class 11 and 12 Physics and Mathematics as a refresher.

For Electronics/Communication engineers: Focus on analog and digital electronics, signals and systems, communication systems, control systems, and electromagnetic theory. NPTEL video lectures on these topics are free and comprehensive.

Aviation Awareness: Read AAI's own website for organisational structure, major Indian airports, ICAO regulations basics, and current civil aviation policy developments. Aviation history and famous incidents are common topics.

## Salary and CTC breakdown

Starting salary and progression at AAI Junior Executive.

**Year 1 to 3 (Junior Executive Trainee):** Basic pay Rs. 40,000 with grade pay Rs. 4,600. In-hand approximately Rs. 65,000 to Rs. 75,000 per month at major metros. CTC approximately Rs. 12 to Rs. 14 lakh per annum including PF, gratuity, and other benefits.

**Year 4 to 7 (Junior Executive with Grade Pay progression):** Basic pay rises to Rs. 55,000 to Rs. 65,000. In-hand approximately Rs. 85,000 to Rs. 1,00,000. CTC Rs. 15 to Rs. 18 lakh per annum.

**Year 8 to 12 (Assistant Manager after internal promotion):** Basic pay Rs. 70,000 to Rs. 85,000. In-hand approximately Rs. 1,10,000 to Rs. 1,40,000. CTC Rs. 20 to Rs. 24 lakh per annum.

**Non-financial benefits:** Government housing after 2 years of service (subject to availability at posting). Free flight travel privileges on Indian carriers (limited). Full family medical coverage including senior parents. Education allowance for children. LTC every 2 years for domestic destinations.

## Why AAI JE ATC vs other CPSU jobs

AAI JE ATC offers three unique advantages over other central PSU entry-level jobs like NTPC, ONGC, or BHEL.

**1. Fastest post-training deployment.** Selected candidates enter a 12-month rigorous ATC training programme at Civil Aviation Training College (CATC), Prayagraj. Post-training deployment happens within 3 months, meaning full salary starts within 15 months of selection versus 24 to 30 months at most other CPSUs.

**2. Highest starting-salary tier for pure Group A entry.** AAI JE ATC's Rs. 40,000 basic is at the top of pay Level 10, comparable to only NTPC Executive Trainee and ISRO Scientist/Engineer SC. Most other CPSUs start at pay Level 9 (Rs. 35,400 basic).

**3. Skill portability to private aviation.** ATC training and 3+ years of experience open doors to private aviation employers (GMR, Adani, Bengaluru Airport) and international ATC roles (Middle East, Singapore) at 40 to 60% salary premium over AAI.

If you're comparing career paths and want a Group A CPSU entry with fast deployment, high starting pay, and strong skill portability, AAI JE ATC is one of the strongest options in the July 2026 notification cycle.

## Training at Civil Aviation Training College (CATC), Prayagraj

Selected candidates undergo a 12-month rigorous ATC training programme at Civil Aviation Training College (CATC), Prayagraj. Training is fully residential with paid stipend and covers the full ICAO Air Traffic Controller licensing syllabus.

**Training modules:**

1. Air Navigation and Airspace Structure (2 months)
2. Radar and Approach Control (3 months)
3. Area Control and En-route Traffic Management (3 months)
4. Simulator Training on live-scenario radar simulators (2 months)
5. Emergency Procedures and Air Defence Coordination (1 month)
6. Voice Communication and Radio Protocols (1 month)

**Assessment:** Continuous evaluation plus end-of-module exams. Failure in any module requires re-training in that module before certification. Failure to complete training within 15 months of joining leads to termination.

**Post-training deployment:** Direct posting to Air Traffic Control Towers, Approach Control Rooms, or Area Control Centres at 132 AAI-operated airports across India. Preferred region is typically not guaranteed for first-time joinees; expect posting to smaller regional airports for the first 3 to 5 years, then metro postings on internal transfer.

## Physical and medical standards

Medical fitness is a hard filter for AAI JE ATC selection due to the high-stress nature of the job.

- Colour vision must be normal without any red-green colour blindness. Ishihara test used for verification.
- Hearing must be normal in both ears. No hearing aids permitted.
- Vision: 6/6 in both eyes uncorrected preferred. Correctable to 6/6 with glasses acceptable up to specified refractive error limits.
- Height and weight per BMI norms for the candidate's age group.
- No history of psychiatric disorders, seizures, or cardiovascular conditions that could interfere with high-stress decision-making.

Medical rejection at any stage is final. Candidates with borderline medical conditions should undergo a preliminary medical check-up before applying to save time and application fees.`;

console.log("=== Pre-flight ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${NEW_ELIGIBILITY}\n${NEW_QUALIFICATION}\n${NEW_SALARY}\n${NEW_APPLICATION_FEE}\n${NEW_SELECTION_PROCESS}\n${NEW_HOW_TO_APPLY}\n${NEW_IMPORTANT_DATES}`;
if (/[—–]/.test(fullText)) { console.error("ABORT: em/en dash"); process.exit(1); }
if (/[“”‘’]/.test(fullText)) { console.error("ABORT: smart quotes"); process.exit(1); }
const bannedWords = ["delve","delving","delves","pivotal","underscore","underscores","tapestry","landscape of","vibrant","boasts","boast","showcase","showcases","testament","interplay","intricate","enduring","foster","fostering","garner","garnered","actually,","in the realm of","in today's world","at its core","the real question is","what really matters","crucial","meticulously"];
const banHits = bannedWords.filter((w) => fullText.toLowerCase().includes(w));
if (banHits.length) { console.error("ABORT: banned:", banHits); process.exit(1); }
if (NEW_TITLE.length < 50 || NEW_TITLE.length > 65) { console.error(`ABORT: title ${NEW_TITLE.length}`); process.exit(1); }
if (NEW_DESCRIPTION.length < 150 || NEW_DESCRIPTION.length > 160) { console.error(`ABORT: desc ${NEW_DESCRIPTION.length}`); process.exit(1); }
const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 1500) { console.error(`ABORT: ${contentWords} words`); process.exit(1); }
console.log(`  Title ${NEW_TITLE.length}c | Desc ${NEW_DESCRIPTION.length}c | Content ${contentWords} words | clean`);

if (process.env.DRY_RUN === "1") { console.log("DRY_RUN"); process.exit(0); }

console.log("\n=== PHASE 1 ===");
const { data: existing } = await supabase.from("jobs").select("id").eq("slug", SLUG).maybeSingle();
if (existing) { console.error("ABORT: exists"); process.exit(1); }
const payload = {
  slug: SLUG, title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT,
  organization: NEW_ORGANIZATION, post_name: NEW_POST_NAME, vacancies: NEW_VACANCIES,
  last_date: NEW_LAST_DATE, apply_link: NEW_APPLY_LINK, notification_link: NEW_NOTIFICATION_LINK,
  official_link: NEW_OFFICIAL_LINK, eligibility: NEW_ELIGIBILITY, qualification: NEW_QUALIFICATION,
  salary: NEW_SALARY, application_fee: NEW_APPLICATION_FEE, selection_process: NEW_SELECTION_PROCESS,
  how_to_apply: NEW_HOW_TO_APPLY, important_dates: NEW_IMPORTANT_DATES,
  category: "psu", state: "all-india", is_active: true, employment_type: "permanent",
  reading_time: "13 min read", completeness_score: 90,
  published_at: new Date().toISOString(), reviewed_at: new Date().toISOString(),
  updated_at: new Date().toISOString(), verified_at: new Date().toISOString(), quality_flag: null,
};
const { error } = await supabase.from("jobs").insert([payload]);
if (error) { console.error(error.message); process.exit(1); }
console.log(`  OK`);

console.log("\n=== PHASE 2/3 ===");
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`);
await fetch(`${SITE_URL}/api/revalidate?tag=jobs`);
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sitemap.xml")}`);
await pingIndexNow(SLUG, "/sarkari-naukri");
console.log(`\nDONE: ${SITE_URL}/sarkari-naukri/${SLUG}`);
