import { createClient } from "@supabase/supabase-js";

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const jobs = [
  // ─── 1. CISF ASI Paramedical Staff 2026 ─────────────────────────────────────
  {
    slug: "cisf-asi-paramedical-2026",
    title: "CISF ASI Paramedical Staff Recruitment 2026 — 24 Posts | Pharmacist, X-Ray & Lab Technician | Apply by July 7",
    organization: "Central Industrial Security Force (CISF)",
    post_name: "ASI Pharmacist, ASI X-Ray Technician, ASI Lab Technician",
    vacancies: 24,
    description:
      "CISF is hiring 24 ASI Paramedical Staff in 2026 — 18 Pharmacist, 1 X-Ray Technician, 5 Lab Technician posts. Pay Level-5 (₹29,200–₹92,300). Apply online at cisfrectt.cisf.gov.in from June 8 to July 7, 2026. Age limit: 18–28 years. Selection via written test and medical examination.",
    eligibility:
      "Nationality: Indian national. Age limit: 18 to 28 years as on July 7, 2026. Age relaxation: OBC (Non-Creamy Layer) — 3 years; SC/ST — 5 years; PwBD (General) — 10 years; Ex-Servicemen — as per government rules. Educational qualification varies by post. ASI Pharmacist: 10+2 in Science stream with Diploma or Degree in Pharmacy from a recognized institution, plus valid registration under the Pharmacy Act, 1948. ASI X-Ray Technician: 10+2 in Science with a 2-year Diploma in Radiography from a Central or State Government recognized institution. ASI Lab Technician: 10+2 in Science with a Diploma in Medical Lab Technology from a recognized institution.",
    salary:
      "Pay Level-5 as per 7th Central Pay Commission: Basic Pay ₹29,200 per month, rising to a maximum of ₹92,300. In addition to basic pay, CISF ASI employees receive Dearness Allowance (DA), House Rent Allowance (HRA) based on posting city, medical benefits for self and family, and other central government allowances. Estimated gross monthly salary at entry level is approximately ₹40,000–₹50,000 depending on the city of posting.",
    application_fee: {
      general_obc_ews: "₹100",
      sc_st_pwbd: "Nil",
      female: "Nil",
      ex_servicemen: "Nil",
      payment_mode: "Online only — debit card, credit card, net banking, or UPI at cisfrectt.cisf.gov.in",
    },
    important_dates: {
      startDate: "2026-06-08",
      lastDate: "2026-07-07",
      lastDateFeePayment: "2026-07-07",
      notificationDate: "2026-06-08",
      examDate: "To be announced — check cisfrectt.cisf.gov.in",
      admitCard: "To be released before exam — check cisfrectt.cisf.gov.in",
    },
    how_to_apply:
      "1. Visit the official CISF recruitment portal at cisfrectt.cisf.gov.in. 2. Click on the ASI Paramedical Staff 2026 recruitment notification. 3. Register with a valid email ID and mobile number. 4. Fill in the application form with personal, educational, and professional details accurately. 5. Upload your scanned photograph and signature in the specified format. 6. Pay the application fee online (₹100 for General/OBC/EWS; nil for SC/ST/Female/Ex-SM). 7. Submit the completed form and save the confirmation number. Last date: July 7, 2026.",
    selection_process:
      "Stage 1 — Written Test: Objective-type multiple choice questions covering subjects relevant to the respective post (Pharmacy, Radiology, or Medical Lab Technology), along with General Knowledge and reasoning. Stage 2 — Physical Standards Verification (PST): Candidates must meet the prescribed height, weight, and chest measurement standards for CISF. Stage 3 — Medical Examination: A medical fitness test conducted by a Medical Board as per CISF norms. Final selection is based on merit in the written test, subject to clearing PST and medical examination.",
    official_link: "https://cisfrectt.cisf.gov.in",
    notification_link: "https://cisfrectt.cisf.gov.in",
    apply_link: "https://cisfrectt.cisf.gov.in",
    category: "defence",
    state: "all-india",
    is_active: true,
    last_date: "2026-07-07",
    qualification:
      "ASI Pharmacist: 10+2 in Science with Diploma/Degree in Pharmacy plus valid registration under the Pharmacy Act, 1948. ASI X-Ray Technician: 10+2 in Science with 2-year Diploma in Radiography from a Central or State Government recognized institution. ASI Lab Technician: 10+2 in Science with Diploma in Medical Lab Technology from a recognized institution.",
    employment_type: "FULL_TIME",
    reading_time: "5 min read",
    content: `## CISF ASI Paramedical Staff Recruitment 2026

The Central Industrial Security Force has released a notification for 24 Assistant Sub-Inspector (ASI) Paramedical Staff posts in 2026. Applications are open from June 8 to July 7, 2026 at cisfrectt.cisf.gov.in.

18 posts are for ASI Pharmacist, 1 for ASI X-Ray Technician, and 5 for ASI Lab Technician.

---

## Important dates

| Event | Date |
|---|---|
| Notification released | 8 June 2026 |
| Application opens | 8 June 2026 |
| **Last date to apply** | **7 July 2026** |
| Exam date | To be announced |

---

## Vacancy breakdown

| Post | Vacancies |
|---|---|
| ASI Pharmacist | 18 |
| ASI X-Ray Technician | 1 |
| ASI Lab Technician | 5 |
| **Total** | **24** |

---

## Salary

Selected candidates are placed in Pay Level-5 of the 7th Pay Commission pay matrix: basic pay of ₹29,200, going up to ₹92,300. With DA, HRA, and other allowances, the estimated gross monthly salary at entry level is ₹40,000–₹50,000 depending on the posting city.

---

## Eligibility criteria

### Age limit (as on 7 July 2026)

| Category | Age |
|---|---|
| General | 18–28 years |
| OBC (Non-Creamy Layer) | 18–31 years |
| SC/ST | 18–33 years |
| PwBD (General) | 18–38 years |
| Ex-Servicemen | As per rules |

### Educational qualification

**ASI Pharmacist:** 10+2 in Science with a Diploma or Degree in Pharmacy from a recognized institution. Valid registration under the Pharmacy Act, 1948 is mandatory.

**ASI X-Ray Technician:** 10+2 in Science with a 2-year Diploma in Radiography from a Central or State Government recognized institution.

**ASI Lab Technician:** 10+2 in Science with a Diploma in Medical Lab Technology from a recognized institution.

---

## Application fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹100 |
| SC / ST | Nil |
| Female candidates | Nil |
| Ex-Servicemen | Nil |
| PwBD | Nil |

Payment is online only through the CISF recruitment portal.

---

## Selection process

1. Written test — objective type, covering subject knowledge (Pharmacy/Radiology/Lab Technology), General Knowledge, and reasoning
2. Physical Standards Test (PST) — height, weight, chest measurements as per CISF norms
3. Medical examination — fitness test by the Medical Board

Final selection is on merit in the written test, subject to clearing PST and medical.

---

## How to apply

1. Go to cisfrectt.cisf.gov.in
2. Click on the ASI Paramedical Staff 2026 notification
3. Register with your email ID and mobile number
4. Fill in the application form accurately
5. Upload your photo and signature
6. Pay the fee (₹100 for General/OBC/EWS; nil for others)
7. Submit and save the confirmation

**Last date: July 7, 2026.**

---

## Official links

- Apply online: [cisfrectt.cisf.gov.in](https://cisfrectt.cisf.gov.in)
- Official notification: [cisfrectt.cisf.gov.in](https://cisfrectt.cisf.gov.in)
`,
    completeness_score: 88,
  },

  // ─── 2. DRDO DEAL Apprentice 2026 ───────────────────────────────────────────
  {
    slug: "drdo-deal-apprentice-2026",
    title: "DRDO DEAL Apprentice Recruitment 2026 — 77 Posts | Graduate, Diploma & ITI | Apply by July 23",
    organization: "Defence Electronics Applications Laboratory (DRDO DEAL)",
    post_name: "Graduate Apprentice, Diploma Apprentice, ITI Apprentice",
    vacancies: 77,
    description:
      "DRDO DEAL, Dehradun is recruiting 77 Apprentices in 2026 — 19 Graduate, 8 Diploma, and 50 ITI posts across Engineering and ITI trades. Monthly stipend: ₹10,560 (ITI) to ₹12,300 (Graduate). Apply via NATS 2.0 or NAPS portal by July 23, 2026. Only candidates who passed qualifying exam between 2022 and 2026 are eligible. No application fee.",
    eligibility:
      "Nationality: Indian national. Age: Minimum 18 years. No upper age limit specified. Educational qualification: Graduate Apprentice — B.E./B.Tech in Electronics & Communication, Mechanical, Computer Science, Electrical Engineering with minimum 60% marks, passed between 2022 and 2026. Diploma Apprentice — Diploma in relevant engineering discipline with minimum 60% marks, passed between 2022 and 2026. ITI Apprentice — ITI pass certificate from NCVT or SCVT in relevant trade, passed between 2022 and 2026. Candidates who passed their qualifying exam before 2022 are not eligible. No registration required on NATS/NAPS if already registered.",
    salary:
      "This is an apprenticeship training program. Selected candidates receive a monthly stipend — not a regular salary. Stipend rates: Graduate Apprentice — ₹12,300 per month. Diploma Apprentice — ₹10,981 per month. ITI Apprentice — ₹10,560 per month. 50% of the stipend is paid by DEAL and 50% by Boat under the DBT scheme. There is no guarantee of permanent employment at DRDO or DEAL after completing the training.",
    application_fee: {
      all_categories: "Nil",
      payment_mode: "No fee applicable — apply free of cost through NATS 2.0 or NAPS portal",
    },
    important_dates: {
      notificationDate: "2026-06-23",
      startDate: "2026-06-23",
      lastDate: "2026-07-23",
      lastDateFeePayment: "Not applicable",
      examDate: "Selection on merit — no written exam; based on marks in qualifying examination",
      admitCard: "Not applicable",
    },
    how_to_apply:
      "Graduate and Diploma Apprentice candidates must apply through the NATS 2.0 portal (ID: NUKDDC000015) at nats.education.gov.in. ITI Apprentice candidates must apply through the NAPS portal (Code: E01160500005) at apprenticeshipindia.org. Steps: 1. Register on the respective portal if not already registered. 2. Search for DRDO DEAL using the establishment ID or code provided. 3. Apply for the relevant trade or discipline. 4. Ensure your qualification documents are uploaded correctly. Last date: July 23, 2026.",
    selection_process:
      "There is no written examination for DRDO DEAL Apprentice 2026. Selection is on merit — based on the percentage of marks obtained in the qualifying examination (B.E./B.Tech, Diploma, or ITI). Candidates shortlisted on merit will be called for document verification. Original certificates of qualification, age proof, and caste certificate (if applicable) must be produced at the time of verification.",
    official_link: "https://drdo.gov.in",
    notification_link: "https://drdo.gov.in/drdo/offerings/vacancies",
    apply_link: "https://nats.education.gov.in",
    category: "defence",
    state: "uttarakhand",
    is_active: true,
    last_date: "2026-07-23",
    qualification:
      "Graduate Apprentice: B.E./B.Tech in Electronics & Communication, Mechanical, Computer Science, or Electrical Engineering with minimum 60% marks, passed between 2022 and 2026. Diploma Apprentice: Diploma in relevant engineering discipline with minimum 60% marks, passed between 2022 and 2026. ITI Apprentice: ITI pass certificate from NCVT/SCVT in relevant trade, passed between 2022 and 2026. Candidates who passed before 2022 are not eligible.",
    employment_type: "OTHER",
    reading_time: "5 min read",
    content: `## DRDO DEAL Apprentice Recruitment 2026

The Defence Electronics Applications Laboratory (DEAL), a DRDO lab based in Dehradun, has released the Apprentice Recruitment Notification 2026-27 on June 23, 2026. 77 apprentice posts are open across Graduate, Diploma, and ITI categories. Last date to apply is July 23, 2026.

This is an apprenticeship program — one year of structured training at DEAL Dehradun. It does not lead to permanent employment at DRDO or DEAL.

---

## Important dates

| Event | Date |
|---|---|
| Notification released | 23 June 2026 |
| Application opens | 23 June 2026 |
| **Last date to apply** | **23 July 2026** |
| Training duration | 1 year |

---

## Vacancy breakdown

| Category | Posts |
|---|---|
| Graduate Apprentice | 19 |
| Diploma Apprentice | 8 |
| ITI Apprentice | 50 |
| **Total** | **77** |

Disciplines for Graduate/Diploma: Electronics and Communication Engineering, Mechanical Engineering, Computer Science and Engineering, Electrical Engineering, Library Science.

---

## Stipend

| Category | Monthly stipend |
|---|---|
| Graduate Apprentice | ₹12,300 |
| Diploma Apprentice | ₹10,981 |
| ITI Apprentice | ₹10,560 |

50% of the stipend is paid by DEAL and 50% by BOAT under the DBT scheme. No other allowances or benefits apply during the training period.

---

## Eligibility criteria

**Age:** Minimum 18 years. No upper age limit.

**Educational qualification by category:**

Graduate Apprentice: B.E./B.Tech in Electronics and Communication, Mechanical, Computer Science, or Electrical Engineering with minimum 60% marks. Degree must have been awarded between 2022 and 2026.

Diploma Apprentice: Diploma in relevant engineering discipline with minimum 60% marks, awarded between 2022 and 2026.

ITI Apprentice: ITI pass from NCVT or SCVT in relevant trade, completed between 2022 and 2026.

Candidates who passed their qualifying exam before 2022 are not eligible — this is a strict cut-off.

---

## Application fee

No fee. The application is completely free for all categories.

---

## How to apply

**Graduate and Diploma candidates** — apply through the NATS 2.0 portal at nats.education.gov.in using Establishment ID: NUKDDC000015.

**ITI candidates** — apply through the NAPS portal at apprenticeshipindia.org using Establishment Code: E01160500005.

Steps for both portals:
1. Register on the portal if not already registered
2. Search for DRDO DEAL using the establishment ID or code
3. Select the relevant trade or discipline and apply
4. Upload qualification documents in the specified format

**Last date: July 23, 2026.**

---

## Selection process

No written exam. Selection is on merit — percentage of marks in the qualifying examination. Shortlisted candidates are called for document verification with original certificates.

---

## Official links

- DRDO vacancies: [drdo.gov.in/drdo/offerings/vacancies](https://drdo.gov.in/drdo/offerings/vacancies)
- NATS 2.0 (Graduate/Diploma): [nats.education.gov.in](https://nats.education.gov.in)
- NAPS (ITI): [apprenticeshipindia.org](https://apprenticeshipindia.org)
`,
    completeness_score: 88,
  },
];

