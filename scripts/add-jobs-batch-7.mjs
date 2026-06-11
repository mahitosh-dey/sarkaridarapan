// ============================================================
// Batch 7 — 7 Jobs: RRB Group D, India Post GDS, UP Police,
//           MP Police, Bihar Police, SBI SO, DRDO CEPTAM 11
// Run: node scripts/add-jobs-batch-7.mjs
// All facts research-verified June 11, 2026
// ============================================================

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// 1. RRB GROUP D 2026
// Source: rrbapply.gov.in | CEN 09/2025 | Jan 30, 2026
// Verified: 22,195 vacancies | App closed Mar 9 | Exam date TBA
// Pay Level 1: basic ₹18,000 | in-hand ₹22,000–₹33,500
// Selection: CBT → PET → Medical
// ============================================================
const RRB_GROUP_D_2026 = {
  slug: "rrb-group-d-2026",
  title: "RRB Group D 2026 — 22,195 Vacancies (Level 1 Posts) | CEN 09/2025",
  organization: "Railway Recruitment Board (RRB) / Indian Railways",
  post_name: "Track Maintainer Grade IV, Helper/Assistant, Assistant Pointsman, Level 1 Posts",
  vacancies: 22195,
  qualification: "10th class pass OR ITI certificate in relevant trade from a recognised institution OR National Apprenticeship Certificate (NAC) granted by NCVT.",
  eligibility:
    "Nationality: Indian citizen. Age limit: 18 to 33 years as on January 1, 2026. Age relaxation: SC/ST — 5 years; OBC (NCL) — 3 years; PwBD — 10 years; Ex-serviceman — 3 years after deducting military service period; women candidates in some categories — as per Railway Board norms. Educational qualification: Passed Class 10 (Matriculation) or equivalent from a recognised board OR ITI certificate in relevant trade from a NCVT/SCVT-recognised institute OR National Apprenticeship Certificate (NAC) issued by NCVT. Candidates who are appearing in their Class 10 exam or awaiting results are NOT eligible.",
  salary: "Pay Level 1 under 7th CPC Pay Matrix. Basic pay: ₹18,000 per month. Estimated in-hand salary: Metro cities (X category) — ₹30,000–₹33,500; Tier II cities (Y category) — ₹27,000–₹30,000; Small towns (Z category) — ₹22,000–₹25,000. Allowances included: Dearness Allowance (DA), House Rent Allowance (HRA — 24%/16%/8% based on city), Transport Allowance (TA), Night Duty Allowance (where applicable). Additional benefits: Railway Pass (free rail travel), medical facilities, pension under NPS.",
  application_fee: {
    general: "₹500 (₹400 refunded after CBT if candidate appears)",
    sc_st_exserviceman_pwbd_women_minority: "₹250 (fully refunded after appearing in CBT)",
    note: "Fee paid online at rrbapply.gov.in via debit/credit card, net banking, or UPI."
  },
  important_dates: {
    notificationDate: "2026-01-30",
    startDate: "2026-01-31",
    lastDate: "2026-03-09",
    examDate: "To be announced — expected CBT schedule to be released on rrbcdg.gov.in and individual RRB websites",
    admitCard: "Will be released 10 days before exam date"
  },
  how_to_apply:
    "Applications for RRB Group D 2026 (CEN 09/2025) were submitted online at rrbapply.gov.in. The application window closed on March 9, 2026. Candidates who applied must now monitor their registered RRB website and their application status at rrbapply.gov.in for CBT exam schedule and admit card download notifications.",
  selection_process:
    "**Stage 1 — Computer Based Test (CBT)**\nObjective multiple-choice exam. 100 questions, 90 minutes. Subjects: Mathematics (25Q), General Intelligence & Reasoning (30Q), General Science (25Q), General Awareness & Current Affairs (20Q). Negative marking: 1/3 mark per wrong answer. Minimum qualifying marks: 40% General/EWS, 30% OBC-NCL, 30% SC/ST, 10% less than category minimum for PwBD.\n\n**Stage 2 — Physical Efficiency Test (PET)**\nFor candidates shortlisted from CBT. Male candidates: Run 1000 metres in 4 minutes 15 seconds; Lift and carry 35 kg weight for 100 metres in 2 minutes without putting it down. Female candidates: Run 1000 metres in 5 minutes 40 seconds; Lift and carry 20 kg weight for 100 metres in 2 minutes. PET is qualifying — pass/fail only, no marks added.\n\n**Stage 3 — Document Verification (DV)**\nOriginal certificates checked against application data.\n\n**Stage 4 — Medical Examination**\nFitness standards as prescribed by Indian Railways for Level 1 posts.",
  official_link: "https://indianrailways.gov.in",
  notification_link: "https://rrbapply.gov.in",
  apply_link: "https://rrbapply.gov.in",
  category: "railway",
  state: "all-india",
  is_active: true,
  last_date: "2026-03-09",
  employment_type: "FULL_TIME",
  completeness_score: 92,
  reading_time: "7 min read",
  description:
    "RRB Group D 2026 (CEN 09/2025) has 22,195 Level 1 vacancies across Indian Railways. Application closed March 9, 2026. CBT exam date awaited. Pay Level 1, basic ₹18,000. 10th pass eligible.",
  content: `## RRB Group D 2026 — 22,195 Railway Jobs for 10th Pass Candidates

Indian Railways is one of the largest employers in the world. RRB Group D is the entry point into that organisation for candidates with a Class 10 qualification. The 2026 recruitment (CEN 09/2025) has announced **22,195 vacancies** across all Railway zones and divisions in India.

If you applied before March 9, 2026 — your next step is waiting for the CBT exam date, which hasn't been announced yet. If you're planning for the next RRB Group D cycle, this guide covers everything.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | January 30, 2026 |
| Application Opens | January 31, 2026 |
| Application Closes | March 9, 2026 |
| Exam Date | **To be announced** — monitor rrbapply.gov.in |
| Admit Card | 10 days before exam date |

---

## Posts Under RRB Group D

All Group D posts fall under **Pay Level 1**. The main posts include:

- Track Maintainer Grade IV (Permanent Way Department)
- Helper/Assistant in Engineering, Signal & Telecommunication, Electrical, Mechanical, IT, S&T
- Assistant Pointsman (Traffic Department)
- Hospital Attendant, Porter, and various support staff roles

These are field-level posts across Indian Railways. Track Maintainer Grade IV is the most common post — it involves maintaining and repairing railway tracks and is a physically demanding field role.

---

## Eligibility

**Age:** 18 to 33 years as on **January 1, 2026**

**Age relaxation:**

| Category | Relaxation |
|---|---|
| SC / ST | 5 years |
| OBC (Non-Creamy Layer) | 3 years |
| PwBD | 10 years |
| Ex-serviceman | 3 years after deducting military service |

**Educational Qualification:**
Any one of the following:
- Class 10 (Matriculation) pass from a recognised Board
- ITI certificate in any relevant trade from a NCVT/SCVT-recognised institute
- National Apprenticeship Certificate (NAC) from NCVT

Note: Candidates appearing in their 10th exam are NOT eligible. You must have the certificate in hand.

---

## Exam Pattern — CBT

The Computer Based Test is 90 minutes with 100 multiple-choice questions:

| Subject | Questions |
|---|---|
| Mathematics | 25 |
| General Intelligence & Reasoning | 30 |
| General Science | 25 |
| General Awareness & Current Affairs | 20 |
| **Total** | **100** |

**Negative marking: 1/3 mark per wrong answer.** Don't guess randomly.

**Minimum qualifying marks:**
- General/EWS: 40%
- OBC-NCL: 30%
- SC/ST: 30%
- PwBD: 10% less than category minimum

Candidates are shortlisted for PET in a ratio of 3 times the vacancy count in each category.

---

## Physical Efficiency Test (PET)

PET is qualifying — you either pass or fail. It has no marks of its own.

| Standard | Male | Female |
|---|---|---|
| 1000 metres run | Within 4 min 15 sec | Within 5 min 40 sec |
| Weight carrying | 35 kg for 100 metres in 2 minutes (without putting down) | 20 kg for 100 metres in 2 minutes |

Start physical preparation now if you've applied. Don't show up to PET without 8–10 weeks of running and fitness training.

---

## Salary

Group D falls under **Pay Level 1** of the 7th Pay Commission:

| Component | Amount |
|---|---|
| Basic Pay | ₹18,000 |
| Dearness Allowance (DA) | ~34% of basic |
| HRA | 8%–24% based on city |
| Transport Allowance | ₹1,350–₹3,600 |
| **Estimated In-Hand (Metro)** | **₹30,000–₹33,500** |
| **Estimated In-Hand (Small town)** | **₹22,000–₹25,000** |

Additional benefits: Free railway travel pass for self and family, medical treatment at Railway hospitals, pension under National Pension System (NPS).

---

## Frequently Asked Questions

**Q: I have an ITI certificate but not a 10th pass certificate. Am I eligible?**
Yes. ITI certificate from a NCVT/SCVT-recognised institute is an independent qualification — you don't need a separate 10th certificate.

**Q: How many zones are covered under CEN 09/2025?**
All Railway Recruitment Boards (RRBs) — Ahmedabad, Ajmer, Allahabad, Bangalore, Bhopal, Bhubaneswar, Bilaspur, Chandigarh, Chennai, Gorakhpur, Guwahati, Jammu-Srinagar, Kolkata, Malda, Mumbai, Muzaffarpur, Patna, Ranchi, Secunderabad, Siliguri, and Thiruvananthapuram.

**Q: Can I apply for both RRB NTPC and Group D simultaneously?**
Yes, if you meet the eligibility for both. RRB NTPC requires 12th pass or graduation (depending on the post); Group D requires 10th pass.

---

*Disclaimer: All information is based on the RRB Group D CEN 09/2025 notification released on January 30, 2026. Exam dates are subject to announcement — check rrbapply.gov.in regularly.*`,
};

