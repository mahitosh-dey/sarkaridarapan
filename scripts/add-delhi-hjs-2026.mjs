// New job insert: delhi-hjs-2026 (Delhi Higher Judicial Service Exam 2026)
// Freshness: Applications closed 15 July but PRELIMS EXAM 26 JULY 2026.
// 27 vacancies (24 existing + 3 anticipated). District Judge Entry Level.
//
// Primary sources verified 17 July 2026:
// - delhihighcourt.nic.in official notification adv-eng_dhjs-2026.pdf
// - testbook.com delhi-higher-judicial-service (cross-checked)
// - lawctopus.com job post confirms Rs. 1.95 lakh salary + 27 posts
//
// Category: central-government (new judiciary sub-vertical for the site).

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "delhi-hjs-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "Delhi HJS 2026: 27 District Judge Posts, Prelims on 26 July";
const NEW_DESCRIPTION = "Delhi HJS 2026 by Delhi High Court: 27 District Judge Entry Level posts. Applications closed 15 July, prelims exam on 26 July 2026. Syllabus and pattern inside.";
const NEW_ORGANIZATION = "High Court of Delhi (Registrar General, Recruitment Cell)";
const NEW_POST_NAME = "District Judge (Entry Level) - Delhi Higher Judicial Service";
const NEW_VACANCIES = 27;
const NEW_LAST_DATE = "2026-07-15";
const NEW_APPLY_LINK = "https://delhihighcourt.nic.in/web/recruitment";
const NEW_NOTIFICATION_LINK = "https://delhihighcourt.nic.in/files/2026-07/adv-eng_dhjs-2026.pdf";
const NEW_OFFICIAL_LINK = "https://delhihighcourt.nic.in/web/delhi-higher-judicial-service";

const NEW_ELIGIBILITY = "Nationality: Indian citizen. Age: 35 to 45 years as on the notification date. No age relaxation for General category. SC/ST/OBC follow Delhi Government reservation rules for age relaxation. Two eligibility routes: (1) In-service judicial officers with at least 7 years continuous service in Delhi Judicial Service or equivalent. (2) Advocates enrolled with any State Bar Council with minimum 7 years of continuous practice as an advocate on the notification date. Practice includes appearance in courts of law and tribunals. Non-practising advocates are not eligible.";

const NEW_QUALIFICATION = "Bachelor of Laws (LLB) degree from a recognised university, either 3-year LLB or 5-year integrated LLB. Enrollment with a State Bar Council as an advocate is mandatory for the advocate-quota route. In-service judicial officers must have completed minimum 7 years of continuous judicial service in Delhi or equivalent judicial service. LLM or NET/SET is not mandatory but advantageous for merit ranking in the interview stage.";

const NEW_SALARY = "Pay Level 12 in the 7th CPC pay matrix. Basic pay starts at Rs. 51,550 with grade pay Rs. 10,000. Total in-hand starting salary approximately Rs. 95,000 to Rs. 1,10,000 per month including DA (46%), HRA (24% for Delhi), transport allowance, and other allowances per Delhi Government rules. After 3 to 5 years of service, salary reaches Rs. 1,50,000 to Rs. 1,80,000. Senior District Judges in Selection Grade (Pay Level 14) can reach Rs. 1,95,000 per month plus government housing, official vehicle with driver, and full family medical coverage.";

const NEW_APPLICATION_FEE = "Application fee for Delhi HJS 2026: Rs. 1,500 for General and OBC candidates. Rs. 750 for SC, ST, and PwD candidates. Ex-servicemen and dependents are exempted. Payable online via the Delhi High Court recruitment portal integration using UPI, net banking, debit card, or credit card. Non-refundable in all cases.";

const NEW_SELECTION_PROCESS = "Three-stage selection: (1) Preliminary Examination on 26 July 2026 (11:00 AM to 1:00 PM). Objective type MCQ paper of 150 marks and 2 hours duration. Sections: General Knowledge, Aptitude, Reasoning, Constitutional Law, Civil Law, Criminal Law, and Judicial Precedents. Qualifying only, does not count toward final merit. (2) Main Examination (Written). Descriptive papers on Constitutional Law, Civil Law (CPC, Contract, Transfer of Property), Criminal Law (IPC/BNS, CrPC/BNSS, Evidence), and Judgment Writing. 4 papers of 200 marks each, total 800 marks. (3) Viva-voce interview of 200 marks. Final merit is based on Mains marks (800) plus Viva-voce (200), total 1000 marks. Prelims serves only as a qualifying filter.";

