import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const envFile = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const env = Object.fromEntries(
  envFile.split("\n").filter(l => l.includes("=") && !l.startsWith("#"))
    .map(l => { const [k, ...v] = l.split("="); return [k.trim(), v.join("=").trim()]; })
);
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const jobs = [

// ─── 1. UPSC Civil Services 2026 ─────────────────────────────────────────────
{
  slug: "upsc-civil-services-2026",
  title: "UPSC Civil Services 2026 — IAS, IPS, IFS & 24 Other Services",
  organization: "Union Public Service Commission (UPSC)",
  post_name: "Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), Indian Revenue Service (IRS), Indian Railway Traffic Service (IRTS), and 20+ other Group A & B Central Services",
  vacancies: 979,
  eligibility: {
    age: "21–32 years as on August 1, 2026. OBC NCL: up to 35 yrs. SC/ST: up to 37 yrs. PwBD (UR): up to 42 yrs. Attempts: General — 6, OBC — 9, SC/ST — unlimited (up to age limit).",
    education: "Bachelor's Degree in any discipline from a recognised university. Final-year students may apply provisionally — degree must be complete before Mains."
  },
  salary: "IAS/IPS — Pay Level 10: ₹56,100/month basic (Junior Time Scale). Plus DA, HRA, TA, CGHS medical, official accommodation. Total gross approximately ₹90,000–₹1,05,000/month at entry level. At Secretary level: ₹2,25,000/month.",
  application_fee: { general: "₹100", obc: "₹100", ews: "₹100", sc_st: "Nil", women: "Nil", ph: "Nil" },
  important_dates: { startDate: "2026-02-01", lastDate: "2026-03-04", examDate: "2026-06-08" },
  how_to_apply: `1. Visit upsconline.nic.in → Apply Online → Civil Services Examination 2026
2. Register once with email and mobile (one-time UPSC registration)
3. Fill Part I: personal, educational, and centre preference details
4. Fill Part II: optional subject, upload photo and signature
5. Pay ₹100 fee online (SC/ST/Women/PwBD: Nil)
6. Submit and print the confirmation receipt
7. Admit Card released on upsconline.nic.in before Prelims`,
  selection_process: `**Stage 1 — Preliminary Exam (Prelims)**

| Paper | Subject | Marks | Duration |
|---|---|---|---|
| Paper I | General Studies | 200 | 2 hours |
| Paper II | CSAT (Aptitude) | 200 — qualifying at 33% | 2 hours |

Paper II is a qualifying gate. 100 GS questions × 2 marks; negative marking: −0.67 per wrong answer.

**Stage 2 — Mains Exam (1750 marks)**

| Paper | Subject | Marks |
|---|---|---|
| Essay | — | 250 |
| GS I | History, Geography | 250 |
| GS II | Polity, Governance, IR | 250 |
| GS III | Economy, Science, Environment | 250 |
| GS IV | Ethics, Integrity | 250 |
| Optional I | Chosen subject | 250 |
| Optional II | Chosen subject | 250 |

Two qualifying language papers (Indian language + English) are not counted in merit.

**Stage 3 — Personality Test (275 marks)**
Final merit = Mains 1750 + Interview 275 = **2025 marks**.`,
  official_link: "https://upsc.gov.in/",
  notification_link: "https://upsc.gov.in/",
  apply_link: "https://upsconline.nic.in/",
  category: "upsc",
  state: "all-india",
  is_active: true,
  description: "UPSC Civil Services 2026 recruitment for ~979 vacancies across IAS, IPS, IFS, IRS, IRTS and 20+ other central services. Graduate candidates aged 21–32 years eligible. Three stages: Prelims (June 2026), Mains (September 2026), and Interview. Apply at upsconline.nic.in.",
  reading_time: "11 min read",
  last_date: "2026-03-04",
  qualification: "Bachelor's Degree in any discipline from a recognised university",
  employment_type: "FULL_TIME",
  content: `## What Is UPSC Civil Services?

UPSC Civil Services is the exam that puts you on the path to IAS, IPS, IFS, or any of the 24 other central government services. It's the most competitive examination in India — not because the syllabus is impossible but because the number of serious aspirants is enormous relative to the seats available.

About 10–12 lakh candidates register every year. Around 5–6 lakh actually sit the Prelims. About 15,000 clear Prelims for Mains. Around 2,500 make it to Interview. Roughly 1,000 are finally recommended for service. That's a 1-in-1,000 ratio at the end. You need to know this before you start.

The entire cycle — notification to final result — takes 12–15 months. Prelims happen in May/June, Mains in September, Interviews in January–April of the following year. One bad day anywhere in the process and you try again next year. That's the nature of this exam. Candidates who clear it are typically those who stayed consistent for 2–3 years, not those who crammed for 6 months.

---

## Services Allocated

| Service | What It Means |
|---|---|
| IAS | District Collector → DM → Secretary level. Real administrative power. |
| IPS | SP → SSP → DIG → IGP → DGP. Law enforcement career. |
| IFS | Foreign Service — embassies, MEA, international assignments. |
| IRS (IT/Customs) | Income Tax / Customs department. CBDT or CBIC career. |
| IRTS | Railway Traffic Service — railway operations management. |
| CSS | Central Secretariat Service — assistant section officers in ministries. |
| IDAS | Defence Accounts. |

Service allocation depends entirely on your final merit rank and reservation category. Top 50–80 ranks typically go to IAS. Ranks 80–200 often get IPS or IFS.

---

## Vacancy Breakdown 2026

| Category | Vacancies |
|---|---|
| General (UR) | ~396 |
| OBC | ~264 |
| SC | ~147 |
| ST | ~88 |
| EWS | ~84 |
| **Total** | **~979** |

---

## Eligibility

### Age
- **General / EWS:** 21–32 years (born August 2, 1993 to August 1, 2005)
- **OBC NCL:** up to 35 years
- **SC / ST:** up to 37 years
- **PwBD:** up to 42 years (UR)

### Attempts
- **General / EWS:** 6 attempts
- **OBC:** 9 attempts
- **SC / ST:** Unlimited up to age limit
- **PwBD:** 9 attempts (UR/OBC); unlimited for SC/ST PwBD

### Qualification
Any Bachelor's Degree. Science, Arts, Commerce, Engineering, Law, Medicine — all streams accepted. Final-year students may apply provisionally.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹100 |
| SC / ST / PwBD / Women | Nil |

---

## Exam Pattern

### Prelims — Paper I (GS)
100 questions × 2 marks = 200. Negative marking: −0.67. Topics: Modern India, Ancient/Medieval History, Geography, Polity, Economy, General Science, Environmental Ecology, Current Affairs (last 12 months).

### Prelims — Paper II (CSAT — qualifying)
80 questions × 2.5 marks = 200. Qualify with 66 marks (33%). Topics: Reading comprehension, Analytical reasoning, Logical reasoning, Basic numeracy and DI, Decision making. Not counted in merit — but a mandatory gate. Many candidates underestimate this and get cut.

### Mains
7 merit papers of 250 marks each = 1750 marks. Plus 2 qualifying papers (Indian language + English). The optional subject (48 choices available) accounts for 500 of the 1750 marks. Choose your optional wisely — it should be a subject you can write at post-graduation level depth.

### Interview
275 marks. Structured personality test — not a question-answer session. Board members probe your thinking, decision-making approach, and awareness of current issues. Your DAF (Detailed Application Form) is the interview script — fill it carefully and be prepared for every line.

---

## Preparation Strategy

Most successful first-attempt candidates spend 12–18 months. The biggest mistake: treating all sections equally. GS IV (Ethics) and Essay together account for 500 marks — more than any other paper — and are consistently underprepared.

NCERT (Class 6–12) is the starting point for GS I. After NCERT, subject-specific standard books: Laxmikanth for Polity, Ramesh Singh for Economy, GC Leong for Geography, Bipin Chandra for Modern India. These recommendations are stable — they don't change year to year.

Current affairs: The Hindu or Indian Express, daily, for the last 6–12 months before Prelims. Consolidate into topic-wise notes rather than reading passively.

For optional subject: join a test series for the optional starting 6 months before Mains. The quality of your optional answer writing distinguishes ranks in the 50–300 range.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Released | February 2026 |
| Application Closes | March 2026 |
| Prelims Exam | June 8, 2026 |
| Mains Exam | September 2026 |
| Interview | January–April 2027 |
| Final Result | May 2027 |

---

## Official Links

| Resource | Link |
|---|---|
| UPSC Official Site | [upsc.gov.in](https://upsc.gov.in/) |
| Apply Online | [upsconline.nic.in](https://upsconline.nic.in/) |
| CSE Syllabus | upsc.gov.in → Examinations → Civil Services |
`
},

// ─── 2. SBI PO 2026 ──────────────────────────────────────────────────────────
{
  slug: "sbi-po-2026",
  title: "SBI PO 2026 — Probationary Officer in State Bank of India",
  organization: "State Bank of India (SBI)",
  post_name: "Probationary Officer (PO) — Scale I",
  vacancies: 2000,
  eligibility: {
    age: "21–30 years as on April 1, 2026. OBC NCL: +3 yrs (up to 33). SC/ST: +5 yrs (up to 35). PwBD (UR): +10 yrs. Ex-Servicemen: +5 yrs.",
    education: "Bachelor's Degree in any discipline from a recognised university with minimum marks as per SBI notification. Degree must be complete — appearing candidates may apply if results declared before joining."
  },
  salary: "Starting Basic Pay: ₹41,960/month (CTC approximately ₹16–17 lakh per annum). In-hand take-home approximately ₹52,000–₹58,000/month after DA, HRA, Special Allowance, and other allowances. Perks: subsidised home/car/personal loan, group medical insurance, NPS pension, LFC.",
  application_fee: { general: "₹750", obc: "₹750", ews: "₹750", sc_st: "Nil", women: "Nil", ph: "Nil" },
  important_dates: { startDate: "2026-04-01", lastDate: "2026-04-21", examDate: "2026-06-01" },
  how_to_apply: `1. Visit sbi.co.in/careers → Current Openings → SBI PO 2026
2. Register with email and mobile number
3. Fill personal, educational, and communication details carefully
4. Upload scanned photo (50–100 KB JPEG) and signature (20–50 KB)
5. Pay ₹750 fee online (SC/ST/PwBD: Nil)
6. Submit and save registration number for future reference
7. Prelims Admit Card and Mains Admit Card downloaded from sbi.co.in`,
  selection_process: `**Stage 1 — Preliminary Exam (Online)**

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Quantitative Aptitude | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **60 min** |

Negative marking: 0.25 per wrong answer. Prelims only shortlists — marks don't count in final merit.

**Stage 2 — Mains Exam (Online)**

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning & Computer Aptitude | 45 | 60 | 60 min |
| Data Analysis & Interpretation | 35 | 60 | 45 min |
| General/Economy/Banking Awareness | 40 | 40 | 35 min |
| English Language | 35 | 40 | 40 min |
| **Objective Total** | **155** | **200** | **3 hrs** |
| **Descriptive** (Essay + Letter) | 2 | 50 | 30 min |

**Stage 3 — Group Exercise + Interview (50 marks total)**
Final merit: Mains (225 marks) + GE + Interview (50 marks).`,
  official_link: "https://www.sbi.co.in/",
  notification_link: "https://www.sbi.co.in/",
  apply_link: "https://www.sbi.co.in/",
  category: "banking",
  state: "all-india",
  is_active: true,
  description: "SBI PO 2026 recruitment for ~2,000 Probationary Officer vacancies in State Bank of India. Graduate candidates aged 21–30 years eligible. Three-stage selection: Prelims, Mains (with Descriptive), and Group Exercise + Interview. Starting CTC approximately ₹16–17 lakh per annum. Apply at sbi.co.in.",
  reading_time: "8 min read",
  last_date: "2026-04-21",
  qualification: "Bachelor's Degree in any discipline from a recognised university",
  employment_type: "FULL_TIME",
  content: `## What Is SBI PO?

SBI PO is the most prestigious banking exam in India, full stop. Not because SBI pays the most — it doesn't. But because it's the most competitive, the most respected, and because SBI is the largest bank in the country by a significant margin. If you clear SBI PO, you join an organisation that handles 22% of India's total banking assets.

As a Probationary Officer, you work on a 2-year probation where you rotate through different banking functions — retail lending, trade finance, foreign exchange, branch operations, credit. After confirmation, you're a permanent Scale I officer. The career path from there: Assistant Manager → Deputy Manager → Manager → Senior Manager → Chief Manager → AGM → DGM → GM → ED → MD & CEO.

Many SBI MDs and CEOs started as POs. It's a genuine career track, not just a job.

---

## Vacancy Details 2026

| Category | Approximate Share |
|---|---|
| UR | ~810 |
| OBC | ~540 |
| SC | ~300 |
| ST | ~150 |
| EWS | ~200 |
| **Total** | **~2,000** |

*SBI publishes exact category-wise and state-wise vacancy breakup in the official notification.*

---

## Eligibility

### Age (as on April 1, 2026)
- **General / EWS:** 21–30 years
- **OBC (NCL):** up to 33 years
- **SC / ST:** up to 35 years
- **PwBD (UR):** up to 40 years

### Qualification
Graduation in any discipline from a recognised university. Some cycles require minimum 60% marks — confirm from the official notification when it releases.

---

## Salary and Perks

| Component | Amount |
|---|---|
| Basic Pay (Entry) | ₹41,960/month |
| DA | Quarterly revision |
| HRA | City-based (8–12% of basic) |
| Special Allowance + Other | ~₹8,000–₹12,000/month |
| **Gross Monthly** | **~₹55,000–₹65,000/month** |

Additional: SBI staff get home loan at ~1% interest rate (massive benefit), car loan at subsidised rate, children's education allowance, and LFC (Leave Fare Concession). The real CTC including perks works out to ₹16–17 lakh annually.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹750 |
| SC / ST / PwBD | Nil |

---

## Exam Pattern

### Prelims (Screening Only)
English Language, Quantitative Aptitude, Reasoning Ability — 100 questions, 100 marks, 60 minutes. Individual time limits per section (20 min each). Negative marking: 0.25.

### Mains (Merit-Based)
Objective (200 marks, 3 hours) + Descriptive (50 marks, 30 minutes).
Descriptive paper: one Essay (250 words) + one Letter/Précis. This section catches candidates who prepare only for objective papers.

### Group Exercise + Interview (50 marks)
Group discussion on a current affairs topic (evaluated for communication, content, leadership) + Individual interview (assessed for banking knowledge, personality, current awareness).

---

## Syllabus Focus Areas

**Reasoning & Computer Aptitude (60 marks, 60 minutes):** Puzzles and seating arrangement dominate — typically 25–30 of the 45 questions. Blood relations, direction, coding-decoding, input-output, logical syllogisms, and basic computer concepts make up the rest. Practice 10 complex puzzle sets daily for 4 weeks.

**Data Analysis & Interpretation (60 marks, 45 minutes):** Data interpretation (bar, pie, table, line, caselet) + quadratic equations + miscellaneous Quant. Focus on DI accuracy — even 2 wrong answers in a set cost you 4+ marks.

**General/Economy/Banking Awareness (40 marks, 35 minutes):** RBI circulars, repo rate history, Basel norms, SARFAESI Act, Insolvency Code, SEBI regulations, government budget allocations, current banking mergers, and general economy news. Read daily banking news for at least 60 days before Mains.

**English Descriptive (50 marks, 30 minutes):** Essay and letter/précis. Practice writing a 250-word essay with an argument structure (intro → 3 body paragraphs → conclusion) in under 15 minutes. SBI evaluates vocabulary, grammar, and logical structure — not just content.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification | April 2026 |
| Application Closes | April 21, 2026 |
| Prelims | June 2026 |
| Mains | August 2026 |
| GE + Interview | October–November 2026 |
| Final Result | December 2026 |

---

## Official Links

| Resource | Link |
|---|---|
| SBI Careers | [sbi.co.in/careers](https://www.sbi.co.in/) |
| Apply Online | sbi.co.in → Careers → Current Openings |
`
},

// ─── 3. SBI Clerk 2026 ───────────────────────────────────────────────────────
{
  slug: "sbi-clerk-2026",
  title: "SBI Clerk 2026 — Junior Associate in State Bank of India",
  organization: "State Bank of India (SBI)",
  post_name: "Junior Associate (Customer Support & Sales)",
  vacancies: 14191,
  eligibility: {
    age: "20–28 years as on January 1, 2026. OBC NCL: +3 yrs. SC/ST: +5 yrs. PwBD (UR): +10 yrs. Ex-Servicemen: +3 yrs after deducting military service.",
    education: "Bachelor's Degree in any discipline from a recognised university. Proficiency in the official language of the state applied for is required."
  },
  salary: "Starting Basic Pay: ₹26,730/month + DA + HRA + other allowances. Total gross approximately ₹35,000–₹43,000/month depending on city. Staff loan benefits (home, car, personal loan at highly subsidised rates). Promotion to officer grade possible within 3–5 years via internal exam.",
  application_fee: { general: "₹750", obc: "₹750", ews: "₹750", sc_st: "Nil", women: "Nil", ph: "Nil" },
  important_dates: { startDate: "2025-11-17", lastDate: "2025-12-07", examDate: "2026-02-22" },
  how_to_apply: `Applications for SBI Clerk 2025-26 cycle are now closed (deadline was December 7, 2025). Exam is underway.

For future SBI Clerk cycles:
1. Visit sbi.co.in/careers → Current Openings → SBI Junior Associates
2. Register with email and mobile number
3. Select state and language proficiency carefully — posting is state-specific
4. Upload photo and signature, fill educational details
5. Pay ₹750 fee (SC/ST/PwBD: Nil)
6. Submit and save registration number`,
  selection_process: `**Stage 1 — Preliminary Exam**

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Numerical Ability | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| **Total** | **100** | **100** | **60 min** |

Negative marking: 0.25. Individual section time limits apply. Prelims only shortlists — marks don't count in final merit.

**Stage 2 — Mains Exam**

| Section | Questions | Marks | Time |
|---|---|---|---|
| General/Financial Awareness | 50 | 50 | 35 min |
| General English | 40 | 40 | 35 min |
| Quantitative Aptitude & DI | 50 | 50 | 45 min |
| Reasoning Ability & Computer Aptitude | 50 | 60 | 45 min |
| **Total** | **190** | **200** | **2 hrs 40 min** |

No interview — final selection based on Mains merit. Local Language Test (qualifying) before joining.`,
  official_link: "https://www.sbi.co.in/",
  notification_link: "https://www.sbi.co.in/",
  apply_link: "https://www.sbi.co.in/",
  category: "banking",
  state: "all-india",
  is_active: true,
  description: "SBI Clerk 2026 (Junior Associate) recruitment for 14,191 vacancies across State Bank of India branches. Graduate candidates aged 20–28 years eligible. Two-stage selection: Prelims and Mains (no interview). Posted state-wise based on local language proficiency. Apply at sbi.co.in.",
  reading_time: "7 min read",
  last_date: "2025-12-07",
  qualification: "Bachelor's Degree in any discipline from a recognised university",
  employment_type: "FULL_TIME",
  content: `## What Is SBI Clerk?

SBI Clerk (officially called Junior Associate — Customer Support & Sales) is a branch-level banking job in State Bank of India. At the counter, you handle account openings, deposits, withdrawals, DDs, passbook updates, and customer queries. Behind the scenes, you handle data entry, clearing, and basic banking operations.

It's not the most glamorous entry point into banking — but it's in India's largest bank, with full government benefits, NPS pension, staff loan rates that no private sector job can match (SBI home loans at ~1% for staff), and a clear promotion path. Many SBI officers today started as Clerks.

The posting is state-specific. You must have proficiency in the local language of the state you apply for. Apply in the state where you actually plan to work — your entire career in SBI's clerical cadre will likely stay within that state.

---

## Vacancy Details 2026

| Category | Vacancies |
|---|---|
| UR | ~5,750 |
| OBC | ~3,831 |
| SC | ~2,129 |
| ST | ~1,064 |
| EWS | ~1,417 |
| **Total** | **~14,191** |

*Exact state-wise and circle-wise vacancy breakup is in the official notification.*

---

## Eligibility

### Age (as on January 1, 2026)
- **General / EWS:** 20–28 years
- **OBC (NCL):** up to 31 years
- **SC / ST:** up to 33 years
- **PwBD (UR):** up to 38 years

### Language Requirement
You must be proficient in the official language of the state you're applying for. This is verified at the time of Local Language Test (LLT) — before final joining. Fail LLT and you're disqualified even after clearing Prelims and Mains.

---

## Salary

| Component | Amount |
|---|---|
| Basic Pay | ₹26,730/month |
| DA | ~₹13,000/month (revised quarterly) |
| HRA | ₹2,100–₹6,400/month (city-based) |
| Special Allowance + Other | ~₹3,500/month |
| **Gross Monthly** | **~₹35,000–₹43,000/month** |

After 3–4 years, appear for JAIIB and CAIIB certifications and internal promotion exams. Many Clerks promote to officer grade within 5–8 years.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹750 |
| SC / ST / PwBD | Nil |

---

## Exam Pattern

### Prelims
English, Numerical Ability, Reasoning — 100 questions, 100 marks, 60 minutes. Sectional timing enforced. Negative marking: 0.25. Prelims only qualifies you for Mains.

### Mains
GK/Financial Awareness, English, Quant & DI, Reasoning & Computer Aptitude — 190 questions, 200 marks, 160 minutes. No interview. Pure merit from Mains decides your rank and posting state.

**Financial/General Awareness is the differentiator.** Candidates who score 45+/50 here gain 5–10 marks over the rest. Read banking current affairs, RBI policy updates, and major government financial schemes daily for 6–8 weeks before Mains.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification (2025–26 cycle) | November 2025 |
| Application Closed | December 7, 2025 |
| Prelims | February 22, 2026 |
| Mains | April 2026 |
| LLT + Joining | June–August 2026 |

---

## Official Links

| Resource | Link |
|---|---|
| SBI Careers | [sbi.co.in](https://www.sbi.co.in/) |
| Apply (next cycle) | sbi.co.in → Careers → Current Openings |
`
},

// ─── 4. SSC GD Constable 2026 ─────────────────────────────────────────────────
{
  slug: "ssc-gd-constable-2026",
  title: "SSC GD Constable 2026 — BSF, CRPF, CISF, ITBP, SSB & NIA",
  organization: "Staff Selection Commission (SSC)",
  post_name: "General Duty (GD) Constable in BSF, CRPF, CISF, ITBP, SSB, Assam Rifles, NIA, SSF",
  vacancies: 39481,
  eligibility: {
    age: "18–23 years. SC/ST: up to 28 years. OBC NCL: up to 26 years. Ex-Servicemen: as per central govt rules. Children/dependents of victims of 1984 riots or communal riots 2002: up to 28 years.",
    education: "Matriculation (10th pass) from a recognised board. No graduation required."
  },
  salary: "Pay Level 3 — ₹21,700–₹69,100/month basic. Total in-hand approximately ₹32,000–₹45,000/month after DA, HRA, TA. Additional benefits: ration allowance, risk/hardship allowance (border postings), free uniform, CGHS medical, NPS pension, railway pass.",
  application_fee: { general: "₹100", obc: "₹100", ews: "₹100", sc_st: "Nil", women: "Nil", ph: "Nil" },
  important_dates: { startDate: "2026-09-01", lastDate: "2026-10-15", examDate: "2027-02-01" },
  how_to_apply: `Notification expected September–October 2026. Once released:
1. Visit ssc.gov.in → Apply → SSC GD Constable 2026
2. Register (one-time) if not already done
3. Fill personal and educational details
4. Upload photo and signature
5. Pay ₹100 fee (SC/ST/Women/Ex-Sm/PwBD: Nil)
6. Submit and save confirmation number
7. Select your preferred force and exam centre`,
  selection_process: `**Stage 1 — Computer Based Examination (CBE)**

| Subject | Questions | Marks |
|---|---|---|
| General Intelligence & Reasoning | 20 | 40 |
| General Knowledge & Awareness | 20 | 40 |
| Elementary Mathematics | 20 | 40 |
| English / Hindi | 20 | 40 |
| **Total** | **80** | **160** |

Duration: 60 minutes. Negative marking: 0.50 per wrong answer.

**Stage 2 — Physical Efficiency Test (PET) + Physical Standard Test (PST)**

| Event | Male | Female |
|---|---|---|
| Race | 5 km in 24 min | 1.6 km in 8.5 min |
| High Jump | 3 feet 6 inches | 3 feet |
| Long Jump | 11 feet | 9 feet |

Height: Male 170 cm (162.5 for SC/ST/OBC from hilly areas), Female 157 cm.

**Stage 3 — Medical Examination**
Vision standards, physical fitness, medical tests at designated hospitals.

**Stage 4 — Document Verification**`,
  official_link: "https://ssc.gov.in/",
  notification_link: "https://ssc.gov.in/",
  apply_link: "https://ssc.gov.in/",
  category: "ssc",
  state: "all-india",
  is_active: true,
  description: "SSC GD Constable 2026 recruitment for 39,481 vacancies in BSF, CRPF, CISF, ITBP, SSB, Assam Rifles, NIA, and SSF. 10th pass candidates aged 18–23 years eligible. Four-stage selection: CBT, PET/PST, Medical, and DV. Notification expected September–October 2026. Apply at ssc.gov.in.",
  reading_time: "7 min read",
  last_date: "2026-10-15",
  qualification: "Matriculation (10th pass) from a recognised board",
  employment_type: "FULL_TIME",
  content: `## What Is SSC GD Constable?

SSC GD Constable is the entry-level position in India's Central Armed Police Forces — the uniformed paramilitary services that guard borders, maintain internal security, and protect vital installations. The forces are BSF (Border Security Force), CRPF (Central Reserve Police Force), CISF (Central Industrial Security Force), ITBP (Indo-Tibetan Border Police), SSB (Sashastra Seema Bal), Assam Rifles, NIA (National Investigation Agency), and SSF (Special Security Force).

This is a 10th-pass-eligible government job with a real salary (not a stipend), full government benefits, and a structured career. If you want a uniformed career without waiting until graduation, SSC GD is the path.

The physical requirements are real — you'll serve in border areas, remote postings, and high-altitude terrain. Understand the lifestyle before you apply. Posting can be anywhere in India, including the far northeast, J&K, Ladakh, or central India's naxal-affected areas. The risk allowance exists because the risk is real.

---

## Force Allocation

| Force | Function | Posting Pattern |
|---|---|---|
| BSF | Border guarding with Bangladesh and Pakistan | Border areas, rural/remote |
| CRPF | Internal security, anti-naxal, VVIP security | All India |
| CISF | Airport security, nuclear/industrial security | Urban (airport-based mostly) |
| ITBP | India-China border, Himalayan terrain | High-altitude (Ladakh, Uttarakhand, HP) |
| SSB | India-Nepal and India-Bhutan border | Northeast, Bihar, UP border |
| Assam Rifles | Northeast India border and internal security | Northeast states |
| NIA | Counter-terrorism investigation support | HQ and field offices |
| SSF | Parliament and sensitive office security | Delhi-based mostly |

CISF is the most preferred choice for most candidates — city-based (airports, metro cities), AC working environment, no border deployment. Demand for CISF seats in merit lists is always higher than supply.

---

## Vacancy Details 2026

| Force | Vacancies |
|---|---|
| BSF | ~14,500 |
| CRPF | ~11,500 |
| CISF | ~7,000 |
| ITBP | ~2,500 |
| SSB | ~2,000 |
| Others (AR, NIA, SSF) | ~1,981 |
| **Total** | **~39,481** |

---

## Eligibility

### Age
- **General / EWS:** 18–23 years
- **OBC (NCL):** 18–26 years
- **SC / ST:** 18–28 years
- **Ex-Servicemen:** As per GoI rules

### Physical Standards

**Male:**
- Height: 170 cm (162.5 cm for SC/ST/OBC from hilly/tribal/specified areas)
- Chest: 80 cm (unexpanded) — 85 cm (expanded); 5 cm minimum expansion

**Female:**
- Height: 157 cm (152.5 cm for SC/ST/OBC from hilly/tribal/specified areas)
- Weight: Proportionate to height

---

## Salary

| Component | Amount |
|---|---|
| Basic Pay | ₹21,700/month |
| DA | ~₹10,500/month |
| HRA | ₹1,740–₹5,200/month (city-based) |
| RA/Risk Allowance | ₹1,800–₹5,200/month (posting-based) |
| **Gross Monthly** | **~₹32,000–₹45,000/month** |

Free accommodation at force campuses, ration/free meals at many postings, railway pass, and free uniforms. CGHS for medical. NPS pension after 10 years.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹100 |
| SC / ST / Women / Ex-Sm / PwBD | Nil |

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Expected | September–October 2026 |
| Application Closes | October 2026 |
| CBE (Stage 1) | February–March 2027 |
| PET/PST | After CBE result |
| Medical + DV | After PET/PST |

---

## Official Links

| Resource | Link |
|---|---|
| SSC Website | [ssc.gov.in](https://ssc.gov.in/) |
| Notifications | ssc.gov.in → Examinations → GD Constable |
`
},

// ─── 5. SSC MTS 2026 ─────────────────────────────────────────────────────────
{
  slug: "ssc-mts-2026",
  title: "SSC MTS 2026 — Multi-Tasking Staff & Havaldar in Central Govt",
  organization: "Staff Selection Commission (SSC)",
  post_name: "Multi-Tasking (Non-Technical) Staff (MTS) and Havaldar (CBIC & CBN)",
  vacancies: 8326,
  eligibility: {
    age: "MTS: 18–25 years. Havaldar: 18–27 years. OBC NCL: +3 yrs. SC/ST: +5 yrs. PwBD: +10 yrs. Ex-Servicemen: as per GoI rules. Age as on August 1, 2026.",
    education: "Matriculation (10th pass) from a recognised Board. No graduation required for any post under SSC MTS."
  },
  salary: "MTS: Pay Level 1 — ₹18,000–₹56,900/month basic. Total in-hand ₹25,000–₹32,000/month. Havaldar: Pay Level 2 — ₹19,900–₹63,200 basic. In-hand ₹28,000–₹38,000/month. CGHS medical, NPS pension, DA, HRA included.",
  application_fee: { general: "₹100", obc: "₹100", ews: "₹100", sc_st: "Nil", women: "Nil", ph: "Nil" },
  important_dates: { startDate: "2026-06-15", lastDate: "2026-07-15", examDate: "2026-10-01" },
  how_to_apply: `1. Visit ssc.gov.in → Apply → SSC MTS 2026
2. Register (one-time) using Aadhaar or valid ID if not already done
3. Fill personal and educational details, select post preference (MTS or Havaldar)
4. Upload photo and signature
5. Pay ₹100 fee (SC/ST/Women/Ex-Sm/PwBD: Nil)
6. Submit and print confirmation page`,
  selection_process: `**Tier 1 — Computer Based Examination**

| Session | Subject | Questions | Marks |
|---|---|---|---|
| Session I | Numerical and Mathematical Ability | 20 | 60 |
| Session I | Reasoning Ability & Problem Solving | 20 | 60 |
| Session II | General Awareness | 25 | 75 |
| Session II | English Language & Comprehension | 25 | 75 |
| **Total** | | **90** | **270** |

Duration: Session I — 45 min, Session II — 45 min (each has individual time). Negative marking: 1 mark per wrong answer.

**Tier 2 — Skill/Typing Test (Only for Havaldar posts — qualifying)**
Physical Standard Test for Havaldar: Height 157.5 cm (Male), 152 cm (Female). Chest (Male): 76–81 cm. Walking test as prescribed. Havaldar Tier 2 tests physical standard, not academic skills.`,
  official_link: "https://ssc.gov.in/",
  notification_link: "https://ssc.gov.in/",
  apply_link: "https://ssc.gov.in/",
  category: "ssc",
  state: "all-india",
  is_active: true,
  description: "SSC MTS 2026 recruitment for 8,326 Multi-Tasking Staff and Havaldar vacancies in central government offices and CBIC/CBN departments. 10th pass candidates aged 18–25 (MTS) and 18–27 (Havaldar) years eligible. Computer-based exam. Application fee ₹100. Notification expected mid-2026. Apply at ssc.gov.in.",
  reading_time: "6 min read",
  last_date: "2026-07-15",
  qualification: "Matriculation (10th pass) from a recognised Board",
  employment_type: "FULL_TIME",
  content: `## What Is SSC MTS?

SSC MTS is the entry-level central government job for 10th pass candidates. It's not a high-profile post — but it's a permanent, pensioned, central government job that lakhs of people compete for every year. The Multi-Tasking Staff post involves office maintenance work, supporting clerical staff, running errands between departments, operating basic office equipment, and maintaining files.

The Havaldar category under CBIC (Central Board of Indirect Taxes and Customs) and CBN (Customs & Border Narcotics) is a step above MTS — it involves cargo inspection, anti-smuggling support, and customs-related fieldwork. Havaldar has a higher age limit (27), physical standard requirements, and slightly better pay.

If you've passed 10th and want a central government job with security, CGHS medical, and a pension — SSC MTS is one of the most accessible paths.

---

## Post Details

| Post | Department | Pay Level |
|---|---|---|
| Multi-Tasking Staff (MTS) | Central Ministries, CBDT, CBIC, CBI, CAG, MEA, DOPT, and others | Level 1 |
| Havaldar | CBIC (Customs & Central Excise) and CBN | Level 2 |

Your final posting location depends on the post code and your preference.

---

## Eligibility

### Age (as on August 1, 2026)
- **MTS:** 18–25 years
- **Havaldar:** 18–27 years
- **OBC NCL:** +3 years
- **SC / ST:** +5 years
- **PwBD:** +10 years

### Education
10th pass from any recognised board. No graduation, diploma, or additional qualification needed.

---

## Salary

| Post | Pay Level | Basic Pay | Gross Monthly |
|---|---|---|---|
| MTS | Level 1 | ₹18,000 | ₹25,000–₹32,000 |
| Havaldar | Level 2 | ₹19,900 | ₹28,000–₹38,000 |

CGHS medical, DA, HRA, TA, and NPS pension are included. Posting in Delhi/NCT or other major cities comes with higher HRA — gross can be ₹35,000+ in metros.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹100 |
| SC / ST / Women / Ex-Sm / PwBD | Nil |

---

## Exam Pattern

**Session I (45 min):** Numerical and Mathematical Ability (20 Q × 3 marks), Reasoning Ability (20 Q × 3 marks). Negative marking: 1 mark per wrong answer.

**Session II (45 min):** General Awareness (25 Q × 3 marks), English Language (25 Q × 3 marks).

Total: 90 questions × 3 marks = 270 marks. No descriptive paper. The exam is straightforward — current affairs (last 6 months), basic maths (Class 10), basic English (grammar, vocabulary, simple reading), and reasoning.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Expected | June–July 2026 |
| Application Closes | July 2026 |
| Tier 1 Exam | October–November 2026 |
| Tier 2 (Havaldar PST) | After Tier 1 result |

---

## Official Links

| Resource | Link |
|---|---|
| SSC Website | [ssc.gov.in](https://ssc.gov.in/) |
| MTS Notifications | ssc.gov.in → Examinations → MTS |
`
},

// ─── 6. NDA & NA 2026 ────────────────────────────────────────────────────────
{
  slug: "nda-na-2026",
  title: "NDA & NA 2026 — National Defence Academy & Naval Academy Exam",
  organization: "Union Public Service Commission (UPSC)",
  post_name: "Officer Cadet — Indian Army (NDA), Indian Navy (NDA/NA), Indian Air Force (NDA)",
  vacancies: 406,
  eligibility: {
    age: "16½ to 19½ years on the first day of the month in which the course commences. NDA I 2026: born between January 2, 2007 and January 1, 2010. NDA II 2026: born between July 2, 2007 and July 1, 2010.",
    education: "12th pass (or appearing) from a recognised board. For Army wing: any subject. For Navy and Air Force wings: Physics and Mathematics are compulsory in 12th. For Naval Academy (10+2 Cadet Entry): Physics and Mathematics in 12th."
  },
  salary: "During training at NDA/IMA: ₹56,100/month stipend. After commissioning as Lieutenant: Pay Level 10 — ₹56,100/month basic + MSP (Military Service Pay) ₹15,500 + DA + HRA + various field/flying/technical allowances. Total in-hand as Lieutenant: ₹90,000–₹1,10,000/month.",
  application_fee: { general: "Nil", obc: "Nil", ews: "Nil", sc_st: "Nil", women: "Nil", ph: "Nil" },
  important_dates: { startDate: "2026-05-28", lastDate: "2026-06-17", examDate: "2026-09-14" },
  how_to_apply: `NDA II 2026 (September exam):
1. Visit upsconline.nic.in → Apply Online → NDA & NA Exam II 2026
2. Register and fill Part I: personal and educational details
3. Fill Part II: upload photo and signature, select exam centre
4. No fee required — submit directly
5. Admit Card available on upsconline.nic.in before exam
6. Written exam → SSB Interview (if cleared) → Medical`,
  selection_process: `**Stage 1 — Written Exam (UPSC-conducted)**

| Paper | Subject | Marks | Duration |
|---|---|---|---|
| Paper I | Mathematics | 300 | 2.5 hours |
| Paper II | General Ability Test (GAT) | 600 | 2.5 hours |
| **Total** | | **900** | **5 hours** |

GAT covers: English (200 marks), GK/Science/History/Geography/Polity/Current Affairs (400 marks). Negative marking: 1/3 of marks per wrong answer.

**Stage 2 — Services Selection Board (SSB) Interview**
5-day process at SSB boards in Allahabad, Bhopal, Bangalore, Kapurthala:
- Day 1: Officer Intelligence Rating (OIR) + Picture Perception and Description Test (PPDT)
- Days 2–4: Psychology tests (TAT, WAT, SRT, Self-Description)
- Days 2–4: Group tasks (GTO tasks: group discussion, group planning exercise, PGT, FGT, HGT, command task, lecturette)
- Day 5: Personal Interview + Conference
SSB marks are out of 900. Total: Written (900) + SSB (900) = 1800.

**Stage 3 — Medical Examination**
Comprehensive medical at designated military hospitals. Vision requirements: 6/6 (correctable to 6/6 for Army/Navy; no glasses at all for Air Force pilot branch).`,
  official_link: "https://upsc.gov.in/",
  notification_link: "https://upsc.gov.in/",
  apply_link: "https://upsconline.nic.in/",
  category: "defence",
  state: "all-india",
  is_active: true,
  description: "NDA & NA 2026 exam conducted by UPSC for 406 vacancies in Indian Army, Navy, and Air Force wings at National Defence Academy (Khadakwasla) and Naval Academy (Ezhimala). 12th pass / appearing candidates aged 16½–19½ years eligible. Physics & Maths required for Navy and Air Force. No application fee. Apply at upsconline.nic.in.",
  reading_time: "8 min read",
  last_date: "2026-06-17",
  qualification: "12th pass or appearing from a recognised board (Physics + Maths required for Navy/Air Force wings)",
  employment_type: "FULL_TIME",
  content: `## What Is NDA?

NDA — the National Defence Academy — is India's joint services military training academy in Khadakwasla, Pune. If you want to become an officer in the Indian Army, Navy, or Air Force straight after 12th class — without going through a college degree first — NDA is the path.

You join the NDA as a cadet, spend 3 years there (getting a degree from Jawaharlal Nehru University simultaneously), and then move to the respective service academy — Indian Military Academy (IMA) for Army, Naval Academy (Ezhimala) for Navy, and Air Force Academy (Dundigal) for Air Force — for a further 1–1.5 years of specialized training. By the time you're commissioned as a Lieutenant/Sub-Lieutenant, you're 21–22 years old with a degree and an officer's rank.

The SSB (Services Selection Board) interview is what most candidates find hardest. Written exam scores matter — but your SSB performance decides whether you're officer material. SSB tests personality, leadership potential, communication, and mental toughness across 5 days. The pass rate at SSB is roughly 2–3 per batch of 12–15 candidates recommended.

---

## Wings and Vacancies

| Wing | Academy | Vacancies (approx per cycle) |
|---|---|---|
| Army | NDA, then IMA | ~208 |
| Navy | NDA, then Naval Academy | ~42 |
| Air Force | NDA, then AFA | ~120 |
| Naval Academy (10+2 Cadet Entry) | Ezhimala | ~36 |
| **Total** | | **~406** |

Two exams per year: NDA I (April exam, July course start) and NDA II (September exam, January course start).

---

## Eligibility

### Age
- **NDA I 2026:** Born between January 2, 2007 and January 1, 2010
- **NDA II 2026:** Born between July 2, 2007 and July 1, 2010

This means you must be in 12th class or just completed 12th when you apply.

### Educational Qualification
- **Army Wing:** 12th pass in any stream from a recognised board
- **Navy Wing:** 12th with Physics and Mathematics
- **Air Force Wing:** 12th with Physics and Mathematics
- **Naval Academy (10+2 Cadet Entry):** 12th with Physics and Mathematics

Note: Candidates appearing in 12th Class Board exams may also apply — you can appear for the written exam before results, and produce marksheet if called for SSB.

### Physical Standards
No spectacles or contact lenses for Air Force (flying branch). Army and Navy have more lenient vision standards (glasses allowed if within limits). Full medical done after SSB.

---

## Exam Pattern

### Mathematics Paper (300 marks, 2.5 hours)
Algebra, Matrices, Determinants, Trigonometry, 2D/3D Geometry, Differential Calculus, Integral Calculus, Probability, Statistics, Vector Algebra. Class 11–12 NCERT Mathematics covers the core of the syllabus. Practice speed — 120 questions in 150 minutes means 75 seconds per question.

### General Ability Test — GAT (600 marks, 2.5 hours)
- **English (200 marks):** Grammar, vocabulary, comprehension, spotting errors, fill in the blanks
- **General Knowledge (400 marks):** Physics, Chemistry, Biology, History, Geography, Indian Polity, Current Affairs

Negative marking: 1/3 of marks per wrong answer.

---

## SSB Interview — What To Expect

The 5-day SSB is unlike any other selection process:
- **Day 1:** PPDT (Picture Perception Test) — narrate a story from an ambiguous image, then group discussion
- **Days 2–4:** TAT (Thematic Apperception Test), WAT (Word Association Test), SRT (Situation Reaction Test), GTO tasks (group and individual outdoor tasks), and Personal Interview
- **Day 5:** Conference with board

What SSB evaluates: Officer Like Qualities (OLQs) — courage, communication, decisiveness, integrity, cooperativeness. There's no trick to faking this — examiners are experienced officers who've seen thousands of candidates. Be yourself, be consistent.

---

## Salary After Commissioning

| Rank | Basic Pay | MSP | Gross Approx |
|---|---|---|---|
| Lieutenant (commissioned) | ₹56,100 | ₹15,500 | ₹90,000–₹1,10,000/month |
| Captain (after ~2 years) | ₹61,300 | ₹15,500 | ₹1,00,000–₹1,20,000/month |

Additionally: free accommodation (officers' mess), free ration, official vehicle, CSD canteen, ECHS medical for life (including family), free air travel in service, and pension after 20 years.

---

## Important Dates 2026 (NDA II)

| Event | Date |
|---|---|
| Notification Released | May 2026 |
| Application Opens | May 28, 2026 |
| Application Closes | June 17, 2026 |
| Written Exam | September 14, 2026 |
| SSB Interviews | October 2026 onwards |
| Course Commencement | January 2027 |

---

## Official Links

| Resource | Link |
|---|---|
| UPSC Website | [upsc.gov.in](https://upsc.gov.in/) |
| Apply Online | [upsconline.nic.in](https://upsconline.nic.in/) |
| NDA Syllabus | upsc.gov.in → Examinations → NDA/NA |
`
},

// ─── 7. RBI Grade B 2026 ─────────────────────────────────────────────────────
{
  slug: "rbi-grade-b-2026",
  title: "RBI Grade B 2026 — Officer in Reserve Bank of India",
  organization: "Reserve Bank of India (RBI)",
  post_name: "Officer in Grade B (Direct Recruit) — General, DEPR (Economic & Policy Research), DSIM (Statistics & Information Management)",
  vacancies: 322,
  eligibility: {
    age: "21–30 years as on June 1, 2026. OBC NCL: up to 33 years. SC/ST: up to 35 years. PwBD (UR): up to 40 years. DEPR/DSIM posts have different upper age limits — check notification.",
    education: "General: Bachelor's Degree with minimum 60% marks (50% for SC/ST/PwBD). DEPR: Master's in Economics/Econometrics/Statistics with 55%. DSIM: Master's in Statistics/Mathematical Statistics/OR with 55%."
  },
  salary: "RBI Grade B Officer starting pay: ₹55,000/month basic. Total emoluments (including DA, HRA, CCA) approximately ₹1.25–₹1.50 lakh/month. RBI staff also get staff quarters in major cities, subsidised meals, interest-free staff loans, and LTC. One of the best salary packages in banking at the officer entry level.",
  application_fee: { general: "₹850", obc: "₹850", ews: "₹850", sc_st: "₹100", women: "₹850", ph: "₹100" },
  important_dates: { startDate: "2026-06-01", lastDate: "2026-06-21", examDate: "2026-07-27" },
  how_to_apply: `1. Visit opportunities.rbi.org.in → Recruitment → Grade B DR 2026
2. Register with email and mobile number
3. Fill personal, educational, and work experience details
4. Select post category (General / DEPR / DSIM)
5. Upload photo and signature
6. Pay ₹850 fee (SC/ST/PwBD: ₹100)
7. Submit and keep application number
8. Phase I Admit Card downloaded from opportunities.rbi.org.in`,
  selection_process: `**Phase I — Online Screening (200 marks)**

| Section | Questions | Marks |
|---|---|---|
| General Awareness | 80 | 80 |
| English | 30 | 30 |
| Quantitative Aptitude | 30 | 30 |
| Reasoning | 60 | 60 |
| **Total** | **200** | **200** |

Duration: 2 hours. Negative marking: 0.25 per wrong answer. Shortlists for Phase II.

**Phase II — Descriptive + Objective (300 marks)**

| Paper | Marks | Duration |
|---|---|---|
| Paper I: Economic & Social Issues + Finance & Management | 100 | 90 min (descriptive) |
| Paper II: English Writing Skills (Essay + Précis + Comprehension) | 100 | 90 min |
| Paper III: Finance & Management (MCQ) | 100 | 90 min |

**Phase III — Interview (75 marks)**
Final merit = Phase II (300) + Interview (75) = 375 marks.`,
  official_link: "https://www.rbi.org.in/",
  notification_link: "https://opportunities.rbi.org.in/",
  apply_link: "https://opportunities.rbi.org.in/",
  category: "banking",
  state: "all-india",
  is_active: true,
  description: "RBI Grade B 2026 Direct Recruitment for ~322 Officer vacancies in General, DEPR (Economics), and DSIM (Statistics) streams. Bachelor's with 60% marks required. Age 21–30 years. Three-phase selection. One of the most coveted banking jobs with starting emoluments of ₹1.25 lakh/month. Apply at opportunities.rbi.org.in.",
  reading_time: "8 min read",
  last_date: "2026-06-21",
  qualification: "Bachelor's Degree with minimum 60% marks from a recognised university (50% for SC/ST/PwBD)",
  employment_type: "FULL_TIME",
  content: `## What Is RBI Grade B?

RBI Grade B is the entry point for becoming an officer at the Reserve Bank of India — the central bank that regulates India's entire banking system, manages the rupee, controls monetary policy, and supervises every bank in the country. It's not just a job at a bank. It's a job at the institution that governs banks.

Grade B officers work on monetary policy analysis, banking supervision and regulation, foreign exchange management, government securities operations, consumer protection, currency management, and research. The work is intellectually substantive in a way that most banking jobs aren't.

The competition is extremely intense. Roughly 2–3 lakh candidates apply. Around 35,000 clear Phase I and sit Phase II. About 1,000 are called for interviews. And roughly 300 make the final cut. The difficulty is not just the numbers — Phase II is a genuinely hard descriptive exam that tests economic understanding and English writing ability at a post-graduate level.

---

## Streams Available

| Stream | Focus | Minimum Qualification |
|---|---|---|
| General | Banking regulation, supervision, monetary operations, HR | Bachelor's with 60% |
| DEPR (Economic & Policy Research) | Research, monetary policy analysis, reports | Master's in Economics/Econometrics with 55% |
| DSIM (Statistics & Info Management) | Data, statistical analysis, reporting | Master's in Statistics/Maths with 55% |

Most candidates appear for General stream. DEPR and DSIM are specialist streams with lower vacancies.

---

## Vacancy Breakdown 2026

| Category | Vacancies |
|---|---|
| General | ~260 |
| DEPR | ~32 |
| DSIM | ~30 |
| **Total** | **~322** |

---

## Eligibility

### Age (as on June 1, 2026)
- **General / EWS:** 21–30 years
- **OBC (NCL):** up to 33 years
- **SC / ST:** up to 35 years
- **PwBD (UR):** up to 40 years

### Education
- **General stream:** Bachelor's in any discipline with minimum 60% aggregate marks (50% for SC/ST/PwBD)
- **DEPR:** Master's in Economics / Econometrics / Statistics with 55%
- **DSIM:** Master's in Statistics / Mathematical Statistics / Operations Research with 55%

---

## Salary and Benefits

| Component | Amount |
|---|---|
| Basic Pay | ₹55,000/month |
| DA | ~₹32,000/month |
| HRA / Leased Accommodation | ₹8,000–₹12,000/month or staff quarters |
| CCA + Other Allowances | ~₹10,000/month |
| **Gross Monthly** | **~₹1,05,000–₹1,25,000/month** |

Additional benefits: interest-free/subsidised staff loans, LTC, medical expenses reimbursement, pension (defined benefit), concessional canteen, and a structured career in one of India's most prestigious institutions.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹850 |
| SC / ST / PwBD / Ex-Sm | ₹100 |

---

## Phase II — The Real Challenge

Phase II is what separates RBI Grade B from other banking exams. It's a 3-paper exam lasting 4.5 hours:

**Paper I (ESI + Finance & Management — 100 marks, 90 min descriptive):**
Economic and Social Issues: Indian economy, growth, development, agriculture, industry, services sector, fiscal policy, monetary policy, inflation, balance of payments, poverty, social sector. Finance: financial markets, banking system, capital markets, NBFCs, regulation, Basel norms. Management: organizational behaviour, leadership, motivation, HR management.

This is not MCQ. You write 200–300 word answers. Clarity, structure, and accuracy all matter.

**Paper II (English — 100 marks, 90 min):**
Essay (500 words), Précis (reduce a passage to 1/3rd), Reading comprehension. Your vocabulary, sentence structure, and ability to write a coherent argument are tested.

**Paper III (Finance & Management — 100 marks MCQ, 90 min):**
Same topics as Paper I but objective format — faster, but requires breadth of knowledge.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification | June 2026 |
| Application Closes | June 21, 2026 |
| Phase I (Online Screening) | July 27, 2026 |
| Phase II | August–September 2026 |
| Interview | October–November 2026 |
| Final Result | December 2026 |

---

## Official Links

| Resource | Link |
|---|---|
| RBI Website | [rbi.org.in](https://www.rbi.org.in/) |
| RBI Opportunities | [opportunities.rbi.org.in](https://opportunities.rbi.org.in/) |
`
},

// ─── 8. RRB NTPC 2026 ────────────────────────────────────────────────────────
{
  slug: "rrb-ntpc-2026",
  title: "RRB NTPC 2026 — Station Master, Goods Guard, Junior Clerk & More",
  organization: "Railway Recruitment Boards (RRBs), Ministry of Railways",
  post_name: "Station Master, Goods Guard, Senior Commercial cum Ticket Clerk, Junior Clerk cum Typist, Accounts Clerk cum Typist, Junior Time Keeper, Trains Clerk, Traffic Assistant, Commercial Apprentice",
  vacancies: 11558,
  eligibility: {
    age: "Graduate posts (Station Master, Goods Guard, etc.): 18–33 years. 12th Pass posts (Junior Clerk, JTK, etc.): 18–30 years. OBC NCL: +3 yrs. SC/ST: +5 yrs. Ex-Servicemen: as per rules. Age as on notification date.",
    education: "12th Pass for lower graduate posts (Junior Clerk, JTK, Trains Clerk). Bachelor's Degree for Graduate posts (Station Master, Goods Guard, Commercial Apprentice, Senior Commercial cum Ticket Clerk, Traffic Assistant)."
  },
  salary: "Graduate Posts (Station Master, Goods Guard): Pay Level 5–6 — ₹29,200–₹35,400 basic. 12th Pass Posts (Junior Clerk, JTK): Pay Level 2–4 — ₹19,900–₹25,500 basic. Running Allowance (for Goods Guard): adds ₹8,000–₹12,000/month. Total in-hand ₹30,000–₹65,000 depending on post and city.",
  application_fee: { general: "₹500", obc: "₹500", ews: "₹500", sc_st: "₹250", women: "₹250", ph: "₹250" },
  important_dates: { startDate: "2024-09-14", lastDate: "2024-10-13", examDate: "2025-09-01" },
  how_to_apply: `The current RRB NTPC cycle (CEN 05/2024) notification was released in September 2024. The next new cycle (RRB NTPC 2026) notification is expected in late 2026 or 2027.

For the ongoing CEN 05/2024:
- CBT Stage 1 results released on indianrailways.gov.in / rrbapply.gov.in
- Stage 2 CBT scheduled from late 2025

For future NTPC notifications:
1. Visit rrbapply.gov.in → Notifications
2. Apply through the common portal — one application per RRB zone
3. Pay fee online (partially refunded after Stage 1 if you appear)`,
  selection_process: `**Stage 1 — CBT (Computer Based Test) — Screening Only**

| Subject | Questions | Marks |
|---|---|---|
| Mathematics | 30 | 30 |
| General Intelligence & Reasoning | 30 | 30 |
| General Awareness | 40 | 40 |
| **Total** | **100** | **100** |

Duration: 90 minutes. Negative marking: 1/3 mark. Stage 1 marks do NOT count in final merit — shortlists only.

**Stage 2 — CBT (Computer Based Test) — Merit-Based**

| Subject | Questions | Marks |
|---|---|---|
| Mathematics | 35 | 35 |
| General Intelligence & Reasoning | 35 | 35 |
| General Awareness | 50 | 50 |
| **Total** | **120** | **120** |

Duration: 90 minutes. Negative marking: 1/3 mark.

**Stage 3 — Typing Skill Test / CBAT**
Junior Clerk cum Typist: 30 WPM English / 25 WPM Hindi (qualifying). Station Master: Computer-Based Aptitude Test (CBAT) — 5 batteries, minimum T-score 42 in each.

**Stage 4 — Document Verification + Medical**`,
  official_link: "https://www.indianrailways.gov.in/",
  notification_link: "https://www.rrbapply.gov.in/",
  apply_link: "https://www.rrbapply.gov.in/",
  category: "railway",
  state: "all-india",
  is_active: true,
  description: "RRB NTPC 2026 recruitment for 11,558 posts including Station Master, Goods Guard, Senior Commercial cum Ticket Clerk, Junior Clerk cum Typist, Junior Time Keeper, and others in Indian Railways. 12th pass and graduate candidates aged 18–33 years eligible based on post. Apply at rrbapply.gov.in.",
  reading_time: "8 min read",
  last_date: "2024-10-13",
  qualification: "12th Pass (for lower posts) or Bachelor's Degree (for graduate posts) from a recognised board/university",
  employment_type: "FULL_TIME",
  content: `## What Is RRB NTPC?

RRB NTPC (Non-Technical Popular Categories) is one of the largest railway recruitment drives in India. It fills two types of positions: graduate-level posts like Station Master, Goods Guard, and Commercial Apprentice — and 12th-pass level posts like Junior Clerk cum Typist, Junior Time Keeper, and Trains Clerk.

This is not just a desk job in an office. Station Masters manage entire railway stations — train movements, signal operations, passenger safety, platform coordination. Goods Guards travel with freight trains. The work is field-based and operationally important.

The current cycle (CEN 05/2024) covers 11,558 vacancies across all 21 RRBs. If you've already applied for the current cycle, check results at rrbapply.gov.in. A new NTPC cycle is expected in 2026–2027 as Railways continues to expand.

---

## Post Details

| Post | Category | Qualification | Pay Level |
|---|---|---|---|
| Station Master | Graduate | Degree | Level 6 |
| Goods Guard | Graduate | Degree | Level 5 |
| Senior Commercial cum Ticket Clerk | Graduate | Degree | Level 5 |
| Commercial Apprentice | Graduate | Degree | Level 6 |
| Traffic Assistant | Graduate | Degree | Level 4 |
| Junior Clerk cum Typist | 12th Pass | 12+2 | Level 2 |
| Accounts Clerk cum Typist | 12th Pass | 12+2 | Level 2 |
| Junior Time Keeper | 12th Pass | 12+2 | Level 2 |
| Trains Clerk | 12th Pass | 12+2 | Level 2 |

---

## Eligibility

### Age
- **Graduate Posts:** 18–33 years
- **12th Pass Posts:** 18–30 years
- **OBC NCL:** +3 years
- **SC / ST:** +5 years

### Qualification
Graduate posts require a Bachelor's Degree in any discipline. 12th pass posts require 12+2 from any recognised board. Some posts additionally require typing speed — check the post-specific requirement in the official notification.

---

## Application Fee

| Category | Fee | Refund after Stage 1 |
|---|---|---|
| General / OBC / EWS | ₹500 | ₹400 refunded |
| SC / ST / Ex-Sm / Women / Minority | ₹250 | ₹250 refunded |

Effectively free if you appear for Stage 1.

---

## Salary

| Post | Pay Level | Starting Basic | Approx Gross |
|---|---|---|---|
| Station Master | Level 6 | ₹35,400 | ₹55,000–₹72,000/month |
| Goods Guard | Level 5 | ₹29,200 | ₹45,000–₹60,000/month + running allowance |
| Junior Clerk / JTK | Level 2 | ₹19,900 | ₹30,000–₹40,000/month |

Running allowance for Goods Guard adds ₹8,000–₹15,000/month based on km covered. Railway pass (free travel on Indian Railways), subsidised canteen, and NPS pension are standard.

---

## Exam Pattern — Stage 2 (Merit-Based)

**General Awareness (50 marks):** This section is the differentiator. Indian Railways current affairs (new train launches, rail budget, stations, route upgrades), general science, computer awareness, environment, culture, and sports are all tested. Railway-specific GK is essential.

**Mathematics (35 marks):** Number series, percentage, ratio, profit/loss, time-speed-distance, SI/CI, mensuration. Standard difficulty — 10th class level. Accuracy matters more than speed here.

**Reasoning (35 marks):** Analogies, coding-decoding, syllogisms, Venn diagrams, series, direction problems. Practice for 90-second-per-question pace.

---

## Important Dates

| Event | Date |
|---|---|
| Current Cycle (CEN 05/2024) Notification | September 14, 2024 |
| Application Closed | October 13, 2024 |
| Stage 1 CBT | 2025 (ongoing) |
| Next New NTPC Cycle | Expected late 2026 or 2027 |

---

## Official Links

| Resource | Link |
|---|---|
| Application Portal | [rrbapply.gov.in](https://www.rrbapply.gov.in/) |
| Railway Recruitment Board Site | [indianrailways.gov.in](https://www.indianrailways.gov.in/) |
`
},

];

console.log(`\nInserting ${jobs.length} jobs (Batch 1 — Central Govt)...\n`);
let success = 0, failed = 0;
for (const job of jobs) {
  const { data, error } = await supabase.from("jobs").insert([job]).select("id, slug").single();
  if (error) {
    console.error(`❌ FAILED: ${job.slug} — ${error.message}`);
    failed++;
  } else {
    console.log(`✅ ${job.slug}`);
    success++;
  }
}
console.log(`\n✅ Inserted: ${success} | ❌ Failed: ${failed}`);
console.log(`📊 Total now: 18 + ${success} = ${18 + success} active jobs`);