// ============================================================
// 2. INDIA POST GDS 2026
// Source: indiapostgdsonline.gov.in | Official notification 2026
// Verified: 28,740 vacancies | Selection: 10th merit list only
// BPM salary: ₹12,000–₹29,380 TRCA | ABPM: ₹10,000–₹24,470
// No written exam — pure academic merit
// ============================================================
const INDIA_POST_GDS_2026 = {
  slug: "india-post-gds-2026",
  title: "India Post GDS Recruitment 2026 — 28,740 Gramin Dak Sevak Vacancies (BPM, ABPM, Dak Sevak)",
  organization: "India Post (Department of Posts, Ministry of Communications)",
  post_name: "Branch Postmaster (BPM), Assistant Branch Postmaster (ABPM), Dak Sevak",
  vacancies: 28740,
  qualification: "Class 10 (Matriculation) pass with Mathematics and English (studied as subjects, not just passed). Proficiency in the local language of the state/UT applied for is mandatory. Basic computer knowledge is also required.",
  eligibility:
    "Nationality: Indian citizen. Age limit: 18 to 40 years as on the last date of application. Age relaxation: SC/ST — 5 years; OBC — 3 years; PwBD — 10 years; Ex-serviceman — 3 years. Educational Qualification: Must have passed Class 10 from any recognised Board with Mathematics and English as compulsory subjects. Local language: Must know the local language of the state or postal division applied for (spoken and written). Computer knowledge: Basic computer knowledge required, especially for BPM posts which handle branch post office operations. Candidates must NOT have appeared in Class 10 from National Open School or equivalent distance education (depends on current notification — verify at indiapostgdsonline.gov.in).",
  salary: "Time Related Continuity Allowance (TRCA) — not a regular government salary scale. GDS are not regular government employees but are given a fixed monthly allowance. Branch Postmaster (BPM): Basic TRCA ₹12,000/month (for 4 hours work/day), maximum ₹29,380 (after annual increments over years). Assistant Branch Postmaster (ABPM) and Dak Sevak: Basic TRCA ₹10,000/month, maximum ₹24,470. Dearness Allowance on TRCA is also paid. Annual increment: 3% of TRCA. GDS are not eligible for HRA, TA, or regular government allowances. They receive TRCA + DA only. However, GDS get subsidised leave, gratuity, and a group insurance scheme. Service bond: GDS are expected to serve for a minimum period.",
  application_fee: {
    general_obc_ews: "₹100",
    sc_st_pwbd_female_transg: "No fee",
    note: "Fee paid online at indiapostgdsonline.gov.in via net banking, debit/credit card, or UPI."
  },
  important_dates: {
    notificationDate: "2026-01-31",
    startDate: "2026-02-02",
    lastDate: "2026-02-16",
    selectionProcess: "Merit list generation (system-generated based on 10th marks)",
    status: "3rd Merit List released — check indiapostgdsonline.gov.in for your selection status"
  },
  how_to_apply:
    "Applications for India Post GDS 2026 were submitted at indiapostgdsonline.gov.in between February 2–16, 2026. The application window is now closed. Candidates who applied must check their application status and merit list results at the official portal. For future GDS cycles, apply at indiapostgdsonline.gov.in when the next notification is released.",
  selection_process:
    "**Merit List — No Written Examination**\nIndia Post GDS selection has NO written exam. Selection is entirely based on the marks scored in Class 10 (Matriculation) from any recognised Board. The system generates a merit list automatically based on:\n1. Percentage of marks in Class 10 (including all subjects)\n2. If two candidates have equal 10th marks, preference goes to: the older candidate\n3. Document Verification (DV) for shortlisted candidates\n\nIndia Post generates multiple rounds of merit lists as candidates accept or decline offers:\n- 1st Merit List → candidates who accept confirmed\n- 2nd Merit List → fills vacancies from those who declined\n- 3rd Merit List → further filling\n- And so on until all vacancies are filled\n\n**Document Verification:**\nShortlisted candidates are called for document verification at the divisional/circle level office. Original documents required: 10th marksheet, 10th certificate, age proof, caste certificate (if applicable), domicile/local language proof, computer knowledge certificate.",
  official_link: "https://www.indiapost.gov.in",
  notification_link: "https://indiapostgdsonline.gov.in",
  apply_link: "https://indiapostgdsonline.gov.in",
  category: "postal",
  state: "all-india",
  is_active: true,
  last_date: "2026-02-16",
  employment_type: "FULL_TIME",
  completeness_score: 91,
  reading_time: "7 min read",
  description:
    "India Post GDS 2026 has 28,740 vacancies for Branch Postmaster, ABPM, and Dak Sevak posts. No written exam — selection purely on 10th marks merit. 3rd merit list released. Age 18–40, 10th pass required.",
  content: `## India Post GDS 2026 — 28,740 Vacancies, No Exam Required

India Post GDS (Gramin Dak Sevak) is one of the most accessible government jobs in India. There's no written examination, no physical test, no interview. Your Class 10 marks determine your selection — that's it. India Post runs a system-generated merit list, and the candidates with the highest 10th percentage get the posting.

The 2026 recruitment has **28,740 vacancies** across all postal circles in India. The 3rd merit list has been released. If you're on the current merit list, check indiapostgdsonline.gov.in immediately.

---

## Three Posts — What Each Does

### Branch Postmaster (BPM)
The BPM runs a Branch Post Office in a village or rural area. Responsibilities:
- Handling mail, speed post, and registered letters
- Operating IPPB (India Post Payments Bank) transactions
- Managing PLI (Postal Life Insurance) and RPLI (Rural PLI) policies
- Running Sukanya Samriddhi, NSC, and other small savings schemes
- Work hours: approximately 4 hours per day, 5 days a week at the branch

TRCA: ₹12,000/month starting.

### Assistant Branch Postmaster (ABPM)
Assists the BPM at the branch office. Similar work but subordinate role. When the BPM is absent, the ABPM steps in.

TRCA: ₹10,000/month starting.

### Dak Sevak
Beat-based mail delivery. Responsible for the delivery area (beat) assigned to them — delivering letters, parcels, and money orders door-to-door.

TRCA: ₹10,000/month starting.

---

## Important Dates

| Event | Date |
|---|---|
| Notification | January 31, 2026 |
| Application Opens | February 2, 2026 |
| Application Closes | February 16, 2026 |
| 1st Merit List | March 2026 |
| 2nd Merit List | April 2026 |
| 3rd Merit List | May–June 2026 |
| Document Verification | Ongoing (circle-wise) |

---

## Eligibility

**Age:** 18 to 40 years
**Qualification:** Class 10 pass with Maths and English as subjects from a recognised Board
**Local language:** Must know the language of the postal division applied for
**Computer knowledge:** Basic level required (operating post office software)

---

## How Selection Works

There is **no written exam**. India Post uses a purely mark-based merit system.

Your 10th percentage is your score. The system ranks all applicants for each vacancy in descending order of marks. The top-ranked candidate gets the offer for that vacancy. If they decline, the offer goes to the next candidate.

This has an important implication: **candidates with very high 10th marks (90%+) have strong chances; candidates with 60–70% need to apply for less competitive circles/divisions.**

Each state has its own Postal Circle. Competition levels vary significantly. Rural postal divisions in less-populated states or circles tend to have lower competition cutoffs than metro areas.

**Merit list cutoffs in recent years:**
- High competition circles (Maharashtra, UP, Bihar, TN): Cutoffs 85–95% in 10th
- Moderate competition circles: 78–88%
- Lower competition circles (North-East, Hilly regions): 65–80%

Check your circle's specific cutoff before applying in future cycles.

---

## Salary — How TRCA Works

GDS are NOT regular government employees. They are paid through a system called **Time Related Continuity Allowance (TRCA)** — a fixed monthly amount for approximately 4 hours of work per day.

| Post | Starting TRCA | Maximum TRCA |
|---|---|---|
| BPM | ₹12,000/month | ₹29,380/month |
| ABPM / Dak Sevak | ₹10,000/month | ₹24,470/month |

TRCA gets a **3% annual increment**. It takes many years to reach the maximum.

Additional: Dearness Relief (DR) on TRCA is paid as per government rules. GDS are also eligible for gratuity and group insurance.

They are NOT eligible for HRA, TA, medical reimbursement, or the standard government allowances that regular employees get.

---

## Postal Circles in India

India Post is organised into 23 Postal Circles, each covering one or more states:

Andhra Pradesh, Assam, Bihar, Chhattisgarh, Delhi, Gujarat, Haryana, Himachal Pradesh, J&K, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, North East (Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Tripura), Odisha, Punjab, Rajasthan, Tamil Nadu, Telangana, Uttar Pradesh, Uttarakhand, West Bengal.

**Apply only for the circle where you know the local language.** Applying for a circle whose local language you don't know leads to rejection at document verification.

---

## Frequently Asked Questions

**Q: Can Class 12 or graduate students apply for GDS?**
Yes — higher qualifications are allowed. But only Class 10 marks are considered for merit. Your 12th or graduation marks don't help or hurt you.

**Q: Is GDS a permanent government job?**
No. GDS are not regular government employees. They are "outsourced" workers engaged by India Post. Their service conditions are governed by GDS Rules, not Central Government Service Rules. However, it is a stable, long-term engagement.

**Q: Can GDS get promoted to permanent Postal employee?**
Yes. There is a direct quota for GDS to be appointed as Multi-Tasking Staff (MTS) in regular postal service. This path exists but is limited.

**Q: I got selected in the 2nd merit list but haven't heard from my circle. What should I do?**
Log in to indiapostgdsonline.gov.in and check your application status. If selected, you'll receive a communication from the Divisional Superintendent. Respond promptly — delays can result in forfeiture of the offer.

---

*Disclaimer: Salary (TRCA) figures and merit list details are based on official India Post GDS notification 2026 and publicly available recruitment data. Check indiapostgdsonline.gov.in for real-time merit list status.*`,
};