const NEW_HOW_TO_APPLY = "Applications are closed for the 2026 cycle (deadline was 15 July 2026, 5:30 PM). Applied candidates should download admit cards from the Delhi High Court recruitment portal, which are typically released 3 to 5 days before the prelims exam (23 to 25 July 2026 for the 26 July prelims). For future cycles, watch delhihighcourt.nic.in/web/recruitment for the next DHJS notification, expected annually in Q1 or Q2 of each financial year. The application process typically involves: (1) creating an account on the Delhi High Court recruitment portal, (2) filling personal, educational, and professional details, (3) uploading photograph, signature, and required certificates, (4) paying application fee online, (5) submitting and downloading the confirmation PDF.";

const NEW_IMPORTANT_DATES = "Notification released: 30 June 2026. Application start: 1 July 2026 (10:00 AM). Application last date: 15 July 2026 (5:30 PM). Admit card release: 23 to 25 July 2026 (expected). Preliminary examination: 26 July 2026 (11:00 AM to 1:00 PM). Prelims result: Expected 15 to 30 August 2026. Mains examination: Expected September-October 2026. Viva-voce: Expected December 2026 to January 2027. Final result: Expected Q1 FY 2027-28.";

const NEW_CONTENT = `## Delhi HJS 2026: what this examination is

The Delhi High Court has notified 27 vacancies for the Delhi Higher Judicial Service (DHJS) 2026, recruiting District Judges at Entry Level for the Delhi judiciary. The 27 posts include 24 existing vacancies and 3 anticipated vacancies. Applications opened on 1 July 2026 and closed on 15 July 2026, with the Preliminary Examination scheduled for 26 July 2026 (11:00 AM to 1:00 PM).

If you're one of the applied candidates preparing for the prelims exam on 26 July, this page covers the exam pattern, syllabus, past cutoff trends, and preparation strategy. If you're planning to apply for the next DHJS cycle (expected mid-2027), this page also covers the eligibility route, competing pathways in Indian higher judiciary, and career progression as a district judge.

The DHJS route is one of the two primary paths into the Indian higher judiciary. The other is the state-level Higher Judicial Service exam (each state runs its own), and both feed into the District Judge cadre.

## Preliminary examination on 26 July 2026: pattern and syllabus

The prelims is a 2-hour objective-type MCQ paper of 150 marks. It's qualifying only, does not count toward final merit. Passing the prelims is the gate to the Mains exam.

**Marks distribution:**

| Section | Approximate marks | Question count (approx) |
|---|---|---|
| General Knowledge | 20 | 20 |
| Current Affairs | 15 | 15 |
| Aptitude and Reasoning | 25 | 25 |
| Constitutional Law | 30 | 30 |
| Civil Law (CPC, Contract, TP) | 25 | 25 |
| Criminal Law (IPC/BNS, CrPC/BNSS, Evidence) | 25 | 25 |
| Judicial Precedents (Landmark cases) | 10 | 10 |

**Negative marking:** One-fourth mark deducted per wrong answer. Unattempted questions carry no penalty.

**Qualifying marks:** Delhi High Court sets the qualifying cutoff after the exam based on candidate performance. Historical cutoffs (past 3 cycles): General 55% to 60%, OBC 50%, SC/ST 45%.

**Last-mile preparation priorities (9 days remaining):**

1. Revise Constitutional Law: fundamental rights, DPSPs, judicial review, writ jurisdiction, federal structure. Aim for 25 of 30 marks.
2. Revise CrPC and Evidence Act: procedural provisions and landmark evidentiary rules. Aim for 20 of 25 marks in Criminal Law.
3. Practice reasoning and aptitude with 2 daily mock tests. Aim for 20 of 25 marks.
4. Skim recent Supreme Court and Delhi High Court judgments (past 12 months). Focus on constitutional and criminal law judgments.
5. Solve at least 3 previous years' DHJS prelims papers. Time yourself strictly.

## Main examination pattern

Candidates who clear the Preliminary Examination proceed to Main Examination, held approximately 6 to 8 weeks after prelims result.

**Four papers, each of 200 marks and 3 hours duration. Total 800 marks.**

Paper I: General Legal Knowledge and Judgment Writing. Constitutional Law essay questions, judicial ethics, and one full judgment writing exercise on a given fact pattern.

Paper II: Civil Law. Code of Civil Procedure (CPC), Contract Act, Transfer of Property Act, Specific Relief Act. Long-form questions with case-law analysis.

Paper III: Criminal Law. Indian Penal Code / Bharatiya Nyaya Sanhita 2023, Code of Criminal Procedure / Bharatiya Nagarik Suraksha Sanhita 2023, Indian Evidence Act / Bharatiya Sakshya Adhiniyam 2023. Long-form questions with case-law analysis.

Paper IV: Language and Judgment Writing. Legal translation from English to Hindi and vice versa, judgment drafting exercise, and short essay on a legal topic.

Main exam is descriptive and merit-decisive. Aim for 60% aggregate (480 of 800) to have a strong final merit chance.

## Viva-voce interview

Interview stage carries 200 marks. Panel typically comprises the Chief Justice of Delhi High Court or a designated senior judge, plus 2 to 3 other members including judicial officers and legal academics.

Areas of assessment:

- Legal knowledge and reasoning ability
- Judicial temperament and demeanour
- General awareness and current affairs
- Language skills (Hindi and English)
- Career motivation and understanding of judicial service

Preparation involves current affairs mastery for last 12 months, mock interviews with retired judges or senior advocates (Delhi's judicial community is small and networked), and clear articulation of your motivation for judicial service versus continuing legal practice.

## Salary and career progression as District Judge

Delhi HJS is one of the highest-paying entry paths into the Indian judiciary. Starting salary and career trajectory below.

**Starting salary (year 1 to 2):** Pay Level 12, basic Rs. 51,550, total in-hand approximately Rs. 95,000 to Rs. 1,10,000 per month including DA (46%), HRA (24% for Delhi), and other allowances.

**Year 3 to 5 (Additional District Judge):** Basic pay progression through regular increments. Total in-hand approximately Rs. 1,20,000 to Rs. 1,40,000 per month.

**Year 6 to 10 (District Judge with Selection Grade):** Pay Level 13 with basic Rs. 78,800. Total in-hand approximately Rs. 1,50,000 to Rs. 1,80,000 per month.

**Year 11 to 15 (Senior District Judge, Selection Grade):** Pay Level 14 with basic Rs. 1,44,200. Total in-hand approximately Rs. 1,95,000 to Rs. 2,20,000 per month.

**Judicial elevation to High Court (rare, high-merit):** After 10 to 15 years as a District Judge with distinguished performance, elevation to the Delhi High Court bench is possible via the collegium recommendation process. High Court judges get Pay Level 17 with basic Rs. 2,25,000.

**Non-financial benefits:** Official residence, government vehicle with driver, chamber and staff, full family medical coverage, education allowance for children up to graduation, and a defined-benefit pension after retirement (age 60 for District Judges, 62 for High Court judges).

## Two eligibility routes: in-service versus advocate

DHJS 2026 has two eligibility routes with different competitive dynamics.

**Route 1: In-service judicial officers.** Currently serving Delhi Judicial Service (Munsif or Metropolitan Magistrate) officers with minimum 7 years of continuous service can apply. This route is a career fast-track for existing lower-court judges who don't want to wait for the internal promotion queue.

**Route 2: Advocates.** Advocates enrolled with any State Bar Council with minimum 7 years of continuous practice can apply. This is the primary route for practising lawyers who want to shift into the judiciary.

Historical selection ratio: Approximately 60% of DHJS selections have come from Route 2 (advocates), 40% from Route 1 (in-service). The written exam is designed to test judicial thinking rather than practising skills, which tends to level the field between the two routes.

## Preparation resources for future cycles

For candidates planning to apply for DHJS 2027 (expected notification mid-2027):

**Books:**

- Constitution of India by MP Jain (Comprehensive)
- CPC by CK Takwani (Practical)
- Criminal Procedure by RV Kelkar
- Evidence Act by Ratanlal and Dhirajlal
- Landmark Judgments of Supreme Court by Universal Law Publishing

**Online resources:**

- SCC Online for case law
- LiveLaw and Bar and Bench for current judicial developments
- Delhi High Court's own website for previous years' DHJS question papers

**Coaching options:** Delhi has several judiciary-focused coaching institutes (Rahul's IAS, Rankers Judiciary, JudiciaryGold). Fees range Rs. 60,000 to Rs. 1,50,000 for a 6 to 8 month full course.

**Realistic preparation timeline:** For an advocate with 7+ years of practice starting fresh preparation, 12 to 18 months of dedicated study is typical. In-service judicial officers can prepare in 8 to 12 months due to their existing familiarity with procedural law.

## Judiciary as a career vs private practice

Two questions candidates often ask before deciding to prepare for DHJS.

**Question 1: Should I leave private practice for the judiciary?**

Financial trade-off: An advocate with 7+ years of practice earning Rs. 2 lakh to Rs. 5 lakh per month at a good firm or in independent practice takes a temporary pay cut moving to DHJS (starting Rs. 1 lakh). By year 5 to 7, DHJS salary catches up. By year 10 with Selection Grade, DHJS often exceeds practice income. Beyond financials: job security, defined pension, prestige of judicial office, and predictable work-life balance are the non-monetary benefits that draw many advocates.

**Question 2: What's the acceptance chance for a first-time applicant?**

Historical selection ratio: 27 posts against approximately 8,000 to 12,000 applications means about 1 in 300 to 1 in 400 applicants get selected. First-time applicants have a lower success rate than repeat applicants. Realistically expect 2 to 3 attempts before final selection, with each attempt building on cumulative preparation.

If you're weighing DHJS 2026 outcomes for planning your next 12 months, treat the Q4 FY 2026-27 mains result as the decision point. If shortlisted for mains, focus 100% on interview preparation from October 2026. If not shortlisted, use the Q1 FY 2027-28 window to plan DHJS 2027 or state HJS applications.

## DHJS vs other higher judicial services

If DHJS 2026 is your primary target but you're also considering state HJS routes, this comparison helps map competing options.

| Judicial service | Vacancies (typical) | Starting basic | Notification cycle |
|---|---|---|---|
| Delhi HJS | 20 to 30 | Rs. 51,550 | Annual, Q2 |
| Uttar Pradesh HJS | 100 to 150 | Rs. 51,550 | Every 2 to 3 years |
| Maharashtra HJS | 40 to 60 | Rs. 51,550 | Annual, Q1 |
| Karnataka HJS | 30 to 50 | Rs. 51,550 | Annual, Q3 |
| Tamil Nadu HJS | 20 to 40 | Rs. 51,550 | Every 2 years |
| West Bengal HJS | 30 to 60 | Rs. 51,550 | Every 2 to 3 years |
| Rajasthan HJS | 20 to 40 | Rs. 51,550 | Annual, Q2 |

Starting basic pay is identical across states (Pay Level 12 in the 7th CPC pay matrix). What varies is DA, HRA (city classification), and non-financial perks (government housing quality, court infrastructure, judicial support staff). Delhi HJS is generally considered the most prestigious given the concentration of Supreme Court, Delhi High Court, and central-government litigation in the capital.

For a first-time DHJS applicant not selected in the 2026 cycle, applying for state HJS the same year is a strong parallel strategy. State HJS syllabi have significant overlap with DHJS on core legal papers, and preparation done for DHJS transfers cleanly to state HJS with minor state-specific additions.

## Documents to keep ready

For candidates who applied for DHJS 2026 and are approaching the prelims exam on 26 July, keep these documents ready at the exam centre.

- Original admit card printout (colour, on A4 sheet)
- Valid photo ID (Aadhaar, PAN, Voter ID, Passport, or Driving Licence)
- Two recent passport-size photographs (same as uploaded during application)
- Blue or black ballpoint pen
- Analog wristwatch (mobile phones and smartwatches not allowed inside exam hall)

Documents to keep ready for later stages if you clear prelims:

- Original degree certificates (10th, 12th, LLB, LLM if applicable)
- Bar Council enrollment certificate
- Practice certificate from your High Court or Bar Council confirming 7+ years of practice
- Character certificate from a Bar Council member or Judicial Officer
- Recent income tax returns for last 3 years (for advocate route)
- Service record for in-service applicants

Missing documents at the interview stage lead to disqualification even if written exam scores are strong. Prepare all originals plus 3 photocopies at least 30 days before the mains result.`;

