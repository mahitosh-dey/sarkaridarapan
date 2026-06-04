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

  // ─── 1. CDS II 2026 ──────────────────────────────────────────────────────────
  {
    slug: "upsc-cds-ii-2026",
    title: "UPSC CDS II 2026 — Combined Defence Services Exam",
    organization: "Union Public Service Commission (UPSC)",
    post_name: "Lieutenant (IMA), Flying Officer (AFA), Sub-Lieutenant (INA), Officer (OTA — Men & Women)",
    vacancies: 459,
    eligibility: {
      age: "IMA/INA/AFA: 19–24 years (born between 02 Jan 2003 and 01 Jan 2008). OTA: 19–25 years (born between 02 Jan 2002 and 01 Jan 2008). Age as on date of commencement of course.",
      education: "IMA/OTA (Men): Degree from a recognised university. INA: Degree in Engineering. AFA: Degree with Physics and Maths at 10+2, or Degree in Engineering. OTA (Women): Degree from a recognised university."
    },
    salary: "Lieutenant: Pay Level 10 — ₹56,100/month + MSP ₹15,500/month + DA + Military Allowances. Total in-hand package approximately ₹80,000–₹1,00,000/month for a new officer depending on posting. Free accommodation, ration, medical, and transport provided.",
    application_fee: { general: "Nil", obc: "Nil", ews: "Nil", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-05-28",
      lastDate: "2026-06-17",
      examDate: "2026-09-13"
    },
    how_to_apply: `1. Visit the UPSC online portal: https://upsconline.gov.in/
2. Click "Online Application for Various Examinations of UPSC"
3. Select "CDS (II) Examination, 2026"
4. Register with a valid email and mobile number
5. Fill Part I: Personal details, educational qualification, choice of academy
6. Fill Part II: Upload photo, signature, and supporting documents
7. Submit — there is NO application fee for CDS
8. Note down your Registration Number and keep the printout safe
9. Admit Card will be available on upsc.gov.in approximately 3 weeks before the exam`,
    selection_process: `**Stage 1 — Written Examination**

| Subject | IMA / INA / AFA | OTA |
|---|---|---|
| English | 100 marks | 100 marks |
| General Knowledge | 100 marks | 100 marks |
| Elementary Mathematics | 100 marks | Not applicable |
| **Total** | **300 marks** | **200 marks** |

- Duration: 2 hours per paper
- Negative Marking: 1/3 marks deducted per wrong answer

**Stage 2 — SSB Interview (Intelligence & Personality Test)**
- Candidates shortlisted from written exam appear before a Services Selection Board (SSB)
- 5-day process: Officer Intelligence Rating (OIR), Picture Perception & Discussion Test (PPDT), Psychological Tests, Group Tests, and Personal Interview
- Total marks: 300 (IMA/INA/AFA) or 200 (OTA)
- SSB is conducted by Ministry of Defence

**Stage 3 — Medical Examination**
- Final medical at designated Armed Forces hospitals
- Vision, physical fitness, and general health standards as per service requirements`,
    official_link: "https://upsc.gov.in/",
    notification_link: "https://upsc.gov.in/",
    apply_link: "https://upsconline.gov.in/",
    category: "defence",
    state: "all-india",
    is_active: true,
    description: "UPSC CDS II 2026 notification released for 459 vacancies across IMA Dehradun, Indian Naval Academy, Air Force Academy, and Officers Training Academy. No application fee. Apply online before June 17, 2026. Written exam on September 13, 2026.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-06-17",
    qualification: "Bachelor's Degree from a recognised university (Engineering degree required for INA; Physics & Maths at 10+2 or Engineering degree required for AFA)",
    employment_type: "FULL_TIME",
    content: `## What is CDS?

The Combined Defence Services (CDS) examination is conducted by UPSC twice a year to recruit officers into the Indian Army, Indian Navy, and Indian Air Force. It is one of the most prestigious paths into the armed forces for graduates — and the only one that leads to a permanent commission directly through a written exam.

CDS II 2026 is the second cycle for this year. Written exam is scheduled for September 13, 2026.

---

## Academies and Vacancies

| Academy | Vacancies |
|---|---|
| Indian Military Academy (IMA), Dehradun | ~100 |
| Indian Naval Academy (INA), Ezhimala | ~45 |
| Air Force Academy (AFA), Hyderabad | ~32 |
| Officers Training Academy (OTA), Chennai — Men | ~225 |
| Officers Training Academy (OTA), Chennai — Women (SSC) | ~17 |
| **Total** | **~459** |

*Exact vacancy breakdowns published in the official notification at upsc.gov.in.*

---

## Eligibility

### Age Limit (as on course commencement date)
- IMA, INA, AFA: **19–24 years** (born between 02 Jan 2003 and 01 Jan 2008)
- OTA (Men & Women): **19–25 years** (born between 02 Jan 2002 and 01 Jan 2008)

Only unmarried male candidates for IMA, INA, AFA. Both married and unmarried candidates eligible for OTA. Women eligible only for OTA (Short Service Commission).

### Educational Qualification
| Academy | Required Degree |
|---|---|
| IMA | Degree from a recognised university |
| INA | Degree in Engineering |
| AFA | Degree with Physics & Maths in 10+2, OR Degree in Engineering |
| OTA (Men & Women) | Degree from a recognised university |

Final year degree students may also apply — must produce proof of passing before SSB.

---

## Exam Pattern

### Written Examination

| Paper | IMA / INA / AFA | OTA |
|---|---|---|
| English | 100 marks, 2 hours | 100 marks, 2 hours |
| General Knowledge | 100 marks, 2 hours | 100 marks, 2 hours |
| Elementary Mathematics | 100 marks, 2 hours | Not required |

- Negative marking: 1/3 mark deducted per wrong answer
- Questions are objective (MCQ) type

### SSB Interview
- 300 marks for IMA/INA/AFA, 200 marks for OTA
- 5-day process at SSB centres across India
- Tests: Officer Intelligence Rating, Psychological testing, Group tasks, Personal interview

---

## Salary and Benefits

A freshly commissioned officer's package is one of the best in Indian government service:

| Component | Amount |
|---|---|
| Basic Pay (Level 10) | ₹56,100/month |
| Military Service Pay (MSP) | ₹15,500/month |
| Dearness Allowance | ~₹32,000/month (revised quarterly) |
| HRA / Accommodation | Free government accommodation in lieu of HRA |
| Transport Allowance | ₹3,600–₹7,200/month |
| **Effective Monthly Package** | **~₹1,05,000–₹1,20,000+/month** |

Additional benefits: Free medical for self and family (ECHS after retirement), ration allowance, uniform allowance, leave travel concession (LTC), Army Group Insurance, subsidised loans, and pension (50% of last pay after 20 years service).

---

## Selection Process

**Stage 1: Written Exam** → Shortlist for SSB
**Stage 2: SSB Interview** (5 days, at SSB Centre)
**Stage 3: Medical Examination** (at designated Armed Forces hospitals)
**Stage 4: Merit list** — Final allocation based on written + SSB marks

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Release | May 28, 2026 |
| Online Application Start | May 28, 2026 |
| **Last Date to Apply** | **June 17, 2026** |
| Written Examination | September 13, 2026 |
| SSB Interviews | November 2026 onwards |
| Course Commencement (IMA) | January 2027 |

---

## How to Apply

1. Go to **upsconline.gov.in**
2. Click "Online Application for Various Examinations of UPSC" → "CDS (II) 2026"
3. Register with email and mobile number (one-time)
4. Fill personal details, academy preferences, and educational qualification
5. Upload photo and signature as per specifications
6. **No application fee** — submit directly
7. Note your Registration ID and print the application

---

## Preparation Strategy

**English (100 marks):** Spotting errors, sentence improvement, ordering of sentences, comprehension passages. Practice SSC/CDS previous year English papers — the pattern is very consistent.

**General Knowledge (100 marks):** Split between static GK (History, Geography, Polity, Science) and current affairs (last 6 months). CDS GK leans heavily toward defence and national security news. Read The Hindu or Indian Express daily.

**Elementary Mathematics (for IMA/INA/AFA only):** Up to 10th standard mathematics — Algebra, Geometry, Trigonometry, Mensuration, Statistics. Very manageable if practiced regularly. Previous year papers are your best resource.

**SSB Preparation:** Start after clearing written. Practice OIR tests (verbal and non-verbal reasoning at speed). Read books on SSB like "SSB Interview" by Major General VK Singh.

---

## Official Links

| Resource | Link |
|---|---|
| UPSC Official Website | [upsc.gov.in](https://upsc.gov.in/) |
| Apply Online | [upsconline.gov.in](https://upsconline.gov.in/) |
| Official Notification | [upsc.gov.in](https://upsc.gov.in/) |
`
  },

  // ─── 2. LIC AAO 2026 ─────────────────────────────────────────────────────────
  {
    slug: "lic-aao-2026",
    title: "LIC AAO 2026 — Assistant Administrative Officer Recruitment",
    organization: "Life Insurance Corporation of India (LIC)",
    post_name: "Assistant Administrative Officer (AAO) — Generalist, IT, CA, Actuarial, Rajbhasha",
    vacancies: 300,
    eligibility: {
      age: "21–30 years as on the notification date. Age relaxation: OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Govt rules.",
      education: "Generalist/Rajbhasha: Bachelor's Degree (min. 60% for General/OBC/EWS, 55% for SC/ST). IT: Bachelor's/Master's in Computer Science/IT/Electronics. CA: Chartered Accountant. Actuarial: B.Sc. (Statistics/Maths/Economics) or B.Com with at least 2 actuarial exams passed."
    },
    salary: "Pay Scale: ₹53,600–₹94,000/month basic + DA + HRA + City Compensatory Allowance + Medical. Total gross approximately ₹75,000–₹90,000/month on joining. LIC also provides staff loan, LTC, and a good pension (non-NPS).",
    application_fee: { general: "₹700", obc: "₹700", ews: "₹700", sc_st: "₹85", women: "₹700", ph: "Nil" },
    important_dates: {
      startDate: "2026-04-01",
      lastDate: "2026-04-25",
      examDate: "2026-06-14"
    },
    how_to_apply: `1. Visit LIC official careers portal: https://licindia.in/
2. Click "Careers" → "Recruitment"
3. Find and open "LIC AAO 2026" notification link
4. Register with a valid mobile number and email
5. Fill the online application form — personal details, education, specialisation preference
6. Upload scanned photo (4.5 cm × 3.5 cm) and signature (white background)
7. Pay application fee online via Net Banking / UPI / Debit / Credit card
8. SC/ST candidates pay ₹85 (only intimation charges); PwBD candidates: Nil
9. Download and print the confirmed application form for records
10. Admit Card released on licindia.in before exam date`,
    selection_process: `**Stage 1 — Online Preliminary Exam**

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning Ability | 35 | 35 | 20 min |
| Quantitative Aptitude | 35 | 35 | 20 min |
| English Language | 30 | 30 | 20 min |
| **Total** | **100** | **100** | **60 min** |

Sectional time limits apply. Negative marking: 1/4 mark per wrong answer.

**Stage 2 — Online Main Exam**

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning Ability & Numerical Aptitude | 30 | 90 | 40 min |
| General Knowledge & Current Affairs | 30 | 60 | 20 min |
| Insurance & Financial Market Awareness | 30 | 60 | 20 min |
| English Language | 30 | 60 | 30 min |
| Professional Knowledge (IT/CA/Actuarial) | 30 | 90 | 40 min |
| **Total** | **150** | **360** | **2.5 hours** |

Professional Knowledge section applies only to non-Generalist candidates.

**Stage 3 — Interview**
Final stage for shortlisted candidates from Mains. Interview carries significant weight in final merit.`,
    official_link: "https://licindia.in/",
    notification_link: "https://licindia.in/",
    apply_link: "https://licindia.in/",
    category: "banking",
    state: "all-india",
    is_active: true,
    description: "LIC AAO 2026 recruitment for approximately 300 Assistant Administrative Officer posts across Generalist, IT, CA, Actuarial, and Rajbhasha streams. Graduate candidates aged 21–30 years eligible. Three-stage selection: Prelims, Mains, and Interview. Apply at licindia.in.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-04-25",
    qualification: "Bachelor's Degree with minimum 60% marks (55% for SC/ST) from a recognised university",
    employment_type: "FULL_TIME",
    content: `## What is LIC AAO?

LIC AAO (Assistant Administrative Officer) is one of the most sought-after insurance sector jobs in India. Recruited by Life Insurance Corporation of India — the country's largest and most trusted insurer — an AAO is a Class I Officer who handles policy administration, customer service, accounts, IT systems, or actuarial work depending on the stream.

LIC AAO 2026 recruitment is for approximately 300 posts across multiple streams.

---

## Posts and Streams

| Stream | Role Description |
|---|---|
| Generalist | Policy administration, customer service, branch operations |
| IT (Information Technology) | System administration, software, network infrastructure |
| CA (Chartered Accountant) | Finance, accounts, audit, investment |
| Actuarial | Risk pricing, product development, reserving |
| Rajbhasha | Hindi implementation and official language work |

Each stream has separate merit lists and slightly different Mains exam content.

---

## Eligibility

### Age Limit
- **Minimum:** 21 years
- **Maximum:** 30 years (as on notification date)

| Category | Relaxation |
|---|---|
| OBC (Non-Creamy Layer) | +3 years (max 33) |
| SC / ST | +5 years (max 35) |
| PwBD (General) | +10 years (max 40) |
| Ex-Servicemen | As per Govt rules |

### Educational Qualification

| Stream | Minimum Qualification |
|---|---|
| Generalist | Bachelor's Degree — 60% (General/OBC/EWS), 55% (SC/ST) |
| IT | Bachelor's/Master's in CS/IT/Electronics from recognised university |
| CA | Chartered Accountant (ICAI) |
| Actuarial | B.Sc. (Stats/Maths/Eco) or B.Com — min. 55% + at least 2 actuarial exams (IAI) |
| Rajbhasha | Degree with Hindi as main subject OR Post-graduate degree in Hindi |

---

## Salary and Benefits

| Component | Amount |
|---|---|
| Basic Pay | ₹53,600/month |
| Dearness Allowance | ~₹23,000/month |
| HRA (metro) | ₹9,648/month |
| City Compensatory Allowance | ₹4,000/month |
| **Gross Monthly (metro)** | **~₹90,000–₹1,00,000/month** |

Additional benefits: Staff home loan at concessional rate, LTC, family medical insurance, defined-benefit pension (not NPS — a rare advantage for new government-sector recruits), and career growth to Development Officer, Administrative Officer (AO), and beyond.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹700 |
| SC / ST | ₹85 (intimation charges only) |
| PwBD | Nil |

---

## Selection Process

### Prelims (Online, Objective)

| Section | Questions | Marks |
|---|---|---|
| Reasoning Ability | 35 | 35 |
| Quantitative Aptitude | 35 | 35 |
| English Language | 30 | 30 |
| **Total** | **100** | **100** |

Sectional time limit: 20 minutes per section. Negative marking: 1/4 per wrong answer.

### Mains (Online, Objective)

| Section | Questions | Marks |
|---|---|---|
| Reasoning & Numerical Aptitude | 30 | 90 |
| General Knowledge & Current Affairs | 30 | 60 |
| Insurance & Financial Market Awareness | 30 | 60 |
| English Language | 30 | 60 |
| Professional Knowledge (non-Generalist) | 30 | 90 |
| **Total** | **150** | **360** |

### Interview
Shortlisted Mains candidates appear for a structured interview. Covers subject knowledge, situational judgment, and general awareness.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | April 1, 2026 |
| **Last Date to Apply** | **April 25, 2026** |
| Prelims Exam | June 14, 2026 |
| Mains Exam | July 2026 (expected) |
| Interview | August–September 2026 (expected) |

---

## Preparation Strategy

**Reasoning (Prelims/Mains):** Syllogisms, Direction sense, Blood Relations, Seating Arrangement, Puzzle-based questions. Time yourself — sectional time limits make speed critical.

**Quantitative Aptitude:** LIC AAO is moderate difficulty. Focus on Data Interpretation (bar, pie, table), Percentage, Profit/Loss, Time & Work. Practice 30-question sets under 20 minutes.

**English:** Reading Comprehension and Para Jumbles are common. Read 2 editorial paragraphs daily for 4 weeks — it makes a measurable difference.

**Insurance Awareness (Mains-specific):** This section separates serious aspirants. Study LIC products (term, endowment, ULIP), IRDAI regulations, insurance terminologies, and recent news about LIC (claim ratios, IPO history, new launches).

**Professional Knowledge (for IT/CA/Actuarial):** Prepare your domain thoroughly — this section carries 90 marks in Mains and is a differentiator.

---

## Official Links

| Resource | Link |
|---|---|
| LIC Official Website | [licindia.in](https://licindia.in/) |
| Apply Online | [licindia.in → Careers](https://licindia.in/) |
| Official Notification | [licindia.in](https://licindia.in/) |
`
  },

  // ─── 3. NABARD Grade A 2026 ──────────────────────────────────────────────────
  {
    slug: "nabard-grade-a-2026",
    title: "NABARD Grade A 2026 — Assistant Manager Recruitment",
    organization: "National Bank for Agriculture and Rural Development (NABARD)",
    post_name: "Assistant Manager (Grade A) — RDBS (Rural Development Banking Service), Rajbhasha, Protocol & Security",
    vacancies: 102,
    eligibility: {
      age: "21–30 years as on June 1, 2026 (OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs). For Protocol & Security: up to 40 years.",
      education: "RDBS (General): Bachelor's Degree with 60% (50% for SC/ST/PwBD). RDBS (Agriculture): B.Sc. (Agriculture/Allied) with 60%. Rajbhasha: Master's/Bachelor's Degree in Hindi with English. Law: Graduation in Law (LLB) with 60%. IT: B.E./B.Tech in CS/IT/ECE."
    },
    salary: "Pay Scale: ₹44,500–₹89,150/month basic + DA + HRA + Grade Pay. Total CTC approximately ₹12–14 lakhs per annum. NABARD Grade A officers also get excellent post retirement benefits and work-life balance.",
    application_fee: { general: "₹800", obc: "₹800", ews: "₹800", sc_st: "₹150", women: "₹800", ph: "₹150" },
    important_dates: {
      startDate: "2026-05-15",
      lastDate: "2026-06-05",
      examDate: "2026-07-26"
    },
    how_to_apply: `1. Visit the NABARD official website: https://nabard.org/
2. Go to "Career Opportunities" → "Current Openings"
3. Click on "NABARD Grade A 2026" application link
4. Register with a valid email and mobile number
5. Fill the application form — personal details, educational qualification, stream preference
6. Upload passport-size photo and scanned signature
7. Pay application fee via Net Banking / UPI / Debit / Credit card
8. SC/ST/PwBD candidates pay reduced fee
9. Submit and download the confirmation page
10. Admit Card will be released on nabard.org before the Phase I exam date`,
    selection_process: `**Phase I — Preliminary Exam (Online, Objective)**

| Section | Questions | Marks |
|---|---|---|
| Test of Reasoning | 20 | 20 |
| English Language | 30 | 30 |
| Computer Knowledge | 20 | 20 |
| General Awareness | 20 | 20 |
| Quantitative Aptitude | 20 | 20 |
| Economic & Social Issues (with focus on Rural India) | 40 | 40 |
| Agriculture & Rural Development | 40 | 40 |
| **Total** | **190** | **190** |

Duration: 120 minutes. Negative marking: 0.25 marks per wrong answer.

**Phase II — Main Exam (Online)**
- Paper I: Economic & Social Issues and Agriculture & Rural Development (Objective) — 100 marks
- Paper II: English (Descriptive — essay, précis, comprehension) — 100 marks

**Phase III — Interview**
Final round for shortlisted Phase II candidates. 25 marks. Tests domain knowledge, analytical ability, and communication.`,
    official_link: "https://nabard.org/",
    notification_link: "https://nabard.org/",
    apply_link: "https://nabard.org/",
    category: "banking",
    state: "all-india",
    is_active: true,
    description: "NABARD Grade A 2026 recruitment for 102 Assistant Manager posts across RDBS, Rajbhasha, Law, IT, and Protocol & Security streams. Graduate candidates aged 21–30 years eligible. Three-phase selection: Prelims, Mains (with descriptive English), and Interview. Apply at nabard.org.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-06-05",
    qualification: "Bachelor's Degree with minimum 60% marks (50% for SC/ST/PwBD) from a recognised university",
    employment_type: "FULL_TIME",
    content: `## What is NABARD Grade A?

NABARD (National Bank for Agriculture and Rural Development) is India's apex development bank for agriculture and rural infrastructure. A Grade A officer (Assistant Manager) is a Class I officer handling credit appraisal, rural development schemes, inspection, and policy implementation.

NABARD Grade A is considered a premium banking exam — the work is meaningful, the work-life balance is better than most commercial banks, and the pay and benefits are excellent.

---

## Posts and Streams

| Stream | Vacancies (approx.) |
|---|---|
| RDBS — General | ~60 |
| RDBS — Agriculture | ~20 |
| Rajbhasha | ~5 |
| Law | ~5 |
| Information Technology | ~8 |
| Protocol & Security | ~4 |
| **Total** | **~102** |

---

## Eligibility

### Age Limit (as on June 1, 2026)
- General streams: 21–30 years
- Protocol & Security: Up to 40 years

| Category | Relaxation |
|---|---|
| OBC | +3 years |
| SC/ST | +5 years |
| PwBD | +10 years |

### Educational Qualification

| Stream | Minimum Qualification |
|---|---|
| RDBS (General) | Bachelor's Degree with 60% (50% for SC/ST/PwBD) |
| RDBS (Agriculture) | B.Sc. Agriculture/Allied Sciences with 60% |
| Rajbhasha | Master's/Bachelor's in Hindi (English as subject) |
| Law | LLB with 60% |
| IT | B.E./B.Tech in CS/IT/ECE |
| Protocol & Security | Bachelor's + prior service in defence/police |

---

## Salary and Benefits

| Component | Amount |
|---|---|
| Basic Pay | ₹44,500/month |
| Dearness Allowance | ~₹18,000/month |
| HRA (metro posting) | ₹8,010/month |
| Grade Pay & Other Allowances | ~₹10,000/month |
| **Gross Monthly (metro)** | **~₹80,000–₹90,000/month** |
| **Annual CTC** | **₹12–14 lakhs** |

Other benefits: Staff housing loan, car loan at subsidised rates, LTC, group medical insurance, children's education allowance, and defined-benefit pension.

---

## Exam Pattern

### Phase I — Preliminary (Online Objective)

| Section | Questions | Marks |
|---|---|---|
| Test of Reasoning | 20 | 20 |
| English Language | 30 | 30 |
| Computer Knowledge | 20 | 20 |
| General Awareness | 20 | 20 |
| Quantitative Aptitude | 20 | 20 |
| Economic & Social Issues (focus: Rural India) | 40 | 40 |
| Agriculture & Rural Development | 40 | 40 |
| **Total** | **190** | **190** |

Time: 120 minutes. Negative marking: 0.25/wrong answer.

### Phase II — Main Exam

- **Paper I:** Economic & Social Issues + Agriculture & Rural Development — 100 marks (Objective)
- **Paper II:** English — 100 marks (Descriptive: Essay 30 marks + Précis 20 marks + Comprehension 20 marks + Business/Office Correspondence 30 marks)

### Phase III — Interview
25 marks. Conducted at NABARD regional offices.

Final merit = Phase II Paper I + Paper II + Interview marks.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | May 15, 2026 |
| **Last Date to Apply** | **June 5, 2026** |
| Phase I (Prelims) | July 26, 2026 |
| Phase II (Mains) | September 2026 (expected) |
| Interview | October–November 2026 (expected) |

---

## Preparation Strategy

**What makes NABARD unique:** The Agriculture & Rural Development section is NABARD-specific and carries high weightage. Most bank exam aspirants skip this — don't. It is very scoreable.

**Agriculture & Rural Development:** Study NABARD schemes (RIDF, NABFID, Kisan Credit Card), rural credit structure, cooperative banks, microfinance, FPO/SHG framework. NABARD publishes an annual report — read the key highlights.

**Economic & Social Issues:** India's budget priorities, GDP growth, inflation, monetary policy, rural employment data (MGNREGS), Pradhan Mantri schemes. The Economic Survey and Budget documents are key sources.

**English Descriptive (Phase II):** Practice essay writing (300–400 words) on rural economy, agriculture policy, digital banking. Practice précis writing — summarise a 400-word passage into 100 words. This is different from competitive exam English — start early.

---

## Official Links

| Resource | Link |
|---|---|
| NABARD Official Website | [nabard.org](https://nabard.org/) |
| Apply Online | [nabard.org → Career](https://nabard.org/) |
| Official Notification | [nabard.org](https://nabard.org/) |
`
  },

  // ─── 4. RBI Assistant 2026 ───────────────────────────────────────────────────
  {
    slug: "rbi-assistant-2026",
    title: "RBI Assistant 2026 — Reserve Bank of India Clerical Recruitment",
    organization: "Reserve Bank of India (RBI)",
    post_name: "Assistant (Clerical cadre)",
    vacancies: 450,
    eligibility: {
      age: "20–28 years as on the notification date. Age relaxation: OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per RBI rules.",
      education: "Bachelor's Degree in any discipline with minimum 50% aggregate marks (pass class for SC/ST/PwBD) from a recognised university. Knowledge of the regional/local language of the applying state is essential."
    },
    salary: "Pay Scale: ₹20,700–₹50,750/month basic + DA + HRA + Transport Allowance + Other Allowances. Total gross approximately ₹36,000–₹44,000/month on joining. RBI also provides staff housing loan at very low interest, superannuation benefits, and career growth to Officer Grade B.",
    application_fee: { general: "₹450", obc: "₹450", ews: "₹450", sc_st: "₹50", women: "₹450", ph: "₹50" },
    important_dates: {
      startDate: "2026-05-01",
      lastDate: "2026-05-21",
      examDate: "2026-06-28"
    },
    how_to_apply: `1. Visit the RBI official website: https://rbi.org.in/
2. Click "Opportunities@RBI" → "Current Vacancies"
3. Find "RBI Assistant 2026" and click "Apply Online"
4. Register with a valid email and mobile number
5. Fill the online form — personal details, educational qualification, state preference
6. Upload photo and signature as per prescribed dimensions
7. Pay application fee via Net Banking / UPI / Debit / Credit Card
8. SC/ST/PwBD candidates pay ₹50 (intimation charges only)
9. Download and print the confirmation slip
10. Admit Card available on rbi.org.in before Prelims`,
    selection_process: `**Stage 1 — Online Preliminary Exam**

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Numerical Ability | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **60 min** |

Sectional time limits apply. Negative marking: 1/4 mark per wrong answer.

**Stage 2 — Online Main Exam**

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning | 40 | 40 | 30 min |
| English Language | 40 | 40 | 30 min |
| Numerical Ability | 40 | 40 | 30 min |
| General Awareness | 40 | 40 | 25 min |
| Computer Knowledge | 40 | 40 | 20 min |
| **Total** | **200** | **200** | **135 min** |

Negative marking: 1/4 per wrong answer.

**Stage 3 — Language Proficiency Test (LPT)**
Qualifying test in the regional language of the state applied for. Mandatory but only qualifying — marks not added to merit.`,
    official_link: "https://rbi.org.in/",
    notification_link: "https://rbi.org.in/",
    apply_link: "https://rbi.org.in/",
    category: "banking",
    state: "all-india",
    is_active: true,
    description: "RBI Assistant 2026 recruitment for approximately 450 clerical posts across RBI offices in India. Graduate candidates aged 20–28 years eligible. Local language knowledge required. Three-stage selection: Prelims, Mains, and Language Proficiency Test. Apply at rbi.org.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-05-21",
    qualification: "Bachelor's Degree with minimum 50% marks (pass class for SC/ST/PwBD) from a recognised university",
    employment_type: "FULL_TIME",
    content: `## What is RBI Assistant?

RBI Assistant is the clerical-level entry into the Reserve Bank of India — the country's central bank and the regulator of all commercial banks. While the role is clerical in designation, working at RBI comes with exposure to monetary policy, banking regulation, currency management, and macroeconomic data that you won't find in any commercial bank.

Career growth path: Assistant → Assistant Manager (internal exam) → Manager → and further up through promotions.

---

## Vacancies and State-wise Allocation

RBI Assistant vacancies are allocated state-wise based on regional office requirements. Candidates must apply for a specific state and know that state's official/local language.

Approx. total: **~450 posts** across RBI offices in Mumbai, Delhi, Chennai, Kolkata, Hyderabad, Ahmedabad, Bengaluru, Bhubaneswar, Chandigarh, Guwahati, Jaipur, Jammu, Kanpur, Lucknow, Nagpur, Patna, Thiruvananthapuram, and other centres.

---

## Eligibility

### Age Limit
- **Minimum:** 20 years
- **Maximum:** 28 years (as on notification date)

| Category | Relaxation |
|---|---|
| OBC (Non-Creamy Layer) | +3 years |
| SC/ST | +5 years |
| PwBD | +10 years |
| Ex-Servicemen | As per RBI rules |

### Educational Qualification
- Bachelor's Degree in any discipline with minimum **50% marks** (General/OBC/EWS)
- Pass class for SC/ST/PwBD candidates
- Knowledge of the **regional/official language** of the state applied for is mandatory (tested in Language Proficiency Test)

---

## Salary

| Component | Amount |
|---|---|
| Basic Pay | ₹20,700/month |
| Dearness Allowance | ~₹12,000/month |
| HRA (metro) | ₹3,726/month |
| Transport Allowance | ₹2,000/month |
| Other Allowances | ~₹5,000/month |
| **Gross Monthly (metro)** | **~₹43,000–₹48,000/month** |

Additional benefits: Staff housing loan at concessional 3–4% interest rate (a significant financial benefit given real estate prices), group medical insurance, superannuation benefits, and LTC.

---

## Exam Pattern

### Phase I — Preliminary Exam (Online Objective)

| Section | Questions | Marks | Duration |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Numerical Ability | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **60 min** |

Sectional time limit: strictly enforced. Negative marking: 1/4 per wrong answer.

### Phase II — Main Exam (Online Objective)

| Section | Questions | Marks | Duration |
|---|---|---|---|
| Test of Reasoning | 40 | 40 | 30 min |
| English Language | 40 | 40 | 30 min |
| Numerical Ability | 40 | 40 | 30 min |
| General Awareness | 40 | 40 | 25 min |
| Computer Knowledge | 40 | 40 | 20 min |
| **Total** | **200** | **200** | **135 min** |

Negative marking: 1/4 per wrong answer.

### Phase III — Language Proficiency Test (LPT)
Qualifying only. Tests reading and writing ability in the official language of the state applied. Marks from LPT are not added to the merit list.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | May 1, 2026 |
| **Last Date to Apply** | **May 21, 2026** |
| Prelims Exam | June 28, 2026 |
| Mains Exam | August 2026 (expected) |
| LPT | September–October 2026 (expected) |

---

## Preparation Strategy

**English:** Reading Comprehension is standard. Watch for fill-in-the-blanks, error detection, and cloze tests. RBI Assistant English is moderate — don't over-prepare this section.

**Quantitative Aptitude:** Data Interpretation (tables, bar/pie charts), Number Series, Simplification, and basic Arithmetic. Practice 35 questions in 20 minutes — that is the real challenge.

**Reasoning:** Puzzles, Seating Arrangement, and Direction-Distance dominate. These are time-consuming — practice speed.

**General Awareness (Mains):** Banking and Financial awareness is key — REPO rate, CRR, SLR, recent RBI policy announcements, bank mergers, new banking licences, Budget highlights, and monetary policy committee decisions. Follow RBI's own press releases.

**Computer Knowledge (Mains):** MS Office basics, networking fundamentals, internet concepts, database basics. Very straightforward — do not over-invest preparation time here.

---

## Official Links

| Resource | Link |
|---|---|
| RBI Official Website | [rbi.org.in](https://rbi.org.in/) |
| Apply Online | [rbi.org.in → Opportunities@RBI](https://rbi.org.in/) |
| Official Notification | [rbi.org.in](https://rbi.org.in/) |
`
  },

  // ─── 5. SSC JE 2026 ──────────────────────────────────────────────────────────
  {
    slug: "ssc-je-2026",
    title: "SSC JE 2026 — Junior Engineer (Civil, Electrical, Mechanical)",
    organization: "Staff Selection Commission (SSC)",
    post_name: "Junior Engineer (Civil), Junior Engineer (Electrical), Junior Engineer (Mechanical), Junior Engineer (Quantity Surveying & Contract)",
    vacancies: 1765,
    eligibility: {
      age: "18–32 years as on January 1, 2026. Age relaxation: OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per GoI rules.",
      education: "3-year Diploma in Civil/Electrical/Mechanical Engineering (or equivalent) from a recognised institution. For QS&C: Diploma in Civil Engineering + Quantity Surveying experience, or B.Sc. (Engg.) Civil with QS subjects."
    },
    salary: "Pay Level 6 — ₹35,400–₹1,12,400/month basic + DA + HRA + TA. Total in-hand approximately ₹55,000–₹75,000/month depending on posting city. Postings mainly in CPWD, MES, Border Roads Organisation, Doordarshan, and other central departments.",
    application_fee: { general: "₹100", obc: "₹100", ews: "₹100", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-03-01",
      lastDate: "2026-03-31",
      examDate: "2026-06-01"
    },
    how_to_apply: `1. Visit the SSC official website: https://ssc.gov.in/
2. Click "Apply" → "SSC JE 2026"
3. Complete one-time registration if new user (requires Aadhaar OTP)
4. Log in with Registration Number and Date of Birth
5. Fill personal details, engineering discipline, and educational qualification
6. Upload passport-size photo (white background) and signature
7. Pay ₹100 fee online (UPI / Net Banking / Debit / Credit Card)
8. SC/ST/Female/Ex-Servicemen: No fee — select exemption during payment step
9. Submit and download the confirmation page
10. Admit Card released on ssc.gov.in before Paper I exam date`,
    selection_process: `**Paper I — Computer Based Examination (Objective)**

| Subject | Marks | Duration |
|---|---|---|
| General Intelligence & Reasoning | 50 | — |
| General Awareness | 50 | — |
| Part A: Civil & Structural Engineering | 100 | — |
| Part B: Electrical Engineering | 100 | — |
| Part C: Mechanical Engineering | 100 | — |
| **Total** | **200** | **2 hours** |

Candidates attempt Parts A, B, or C based on their engineering discipline. Negative marking: 0.25 per wrong answer.

**Paper II — Conventional (Descriptive)**
- Candidates shortlisted from Paper I appear for Paper II
- 300 marks, 2 hours
- Subject-specific technical questions in Civil/Electrical/Mechanical/QS&C
- Descriptive format — calculations, diagrams, solutions
- No negative marking`,
    official_link: "https://ssc.gov.in/",
    notification_link: "https://ssc.gov.in/",
    apply_link: "https://ssc.gov.in/",
    category: "ssc",
    state: "all-india",
    is_active: true,
    description: "SSC JE 2026 recruitment for 1,765 Junior Engineer posts in Civil, Electrical, and Mechanical disciplines across central government departments — CPWD, MES, Border Roads Organisation, and others. Diploma/Engineering graduates aged 18–32 years eligible. Apply at ssc.gov.in.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-03-31",
    qualification: "3-year Diploma in Civil/Electrical/Mechanical Engineering from a recognised institution",
    employment_type: "FULL_TIME",
    content: `## What is SSC JE?

SSC JE (Junior Engineer) is conducted by the Staff Selection Commission to recruit engineers at Group B (non-gazetted) level into central government departments. The main hiring departments are CPWD (Central Public Works Department), Military Engineering Services (MES), Border Roads Organisation (BRO), BSNL, and Doordarshan.

It is one of the few central government technical exams where a Diploma holder (not just degree engineer) can apply and get a gazetted-equivalent pay level posting.

---

## Vacancies 2026

| Department | Civil | Electrical | Mechanical | Total |
|---|---|---|---|---|
| CPWD | — | — | — | — |
| MES | — | — | — | — |
| Border Roads Organisation | — | — | — | — |
| BSNL | — | — | — | — |
| Other Depts | — | — | — | — |
| **Total (approx.)** | **~900** | **~600** | **~265** | **~1,765** |

*Category-wise breakdown published in official notification.*

---

## Eligibility

### Age Limit (as on January 1, 2026)
- Minimum: 18 years
- Maximum: 32 years

| Category | Relaxation |
|---|---|
| OBC | +3 years |
| SC/ST | +5 years |
| PwBD (General) | +10 years |
| Ex-Servicemen | As per Govt rules |

### Educational Qualification

| Discipline | Minimum Qualification |
|---|---|
| Civil | Diploma in Civil Engineering (3-year) OR B.E./B.Tech Civil |
| Electrical | Diploma in Electrical Engineering (3-year) OR B.E./B.Tech Electrical |
| Mechanical | Diploma in Mechanical Engineering (3-year) OR B.E./B.Tech Mechanical |
| QS&C | Diploma in Civil Engg. + QS experience, OR B.Sc. Civil with QS subjects |

---

## Salary

| Component | Amount |
|---|---|
| Basic Pay (Level 6) | ₹35,400/month |
| Dearness Allowance | ~₹15,500/month |
| HRA (metro) | ₹6,372/month |
| Transport Allowance | ₹3,600–₹7,200/month |
| **Gross Monthly (metro)** | **~₹62,000–₹72,000/month** |

Additional perks: CGHS medical, NPS pension, LTC, and career growth to Assistant Engineer (AE) grade on promotion.

---

## Exam Pattern

### Paper I — Online Objective (2 hours)

| Section | Marks |
|---|---|
| General Intelligence & Reasoning | 50 |
| General Awareness | 50 |
| Engineering Subject (Civil/Electrical/Mechanical) | 100 |
| **Total** | **200** |

Negative marking: 0.25 per wrong answer.

### Paper II — Conventional Descriptive (2 hours)

- 300 marks
- Subject-specific technical questions (calculations, designs, explanations)
- Only candidates shortlisted from Paper I appear
- No negative marking

---

## Syllabus Highlights

**Civil Engineering:** Building Materials, Surveying, Soil Mechanics, Hydraulics, RCC Design, Steel Structures, Irrigation, Environmental Engineering, Transportation Engineering.

**Electrical Engineering:** Basic Concepts, Circuit Laws, Electrical Machines (DC/AC Motors, Transformers), Power Systems, Measurements & Instrumentation, Electrical Estimation, Electronics.

**Mechanical Engineering:** Theory of Machines, Strength of Materials, Fluid Mechanics, Thermodynamics, Production Engineering, Industrial Engineering.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | March 1, 2026 |
| **Last Date to Apply** | **March 31, 2026** |
| Paper I (CBT) | June 1, 2026 onwards |
| Paper II (Conventional) | After Paper I results |

---

## Preparation Strategy

**Paper I Engineering Section (100 marks):** This is the deciding factor. Focus on 5–6 core topics that carry maximum weightage consistently — for Civil: Soil Mechanics, Structural Analysis, RCC; for Electrical: Electrical Machines, Power Systems; for Mechanical: Thermodynamics, Fluid Mechanics.

**Reasoning (50 marks):** Standard SSC level — Analogies, Coding-Decoding, Direction, Series, Blood Relations. Scoring and predictable.

**General Awareness (50 marks):** Current affairs (last 6 months), Science basics, History, Geography. Don't overthink this — 30 minutes daily on a current affairs app is enough.

**Paper II Strategy:** Deep technical preparation. Solve GATE-level problems for conceptual clarity even though SSC JE Paper II is below GATE level — it helps you answer faster and with confidence. Practice derivations and numerical problems.

---

## Official Links

| Resource | Link |
|---|---|
| SSC Official Website | [ssc.gov.in](https://ssc.gov.in/) |
| Apply Online | [ssc.gov.in → Apply](https://ssc.gov.in/) |
| Official Notification | [ssc.gov.in](https://ssc.gov.in/) |
`
  },

  // ─── 6. BPSC 2026 ────────────────────────────────────────────────────────────
  {
    slug: "bpsc-70th-cce-2026",
    title: "BPSC 70th CCE 2026 — Bihar Combined Competitive Examination",
    organization: "Bihar Public Service Commission (BPSC)",
    post_name: "Deputy Collector, Deputy Superintendent of Police (DSP), District Commandant, Block Development Officer (BDO), Circle Officer, Revenue Officer, Supply Inspector, District Fisheries Officer, and other Group A/B posts",
    vacancies: 2035,
    eligibility: {
      age: "20–37 years for most posts. Age relaxation: BC/EBC +3 yrs, SC/ST +5 yrs, Women (Bihar domicile) +5 yrs over upper limit, PwBD +10 yrs. Bihar domicile required for reserved category benefits.",
      education: "Bachelor's Degree from a recognised university. Bihar domicile is required for reserved category age/fee relaxations."
    },
    salary: "Pay Level 7–10 — ₹44,900–₹1,42,400/month basic + DA + HRA + Bihar state allowances. Deputy Collector/DSP (Level 10): ₹56,100 basic + allowances. Total in-hand approximately ₹65,000–₹90,000/month depending on post and posting location.",
    application_fee: { general: "₹600", obc: "₹600", ews: "₹600", sc_st: "₹150", women: "₹150", ph: "₹150" },
    important_dates: {
      startDate: "2026-01-01",
      lastDate: "2026-02-01",
      examDate: "2026-05-16"
    },
    how_to_apply: `1. Visit the BPSC online portal: https://onlinebpsc.bihar.gov.in/
2. Register with a valid mobile number and email
3. Fill the application form — personal details, educational qualification, post preferences
4. Upload photo and signature as per specifications
5. Pay application fee online (Net Banking / UPI / Debit Card)
6. SC/ST/Women/PwBD candidates pay reduced fee of ₹150
7. Submit and download the confirmation page
8. Admit Card released on bpsc.bih.nic.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Examination (PT)**

| Subject | Marks | Duration |
|---|---|---|
| General Studies (GS) | 150 | 2 hours |

Objective, MCQ. No negative marking. Only qualifying — marks not counted in merit. Minimum 40% required (36% for SC/ST) to qualify for Mains.

**Stage 2 — Main Examination (Written)**

| Paper | Marks | Type |
|---|---|---|
| General Hindi | 100 | Qualifying (pass marks 30/100) |
| General Studies Paper I | 300 | Merit |
| General Studies Paper II | 300 | Merit |
| Optional Subject Paper | 300 | Merit |
| **Total (for merit)** | **900** | Descriptive |

Descriptive format. Candidates choose one Optional Subject from 34 available subjects.

**Stage 3 — Interview**
120 marks. For Group A posts (Deputy Collector, DSP, etc.). Group B posts may be recruited without interview depending on notification.`,
    official_link: "https://bpsc.bih.nic.in/",
    notification_link: "https://bpsc.bih.nic.in/",
    apply_link: "https://onlinebpsc.bihar.gov.in/",
    category: "state-psc",
    state: "bihar",
    is_active: true,
    description: "BPSC 70th Combined Competitive Examination 2026 for 2,035 Group A and B posts in Bihar state services — Deputy Collector, DSP, BDO, Circle Officer, and more. Graduate candidates aged 20–37 years with Bihar domicile eligible. Three-stage selection: Prelims, Mains, and Interview. Apply at onlinebpsc.bihar.gov.in.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-02-01",
    qualification: "Bachelor's Degree from any recognised university",
    employment_type: "FULL_TIME",
    content: `## What is BPSC CCE?

BPSC (Bihar Public Service Commission) conducts the Combined Competitive Examination (CCE) to recruit officers for Bihar state government's Group A and Group B services. This is Bihar's equivalent of UPSC Civil Services — the most prestigious state government exam for candidates from Bihar.

The 70th CCE 2026 is for 2,035 vacancies, making it one of the largest BPSC recruitments in recent years.

---

## Posts Offered

| Post | Group | Pay Level |
|---|---|---|
| Deputy Collector | A | Level 10 |
| Deputy Superintendent of Police (DSP) | A | Level 10 |
| District Commandant (Home Guard) | A | Level 10 |
| Block Development Officer (BDO) | A | Level 10 |
| Circle Officer | B | Level 8 |
| Revenue Officer | B | Level 7 |
| Supply Inspector | B | Level 7 |
| District Fisheries Officer | B | Level 8 |
| Other Group A/B Posts | A/B | Level 7–10 |

---

## Eligibility

### Age Limit
- **General/EWS:** 20–37 years
- **BC/EBC (Bihar):** Up to 40 years
- **SC/ST (Bihar):** Up to 42 years
- **Women (Bihar domicile):** Additional 5 years over applicable upper limit
- **PwBD:** +10 years

### Educational Qualification
- Bachelor's Degree from a recognised university
- Bihar domicile required for SC/ST/BC/EBC/Women age and fee relaxations

---

## Salary

| Post | Basic Pay | Gross Monthly |
|---|---|---|
| Deputy Collector / DSP | ₹56,100 (Level 10) | ~₹85,000–₹95,000 |
| BDO / District Officer | ₹47,600 (Level 8) | ~₹70,000–₹80,000 |
| Circle Officer / Revenue Officer | ₹44,900 (Level 7) | ~₹65,000–₹75,000 |

---

## Exam Pattern

### Prelims — General Studies
- 150 marks, 2 hours, MCQ
- No negative marking
- Qualifying only — minimum 40% (36% for SC/ST)
- Syllabus: Indian History, Culture, Indian Polity & Economy, Geography, Science & Technology, Current Affairs, Bihar-specific GK

### Mains — Written Examination
| Paper | Marks |
|---|---|
| General Hindi (Qualifying) | 100 (need 30/100 to pass) |
| General Studies Paper I (History, Culture, Polity, Economy, Geography) | 300 |
| General Studies Paper II (Science, Technology, Current Affairs, Bihar GK) | 300 |
| Optional Subject | 300 |
| **Total merit marks** | **900** |

Optional Subjects: Available in 34 subjects including History, Geography, Political Science, Economics, Mathematics, Physics, Chemistry, Agriculture, Sociology, Public Administration, and more.

### Interview
120 marks. For Group A posts.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | January 1, 2026 |
| **Last Date to Apply** | **February 1, 2026** |
| Preliminary Exam | May 16, 2026 |
| Mains Exam | August–September 2026 (expected) |
| Interview | November–December 2026 (expected) |

---

## Preparation Strategy

**Prelims (Bihar GK is key):** BPSC Prelims has consistent 20–30 questions on Bihar — history (ancient, medieval, modern), Bihar economy, schemes launched by Bihar government, census data for Bihar, rivers, districts. This is your differentiator — most UP/Delhi-based preparation material skips this.

**GS Paper I — History is the heaviest topic:** Ancient India (Mauryan Empire, Buddhism), Medieval India (Bhakti-Sufi, Mughal administration), Modern India (Bihar's role in freedom movement — Champaran, Quit India), and post-independence (Panchsheel, Non-Alignment).

**GS Paper II — Science & Technology:** Focus on agriculture and rural development science since Bihar is agricultural. Also prepare: space science, biotechnology, IT-related current affairs.

**Optional Subject:** Choose based on your graduation subject — familiarity reduces preparation time significantly. History, Geography, and Political Science are the most popular choices and have abundant resources.

**Hindi Paper (Qualifying):** You need only 30/100 to pass. Don't over-prepare. Essay and comprehension are the question types — spend 2 weeks on this, maximum.

---

## Official Links

| Resource | Link |
|---|---|
| BPSC Official Website | [bpsc.bih.nic.in](https://bpsc.bih.nic.in/) |
| Apply Online | [onlinebpsc.bihar.gov.in](https://onlinebpsc.bihar.gov.in/) |
| Official Notification | [bpsc.bih.nic.in](https://bpsc.bih.nic.in/) |
`
  },

  // ─── 7. MPSC Rajyaseva 2026 ───────────────────────────────────────────────────
  {
    slug: "mpsc-rajyaseva-2026",
    title: "MPSC Rajyaseva 2026 — Maharashtra State Civil Services",
    organization: "Maharashtra Public Service Commission (MPSC)",
    post_name: "Deputy Collector, Deputy Superintendent of Police (DSP), Assistant Commissioner of Sales Tax, Block Development Officer, Naib Tehsildar, and other Group A/B State Services posts",
    vacancies: 275,
    eligibility: {
      age: "19–38 years for most posts. Age relaxation: OBC/SEBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Maharashtra Govt rules. Maharashtra domicile required.",
      education: "Bachelor's Degree from a recognised university. Maharashtra domicile required."
    },
    salary: "Pay Level 7–10 (Maharashtra state pay scales) — ₹41,800–₹1,32,300/month basic + DA + HRA + state allowances. Deputy Collector/DSP (Level 10): ₹56,100 basic + allowances. Total in-hand approximately ₹70,000–₹1,00,000/month depending on post.",
    application_fee: { general: "₹719", obc: "₹719", ews: "₹719", sc_st: "₹449", women: "₹449", ph: "₹449" },
    important_dates: {
      startDate: "2026-02-01",
      lastDate: "2026-02-28",
      examDate: "2026-05-10"
    },
    how_to_apply: `1. Visit the MPSC online portal: https://mpsc.gov.in/ or mpsconline.gov.in
2. Register with a valid email and mobile number (Aadhaar-based verification required)
3. Log in and fill the application form — personal details, educational qualifications, post preferences
4. Upload scanned photo, signature, and required documents
5. Pay application fee via Net Banking / Debit Card / Credit Card / UPI
6. Download and print the application form
7. Admit Card available on mpsc.gov.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (State Services Prelims / Rajyaseva Purv Pariksha)**

| Paper | Marks | Duration |
|---|---|---|
| Paper I: General Studies | 200 | 2 hours |
| Paper II: CSAT (Civil Services Aptitude Test) | 200 | 2 hours |

Paper II (CSAT) is qualifying — minimum 33% required. Negative marking: 1/4 per wrong answer on both papers.

**Stage 2 — Main Examination (Mains)**

| Paper | Marks | Type |
|---|---|---|
| Paper I: Marathi (Language) | 100 | Qualifying |
| Paper II: English (Language) | 100 | Qualifying |
| Paper III: Marathi & English Essay | 100 | Merit |
| Paper IV: GS I (History, Geography, Economy) | 150 | Merit |
| Paper V: GS II (Polity, Governance, Social Issues) | 150 | Merit |
| Paper VI: GS III (Technology, Environment, Disaster) | 150 | Merit |
| Paper VII: GS IV (Ethics, Integrity, Aptitude) | 150 | Merit |
| **Total Merit Marks** | **700** | Descriptive |

**Stage 3 — Interview/Personality Test**
75 marks. For Group A posts.`,
    official_link: "https://mpsc.gov.in/",
    notification_link: "https://mpsc.gov.in/",
    apply_link: "https://mpsconline.gov.in/",
    category: "state-psc",
    state: "maharashtra",
    is_active: true,
    description: "MPSC Rajyaseva 2026 recruitment for 275 Group A and B Maharashtra state services posts — Deputy Collector, DSP, Naib Tehsildar, and others. Graduate candidates aged 19–38 years with Maharashtra domicile eligible. Three-stage selection: Prelims, Mains, and Interview. Apply at mpsc.gov.in.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-02-28",
    qualification: "Bachelor's Degree from any recognised university. Maharashtra domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is MPSC Rajyaseva?

MPSC Rajyaseva (Maharashtra State Civil Services) Examination is conducted by the Maharashtra Public Service Commission to recruit officers for Group A and Group B state services. It is the Maharashtra equivalent of UPSC Civil Services — the most prestigious government exam for candidates from Maharashtra.

A Rajyaseva officer works as Deputy Collector, DSP, Block Development Officer, and other administrative roles across Maharashtra's districts.

---

## Posts and Pay

| Post | Group | Level |
|---|---|---|
| Deputy Collector | A | Level 10 |
| Deputy Superintendent of Police (DSP) | A | Level 10 |
| Assistant Commissioner of Sales Tax | A | Level 9 |
| Block Development Officer | A | Level 9 |
| Assistant Registrar (Co-op) | B | Level 8 |
| Naib Tehsildar | B | Level 7 |
| Other Group B Posts | B | Level 7–8 |

---

## Eligibility

### Age Limit
- **General/EWS:** 19–38 years
- **OBC/SEBC:** Up to 41 years
- **SC/ST:** Up to 43 years
- **PwBD:** +10 years over applicable limit

Maharashtra domicile required for all categories.

### Educational Qualification
- Bachelor's Degree from any recognised university
- Maharashtra domicile is mandatory

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹719 |
| SC/ST/PwBD/Women | ₹449 |

---

## Exam Pattern

### Prelims (Purv Pariksha)

| Paper | Marks | Notes |
|---|---|---|
| GS Paper I | 200 | Merit (for Mains shortlist) |
| CSAT Paper II | 200 | Qualifying — need 33% |

Negative marking: 1/4 per wrong answer.

### Mains

| Paper | Marks |
|---|---|
| Marathi (Language — Qualifying) | 100 |
| English (Language — Qualifying) | 100 |
| Marathi & English Essay | 100 |
| GS I: History, Geography, Economy | 150 |
| GS II: Polity, Governance, Social Issues | 150 |
| GS III: Technology, Environment, Disaster Mgmt | 150 |
| GS IV: Ethics, Integrity, Aptitude | 150 |
| **Total Merit Marks** | **700** |

All merit papers are descriptive. Answers in Marathi or English.

### Interview
75 marks. For Group A posts only.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | February 1, 2026 |
| **Last Date to Apply** | **February 28, 2026** |
| Prelims Exam | May 10, 2026 |
| Mains Exam | August–September 2026 (expected) |
| Interview | November–December 2026 (expected) |

---

## Preparation Strategy

**Maharashtra-specific GK is essential:** MPSC Mains has higher Maharashtra-specific content than UPSC. Prepare: Maharashtra history (Maratha Empire, Shivaji, social reform movements — Phule, Ambedkar), Maharashtra geography (river systems, districts), Maharashtra economy (agriculture, industry, schemes).

**Marathi (Qualifying Paper):** You need passing marks only, but don't take it lightly. Write clean formal Marathi — essay and comprehension format. Practice 3–4 essays on contemporary social topics in Marathi.

**GS IV (Ethics):** Similar to UPSC GS IV but includes case studies relevant to Maharashtra administration. Study Integrity in public service, accountability, and real Maharashtra governance examples.

**CSAT (Paper II — Prelims):** Qualifying at 33% only. Standard aptitude level — Reasoning, Basic Maths, Comprehension. Don't over-invest time here.

---

## Official Links

| Resource | Link |
|---|---|
| MPSC Official Website | [mpsc.gov.in](https://mpsc.gov.in/) |
| Apply Online | [mpsconline.gov.in](https://mpsconline.gov.in/) |
| Official Notification | [mpsc.gov.in](https://mpsc.gov.in/) |
`
  },

  // ─── 8. TNPSC Group 2 2026 ────────────────────────────────────────────────────
  {
    slug: "tnpsc-group-2-2026",
    title: "TNPSC Group 2 2026 — Tamil Nadu State Services Recruitment",
    organization: "Tamil Nadu Public Service Commission (TNPSC)",
    post_name: "Assistant Section Officer (ASO), Junior Employment Officer, Sub-Registrar, Municipal Commissioner Grade III, Block Development Officer, Cooperative Sub-Registrar, and other Group 2 posts",
    vacancies: 874,
    eligibility: {
      age: "18–32 years for most posts (18–35 years for some posts). Age relaxation: BC/MBC +3 yrs, SC/ST +10 yrs, PwBD as per Tamil Nadu Govt rules. Tamil Nadu domicile required.",
      education: "Bachelor's Degree from a recognised university. Tamil language proficiency (SSLC Tamil OR higher level Tamil) mandatory for most posts."
    },
    salary: "Pay Level 8–13 (Tamil Nadu state pay scales) — ₹37,200–₹1,17,800/month basic + DA + HRA + state allowances. Sub-Registrar/Cooperative Sub-Registrar: ~₹60,000–₹80,000/month gross. ASO posts: ~₹45,000–₹55,000/month gross.",
    application_fee: { general: "₹150", obc: "₹150", ews: "₹150", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-01-15",
      lastDate: "2026-02-14",
      examDate: "2026-06-07"
    },
    how_to_apply: `1. Visit the TNPSC one-time registration portal: https://www.tnpscexams.in/
2. Complete one-time registration (OTR) if not registered — requires valid email, mobile, and Tamil Nadu identification
3. Log in and apply for "Group 2 / 2A Services Examination 2026"
4. Fill personal details, educational qualification, post preferences, and community details
5. Upload photo and signature as per specifications
6. Pay ₹150 fee online via Net Banking / Debit Card / Credit Card / UPI (or Sevaragan service centre)
7. SC/ST/PwBD/Women candidates: Fee exempted
8. Submit and save the confirmation page
9. Admit Card available on tnpscexams.in before exam`,
    selection_process: `**For Group 2 (Interview Posts) — 3 Stages:**

**Stage 1 — Preliminary Exam**
- 300 marks, 3 hours
- General Studies (150 marks) + Aptitude & Mental Ability Test (AMCAT) (150 marks)
- Objective MCQ. No negative marking.
- Qualifying only — marks not counted in merit

**Stage 2 — Main Exam**
| Paper | Marks | Duration |
|---|---|---|
| Paper I: General Studies | 300 | 3 hours |
| Paper II: General Tamil or English | 300 | 3 hours |
| **Total Merit Marks** | **600** | — |

**Stage 3 — Interview**
120 marks. Final stage for Group 2 (with interview) posts.

**For Group 2A (Non-Interview Posts) — 2 Stages:**
- Main Exam only (written) — 600 marks
- No interview. Recruitment on merit from Main Exam.`,
    official_link: "https://www.tnpsc.gov.in/",
    notification_link: "https://www.tnpsc.gov.in/",
    apply_link: "https://www.tnpscexams.in/",
    category: "state-psc",
    state: "tamil-nadu",
    is_active: true,
    description: "TNPSC Group 2 2026 recruitment for 874 posts across Tamil Nadu state services — Sub-Registrar, ASO, Municipal Commissioner Grade III, BDO, and others. Graduate candidates aged 18–32 years with Tamil Nadu domicile eligible. Apply at tnpscexams.in.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-02-14",
    qualification: "Bachelor's Degree from a recognised university. Tamil language proficiency mandatory for most posts.",
    employment_type: "FULL_TIME",
    content: `## What is TNPSC Group 2?

TNPSC Group 2 is a combined recruitment conducted by the Tamil Nadu Public Service Commission for Group 2 (with interview) and Group 2A (non-interview) posts in Tamil Nadu state services. It is one of Tamil Nadu's most popular state government exams, attracting lakhs of applicants every cycle.

Group 2 includes posts like Sub-Registrar, Cooperative Sub-Registrar, and Senior Grade posts — higher-responsibility roles.
Group 2A includes Assistant Section Officer, Supervisor, Inspector-level posts — slightly lower level but still highly coveted.

---

## Posts Offered

| Post | Service | Interview |
|---|---|---|
| Assistant Section Officer (ASO) | Secretariat | No |
| Sub-Registrar | Registration | Yes |
| Municipal Commissioner Grade III | Municipality | No |
| Junior Employment Officer | Employment | No |
| Block Development Officer | Rural Dev. | Yes |
| Cooperative Sub-Registrar | Cooperative | Yes |
| District Backward Classes Welfare Officer | Welfare | Yes |
| Other Group 2/2A Posts | Various | Varies |

---

## Eligibility

### Age Limit (as on July 1, 2026)
- **General:** 18–32 years (18–35 for some posts)
- **BC/MBC:** Up to 35 years (38 for some posts)
- **SC/ST:** Up to 42 years

Tamil Nadu domicile required.

### Educational Qualification
- Bachelor's Degree from a recognised university
- Tamil language (written) proficiency required — either SSLC level Tamil as a subject, OR Tamil Nadu government Tamil proficiency test

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC | ₹150 |
| SC/ST | Nil |
| PwBD | Nil |
| Women | Nil |

---

## Exam Pattern

### Prelims (for Group 2 Interview posts — Qualifying only)

| Section | Marks | Duration |
|---|---|---|
| General Studies | 150 | — |
| Aptitude & Mental Ability (AMCAT) | 150 | — |
| **Total** | **300** | **3 hours** |

No negative marking. Qualifying only.

### Main Exam

| Paper | Marks | Duration |
|---|---|---|
| Paper I: General Studies | 300 | 3 hours |
| Paper II: General Tamil / English | 300 | 3 hours |
| **Total** | **600** | — |

Descriptive + objective mix. Candidates choose General Tamil or English for Paper II (most choose Tamil for higher familiarity).

### Interview (Group 2 posts only)
120 marks. Conducted at TNPSC offices.

Final merit = Main Exam (600) + Interview (120) for Group 2.
Final merit = Main Exam (600) for Group 2A.

---

## Syllabus Highlights

**General Studies:** Unit 1 (General Science + Applied Science), Unit 2 (Current Events of National & International Importance), Unit 3 (History of India + History of Tamil Nadu), Unit 4 (Indian Polity + Tamil Nadu Polity), Unit 5 (Indian Economy + Tamil Nadu Economy), Unit 6 (Indian Geography + Tamil Nadu Geography), Unit 7 (Aptitude & Mental Ability — Prelims only).

**Tamil Nadu-specific content is crucial** — Sangam literature, Chola/Pandya/Chera kingdoms, Dr. Ambedkar & Periyar contributions to Tamil society, Tamil Nadu economy (textiles, IT, agriculture), and recent Tamil Nadu government schemes.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | January 15, 2026 |
| **Last Date to Apply** | **February 14, 2026** |
| Preliminary Exam | June 7, 2026 (Group 2 Interview posts) |
| Main Exam | August–September 2026 (expected) |
| Interview | November–December 2026 (expected) |

Group 2A (non-interview) directly appears for Main Exam without Prelims.

---

## Preparation Strategy

**Tamil Nadu History (high weightage):** Ancient Tamil history — Sangam period, three kingdoms, literature (Thirukkural, Silappathikaram). Medieval — Pallava, Chola, Vijayanagara. Modern — British rule, freedom struggle in Tamil Nadu, social reform movements (Periyar, Ambedkar's connection). This section has 30–40 consistent questions per paper.

**Current Events:** Both national and Tamil Nadu state-level current affairs. TNPSC Current Affairs magazines (monthly) published by Tamil Nadu study publishers are popular resources.

**Tamil Paper (Paper II):** This paper is scored in Tamil by most candidates since it's a familiarity advantage. Prepare essay, summary, and Tamil grammar thoroughly.

**Aptitude & Mental Ability (AMCAT — Prelims):** Reasoning, Basic Maths at 10th level, Data Interpretation. Standard level — practice with TNPSC previous year papers.

---

## Official Links

| Resource | Link |
|---|---|
| TNPSC Official Website | [tnpsc.gov.in](https://www.tnpsc.gov.in/) |
| Apply Online | [tnpscexams.in](https://www.tnpscexams.in/) |
| Official Notification | [tnpsc.gov.in](https://www.tnpsc.gov.in/) |
`
  }

];

console.log(`\nInserting ${jobs.length} jobs (Batch 2 — Defence, Insurance, Banking, SSC JE, State PSCs)...\n`);

let inserted = 0;
let failed = 0;

for (const job of jobs) {
  const { error } = await supabase.from("jobs").insert([job]);
  if (error) {
    console.error(`❌ FAILED: ${job.slug} — ${error.message}`);
    failed++;
  } else {
    console.log(`✅ ${job.slug}`);
    inserted++;
  }
}

console.log(`\n✅ Inserted: ${inserted} | ❌ Failed: ${failed}`);
console.log(`📊 Total now: 26 + ${inserted} = ${26 + inserted} active jobs`);