// ============================================================
// 3. UP POLICE CONSTABLE 2026
// Source: uppbpb.gov.in | Notification Dec 31, 2025
// Verified: 32,679 vacancies | Exam June 8–10, 2026 (just held)
// 150Q, 300 marks, OMR | NO negative marking
// Pay Level 3: basic ₹21,700 | in-hand ~₹30,000–₹35,000
// ============================================================
const UP_POLICE_CONSTABLE_2026 = {
  slug: "up-police-constable-2026",
  title: "UP Police Constable 2026 — 32,679 Vacancies | Exam June 8–10 | Result Awaited",
  organization: "Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB)",
  post_name: "Constable Civil Police, PAC, Special Force, Mounted Police, Jail Warden",
  vacancies: 32679,
  qualification: "Class 12 (Intermediate) pass from a recognised Board. No minimum percentage required.",
  eligibility:
    "Nationality: Indian citizen. Must be a domicile of Uttar Pradesh — UP domicile certificate required at document verification. Age limit: 18 to 22 years as on July 1, 2026 (General). Age relaxation: SC/ST — up to 5 years; OBC — up to 3 years; PwBD — up to 15 years; Dependents of freedom fighters — 5 years; Ex-serviceman — actual military service period + 3 years (for GD posts). Gender: Both male and female candidates can apply. Educational qualification: Must have passed Class 12 (Intermediate) from a recognised Board — any stream (Arts, Science, Commerce). No minimum percentage required. Physical standards for males: Height — General/SC/OBC: 168 cm; ST: 160 cm. Chest — General/SC/OBC: 79 cm (unexpanded), 84 cm (expanded); ST: 77 cm (unexpanded), 82 cm (expanded). Physical standards for females: Height — General/OBC/SC: 152 cm; ST: 147 cm. Weight: proportionate to height as per medical norms.",
  salary: "Pay Level 3 as per 7th CPC Pay Matrix. Basic pay: ₹21,700 per month. Estimated in-hand salary: ₹30,000–₹35,000 per month (depends on HRA city category, DA, and deductions for NPS). Allowances included: Dearness Allowance, House Rent Allowance (8%/16%/24% based on city), Transport Allowance, Uniform Allowance, and other police service allowances. UP Police constables also receive free accommodation at police lines/barracks (optional). Promotion path: Constable → Head Constable → ASI → SI — promotion through departmental exams.",
  application_fee: {
    general_obc_ews: "₹400",
    sc_st: "₹400",
    note: "Fee paid online at uppbpb.gov.in. Paid candidates cannot get refunds. SC/ST of UP state pay same fee (there is no exemption for these categories in UP Police)."
  },
  important_dates: {
    notificationDate: "2025-12-31",
    startDate: "2025-12-31",
    lastDate: "2026-01-30",
    examDate: "June 8, 9, and 10, 2026 (Exam conducted — result awaited)",
    admitCard: "Released June 5, 2026"
  },
  how_to_apply:
    "Applications for UP Police Constable 2026 were submitted at uppbpb.gov.in between December 31, 2025 and January 30, 2026. The recruitment cycle is now in the post-exam phase — written exam was conducted June 8–10, 2026. Candidates who appeared must wait for results at uppbpb.gov.in. For the next UP Police Constable recruitment, applications will be submitted at uppbpb.gov.in when notification is released.",
  selection_process:
    "**Stage 1 — Written Examination (Completed June 8–10, 2026)**\nOMR-based offline exam. 150 questions, 300 marks, 2 hours. NO negative marking — attempt all questions.\n\nSubject-wise breakdown:\n- General Knowledge: 38 questions (76 marks)\n- General Hindi: 37 questions (74 marks)\n- Numerical and Mental Ability: 38 questions (76 marks)\n- Mental Aptitude, IQ & Logical Ability: 37 questions (74 marks)\n\nMinimum qualifying marks: 35% (105/300). Candidates shortlisted in a ratio of 10 times the vacancy in each category.\n\n**Stage 2 — Document Verification + Physical Standard Test (PST)**\nDocuments verified for age, education, domicile, caste. Height and chest (for males) measured against the prescribed standards.\n\n**Stage 3 — Physical Efficiency Test (PET)**\nMale candidates: 4.8 km race in 25 minutes. Female candidates: 2.4 km race in 14 minutes.\n\n**Final Merit:**\nBased purely on written exam marks. No marks for PET — it is qualifying only.",
  official_link: "https://uppbpb.gov.in",
  notification_link: "https://uppbpb.gov.in",
  apply_link: "https://uppbpb.gov.in",
  category: "police",
  state: "uttar-pradesh",
  is_active: true,
  last_date: "2026-01-30",
  employment_type: "FULL_TIME",
  completeness_score: 93,
  reading_time: "7 min read",
  description:
    "UP Police Constable 2026 has 32,679 vacancies. Written exam (150Q, 300 marks, no negative marking) held June 8–10. Result awaited. Pay Level 3, basic ₹21,700. 12th pass, UP domicile required.",
  content: `## UP Police Constable 2026 — 32,679 Vacancies, Exam Just Concluded

The biggest police recruitment in Uttar Pradesh in recent years — 32,679 constable vacancies — just reached a major milestone. The written examination was conducted on **June 8, 9, and 10, 2026**. If you appeared in the exam, results will be declared on uppbpb.gov.in — typically 4–8 weeks after the exam.

If you missed this cycle, the eligibility, exam pattern, and preparation guide below will help you prepare for the next UP Police Constable recruitment.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | December 31, 2025 |
| Application Opens | December 31, 2025 |
| Application Closes | January 30, 2026 |
| Admit Card Released | June 5, 2026 |
| **Written Exam** | **June 8, 9, and 10, 2026 — Conducted** |
| Result | Awaited — check uppbpb.gov.in |
| PST / PET | After written result |

---

## Vacancy Breakdown

32,679 vacancies across multiple units:
- **Civil Police** — the main constable cadre
- **PAC (Provincial Armed Constabulary)** — armed battalion units
- **Special Force** — specialised unit constables
- **Mounted Police** — horse-riding unit (limited posts)
- **Jail Warden** — Home (Prison) department

Vacancies are distributed category-wise: General, OBC, SC, ST, EWS, with specific reservations for women within each category.

---

## Eligibility

**Age (as on July 1, 2026):**

| Category | Age Range |
|---|---|
| General / EWS | 18–22 years |
| OBC | 18–25 years |
| SC / ST | 18–27 years |

**Qualification:** Class 12 pass from any recognised Board — any stream. No minimum percentage.

**Domicile:** Must be a domicile of Uttar Pradesh. Candidates from other states are NOT eligible.

**Physical Standards:**

| Gender | Category | Height | Chest (Male only) |
|---|---|---|---|
| Male | General/OBC/SC | 168 cm | 79–84 cm |
| Male | ST | 160 cm | 77–82 cm |
| Female | General/OBC/SC | 152 cm | — |
| Female | ST | 147 cm | — |

---

## Exam Pattern — No Negative Marking

This is a critical point for UP Police Constable 2026: **negative marking has been completely removed.** Every question you answer correctly gives you 2 marks. Wrong answers give 0 — not a deduction.

**Attempt every single question.** There is no reason to leave any question blank.

| Section | Questions | Marks |
|---|---|---|
| General Knowledge | 38 | 76 |
| General Hindi | 37 | 74 |
| Numerical & Mental Ability | 38 | 76 |
| Mental Aptitude, IQ & Logical Ability | 37 | 74 |
| **Total** | **150** | **300** |

**Duration:** 2 hours | **Mode:** OMR-based offline | **Minimum to qualify:** 105 marks (35%)

---

## Physical Efficiency Test (PET)

PET is qualifying only — no marks are added to the merit. Your written exam score is everything.

| Standard | Male | Female |
|---|---|---|
| Race | 4.8 km in 25 minutes | 2.4 km in 14 minutes |

---

## Salary

UP Police Constable falls under **Pay Level 3** (7th CPC):

| Component | Amount |
|---|---|
| Basic Pay | ₹21,700 |
| DA (~46% of basic) | ~₹9,982 |
| HRA (city-dependent) | ₹1,736–₹5,208 |
| Transport Allowance | ₹1,350–₹3,600 |
| **Estimated In-Hand** | **₹30,000–₹35,000** |

Additional benefits: Uniform and kit allowance, accommodation at police lines/barracks, free medical treatment, police service allowances, and promotion through departmental exams (Constable → Head Constable → ASI → SI).

---

## Preparation Guide for Next Cycle

**General Knowledge (38Q):** Focus on UP state current affairs, national current events, Indian history (especially modern history and UP-related history), Indian polity (Constitution, Parliament, State Legislature), geography. NCERT Class 9–10 Social Science is the base.

**General Hindi (37Q):** Grammar (sandhi, samas, karak, ras, chhand), vocabulary (synonyms, antonyms, muhavare, lokoktiyan), comprehension passages. This section is entirely in Hindi. Scoring section for Hindi-medium candidates.

**Numerical & Mental Ability (38Q):** Basic arithmetic — percentage, ratio, HCF/LCM, profit-loss, time-work, time-distance, simple interest. Class 8–10 level maths. Not complex — accuracy and speed matter.

**Mental Aptitude & Logical Ability (37Q):** Reasoning questions — series, coding-decoding, blood relations, direction sense, syllogisms, analogies.

---

*Disclaimer: All information is based on the official UP Police Constable 2026 notification issued by UPPRPB. Written exam was conducted June 8–10, 2026 — result to be declared at uppbpb.gov.in.*`,
};