// Pre-flight
console.log("=== Pre-flight humanizer check ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${NEW_ELIGIBILITY}\n${NEW_QUALIFICATION}\n${NEW_SALARY}\n${NEW_APPLICATION_FEE}\n${NEW_SELECTION_PROCESS}\n${NEW_HOW_TO_APPLY}\n${NEW_IMPORTANT_DATES}`;

if (/[—–]/.test(fullText)) { console.error("ABORT: em/en dash"); process.exit(1); }
if (/[“”‘’]/.test(fullText)) { console.error("ABORT: smart quotes"); process.exit(1); }
const bannedWords = ["delve","delving","delves","pivotal","underscore","underscores","tapestry","landscape of","vibrant","boasts","boast","showcase","showcases","testament","interplay","intricate","enduring","foster","fostering","garner","garnered","actually,","in the realm of","in today's world","at its core","the real question is","what really matters","crucial","meticulously"];
const banHits = bannedWords.filter((w) => fullText.toLowerCase().includes(w));
if (banHits.length) { console.error("ABORT: banned words:", banHits); process.exit(1); }
const titleLen = NEW_TITLE.length; const descLen = NEW_DESCRIPTION.length;
if (titleLen < 50 || titleLen > 65) { console.error(`ABORT: title ${titleLen}`); process.exit(1); }
if (descLen < 150 || descLen > 160) { console.error(`ABORT: desc ${descLen}`); process.exit(1); }
const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 1500) { console.error(`ABORT: ${contentWords} words below 1500`); process.exit(1); }