// ─── SBI PO 2026 update ──────────────────────────────────────────────────────
const sbiPoUpdate = {
  title: "SBI PO 2026 — 1500 Posts | Probationary Officer | Apply by July 8",
  vacancies: 1500,
  description:
    "State Bank of India has released 1500 Probationary Officer vacancies for FY 2026-27. Apply online at sbi.bank.in from June 18 to July 8, 2026. Graduate in any discipline from a recognized university eligible. Age 21–30 years. Basic pay ₹48,480; in-hand approximately ₹80,000–₹85,000 per month. Prelims in August 2026, Mains in September 2026.",
  salary:
    "Basic pay: ₹48,480 per month (including 4 advance increments) as per the latest SBI wage revision. The annual Cost to Company (CTC) at the Mumbai centre is approximately ₹21.97 lakh. Estimated in-hand (net) salary is ₹80,000–₹85,000 per month depending on city of posting. Additional perks include DA, HRA, medical benefits for self and family, Leave Fare Concession, Staff Home Loan at concessional rates, and pension under SBI pension scheme.",
  eligibility:
    "Nationality: Indian national. Age limit: 21 to 30 years as on April 1, 2026. Age relaxation: OBC (Non-Creamy Layer) — 3 years (upper limit 33 years); SC/ST — 5 years (upper limit 35 years); PwBD (General/EWS) — 10 years; PwBD (OBC) — 13 years; PwBD (SC/ST) — 15 years; Ex-Servicemen — as per government rules. Educational qualification: Graduation in any discipline from a recognized university recognized by the Central Government. Final year/semester students may apply provisionally but must produce proof of passing the graduation examination by the time of joining, if selected.",
  important_dates: {
    notificationDate: "2026-06-18",
    startDate: "2026-06-18",
    lastDate: "2026-07-08",
    lastDateFeePayment: "2026-07-08",
    prelimsExam: "First week of August 2026",
    mainsExam: "September 2026",
    interview: "October–November 2026 (tentative)",
    admitCard: "Released approximately 2 weeks before prelims — check sbi.bank.in",
  },
  application_fee: {
    general_obc_ews: "₹750",
    sc_st_pwbd: "Nil",
    payment_mode: "Online only — debit card, credit card, net banking, or UPI at sbi.bank.in",
  },
  how_to_apply:
    "1. Go to sbi.bank.in and navigate to the Careers section. 2. Click on the SBI PO 2026-27 recruitment notification. 3. Register with a valid email ID and mobile number. 4. Complete the online application form with personal, educational, and other required details. 5. Upload your scanned photograph and signature as per the specified dimensions. 6. Pay the application fee online (₹750 for General/OBC/EWS; nil for SC/ST/PwBD). 7. Submit the form and download the confirmation page. Last date: July 8, 2026.",
  selection_process:
    "Stage 1 — Preliminary Examination (Prelims): Online objective test with 100 questions for 100 marks in 1 hour. Three sections: English Language (30 questions, 30 marks, 20 minutes), Quantitative Aptitude (35 questions, 35 marks, 20 minutes), and Reasoning Ability (35 questions, 35 marks, 20 minutes). Sectional and overall cut-offs apply. Candidates shortlisted from Prelims appear for Mains.\n\nStage 2 — Main Examination (Mains): Consists of objective tests (4 sections: Reasoning and Computer Aptitude, Data Analysis and Interpretation, General/Economy/Banking Awareness, English Language) and a Descriptive Test (Letter Writing and Essay, 30 minutes). Total: 200 marks for objective + 50 marks for descriptive.\n\nStage 3 — Group Exercise and Interview: Candidates shortlisted after Mains appear for a Group Exercise (GE) and Personal Interview (PI). Final merit list is prepared based on Mains score (75% weightage) and GE+Interview (25% weightage).\n\nNo interview for SC/ST/OBC/PwBD candidates in certain circumstances — check official notification.",
  last_date: "2026-07-08",
  official_link: "https://sbi.bank.in",
  notification_link: "https://sbi.bank.in",
  apply_link: "https://sbi.bank.in",
  is_active: true,
  qualification:
    "Graduation in any discipline from a recognized university, recognized as such by the Central Government. Final year/semester students may apply provisionally but must pass the graduation exam before joining if selected.",
  content: `## SBI PO 2026 — complete guide for Probationary Officer recruitment

State Bank of India has released the SBI PO notification for FY 2026-27 with 1500 Probationary Officer vacancies. Applications are open from June 18 to July 8, 2026 at sbi.bank.in. Prelims are in August 2026 and Mains in September 2026.

---

## Important dates

| Event | Date |
|---|---|
| Notification released | 18 June 2026 |
| Application opens | 18 June 2026 |
| **Last date to apply** | **8 July 2026** |
| Last date for fee payment | 8 July 2026 |
| Prelims exam | First week of August 2026 |
| Mains exam | September 2026 |
| Group Exercise and Interview | October–November 2026 (tentative) |

---

## Vacancies

1500 posts total — 1446 fresh vacancies and 54 backlog vacancies across SBI circles in India.

---

## Salary

The starting basic pay is ₹48,480 per month (including 4 advance increments) as per the latest SBI wage revision. In-hand salary works out to approximately ₹80,000–₹85,000 per month depending on city of posting.

Annual CTC at the Mumbai centre is around ₹21.97 lakh.

Additional benefits:
- Dearness Allowance (DA) and HRA
- Medical benefits for self and family
- Leave Fare Concession (LFC)
- Staff Home Loan at concessional interest rates
- SBI pension scheme

---

## Eligibility criteria

### Age limit (as on 1 April 2026)

| Category | Age |
|---|---|
| General / EWS | 21–30 years |
| OBC (Non-Creamy Layer) | 21–33 years |
| SC / ST | 21–35 years |
| PwBD (General/EWS) | 21–40 years |
| PwBD (OBC) | 21–43 years |
| PwBD (SC/ST) | 21–45 years |

### Educational qualification

Graduation in any discipline from a recognized university. Final year/semester students may apply provisionally but must submit proof of passing before joining if selected.

---

## Application fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹750 |
| SC / ST / PwBD | Nil |

Payment is online only at sbi.bank.in — debit card, credit card, net banking, or UPI.

---

## Selection process

### Stage 1: Preliminary examination

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Quantitative Aptitude | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| Total | 100 | 100 | 60 min |

Sectional and overall cut-offs apply. Candidates shortlisted from Prelims appear for Mains. Prelims marks are not counted in final merit.

### Stage 2: Main examination

Objective test (200 marks) across 4 sections: Reasoning and Computer Aptitude, Data Analysis and Interpretation, General/Economy/Banking Awareness, and English Language. Plus a Descriptive Test (Letter Writing and Essay, 50 marks, 30 minutes).

### Stage 3: Group Exercise and Interview

Candidates shortlisted after Mains appear for a Group Exercise and Personal Interview. Final merit is based on Mains (75%) and Group Exercise plus Interview (25%).

---

## How to apply

1. Visit sbi.bank.in and go to the Careers section
2. Find the SBI PO 2026-27 notification
3. Register with your email ID and mobile number
4. Fill in the application form with all required details
5. Upload your photo and signature as specified
6. Pay the fee online
7. Submit and save the confirmation

**Last date: July 8, 2026.**

---

## Official links

- Apply online: [sbi.bank.in](https://sbi.bank.in)
- Official notification: [sbi.bank.in](https://sbi.bank.in)
`,
  reading_time: "6 min read",
  completeness_score: 92,
};

async function run() {
  console.log("Inserting new jobs...");

  for (const job of jobs) {
    const { data, error } = await sb.from("jobs").insert(job).select("slug").single();
    if (error) {
      console.error(`Failed to insert ${job.slug}:`, error.message);
    } else {
      console.log("Inserted:", data.slug);
    }
  }

  console.log("\nUpdating SBI PO 2026...");
  const { data, error } = await sb
    .from("jobs")
    .update(sbiPoUpdate)
    .eq("slug", "sbi-po-2026")
    .select("slug, vacancies, last_date")
    .single();

  if (error) {
    console.error("Failed to update SBI PO:", error.message);
  } else {
    console.log("Updated:", data);
  }

  console.log("\nDone.");
}

run();