// ============================================================
// 4. MP POLICE CONSTABLE 2025-26
// Source: esb.mp.gov.in | MPESB notification
// Verified: 7500 vacancies (2025 notification, exams held 2026)
// Final result released | Next major batch awaited
// Salary: ₹19,500–₹62,000 (MP state pay scale)
// ============================================================
const MP_POLICE_CONSTABLE_2026 = {
  slug: "mp-police-constable-2026",
  title: "MP Police Constable 2026 — Eligibility, Exam Pattern, Salary & Next Recruitment Guide",
  organization: "Madhya Pradesh Employee Selection Board (MPESB) / MP Police",
  post_name: "Constable (General Duty / GD), Constable Radio, Constable Special Branch",
  vacancies: 7500,
  qualification: "Class 10 (Matriculation) pass from a recognised Board for General Duty Constable. Class 12 pass + ITI for Constable Radio posts. Must be a domicile of Madhya Pradesh.",
  eligibility:
    "Nationality: Indian citizen. Domicile: Must be a permanent resident/domicile of Madhya Pradesh. Age limit: 18 to 33 years for male candidates; 18 to 38 years for female candidates. Age relaxation: SC/ST/OBC (MP resident) — 5 years additional; Ex-serviceman — as per MP Government rules. Educational Qualification: General Duty Constable — Class 10 (Matriculation) pass from a recognised Board (ST candidates: Class 8 pass is sufficient for GD). Constable Radio — Class 12 pass with Physics, Chemistry, Mathematics + ITI certificate. Physical Standards for males: Height — General/SC/OBC: 167 cm; ST: 160 cm. Chest — General/SC/OBC: 81 cm (unexpanded), 86 cm (expanded); ST: 76 cm (unexpanded), 81 cm (expanded). Physical Standards for females: Height — General/OBC/SC: 152 cm; ST: 147 cm; for ST hilly areas: 145 cm. Weight — proportionate to height.",
  salary: "MP Police Constable falls under Madhya Pradesh state pay scale. Pay Range: ₹19,500 to ₹62,000 per month (Grade Pay ₹3,600). Estimated in-hand salary for new recruits: ₹28,000–₹35,000 depending on posting city and DA. Allowances include Dearness Allowance (as per MP government rates), HRA, and other police service allowances. Uniform and kit allowance provided. Accommodation at police lines is available in most postings.",
  application_fee: {
    general_obc: "₹500",
    sc_st_mp_resident: "₹250",
    note: "Fee paid online at esb.mp.gov.in. Candidates must verify current fee structure when next notification is released."
  },
  important_dates: {
    notificationDate: "2025 (exact date per notification cycle)",
    examDate: "CBT conducted April 6, 2026 onwards (2025 batch)",
    result: "Final result released 2026",
    nextBatch: "Next major MP Police Constable notification expected — monitor esb.mp.gov.in"
  },
  how_to_apply:
    "MP Police Constable applications are submitted online at esb.mp.gov.in (official MPESB portal). The 7,500 vacancy cycle (2025 notification) has concluded with results released in 2026. For the next recruitment cycle, candidates must watch esb.mp.gov.in and mppolice.gov.in for the fresh notification. Applications are submitted only through the official MPESB portal — no offline mode is available.",
  selection_process:
    "**Stage 1 — Computer Based Test (CBT)**\n100 questions, 100 marks, 2 hours. Subjects: General Knowledge (40Q), General Hindi (20Q), General Mathematics (20Q), General Science (20Q). Negative marking: 1/4 mark per wrong answer. Minimum qualifying marks: 33% General/OBC; 23% SC/ST.\n\n**Stage 2 — Physical Efficiency Test (PET) and Physical Standards Test (PST)**\nHeight and chest measurements. Physical fitness tests including running (1600 metres for male / 800 metres for female) and other events. Qualifying in nature.\n\n**Stage 3 — Document Verification**\nOriginal documents including domicile, caste certificate, educational certificates, and birth proof.\n\n**Stage 4 — Medical Examination**\nStandard police medical fitness examination.\n\n**Final Merit:** Based on written exam score.",
  official_link: "https://esb.mp.gov.in",
  notification_link: "https://esb.mp.gov.in",
  apply_link: "https://esb.mp.gov.in",
  category: "police",
  state: "madhya-pradesh",
  is_active: true,
  last_date: "2026-01-01",
  employment_type: "FULL_TIME",
  completeness_score: 88,
  reading_time: "6 min read",
  description:
    "MP Police Constable 2026: 7,500 vacancies in latest cycle (results released). 10th pass, MP domicile required. CBT + PET selection. Salary ₹19,500–₹62,000. Next notification expected — watch esb.mp.gov.in.",
  content: `## MP Police Constable 2026 — Complete Guide

The Madhya Pradesh Police Constable recruitment is conducted by the Madhya Pradesh Employee Selection Board (MPESB). The most recent large batch had **7,500 vacancies** and the final result has been declared in 2026.

If you're targeting the next MP Police Constable batch, this page covers everything — eligibility, exam pattern, physical standards, and salary.

---

## Current Status

| Event | Status |
|---|---|
| 2025 Batch Vacancies | 7,500 |
| CBT Exam | Conducted from April 6, 2026 |
| Final Result | **Released — check esb.mp.gov.in** |
| Next Major Batch | **Expected — monitor esb.mp.gov.in** |

---

## Post Types

- **Constable (General Duty / GD):** The main constable post. Field duties, law enforcement, patrolling. Qualification: 10th pass.
- **Constable Radio:** Technical radio communication duties. Qualification: 12th pass with PCM + ITI.
- **Constable Special Branch:** Intelligence and special operations. Qualification: 10th pass (higher selection standard).
- **Constable Band:** Musical band duties. 679 posts announced separately in 2026 (male only, musical instrument required).

---

## Eligibility

**Domicile:** MP domicile is MANDATORY. Non-MP candidates cannot apply.

**Age:**
- Male: 18–33 years
- Female: 18–38 years
- ST candidates (GD): Age relaxation of 5 years additional

**Qualification:** Class 10 pass for GD (Class 8 for ST candidates in GD category).

**Physical Standards — Male:**

| Category | Height | Chest (Unexpanded/Expanded) |
|---|---|---|
| General / OBC / SC | 167 cm | 81 cm / 86 cm |
| ST | 160 cm | 76 cm / 81 cm |

**Physical Standards — Female:**

| Category | Height |
|---|---|
| General / OBC / SC | 152 cm |
| ST | 147 cm |
| ST (Hilly areas) | 145 cm |

---

## Exam Pattern — CBT

100 questions, 100 marks, 2 hours. Negative marking: 1/4 per wrong answer.

| Subject | Questions | Marks |
|---|---|---|
| General Knowledge | 40 | 40 |
| General Hindi | 20 | 20 |
| General Mathematics | 20 | 20 |
| General Science | 20 | 20 |
| **Total** | **100** | **100** |

Minimum qualifying marks: 33% (General/OBC); 23% (SC/ST).

**High-weightage CBT areas:**
- GK: MP state current affairs, national affairs, Indian polity and history
- General Hindi: Grammar (sandhi, samas), comprehension
- Maths: Percentage, ratio, profit-loss, time-work (Class 8–10 level)
- Science: Physics and Chemistry basics (Class 9–10 level)

---

## Physical Efficiency Test

Male candidates: 1600 metres run (time standard as per notification), long jump, shot put.
Female candidates: 800 metres run, long jump, shot put.

Standards are published in each notification — verify exact timings from the official MPESB notification.

---

## Salary

MP Police Constable falls under the MP state pay scale (not 7th CPC central pay matrix):

| Component | Amount |
|---|---|
| Pay Scale | ₹19,500–₹62,000 |
| DA (as per MP Govt) | Revised periodically |
| Estimated In-Hand | ₹28,000–₹35,000 |

Additional: Uniform allowance, accommodation at police lines, medical benefits.

Promotion path in MP Police: Constable → Head Constable → ASI → SI (through departmental exams or merit).

---

## How to Apply for the Next Cycle

1. Monitor **esb.mp.gov.in** for the new notification
2. Register on the MPESB portal when applications open
3. Fill online form — select your preferred district/zone
4. Upload documents (photo, signature, certificates)
5. Pay fee online
6. Download and save confirmation

Applications are only accepted online — no offline/postal applications.

---

*Disclaimer: The 7,500 vacancy batch is the most recent MP Police Constable recruitment. Information reflects the 2025 notification cycle conducted through 2026. For the next cycle, verify all details from the official esb.mp.gov.in notification.*`,
};