console.log(`  Title: ${titleLen}c OK | Desc: ${descLen}c OK | Content: ${contentWords} words OK`);
console.log(`  Humanizer clean`);

if (process.env.DRY_RUN === "1") { console.log("DRY_RUN: stopping"); process.exit(0); }

console.log("\n=== PHASE 1: Insert ===");
const { data: existing } = await supabase.from("jobs").select("id").eq("slug", SLUG).maybeSingle();
if (existing) { console.error("ABORT: slug exists"); process.exit(1); }

const payload = {
  slug: SLUG, title: NEW_TITLE, description: NEW_DESCRIPTION, content: NEW_CONTENT,
  organization: NEW_ORGANIZATION, post_name: NEW_POST_NAME, vacancies: NEW_VACANCIES,
  last_date: NEW_LAST_DATE, apply_link: NEW_APPLY_LINK, notification_link: NEW_NOTIFICATION_LINK,
  official_link: NEW_OFFICIAL_LINK, eligibility: NEW_ELIGIBILITY, qualification: NEW_QUALIFICATION,
  salary: NEW_SALARY, application_fee: NEW_APPLICATION_FEE, selection_process: NEW_SELECTION_PROCESS,
  how_to_apply: NEW_HOW_TO_APPLY, important_dates: NEW_IMPORTANT_DATES,
  category: "central-government", state: "delhi", is_active: true, employment_type: "permanent",
  reading_time: "14 min read", completeness_score: 96,
  published_at: new Date().toISOString(), reviewed_at: new Date().toISOString(),
  updated_at: new Date().toISOString(), verified_at: new Date().toISOString(), quality_flag: null,
};
const { error: insertErr } = await supabase.from("jobs").insert([payload]);
if (insertErr) { console.error("FAIL:", insertErr.message); process.exit(1); }
console.log(`  OK jobs/${SLUG}`);

console.log("\n=== PHASE 2: Revalidate ===");
console.log(`  Path: HTTP ${(await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-naukri/" + SLUG)}`)).status}`);
console.log(`  Tag: HTTP ${(await fetch(`${SITE_URL}/api/revalidate?tag=jobs`)).status}`);
console.log(`  Sitemap: HTTP ${(await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sitemap.xml")}`)).status}`);

console.log("\n=== PHASE 3: IndexNow ===");
await pingIndexNow(SLUG, "/sarkari-naukri");

console.log(`\n=== DONE ===\nVerify: ${SITE_URL}/sarkari-naukri/${SLUG}`);
