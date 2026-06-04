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

  // ─── 1. KPSC KAS 2026 ────────────────────────────────────────────────────────
  {
    slug: "kpsc-kas-2026",
    title: "KPSC KAS 2026 — Karnataka Administrative Service Recruitment",
    organization: "Karnataka Public Service Commission (KPSC)",
    post_name: "Gazetted Probationers — Karnataka Administrative Service (KAS), Karnataka Police Service (KPS), Karnataka Finance Service, Assistant Commercial Tax Officer, and other Group A/B posts",
    vacancies: 215,
    eligibility: {
      age: "21–35 years for General. OBC +3 yrs (max 38), SC/ST/Cat-I +5 yrs (max 40), Ex-Servicemen as per Karnataka Govt rules. Karnataka domicile required.",
      education: "Bachelor's Degree from a recognised university. Kannada language proficiency required (tested in examination)."
    },
    salary: "Pay Level 8–10 (Karnataka pay scales) — ₹41,800–₹1,32,300/month basic + DA + HRA + state allowances. KAS Officer: ₹56,100 basic + allowances, total ~₹80,000–₹1,00,000/month gross.",
    application_fee: { general: "₹600", obc: "₹300", ews: "₹300", sc_st: "₹300", women: "₹300", ph: "₹300" },
    important_dates: {
      startDate: "2026-03-01",
      lastDate: "2026-04-01",
      examDate: "2026-07-05"
    },
    how_to_apply: `1. Visit the KPSC official website: https://kpsc.kar.nic.in/
2. Click "Apply Online" → "Gazetted Probationers 2026"
3. Register with a valid email and mobile number
4. Fill the application form — personal details, educational qualification, post preferences, community details
5. Upload photo and signature as per specifications
6. Pay application fee via Net Banking / UPI / Debit / Credit Card (Online)
   OR at nearest e-Seva / Bangalore One centre (Offline)
7. SC/ST/Category-I/OBC/Women/PwBD: Reduced fee
8. Submit and download the confirmation receipt
9. Admit Card released on kpsc.kar.nic.in before exam`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| Paper I: General Studies | 200 | 2 hours |
| Paper II: General Kannada & General English | 100 | 1 hour |
| **Total** | **300** | **3 hours** |

No negative marking. Qualifying — marks not counted in final merit.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: General Kannada | 150 |
| Paper II: General English | 150 |
| Paper III: General Studies (Indian History, Polity, Economy) | 250 |
| Paper IV: General Studies (Karnataka History, Economy, Science) | 250 |
| Paper V: Optional Subject Paper I | 250 |
| Paper VI: Optional Subject Paper II | 250 |
| **Total** | **1,300** |

**Stage 3 — Personality Test (Viva Voce)**
100 marks. For all post codes under KAS/KPS recruitment.`,
    official_link: "https://kpsc.kar.nic.in/",
    notification_link: "https://kpsc.kar.nic.in/",
    apply_link: "https://kpsc.kar.nic.in/",
    category: "state-psc",
    state: "karnataka",
    is_active: true,
    description: "KPSC KAS 2026 (Gazetted Probationers) recruitment for 215 Group A and B posts in Karnataka state services — KAS, KPS, Karnataka Finance Service, and others. Graduate candidates aged 21–35 years with Karnataka domicile eligible. Three-stage selection: Prelims, Mains, and Viva Voce. Apply at kpsc.kar.nic.in.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-04-01",
    qualification: "Bachelor's Degree from any recognised university. Karnataka domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is KPSC KAS?

KPSC Gazetted Probationers (commonly called KAS — Karnataka Administrative Service) is the state civil services examination conducted by the Karnataka Public Service Commission. It is the gateway to Group A and Group B gazetted posts in Karnataka state government.

KAS officers work as Deputy Commissioner (after promotion), Assistant Commissioner, Commercial Tax Officer, and in various administrative roles across Karnataka's 31 districts.

---

## Posts Offered

| Post | Service |
|---|---|
| Gazetted Probationer (KAS) | Karnataka Administrative Service |
| Gazetted Probationer (KPS) | Karnataka Police Service |
| Assistant Director of Treasuries | Karnataka Finance Service |
| Assistant Commercial Tax Officer | Commercial Tax |
| Tahsildar | Revenue |
| Inspector of Labour | Labour |
| Assistant Superintendent of Schools | Education |
| Other Group A/B Posts | Various Depts |

---

## Eligibility

### Age Limit
- **General/EWS:** 21–35 years
- **OBC (Cat II-A, II-B, III-A, III-B):** Up to 38 years
- **SC/ST/Cat-I:** Up to 40 years

### Educational Qualification
- Bachelor's Degree from any recognised university
- Kannada proficiency (reading, writing, spoken) is required and tested in the examination

---

## Exam Pattern

### Prelims (Objective, Qualifying)

| Paper | Marks |
|---|---|
| GS Paper I: History, Polity, Economy, Science, Geography, Current Affairs | 200 |
| Paper II: General Kannada + General English | 100 |

No negative marking. Only for shortlisting Mains candidates.

### Mains (Descriptive, Merit)

| Paper | Marks |
|---|---|
| General Kannada | 150 |
| General English | 150 |
| GS III: Indian History, Indian Polity, Indian Economy, Geography | 250 |
| GS IV: Karnataka History, Karnataka Economy, Science & Tech, Current Affairs | 250 |
| Optional Paper I | 250 |
| Optional Paper II | 250 |
| **Total** | **1,300** |

### Viva Voce (Interview)
100 marks.

Final merit = Mains (1,300) + Interview (100) = 1,400 marks.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | March 1, 2026 |
| **Last Date to Apply** | **April 1, 2026** |
| Prelims Exam | July 5, 2026 |
| Mains Exam | November 2026 (expected) |
| Interview | February–March 2027 (expected) |

---

## Preparation Strategy

**Karnataka-specific content is decisive:** KPSC Mains Paper IV is entirely Karnataka-focused — Kannada literature (Pampa, Ranna, Ponnanna, modern poets), Veerashaiva/Lingayat movement, Mysore Kingdom, Hyder Ali and Tipu Sultan, Karnataka economy (silk, sandalwood, IT in Bengaluru), rivers (Cauvery, Krishna, Tungabhadra), districts and administration. Prepare this with Karnataka-specific books.

**Kannada Papers:** Both Prelims and Mains test Kannada. Grammar, comprehension, essay, and précis are the formats. This is manageable for native Kannada speakers — practice formal writing style.

**Optional Subject:** Choose based on graduation — familiarity matters most. History, Political Science, Sociology, and Economics are most popular.

---

## Official Links

| Resource | Link |
|---|---|
| KPSC Website | [kpsc.kar.nic.in](https://kpsc.kar.nic.in/) |
| Apply Online | [kpsc.kar.nic.in](https://kpsc.kar.nic.in/) |
`
  },

  // ─── 2. APPSC Group 2 2026 ────────────────────────────────────────────────────
  {
    slug: "appsc-group-2-2026",
    title: "APPSC Group 2 2026 — Andhra Pradesh State Services",
    organization: "Andhra Pradesh Public Service Commission (APPSC)",
    post_name: "Assistant Section Officer (ASO), Junior Assistant, Revenue Divisional Officer (RDO), Mandal Revenue Inspector, Municipal Commissioner Grade III, and other Group 2 posts",
    vacancies: 783,
    eligibility: {
      age: "18–42 years for most posts. Age relaxation: BC +5 yrs, SC/ST +10 yrs, PwBD +10 yrs, Ex-Servicemen as per AP Govt rules. AP domicile (nativity) required.",
      education: "Bachelor's Degree from a recognised university. Telugu language proficiency required."
    },
    salary: "Pay Level 7–10 (Andhra Pradesh revised pay scales) — ₹37,100–₹1,17,800/month basic + DA + HRA + AP state allowances. Revenue Divisional Officer: ~₹55,000–₹70,000/month gross. ASO/Mandal Revenue Inspector: ~₹40,000–₹52,000/month gross.",
    application_fee: { general: "₹250", obc: "₹250", ews: "₹250", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-02-15",
      lastDate: "2026-03-15",
      examDate: "2026-06-21"
    },
    how_to_apply: `1. Visit the APPSC official website: https://psc.ap.gov.in/
2. Click "Apply Online" for "Group 2 Services 2026"
3. Register using your AP state credentials (CFMS ID or one-time registration)
4. Fill the online application — personal details, educational qualification, post preferences, community
5. Upload photo and signature as per specifications
6. Pay fee via AP Payment Gateway (Net Banking / Debit Card / Credit Card / UPI)
7. SC/ST/PwBD/Women candidates: Fee exempted
8. Download and print the application confirmation
9. Admit Card released on psc.ap.gov.in before Prelims`,
    selection_process: `**Stage 1 — Screening Test / Preliminary Exam**

| Paper | Marks | Duration |
|---|---|---|
| General Studies & Mental Ability | 150 | 2.5 hours |

Objective MCQ. Qualifying only. No negative marking.

**Stage 2 — Main Exam**

| Paper | Marks | Type |
|---|---|---|
| Paper I: General Essays & English | 150 | Descriptive |
| Paper II: General Studies I (History, Polity, Economy) | 150 | Descriptive |
| Paper III: General Studies II (Science, Technology, Current Affairs) | 150 | Descriptive |
| Paper IV: Telugu (Language) | 150 | Descriptive |
| **Total** | **600** | — |

**Stage 3 — Interview**
75 marks (for Group 2 posts with interview). Group 2A posts: no interview.`,
    official_link: "https://psc.ap.gov.in/",
    notification_link: "https://psc.ap.gov.in/",
    apply_link: "https://psc.ap.gov.in/",
    category: "state-psc",
    state: "andhra-pradesh",
    is_active: true,
    description: "APPSC Group 2 2026 recruitment for 783 Andhra Pradesh state services posts — ASO, Revenue Divisional Officer, Mandal Revenue Inspector, Municipal Commissioner Grade III, and others. Graduate candidates aged 18–42 years with AP domicile eligible. Apply at psc.ap.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-03-15",
    qualification: "Bachelor's Degree from any recognised university. AP domicile (nativity) required.",
    employment_type: "FULL_TIME",
    content: `## What is APPSC Group 2?

APPSC Group 2 (Andhra Pradesh Public Service Commission — Group 2 Services) recruitment covers administrative and revenue posts in Andhra Pradesh state government. It includes both Group 2 (with interview) and Group 2A (without interview) posts.

Group 2 is one of the most popular state government exams in Andhra Pradesh, drawing hundreds of thousands of applications every cycle.

---

## Major Posts

| Post | Category |
|---|---|
| Assistant Section Officer (ASO) | Secretariat |
| Revenue Divisional Officer (RDO) | Revenue |
| Mandal Revenue Inspector | Revenue |
| Municipal Commissioner Grade III | Municipality |
| Assistant Registrar (Co-operative) | Co-operative |
| District Backward Classes Welfare Officer | Welfare |
| Junior Assistant | Various Depts |

---

## Eligibility

### Age Limit (as on July 1, 2026)
- **General:** 18–42 years
- **BC:** Up to 47 years
- **SC/ST:** Up to 52 years
- **PwBD:** +10 years over applicable limit

AP domicile (nativity) certificate required.

### Qualification
- Bachelor's Degree from a recognised university
- Telugu proficiency is tested in Paper IV

---

## Exam Pattern

### Prelims (Qualifying)

| Paper | Marks |
|---|---|
| General Studies & Mental Ability (Objective) | 150 |

No negative marking. Qualifying only.

### Mains (Descriptive)

| Paper | Marks |
|---|---|
| Paper I: Essay + English | 150 |
| Paper II: GS I — History, Polity, Economy | 150 |
| Paper III: GS II — Science, Tech, Environment, Current Affairs | 150 |
| Paper IV: Telugu (Language) | 150 |
| **Total** | **600** |

### Interview (Group 2 only)
75 marks.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | February 15, 2026 |
| **Last Date to Apply** | **March 15, 2026** |
| Preliminary Exam | June 21, 2026 |
| Mains Exam | September–October 2026 (expected) |
| Interview | December 2026 (expected) |

---

## Preparation Strategy

**AP-specific History:** Satavahana dynasty, Eastern Chalukyas of Vengi, Kakatiyas, Vijayanagara Empire, Hyderabad Nizam, Andhra movement for statehood (Potti Sriramulu). This is consistently tested — 15–20 questions.

**Telugu Paper:** Essay, comprehension, précis, and grammar. Prepare formal Telugu writing. For candidates with Telugu as mother tongue, this is a high-scoring section.

**Current Affairs:** Both national and Andhra Pradesh state-level — new districts formation, YSR schemes, Polavaram project updates, AP capital developments.

---

## Official Links

| Resource | Link |
|---|---|
| APPSC Website | [psc.ap.gov.in](https://psc.ap.gov.in/) |
| Apply Online | [psc.ap.gov.in](https://psc.ap.gov.in/) |
`
  },

  // ─── 3. TSPSC Group 2 2026 ────────────────────────────────────────────────────
  {
    slug: "tspsc-group-2-2026",
    title: "TSPSC Group 2 2026 — Telangana State Services Recruitment",
    organization: "Telangana State Public Service Commission (TSPSC)",
    post_name: "Assistant Section Officer, Deputy Tahsildar, Municipal Commissioner Grade III, Mandal Development Officer, Assistant Commercial Tax Officer, and other Group 2 posts",
    vacancies: 596,
    eligibility: {
      age: "18–44 years for most posts. Age relaxation: BC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Telangana Govt rules. Telangana domicile required.",
      education: "Bachelor's Degree from a recognised university. Telugu language proficiency required."
    },
    salary: "Pay Level 7–10 (Telangana revised pay scales) — ₹36,200–₹1,14,800/month basic + DA + HRA + TS state allowances. Deputy Tahsildar/ASO: ~₹50,000–₹65,000/month gross.",
    application_fee: { general: "₹200", obc: "₹200", ews: "₹200", sc_st: "₹100", women: "₹100", ph: "₹100" },
    important_dates: {
      startDate: "2026-03-10",
      lastDate: "2026-04-09",
      examDate: "2026-07-12"
    },
    how_to_apply: `1. Visit the TSPSC official website: https://tspsc.gov.in/
2. Click "Apply Online" → "Group 2 Services 2026"
3. Register using TSPSC one-time registration (OTR) with Aadhaar and valid credentials
4. Fill the application — personal details, community, educational qualification, post preferences
5. Upload photo and signature as per specifications
6. Pay fee online via Payment Gateway (Net Banking / Debit Card / Credit Card / UPI) or at Mee Seva centre
7. SC/ST/PwBD/Women: Reduced fee ₹100
8. Submit and download the confirmation page
9. Admit Card released on tspsc.gov.in before the exam`,
    selection_process: `**Stage 1 — Screening Test (Objective, Qualifying)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies & Mental Ability | 150 | 2.5 hours |

No negative marking. Qualifying only — marks not counted in merit.

**Stage 2 — Main Exam (Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: Telugu & English Precis, Essay | 150 |
| Paper II: GS I — History, Polity, Economy | 150 |
| Paper III: GS II — Science, Technology, Current Affairs, Environment | 150 |
| Paper IV: GS III — Telangana History, Movement, Economy, Culture | 150 |
| **Total** | **600** |

**Stage 3 — Interview**
75 marks (for posts that include interview). Some Group 2 posts are non-interview — merit from Main Exam only.`,
    official_link: "https://tspsc.gov.in/",
    notification_link: "https://tspsc.gov.in/",
    apply_link: "https://tspsc.gov.in/",
    category: "state-psc",
    state: "telangana",
    is_active: true,
    description: "TSPSC Group 2 2026 recruitment for 596 Telangana state services posts — Deputy Tahsildar, ASO, Municipal Commissioner Grade III, Mandal Development Officer, and others. Graduate candidates aged 18–44 years with Telangana domicile eligible. Apply at tspsc.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-04-09",
    qualification: "Bachelor's Degree from any recognised university. Telangana domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is TSPSC Group 2?

TSPSC Group 2 is a combined recruitment for Group 2 and Group 2A posts in Telangana state government services. Conducted by the Telangana State Public Service Commission, it covers administrative and revenue posts across Telangana's 33 districts.

This exam is highly competitive and attracts over 10 lakh applications in each cycle.

---

## Major Posts

| Post | Department |
|---|---|
| Deputy Tahsildar | Revenue |
| Assistant Section Officer | Secretariat |
| Municipal Commissioner Grade III | CDMA |
| Mandal Development Officer | DRDA |
| Assistant Commercial Tax Officer | Commercial Taxes |
| Cooperative Sub-Registrar | Cooperative |
| Deputy Jail Superintendent | Prisons |

---

## Eligibility

### Age Limit
- **General:** 18–44 years
- **BC:** Up to 47 years
- **SC/ST:** Up to 49 years

Telangana domicile required.

---

## Exam Pattern

### Prelims (Qualifying)
- 150 marks, MCQ, 2.5 hours — No negative marking

### Mains (Descriptive, 600 marks)
| Paper | Topic | Marks |
|---|---|---|
| Paper I | Telugu/English Essay, Précis | 150 |
| Paper II | History, Polity, Economy | 150 |
| Paper III | Science, Technology, Environment | 150 |
| Paper IV | Telangana History, Movement, Economy | 150 |

### Interview
75 marks (for eligible posts).

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | March 10, 2026 |
| **Last Date to Apply** | **April 9, 2026** |
| Screening Test | July 12, 2026 |
| Mains Exam | October 2026 (expected) |
| Interview | January 2027 (expected) |

---

## Preparation Strategy

**Telangana Movement (Paper IV — decisive):** Telangana statehood movement (2001–2014), role of KCR and TRS, Nizam era, Hyderabad liberation, Telangana culture and folk arts (Bathukamma, Bonalu). This paper differentiates serious candidates.

**Telugu Paper:** Essay and précis writing in formal Telugu. Candidates who prepare Telugu comprehensively score significantly higher here.

**Science & Technology (Paper III):** Biotechnology, space technology, IT, and environmental topics related to Telangana are common — Hyderabad's pharma industry, DRDO, ISRO.

---

## Official Links

| Resource | Link |
|---|---|
| TSPSC Website | [tspsc.gov.in](https://tspsc.gov.in/) |
| Apply Online | [tspsc.gov.in](https://tspsc.gov.in/) |
`
  },

  // ─── 4. GPSC Class 1/2 2026 ────────────────────────────────────────────────────
  {
    slug: "gpsc-class-1-2-2026",
    title: "GPSC Class 1 & 2 2026 — Gujarat Administrative Service Recruitment",
    organization: "Gujarat Public Service Commission (GPSC)",
    post_name: "Deputy Collector, Deputy Superintendent of Police (DYSP), Mamlatdar, Development Officer, Section Officer, and other Class 1 & 2 posts",
    vacancies: 400,
    eligibility: {
      age: "21–35 years for Class 1. 21–35 years for Class 2. Age relaxation: SEBC/OBC +5 yrs, SC/ST +5 yrs, PwBD +10 yrs. Gujarat domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Gujarati and English required."
    },
    salary: "Class 1: Pay Level 10 — ₹56,100 basic + DA + HRA + Gujarat state allowances, ~₹85,000–₹1,00,000/month gross. Class 2: Pay Level 7–8 — ₹44,900–₹47,600 basic + allowances, ~₹65,000–₹75,000/month gross.",
    application_fee: { general: "₹500", obc: "₹500", ews: "₹250", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-04-01",
      lastDate: "2026-04-30",
      examDate: "2026-08-02"
    },
    how_to_apply: `1. Visit the GPSC official website: https://gpsc.gujarat.gov.in/
2. Click "Apply Online" → "Class 1 & 2 Combined Examination 2026"
3. Register using Gujarat Government SSO (Single Sign-On) credentials
4. Fill the application form — personal details, educational qualification, post preference
5. Upload photo and signature as per GPSC specifications
6. Pay fee online via Net Banking / Debit Card / Credit Card / UPI through the SSO payment gateway
7. Women/SC/ST candidates: Fee exempted
8. EWS candidates: 50% fee concession (₹250)
9. Download and print the confirmation receipt
10. Admit Card released on gpsc.gujarat.gov.in before the exam`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| Paper I: General Studies | 200 | 2 hours |
| Paper II: General Studies II | 200 | 2 hours |
| **Total** | **400** | **4 hours** |

No negative marking. Qualifying — marks not counted in final merit.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: Gujarati Language | 100 |
| Paper II: English Language | 100 |
| Paper III: Essay | 100 |
| Paper IV: GS I (Indian History, Polity, Economy, Geography) | 200 |
| Paper V: GS II (Science, Technology, Gujarat History & Economy, Current Affairs) | 200 |
| Paper VI: Optional Subject Paper I | 200 |
| Paper VII: Optional Subject Paper II | 200 |
| **Total** | **1,100** |

**Stage 3 — Viva Voce (Interview)**
100 marks.`,
    official_link: "https://gpsc.gujarat.gov.in/",
    notification_link: "https://gpsc.gujarat.gov.in/",
    apply_link: "https://gpsc.gujarat.gov.in/",
    category: "state-psc",
    state: "gujarat",
    is_active: true,
    description: "GPSC Class 1 & 2 2026 combined recruitment for approximately 400 Gujarat state services posts — Deputy Collector, DYSP, Mamlatdar, Development Officer, Section Officer, and others. Graduate candidates aged 21–35 years with Gujarat domicile eligible. Apply at gpsc.gujarat.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-04-30",
    qualification: "Bachelor's Degree from any recognised university. Gujarat domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is GPSC Class 1 & 2?

GPSC (Gujarat Public Service Commission) conducts the Combined Competitive Examination for Class 1 and Class 2 posts in Gujarat state services. It is Gujarat's premier state civil services examination — the gateway to Deputy Collector, DYSP, Mamlatdar, and other gazetted administrative posts.

Gujarat has one of the most organized and transparent state PSC processes in India.

---

## Posts Offered

| Post | Class | Pay Level |
|---|---|---|
| Deputy Collector | Class 1 | Level 10 |
| Deputy Superintendent of Police (DYSP) | Class 1 | Level 10 |
| Deputy Executive Engineer (Civil/Mech/Elec) | Class 1 | Level 10 |
| Mamlatdar | Class 2 | Level 8 |
| Development Officer | Class 2 | Level 8 |
| Section Officer | Class 2 | Level 7 |
| Other Class 1/2 Posts | Various | Level 7–10 |

---

## Eligibility

- **Age:** 21–35 years (with standard relaxations by category)
- **Qualification:** Bachelor's Degree from any recognised university
- **Domicile:** Gujarat domicile required for reserved category benefits

---

## Salary

| Level | Basic Pay | Gross Monthly |
|---|---|---|
| Class 1 (Level 10) | ₹56,100 | ~₹90,000–₹1,00,000 |
| Class 2 (Level 8) | ₹47,600 | ~₹70,000–₹80,000 |
| Class 2 (Level 7) | ₹44,900 | ~₹65,000–₹75,000 |

---

## Exam Pattern

### Prelims (Qualifying, Objective)
- 2 papers × 200 marks = 400 marks total
- No negative marking

### Mains (Descriptive, 1,100 marks)

| Paper | Marks |
|---|---|
| Gujarati Language | 100 |
| English Language | 100 |
| Essay (in Gujarati or English) | 100 |
| GS I: History, Polity, Economy, Geography | 200 |
| GS II: Science, Tech, Gujarat focus, Current Affairs | 200 |
| Optional Paper I | 200 |
| Optional Paper II | 200 |

### Viva Voce
100 marks.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | April 1, 2026 |
| **Last Date to Apply** | **April 30, 2026** |
| Prelims Exam | August 2, 2026 |
| Mains Exam | December 2026 (expected) |
| Interview | March 2027 (expected) |

---

## Preparation Strategy

**Gujarat History & Economy (GS Paper V):** Harappan sites in Gujarat (Lothal, Dholavira), Solanki dynasty, Maratha period, role of Gujarat in independence movement (Gandhi, Sardar Patel), Ahmedabad textile industry, diamond industry (Surat), GIFT City, Dholera SIR, Gujarat's economic statistics.

**Gujarati Language Paper:** Essay and comprehension in Gujarati. Formal business/administrative Gujarati is what gets high marks — practice official writing style.

**Optional Subject:** GPSC has 30+ optional subjects — choose based on your graduation background. Political Science, History, Economics, and Geography are most common.

---

## Official Links

| Resource | Link |
|---|---|
| GPSC Website | [gpsc.gujarat.gov.in](https://gpsc.gujarat.gov.in/) |
| Apply Online | [gpsc.gujarat.gov.in](https://gpsc.gujarat.gov.in/) |
`
  },

  // ─── 5. HPSC HCS 2026 ────────────────────────────────────────────────────────
  {
    slug: "hpsc-hcs-2026",
    title: "HPSC HCS 2026 — Haryana Civil Services Recruitment",
    organization: "Haryana Public Service Commission (HPSC)",
    post_name: "HCS (Executive Branch) — SDM, DSP, ETO, BDPO, Excise & Taxation Officer, and other Allied Services posts",
    vacancies: 156,
    eligibility: {
      age: "21–40 years for most posts. Age relaxation: OBC (Haryana) +5 yrs, SC/ST (Haryana) +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Haryana Govt rules. Haryana domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Hindi up to Matric level required."
    },
    salary: "HCS Officer (Pay Level 10): ₹56,100 basic + DA + HRA + Haryana state allowances, total ~₹80,000–₹1,00,000/month gross. Allied Services posts: ₹47,600–₹56,100 basic + allowances.",
    application_fee: { general: "₹1000", obc: "₹250", ews: "₹250", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-03-20",
      lastDate: "2026-04-20",
      examDate: "2026-07-19"
    },
    how_to_apply: `1. Visit the HPSC official website: https://hpsc.gov.in/
2. Click "Online Applications" → "HCS (EX. BR.) and Allied Services Combined Competitive Examination 2026"
3. Register with a valid email and mobile number
4. Fill the application form — personal details, community, educational qualification
5. Upload photo and signature as per specifications
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. SC/ST/PwBD/Women candidates: Fee exempted
8. OBC/EWS: Reduced fee of ₹250
9. Submit and download the confirmation
10. Admit Card released on hpsc.gov.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies | 100 | 2 hours |
| CSAT (Aptitude) | 100 | 2 hours |

CSAT is qualifying (minimum 33%). General Studies marks used for shortlisting. No negative marking.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: General Studies I | 150 |
| Paper II: General Studies II | 150 |
| Paper III: General Studies III | 150 |
| Paper IV: General Studies IV (Ethics) | 150 |
| Paper V: Optional Subject I | 150 |
| Paper VI: Optional Subject II | 150 |
| Paper VII: Hindi Essay & Comprehension | 100 |
| Paper VIII: English Essay & Comprehension | 100 |
| **Total** | **1,100** |

**Stage 3 — Viva Voce**
75 marks.`,
    official_link: "https://hpsc.gov.in/",
    notification_link: "https://hpsc.gov.in/",
    apply_link: "https://hpsc.gov.in/",
    category: "state-psc",
    state: "haryana",
    is_active: true,
    description: "HPSC HCS 2026 (Haryana Civil Services — Executive Branch) recruitment for 156 posts — SDM, DSP, ETO, BDPO, and Allied Services. Graduate candidates aged 21–40 years with Haryana domicile eligible. Three-stage selection: Prelims, Mains, and Viva Voce. Apply at hpsc.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-04-20",
    qualification: "Bachelor's Degree from any recognised university. Hindi knowledge up to Matric level required. Haryana domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is HPSC HCS?

HCS (Haryana Civil Service — Executive Branch) is the premier state civil services examination of Haryana, conducted by the Haryana Public Service Commission (HPSC). It recruits officers for gazetted administrative posts across Haryana's 22 districts.

An HCS officer starts as an SDM (Sub-Divisional Magistrate) or BDPO (Block Development and Panchayat Officer) and progresses to District Collector and Commissioner level on promotion.

---

## Posts Offered

| Post | Service |
|---|---|
| HCS (Executive Branch) — SDM, BDPO | HCS Service |
| Deputy Superintendent of Police (DSP) | Police |
| Excise & Taxation Officer (ETO) | Excise & Taxation |
| Employment Officer | Labour & Employment |
| District Food & Supplies Controller | Food |
| Other Allied Services | Various |

---

## Eligibility

- **Age:** 21–40 years (higher upper limit compared to many other state PSCs)
- **Qualification:** Bachelor's Degree from a recognised university
- **Domicile:** Haryana domicile required for reserved category benefits
- **Language:** Hindi knowledge up to Matric standard required

---

## Salary

| Post | Basic Pay | Gross |
|---|---|---|
| HCS (Executive Branch) | ₹56,100 (Level 10) | ~₹90,000–₹1,00,000/month |
| Allied Services | ₹47,600–₹56,100 | ~₹70,000–₹90,000/month |

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | March 20, 2026 |
| **Last Date to Apply** | **April 20, 2026** |
| Prelims Exam | July 19, 2026 |
| Mains Exam | November 2026 (expected) |
| Viva Voce | February–March 2027 (expected) |

---

## Preparation Strategy

**Haryana-specific GK:** Haryana history (Haryana's role in 1857 revolt, formation of Haryana state in 1966), Haryana economy (agriculture — wheat, rice, sugarcane; Manesar automotive hub), Panipat (three battles), Haryana sports achievements, state government schemes (Ayushman Bharat Haryana, Mhara Pani Mhara Virasat). This content differentiates candidates.

**Hindi Papers:** Essay and comprehension in Hindi at a reasonably high level. Formal administrative Hindi writing needs practice.

**Optional Subject:** Haryana candidates historically prefer History, Political Science, Sociology, and Geography.

---

## Official Links

| Resource | Link |
|---|---|
| HPSC Website | [hpsc.gov.in](https://hpsc.gov.in/) |
| Apply Online | [hpsc.gov.in](https://hpsc.gov.in/) |
`
  },

  // ─── 6. JPSC 2026 ────────────────────────────────────────────────────────────
  {
    slug: "jpsc-combined-civil-services-2026",
    title: "JPSC Combined Civil Services 2026 — Jharkhand State Services",
    organization: "Jharkhand Public Service Commission (JPSC)",
    post_name: "Jharkhand Administrative Service (JAS), Jharkhand Police Service (JPS), Finance Service, Co-operative Service, and other Group A/B posts",
    vacancies: 342,
    eligibility: {
      age: "21–35 years for most posts. Age relaxation: OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Jharkhand Govt rules. Jharkhand domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Hindi and a local Jharkhand language (Santali, Bengali, Oriya, Urdu, Mundari, Ho, Khortha, or Nagpuri) may be required for specific posts."
    },
    salary: "Pay Level 7–10 (Jharkhand pay scales) — ₹44,900–₹1,42,400/month basic + DA + HRA + state allowances. JAS Officer: ~₹70,000–₹90,000/month gross.",
    application_fee: { general: "₹600", obc: "₹150", ews: "₹150", sc_st: "₹150", women: "₹150", ph: "₹150" },
    important_dates: {
      startDate: "2026-04-10",
      lastDate: "2026-05-10",
      examDate: "2026-08-09"
    },
    how_to_apply: `1. Visit the JPSC official website: https://jpsc.gov.in/
2. Click "Apply Online" for the Combined Civil Services Exam 2026
3. Register with a valid mobile number and email
4. Fill the application — personal details, educational qualification, community, local language
5. Upload photo and signature
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. OBC/SC/ST/PwBD/Women: Reduced fee of ₹150
8. Submit and download the confirmation
9. Admit Card available on jpsc.gov.in before the exam`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies | 200 | 2 hours |

No negative marking. Qualifying only.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: General Hindi & General English | 100 |
| Paper II: Language & Literature (Jharkhand regional language or Hindi lit.) | 150 |
| Paper III: Social Sciences (History, Geography, Polity) | 200 |
| Paper IV: Indian Economy & Jharkhand Economy | 200 |
| Paper V: Science & Technology | 200 |
| Paper VI: Optional Subject | 200 |
| **Total** | **1,050** |

**Stage 3 — Interview**
100 marks.`,
    official_link: "https://jpsc.gov.in/",
    notification_link: "https://jpsc.gov.in/",
    apply_link: "https://jpsc.gov.in/",
    category: "state-psc",
    state: "jharkhand",
    is_active: true,
    description: "JPSC Combined Civil Services 2026 for 342 Jharkhand state services posts — JAS, JPS, Finance Service, Co-operative Service, and others. Graduate candidates aged 21–35 years with Jharkhand domicile eligible. Three-stage selection: Prelims, Mains, and Interview. Apply at jpsc.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-05-10",
    qualification: "Bachelor's Degree from any recognised university. Jharkhand domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is JPSC?

JPSC (Jharkhand Public Service Commission) conducts the Combined Civil Services Examination to recruit officers for Jharkhand state government's Group A and B services. It is Jharkhand's equivalent of UPSC Civil Services.

Jharkhand has vast forest and mineral wealth — a JAS officer plays a key role in administration, tribal welfare, and forest management in one of India's most resource-rich states.

---

## Posts Offered

| Post | Service |
|---|---|
| District Welfare Officer | JAS |
| BDO (Block Development Officer) | JAS |
| Co-operative Service Officer | Co-operative |
| Finance Officer | Finance |
| Jharkhand Police Service (JPS) | Police |
| Other Group A/B Posts | Various |

---

## Eligibility

- **Age:** 21–35 years (with standard category relaxations)
- **Qualification:** Bachelor's Degree from a recognised university
- **Domicile:** Jharkhand domicile certificate required
- **Language:** A regional Jharkhand language knowledge may be required for specific posts

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | April 10, 2026 |
| **Last Date to Apply** | **May 10, 2026** |
| Prelims Exam | August 9, 2026 |
| Mains Exam | November 2026 (expected) |
| Interview | February 2027 (expected) |

---

## Preparation Strategy

**Jharkhand Economy & Tribes:** Jharkhand's tribal population (Santali, Munda, Ho, Oraon), Fifth Schedule provisions, PESA Act, mining sector (coal, iron ore, mica), Birsa Munda's role in Ulgulan movement, Jharkhand formation (2000), major rivers (Damodar, Subarnarekha). This Paper IV content is JPSC-specific and very high-scoring for well-prepared candidates.

**Regional Language:** If you opt for a Jharkhand regional language paper (Santali, Ho, Mundari, Nagpuri), prepare it carefully — it carries 150 marks and is a differentiator.

---

## Official Links

| Resource | Link |
|---|---|
| JPSC Website | [jpsc.gov.in](https://jpsc.gov.in/) |
| Apply Online | [jpsc.gov.in](https://jpsc.gov.in/) |
`
  },

  // ─── 7. UKPSC PCS 2026 ────────────────────────────────────────────────────────
  {
    slug: "ukpsc-pcs-2026",
    title: "UKPSC PCS 2026 — Uttarakhand Provincial Civil Services",
    organization: "Uttarakhand Public Service Commission (UKPSC)",
    post_name: "Deputy Collector, Deputy Superintendent of Police (DSP), BDO, Treasury Officer, Excise Inspector, and other State Services posts",
    vacancies: 189,
    eligibility: {
      age: "21–42 years for most posts. Age relaxation: OBC +5 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Uttarakhand Govt rules. Uttarakhand domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Hindi and Devnagri script required."
    },
    salary: "Pay Level 7–10 (Uttarakhand pay scales) — ₹44,900–₹1,42,400/month basic + DA + HRA + state allowances. Deputy Collector/DSP: ~₹75,000–₹95,000/month gross.",
    application_fee: { general: "₹172.30", obc: "₹172.30", ews: "₹172.30", sc_st: "₹82.30", women: "₹82.30", ph: "₹82.30" },
    important_dates: {
      startDate: "2026-05-01",
      lastDate: "2026-05-31",
      examDate: "2026-08-23"
    },
    how_to_apply: `1. Visit the UKPSC official website: https://ukpsc.net.in/ or psc.uk.gov.in
2. Click "Online Application" → "PCS 2026"
3. Register with a valid email and mobile number
4. Fill the online form — personal details, community, educational qualification, post preferences
5. Upload photo and signature as per specifications
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. SC/ST/PwBD/Women: Reduced fee
8. Submit and download confirmation receipt
9. Admit Card released on ukpsc.net.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| Paper I: General Studies | 150 | 2 hours |
| Paper II: CSAT | 100 | 2 hours |

CSAT qualifying (minimum 33%). GS marks used for shortlisting. No negative marking.

**Stage 2 — Main Exam (Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: General Hindi | 150 |
| Paper II: Essay | 120 |
| Paper III: GS I — History, Culture | 200 |
| Paper IV: GS II — Polity, Economy | 200 |
| Paper V: GS III — Science, Tech, Environment | 200 |
| Paper VI: GS IV — Ethics, Integrity | 200 |
| Paper VII: Optional Subject | 200 |
| **Total** | **1,270** |

**Stage 3 — Interview**
100 marks.`,
    official_link: "https://ukpsc.net.in/",
    notification_link: "https://ukpsc.net.in/",
    apply_link: "https://ukpsc.net.in/",
    category: "state-psc",
    state: "uttarakhand",
    is_active: true,
    description: "UKPSC PCS 2026 recruitment for 189 Uttarakhand state civil services posts — Deputy Collector, DSP, BDO, Treasury Officer, and others. Graduate candidates aged 21–42 years with Uttarakhand domicile eligible. Three-stage selection: Prelims, Mains, and Interview. Apply at ukpsc.net.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-05-31",
    qualification: "Bachelor's Degree from any recognised university. Uttarakhand domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is UKPSC PCS?

UKPSC PCS (Uttarakhand Provincial Civil Services) is the state civil services examination conducted by the Uttarakhand Public Service Commission. It recruits officers for gazetted administrative, police, and revenue posts across Uttarakhand's 13 districts.

Uttarakhand is a hill state with distinct administrative challenges — a PCS officer here works on tourism, disaster management (frequent floods and landslides), forest conservation, and mountain border infrastructure.

---

## Posts Offered

| Post | Service |
|---|---|
| Deputy Collector | State Civil Service |
| Deputy Superintendent of Police | Police |
| BDO (Block Development Officer) | Rural Development |
| Treasury Officer | Finance |
| Excise Inspector | Excise |
| District Welfare Officer | Social Welfare |
| Other Group A/B Posts | Various Depts |

---

## Eligibility

- **Age:** 21–42 years (one of the higher upper age limits among state PSCs)
- **Qualification:** Bachelor's Degree from any recognised university
- **Language:** Hindi and Devnagri script knowledge required
- **Domicile:** Uttarakhand domicile required for reserved category benefits

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | May 1, 2026 |
| **Last Date to Apply** | **May 31, 2026** |
| Prelims Exam | August 23, 2026 |
| Mains Exam | December 2026 (expected) |
| Interview | March 2027 (expected) |

---

## Preparation Strategy

**Uttarakhand-specific content:** Garhwal and Kumaon kingdoms, Chipko Movement (Sunderlal Bahuguna), Uttarakhand statehood (2000), Char Dham Yatra significance, glaciers and rivers (Ganga origin at Gangotri, Yamuna, Bhagirathi), disaster management (2013 Kedarnath floods), Uttarakhand agro-forestry, and tourism economy.

**GS IV (Ethics):** UKPSC has emphasized public service integrity and disaster response ethics. Case studies from hill administration are common.

**Optional Subject:** Choose based on your graduation background — straightforward advice that holds true for all state PSCs.

---

## Official Links

| Resource | Link |
|---|---|
| UKPSC Website | [ukpsc.net.in](https://ukpsc.net.in/) |
| Apply Online | [ukpsc.net.in](https://ukpsc.net.in/) |
`
  },

  // ─── 8. HPPSC HAS 2026 ───────────────────────────────────────────────────────
  {
    slug: "hppsc-has-2026",
    title: "HPPSC HAS 2026 — Himachal Pradesh Administrative Services",
    organization: "Himachal Pradesh Public Service Commission (HPPSC)",
    post_name: "Himachal Pradesh Administrative Service (HAS), Himachal Pradesh Police Service (HPPS), Allied Services posts",
    vacancies: 158,
    eligibility: {
      age: "21–45 years for most posts. Age relaxation: OBC +5 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per HP Govt rules. Himachal Pradesh domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Hindi/Sanskrit up to Matric level required."
    },
    salary: "HAS Officer (Pay Level 10): ₹56,100 basic + DA + HRA + HP state allowances, ~₹80,000–₹1,00,000/month gross. Allied Services: ₹44,900–₹56,100 basic + allowances.",
    application_fee: { general: "₹400", obc: "₹400", ews: "₹400", sc_st: "₹100", women: "₹100", ph: "Nil" },
    important_dates: {
      startDate: "2026-05-15",
      lastDate: "2026-06-14",
      examDate: "2026-09-06"
    },
    how_to_apply: `1. Visit the HPPSC official website: https://www.hppsc.hp.gov.in/
2. Click "Advertisement" → "HAS & Allied Services Combined Examination 2026"
3. Register with a valid email and mobile number
4. Fill the online application form — personal details, educational qualification, post preference
5. Upload photo and signature as per HPPSC specifications
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. SC/ST/Women candidates: Reduced fee
8. PwBD candidates: No fee
9. Download and print confirmation receipt
10. Admit Card released on hppsc.hp.gov.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies | 100 | 2 hours |

No negative marking. Qualifying only.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: General Hindi or Sanskrit | 100 |
| Paper II: English Language | 100 |
| Paper III: Essay | 100 |
| Paper IV: GS I (History, Geography, Economy) | 200 |
| Paper V: GS II (Polity, Science, Current Affairs, HP GK) | 200 |
| Paper VI: Optional Subject I | 200 |
| Paper VII: Optional Subject II | 200 |
| **Total** | **1,100** |

**Stage 3 — Viva Voce**
75 marks.`,
    official_link: "https://www.hppsc.hp.gov.in/",
    notification_link: "https://www.hppsc.hp.gov.in/",
    apply_link: "https://www.hppsc.hp.gov.in/",
    category: "state-psc",
    state: "himachal-pradesh",
    is_active: true,
    description: "HPPSC HAS 2026 recruitment for 158 Himachal Pradesh state services posts — HAS officer, HPPS, and Allied Services. Graduate candidates aged 21–45 years with HP domicile eligible. Three-stage selection: Prelims, Mains, and Viva Voce. Apply at hppsc.hp.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-06-14",
    qualification: "Bachelor's Degree from any recognised university. HP domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is HPPSC HAS?

HPPSC HAS (Himachal Pradesh Administrative Service) is the state civil services examination for Himachal Pradesh, conducted by the HPPSC. It is the route to administrative posts in HP — from SDM and BDO to District Collector on promotion.

Himachal Pradesh is a hill state with tourism-driven economy, apple orchards, and hydroelectric power as key sectors. An HAS officer deals with land revenue, tribal welfare, tourism administration, and disaster preparedness.

---

## Posts Offered

| Post | Service |
|---|---|
| Sub-Divisional Officer (HAS) | HP Administrative Service |
| Tehsildar | Revenue |
| HP Police Service (HPPS) | Police |
| Block Development Officer | Rural Development |
| Assistant Controller (Finance) | Finance |
| Allied Services Posts | Various Depts |

---

## Eligibility

- **Age:** 21–45 years (one of the highest upper age limits in state PSCs)
- **Qualification:** Bachelor's Degree from any recognised university
- **Language:** Hindi or Sanskrit knowledge up to Matric level required
- **Domicile:** HP domicile required for reserved category benefits

---

## Salary

| Post | Basic Pay | Gross |
|---|---|---|
| HAS Officer (Level 10) | ₹56,100 | ~₹80,000–₹95,000/month |
| Allied Services | ₹44,900–₹56,100 | ~₹65,000–₹80,000/month |

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | May 15, 2026 |
| **Last Date to Apply** | **June 14, 2026** |
| Prelims Exam | September 6, 2026 |
| Mains Exam | January 2027 (expected) |
| Viva Voce | April 2027 (expected) |

---

## Preparation Strategy

**Himachal Pradesh GK (GS Paper V):** HP's geography (rivers — Beas, Chenab, Sutlej; glaciers; hill stations — Shimla, Manali, Dharamshala), HP economy (apple cultivation, tourism, hydropower projects — Bhakra, Nathpa Jhakri), HP history (Bushahr, Kullu kingdoms, integration into India 1948–1966), HP government schemes, and Census data for HP.

**Hindi/Sanskrit (Qualifying Paper I):** Essay and comprehension in formal Hindi. Manageable for most candidates — practice formal writing.

**Optional Subject:** HP candidates often choose History, Political Science, Geography, or Economics. Choose what you know best.

---

## Official Links

| Resource | Link |
|---|---|
| HPPSC Website | [hppsc.hp.gov.in](https://www.hppsc.hp.gov.in/) |
| Apply Online | [hppsc.hp.gov.in](https://www.hppsc.hp.gov.in/) |
`
  }

];

console.log(`\nInserting ${jobs.length} jobs (Batch 3 — State PSCs: Karnataka, AP, Telangana, Gujarat, Haryana, Jharkhand, Uttarakhand, Himachal Pradesh)...\n`);

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
console.log(`📊 Total now: 34 + ${inserted} = ${34 + inserted} active jobs`);