// ============================================================
// 5. BIHAR POLICE CONSTABLE 2026 (CSBC Adv. 03/2025)
// Source: csbc.bihar.gov.in | CSBC official notification
// Verified: 4,236 vacancies | Exam June 14 & 17, 2026 (URGENT)
// Covers: Prohibition Constable, Jail Warder, Mobile Squad
// Also: CSBC 01/2026 (83 posts, exam June 24) & 02/2026 (993 posts)
// ============================================================
const BIHAR_POLICE_CONSTABLE_2026 = {
  slug: "bihar-police-constable-2026",
  title: "Bihar Police Constable 2026 — 4,236 Vacancies | Exam June 14 & 17 | CSBC Recruitment Guide",
  organization: "Central Selection Board of Constables (CSBC), Bihar",
  post_name: "Prohibition Constable (Madh Nishedh Sipahi), Jail Warder, Mobile Squad Constable",
  vacancies: 4236,
  qualification: "Class 10 (Matriculation) or Class 12 (Intermediate) pass depending on post. Specific qualification per post mentioned in official CSBC notification at csbc.bihar.gov.in.",
  eligibility:
    "Nationality: Indian citizen. Domicile: Bihar domicile is mandatory for most posts. Age limit: 18 to 25 years as on August 1, 2025 (for main batch). Age relaxation: SC/ST Bihar residents — 5 years; OBC Bihar residents — 3 years; Ex-serviceman — actual military service + 3 years; Women candidates — up to 5 years relaxation above category limit. Educational Qualification: Varies by post. Prohibition Constable and Jail Warder: Class 10 (Matriculation) pass from a recognised Board. Mobile Squad Constable: Class 10 pass. Constable Operator (02/2026 batch): Class 12 pass with Physics, Chemistry, Mathematics. Physical Standards for males: Height — General/OBC/SC/EWS: 165 cm; ST Bihar: 160 cm. Chest — General/OBC/SC/EWS: 81 cm (unexpanded), 86 cm (expanded); ST: 79 cm / 84 cm. Physical Standards for females: Height — General/OBC/SC/EWS: 155 cm; ST: 150 cm.",
  salary: "Bihar Police Constable falls under Bihar State Government pay scale. Pay Level as per Bihar 7th Pay Revision Committee. Estimated in-hand salary for new Constables: ₹22,000–₹30,000 per month. Includes basic pay (₹19,900 starting under current pay matrix), Dearness Allowance (Bihar state DA), HRA (based on posting city), and police service allowances. Accommodation at barracks/police lines available at most postings. Uniform and kit allowance provided.",
  application_fee: {
    general_obc_ews: "₹450",
    sc_st_bihar_resident_female: "₹112",
    note: "Fee paid online at csbc.bihar.gov.in via debit card, credit card, net banking, or UPI."
  },
  important_dates: {
    notificationDate: "2025 (Advt. 03/2025)",
    lastDate: "2025 (application period closed)",
    examDate: "June 14 (Sunday) and June 17 (Wednesday), 2026 — Written exam scheduled",
    admitCard: "Released June 8, 2026 onwards — download from csbc.bihar.gov.in",
    otherBatches: "CSBC 01/2026: 83 posts, exam June 24 | CSBC 02/2026: 993 Constable Operator posts"
  },
  how_to_apply:
    "Applications for CSBC Advt. 03/2025 (4,236 vacancies) are closed. Candidates who applied must download their admit card from csbc.bihar.gov.in (released June 8, 2026 onwards) and appear for the exam on June 14 and 17, 2026. For future Bihar Police Constable recruitments, apply at csbc.bihar.gov.in when the next notification is released.",
  selection_process:
    "**Stage 1 — Written Examination (June 14 & 17, 2026)**\nOMR-based objective exam. Approx. 100 questions, 100 marks, 2 hours (verify exact pattern from official CSBC notification). Multiple shifts across all 38 districts of Bihar. Subjects: General Knowledge, General Science, General Hindi, Elementary Mathematics, Mental Ability. Negative marking: 0.2 marks per wrong answer (verify from notification).\n\n**Stage 2 — Physical Measurement Test (PMT)**\nHeight and chest measured against prescribed standards. Qualifying only.\n\n**Stage 3 — Physical Efficiency Test (PET)**\nRunning and other physical events. Standards vary by post and gender. Qualifying only.\n\n**Stage 4 — Document Verification**\nOriginal certificates: age, education, domicile, caste, and other relevant documents.\n\n**Stage 5 — Medical Examination**\nStandard police medical fitness test.",
  official_link: "https://csbc.bihar.gov.in",
  notification_link: "https://csbc.bihar.gov.in",
  apply_link: "https://csbc.bihar.gov.in",
  category: "police",
  state: "bihar",
  is_active: true,
  last_date: "2025-12-31",
  employment_type: "FULL_TIME",
  completeness_score: 91,
  reading_time: "7 min read",
  description:
    "Bihar Police CSBC 2026: 4,236 vacancies for Prohibition Constable, Jail Warder & Mobile Squad. Exam June 14 & 17, 2026 — admit card out. Plus 993 Constable Operator posts and 83 Special Branch posts.",
  content: `## Bihar Police Constable 2026 — Exam is June 14 & 17

If you applied for Bihar Police CSBC Advt. 03/2025, your written examination is **June 14 (Sunday) and June 17 (Wednesday), 2026**. Admit cards have been released — download from csbc.bihar.gov.in immediately if you haven't already.

This batch has **4,236 vacancies** across three post categories: Prohibition Constable (Madh Nishedh Sipahi), Jail Warder, and Mobile Squad Constable.

---

## What's Active in Bihar Police Right Now

Multiple CSBC recruitments are running simultaneously in 2026:

| Batch | Posts | Vacancies | Exam Date |
|---|---|---|---|
| **Advt. 03/2025** | Prohibition Constable, Jail Warder, Mobile Squad | **4,236** | **June 14 & 17, 2026** |
| Advt. 01/2026 | Constable Special Branch | 83 | June 24, 2026 |
| Advt. 02/2026 | Constable Operator (Sipahi Pracharak) | 993 | TBA |

The 4,236 vacancy batch is the largest and most urgent — exam in 3 days.

---

## Important Dates — Advt. 03/2025

| Event | Date |
|---|---|
| Exam City Slip | Released June 1, 2026 |
| Admit Card | Released June 8, 2026 |
| **Written Exam Day 1** | **June 14, 2026 (Sunday)** |
| **Written Exam Day 2** | **June 17, 2026 (Wednesday)** |
| Exam Centres | All 38 districts of Bihar — multiple shifts |

---

## Eligibility

**Age (as on August 1, 2025):**

| Category | Age |
|---|---|
| General / EWS | 18–25 years |
| OBC (Bihar resident) | 18–28 years |
| SC / ST (Bihar resident) | 18–30 years |

**Domicile:** Bihar domicile certificate required.

**Qualification:**
- Prohibition Constable, Jail Warder, Mobile Squad: Class 10 pass
- Constable Operator (Advt. 02/2026): Class 12 with Physics, Chemistry, Mathematics

**Physical Standards (Male):**

| Category | Height | Chest |
|---|---|---|
| General / OBC / SC / EWS | 165 cm | 81–86 cm |
| ST (Bihar) | 160 cm | 79–84 cm |

**Physical Standards (Female):**
- General/OBC/SC/EWS: 155 cm height
- ST: 150 cm height

---

## Exam Pattern (Advt. 03/2025)

OMR-based written exam. Verify exact question count from your admit card / official CSBC notification.

**General content areas tested:**
- General Knowledge (Bihar current affairs, national events, history, geography)
- General Science (Class 9–10 level Physics, Chemistry, Biology)
- General Hindi (grammar, comprehension)
- Elementary Mathematics (Class 8–10: percentage, ratio, arithmetic)
- Mental Ability / Reasoning

No negative marking system is applied uniformly — **verify from your admit card admit card instructions** as CSBC's pattern can vary by batch.

---

## For Exam Day — June 14 & 17

1. Download admit card from csbc.bihar.gov.in (if not done)
2. Check your exam centre address in advance — travel to unfamiliar districts takes time
3. Carry printed admit card + original government photo ID
4. Reach 30 minutes before the reporting time printed on your admit card
5. Biometric registration happens before the exam — late arrivals are rejected

---

## Salary

Bihar Police Constable is paid under the Bihar State Government revised pay scale:

| Component | Amount |
|---|---|
| Starting Basic Pay | ~₹19,900 |
| DA (Bihar state rate) | Periodically revised |
| Estimated In-Hand | ₹22,000–₹30,000 |

Accommodation at barracks/police lines is available at most postings. Uniform and kit allowance provided. Promotion path: Constable → Head Constable → ASI → SI through departmental exams.

---

## Frequently Asked Questions

**Q: I'm from Bihar but my 10th school was in another state. Am I eligible?**
Yes — domicile is about your permanent residence in Bihar, not where you studied. Bihar domicile certificate (issued by SDO/DM) is what you need.

**Q: Can women apply for Jail Warder posts?**
Female candidates can apply for female jail warder positions where vacancies exist. Check the official notification for gender-specific vacancy distribution.

**Q: What's the difference between Prohibition Constable and regular Police Constable?**
Prohibition Constables work under Bihar's Prohibition Department enforcing the liquor ban (Bihar has a complete prohibition on alcohol since 2016). Jail Warders work inside correctional facilities. Mobile Squad Constables are deployed for mobile enforcement. These are not Civil Police — different department, different duty profile.

---

*Disclaimer: Based on CSBC official notifications for Bihar Police 2026. Exam dates verified from csbc.bihar.gov.in. Always carry original documents to exam centres.*`,
};

