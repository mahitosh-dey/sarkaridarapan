import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const env = readFileSync(".env.local", "utf8");
const vars = {};
env.split("\n").forEach((line) => {
  const [k, ...v] = line.split("=");
  if (k && v.length) vars[k.trim()] = v.join("=").trim();
});

const supabase = createClient(
  vars.NEXT_PUBLIC_SUPABASE_URL,
  vars.SUPABASE_SERVICE_ROLE_KEY
);

const exams = [
  // ─────────────────────────────────────────────────────────────
  // 1. JEE MAIN 2027
  // ─────────────────────────────────────────────────────────────
  {
    slug: "jee-main-2027",
    title: "JEE Main 2027",
    conducting_body: "National Testing Agency (NTA)",
    exam_date: "2027-01-15",
    application_start: "2026-10-01",
    application_end: "2026-11-30",
    eligibility:
      "Class 12 pass or appearing with Physics, Chemistry, and Mathematics as compulsory subjects. Minimum 75% marks in 12th (65% for SC/ST). Students can attempt JEE Main for three consecutive years.",
    syllabus:
      "Physics: Mechanics, Thermodynamics, Electrostatics, Optics, Modern Physics. Chemistry: Physical, Organic, Inorganic Chemistry. Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry, Vectors.",
    exam_pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "180 minutes (3 hours)",
      sections: [
        { name: "Physics", questions: 30, marks: 100 },
        { name: "Chemistry", questions: 30, marks: 100 },
        { name: "Mathematics", questions: 30, marks: 100 },
      ],
      totalMarks: 300,
      totalQuestions: 90,
      markingScheme: "+4 correct, -1 wrong (MCQ). +4 correct, 0 wrong (Numerical)",
      sessions: "Session 1 (January 2027) and Session 2 (April 2027)",
    },
    official_link: "https://jeemain.nta.ac.in",
    category: "engineering",
    state: "all-india",
    description:
      "JEE Main 2027 is the national engineering entrance exam conducted by NTA for admissions to NITs, IIITs, and other central technical institutions. It also serves as the qualifying exam for JEE Advanced (IITs). Registration opens in October 2026.",
    content: `## JEE Main 2027 — Complete Guide

JEE Main is the most important engineering entrance exam in India. Every year, over 12 lakh students appear for this exam hoping to secure a seat in one of the NITs, IIITs, or other centrally-funded technical institutions. Clearing JEE Main also qualifies you to sit for JEE Advanced — which is the door to the IITs.

The 2027 edition will be conducted by the National Testing Agency (NTA) in two sessions. Session 1 is expected in January 2027 and Session 2 in April 2027. Your best score from both sessions is considered for final merit.

## Important Dates

| Event | Date |
|---|---|
| Registration Opens (Expected) | October 2026 |
| Last Date to Apply (Expected) | November 2026 |
| Session 1 Exam | January 2027 |
| Session 2 Exam | April 2027 |

*Dates are based on NTA's official exam calendar pattern. Confirm on jeemain.nta.ac.in.*

## Eligibility

To appear for JEE Main 2027, you need to have passed Class 12 (or be appearing) with Physics, Chemistry, and Mathematics. The minimum marks requirement is 75% for general category and 65% for SC/ST students. There is no age limit. Students can attempt this exam for three consecutive years.

## Exam Pattern

The paper has 90 questions carrying 300 marks total — 30 questions each from Physics, Chemistry, and Mathematics. The paper is split into Section A (MCQs with -1 negative marking) and Section B (numerical answer questions with no negative marking).

The exam is fully computer-based and runs for 3 hours.

## Syllabus Overview

**Physics** covers Class 11 and 12 topics — Mechanics, Laws of Motion, Work and Energy, Thermodynamics, Waves, Electrostatics, Current Electricity, Magnetic Effects, Optics, and Modern Physics.

**Chemistry** is divided into Physical Chemistry (Mole concept, Equilibrium, Electrochemistry), Organic Chemistry (Hydrocarbons, Reactions, Biomolecules), and Inorganic Chemistry (Periodic Table, Coordination Compounds).

**Mathematics** includes Algebra, Matrices, Permutations and Combinations, Differential and Integral Calculus, Coordinate Geometry, Trigonometry, and Vectors.

## How to Apply

When registration opens on jeemain.nta.ac.in, create your NTA login, fill in your Class 12 details, upload photo and signature, and pay the application fee online. The fee for general category is around ₹1,000 per session.

## What You Can Get Into

A good JEE Main rank opens doors to 31 NITs, 26 IIITs, and 28 GFTIs across India with thousands of B.Tech seats. Computer Science, Electronics, and Mechanical Engineering are the most sought-after branches.

If your JEE Main rank qualifies you for JEE Advanced, you can aim for the 23 IITs — the most prestigious engineering colleges in the country.

## Application Portal

Official website: jeemain.nta.ac.in`,
    completeness_score: 92,
    reading_time: "6 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 2. NEET PG 2026
  // ─────────────────────────────────────────────────────────────
  {
    slug: "neet-pg-2026",
    title: "NEET PG 2026",
    conducting_body: "National Board of Examinations in Medical Sciences (NBEMS)",
    exam_date: "2026-08-30",
    application_start: "2026-06-15",
    application_end: "2026-07-15",
    eligibility:
      "MBBS degree from a recognized medical college. Completion of one year compulsory rotating internship (or likely to complete by August 15, 2026). Valid MCI/NMC registration.",
    syllabus:
      "All subjects of MBBS curriculum — Pre-clinical (Anatomy, Physiology, Biochemistry), Para-clinical (Pathology, Microbiology, Pharmacology, Forensic Medicine), and Clinical subjects (Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics, Orthopaedics, ENT, Ophthalmology, Psychiatry, Dermatology, Radiology, Anaesthesia).",
    exam_pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "210 minutes (3 hours 30 minutes)",
      totalQuestions: 200,
      totalMarks: 800,
      markingScheme: "+4 correct, -1 wrong",
      type: "Single Best Response (SBR) MCQs",
    },
    official_link: "https://nbe.edu.in",
    category: "medical",
    state: "all-india",
    description:
      "NEET PG 2026 is the national entrance exam for MD, MS, and PG Diploma admissions in medical colleges across India. Conducted by NBEMS, the exam is scheduled for August 30, 2026. MBBS doctors must qualify this to pursue post-graduation.",
    content: `## NEET PG 2026 — Complete Guide

If you've finished your MBBS and want to specialize — become a surgeon, physician, gynaecologist, or any other specialist — NEET PG is the only way in. The National Board of Examinations in Medical Sciences (NBEMS) has officially announced August 30, 2026 as the exam date for NEET PG 2026.

Every MD, MS, and PG Diploma seat in government and private medical colleges across India is filled through NEET PG rank. Over 1 lakh MBBS graduates compete for around 60,000 PG seats every year. It's one of the most competitive exams in the country.

## Important Dates

| Event | Date |
|---|---|
| Registration Opens (Expected) | June – July 2026 |
| Last Date to Apply (Expected) | July 2026 |
| Exam Date | **August 30, 2026** |
| Result (Expected) | September – October 2026 |
| Counselling (Expected) | October – November 2026 |

*Registration dates are expected based on NBEMS announcements. Check nbe.edu.in for official dates.*

## Eligibility

You need a full MBBS degree from a college recognized by the National Medical Commission (NMC). You must have completed your one-year compulsory rotating internship by August 15, 2026 — or be likely to complete it by then. A valid NMC/State Medical Council registration is also required.

## Exam Pattern

The paper has 200 MCQs of the Single Best Response type. Each correct answer gives +4 marks and each wrong answer deducts 1 mark. Total marks are 800. The exam runs for 3.5 hours and is computer-based at authorized test centres across India.

## Syllabus

The NEET PG 2026 syllabus covers everything you studied during your MBBS — both theory and clinical subjects.

**Pre-clinical:** Anatomy, Physiology, Biochemistry
**Para-clinical:** Pathology, Microbiology, Pharmacology, Forensic Medicine & Toxicology
**Clinical:** General Medicine, General Surgery, Obstetrics & Gynaecology, Paediatrics, Orthopaedics, ENT, Ophthalmology, Psychiatry, Dermatology, Radiology, Anaesthesia, Community Medicine

High-weightage topics are typically Medicine, Surgery, OBG, Paediatrics, and Pathology.

## Counselling

Seats are allotted through two counselling bodies:
- **MCC (Medical Counselling Committee)** — for AIQ seats (15% of government seats) and central university seats
- **State counselling authorities** — for 85% state quota seats in government colleges and all private college seats

## How to Prepare

Most successful candidates use NBE's official past paper bank, standard reference books for each subject, and revision apps like PrepLadder or MarrowApp. The recommended preparation timeline is 6 to 12 months of focused study.

## Official Website

nbe.edu.in — Watch this site for the registration notification.`,
    completeness_score: 91,
    reading_time: "5 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 3. NEET UG 2026 MCC COUNSELLING
  // ─────────────────────────────────────────────────────────────
  {
    slug: "neet-ug-2026-mcc-counselling",
    title: "NEET UG 2026 MCC Counselling",
    conducting_body: "Medical Counselling Committee (MCC), Ministry of Health",
    exam_date: null,
    application_start: "2026-07-21",
    application_end: "2026-10-31",
    eligibility:
      "Qualified in NEET UG 2026 (Re-NEET exam held June 21, 2026). Must have secured marks above the cutoff percentile as declared by NTA. Indian nationals and OCI cardholders are eligible. For AIIMS/JIPMER seats, NEET UG rank applies.",
    syllabus: "No exam — rank-based seat allotment process for MBBS, BDS, and AYUSH courses.",
    exam_pattern: {
      type: "Counselling Process (No Exam)",
      rounds: "4 rounds — Round 1, Round 2, Mop-Up Round, Stray Vacancy Round",
      seats: "15% All India Quota seats in government medical colleges, all AIIMS, JIPMER, ESIC, AFMC, and central university medical seats",
      process: "Registration → Document verification → Choice filling → Seat allotment → Reporting to college",
    },
    official_link: "https://mcc.nic.in",
    category: "medical",
    state: "all-india",
    description:
      "NEET UG 2026 MCC Counselling allocates MBBS, BDS, and AYUSH seats at government medical colleges under the All India Quota (15%). Counselling Round 1 is expected from July 21, 2026, after the re-NEET results. Register at mcc.nic.in.",
    content: `## NEET UG 2026 MCC Counselling — Complete Guide

Clearing NEET UG is just the first step. To actually get a seat in a medical college, you have to go through the counselling process. The Medical Counselling Committee (MCC), under the Ministry of Health, handles the All India Quota (AIQ) counselling — which covers 15% of all government medical college seats plus all seats in AIIMS, JIPMER, ESIC, AFMC, and central university medical colleges.

The NEET UG 2026 exam was originally held on May 3, 2026, but was cancelled by NTA with government approval. A re-NEET exam was held on June 21, 2026. Because of this delay, MCC counselling will start roughly two months later than usual — around July 21, 2026.

## Important Dates (Expected)

| Event | Date |
|---|---|
| Re-NEET Exam | June 21, 2026 |
| Re-NEET Results (Expected) | Early to Mid July 2026 |
| Round 1 Registration Opens (Expected) | July 21, 2026 |
| Round 1 Seat Allotment | Late July 2026 |
| Round 2 | August 2026 |
| Mop-Up Round | September 2026 |
| Stray Vacancy Round | October 2026 |

*Dates are tentative. Final schedule will be released on mcc.nic.in.*

## What Seats Are Covered

MCC counselling covers:
- **15% All India Quota** seats in all government medical and dental colleges
- All seats in **AIIMS** (New Delhi, Bhopal, Patna, Jodhpur, Rishikesh, and other campuses)
- All seats in **JIPMER** Puducherry and Karaikal
- All seats in **ESIC medical colleges**
- **AFMC Pune** (Armed Forces Medical College)
- Central university medical college seats

For the remaining 85% state quota seats in government colleges and all private college seats, students must apply to their respective state counselling authority.

## How the Counselling Process Works

**Step 1 — Registration:** Pay the registration fee on mcc.nic.in (₹1,000 for general, ₹500 for SC/ST).

**Step 2 — Choice Filling:** You get a few days to select and lock your preferred colleges and courses in order of preference. Take this seriously — the system allocates based on your rank and locked choices.

**Step 3 — Seat Allotment:** MCC releases the allotment result. If you get your preferred college, you confirm by paying the seat acceptance fee.

**Step 4 — Reporting:** Take your allotment letter and original documents to the college within the deadline. Miss this and you lose the seat.

## Documents Required

- NEET UG 2026 admit card and scorecard
- Class 10 and 12 mark sheets and certificates
- ID proof (Aadhaar / passport)
- Category certificate (if applicable)
- Eight passport-size photographs

## Official Website

mcc.nic.in — Check regularly for the official counselling schedule once re-NEET results are published.`,
    completeness_score: 88,
    reading_time: "5 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 4. CAT 2026
  // ─────────────────────────────────────────────────────────────
  {
    slug: "cat-2026",
    title: "CAT 2026 (Common Admission Test)",
    conducting_body: "IIM Indore (on behalf of all IIMs)",
    exam_date: "2026-11-29",
    application_start: "2026-08-01",
    application_end: "2026-09-20",
    eligibility:
      "Bachelor's degree with minimum 50% marks (45% for SC/ST/PwD). Final year graduation students can also apply. No age limit. No restriction on number of attempts.",
    syllabus:
      "Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), Quantitative Aptitude (QA).",
    exam_pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "120 minutes (40 minutes per section)",
      sections: [
        { name: "VARC", questions: 24, marks: 72 },
        { name: "DILR", questions: 20, marks: 60 },
        { name: "QA", questions: 22, marks: 66 },
      ],
      totalQuestions: 66,
      totalMarks: 198,
      markingScheme: "+3 correct, -1 wrong (MCQ). +3 correct, 0 wrong (TITA)",
    },
    official_link: "https://iimcat.ac.in",
    category: "management",
    state: "all-india",
    description:
      "CAT 2026 is conducted by IIM Indore for MBA admissions to all 20 IIMs and 1,000+ B-schools. Registration opens August 1, 2026 and closes September 20, 2026. Exam on November 29, 2026.",
    content: `## CAT 2026 — Complete Guide

CAT — the Common Admission Test — is the most prestigious MBA entrance exam in India. Every year, nearly 3 lakh candidates register, competing for seats in the Indian Institutes of Management (IIMs) and hundreds of other top business schools. A high CAT percentile is the first step toward an MBA from IIM Ahmedabad, Bangalore, Calcutta, or any of the other 17 IIMs.

IIM Indore is conducting CAT 2026. Registration opens on **August 1, 2026** and the exam is on **November 29, 2026**.

## Important Dates

| Event | Date |
|---|---|
| Registration Opens | **August 1, 2026** |
| Last Date to Apply | **September 20, 2026** |
| Admit Card Release | October – November 2026 |
| Exam Date | **November 29, 2026** |
| Result (Expected) | January 2027 |
| IIM Interviews | February – April 2027 |

## Eligibility

Any graduate with at least 50% marks (45% for SC/ST/PwD) can apply. Students in their final year of graduation are also eligible to appear. There is no age limit and no cap on attempts. Even working professionals with 10+ years of experience sit for this exam.

## Exam Pattern

The paper has three sections — VARC, DILR, and QA — each with a 40-minute time limit. You cannot switch between sections during the exam.

| Section | Full Name | Questions | Marks |
|---|---|---|---|
| VARC | Verbal Ability & Reading Comprehension | 24 | 72 |
| DILR | Data Interpretation & Logical Reasoning | 20 | 60 |
| QA | Quantitative Aptitude | 22 | 66 |
| **Total** | | **66** | **198** |

MCQ questions carry -1 negative marking. TITA (Type In The Answer) questions have no negative marking.

## Syllabus

**VARC** tests your reading speed and comprehension through passages from diverse topics — economics, science, literature, history. Verbal Ability questions include para-jumbles, odd sentences, and para-summary.

**DILR** gives you sets of data (tables, graphs, caselets) and tests your ability to interpret information and reason logically. This section has become tougher over the past few years.

**QA** covers Class 10-12 math — Arithmetic, Number System, Algebra, Geometry, Modern Math. If your math foundation is strong, this section can be your scoring zone.

## Score and Percentile

CAT results are announced as percentiles, not raw scores. Each IIM has its own percentile cutoff — the top 6 IIMs typically require 99+ percentile for general category. Even a 95-97 percentile opens doors to IIM Lucknow, Kozhikode, Indore, Shillong, and many more.

## After CAT — WAT-PI

Getting a good percentile is just the start. IIMs call candidates for Written Ability Test (WAT) and Personal Interview (PI). Your final admission is based on a composite score of CAT percentile, academics, work experience, and interview performance.

## Application Fee

Around ₹2,400 for general and ₹1,200 for SC/ST/PwD candidates.

## Official Website

iimcat.ac.in — Registration opens August 1.`,
    completeness_score: 93,
    reading_time: "6 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 5. XAT 2027
  // ─────────────────────────────────────────────────────────────
  {
    slug: "xat-2027",
    title: "XAT 2027 (Xavier Aptitude Test)",
    conducting_body: "XLRI Jamshedpur",
    exam_date: "2027-01-03",
    application_start: "2026-07-10",
    application_end: "2026-12-05",
    eligibility:
      "Bachelor's degree in any discipline from a recognized university. No minimum marks requirement. Final year students can also apply. No age limit.",
    syllabus:
      "Verbal & Logical Ability, Decision Making, Quantitative Ability & Data Interpretation, General Knowledge.",
    exam_pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "190 minutes (3 hours 10 minutes)",
      sections: [
        { name: "Verbal & Logical Ability", questions: 26 },
        { name: "Decision Making", questions: 21 },
        { name: "Quantitative Ability & Data Interpretation", questions: 28 },
        { name: "General Knowledge", questions: 25, note: "Not counted in percentile" },
      ],
      totalQuestions: 100,
      markingScheme: "+1 correct, -0.25 wrong. Additional penalty for 8+ unattempted questions.",
    },
    official_link: "https://xatonline.in",
    category: "management",
    state: "all-india",
    description:
      "XAT 2027 is conducted by XLRI Jamshedpur for MBA admissions. Registration opens July 10, 2026 and closes December 5, 2026. Exam on January 3, 2027. Accepted by 150+ top B-schools including XLRI, XIMB, SPJIMR, and IMT.",
    content: `## XAT 2027 — Complete Guide

XAT — Xavier Aptitude Test — is India's second most important MBA entrance exam after CAT. Conducted by XLRI Jamshedpur every year on January 1st week, it is accepted by over 150 top business schools including XLRI itself, XIMB Bhubaneswar, SPJIMR Mumbai, IMT Ghaziabad, and GIM Goa.

XLRI is known for its PGDM in Business Management and Human Resource Management — considered among the best in the country. If you want to study HR at a top B-school, XAT is practically mandatory.

Registration for XAT 2027 opens **July 10, 2026** and closes **December 5, 2026**. Exam date is **January 3, 2027**.

## Important Dates

| Event | Date |
|---|---|
| Registration Opens | **July 10, 2026** |
| Last Date to Apply | **December 5, 2026** |
| Admit Card Release | Late December 2026 |
| Exam Date | **January 3, 2027** |
| Result (Expected) | January 2027 |

## Eligibility

Any graduate from a recognized university can apply — there is no minimum marks requirement and no age limit. Final year students can also register. Even people who have worked for 5-10 years often appear for XAT to get into XLRI's executive or regular programmes.

## Exam Pattern

XAT has four parts. Three of them count toward your percentile — Verbal & Logical Ability, Decision Making, and Quantitative Ability & Data Interpretation. The fourth section, General Knowledge, does not count in the percentile but is used separately during the interview stage.

| Section | Questions | Counted in Percentile? |
|---|---|---|
| Verbal & Logical Ability | 26 | Yes |
| Decision Making | 21 | Yes |
| Quantitative Ability & DI | 28 | Yes |
| General Knowledge | 25 | No |

One unique XAT rule: if you leave more than 8 questions unattempted, there is an additional penalty. This pushes you to attempt more rather than skip.

## What Makes XAT Different

**Decision Making** is a section you won't find in CAT. It tests ethical judgement, business scenarios, and situational analysis — things that actually matter in real management jobs. This section separates XAT from every other MBA exam.

The exam is also slightly harder on the verbal side compared to CAT, with more inference-based and reasoning-heavy questions.

## Application Fee

₹2,200 for XAT registration. If you want to apply to XLRI programmes separately (PGDM-BM or PGDM-HRM), add ₹200 per programme.

## Colleges That Accept XAT

Besides XLRI, top XAT-accepting colleges include:
- XIMB Bhubaneswar
- SPJIMR Mumbai
- IMT Ghaziabad
- GIM Goa
- TAPMI Manipal
- LIBA Chennai
- XIME Bangalore

A XAT score of 90+ percentile is generally needed for XLRI shortlist (varies by category and year).

## Official Website

xatonline.in — Registration from July 10, 2026.`,
    completeness_score: 91,
    reading_time: "5 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 6. CLAT 2027
  // ─────────────────────────────────────────────────────────────
  {
    slug: "clat-2027",
    title: "CLAT 2027 (Common Law Admission Test)",
    conducting_body: "Consortium of National Law Universities (NLUs)",
    exam_date: "2026-12-06",
    application_start: "2026-08-01",
    application_end: "2026-10-31",
    eligibility:
      "UG (BA LLB): Class 12 with 45% marks (40% for SC/ST/PwD). No upper age limit. PG (LLM): LLB/BA LLB with 50% marks (45% for SC/ST/PwD).",
    syllabus:
      "English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, Quantitative Techniques — all passage-based.",
    exam_pattern: {
      mode: "Offline (Pen and Paper)",
      duration: "120 minutes",
      sections: [
        { name: "English Language", questions: 28, marks: 28 },
        { name: "Current Affairs & GK", questions: 35, marks: 35 },
        { name: "Legal Reasoning", questions: 35, marks: 35 },
        { name: "Logical Reasoning", questions: 28, marks: 28 },
        { name: "Quantitative Techniques", questions: 14, marks: 14 },
      ],
      totalMarks: 120,
      totalQuestions: 120,
      markingScheme: "+1 correct, -0.25 wrong",
    },
    official_link: "https://consortiumofnlus.ac.in",
    category: "law",
    state: "all-india",
    description:
      "CLAT 2027 is the national law entrance exam for BA LLB and LLM admissions at all 24 National Law Universities. Registration opens August 1, 2026 and closes October 31, 2026. Offline exam on December 6, 2026.",
    content: `## CLAT 2027 — Complete Guide

CLAT — the Common Law Admission Test — is the single entrance test for all 24 National Law Universities (NLUs) in India. These include the most reputed law schools in the country — NLSIU Bangalore, NALSAR Hyderabad, NLU Delhi (through a separate exam), NUJS Kolkata, and NLU Jodhpur, among others.

Getting into an NLU is the dream for thousands of students who want a career in law — whether as a lawyer, judge, corporate counsel, or legal academic. CLAT 2027 registration opens **August 1, 2026** and the exam is on **December 6, 2026**.

## Important Dates

| Event | Date |
|---|---|
| Registration Opens | **August 1, 2026** |
| Last Date to Apply | **October 31, 2026** |
| Admit Card | November 2026 |
| Exam Date | **December 6, 2026** |
| Result | December 2026 |
| Counselling | January 2027 |

## Eligibility

**For UG (BA LLB — 5 year programme):**
Class 12 pass or appearing with 45% marks (40% for SC/ST/PwD candidates). There is no upper age limit.

**For PG (LLM — 1 year programme):**
LLB or BA LLB degree with 50% marks (45% for SC/ST/PwD).

## Exam Pattern

CLAT 2027 is an offline, pen-and-paper test with 120 questions in 120 minutes. All questions are passage-based — meaning you read a short paragraph and answer questions based on it. This is different from the older format which had direct factual questions.

| Section | Questions | Marks |
|---|---|---|
| English Language | 28 | 28 |
| Current Affairs & GK | 35 | 35 |
| Legal Reasoning | 35 | 35 |
| Logical Reasoning | 28 | 28 |
| Quantitative Techniques | 14 | 14 |
| **Total** | **120** | **120** |

There is -0.25 negative marking for wrong answers.

## Section-wise Preparation Tips

**English:** Focus on reading comprehension speed. Read newspapers and magazines daily.

**Current Affairs & GK:** Follow news related to legal developments, constitutional changes, government policies, and court judgments. The last 12 months of current affairs matter a lot.

**Legal Reasoning:** You don't need to know law beforehand — the passages explain the legal principles and you apply them to scenarios. Practice logical application rather than memorizing legal terms.

**Logical Reasoning:** Standard analytical reasoning — syllogisms, assumptions, cause-effect. Practice daily.

**Quantitative:** Basic Class 10 math — percentages, averages, ratios. This section has lower weight and is manageable.

## Top NLUs and Their Location

| NLU | Location | Rank |
|---|---|---|
| NLSIU | Bangalore | Top 1 |
| NALSAR | Hyderabad | Top 2 |
| NUJS | Kolkata | Top 3 |
| NLU Jodhpur | Jodhpur | Top 5 |
| GNLU | Gandhinagar | Top 6 |

## Application Fee

Around ₹4,000 for general and OBC categories, ₹3,500 for SC/ST/PwD.

## Official Website

consortiumofnlus.ac.in — Registration opens August 1, 2026.`,
    completeness_score: 93,
    reading_time: "6 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 7. AILET 2027
  // ─────────────────────────────────────────────────────────────
  {
    slug: "ailet-2027",
    title: "AILET 2027 (All India Law Entrance Test)",
    conducting_body: "National Law University, Delhi (NLU Delhi)",
    exam_date: "2026-12-13",
    application_start: "2026-08-07",
    application_end: "2026-11-10",
    eligibility:
      "BA LLB: Class 12 with 45% marks (40% for SC/ST/PwD). No upper age limit. LLM: LLB with 55% marks. PhD: LLM degree required.",
    syllabus:
      "English, Current Affairs & GK, Legal Reasoning, Logical Reasoning, Quantitative Techniques — passage-based format.",
    exam_pattern: {
      mode: "Online (Computer Based Test)",
      duration: "90 minutes",
      totalQuestions: 100,
      totalMarks: 100,
      markingScheme: "+1 correct, no negative marking",
    },
    official_link: "https://nationallawuniversitydelhi.in",
    category: "law",
    state: "all-india",
    description:
      "AILET 2027 is conducted by NLU Delhi for BA LLB and LLM admissions. NLU Delhi does not participate in CLAT and conducts its own entrance test. Registration expected from August 7, 2026. Exam on December 13, 2026.",
    content: `## AILET 2027 — Complete Guide

National Law University Delhi is one of the most prestigious law schools in India — and it doesn't participate in CLAT. It conducts its own separate entrance test called AILET (All India Law Entrance Test). If you want to study at NLU Delhi specifically, AILET is the exam you need to crack.

AILET 2027 is expected to open registration from **August 7, 2026** and the exam is scheduled on **December 13, 2026** — one week after CLAT.

## Why NLU Delhi Matters

NLU Delhi (or NLU-D) is consistently ranked among the top 2-3 law schools in India. Its placement record is exceptional — most graduates land at top-tier law firms, international organizations, or government legal positions. The intake is small (around 80 seats for BA LLB), which makes it extremely competitive.

## Important Dates (Expected)

| Event | Date |
|---|---|
| Registration Opens | **August 7, 2026** |
| Last Date to Apply | **November 10, 2026** |
| Admit Card | Late November 2026 |
| Exam Date | **December 13, 2026** |
| Result | December 2026 |

*Dates are tentative based on the previous year's pattern. Check nationallawuniversitydelhi.in for official dates.*

## Eligibility

**BA LLB (5 years):** Class 12 pass with 45% marks in aggregate. SC/ST/PwD candidates need 40%. No upper age limit.

**LLM (1 year):** LLB or BA LLB degree with 55% marks.

**PhD:** LLM degree with first class is required.

## Exam Pattern

AILET 2027 is an online computer-based test with 100 questions in 90 minutes. There is **no negative marking**, which is different from CLAT's -0.25 system.

| Detail | Value |
|---|---|
| Mode | Online (CBT) |
| Duration | 90 minutes |
| Questions | 100 |
| Marks | 100 |
| Negative Marking | None |

## Syllabus

The exam is passage-based and covers five areas — English, Current Affairs & GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques. The legal reasoning section tests your ability to apply legal principles given in a passage, not your knowledge of law. This makes it accessible to Class 12 students with no prior law background.

## AILET vs CLAT

Both exams are for law admission, but there are key differences:

| Feature | AILET 2027 | CLAT 2027 |
|---|---|---|
| Colleges | NLU Delhi only | All 24 NLUs except NLU Delhi |
| Mode | Online | Offline |
| Negative Marking | None | -0.25 |
| Exam Date | December 13 | December 6 |
| Seats (UG) | ~80 | 2,500+ across NLUs |

Most serious law aspirants attempt both CLAT and AILET since they're one week apart.

## Application Fee

Around ₹3,000 for general category.

## Official Website

nationallawuniversitydelhi.in`,
    completeness_score: 91,
    reading_time: "5 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 8. GATE 2027
  // ─────────────────────────────────────────────────────────────
  {
    slug: "gate-2027",
    title: "GATE 2027 (Graduate Aptitude Test in Engineering)",
    conducting_body: "IIT Madras",
    exam_date: "2027-02-07",
    application_start: "2026-08-15",
    application_end: "2026-09-30",
    eligibility:
      "B.Tech/BE/B.Sc (Research)/BS (4 years) or equivalent degree, or currently in final year. Also open to MSc, MCA, and MA students in relevant disciplines.",
    syllabus:
      "30+ papers including Computer Science (CS), Electronics (EC), Electrical (EE), Mechanical (ME), Civil (CE), Chemical (CH), Instrumentation (IN), and others. Each paper has General Aptitude (15 marks) + core subject (85 marks).",
    exam_pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "180 minutes (3 hours)",
      totalMarks: 100,
      sections: [
        { name: "General Aptitude", marks: 15, questions: 10 },
        { name: "Core Subject", marks: 85, questions: 55 },
      ],
      markingScheme: "+1 or +2 marks correct, -0.33 or -0.67 wrong (MCQ). No negative for NAT questions.",
      papers: "30+ discipline-specific papers",
    },
    official_link: "https://gate.iitm.ac.in",
    category: "engineering",
    state: "all-india",
    description:
      "GATE 2027 is conducted by IIT Madras for M.Tech admissions and PSU recruitment. Registration expected August–September 2026, exam in February 2027. Valid GATE score is accepted by ONGC, BHEL, IOCL, GAIL, NTPC, and 20+ major PSUs.",
    content: `## GATE 2027 — Complete Guide

GATE — the Graduate Aptitude Test in Engineering — opens two major doors for engineering graduates: admission to M.Tech/ME programmes at IITs, NITs, and IIITs, and direct recruitment in major Public Sector Undertakings (PSUs) like ONGC, BHEL, IOCL, NTPC, GAIL, PGCIL, and many more.

IIT Madras is conducting GATE 2027. Registration is expected to begin in **August 2026** and the exam will be held in **February 2027**.

## Important Dates (Expected)

| Event | Date |
|---|---|
| Official Notification | July 2026 |
| Registration Opens | **August 2026** |
| Last Date to Apply | **September 2026** |
| Admit Card | January 2027 |
| Exam Date | **February 7–8 and 14–15, 2027** |
| Result | March 2027 |
| Score Valid For | 3 years |

*Based on IIT Madras official exam calendar. Confirm at gate.iitm.ac.in.*

## Eligibility

Any student who has completed (or is in the final year of) a B.Tech, BE, B.Sc (Research), or BS (4-year) programme can apply. MSc, MCA, and MA students in certain disciplines are also eligible. There is no age limit and no limit on the number of attempts.

## Available Papers

GATE 2027 offers 30+ discipline-specific papers. Popular ones include:

| Paper Code | Subject |
|---|---|
| CS | Computer Science & IT |
| EC | Electronics & Communication |
| EE | Electrical Engineering |
| ME | Mechanical Engineering |
| CE | Civil Engineering |
| CH | Chemical Engineering |
| IN | Instrumentation Engineering |
| BT | Biotechnology |

You can appear in up to two papers (if both are allowed in combination).

## Exam Pattern

Each GATE paper has 65 questions worth 100 marks, completed in 3 hours. The paper is split into General Aptitude (10 questions, 15 marks) and the core subject (55 questions, 85 marks).

Questions include MCQs (with negative marking) and NAT — Numerical Answer Type — where you type your answer directly with no negative marking.

## PSU Recruitment Through GATE

A valid GATE score (valid for 3 years) is accepted by:

- **ONGC** — Oil & Natural Gas Corporation
- **BHEL** — Bharat Heavy Electricals Limited
- **IOCL** — Indian Oil Corporation Limited
- **GAIL** — Gas Authority of India Limited
- **NTPC** — National Thermal Power Corporation
- **PGCIL** — Power Grid Corporation of India
- **BEL** — Bharat Electronics Limited
- And 20+ more PSUs

PSU jobs through GATE offer attractive salaries (₹50,000–₹70,000+ per month starting), government job security, and excellent growth prospects. This is why lakhs of engineers prepare for GATE even when they don't want to do M.Tech.

## M.Tech Admissions

IITs use their own COAP (Common Offer Acceptance Portal) for M.Tech admissions based on GATE score. NITs use CCMT (Centralized Counselling for M.Tech). Both processes happen in May–July after GATE results.

## Application Fee

Around ₹1,800 for general and OBC candidates, ₹900 for female/SC/ST/PwD.

## Official Website

gate.iitm.ac.in — Notification expected July 2026.`,
    completeness_score: 92,
    reading_time: "7 min read",
  },

  // ─────────────────────────────────────────────────────────────
  // 9. MH SET 2026
  // ─────────────────────────────────────────────────────────────
  {
    slug: "mh-set-2026",
    title: "MH SET 2026 (Maharashtra State Eligibility Test)",
    conducting_body: "Savitribai Phule Pune University (SPPU)",
    exam_date: "2026-07-26",
    application_start: "2026-06-02",
    application_end: "2026-06-16",
    eligibility:
      "Post-graduation in the relevant subject with minimum 55% marks (50% for OBC/SC/ST/PwD/Ex-servicemen). No age limit.",
    syllabus:
      "Paper I: General Paper on Teaching and Research Aptitude (compulsory). Paper II: Subject-specific paper chosen at the time of application (60+ subjects available).",
    exam_pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "Paper I: 60 min | Paper II: 120 min",
      papers: [
        { name: "Paper I", questions: 50, marks: 100, duration: "60 minutes", type: "Teaching & Research Aptitude" },
        { name: "Paper II", questions: 100, marks: 200, duration: "120 minutes", type: "Subject Specific" },
      ],
      markingScheme: "+2 correct, no negative marking",
      totalMarks: 300,
    },
    official_link: "https://setexam.unipune.ac.in",
    category: "teaching",
    state: "maharashtra",
    description:
      "MH SET 2026 is the Maharashtra State Eligibility Test for Assistant Professor eligibility in Maharashtra and Goa colleges. Application closes June 16, 2026. Exam on July 26, 2026. Conducted by Savitribai Phule Pune University.",
    content: `## MH SET 2026 — Complete Guide

If you have completed your post-graduation and want to become a college lecturer or Assistant Professor in Maharashtra or Goa, the MH SET (Maharashtra State Eligibility Test) is mandatory. Without this certificate, you cannot be appointed as an Assistant Professor in any college affiliated to Maharashtra's universities.

MH SET 2026 is being conducted by Savitribai Phule Pune University (SPPU). The application last date is **June 16, 2026** and the exam is on **July 26, 2026**.

## Important Dates

| Event | Date |
|---|---|
| Registration Opens | June 2, 2026 |
| **Last Date to Apply** | **June 16, 2026** |
| Admit Card | July 2026 |
| Exam Date | **July 26, 2026** |
| Result | August – September 2026 |

## Eligibility

Post-graduation (MA, MSc, MCom, or equivalent) in the relevant subject with at least 55% marks. OBC, SC, ST, PwD, and Ex-servicemen candidates need a minimum of 50%. There is no upper age limit.

PhD holders in the relevant subject are often exempted from SET/NET requirements for direct recruitment in some colleges — but it's always better to hold the SET certificate.

## Exam Pattern

MH SET has two papers on the same day:

**Paper I — Teaching & Research Aptitude (Compulsory for all)**
50 questions, 100 marks, 60 minutes. Tests general knowledge about higher education, teaching methodology, research aptitude, reasoning, comprehension, and communication.

**Paper II — Subject Specific**
100 questions, 200 marks, 120 minutes. You choose your subject at the time of application from 60+ available subjects including History, Political Science, Economics, Commerce, Computer Science, Physics, Chemistry, Botany, Zoology, Marathi, Hindi, English, and many more.

There is no negative marking in either paper.

## Subjects Available

60+ subjects are covered including all major arts, science, commerce, and professional subjects. You appear in the subject you did your post-graduation in.

## Validity

The MH SET certificate is valid for life — once you clear it, you don't have to appear again. It is recognized for teaching positions across all colleges affiliated to Maharashtra's universities and Goa University.

## Is MH SET Different from UGC-NET?

Yes. UGC-NET (conducted by NTA) is a national-level test that gives eligibility across all states. MH SET is only for Maharashtra and Goa. However, many candidates appear in both. Those who clear UGC-NET are also eligible to teach in Maharashtra colleges.

## Application Fee

Around ₹600 for general, ₹300 for OBC/SC/ST/PwD.

## Official Website

setexam.unipune.ac.in`,
    completeness_score: 89,
    reading_time: "5 min read",
  },
];

async function main() {
  console.log(`Adding ${exams.length} entrance exams...\n`);
  let success = 0;
  let failed = 0;

  for (const exam of exams) {
    // Check if slug already exists
    const { data: existing } = await supabase
      .from("entrance_exams")
      .select("slug")
      .eq("slug", exam.slug)
      .single();

    if (existing) {
      console.log(`⚠️  SKIP — already exists: ${exam.slug}`);
      continue;
    }

    const record = {
      slug: exam.slug,
      title: exam.title,
      conducting_body: exam.conducting_body,
      exam_date: exam.exam_date,
      application_start: exam.application_start || "",
      application_end: exam.application_end || "",
      eligibility: exam.eligibility,
      syllabus: exam.syllabus,
      exam_pattern: exam.exam_pattern,
      official_link: exam.official_link,
      category: exam.category,
      state: exam.state,
      description: exam.description,
      content: exam.content,
      is_active: true,
      quality_flag: null,
      completeness_score: exam.completeness_score,
      reading_time: exam.reading_time,
      published_at: new Date().toISOString(),
      reviewed_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("entrance_exams").insert(record);

    if (error) {
      console.log(`❌ FAILED: ${exam.slug} — ${error.message}`);
      failed++;
    } else {
      console.log(`✅ Added: ${exam.title}`);
      success++;
    }
  }

  console.log(`\n--- Done: ${success} added, ${failed} failed ---`);
}

main();
