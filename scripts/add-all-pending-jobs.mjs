import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const envFile = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const env = Object.fromEntries(
  envFile.split("\n").filter(l => l.includes("=") && !l.startsWith("#"))
    .map(l => { const [k, ...v] = l.split("="); return [k.trim(), v.join("=").trim()]; })
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

const jobs = [

  // ─── 1. SSC CHSL 2026 ────────────────────────────────────────────────────────
  {
    slug: "ssc-chsl-2026",
    title: "SSC CHSL 2026 — LDC, JSA, Postal Assistant, DEO",
    organization: "Staff Selection Commission (SSC)",
    post_name: "Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant (PA), Sorting Assistant (SA), Data Entry Operator (DEO)",
    vacancies: 3500,
    eligibility: {
      age: "18–27 years (OBC: +3 yrs, SC/ST: +5 yrs, PwBD: +10 yrs, Ex-Servicemen: as per rules)",
      education: "12th Pass (10+2) from any recognized Board — Science, Commerce, Arts, all streams accepted. For DEO in certain ministries: 12th with Science stream and Maths as compulsory subject."
    },
    salary: "Pay Level 2–4 — ₹19,900–₹63,200/month basic + DA + HRA + TA. Total in-hand ₹30,000–₹50,000/month depending on post and city of posting.",
    application_fee: {
      general: "₹100",
      obc: "₹100",
      ews: "₹100",
      sc_st: "Nil",
      women: "Nil",
      ph: "Nil"
    },
    important_dates: {
      startDate: "2026-04-30",
      lastDate: "2026-05-31",
      examDate: "2026-07-01"
    },
    how_to_apply: `Application window has closed (last date was May 31, 2026). Candidates who have already applied can download their admit card from ssc.gov.in when released.

For future reference, the process is:
1. Visit ssc.gov.in and complete one-time registration
2. Log in → SSC CHSL 2026 → Apply Online
3. Fill educational and personal details
4. Upload photo and signature
5. Pay ₹100 fee (SC/ST/Female/PwBD: Nil)
6. Submit and download confirmation page`,
    selection_process: `SSC CHSL 2026 has two tiers:

**Tier 1 — Computer Based Examination**

| Subject | Questions | Marks |
|---|---|---|
| English Language | 25 | 50 |
| General Intelligence | 25 | 50 |
| Quantitative Aptitude (Basic Arithmetic) | 25 | 50 |
| General Awareness | 25 | 50 |
| **Total** | **100** | **200** |

- Duration: 60 minutes (80 minutes for PwBD)
- Negative Marking: 0.50 marks per wrong answer
- Mode: Online (Computer Based)

**Tier 2 — Descriptive Paper + Skill Test**

- Session 1: Mathematical Abilities + Reasoning & GI (compulsory for all)
- Session 2: English Language & Comprehension (compulsory for all)
- Session 3: Skill Test — Typing Test for LDC/JSA/PA/SA posts, Data Entry Speed Test for DEO posts

Typing Test: 10,500 key depressions per hour for Data Entry Operator posts. English typing speed of 35 w.p.m. or Hindi typing speed of 30 w.p.m. for LDC/JSA posts.`,
    official_link: "https://ssc.gov.in/",
    notification_link: "https://ssc.gov.in/",
    apply_link: "https://ssc.gov.in/",
    category: "ssc",
    state: "all-india",
    is_active: true,
    description: "SSC CHSL 2026 notification released for 3500+ LDC, JSA, Postal Assistant, Sorting Assistant, and DEO vacancies. Tier 1 exam scheduled for July–September 2026. Eligible candidates are 12th pass, aged 18–27 years.",
    reading_time: "8 min read",
    last_date: "2026-05-31",
    qualification: "12th Pass (10+2) from any recognized Board",
    employment_type: "FULL_TIME",
    content: `## What is SSC CHSL?

SSC CHSL — Combined Higher Secondary Level — is the exam for 12th pass candidates who want a central government job. If you've finished Class 12 and don't want to wait for graduation, this is your best shot at a structured government career.

It fills posts like Lower Division Clerk, Junior Secretariat Assistant, Postal Assistant, Sorting Assistant, and Data Entry Operator in central government ministries, postal departments, and various government offices across India.

These aren't glamorous-sounding posts, but the reality is: a central government LDC or PA has job security, 7th Pay Commission salary, CGHS medical, leave encashment, and a pension. That's a package most private sector jobs at the 12th-pass level can't match.

---

## Posts and Where You'll Work

| Post | Department / Office | Pay Level |
|---|---|---|
| Lower Division Clerk (LDC) | Central Government Ministries & Departments | Level 2 |
| Junior Secretariat Assistant (JSA) | Parliament of India (Lok Sabha / Rajya Sabha) | Level 4 |
| Postal Assistant (PA) | Department of Posts (Post Offices across India) | Level 4 |
| Sorting Assistant (SA) | Department of Posts (Sorting / Distribution Centers) | Level 4 |
| Data Entry Operator (DEO) | CAG, Ministry of Statistics, other offices | Level 4 or 5 |

Postal Assistant and Sorting Assistant posts are run by India Post — you could end up in any postal circle in the country. LDC positions cover a wide range of ministries. JSA in Parliament is a particularly sought-after posting given its work environment. DEO in CAG or Ministry of Statistics comes with structured responsibilities and above-average growth.

---

## Eligibility

### Age
- **General / EWS / OBC:** 18 to 27 years (born between January 2, 1999 and January 1, 2008)
- **SC / ST:** Up to 32 years
- **OBC (NCL):** Up to 30 years
- **PwBD:** Up to 37 years (General), up to 40 years (SC/ST)

### Education
- **LDC / JSA / PA / SA / DEO (most posts):** 12th pass from any recognized board — any stream
- **DEO Grade A in certain specific ministries:** 12th with Science stream, Maths as compulsory subject

That's it. No graduation required. This is what makes CHSL one of the more accessible central government exams.

---

## Salary

| Post | Pay Level | Basic Pay | Approximate In-Hand |
|---|---|---|---|
| LDC | Level 2 | ₹19,900 | ₹30,000–₹38,000/month |
| JSA (Parliament) | Level 4 | ₹25,500 | ₹40,000–₹50,000/month |
| PA / SA (Posts) | Level 4 | ₹25,500 | ₹38,000–₹50,000/month |
| DEO | Level 4–5 | ₹25,500–₹29,200 | ₹40,000–₹52,000/month |

This includes DA, HRA (8/16/24% depending on city), and Transport Allowance. You also get CGHS medical coverage, LTC (Leave Travel Concession), and NPS pension.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS (Male) | ₹100 |
| SC / ST | Nil |
| Female (all categories) | Nil |
| PwBD | Nil |
| Ex-Servicemen | Nil |

---

## Exam Pattern

### Tier 1 — Online (Computer Based Test)

| Subject | Questions | Marks | Time |
|---|---|---|---|
| English Language | 25 | 50 | |
| General Intelligence & Reasoning | 25 | 50 | 60 minutes |
| Quantitative Aptitude | 25 | 50 | (80 min for PwBD) |
| General Awareness | 25 | 50 | |
| **Total** | **100** | **200** | |

Negative marking: 0.50 marks per wrong answer. Tier 1 is screening — its marks are considered in the final merit for all posts.

### Tier 2 — Computer Based Test + Skill Test

**Session I (compulsory for all):**
- Module 1: Mathematical Abilities — 30 questions, 90 marks, 1 hour
- Module 2: Reasoning and General Intelligence — 30 questions, 90 marks, 1 hour

**Session II (compulsory for all):**
- English Language & Comprehension — 40 questions, 120 marks, 1 hour

**Session III (post-specific):**
- Module 1: For JSA posts — Hindi/English language competency
- Module 2: Skill Test — Computer Proficiency Test (CPT) for certain posts; Data Entry Speed Test (DEST) for DEO posts

**Typing Test details:**
- LDC / JSA / PA / SA: English typing at 35 w.p.m. OR Hindi typing at 30 w.p.m.
- DEO: 10,500 key depressions per hour (data entry speed test)

Tier 2 Skill Test is qualifying — it doesn't add to your score, but you must pass it.

---

## Syllabus — What to Focus On

**English Language:** Vocabulary (synonyms, antonyms, one-word substitution), spelling correction, idioms and phrases, fill in the blanks, reading comprehension, grammar — tenses, articles, prepositions, active/passive voice, direct/indirect speech. CHSL English is moderate — not as hard as Bank PO English but tougher than just knowing basic grammar.

**General Intelligence & Reasoning:** Series, analogy, coding-decoding, blood relations, direction sense, Venn diagrams, syllogisms, matrix, non-verbal reasoning (pattern completion, mirror images). 25 questions in about 15 minutes is the target pace.

**Quantitative Aptitude:** Basic arithmetic — percentage, ratio & proportion, profit & loss, average, simple/compound interest, time & work, time & distance. Unlike CGL, CHSL doesn't go into advanced geometry or coordinate geometry. If you've studied Class 10 maths, you have a solid foundation.

**General Awareness:** Current affairs (6 months), history, geography, polity, science & technology, sports, awards. SSC CHSL GK is broad — avoid over-specializing in any one subject.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | April 30, 2026 |
| Application Started | April 30, 2026 |
| Application Last Date | May 31, 2026 |
| Tier 1 Exam | July–September 2026 |
| Tier 2 Exam | After Tier 1 result |

---

## Preparation Tips

If you're preparing now for the Tier 1 exam in July-September, you have 6-8 weeks. That's enough time if you're structured about it.

Prioritize English and Reasoning — these two sections have the most scoring potential with the least preparation time. GK is unpredictable but 15-20 minutes daily on current affairs and static GK basics will cover most of what SSC asks.

Quantitative Aptitude for CHSL is Class 10 level — don't over-prepare it, but make sure percentage, profit-loss, and time-distance are solid.

Practice 2-3 full mock tests per week. SSC CHSL previous year papers from 2019-2024 are your best preparation resource.

---

## Official Links

| Resource | Link |
|---|---|
| SSC Official Website | [ssc.gov.in](https://ssc.gov.in/) |
| Notification PDF | Available on ssc.gov.in |
| Apply Online / Admit Card | [ssc.gov.in → Candidates](https://ssc.gov.in/) |
`
  },

  // ─── 2. UPPSC PCS 2026 ──────────────────────────────────────────────────────
  {
    slug: "uppsc-pcs-2026",
    title: "UPPSC PCS 2026 — Deputy Collector, DSP, SDM & Other Group A/B Posts",
    organization: "Uttar Pradesh Public Service Commission (UPPSC)",
    post_name: "Deputy Collector, Deputy Superintendent of Police, Block Development Officer, District Commandant Home Guard, Sub Registrar, Assistant Controller Legal Measurement, and other Group A & B Gazetted posts",
    vacancies: 200,
    eligibility: {
      age: "21–40 years for most posts (age relaxation: OBC 3 yrs, SC/ST 5 yrs, PWD 15 yrs — for UP domicile candidates)",
      education: "Bachelor's Degree from any recognized university. Domicile in Uttar Pradesh required for reserved category benefits."
    },
    salary: "Group A Posts (Deputy Collector, DSP): Pay Level 10 — ₹56,100–₹1,77,500/month basic + allowances. Group B Posts (BDO, Naib Tehsildar): Pay Level 8 — ₹47,600–₹1,51,100 basic. Total in-hand ₹70,000–₹1,20,000/month after DA, HRA, TA.",
    application_fee: {
      general: "₹125",
      obc: "₹125",
      ews: "₹125",
      sc_st: "₹65",
      women: "₹65",
      ph: "₹25"
    },
    important_dates: {
      startDate: "2025-12-28",
      lastDate: "2026-01-22",
      examDate: "2026-09-01"
    },
    how_to_apply: `Application window is now closed. Prelims were held earlier in 2026 and Mains are scheduled for later in 2026.

For future UPPSC notifications:
1. Visit uppsc.up.nic.in
2. Register using a valid email and mobile number
3. Fill the application form carefully — wrong information leads to disqualification
4. Pay fee through SBI Collect or other available options
5. Upload photo (passport size) and signature
6. Submit and print the confirmation slip`,
    selection_process: `UPPSC PCS follows a three-stage selection process:

**Stage 1 — Preliminary Examination (Screening)**

| Paper | Subject | Marks | Duration |
|---|---|---|---|
| Paper 1 | General Studies | 150 marks | 2 hours |
| Paper 2 | CSAT (General Aptitude) | 200 marks (qualifying — 33% cutoff) | 2 hours |

Paper 2 (CSAT) is qualifying only — you need 33% to be eligible, but marks don't count toward merit. Paper 1 decides your Prelims rank.

**Stage 2 — Main Examination (Descriptive)**

| Paper | Subject | Marks |
|---|---|---|
| Paper 1 | General Hindi | 150 |
| Paper 2 | Essay (Hindi) | 150 |
| Paper 3 | General Studies I | 200 |
| Paper 4 | General Studies II | 200 |
| Paper 5 | General Studies III | 200 |
| Paper 6 | General Studies IV (Ethics) | 200 |
| Paper 7 | Optional Subject — Paper 1 | 200 |
| Paper 8 | Optional Subject — Paper 2 | 200 |
| **Total** | | **1500** |

**Stage 3 — Interview / Personality Test**
100 marks. Candidates shortlisted from Mains appear for interview at UPPSC office, Prayagraj.

Final merit is based on Mains (1500) + Interview (100) = 1600 marks.`,
    official_link: "https://uppsc.up.nic.in/",
    notification_link: "https://uppsc.up.nic.in/",
    apply_link: "https://uppsc.up.nic.in/",
    category: "state-psc",
    state: "uttar-pradesh",
    is_active: true,
    description: "UPPSC PCS 2026 notification for 200 Group A and B posts including Deputy Collector, DSP, BDO, Naib Tehsildar and more. Mains exam scheduled for 2026. Graduate candidates aged 21–40 years can apply.",
    reading_time: "9 min read",
    last_date: "2026-01-22",
    qualification: "Bachelor's Degree from any recognized university",
    employment_type: "FULL_TIME",
    content: `## What is UPPSC PCS?

UPPSC PCS — Provincial Civil Services — is Uttar Pradesh's equivalent of the IAS exam. If UPSC Civil Services gives you posts like IAS and IPS at the national level, UPPSC PCS gives you posts like Deputy Collector, DSP, SDM, and BDO at the state level in UP.

This is one of the most competitive state-level exams in India simply because UP is the largest state — the competition pool is massive, but so is the reward. A Deputy Collector in UP commands real administrative authority. A DSP posting means you're heading a police circle. These are not entry-level roles — they're actual power positions in the state government.

---

## Posts and What They Actually Mean

| Post | Service | Level |
|---|---|---|
| Deputy Collector / SDM | UP Civil Service | Group A |
| Deputy SP (DSP) | UP Police Service | Group A |
| District Commandant (Home Guard) | UP Home Guard Service | Group A |
| Block Development Officer (BDO) | UP Rural Development Service | Group B |
| Sub Registrar | UP Revenue Service | Group B |
| Naib Tehsildar | UP Revenue Service | Group B |
| District Supply Officer | UP Food & Supply Service | Group B |
| Accounts Officer (Treasury) | UP Finance Service | Group B |

Group A posts come with executive authority, official residence, vehicle, and staff. Group B posts are the foundation of district-level administration. Both have structured promotions — a Naib Tehsildar can become Tehsildar, then SDM, and eventually District Magistrate over a career.

---

## Vacancy Breakdown 2026

| Post Category | Vacancies |
|---|---|
| Group A Posts | ~100 |
| Group B Posts | ~100 |
| **Total** | **~200** |

*Note: UPPSC releases category-wise and post-wise vacancy details in the official advertisement. Candidates should verify the exact count for their post preference on uppsc.up.nic.in.*

---

## Eligibility

### Age (as on July 1, 2026)
- **General / EWS:** 21–40 years
- **OBC (UP domicile):** 21–43 years
- **SC / ST (UP domicile):** 21–45 years
- **PwBD:** 21–55 years

### Educational Qualification
Bachelor's Degree in any discipline from a recognized university. Final year candidates can apply provisionally — degree must be completed before a specified date.

### Domicile
Reservation benefits (OBC/SC/ST) are available only to candidates who are permanent residents of Uttar Pradesh. General category candidates from other states can apply without domicile restrictions.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹125 |
| SC / ST (UP) | ₹65 |
| Female (UP domicile) | ₹65 |
| PwBD (UP domicile) | ₹25 |

---

## Selection Process

### Stage 1: Preliminary Exam

Two papers, both objective type:

**Paper 1 — General Studies (150 marks, 2 hours)**
- History, Culture, National Movement
- Indian & World Geography
- Indian Economy & Social Development
- Environmental Ecology, Biodiversity, Climate Change
- Indian Polity & Governance
- Science & Technology
- Current Events (national and international)
- General Mental Ability

**Paper 2 — CSAT (200 marks, 2 hours) — Qualifying Only**
- Comprehension
- Interpersonal Skills & Communication
- Logical Reasoning & Analytical Ability
- Decision Making & Problem Solving
- General Mental Ability
- Basic Numeracy, Data Interpretation

Minimum 33% required in Paper 2 to be considered for merit. Paper 1 marks decide Prelims rank.

### Stage 2: Mains Exam (1500 marks)

Eight papers — all descriptive (written answers):

| Paper | Subject | Marks |
|---|---|---|
| Paper 1 | General Hindi | 150 |
| Paper 2 | Essay (Hindi medium) | 150 |
| Paper 3 | General Studies I — History, Culture, Geography | 200 |
| Paper 4 | General Studies II — Indian Constitution, Governance, IR | 200 |
| Paper 5 | General Studies III — Economy, Environment, S&T | 200 |
| Paper 6 | General Studies IV — Ethics, Integrity, Aptitude | 200 |
| Paper 7 | Optional Subject — Paper 1 | 200 |
| Paper 8 | Optional Subject — Paper 2 | 200 |
| **Total** | | **1500** |

### Stage 3: Interview (100 marks)

Held at UPPSC, Prayagraj. Tests personality, communication, administrative aptitude, awareness of UP-specific issues. Final merit: Mains + Interview = 1600 marks.

---

## Salary

| Post | Pay Level | Basic Pay | Approximate In-Hand |
|---|---|---|---|
| Deputy Collector / DSP | Level 10 | ₹56,100 | ₹85,000–₹1,10,000/month |
| BDO / Naib Tehsildar | Level 8 | ₹47,600 | ₹70,000–₹90,000/month |
| Sub Registrar | Level 8 | ₹47,600 | ₹65,000–₹85,000/month |

Group A officers additionally get government accommodation, vehicle with driver, and medical facilities under the state government health scheme.

---

## Syllabus Overview

UPPSC PCS syllabus is heavily UP-centric in both Prelims and Mains. This matters:
- Prelims GS Paper 1: UP-specific questions on culture, history, geography, economy appear regularly
- Mains: Essays are often on UP governance, rural development, and regional issues
- Interview: Questions on UP's current administrative challenges, local geography, and candidate's home district are common

**Optional Subjects available:** History, Geography, Public Administration, Sociology, Economics, Political Science, Law, Agriculture, Philosophy, Hindi Literature, Sanskrit Literature, Urdu Literature, and others.

Public Administration, Geography, and Sociology are popular choices among UPPSC toppers due to overlap with General Studies syllabus.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | December 2025 |
| Application Started | December 28, 2025 |
| Application Last Date | January 22, 2026 |
| Prelims Exam | February–April 2026 |
| Mains Exam | September 2026 (expected) |
| Interview | Early 2027 |

---

## How to Prepare

UPPSC PCS rewards consistent, long-form preparation — not speed, but depth. Prelims can be cracked in 6 months of dedicated preparation. Mains needs at least a year.

Start with NCERT books (Class 6–12) for History, Geography, Polity, and Economics. Then build on that with UP-specific sources — UP's economy, culture, government schemes, and administrative structure are tested at both Prelims and Mains levels.

General Hindi is scored by many candidates in the 100–120 range, which becomes a differentiator in the final merit. Don't ignore it.

For optional subject — choose based on your graduation background and how much the syllabus overlaps with GS. Public Administration and Sociology overlap heavily with Mains GS, which reduces total preparation load.

---

## Official Links

| Resource | Link |
|---|---|
| UPPSC Official Website | [uppsc.up.nic.in](https://uppsc.up.nic.in/) |
| All Notifications | [uppsc.up.nic.in/Notifications](https://uppsc.up.nic.in/) |
| Online Application | [uppsc.up.nic.in → Apply Online](https://uppsc.up.nic.in/) |
`
  },

  // ─── 3. IBPS Clerk 2026 ─────────────────────────────────────────────────────
  {
    slug: "ibps-clerk-2026",
    title: "IBPS Clerk 2026 — 15,736 Vacancies in Public Sector Banks",
    organization: "Institute of Banking Personnel Selection (IBPS)",
    post_name: "Clerk (Clerical Cadre) in Public Sector Banks",
    vacancies: 15736,
    eligibility: {
      age: "20–28 years as on August 1, 2026 (born between August 2, 1997 and August 1, 2005). OBC: +3 yrs, SC/ST: +5 yrs, PwBD: +10 yrs.",
      education: "Bachelor's Degree in any discipline from a recognized university. Proficiency in the official language of the state/UT applied for is required."
    },
    salary: "Pay Scale: ₹17,900 – ₹47,920/month (as per IBPS bipartite settlement). Approximate in-hand after DA, HRA, TA: ₹26,000–₹35,000/month. Also includes medical insurance, LFC, and pension under NPS.",
    application_fee: {
      general: "₹850",
      obc: "₹850",
      ews: "₹850",
      sc_st: "₹175",
      women: "₹175",
      ph: "₹175"
    },
    important_dates: {
      startDate: "2026-08-01",
      lastDate: "2026-08-31",
      examDate: "2026-10-10"
    },
    how_to_apply: `Official notification expected in July–August 2026. Once released, apply at ibps.in:

1. Visit ibps.in → CRP Clerks XV → Apply Online
2. Register with a valid email ID and mobile number
3. Fill in personal, educational, and bank preference details
4. Select the state and language proficiency carefully — this affects your posting
5. Upload scanned photo (passport size, white background) and signature
6. Pay application fee — ₹850 for General/OBC/EWS; ₹175 for SC/ST/PwBD/Female
7. Submit and save the confirmation number
8. Admit Card will be released on ibps.in before the Prelims exam`,
    selection_process: `IBPS Clerk 2026 has two stages:

**Stage 1 — Preliminary Examination**

| Subject | Questions | Marks | Duration |
|---|---|---|---|
| English Language | 30 | 30 | 20 minutes |
| Quantitative Aptitude | 35 | 35 | 20 minutes |
| Reasoning Ability | 35 | 35 | 20 minutes |
| **Total** | **100** | **100** | **60 minutes** |

Each section is individually timed. Negative marking: 0.25 marks per wrong answer. Prelims is qualifying — shortlisted candidates appear for Mains.

**Stage 2 — Mains Examination**

| Subject | Questions | Marks | Duration |
|---|---|---|---|
| Reasoning Ability & Computer Aptitude | 50 | 60 | 45 minutes |
| English Language | 40 | 40 | 35 minutes |
| Quantitative Aptitude | 50 | 50 | 45 minutes |
| General/Financial Awareness | 50 | 50 | 35 minutes |
| **Total** | **190** | **200** | **160 minutes** |

Final merit is based on Mains marks. There is no interview for IBPS Clerk. Provisional allotment to banks is done based on merit and preference.`,
    official_link: "https://www.ibps.in/",
    notification_link: "https://www.ibps.in/",
    apply_link: "https://www.ibps.in/",
    category: "banking",
    state: "all-india",
    is_active: true,
    description: "IBPS Clerk 2026 (CRP Clerks XV) notification expected July–August 2026 for 15,736 vacancies in public sector banks including PNB, BOB, Canara, Union Bank, Indian Bank and others. Prelims on October 10–11, 2026. Graduate candidates aged 20–28 years can apply.",
    reading_time: "8 min read",
    last_date: "2026-08-31",
    qualification: "Bachelor's Degree from any recognized university",
    employment_type: "FULL_TIME",
    content: `## What is IBPS Clerk?

IBPS Clerk is a banking job that doesn't get as much attention as IBPS PO, but it's one of the most stable, accessible banking careers available. With 15,736 vacancies in 2026, it's also one of the largest recruitment drives in the banking sector.

As a bank clerk, your work involves customer service at the branch level — account opening, cash transactions, DDs, deposits, withdrawals, cheque processing, and general banking operations. It's a front-facing role with direct public interaction.

Compared to PO, the entry bar is lower (age 28 vs 30, same education), the competition is still intense but spread across more seats, and the salary while starting lower has a clear progression path. Many bank clerks appear for internal promotions — called JAIIB, CAIIB, and internal promotion exams — and move to Officer grade within 5–8 years without leaving the bank.

---

## Participating Banks

IBPS Clerk allotment covers these public sector banks:

| Bank | Headquarters |
|---|---|
| Bank of Baroda | Vadodara, Gujarat |
| Bank of India | Mumbai, Maharashtra |
| Bank of Maharashtra | Pune, Maharashtra |
| Canara Bank | Bengaluru, Karnataka |
| Central Bank of India | Mumbai, Maharashtra |
| Indian Bank | Chennai, Tamil Nadu |
| Indian Overseas Bank | Chennai, Tamil Nadu |
| Punjab National Bank | New Delhi |
| Punjab & Sind Bank | New Delhi |
| UCO Bank | Kolkata, West Bengal |
| Union Bank of India | Mumbai, Maharashtra |

Note: SBI conducts its own separate exam (SBI Clerk) and is not part of IBPS.

---

## Vacancies — 2026

| Total Vacancies | 15,736 |
|---|---|
| SC | ~2,360 |
| ST | ~1,180 |
| OBC | ~4,255 |
| EWS | ~1,574 |
| General | ~6,367 |

*Category-wise and bank-wise vacancy split will be published in the official notification on ibps.in.*

---

## Eligibility

### Age (as on August 1, 2026)
- **General / EWS:** 20–28 years (born August 2, 1997 to August 1, 2005)
- **OBC (NCL):** 20–31 years
- **SC / ST:** 20–33 years
- **PwBD:** 20–38 years (General), 20–43 years (SC/ST)

### Educational Qualification
Bachelor's Degree in any discipline from a recognized university or equivalent qualification as on August 21, 2026.

### Language Requirement
Proficiency in the official language of the state / UT for which you apply. This is verified at the time of provisional allotment — if you apply for a bank branch in UP, you need to be proficient in Hindi. Most candidates apply in their home state, which naturally satisfies this.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹850 |
| SC / ST / PwBD / Ex-Servicemen | ₹175 |

---

## Exam Pattern

### Prelims — October 10–11, 2026

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Quantitative Aptitude | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **60 min** |

Negative marking: 0.25 per wrong answer. Each section has individual time limits — you cannot shift time between sections.

### Mains — December 27, 2026

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning Ability & Computer Aptitude | 50 | 60 | 45 min |
| English Language | 40 | 40 | 35 min |
| Quantitative Aptitude | 50 | 50 | 45 min |
| General/Financial Awareness | 50 | 50 | 35 min |
| **Total** | **190** | **200** | **160 min** |

No interview. Final selection is based entirely on Mains marks.

---

## Salary and Benefits

| Component | Amount |
|---|---|
| Basic Pay | ₹17,900/month (starting) |
| DA (revised quarterly) | ~₹7,500/month |
| HRA (based on city) | ₹1,400–₹3,580/month |
| Transport Allowance | ₹1,200/month |
| Special Allowance | ₹2,900/month |
| **Gross Monthly** | **~₹30,000–₹35,000/month** |

Additional benefits: Group medical insurance, LFC (Leave Fare Concession), staff loan at subsidized interest rates (home loan, car loan, personal loan), NPS pension, and annual increment.

After 5–7 years with JAIIB/CAIIB certification and internal promotion exams, salary reaches ₹45,000–₹55,000/month at the Officer grade.

---

## Syllabus

**English Language (Prelims + Mains):**
Reading comprehension, sentence rearrangement (para jumbles), error spotting, fill in the blanks, cloze test, vocabulary — synonyms/antonyms. Banking exams test English at a practical, comprehension-focused level — not as heavily grammar-oriented as SSC.

**Quantitative Aptitude:**
Number series, simplification, quadratic equations, data interpretation (table, bar graph, pie chart, line graph), percentage, ratio, profit & loss, time-speed-distance, time & work, average, SI/CI, probability. DI (Data Interpretation) sets are the heaviest scorers in the Mains Quant section.

**Reasoning Ability:**
Puzzles & seating arrangement (the majority of questions), syllogisms, inequalities, coding-decoding, blood relations, direction sense, input-output, data sufficiency. Puzzles dominate banking reasoning papers — practice 5-10 puzzle sets daily in the months before exam.

**General/Financial Awareness (Mains only):**
Banking and financial awareness — RBI policies, repo rate, CRR, SLR, banking terminology, recent banking mergers, government schemes, budget highlights, current events (last 6 months). This is where candidates who read banking news daily gain a significant edge.

**Computer Aptitude (Mains):**
Computer fundamentals, MS Office basics, internet and email, networking concepts, shortcuts. This section is generally the easiest in Mains — most candidates score 45+/60 here.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Expected | July–August 2026 |
| Apply Online (Expected) | August 2026 |
| Last Date to Apply | August 2026 |
| Prelims Exam | October 10–11, 2026 |
| Mains Exam | December 27, 2026 |
| Provisional Allotment | Early 2027 |

---

## Official Links

| Resource | Link |
|---|---|
| IBPS Official Website | [ibps.in](https://www.ibps.in/) |
| Apply Online | [ibps.in → CRP Clerks XV](https://www.ibps.in/) |
| CRP Updates | [ibps.in/crp-updates](https://www.ibps.in/) |
`
  },

  // ─── 4. IBPS RRB 2026 ───────────────────────────────────────────────────────
  {
    slug: "ibps-rrb-2026",
    title: "IBPS RRB 2026 — PO & Office Assistant in Regional Rural Banks",
    organization: "Institute of Banking Personnel Selection (IBPS)",
    post_name: "Officer Scale-I (PO), Officer Scale-II, Officer Scale-III, Office Assistant (Multipurpose / Clerk) in Regional Rural Banks",
    vacancies: 4128,
    eligibility: {
      age: "Office Assistant: 18–28 years. Officer Scale-I: 18–30 years. Officer Scale-II: 21–32 years. Officer Scale-III: 21–40 years. (as on June 1, 2026). Age relaxation for SC/ST/OBC/PwBD as per govt rules.",
      education: "Bachelor's Degree in any discipline from a recognized university. Proficiency in local language (read, write, speak) of the state where the RRB is located is mandatory. Computer literacy required."
    },
    salary: "Office Assistant: ₹15,000–₹19,000/month basic + allowances (~₹24,000–₹30,000 in-hand). Officer Scale-I (PO): ₹36,000–₹63,840/month basic + allowances (~₹52,000–₹68,000 in-hand).",
    application_fee: {
      general: "₹850",
      obc: "₹850",
      ews: "₹850",
      sc_st: "₹175",
      women: "₹175",
      ph: "₹175"
    },
    important_dates: {
      startDate: "2026-08-01",
      lastDate: "2026-09-15",
      examDate: "2026-11-21"
    },
    how_to_apply: `Official notification expected August 2026. Once released:

1. Visit ibps.in → CRP RRBs XV → Apply Online
2. Choose your post — Officer Scale-I (PO) or Office Assistant (Clerk)
3. Select the RRB and state you want to apply in (local language proficiency required)
4. Fill personal, educational, and language proficiency details
5. Upload photo and signature
6. Pay application fee and submit
7. Admit cards released on ibps.in before exam dates`,
    selection_process: `**For Officer Scale-I (PO):**
- Prelims → Mains → Interview + DV → Final Merit

**For Office Assistant (Clerk):**
- Prelims → Mains → Language Proficiency Test → Final Merit (no interview)

**Officer Scale-I Prelims** (November 21–22, 2026):

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 40 | 50 | 45 min |
| Quantitative Aptitude | 40 | 50 | 45 min |
| **Total** | **80** | **100** | **90 min** |

**Officer Scale-I Mains** (December 20, 2026):

| Section | Questions | Marks |
|---|---|---|
| Reasoning | 40 | 50 |
| Computer Knowledge | 40 | 20 |
| General Awareness | 40 | 40 |
| English or Hindi Language | 40 | 40 |
| Quantitative Aptitude & Data Interpretation | 40 | 50 |
| **Total** | **200** | **200** |

**Office Assistant Prelims** (December 6, 12–13, 2026):

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 40 | 50 | 45 min |
| Numerical Ability | 40 | 50 | 45 min |
| **Total** | **80** | **100** | **90 min** |

**Office Assistant Mains** (January 30, 2027):

| Section | Questions | Marks |
|---|---|---|
| Reasoning | 40 | 50 |
| Computer Knowledge | 40 | 20 |
| General Awareness | 40 | 40 |
| English Language or Hindi Language | 40 | 40 |
| Quantitative Aptitude & Data Interpretation | 40 | 50 |
| **Total** | **200** | **200** |`,
    official_link: "https://www.ibps.in/",
    notification_link: "https://www.ibps.in/",
    apply_link: "https://www.ibps.in/",
    category: "banking",
    state: "all-india",
    is_active: true,
    description: "IBPS RRB 2026 (CRP RRBs XV) notification expected August 2026 for Officer Scale-I (PO), Officer Scale-II, Scale-III, and Office Assistant (Clerk) posts in Regional Rural Banks across India. PO Prelims November 21–22, 2026. Office Assistant Prelims December 6, 12–13, 2026.",
    reading_time: "8 min read",
    last_date: "2026-09-15",
    qualification: "Bachelor's Degree from any recognized university with local language proficiency",
    employment_type: "FULL_TIME",
    content: `## What is IBPS RRB?

IBPS RRB is about banking jobs in Regional Rural Banks — the government-backed rural banking network that spans every state in India. If you want a banking career closer to home, with a preference for your state and your language, RRB is where you should be looking.

Unlike IBPS PO or Clerk (which places you in large public sector banks like PNB or Canara), IBPS RRB posts you in a Regional Rural Bank specific to a state. Every state has one or more RRBs sponsored by a public sector bank. Examples: Prathama UP Gramin Bank (UP), Baroda UP Bank (UP), Karnataka Gramin Bank (Karnataka), Andhra Pragathi Grameena Bank (Andhra Pradesh).

This local nature is both an advantage and a requirement. You must know the local language of the state you're applying for — and you'll likely be posted within that state for your entire career. For candidates who want to stay close to home, this is a significant benefit.

---

## Posts Available

| Post | Scale | Role |
|---|---|---|
| Officer Scale-I | Junior Management Grade | Branch-level banking operations, lending, customer service |
| Officer Scale-II (General Banking) | Middle Management Grade | Experienced banking roles, team management |
| Officer Scale-II (Specialist: IT, CA, Law, Ag. Officer, etc.) | Middle Management Grade | Specialist positions requiring domain expertise |
| Officer Scale-III | Senior Management Grade | Senior management at RRB |
| Office Assistant (Multipurpose) | Clerical Cadre | Counter service, transactions, customer service |

Officer Scale-II and Scale-III recruitment has a single exam (no Prelims), while Scale-I and Office Assistant both have a Prelims + Mains format.

---

## Vacancies 2026

| Post | Vacancies |
|---|---|
| Officer Scale-I | ~2,100 |
| Officer Scale-II (GBO) | ~700 |
| Officer Scale-II (Specialist) | ~200 |
| Officer Scale-III | ~128 |
| Office Assistant | ~1,000 |
| **Total** | **~4,128** |

*Exact state-wise, RRB-wise vacancy breakup will be published in the official notification.*

---

## Eligibility

### Age (as on June 1, 2026)
| Post | Age Limit |
|---|---|
| Office Assistant | 18–28 years |
| Officer Scale-I | 18–30 years |
| Officer Scale-II | 21–32 years |
| Officer Scale-III | 21–40 years |

Age relaxation: OBC 3 yrs, SC/ST 5 yrs, PwBD 10 yrs (Gen), 13 yrs (OBC), 15 yrs (SC/ST)

### Educational Qualification
- **Office Assistant & Officer Scale-I:** Bachelor's Degree in any discipline from a recognized university
- **Officer Scale-II (General Banking):** Bachelor's degree + 2 years of banking experience
- **Officer Scale-II (IT Officer):** B.Sc. (IT/Computer Science) or BCA or equivalent + 1 year experience
- **Officer Scale-II (CA):** Chartered Accountant + 1 year experience
- **Officer Scale-II (Law Officer):** Bachelor's in Law (LLB) + 2 years of lawyer/law officer experience

### Local Language Requirement
This is mandatory — you must know how to read, write, and speak the local official language of the state whose RRB you apply for. Without this, you'll be disqualified at the time of document verification.

---

## Salary and Benefits

| Post | Basic Pay | Approx In-Hand |
|---|---|---|
| Office Assistant | ₹15,000–₹19,000 | ₹24,000–₹30,000/month |
| Officer Scale-I | ₹36,000–₹63,840 | ₹52,000–₹68,000/month |
| Officer Scale-II | ₹48,170–₹69,810 | ₹70,000–₹90,000/month |
| Officer Scale-III | ₹63,840–₹78,230 | ₹90,000–₹1,10,000/month |

Benefits include DA, HRA, medical coverage, staff loans at subsidized rates, LFC, and NPS pension.

---

## Exam Pattern

### Officer Scale-I Prelims — November 21–22, 2026

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 40 | 50 | 45 min |
| Quantitative Aptitude | 40 | 50 | 45 min |
| **Total** | **80** | **100** | **90 min** |

### Officer Scale-I Mains — December 20, 2026

| Section | Questions | Marks |
|---|---|---|
| Reasoning | 40 | 50 |
| Computer Knowledge | 40 | 20 |
| General Awareness | 40 | 40 |
| English / Hindi Language | 40 | 40 |
| Quantitative Aptitude & DI | 40 | 50 |
| **Total** | **200** | **200** |

### Office Assistant Prelims — December 6, 12–13, 2026

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 40 | 50 | 45 min |
| Numerical Ability | 40 | 50 | 45 min |
| **Total** | **80** | **100** | **90 min** |

### Office Assistant Mains — January 30, 2027

| Section | Questions | Marks |
|---|---|---|
| Reasoning | 40 | 50 |
| Computer Knowledge | 40 | 20 |
| General Awareness | 40 | 40 |
| Hindi / English Language | 40 | 40 |
| Quantitative Aptitude & DI | 40 | 50 |
| **Total** | **200** | **200** |

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Expected | August 2026 |
| Apply Online | August–September 2026 |
| Officer Scale-I Prelims | November 21–22, 2026 |
| Officer Scale-I Mains | December 20, 2026 |
| Officer Scale-II & III Exam | December 20, 2026 |
| Office Assistant Prelims | December 6, 12–13, 2026 |
| Office Assistant Mains | January 30, 2027 |

---

## Official Links

| Resource | Link |
|---|---|
| IBPS Website | [ibps.in](https://www.ibps.in/) |
| CRP RRB Notifications | [ibps.in/crp-updates](https://www.ibps.in/) |
`
  },

  // ─── 5. JKSSB 2026 ──────────────────────────────────────────────────────────
  {
    slug: "jkssb-recruitment-2026",
    title: "JKSSB Recruitment 2026 — 130 Posts Across Multiple Departments",
    organization: "Jammu & Kashmir Services Selection Board (JKSSB)",
    post_name: "Boiler Mechanic, Senior Horticulture Technician, Laboratory Assistant, Computer Assistant, Library Assistant, Electrician",
    vacancies: 130,
    eligibility: {
      age: "18–40 years. Domicile of Jammu & Kashmir required.",
      education: "10th, 12th, Diploma, or Bachelor's Degree depending on the post. Computer Assistants require B.Sc. (IT) or BCA or equivalent. Library Assistants require B.Lib. Electricians require ITI (Electrical). Senior Horticulture Technicians require B.Sc. (Horticulture/Agriculture)."
    },
    salary: "Level 2–6 as per J&K Government Pay Scale. In-hand ₹22,000–₹42,000/month depending on the post and grade.",
    application_fee: {
      general: "₹350",
      obc: "₹350",
      sc_st: "₹100",
      women: "₹100",
      ph: "₹100",
      ews: "₹350"
    },
    important_dates: {
      startDate: "2026-06-22",
      lastDate: "2026-07-21",
      examDate: "2026-09-01"
    },
    how_to_apply: `1. Visit jkssb.nic.in
2. Click on "Recruitment Notifications" → JKSSB Recruitment 2026 (June notification)
3. Register with Aadhaar-linked mobile number (mandatory for J&K domicile verification)
4. Fill in the application form — select the post and department carefully
5. Upload scanned documents: photo, signature, domicile certificate, educational certificates
6. Pay the application fee online
7. Submit and save confirmation number
8. Application window: June 22, 2026 to July 21, 2026`,
    selection_process: `Selection for JKSSB 2026 posts is based on:

**Stage 1 — Written / OMR Based Examination**
Objective type MCQ exam covering:
- General Awareness / GK
- Reasoning Ability
- Quantitative Aptitude
- Subject-specific / Technical Knowledge (for technical posts)

Exact paper pattern and subject weightage varies by post category. Refer to the official notification on jkssb.nic.in for post-specific paper pattern.

**Stage 2 — Document Verification (DV)**
Original certificates verified:
- Domicile Certificate of J&K (mandatory)
- Educational Qualification Certificates
- Category Certificate (if applicable)
- Age Proof

**Stage 3 — Medical Examination**
Standard fitness test as per J&K Govt norms.

Final selection based on Written Exam merit + verification outcome.`,
    official_link: "https://jkssb.nic.in/",
    notification_link: "https://jkssb.nic.in/",
    apply_link: "https://jkssb.nic.in/",
    category: "state-psc",
    state: "jammu-kashmir",
    is_active: true,
    description: "JKSSB Recruitment 2026 notification out for 130 posts including Boiler Mechanic, Senior Horticulture Technician, Laboratory Assistant, Computer Assistant, Library Assistant, and Electrician across multiple J&K government departments. Apply online June 22 to July 21, 2026 at jkssb.nic.in.",
    reading_time: "6 min read",
    last_date: "2026-07-21",
    qualification: "Varies by post — ITI/Diploma/Graduation in relevant discipline. J&K Domicile mandatory.",
    employment_type: "FULL_TIME",
    content: `## About JKSSB Recruitment 2026

The Jammu & Kashmir Services Selection Board has released a fresh recruitment notification for 130 posts spread across six departments of the J&K government. Applications are open from June 22 to July 21, 2026.

This recruitment covers technical and support staff posts in Agriculture Production, ARI & Training, Industries & Commerce, Higher Education, Home, and Law & Justice departments.

If you're a J&K domicile holder looking for a state government job, this is a live opportunity with a July 21 deadline.

---

## Posts and Departments

| Post | Department | Vacancies |
|---|---|---|
| Senior Horticulture Technician | Agriculture Production Department | 17 |
| Multiple technical posts | ARI & Training Department | 42 |
| Computer Assistant / other posts | Industries & Commerce Department | 34 |
| Laboratory Assistant / Library Assistant | Higher Education Department | 15 |
| Electrician / Boiler Mechanic | Home Department | 21 |
| Various posts | Law, Justice & Parliamentary Affairs | 1 |
| **Total** | | **130** |

*Exact post-wise and category-wise vacancy split is available in the official notification on jkssb.nic.in.*

---

## Eligibility

### Domicile
J&K domicile is mandatory for all posts. Candidates must possess a valid Domicile Certificate issued by the competent authority in J&K.

### Age (as on January 1, 2026)
- **General:** 18–40 years
- **SC / ST / OBC / EWS:** As per J&K government relaxation norms
- **Ex-Servicemen:** As per applicable rules

### Educational Qualifications by Post

| Post | Required Qualification |
|---|---|
| Senior Horticulture Technician | B.Sc. in Horticulture / Agriculture from a recognized university |
| Computer Assistant | B.Sc. (IT) / BCA / B.Sc. (Computer Science) or equivalent |
| Library Assistant | B.Lib.I.Sc. (Bachelor of Library & Information Science) |
| Laboratory Assistant | B.Sc. in relevant subject (Physics, Chemistry, Biology) |
| Electrician | ITI (Electrical Trade) from a recognized institute |
| Boiler Mechanic | ITI (Mechanical / Boiler Operation) from a recognized institute |

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹350 |
| SC / ST | ₹100 |
| Female (J&K domicile) | ₹100 |
| PwBD | ₹100 |

---

## Selection Process

**Step 1 — Written/OMR Exam**
Objective MCQ-based exam. Pattern and syllabus specific to each post. General posts focus on GK, reasoning, and quantitative aptitude. Technical posts include subject-specific/trade knowledge questions.

**Step 2 — Document Verification**
Shortlisted candidates verify original documents:
- J&K Domicile Certificate
- Educational Qualification Certificates
- Category Certificate (SC/ST/OBC if applicable)
- Date of Birth proof

**Step 3 — Medical Examination**
Standard physical fitness check as per J&K Government norms.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | June 2026 |
| Application Opens | June 22, 2026 |
| **Last Date to Apply** | **July 21, 2026** |
| Exam Date | To be announced (expected September 2026) |

---

## How to Apply

1. Visit **[jkssb.nic.in](https://jkssb.nic.in/)**
2. Go to Recruitment Notifications → select the current June 2026 notification
3. Register using your Aadhaar-linked mobile number
4. Fill in post preference, educational details, and category
5. Upload photo, signature, and domicile certificate scan
6. Pay application fee online
7. Submit and save your application confirmation number

---

## Official Links

| Resource | Link |
|---|---|
| JKSSB Official Website | [jkssb.nic.in](https://jkssb.nic.in/) |
| What's New / Notifications | [jkssb.nic.in/Whatsnew.html](https://jkssb.nic.in/) |
`
  },

  // ─── 6. MPPSC State Service Exam 2026 ────────────────────────────────────────
  {
    slug: "mppsc-state-service-exam-2026",
    title: "MPPSC State Service Exam 2026 — 155 Posts, Mains in September",
    organization: "Madhya Pradesh Public Service Commission (MPPSC)",
    post_name: "Deputy Collector, Deputy Superintendent of Police (DSP), Commercial Tax Officer, District Registrar, Block Development Officer, Naib Tehsildar, and other Group A & B posts",
    vacancies: 155,
    eligibility: {
      age: "21–40 years. OBC: +3 yrs, SC/ST: +5 yrs, PwBD: +10 yrs. No upper age limit for female candidates of MP domicile.",
      education: "Bachelor's Degree from any recognized university. Domicile of Madhya Pradesh required for reserved category benefits."
    },
    salary: "Group A Posts: Pay Level 12 — ₹56,100–₹1,77,500/month basic. Group B Posts: Pay Level 8–10 — ₹47,600–₹1,51,100 basic. Total in-hand ₹75,000–₹1,20,000/month after DA, HRA, TA and allowances.",
    application_fee: {
      general: "₹500",
      obc: "₹250",
      sc_st: "₹250",
      women: "₹250",
      ph: "₹0",
      ews: "₹500"
    },
    important_dates: {
      startDate: "2026-01-10",
      lastDate: "2026-04-03",
      examDate: "2026-09-07"
    },
    how_to_apply: `Application window is closed. Prelims exam was held on April 26, 2026.

Mains exam is scheduled for September 7–12, 2026 at Bhopal and other centers.

For candidates who appeared in Prelims and cleared the cutoff — Mains admit cards will be released on mppsc.mp.gov.in. Download and preserve the admit card.

For future MPPSC SSE notifications:
1. Visit mppsc.mp.gov.in
2. Go to Current Notifications → State Service Examination
3. Apply online through the official portal with MP domicile documents`,
    selection_process: `MPPSC SSE 2026 follows a three-stage process:

**Stage 1 — Prelims (Completed — April 26, 2026)**

New exam pattern introduced in 2026:

| Paper | Subject | Marks |
|---|---|---|
| Paper 1 | General Studies | 200 marks (3 marks per question) |
| Paper 2 | General Aptitude Test | 200 marks (qualifying, 33% cutoff) |

**Important 2026 change:** Each question carries 3 marks (not 2 as in previous years), and wrong answers deduct 1 mark. This increased the importance of accuracy over speed.

**Stage 2 — Mains (September 7–12, 2026)**

| Paper | Subject | Marks |
|---|---|---|
| Paper 1 | General Studies I | 300 |
| Paper 2 | General Studies II | 300 |
| Paper 3 | General Studies III | 300 |
| Paper 4 | General Studies IV (Ethics) | 200 |
| Paper 5 | Hindi (Essay, Precis, Grammar) | 200 |
| Paper 6 | Hindi Essay | 100 |
| **Total** | | **1400** |

All papers are descriptive (written answers in Hindi medium). No optional subject unlike UPSC.

**Stage 3 — Interview / Personality Test**
175 marks. Held at MPPSC office, Bhopal. Final merit = Mains (1400) + Interview (175) = 1575 marks.`,
    official_link: "https://mppsc.mp.gov.in/",
    notification_link: "https://mppsc.mp.gov.in/",
    apply_link: "https://mppsc.mp.gov.in/",
    category: "state-psc",
    state: "madhya-pradesh",
    is_active: true,
    description: "MPPSC State Service Exam 2026 for 155 Group A and B vacancies including Deputy Collector, DSP, BDO and Naib Tehsildar. Prelims held April 26, 2026. Mains exam scheduled September 7–12, 2026. Application closed.",
    reading_time: "8 min read",
    last_date: "2026-04-03",
    qualification: "Bachelor's Degree from any recognized university. MP domicile preferred.",
    employment_type: "FULL_TIME",
    content: `## What is MPPSC State Service Exam?

MPPSC SSE is Madhya Pradesh's equivalent of the UPSC Civil Services exam. It recruits Group A and Group B officers for the state administration — posts like Deputy Collector, DSP, Commercial Tax Officer, Block Development Officer, and Naib Tehsildar.

For 2026, MPPSC announced 155 vacancies. The Prelims were held on April 26, 2026, and Mains is coming up in September 7–12, 2026. If you're a candidate who cleared Prelims, the Mains window is approaching fast.

---

## Posts Available

| Post | Category |
|---|---|
| Deputy Collector | Group A |
| Deputy Superintendent of Police (DSP) | Group A |
| Commercial Tax Officer | Group A |
| District Registrar | Group A |
| Block Development Officer (BDO) | Group B |
| Naib Tehsildar | Group B |
| District Supply Officer | Group B |
| Area Organiser (Women & Child Development) | Group B |
| Child Development Project Officer | Group B |

Total vacancies in 2026: **155** across Group A and B posts combined.

---

## Eligibility

### Age (as on January 1, 2026)
- **General / EWS:** 21–40 years
- **OBC (MP domicile):** 21–43 years
- **SC / ST (MP domicile):** 21–45 years
- **Female candidates (MP domicile):** No upper age limit
- **PwBD:** 21–55 years

### Qualification
Bachelor's Degree in any discipline from a recognized university.

---

## Application Fee

| Category | Fee |
|---|---|
| General / EWS (MP domicile) | ₹500 |
| OBC / SC / ST (MP domicile) | ₹250 |
| Female (MP domicile) | ₹250 |
| PwBD (MP domicile) | Nil |

---

## Exam Pattern 2026

### Prelims (April 26, 2026 — Completed)

**New 2026 pattern:**
- Each correct answer: **+3 marks**
- Each wrong answer: **−1 mark**
- Unattempted: 0 marks

| Paper | Subject | Total Marks |
|---|---|---|
| Paper 1 | General Studies | 200 marks (67 questions × 3 marks) |
| Paper 2 | General Aptitude Test | 200 marks (qualifying only, 33% cutoff) |

### Mains (September 7–12, 2026)

All papers are written (descriptive) in Hindi:

| Paper | Subject | Marks | Duration |
|---|---|---|---|
| GS Paper 1 | History, Geography, Polity | 300 | 3 hours |
| GS Paper 2 | Science, Technology, Economy, Environment | 300 | 3 hours |
| GS Paper 3 | Current Affairs, Social Issues, Governance | 300 | 3 hours |
| GS Paper 4 | Ethics, Integrity & Aptitude | 200 | 3 hours |
| Hindi Paper 1 | Essay, Precis, Grammar | 200 | 3 hours |
| Hindi Paper 2 | Hindi Essay | 100 | 2 hours |
| **Total** | | **1400** | |

Unlike UPSC, there's no optional subject in MPPSC. This levels the field — everyone writes the same papers.

### Interview (Personality Test)
175 marks, held at MPPSC Bhopal. Covers administrative aptitude, current awareness, and MP-specific knowledge.

**Final merit = Mains (1400) + Interview (175) = 1575 marks**

---

## Salary

| Post | Pay Level | In-Hand Estimate |
|---|---|---|
| Deputy Collector | Level 12 | ₹90,000–₹1,20,000/month |
| DSP | Level 12 | ₹90,000–₹1,20,000/month |
| BDO / Naib Tehsildar | Level 8–10 | ₹70,000–₹90,000/month |

Group A officers get government accommodation, official vehicle, medical facilities under MPGHS, and LTC.

---

## MPPSC vs UPSC — Key Differences

| Aspect | MPPSC SSE | UPSC CSE |
|---|---|---|
| Level | State (MP) | National |
| Medium | Hindi only | Hindi or English |
| Optional Subject | No | Yes (2 papers) |
| Vacancies | 155 | ~1,000 |
| Competition | Moderate (lakh-level) | Very high (crore-level) |
| Posting | MP-based | All India |

---

## Mains Preparation Focus

With Mains on September 7–12, here's what matters most:

**GS Paper 4 (Ethics):** Most candidates under-prepare this. Use UPSC Ethics past papers as practice — MPPSC Ethics pattern is similar. Focus on case studies, integrity in administration, and MP-specific governance examples.

**Hindi Papers:** Don't neglect these. Many candidates from English-medium backgrounds score poorly here. For Hindi Essay, practice 4-5 essays per week on current social and governance topics.

**MP-specific current affairs:** Both GS Papers 1 and 3 include MP-focused questions. Read MP government's annual report, state budget highlights, and schemes like Ladli Behna Yojana, Mukhyamantri Teerth Darshan Yojana.

---

## Official Links

| Resource | Link |
|---|---|
| MPPSC Official Website | [mppsc.mp.gov.in](https://mppsc.mp.gov.in/) |
| Advertisements | [mppsc.mp.gov.in/Advertisement](https://mppsc.mp.gov.in/) |
`
  },

  // ─── 7. MPPSC Assistant Professor 2026 ──────────────────────────────────────
  {
    slug: "mppsc-assistant-professor-2026",
    title: "MPPSC Assistant Professor 2026 — 949 Posts in MP Government Colleges",
    organization: "Madhya Pradesh Public Service Commission (MPPSC)",
    post_name: "Assistant Professor in various subjects across Madhya Pradesh Government Colleges and Universities",
    vacancies: 949,
    eligibility: {
      age: "21–40 years. No upper age limit for female candidates of MP domicile. SC/ST: +5 yrs, OBC: +3 yrs.",
      education: "Master's Degree in the relevant subject with minimum 55% marks (50% for SC/ST/PwBD). UGC-NET / CSIR-NET / ICAR-NET qualified OR SET/SLET qualified OR PhD holder (PhD holders are exempted from NET/SET requirement as per UGC regulations)."
    },
    salary: "Pay Level 10 — ₹57,700–₹1,82,400/month basic. In-hand approximately ₹80,000–₹1,00,000/month after DA, HRA, and allowances.",
    application_fee: {
      general: "₹600",
      obc: "₹400",
      sc_st: "₹0",
      women: "₹0",
      ph: "₹0",
      ews: "₹600"
    },
    important_dates: {
      startDate: "2026-02-27",
      lastDate: "2026-05-16",
      examDate: "2026-07-12"
    },
    how_to_apply: `Application is now closed. Exams are underway:
- Group A Exam: July 12, 2026
- Group B Exam: August 2, 2026
- Group C Exam: August 30, 2026

Candidates who applied can download their admit cards from mppsc.mp.gov.in before each exam date.

For future MPPSC Assistant Professor cycles, the process is:
1. Visit mppsc.mp.gov.in → Current Notifications
2. Apply online with master's degree and NET/PhD qualification proof
3. Select subject group (A, B, or C) based on your subject
4. Upload all required documents and pay fee
5. Appear for OMR-based exam`,
    selection_process: `**Stage 1 — OMR-Based Examination (Subject-wise)**

Group-wise exam schedule:
- **Group A:** July 12, 2026 — Subjects: Hindi, English, Sanskrit, Geography, History, Psychology, Law, Geology, Yogic Science
- **Group B:** August 2, 2026 — Subjects: Commerce, Political Science, Economics, Sociology
- **Group C:** August 30, 2026 — Subjects: Physics, Chemistry

Exam pattern:
- 150 questions (100 marks from subject knowledge + 50 marks from Teaching Aptitude / Research Methodology / GK)
- OMR sheet (bubble sheet) based — pen and paper
- Duration: 3 hours
- No negative marking

**Stage 2 — Interview**
Candidates shortlisted based on written exam marks appear for interview at MPPSC, Bhopal.

**Stage 3 — Document Verification**

Final merit = Written Exam (weighted) + Interview marks.`,
    official_link: "https://mppsc.mp.gov.in/",
    notification_link: "https://mppsc.mp.gov.in/",
    apply_link: "https://mppsc.mp.gov.in/",
    category: "teaching",
    state: "madhya-pradesh",
    is_active: true,
    description: "MPPSC Assistant Professor 2026 recruitment for 949 posts in Madhya Pradesh Government Colleges. OMR-based exams scheduled July 12, August 2, and August 30, 2026 across subject groups. Master's Degree with NET/PhD required. Application closed.",
    reading_time: "7 min read",
    last_date: "2026-05-16",
    qualification: "Master's Degree in relevant subject with 55% marks + UGC-NET / CSIR-NET / SET / PhD",
    employment_type: "FULL_TIME",
    content: `## About MPPSC Assistant Professor Recruitment 2026

MPPSC has opened 949 Assistant Professor posts across Madhya Pradesh government colleges and universities. This is one of the largest teaching recruitment drives in MP in recent years.

If you have a Master's degree with NET/PhD qualification and want a permanent teaching position in a government college — this is the opportunity. Government college faculty positions come with 7th Pay Commission salary, job security, research opportunities, and sabbatical provisions that private college jobs rarely offer.

---

## Subject-Wise Vacancy Groups

### Group A — Exam on July 12, 2026
Subjects: Hindi, English, Sanskrit, Geography, History, Psychology, Law, Geology, Yogic Science

### Group B — Exam on August 2, 2026
Subjects: Commerce, Political Science, Economics, Sociology

### Group C — Exam on August 30, 2026
Subjects: Physics, Chemistry

Total vacancies across all groups: **949**

*Post-wise and category-wise vacancy counts are available in the official advertisement on mppsc.mp.gov.in.*

---

## Eligibility

### Age
- **General / EWS:** 21–40 years
- **OBC (MP domicile):** 21–43 years
- **SC / ST (MP domicile):** 21–45 years
- **Female candidates (MP domicile):** No upper age limit

### Academic Qualification
1. **Master's Degree** in the relevant subject with minimum **55% marks** (or equivalent grade)
   - SC/ST/PwBD candidates: minimum **50% marks**

2. **Plus one of the following:**
   - UGC-NET (National Eligibility Test) qualified
   - CSIR-NET qualified (for science subjects)
   - ICAR-NET qualified (for agriculture-related subjects)
   - SET / SLET (State Eligibility Test) — any state
   - **PhD holders are exempted from NET/SET** as per UGC Regulation 2018

If you have a PhD but not NET/SET, you are still eligible — your PhD is sufficient.

---

## Application Fee

| Category | Fee |
|---|---|
| General / EWS | ₹600 |
| OBC (MP domicile) | ₹400 |
| SC / ST (MP domicile) | Nil |
| Female (MP domicile) | Nil |
| PwBD (MP domicile) | Nil |

---

## Exam Pattern

OMR-based exam (pen and paper, bubble sheet):

| Section | Questions | Marks |
|---|---|---|
| Subject Knowledge (relevant subject) | 100 | 100 |
| Teaching Aptitude, Research Methodology, GK | 50 | 50 |
| **Total** | **150** | **150** |

- Duration: 3 hours
- **No negative marking**
- Medium: Hindi and English (bilingual paper)

The subject knowledge section is the most critical part — 100 questions directly from your postgraduate-level subject. Previous MPPSC Assistant Professor papers from 2019-2023 give a clear idea of the difficulty and coverage pattern for each subject.

---

## Salary and Pay

| Level | Basic Pay | Approximate In-Hand |
|---|---|---|
| Pay Level 10 | ₹57,700/month | ₹85,000–₹1,00,000/month |

Additional benefits:
- DA (revised quarterly)
- HRA based on city tier
- Academic allowance
- Medical coverage under MPGHS
- NPS pension
- Leave encashment
- Research promotion allowance for NET/PhD holders
- Sabbatical leave for further study or research

---

## Exam Schedule

| Group | Subjects Covered | Exam Date |
|---|---|---|
| Group A | Hindi, English, Sanskrit, Geography, History, Psychology, Law, Geology, Yogic Science | July 12, 2026 |
| Group B | Commerce, Political Science, Economics, Sociology | August 2, 2026 |
| Group C | Physics, Chemistry | August 30, 2026 |

---

## Preparation Strategy

The exam has 150 questions — 100 on your subject and 50 on teaching aptitude/research/GK. The subject section requires postgraduate-level depth, not just textbook basics.

For Group A subjects like Geography and History, previous years' MPPSC question papers are the best preparation guide — the pattern is highly repetitive. For Commerce and Economics (Group B), focus on both microeconomics fundamentals and applied economics (Indian economy, MP economy). For Physics and Chemistry (Group C), the questions go up to MSc level — use your university course material and CSIR-NET previous papers.

The Teaching Aptitude section covers teaching methods, educational psychology, learning theories, and classroom management basics — most of these can be covered in 2–3 weeks of focused preparation.

Since there's no negative marking, attempt all 150 questions. Never leave a question blank.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | February 27, 2026 |
| Application Last Date | May 16, 2026 (extended for Group C) |
| Group A Exam | July 12, 2026 |
| Group B Exam | August 2, 2026 |
| Group C Exam | August 30, 2026 |
| Interview | After exam results |

---

## Official Links

| Resource | Link |
|---|---|
| MPPSC Official Website | [mppsc.mp.gov.in](https://mppsc.mp.gov.in/) |
| Advertisement Section | [mppsc.mp.gov.in/Advertisement](https://mppsc.mp.gov.in/) |
`
  }

];

// Insert all jobs
console.log(`\nInserting ${jobs.length} jobs...\n`);

let success = 0;
let failed = 0;

for (const job of jobs) {
  const { data, error } = await supabase
    .from("jobs")
    .insert([job])
    .select("id, slug, title")
    .single();

  if (error) {
    console.error(`❌ FAILED: ${job.slug}`);
    console.error(`   Error: ${error.message}`);
    failed++;
  } else {
    console.log(`✅ ${data.title}`);
    console.log(`   URL: /sarkari-naukri/${data.slug}`);
    success++;
  }
}

console.log(`\n─────────────────────────────────`);
console.log(`✅ Inserted: ${success} jobs`);
if (failed > 0) console.log(`❌ Failed:   ${failed} jobs`);
console.log(`📊 Total active jobs on site: 11 + ${success} = ${11 + success}`);