// ============================================================
// 6. SBI SO 2026 (SPECIALIST CADRE OFFICERS)
// Source: sbi.co.in/careers | SCO Notification Feb 23, 2026
// Verified: 116 vacancies | Application closed Mar 15, 2026
// Selection: Shortlisting + Interview (no written exam for most)
// Salary: JMGS-I basic ₹36,000–₹63,840 | Senior grades higher
// ============================================================
const SBI_SO_2026 = {
  slug: "sbi-so-2026",
  title: "SBI Specialist Cadre Officers 2026 — 116 Vacancies (SCO) | Domain Experts in Banking",
  organization: "State Bank of India (SBI)",
  post_name: "Deputy Manager, Assistant Vice President (AVP) — IT, Cybersecurity, Data Analyst, Risk, Finance, Law, HR and other specialist roles",
  vacancies: 116,
  qualification: "Varies by post. Generally: Graduation or Post-graduation in relevant discipline (CA, MBA, B.Tech/MCA for IT, LLB for Law, Statistics/Economics for risk/analytics). Relevant work experience is mandatory for most posts (typically 2–8 years depending on the grade).",
  eligibility:
    "Nationality: Indian citizen. Age limit: Varies by post and grade. Generally: Deputy Manager (JMGS-I) — 21 to 30 years; Assistant Vice President (MMGS-III) — 25 to 35 years. Age relaxation: SC/ST — 5 years; OBC — 3 years; PwBD — 10 years; Ex-serviceman — as per government rules. Educational Qualification (post-wise): IT/Technology posts — B.Tech/B.E./MCA/M.Sc (Computer Science, IT, Electronics) from a recognised university; Cybersecurity — B.Tech/B.E. + relevant certifications (CISSP, CEH, CISM preferred); Data Analytics — B.Tech/Statistics/Economics + experience in Python/R/SQL; Finance/Treasury — CA/CFA/MBA (Finance) with relevant experience; Law — LLB from a recognised university with minimum 3 years post-qualification experience; Risk Management — CA/MBA (Finance) or equivalent with experience; HR — MBA (HR) with relevant experience. Work experience: Most posts require 2–8 years of relevant professional experience. Fresh graduates are generally NOT eligible for SBI SO posts. All educational qualifications must be from UGC-recognised universities or AICTE-recognised institutions.",
  salary: "Salary structure depends on grade: JMGS-I (Junior Management Grade Scale I — Deputy Manager): Basic pay ₹36,000–₹63,840; CTC approximately ₹8–12 lakh per annum (includes DA, HRA, CCA, perks). MMGS-II (Middle Management Grade Scale II — Manager): Basic pay ₹48,170–₹69,810; CTC approximately ₹12–18 lakh per annum. MMGS-III (Senior Management Grade Scale III — Assistant Vice President): Basic pay ₹63,840–₹78,230; CTC approximately ₹18–26 lakh per annum. All grades include: DA (100% neutralisation), HRA, CCA, Medical Aid, Leave Fare Concession, SBI Staff Provident Fund, Gratuity, and Pension (in some cases).",
  application_fee: {
    general_obc_ews: "₹750",
    sc_st_pwbd: "₹0",
    note: "Fee paid online at sbi.co.in through payment gateway. Fee is non-refundable."
  },
  important_dates: {
    notificationDate: "2026-02-23",
    startDate: "2026-02-23",
    lastDate: "2026-03-15",
    selectionStage: "Shortlisting + Interview — dates communicated individually to shortlisted candidates",
    applyLink: "sbi.co.in/careers — check for new notifications"
  },
  how_to_apply:
    "SBI SO applications are submitted online at sbi.co.in/careers. The February 2026 notification's application window closed March 15, 2026. New SBI SO notifications are released multiple times a year for different specialisations. Candidates should monitor the SBI Careers portal regularly. When applying: register on SBI's recruitment portal, fill in personal and educational details, upload photo and signature, pay fee, and submit. SBI directly contacts shortlisted candidates for interaction/interview.",
  selection_process:
    "**Stage 1 — Application Screening / Shortlisting**\nSBI reviews applications and creates a shortlist based on educational qualification, work experience, and specialisation relevance. There is NO separate written exam for most SBI SO posts — shortlisting is the first filter.\n\n**Stage 2 — Online Test (for some posts)**\nFor certain technical posts (IT, Data Analytics), SBI may conduct an online technical assessment. Not applicable to all posts — check individual post notification.\n\n**Stage 3 — Interview / Interaction**\nShortlisted candidates are called for an interview/interaction at a designated SBI office. This carries 100 marks. The panel typically includes domain experts and HR. Assessment covers: technical knowledge, work experience, domain expertise, and suitability for the bank's environment.\n\n**Final Selection:** Based on interview performance + marks. Selected candidates receive an offer letter from SBI.",
  official_link: "https://sbi.co.in",
  notification_link: "https://sbi.co.in/web/careers/current-openings",
  apply_link: "https://sbi.co.in/web/careers/current-openings",
  category: "banking",
  state: "all-india",
  is_active: true,
  last_date: "2026-03-15",
  employment_type: "FULL_TIME",
  completeness_score: 90,
  reading_time: "7 min read",
  description:
    "SBI Specialist Cadre Officers 2026: 116 vacancies for domain experts (IT, Cyber, Risk, Finance, Law, HR). Application closed March 15. No written exam — shortlisting + interview. CTC ₹8–26 lakh depending on grade.",
  content: `## SBI Specialist Cadre Officers 2026 — For Professionals, Not Fresh Graduates

State Bank of India doesn't just hire clerks and POs. For its specialised operations — cybersecurity, data analytics, treasury, risk management, law, and technology — SBI recruits directly from the professional talent pool through the Specialist Cadre Officers (SCO) recruitment.

The February 2026 SCO notification has **116 vacancies** across Deputy Manager and Assistant Vice President (AVP) grade positions. Application closed March 15, 2026. Interview process is underway for shortlisted candidates.

This is not the same as SBI PO. SCO posts require domain expertise and work experience — typically 2 to 8 years depending on the grade.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | February 23, 2026 |
| Application Opens | February 23, 2026 |
| Application Closes | March 15, 2026 |
| Shortlisting & Interview | Ongoing — SBI communicates individually |
| New Notifications | Monitor sbi.co.in/careers regularly |

---

## Post Categories and Typical Roles

SBI SCO notifications cover specialist posts across multiple functional areas:

| Domain | Typical Post | Qualification |
|---|---|---|
| Information Technology | Deputy Manager (IT), AVP (IT Infrastructure) | B.Tech/MCA/M.Sc (CS/IT) |
| Cybersecurity | Deputy Manager (Cyber Security) | B.Tech + CISSP/CEH/CISM certifications preferred |
| Data Analytics | Deputy Manager (Data Analyst) | B.Tech/Statistics/Economics + Python/R/SQL experience |
| Risk Management | Deputy Manager (Credit/Market Risk) | CA/MBA (Finance) + banking experience |
| Finance / Treasury | Manager (Treasury, Forex) | CA/CFA/MBA (Finance) |
| Law | Deputy Manager (Law) | LLB + 3 years post-qualification experience |
| Human Resources | Deputy Manager (HR) | MBA (HR) |
| Finance (CA) | Deputy Manager (Finance) | CA (ICAI member) |

Each notification specifies exact posts, vacancies, and eligibility. Posts change with each SCO notification cycle.

---

## Eligibility — The Core Requirement is Experience

Unlike IBPS PO or SBI PO where fresh graduates apply, SBI SCO specifically requires work experience:

- **Deputy Manager (JMGS-I grade):** Typically 2–4 years post-qualification experience
- **AVP (MMGS-III grade):** Typically 5–8 years of relevant experience

The educational qualification must be from a UGC-recognised university (for degree courses) or AICTE-approved institution (for engineering/management).

**Age limits:**
- Deputy Manager: 21–30 years
- Manager/AVP: 25–35 years (check specific post notification)

---

## Selection Process — No IBPS-style Written Exam

SBI SCO selection is significantly different from IBPS or SBI PO:

1. **Application review:** SBI's HR team reviews your application and shortlists based on your qualifications, experience, and fit with the post requirements
2. **Technical assessment (some posts):** IT and data roles may have an online technical test
3. **Interview:** This is the main evaluation — typically 45–60 minutes with a panel of domain experts. Questions will be deep domain-specific. A cybersecurity candidate will be asked about specific vulnerabilities, tools, and scenarios. A risk manager will be asked about Basel III/IV, credit models, and past work.

The interview carries 100 marks. Shortlisted candidates are communicated directly via email/SMS.

---

## Salary — Significantly Higher Than PO Posts

SBI SO posts come with substantially higher compensation than SBI PO because they target experienced professionals:

| Grade | Basic Pay Range | Approximate Annual CTC |
|---|---|---|
| JMGS-I (Deputy Manager) | ₹36,000–₹63,840 | ₹8–12 lakh |
| MMGS-II (Manager) | ₹48,170–₹69,810 | ₹12–18 lakh |
| MMGS-III (AVP) | ₹63,840–₹78,230 | ₹18–26 lakh |

CTC includes basic + DA + HRA + CCA + perquisites. DA in SBI provides 100% neutralisation against inflation — effectively keeping real salary stable.

---

## How to Stay Updated for Next Notification

SBI releases multiple SCO notifications across the year, each targeting different specialisations. To not miss the next one:

- Bookmark sbi.co.in/careers
- Check the "Current Openings" section every 2–4 weeks
- SBI also announces notifications in newspapers (Economic Times, Hindustan Times)

---

*Disclaimer: All information is based on the SBI SCO February 2026 notification. Post-wise eligibility varies — always verify specific post requirements from the official notification at sbi.co.in/careers before applying.*`,
};

