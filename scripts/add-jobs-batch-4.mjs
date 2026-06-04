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

  // ─── 1. APSC CCE 2026 ────────────────────────────────────────────────────────
  {
    slug: "apsc-cce-2026",
    title: "APSC CCE 2026 — Assam Civil Services Examination",
    organization: "Assam Public Service Commission (APSC)",
    post_name: "Assam Civil Service (ACS), Assam Police Service (APS), Assam Finance Service, Assam Cooperative Service, and other Combined Competitive Examination posts",
    vacancies: 277,
    eligibility: {
      age: "21–38 years for most posts. Age relaxation: OBC/MOBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Assam Govt rules. Assam domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Assamese or any other official language of Assam required."
    },
    salary: "Pay Level 7–10 (Assam state pay scales) — ₹30,000–₹1,10,000/month basic + DA + HRA + Assam state allowances. ACS Officer: ~₹65,000–₹85,000/month gross.",
    application_fee: { general: "₹297.20", obc: "₹197.20", ews: "₹197.20", sc_st: "₹47.20", women: "₹47.20", ph: "Nil" },
    important_dates: {
      startDate: "2026-04-15",
      lastDate: "2026-05-15",
      examDate: "2026-08-16"
    },
    how_to_apply: `1. Visit the APSC official website: https://apsc.nic.in/
2. Click "Online Application" → "Combined Competitive Examination 2026"
3. Register with a valid email and mobile number
4. Fill the application — personal details, educational qualification, post preference, community
5. Upload photo and signature as per specifications
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. SC/ST/PwBD/Women: Reduced fee
8. Submit and download confirmation
9. Admit Card released on apsc.nic.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies | 200 | 2 hours |

No negative marking. Qualifying only.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: General English | 200 |
| Paper II: General Assamese / Regional Language | 200 |
| Paper III: Essay | 200 |
| Paper IV: GS I (History, Geography, Polity) | 200 |
| Paper V: GS II (Economy, Science, Current Affairs) | 200 |
| Paper VI: Optional Subject I | 200 |
| Paper VII: Optional Subject II | 200 |
| **Total** | **1,400** |

**Stage 3 — Viva Voce**
200 marks.`,
    official_link: "https://apsc.nic.in/",
    notification_link: "https://apsc.nic.in/",
    apply_link: "https://apsc.nic.in/",
    category: "state-psc",
    state: "assam",
    is_active: true,
    description: "APSC CCE 2026 (Combined Competitive Examination) for 277 Assam state services posts — ACS, APS, Finance Service, and others. Graduate candidates aged 21–38 years with Assam domicile eligible. Three-stage selection: Prelims, Mains, and Viva Voce. Apply at apsc.nic.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-05-15",
    qualification: "Bachelor's Degree from any recognised university. Assam domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is APSC CCE?

APSC CCE (Assam Public Service Commission — Combined Competitive Examination) is the state civil services exam for Assam. It recruits officers for Assam Civil Service, Assam Police Service, Finance Service, and related cadres across Assam's 35 districts.

Assam is a strategically important northeastern state — flood management, border administration, tea industry governance, and wildlife conservation are key aspects of an ACS officer's career.

---

## Posts Offered

| Post | Service |
|---|---|
| Assam Civil Service (ACS) | Administrative |
| Assam Police Service (APS) | Police |
| Assam Finance Service | Finance |
| Assam Cooperative Service | Cooperative |
| Assistant Commissioner of Taxes | Taxation |
| Other Group A/B Posts | Various Depts |

---

## Eligibility

- **Age:** 21–38 years
- **Qualification:** Bachelor's Degree from a recognised university
- **Language:** Assamese or another official Assam language required
- **Domicile:** Assam domicile/permanence certificate required

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | April 15, 2026 |
| **Last Date to Apply** | **May 15, 2026** |
| Prelims Exam | August 16, 2026 |
| Mains Exam | December 2026 (expected) |
| Viva Voce | March 2027 (expected) |

---

## Preparation Strategy

**Assam-specific GK (decisive):** Ahom kingdom history, Assam's role in 1857, tea industry history (Brahmaputra Valley), major rivers (Brahmaputra, Barak), Kaziranga National Park (one-horned rhino), Assam's economy (tea, oil, bamboo), Bodo movement, Assam Accord (1985), recent NRC (National Register of Citizens) process, and current state government schemes.

**Assamese Language Paper:** Essay, comprehension, and grammar in formal Assamese. For Assamese-speaking candidates this is a strong scoring section. Others should allocate specific preparation time.

**GS — Northeast focus:** APSC expects knowledge of NE India beyond Assam — AFSPA, North East special provisions, Act East Policy implications.

---

## Official Links

| Resource | Link |
|---|---|
| APSC Website | [apsc.nic.in](https://apsc.nic.in/) |
| Apply Online | [apsc.nic.in](https://apsc.nic.in/) |
`
  },

  // ─── 2. PPSC PCS 2026 ────────────────────────────────────────────────────────
  {
    slug: "ppsc-pcs-2026",
    title: "PPSC PCS 2026 — Punjab Civil Services Recruitment",
    organization: "Punjab Public Service Commission (PPSC)",
    post_name: "Punjab Civil Service (PCS) — SDM, DSP, DDPO, ETO, BDO, and other Group A posts",
    vacancies: 186,
    eligibility: {
      age: "21–37 years for most posts. Age relaxation: OBC/SC/ST Punjab domicile +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Punjab Govt rules. Punjab domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Punjabi language up to Matriculation level required."
    },
    salary: "Pay Level 9–10 (Punjab pay scales) — ₹53,100–₹1,67,800/month basic + DA + HRA + Punjab state allowances. PCS Officer: ~₹80,000–₹1,05,000/month gross.",
    application_fee: { general: "₹1000", obc: "₹500", ews: "₹500", sc_st: "₹250", women: "₹250", ph: "Nil" },
    important_dates: {
      startDate: "2026-03-25",
      lastDate: "2026-04-25",
      examDate: "2026-07-26"
    },
    how_to_apply: `1. Visit the PPSC official website: https://ppsc.gov.in/
2. Click "Apply Online" → "Punjab Civil Services (Executive Branch) 2026"
3. Register with a valid email and mobile number (Aadhaar OTP verification)
4. Fill the application — personal details, educational qualification, post preference
5. Upload photo and signature as per specifications
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. SC/ST/Women/PwBD: Reduced fee
8. Submit and download confirmation receipt
9. Admit Card released on ppsc.gov.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies | 120 | 2 hours |

No negative marking. Qualifying only — 40% cutoff.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: Punjabi Language | 100 |
| Paper II: English Language | 100 |
| Paper III: Essay (Punjabi / English) | 100 |
| Paper IV: GS I (Indian & Punjab History, Polity, Economy) | 200 |
| Paper V: GS II (Science, Technology, Current Affairs, Punjab GK) | 200 |
| Paper VI: Optional Subject | 200 |
| **Total** | **900** |

**Stage 3 — Viva Voce**
75 marks.`,
    official_link: "https://ppsc.gov.in/",
    notification_link: "https://ppsc.gov.in/",
    apply_link: "https://ppsc.gov.in/",
    category: "state-psc",
    state: "punjab",
    is_active: true,
    description: "PPSC PCS 2026 (Punjab Civil Services) recruitment for 186 Punjab state Group A posts — SDM, DSP, DDPO, ETO, BDO, and others. Graduate candidates aged 21–37 years with Punjab domicile eligible. Three-stage selection: Prelims, Mains, and Viva Voce. Apply at ppsc.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-04-25",
    qualification: "Bachelor's Degree from any recognised university. Punjab domicile required. Punjabi language knowledge (Matriculation level) required.",
    employment_type: "FULL_TIME",
    content: `## What is PPSC PCS?

PPSC PCS (Punjab Public Service Commission — Punjab Civil Services) is the premier state civil services examination for Punjab. It recruits for Group A gazetted posts — SDM, DSP, Block Development and Panchayat Officer, ETO, and similar roles across Punjab's 23 districts.

---

## Posts Offered

| Post | Level |
|---|---|
| Sub-Divisional Magistrate (SDM) | Group A |
| Deputy Superintendent of Police (DSP) | Group A |
| DDPO (District Development & Panchayat Officer) | Group A |
| Excise & Taxation Officer (ETO) | Group A |
| BDO (Block Development Officer) | Group A |
| Other Group A Posts | Group A |

---

## Eligibility

- **Age:** 21–37 years
- **Qualification:** Bachelor's Degree from a recognised university
- **Language:** Punjabi up to Matriculation level required
- **Domicile:** Punjab domicile required

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | March 25, 2026 |
| **Last Date to Apply** | **April 25, 2026** |
| Prelims Exam | July 26, 2026 |
| Mains Exam | November 2026 (expected) |
| Viva Voce | February 2027 (expected) |

---

## Preparation Strategy

**Punjab History & Economy:** Sikh history (Guru Nanak, Guru Gobind Singh, Maharaja Ranjit Singh, fall of Sikh empire 1849), Punjab's role in 1857 and Independence movement (Bhagat Singh, Jallianwala Bagh), partition of Punjab (1947), Green Revolution in Punjab (Wheat, Rice), Punjab economy (agriculture-driven, NRI remittances), Water dispute (Punjab-Haryana SYL canal controversy), current state government schemes.

**Punjabi Language Paper:** Essay, comprehension, and grammar in Gurmukhi script. Manageable for Punjabi speakers — practice formal writing.

**Optional Subject:** Choose based on your graduation — common choices include History, Political Science, Economics, Geography.

---

## Official Links

| Resource | Link |
|---|---|
| PPSC Website | [ppsc.gov.in](https://ppsc.gov.in/) |
| Apply Online | [ppsc.gov.in](https://ppsc.gov.in/) |
`
  },

  // ─── 3. CGPSC State Service 2026 ─────────────────────────────────────────────
  {
    slug: "cgpsc-state-service-2026",
    title: "CGPSC State Service Exam 2026 — Chhattisgarh Civil Services",
    organization: "Chhattisgarh Public Service Commission (CGPSC)",
    post_name: "Deputy Collector, Deputy Superintendent of Police (DSP), BDO, District Registrar, Assistant Director, and other Group A/B posts",
    vacancies: 246,
    eligibility: {
      age: "21–40 years for most posts. Age relaxation: OBC (CG) +5 yrs, SC/ST (CG) +5 yrs, PwBD +10 yrs. Chhattisgarh domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Hindi required. Chhattisgarh domicile required."
    },
    salary: "Pay Level 7–10 (Chhattisgarh revised pay scales) — ₹44,900–₹1,42,400/month basic + DA + HRA + CG state allowances. Deputy Collector/DSP: ~₹70,000–₹90,000/month gross.",
    application_fee: { general: "₹400", obc: "₹300", ews: "₹300", sc_st: "₹300", women: "₹300", ph: "₹300" },
    important_dates: {
      startDate: "2026-04-20",
      lastDate: "2026-05-20",
      examDate: "2026-08-30"
    },
    how_to_apply: `1. Visit the CGPSC official website: https://psc.cg.gov.in/
2. Click "Online Application" → "State Services Examination 2026"
3. Register with a valid mobile number and email
4. Fill the application form — personal details, community, educational qualification
5. Upload photo and signature
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. OBC/SC/ST/Women/PwBD/EWS: Reduced fee
8. Submit and download confirmation
9. Admit Card released on psc.cg.gov.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies | 200 | 2 hours |

No negative marking. Qualifying only.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: Hindi Language & Essay | 200 |
| Paper II: GS I (History, Geography, Economy, Polity) | 200 |
| Paper III: GS II (Science, Technology, Chhattisgarh GK, Current Affairs) | 200 |
| Paper IV: Optional Subject I | 200 |
| Paper V: Optional Subject II | 200 |
| **Total** | **1,000** |

**Stage 3 — Interview**
100 marks.`,
    official_link: "https://psc.cg.gov.in/",
    notification_link: "https://psc.cg.gov.in/",
    apply_link: "https://psc.cg.gov.in/",
    category: "state-psc",
    state: "chhattisgarh",
    is_active: true,
    description: "CGPSC State Service Exam 2026 for 246 Chhattisgarh state services posts — Deputy Collector, DSP, BDO, District Registrar, and others. Graduate candidates aged 21–40 years with CG domicile eligible. Three-stage selection: Prelims, Mains, and Interview. Apply at psc.cg.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-05-20",
    qualification: "Bachelor's Degree from any recognised university. Chhattisgarh domicile required.",
    employment_type: "FULL_TIME",
    content: `## What is CGPSC State Service Exam?

CGPSC State Service Exam (Chhattisgarh Public Service Commission — State Services Examination) is the premier civil services exam of Chhattisgarh — a mineral-rich state formed in 2000. It recruits for Group A and Group B gazetted posts across Chhattisgarh's 33 districts.

Chhattisgarh has a large tribal population and is home to Bastar — one of India's most challenging administrative regions. A CG civil services officer's role is particularly impactful here.

---

## Posts Offered

| Post | Group |
|---|---|
| Deputy Collector | A |
| Deputy Superintendent of Police (DSP) | A |
| Block Development Officer (BDO) | A |
| District Registrar | A |
| Assistant Director (Various) | A/B |
| District Welfare Officer | B |
| Other Group A/B Posts | A/B |

---

## Eligibility

- **Age:** 21–40 years (with category relaxations)
- **Qualification:** Bachelor's Degree from any recognised university
- **Language:** Hindi knowledge required
- **Domicile:** Chhattisgarh domicile required

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | April 20, 2026 |
| **Last Date to Apply** | **May 20, 2026** |
| Prelims Exam | August 30, 2026 |
| Mains Exam | December 2026 (expected) |
| Interview | March 2027 (expected) |

---

## Preparation Strategy

**Chhattisgarh-specific GK (GS Paper III — decisive):** Formation of Chhattisgarh (2000), natural resources (coal mines — Korba, iron ore — Bailadila, diamonds — Panna), tribal culture (Gondi, Baiga, Maria tribes), Bastar region and Naxal background, major rivers (Mahanadi, Indravati, Sheonath), Salva Judum controversy, state government schemes (PM PVTG Mission for Chhattisgarh tribes), and recent infrastructure projects.

**Hindi Language Paper:** Essays on social, economic, and governance topics related to Chhattisgarh. Practice both descriptive and essay writing in standard Hindi.

---

## Official Links

| Resource | Link |
|---|---|
| CGPSC Website | [psc.cg.gov.in](https://psc.cg.gov.in/) |
| Apply Online | [psc.cg.gov.in](https://psc.cg.gov.in/) |
`
  },

  // ─── 4. OPSC OCS 2026 ────────────────────────────────────────────────────────
  {
    slug: "opsc-ocs-2026",
    title: "OPSC OCS 2026 — Odisha Civil Services Recruitment",
    organization: "Odisha Public Service Commission (OPSC)",
    post_name: "Odisha Administrative Service (OAS) Group A (Junior Branch), Odisha Police Service (OPS), Allied State Services posts",
    vacancies: 330,
    eligibility: {
      age: "21–38 years for most posts. Age relaxation: SEBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs, Ex-Servicemen as per Odisha Govt rules. Odisha domicile required.",
      education: "Bachelor's Degree from a recognised university. Knowledge of Odia language required."
    },
    salary: "Pay Level 7–10 (Odisha ORSP 2017 pay scales) — ₹44,900–₹1,42,400/month basic + DA + HRA + Odisha state allowances. OAS Officer: ~₹70,000–₹90,000/month gross.",
    application_fee: { general: "₹500", obc: "₹500", ews: "₹500", sc_st: "₹200", women: "₹200", ph: "Nil" },
    important_dates: {
      startDate: "2026-04-05",
      lastDate: "2026-05-05",
      examDate: "2026-08-02"
    },
    how_to_apply: `1. Visit the OPSC official website: https://opsc.gov.in/
2. Click "Apply Online" → "OCS (Civil Services) Examination 2026"
3. Register with a valid email and mobile number
4. Fill the application form — personal details, community, educational qualification, post preferences
5. Upload photo and signature as per specifications
6. Pay fee via Net Banking / Debit Card / Credit Card / UPI
7. SC/ST/Women/PwBD: Reduced fee ₹200
8. Submit and download confirmation receipt
9. Admit Card released on opsc.gov.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective)**

| Paper | Marks | Duration |
|---|---|---|
| General Studies | 200 | 2 hours |
| CSAT | 200 | 2 hours |

CSAT qualifying (minimum 33%). GS marks for shortlisting. No negative marking.

**Stage 2 — Main Exam (Written, Descriptive)**

| Paper | Marks |
|---|---|
| Paper I: Odia Language | 300 |
| Paper II: English Language | 300 |
| Paper III: Essay | 200 |
| Paper IV: GS I (History, Polity, Economy) | 300 |
| Paper V: GS II (Science, Technology, Odisha GK) | 300 |
| Paper VI: Optional Subject I | 300 |
| Paper VII: Optional Subject II | 300 |
| **Total** | **2,000** |

**Stage 3 — Personality Test (Viva Voce)**
200 marks.`,
    official_link: "https://opsc.gov.in/",
    notification_link: "https://opsc.gov.in/",
    apply_link: "https://opsc.gov.in/",
    category: "state-psc",
    state: "odisha",
    is_active: true,
    description: "OPSC OCS 2026 (Odisha Civil Services) for 330 Odisha state services posts — OAS Group A, Odisha Police Service, and Allied Services. Graduate candidates aged 21–38 years with Odisha domicile eligible. Three-stage selection: Prelims, Mains, and Personality Test. Apply at opsc.gov.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-05-05",
    qualification: "Bachelor's Degree from any recognised university. Odisha domicile required. Odia language knowledge required.",
    employment_type: "FULL_TIME",
    content: `## What is OPSC OCS?

OPSC OCS (Odisha Public Service Commission — Odisha Civil Services) is the state civil services examination of Odisha. It recruits for OAS (Odisha Administrative Service), OPS (Odisha Police Service), and Allied Services posts.

Odisha has significant tribal population, coastal exposure (frequent cyclones), and major industrial developments (Tata Steel, NALCO, SAIL). An OAS officer works across this diverse administration.

---

## Posts Offered

| Post | Service |
|---|---|
| OAS Group A (Junior Branch) | Administrative |
| Odisha Police Service (OPS) | Police |
| District Registrar | Registration |
| Sub-Registrar | Registration |
| Odisha Finance Service | Finance |
| Allied Services Posts | Various |

---

## Eligibility

- **Age:** 21–38 years
- **Qualification:** Bachelor's Degree from a recognised university
- **Language:** Odia language knowledge required
- **Domicile:** Odisha domicile required

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | April 5, 2026 |
| **Last Date to Apply** | **May 5, 2026** |
| Prelims Exam | August 2, 2026 |
| Mains Exam | December 2026 (expected) |
| Personality Test | March 2027 (expected) |

---

## Preparation Strategy

**Odisha GK (GS Paper V — high weightage):** Ancient history (Kalinga kingdom, Battle of Kalinga 261 BCE, Emperor Ashoka), Buddhist sites (Dhauli), Jagannath Puri Rath Yatra significance, Odia literature (Sarala Das, Fakir Mohan Senapati), Odisha economy (iron ore, bauxite, chromite export; Paradip port; Hirakud dam), tribal culture (Kondh, Dongria Kondh, Juang tribes), Cyclone vulnerability and ODRAF preparedness, recent Odisha Smart City and SUJOG scheme.

**Odia Language (300 marks — highest paper weight):** Essay, précis, grammar, comprehension in Odia. This paper is the biggest differentiator — candidates strong in Odia secure significant advantage.

---

## Official Links

| Resource | Link |
|---|---|
| OPSC Website | [opsc.gov.in](https://opsc.gov.in/) |
| Apply Online | [opsc.gov.in](https://opsc.gov.in/) |
`
  },

  // ─── 5. UPSC CAPF AC 2026 ────────────────────────────────────────────────────
  {
    slug: "upsc-capf-ac-2026",
    title: "UPSC CAPF AC 2026 — Assistant Commandant in BSF, CRPF, CISF, ITBP, SSB",
    organization: "Union Public Service Commission (UPSC)",
    post_name: "Assistant Commandant (Group A Gazetted) in BSF, CRPF, CISF, ITBP, and SSB",
    vacancies: 506,
    eligibility: {
      age: "20–25 years as on August 1, 2026 (OBC +3 yrs: max 28, SC/ST +5 yrs: max 30, Ex-Servicemen as per central rules).",
      education: "Bachelor's Degree from a recognised university."
    },
    salary: "Pay Level 10 — ₹56,100–₹1,77,500/month basic + Military Service Pay ₹5,200/month + DA + HRA + CAPF allowances. Total in-hand approximately ₹80,000–₹1,00,000/month. CGHS medical, free accommodation, and canteen facility included.",
    application_fee: { general: "₹200", obc: "₹200", ews: "₹200", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-05-07",
      lastDate: "2026-05-27",
      examDate: "2026-08-09"
    },
    how_to_apply: `1. Visit the UPSC online portal: https://upsconline.gov.in/
2. Click "Online Application for Various Examinations of UPSC"
3. Select "CAPF (AC) Examination, 2026"
4. Register with a valid email and mobile number
5. Fill the application — personal details, educational qualification, CAPF preference
6. Upload photo and signature as per specifications
7. Pay fee of ₹200 online (Net Banking / UPI / Debit / Credit Card)
8. SC/ST/Female/Ex-Servicemen: Fee Nil
9. Download and print the confirmation page
10. Admit Card released on upsc.gov.in before Written Exam`,
    selection_process: `**Stage 1 — Written Examination**

| Paper | Type | Marks | Duration |
|---|---|---|---|
| Paper I: General Ability & Intelligence | Objective MCQ | 250 | 2 hours |
| Paper II: General Studies, Essay & Comprehension | Descriptive | 200 | 3 hours |
| **Total** | | **450** | **5 hours** |

Negative marking: 1/3 mark per wrong answer in Paper I only.

**Stage 2 — Physical Standards Test (PST) & Physical Efficiency Test (PET)**

Physical Standards:
- Male: Height 165 cm, Chest 81–86 cm
- Female: Height 157 cm

Physical Efficiency Test (qualifying):
- Male: 100m in 16 sec, 800m in 3 min 45 sec, Long Jump 3.5m, High Jump 1.1m
- Female: 100m in 18 sec, 800m in 4 min 45 sec, Long Jump 3.0m, High Jump 0.9m

**Stage 3 — Medical Standards Test**

**Stage 4 — Interview / Personality Test**
150 marks.

Final merit = Written (450) + Interview (150) = 600 marks.`,
    official_link: "https://upsc.gov.in/",
    notification_link: "https://upsc.gov.in/",
    apply_link: "https://upsconline.gov.in/",
    category: "defence",
    state: "all-india",
    is_active: true,
    description: "UPSC CAPF AC 2026 notification for 506 Assistant Commandant vacancies in BSF, CRPF, CISF, ITBP, and SSB. Graduate candidates aged 20–25 years eligible. Four-stage selection: Written Exam, PET/PST, Medical, and Interview. Apply at upsconline.gov.in before May 27, 2026.",
    reading_time: "8 min read",
    image: "",
    last_date: "2026-05-27",
    qualification: "Bachelor's Degree from any recognised university",
    employment_type: "FULL_TIME",
    content: `## What is UPSC CAPF AC?

UPSC CAPF (Central Armed Police Forces — Assistant Commandant) is a prestigious examination conducted by UPSC to recruit gazetted Group A officers for India's five CAPFs — BSF (Border Security Force), CRPF (Central Reserve Police Force), CISF (Central Industrial Security Force), ITBP (Indo-Tibetan Border Police), and SSB (Sashastra Seema Bal).

An Assistant Commandant directly commands a company of 100+ armed personnel and is responsible for border guarding, counter-insurgency operations, industrial security, or border trade facilitation depending on the force.

---

## Vacancies 2026

| Force | Vacancies (approx.) |
|---|---|
| BSF | ~200 |
| CRPF | ~150 |
| CISF | ~80 |
| ITBP | ~46 |
| SSB | ~30 |
| **Total** | **~506** |

---

## Eligibility

### Age Limit (as on August 1, 2026)
- **Minimum:** 20 years
- **Maximum:** 25 years

| Category | Relaxation |
|---|---|
| OBC | +3 years (max 28) |
| SC/ST | +5 years (max 30) |
| Ex-Servicemen | As per central govt rules |

### Educational Qualification
- Bachelor's Degree from a recognised university in any discipline

---

## Salary and Benefits

| Component | Amount |
|---|---|
| Basic Pay (Level 10) | ₹56,100/month |
| Military Service Pay | ₹5,200/month |
| Dearness Allowance | ~₹27,000/month |
| HRA / Accommodation | Free force accommodation |
| **Effective Monthly** | **~₹88,000–₹1,00,000/month** |

Benefits: CGHS medical, NPS pension, LTC, canteen facility, and subsidised officer's mess. Career progression: Commandant, DIG, IG, and ADG level on promotion.

---

## Selection Process

### Written Exam

**Paper I: General Ability & Intelligence (250 marks, 2 hours)**
- Objective MCQ
- General Mental Ability, Reasoning, Numerical Aptitude, General Studies
- Negative marking: 1/3 per wrong answer

**Paper II: General Studies, Essay & Comprehension (200 marks, 3 hours)**
- Descriptive format (in English or Hindi)
- Section A: Essay (100 marks)
- Section B: Comprehension & Précis (50 marks)
- Section C: Comprehension passage questions (50 marks)

### Physical Standards Test (PST)
Height, chest, and weight check as per force standards.

### Physical Efficiency Test (PET — Qualifying)

| Event | Male | Female |
|---|---|---|
| 100m Race | 16 seconds | 18 seconds |
| 800m Race | 3 min 45 sec | 4 min 45 sec |
| Long Jump | 3.5 m | 3.0 m |
| High Jump | 1.1 m | 0.9 m |
| Shot Put (7.26 kg) | 4.5 m | Not required |

### Medical Test
Vision, colour blindness, general physical fitness standards.

### Interview / Personality Test
150 marks. Conducted at UPSC.

Final merit: Written (450) + Interview (150) = **600 marks total.**

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Release | May 7, 2026 |
| Application Start | May 7, 2026 |
| **Last Date to Apply** | **May 27, 2026** |
| Written Examination | August 9, 2026 |
| PET/PST | October 2026 (expected) |
| Interview | January–February 2027 (expected) |

---

## Preparation Strategy

**Paper I (GS Objective):** Similar to UPSC Civil Services Prelims but lighter. Current Affairs (6 months), Basic Science, Indian History & Polity, Geography, and Defence/Security Current Affairs are key. CAPF specifically emphasizes awareness about India's border security and internal security challenges.

**Paper II (Essay + Comprehension):** This is where serious candidates differentiate. The essay is 100 marks — choose topics you can write with depth (governance, security, social issues). Comprehension is a speed vs. accuracy game — read the passage fully before answering.

**PET Preparation:** Start running 2 months before PET. 800m race in 3:45 requires consistent cardiovascular training — don't neglect this regardless of written exam score. Long Jump and High Jump need specific training too.

---

## Official Links

| Resource | Link |
|---|---|
| UPSC Official Website | [upsc.gov.in](https://upsc.gov.in/) |
| Apply Online | [upsconline.gov.in](https://upsconline.gov.in/) |
| Official Notification | [upsc.gov.in](https://upsc.gov.in/) |
`
  },

  // ─── 6. UPSC ESE 2026 ────────────────────────────────────────────────────────
  {
    slug: "upsc-ese-2026",
    title: "UPSC ESE 2026 — Engineering Services Examination",
    organization: "Union Public Service Commission (UPSC)",
    post_name: "Assistant Executive Engineer (AEE) / Class I Services in Civil, Mechanical, Electrical, and Electronics & Telecommunications Engineering",
    vacancies: 529,
    eligibility: {
      age: "21–30 years as on January 1, 2026 (OBC +3 yrs: max 33, SC/ST +5 yrs: max 35, PwBD +10 yrs).",
      education: "Bachelor's Degree in Engineering (B.E./B.Tech.) in Civil, Mechanical, Electrical, or Electronics & Telecommunication from a recognised university. Candidates appearing in final year exam may also apply."
    },
    salary: "Pay Level 10 — ₹56,100–₹1,77,500/month basic + DA + HRA + Transport Allowance. Total in-hand approximately ₹80,000–₹1,00,000/month. Posting in CPWD, Railways, Military Engineer Services, BSNL, and other central engineering organisations.",
    application_fee: { general: "₹200", obc: "₹200", ews: "₹200", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-01-22",
      lastDate: "2026-02-11",
      examDate: "2026-06-07"
    },
    how_to_apply: `1. Visit UPSC online portal: https://upsconline.gov.in/
2. Select "Engineering Services (Preliminary) Examination, 2026"
3. Register with email and mobile number (one-time)
4. Fill personal details, engineering discipline, and educational qualification
5. Upload photo and signature as per specifications
6. Pay ₹200 fee online (Net Banking / UPI / Debit / Credit Card)
7. SC/ST/Female/PwBD/Ex-Servicemen: Fee Nil
8. Download and print the confirmation page
9. Admit Card released on upsc.gov.in before Prelims`,
    selection_process: `**Stage 1 — Preliminary Exam (Objective, Common for all disciplines)**

| Paper | Marks | Duration |
|---|---|---|
| Paper I: General Studies & Engineering Aptitude | 200 | 2 hours |
| Paper II: Engineering Discipline (Civil/Mech/Elec/E&T) | 300 | 3 hours |
| **Total** | **500** | **5 hours** |

Negative marking: 1/3 per wrong answer. Qualifying for Mains — marks not counted.

**Stage 2 — Main Exam (Conventional Descriptive)**

| Paper | Marks | Duration |
|---|---|---|
| Paper I: Discipline Specific | 300 | 3 hours |
| Paper II: Discipline Specific | 300 | 3 hours |
| **Total** | **600** | **6 hours** |

**Stage 3 — Personality Test (Interview)**
200 marks.

Final merit = Mains (600) + Interview (200) = **800 marks total.**`,
    official_link: "https://upsc.gov.in/",
    notification_link: "https://upsc.gov.in/",
    apply_link: "https://upsconline.gov.in/",
    category: "upsc",
    state: "all-india",
    is_active: true,
    description: "UPSC ESE 2026 (Engineering Services Examination) for 529 Class I engineering posts across Civil, Mechanical, Electrical, and Electronics & Telecommunications streams. Engineering graduates aged 21–30 years eligible. Three-stage selection: Prelims, Mains, and Personality Test. Apply at upsconline.gov.in.",
    reading_time: "9 min read",
    image: "",
    last_date: "2026-02-11",
    qualification: "B.E./B.Tech. in Civil, Mechanical, Electrical, or Electronics & Telecommunication Engineering from a recognised university",
    employment_type: "FULL_TIME",
    content: `## What is UPSC ESE?

UPSC ESE (Engineering Services Examination) — also called IES (Indian Engineering Service) — is the most prestigious engineering recruitment by UPSC. It recruits engineers directly into Class I gazetted Group A posts in central government engineering organisations.

An IES officer starts as an Assistant Executive Engineer and progresses to Executive Engineer, Superintending Engineer, Chief Engineer, and Director General level on promotion. The career trajectory is similar to IAS but within engineering departments.

---

## Disciplines and Organisations

| Discipline | Major Posting Organisations |
|---|---|
| Civil Engineering | CPWD, Railways, CWC, Border Roads Organisation, NHIDCL |
| Mechanical Engineering | Railways, BHEL, Ordnance Factories, BRO |
| Electrical Engineering | CPWD, Railways, BSNL, BRO |
| Electronics & Telecom | BSNL, Railways, DoT, MEA, BEL |

---

## Vacancies 2026

| Discipline | Vacancies (approx.) |
|---|---|
| Civil Engineering | ~250 |
| Mechanical Engineering | ~155 |
| Electrical Engineering | ~80 |
| Electronics & Telecom | ~44 |
| **Total** | **~529** |

---

## Eligibility

### Age Limit (as on January 1, 2026)
- **Minimum:** 21 years
- **Maximum:** 30 years

| Category | Relaxation |
|---|---|
| OBC | +3 years (max 33) |
| SC/ST | +5 years (max 35) |
| PwBD | +10 years |
| Ex-Servicemen | As per Govt rules |

### Educational Qualification
- B.E./B.Tech. in the relevant engineering discipline
- Final year appearing candidates may apply (must produce degree certificate before joining)

---

## Salary

| Component | Amount |
|---|---|
| Basic Pay (Level 10) | ₹56,100/month |
| Dearness Allowance | ~₹27,000/month |
| HRA (metro) | ₹10,098/month |
| Transport Allowance | ₹7,200/month |
| **Gross Monthly** | **~₹1,00,000–₹1,10,000/month** |

Benefits: CGHS medical, NPS pension, LTC, government accommodation on allotment.

---

## Exam Pattern

### Prelims (Objective, Qualifying)
- Paper I (GS & Engg Aptitude): 200 marks — Engineering Maths, Reasoning, Engineering Aptitude, General Awareness
- Paper II (Discipline-specific): 300 marks — Core engineering subjects of your discipline

Negative marking: 1/3 per wrong answer.

### Mains (Conventional Descriptive)
- Paper I: Advanced core engineering (300 marks)
- Paper II: Advanced core engineering (300 marks)

Full GATE-level depth required for Mains. Calculations, derivations, design problems.

### Personality Test
200 marks. UPSC board interview — technical knowledge + general awareness + personality.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Release | January 22, 2026 |
| Application Start | January 22, 2026 |
| **Last Date to Apply** | **February 11, 2026** |
| Prelims Exam | June 7, 2026 |
| Mains Exam | November 2026 (expected) |
| Personality Test | March 2027 (expected) |

---

## Preparation Strategy

**ESE vs GATE:** ESE requires deeper application-level knowledge than GATE. GATE is MCQ — ESE Mains is descriptive with derivations, design, and long-answer problems. Prepare for both but don't equate them.

**GS & Engineering Aptitude (Prelims Paper I — 200 marks):** This is non-technical and often neglected. Covers Engineering Maths, Engineering Aptitude, Current Science & Technology, Environment, Ethics in Engineering Practice. Candidates who score high here significantly improve their shortlisting chances.

**Core Engineering (Prelims Paper II + Mains):** Focus on UPSC ESE previous year papers (2015–2025). Pattern is consistent — 8–10 topics carry 70% of marks in each discipline. Identify and master those.

**Interview Preparation:** ESE interview is technical + personality. Prepare your B.Tech project, current engineering applications in India (smart cities, infrastructure, space tech), and policy knowledge relevant to your engineering sector.

---

## Official Links

| Resource | Link |
|---|---|
| UPSC Official Website | [upsc.gov.in](https://upsc.gov.in/) |
| Apply Online | [upsconline.gov.in](https://upsconline.gov.in/) |
| Official Notification | [upsc.gov.in](https://upsc.gov.in/) |
`
  },

  // ─── 7. UPSC CMS 2026 ────────────────────────────────────────────────────────
  {
    slug: "upsc-cms-2026",
    title: "UPSC CMS 2026 — Combined Medical Services Examination",
    organization: "Union Public Service Commission (UPSC)",
    post_name: "Assistant Divisional Medical Officer (ADMO) in Railways, Junior Scale Posts in CGHS, and Medical Officer in various Central Government Hospitals",
    vacancies: 827,
    eligibility: {
      age: "32 years maximum as on August 1, 2026 (OBC +3 yrs: max 35, SC/ST +5 yrs: max 37, PwBD +10 yrs, Ex-Servicemen as per rules).",
      education: "MBBS Degree from a Medical College/University recognised by the Medical Council of India (MCI/NMC). Completion of internship required before the date specified in the notification."
    },
    salary: "Pay Level 10 — ₹56,100–₹1,77,500/month basic + NPA (Non-Practising Allowance) 25% of basic + DA + HRA + CGHS. Total effective monthly package ₹1,20,000–₹1,50,000/month. NPA makes CMS salaries significantly higher than standard Level 10 posts.",
    application_fee: { general: "₹200", obc: "₹200", ews: "₹200", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-04-02",
      lastDate: "2026-04-22",
      examDate: "2026-07-20"
    },
    how_to_apply: `1. Visit UPSC online portal: https://upsconline.gov.in/
2. Select "Combined Medical Services Examination, 2026"
3. Register with a valid email and mobile number
4. Fill personal details, MBBS registration details, internship completion date
5. Upload photo and signature
6. Pay ₹200 fee online (SC/ST/Female/PwBD: Nil)
7. Submit and download the confirmation page
8. Admit Card released on upsc.gov.in before the exam`,
    selection_process: `**Stage 1 — Written Examination**

| Paper | Type | Marks | Duration |
|---|---|---|---|
| Paper I: General Medicine + Paediatrics | Objective MCQ | 250 | 2 hours |
| Paper II: Surgery + Gynaecology & Obstetrics + Preventive & Social Medicine | Objective MCQ | 250 | 2 hours |
| **Total** | | **500** | **4 hours** |

Negative marking: 1/3 per wrong answer.

**Stage 2 — Personality Test (Interview)**
100 marks.

Final merit = Written Exam (500) + Interview (100) = **600 marks total.**`,
    official_link: "https://upsc.gov.in/",
    notification_link: "https://upsc.gov.in/",
    apply_link: "https://upsconline.gov.in/",
    category: "upsc",
    state: "all-india",
    is_active: true,
    description: "UPSC CMS 2026 (Combined Medical Services) for 827 Medical Officer posts across Railways (RDSO), CGHS, Central Government Hospitals, and other services. MBBS graduates aged up to 32 years eligible. Two-stage selection: Written Exam and Personality Test. Apply at upsconline.gov.in before April 22, 2026.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-04-22",
    qualification: "MBBS from a Medical College recognised by NMC (formerly MCI). Completion of internship mandatory.",
    employment_type: "FULL_TIME",
    content: `## What is UPSC CMS?

UPSC CMS (Combined Medical Services Examination) is conducted by UPSC to recruit MBBS doctors directly into central government medical services. It is the most streamlined route for medical graduates to enter a central government service with officer-grade pay.

CMS recruited doctors work in Indian Railways dispensaries, CGHS clinics, central government hospitals, ordnance factories, and paramilitary force medical units.

---

## Posts and Services

| Post | Service |
|---|---|
| Junior Scale Post | Central Health Service (CHS) |
| Assistant Divisional Medical Officer (ADMO) | Indian Railways |
| Assistant Medical Officer | Central Govt Hospitals (LDCE included) |
| Other Medical Officer Posts | CAPFs, Ordnance Factories |

---

## Eligibility

### Age Limit (as on August 1, 2026)
- **Maximum:** 32 years
- OBC: max 35 years
- SC/ST: max 37 years
- PwBD: +10 years

### Educational Qualification
- **MBBS** from a medical college recognised by NMC (National Medical Commission, formerly MCI)
- Internship must be completed on or before the date specified in the notification (typically August 2026)

---

## Salary — Why CMS is Attractive

| Component | Amount |
|---|---|
| Basic Pay (Level 10) | ₹56,100/month |
| NPA (Non-Practising Allowance) — 25% of basic | ₹14,025/month |
| Dearness Allowance | ~₹32,000/month |
| HRA (metro) | ₹10,098/month |
| CGHS Medical | Covered |
| **Effective Gross Monthly** | **~₹1,20,000–₹1,40,000/month** |

NPA is a special allowance only for government doctors — it compensates for not having a private practice. Combined with central government benefits (pension, LTC, accommodation), the total package is highly competitive.

---

## Exam Pattern

### Written Examination (2 papers, Objective)

**Paper I: General Medicine + Paediatrics — 250 marks**
- General Medicine: systemic diseases, clinical conditions, diagnosis, treatment
- Paediatrics: child health, growth, development, common paediatric conditions

**Paper II: Surgery + Gynaecology/Obstetrics + Preventive & Social Medicine — 250 marks**
- Surgery: general surgical conditions, trauma, orthopaedics basics
- Gynaecology & Obstetrics: antenatal care, delivery, gynaecological disorders
- PSM (Community Medicine): epidemiology, public health, national health programmes

Negative marking: 1/3 per wrong answer.

### Personality Test
100 marks. UPSC board interview — clinical scenario-based questions, general awareness about Indian healthcare, policy.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Release | April 2, 2026 |
| Application Start | April 2, 2026 |
| **Last Date to Apply** | **April 22, 2026** |
| Written Examination | July 20, 2026 |
| Personality Test | November–December 2026 (expected) |

---

## Preparation Strategy

**Use your MBBS textbooks + clinical focus:** CMS questions are clinically oriented — they test what a general medical officer would encounter in a primary and secondary care setting. Applied clinical medicine is more important than theoretical pathology.

**PSM (Preventive & Social Medicine) is crucial:** This subject covers national health programmes, epidemiology, vital statistics, environmental health, and social medicine. PSM typically has 40–50 questions in Paper II — master it. Study Park's PSM textbook thoroughly.

**Previous year papers:** UPSC CMS previous year papers (2015–2025) are the best guide to question patterns. Questions repeat concepts, though not verbatim. Focus on Paper II (Surgery + G&O + PSM) — many doctors underestimate it.

---

## Official Links

| Resource | Link |
|---|---|
| UPSC Official Website | [upsc.gov.in](https://upsc.gov.in/) |
| Apply Online | [upsconline.gov.in](https://upsconline.gov.in/) |
| Official Notification | [upsc.gov.in](https://upsc.gov.in/) |
`
  },

  // ─── 8. TNPSC Group 4 2026 ────────────────────────────────────────────────────
  {
    slug: "tnpsc-group-4-2026",
    title: "TNPSC Group 4 2026 — Tamil Nadu Junior Assistant & Typist Recruitment",
    organization: "Tamil Nadu Public Service Commission (TNPSC)",
    post_name: "Junior Assistant (Non-Security), Junior Assistant (Accounts), Typist (Tamil/English), Field Surveyor, Draftsman, and other Group 4 posts",
    vacancies: 6244,
    eligibility: {
      age: "18–32 years for most posts (some posts up to 35 years). Age relaxation: BC/MBC +3 yrs, SC/ST +10 yrs, PwBD as per Tamil Nadu rules. Tamil Nadu domicile required.",
      education: "10+2 (Higher Secondary/Intermediate) pass for most posts. Some posts require Diploma or specific technical qualification. Tamil language proficiency mandatory."
    },
    salary: "Pay Level 4–7 (Tamil Nadu state pay scales) — ₹20,600–₹65,500/month basic + DA + HRA + state allowances. Junior Assistant: ~₹28,000–₹38,000/month gross. Typist: ~₹32,000–₹42,000/month gross.",
    application_fee: { general: "₹150", obc: "₹150", ews: "₹150", sc_st: "Nil", women: "Nil", ph: "Nil" },
    important_dates: {
      startDate: "2026-03-01",
      lastDate: "2026-03-31",
      examDate: "2026-06-28"
    },
    how_to_apply: `1. Visit the TNPSC one-time registration portal: https://www.tnpscexams.in/
2. Complete One Time Registration (OTR) if not already registered
3. Log in and apply for "Group 4 Services / CCSE IV 2026"
4. Fill personal details, educational qualification, community, post preference
5. Upload photo and signature
6. Pay ₹150 fee online via Net Banking / Debit Card / Credit Card / UPI
7. SC/ST/PwBD/Women: Fee exempted
8. Submit and download confirmation
9. Admit Card released on tnpscexams.in before exam date`,
    selection_process: `**Single Stage — Written Examination (Objective)**

| Section | Marks | Duration |
|---|---|---|
| General Studies | 75 | — |
| Aptitude & Mental Ability (AMCAT) | 25 | — |
| General Tamil / English | 100 | — |
| **Total** | **200** | **3 hours** |

No negative marking. No interview — direct recruitment from merit list.

For Typist posts: Additional Typewriting proficiency test (qualifying only — 40 wpm English or 30 wpm Tamil).`,
    official_link: "https://www.tnpsc.gov.in/",
    notification_link: "https://www.tnpsc.gov.in/",
    apply_link: "https://www.tnpscexams.in/",
    category: "state-psc",
    state: "tamil-nadu",
    is_active: true,
    description: "TNPSC Group 4 (CCSE IV) 2026 — a large recruitment for 6,244 posts including Junior Assistant, Typist, Field Surveyor, and other Group 4 posts. 10+2 pass candidates aged 18–32 years eligible. Single written examination with no interview. Direct merit-based selection. Apply at tnpscexams.in.",
    reading_time: "7 min read",
    image: "",
    last_date: "2026-03-31",
    qualification: "10+2 (Higher Secondary) pass. Some posts require Diploma or technical qualification. Tamil language proficiency mandatory.",
    employment_type: "FULL_TIME",
    content: `## What is TNPSC Group 4?

TNPSC Group 4 (also called CCSE IV — Combined Civil Services Examination IV) is the largest Tamil Nadu government recruitment in terms of volume. It fills clerical and junior administrative posts across Tamil Nadu's government departments — Junior Assistants, Typists, Field Surveyors, and Draftsmen.

Group 4 is extremely popular because it is accessible (10+2 qualification), has no interview, and the vacancies are massive.

---

## Posts Offered

| Post | Qualification |
|---|---|
| Junior Assistant (Non-Security) | 10+2 (any stream) |
| Junior Assistant (Accounts) | 10+2 (Commerce preferred) |
| Typist (Tamil) | 10+2 + Tamil typewriting |
| Typist (English) | 10+2 + English typewriting |
| Field Surveyor | 10+2 + relevant training |
| Draftsman | Diploma or equivalent |
| Bill Collector | 10+2 |
| Other Group 4 Posts | 10+2 / relevant qualification |

---

## Eligibility

### Age Limit (as on July 1, 2026)
- **General:** 18–32 years
- **BC/MBC:** Up to 35 years
- **SC/ST:** Up to 42 years

Tamil Nadu domicile required.

### Educational Qualification
- Minimum: 10+2 (Higher Secondary) pass
- Tamil language proficiency is mandatory — tested in the written exam itself

---

## Salary

| Post | Basic Pay | Gross Monthly |
|---|---|---|
| Junior Assistant (Level 4) | ₹20,600 | ~₹28,000–₹35,000 |
| Typist (Level 5) | ₹25,300 | ~₹33,000–₹42,000 |
| Field Surveyor (Level 5) | ₹25,300 | ~₹33,000–₹42,000 |

---

## Exam Pattern

### Written Examination (Single stage, Objective)

| Section | Marks |
|---|---|
| General Studies | 75 |
| Aptitude & Mental Ability Test (AMCAT) | 25 |
| General Tamil | 100 |
| **Total** | **200** |

Duration: 3 hours. No negative marking. No interview.

**For Typist Posts:** Additional Typewriting Speed Test (qualifying):
- Tamil Typewriting: 30 words per minute
- English Typewriting: 40 words per minute

---

## Syllabus Highlights

**General Studies (75 marks):** Unit 1: General Science (Physics, Chemistry, Biology basics). Unit 2: Current Events — Tamil Nadu and National. Unit 3: History of India + Tamil Nadu. Unit 4: Indian Polity. Unit 5: Indian Economy and Geography.

**AMCAT (25 marks):** Logical Reasoning, Numerical Ability, Comprehension. Standard 10th-level difficulty — very manageable with 2 weeks of practice.

**General Tamil (100 marks):** Tamil grammar (Eluthu, Sol, Porutu Ilakkanam), Tamil literature (Sangam literature, medieval poetry, modern prose), and Tamil comprehension. For Tamil-medium school students, this section is a strong advantage.

---

## Important Dates 2026

| Event | Date |
|---|---|
| Application Start | March 1, 2026 |
| **Last Date to Apply** | **March 31, 2026** |
| Written Exam | June 28, 2026 |
| Result & Counselling | September–October 2026 (expected) |

---

## Preparation Strategy

**Tamil (100 marks — most important):** Grammar, literature, and comprehension. For Tamil-medium students this is largely revision. For others, buy a TNPSC Tamil grammar guide and study the tested grammar rules — they are predictable and consistent across all TNPSC exams.

**General Studies (75 marks):** History of Tamil Nadu (Sangam kingdoms, Cholas, Nayaks, British Tamil Nadu, Indian National Congress Tamil Nadu) and current affairs are the biggest weightage topics. Read a TNPSC Group 4 study material or use GK apps with Tamil Nadu filter.

**AMCAT (25 marks):** 1–2 weeks of arithmetic and reasoning practice is enough. Don't over-invest here.

**For Typist aspirants:** Practice typewriting daily from day 1. Speed builds with daily practice — 30/40 wpm is very achievable with 2 months of consistent practice.

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

console.log(`\nInserting ${jobs.length} jobs (Batch 4 — State PSCs: Assam, Punjab, CG, Odisha + UPSC CAPF, ESE, CMS + TNPSC Group 4)...\n`);

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
console.log(`📊 Total now: 42 + ${inserted} = ${42 + inserted} active jobs`);