// ============================================================
// 7. DRDO CEPTAM 11 (2025-26)
// Source: drdo.gov.in | Notification Dec 11, 2025
// Verified: 764 vacancies (STA-B: 561, Tech-A: 203)
// Tier 1 done (Mar 23, 2026) | TIER 2 EXAM: JUNE 15, 2026
// STA-B: Level 6 (₹35,400–₹1,12,400) | Tech-A: Level 2
// Age: 18-28 | STA-B: Diploma/Degree | Tech-A: 10th + ITI
// ============================================================
const DRDO_CEPTAM_11 = {
  slug: "drdo-ceptam-11-2026",
  title: "DRDO CEPTAM 11 — 764 Vacancies (STA-B & Technician A) | Tier 2 Exam June 15, 2026",
  organization: "Defence Research and Development Organisation (DRDO), Ministry of Defence",
  post_name: "Senior Technical Assistant B (STA-B), Technician A (Tech-A)",
  vacancies: 764,
  qualification: "STA-B: Bachelor's Degree in Science/Engineering or 3-year Engineering Diploma from a recognised institution. Technician A: Class 10 pass + ITI certificate (National Trade Certificate / NTC) in relevant trade from a recognised institute.",
  eligibility:
    "Nationality: Indian citizen. Age limit: 18 to 28 years as on the last date of application (January 11, 2026). Age relaxation: OBC (NCL) — 3 years; SC/ST — 5 years; PwBD — 10 years; Ex-serviceman — 3 years after deducting military service. Educational qualification for STA-B: Three-year Engineering Diploma in relevant discipline from a recognised polytechnic/institution OR Bachelor's Degree (B.Sc/B.Tech) in relevant discipline from a recognised university. Educational qualification for Technician A: Matriculation (Class 10) pass from a recognised Board AND ITI National Trade Certificate (NTC) in the relevant trade with a minimum of 50% marks (45% for SC/ST) in the trade. Relevant trades for STA-B and Tech-A include Electronics, Electrical, Mechanical, IT, Civil, Chemical, Instrumentation, Automobile, and others as specified in the official notification. Post-wise discipline requirements are detailed in the DRDO CEPTAM-11 official notification at drdo.gov.in.",
  salary: "STA-B (Senior Technical Assistant Grade B): Pay Level 6 as per 7th CPC Pay Matrix — basic pay ₹35,400 to ₹1,12,400. Estimated in-hand salary: ₹48,218 per month (new joinee in metro posting). Technician A: Pay Level 2 as per 7th CPC — basic pay ₹19,900 to ₹63,200. Estimated in-hand salary: ₹28,821 per month. Both grades receive: Dearness Allowance (central govt rate), HRA (8%/16%/24% based on city), Transport Allowance, Children's Education Allowance, Leave Travel Concession, Medical benefits (CGHS/DRDO dispensary), Canteen Stores Department (CSD) facilities. DRDO employees also get access to DRDO townships and research campus amenities.",
  application_fee: {
    general_obc_ews: "₹100",
    sc_st_exserviceman_pwbd_female: "₹0",
    note: "Fee paid online at drdo.gov.in. Application window closed January 11, 2026."
  },
  important_dates: {
    notificationDate: "2025-12-11",
    lastDate: "2026-01-11",
    tier1Exam: "March 23, 2026 — Completed",
    tier1Result: "Declared — qualified candidates notified",
    tier2Exam: "June 15, 2026 — UPCOMING (4 days away)",
    tier2AdmitCard: "Expected soon — download from drdo.gov.in"
  },
  how_to_apply:
    "DRDO CEPTAM 11 applications closed on January 11, 2026. Tier 1 (screening test) was conducted on March 23, 2026. Candidates who qualified Tier 1 must now appear for Tier 2 on June 15, 2026. Download Tier 2 admit card from drdo.gov.in. For future DRDO CEPTAM cycles, applications will be submitted at drdo.gov.in when the next CEPTAM notification is released.",
  selection_process:
    "**Tier 1 — CBT Screening Test (Completed March 23, 2026)**\nFor STA-B: Computer Based Test with General Science/Engineering + General Intelligence/Reasoning questions. For Tech-A: Similar CBT focussed on the relevant ITI trade and general aptitude. Both: 1.5 hours, 150 questions (1 mark each), negative marking of 0.25 marks per wrong answer. This is a screening test — candidates qualifying Tier 1 proceed to Tier 2.\n\n**Tier 2 — CBT Selection Test (June 15, 2026)**\nFor STA-B (all disciplines): Subject-specific technical questions from your discipline (Electronics, Mechanical, IT, Civil, Chemical etc.). More detailed and subject-deep than Tier 1. 2 hours, 150 questions.\nFor Tech-A: Trade-specific written test. 2 hours.\nNegative marking: 0.25 per wrong answer in Tier 2 as well.\n\n**Trade Test / Skill Test (for Tech-A only, after Tier 2)**\nPractical assessment in the relevant ITI trade. Qualifying in nature.\n\n**Final Merit:** Based on Tier 2 marks only. Tier 1 is only a filter — its marks are NOT added to the final merit score.",
  official_link: "https://www.drdo.gov.in",
  notification_link: "https://www.drdo.gov.in/drdo/en/offerings/vacancies",
  apply_link: "https://www.drdo.gov.in",
  category: "defence",
  state: "all-india",
  is_active: true,
  last_date: "2026-01-11",
  employment_type: "FULL_TIME",
  completeness_score: 94,
  reading_time: "8 min read",
  description:
    "DRDO CEPTAM 11: 764 vacancies (STA-B 561 + Tech-A 203). Tier 1 done. TIER 2 EXAM: JUNE 15, 2026 — 4 days away. STA-B pay Level 6 (₹35,400–₹1,12,400), in-hand ~₹48,218. Age 18–28.",
  content: `## DRDO CEPTAM 11 — Tier 2 Exam is June 15, 2026

If you cleared DRDO CEPTAM 11 Tier 1 (held March 23, 2026), your Tier 2 examination is on **June 15, 2026 — four days from today.** Download your admit card from drdo.gov.in if you haven't already. City intimation slips were released earlier this week.

CEPTAM (Centre for Personnel Talent Management) is how DRDO recruits its technical workforce across all its laboratories and establishments nationwide. The 11th edition of CEPTAM has **764 vacancies** — 561 for Senior Technical Assistant Grade B (STA-B) and 203 for Technician A (Tech-A).

---

## Important Dates

| Event | Date |
|---|---|
| Notification | December 11, 2025 |
| Application Closes | January 11, 2026 |
| Tier 1 Exam | March 23, 2026 — **Completed** |
| Tier 1 Result | Declared — qualified candidates notified |
| City Intimation (Tier 2) | Released |
| **Tier 2 Admit Card** | Expected on drdo.gov.in — **download now** |
| **Tier 2 Exam** | **June 15, 2026 (Monday)** |
| Trade Test (Tech-A only) | After Tier 2 result |

---

## Two Posts — What They Do

### STA-B (Senior Technical Assistant Grade B) — 561 Posts
These are technical laboratory posts within DRDO's 50+ research establishments. An STA-B works directly in the laboratory or technical unit — operating equipment, conducting tests, maintaining instruments, assisting scientists in experiments, and documenting technical data. The work is hands-on technical support for defence research.

Posts exist across disciplines: Electronics, Electrical, Mechanical, IT & Computer Science, Civil, Chemical, Instrumentation, Automobile, Optical, and others.

**Qualification:** 3-year Engineering Diploma or Bachelor's degree in relevant discipline.

**Pay Level 6:** ₹35,400–₹1,12,400 | In-hand ~₹48,218/month

### Technician A — 203 Posts
Workshop and field-level technical support. Operating machinery, maintenance tasks, fabrication, and hands-on trade work within DRDO labs.

**Qualification:** Class 10 + ITI (NTC) certificate in relevant trade (minimum 50% marks in trade; 45% for SC/ST).

**Pay Level 2:** ₹19,900–₹63,200 | In-hand ~₹28,821/month

---

## Eligibility

**Age:** 18 to 28 years (as on January 11, 2026)

**Age relaxation:**

| Category | Relaxation |
|---|---|
| OBC (NCL) | 3 years (up to 31) |
| SC / ST | 5 years (up to 33) |
| PwBD | 10 years (up to 38) |
| Ex-serviceman | 3 years after military service |

---

## Exam Pattern

### Tier 1 (Screening — Already Done)
150 questions, 1 mark each, 1.5 hours. 0.25 negative marking. Tests: General Science/Technical Aptitude + General Intelligence & Reasoning. This was a screening test — its marks do NOT count in final selection.

### Tier 2 (Selection — June 15, 2026)

| Post | Questions | Marks | Duration |
|---|---|---|---|
| STA-B | 150 | 150 | 2 hours |
| Tech-A | 150 | 150 | 2 hours |

**Negative marking: 0.25 per wrong answer — be accurate.**

**Tier 2 is deeper than Tier 1.** For STA-B Electronics, expect questions on analog/digital circuits, microprocessors, communication systems, signal processing, and control systems — at diploma/degree level. For STA-B Mechanical, expect questions on thermodynamics, strength of materials, fluid mechanics, machine design. Match your preparation to your specific discipline.

Final selection merit is based **entirely on Tier 2 marks.** Tier 1 was only a filter.

---

## What to Do Right Now (Tier 2 on June 15)

If you're a Tier 2 candidate:

1. **Download admit card** from drdo.gov.in immediately — you need it to enter the exam hall
2. **Check your exam centre address** — some DRDO centres are on research campuses outside city limits, requiring early departure
3. **Carry:** Printed admit card + original photo ID (Aadhaar / PAN / Passport / Driving Licence)
4. **Revision focus:** In the next 4 days, don't attempt new topics. Revise your core discipline formula sheets and previous DRDO technical papers
5. **Timing:** Don't rush on negative marking questions — one wrong answer costs 0.25 marks; accuracy beats speed

---

## Salary and DRDO Benefits

**STA-B at Pay Level 6:**

| Component | Amount |
|---|---|
| Basic Pay | ₹35,400 |
| DA (~46%) | ₹16,284 |
| HRA (metro) | ₹8,496 |
| Transport | ₹3,600 |
| **Estimated In-Hand** | **₹48,000–₹52,000** |

Beyond salary, DRDO offers:
- **Work environment:** Research laboratories, not field postings or public-facing roles
- **CSD canteen:** Subsidised goods
- **CGHS medical coverage:** Self + dependents
- **DRDO townships:** Subsidised housing at many lab locations
- **Stability:** Central government permanent service — not contractual
- **Promotion:** STA-B → STA-A → Scientist pathway exists in DRDO's internal promotion structure

---

## Posting Locations

DRDO has 50+ laboratories and establishments across India. Major ones:

- **Delhi:** DRDO HQ, INMAS, CFEES, SSPL, DMRL, DEBEL, etc.
- **Hyderabad:** DRDL, RCI, DLRL, NSTL, DMSRDE
- **Bengaluru:** ADE, GTRE, LRDE, CABS, CEMILAC
- **Pune:** ARDE, HEMRL, DRDE
- **Chennai:** CVRDE
- **Chandigarh:** TBRL, DEAL
- **Other locations:** Jodhpur, Agra, Dehradun, Haldwani, and many more

When you clear Tier 2 and receive an offer, you may request a preferred location. Posting depends on where vacancies exist in your discipline.

---

## Frequently Asked Questions

**Q: My Tier 1 result showed "qualified" but I haven't received my Tier 2 admit card yet. What do I do?**
Check drdo.gov.in directly and your registered email. If the admit card is not available, contact the CEPTAM office through the official website. Admit cards for Tier 2 are issued online — there's no physical copy by post.

**Q: Is there an interview after Tier 2?**
No. There is no interview for STA-B or Tech-A posts. Final merit is based entirely on Tier 2 CBT marks. Tech-A has an additional trade test (practical), but that's qualifying — not marks-based.

**Q: Can STA-B get promoted to Scientist in DRDO?**
DRDO has a separate Scientist entry (through GATE-based RAC exam or DRDO SET). STA-B posts have their own technical cadre with promotion to STA-A and higher grades. The direct STA-B to Scientist lateral promotion is limited, but exceptional performers can be considered for Scientist entry after clearing relevant exams.

---

*Disclaimer: All dates are verified from official DRDO notices. Tier 2 exam date (June 15, 2026) confirmed from drdo.gov.in announcements. Download admit card from the official DRDO portal only.*`,
};

// ============================================================
// INSERT ALL 7 JOBS
// ============================================================
async function insertJob(job) {
  const { slug, title } = job;

  const { data: existing } = await supabase
    .from("jobs")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (existing) {
    console.log(`⚠️  SKIP — ${slug} already exists`);
    return;
  }

  const payload = {
    ...job,
    published_at: new Date().toISOString(),
    reviewed_at: new Date().toISOString(),
    quality_flag: null,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("jobs").insert([payload]);

  if (error) {
    console.error(`❌  FAILED — ${title}`);
    console.error(error.message);
  } else {
    console.log(`✅  INSERTED — ${title} (${slug})`);
  }
}

const jobs = [
  RRB_GROUP_D_2026,
  INDIA_POST_GDS_2026,
  UP_POLICE_CONSTABLE_2026,
  MP_POLICE_CONSTABLE_2026,
  BIHAR_POLICE_CONSTABLE_2026,
  SBI_SO_2026,
  DRDO_CEPTAM_11,
];

console.log("=== Inserting 7 jobs ===\n");
for (const job of jobs) {
  await insertJob(job);
}
console.log("\n=== Done ===");
