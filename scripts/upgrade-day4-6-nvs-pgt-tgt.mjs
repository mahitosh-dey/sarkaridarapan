// Day 4 upgrade #6: NEW entrance_exams row for NVS PGT/TGT 2026.
// Freshness moats: dual-track guide (CBSE regular vs contractual walk-in),
// 2026 exam pattern change from NTA single-tier to CBSE two-tier, subject-wise
// PGT vacancy split, 2022 cutoff projections, CTET Paper-II clarity.

import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## NVS PGT TGT 2026 recruitment at a glance

Navodaya Vidyalaya Samiti (NVS) has two live teacher recruitment tracks running in 2026 that competitor pages routinely confuse. The regular permanent track is the CBSE-conducted KVS-NVS Common Recruitment 2026, notified on 13 November 2025, with 5,841 NVS vacancies across Principal, Vice Principal, PGT, TGT, PRT, and non-teaching posts. The contractual track runs region-wise walk-in interviews for the 2026-27 academic session, with each of the 8 NVS regional offices notifying roughly 200 posts each.

This page covers both tracks separately so applicants can decide which fits their goal. The regular track offers pay Level 7 (TGT) and Level 8 (PGT) permanent central government appointment with transferable posting, retirement benefits, and a materially higher career trajectory. The contractual track offers a consolidated monthly stipend of Rs 42,250 for PGT and Rs 40,625 for TGT, is region-locked, and typically ends at 31 March of the academic session unless renewed.

For most B.Ed-qualified aspirants under 35, the regular CBT-based track is the target. The contractual walk-in is a useful bridge for aspirants who want teaching experience while preparing for the next CBT cycle, or for candidates above the regular track age limit but below 50.

## Latest notification status and important dates

The CBSE-conducted KVS-NVS Common Recruitment 2026 notification released on 13 November 2025 covers 14,967 total vacancies across KVS and NVS combined, of which the NVS share is 5,841. Application window ran from 3 April 2026 to 17 April 2026 on navodaya.gov.in. Applications for the current cycle are closed.

PGT admit card was released on 8 January 2026 for the PGT CBT scheduled in the first quarter of 2026. TGT Tier-1 CBT was conducted on 10 and 11 January 2026, and TGT Tier-2 CBT was conducted on 29 March 2026. Result declarations and interview or demo class rounds for PGT are progressing through Q2 and Q3 of 2026. Final selection lists are expected between August and October 2026 depending on subject and category.

Aspirants who missed the April 2026 window should track navodaya.gov.in and cbse.gov.in for the next NVS notification, typically released 12 to 15 months after the previous one. Contractual recruitment for the 2026-27 academic session is happening on a rolling basis, and specific region notifications are posted on the respective NVS Regional Office websites.

## NVS 2026 vacancy breakdown

Vacancy split across post categories in the 13 November 2025 notification.

| Post | NVS vacancies (2026) | Notes |
|---|---|---|
| Principal | Small share, consolidated with KVS | Requires Master's degree plus Principal Deputation eligibility |
| Vice Principal | Small share | Requires TGT or PGT experience plus qualification |
| PGT (all subjects) | 1,513 | Subject-wise split covers Physics, Chemistry, Maths, English, Hindi, Biology, History, Geography, Economics, Commerce, Computer Science |
| TGT (all subjects) | Balance share | Covers English, Hindi, Maths, Science, Social Studies, Third Language (regional), plus vocational subjects |
| PRT (Primary Teacher) | Third-largest share | Covers general primary teaching plus Music, Art, PET |
| Non-teaching | Balance | Includes Librarian, Assistant Section Officer, Steno, LDC, MTS |

Subject-wise PGT vacancy tables historically show highest vacancies in Physics, Chemistry, Mathematics, and English, followed by Biology and Hindi. Regional and language-specific vacancies vary by year based on retirement patterns and student intake.

## Eligibility: qualification, age limit, and category-wise relaxation

NVS PGT eligibility requires a Master's degree with at least 50 percent marks in the relevant subject from a UGC-recognised university, plus B.Ed from an NCTE-recognised institution. Age limit is 40 years maximum as on the notification cut-off date. Language teacher posts have variations, for example PGT (Hindi) requires Master's in Hindi with English as a subject at Bachelor's level.

NVS TGT eligibility requires a Bachelor's degree with at least 50 percent marks in the relevant subject from a UGC-recognised university, plus B.Ed from an NCTE-recognised institution. Central Teacher Eligibility Test (CTET) Paper-II qualification is mandatory for TGT, not just desirable. State TET is not accepted as a substitute. Age limit is 35 years maximum.

Age relaxation applies as per Central Government rules. OBC-NCL candidates get 3 years relaxation, SC/ST candidates get 5 years, PwBD candidates get 10 years, women candidates in specific posts get up to 5 years, and Ex-Servicemen get relaxation per Ministry of Personnel rules. Departmental candidates already working with NVS or KVS get relaxation up to 55 years for eligible internal posts.

Physical fitness certification from a Registered Medical Practitioner is required at document verification. Character and antecedent verification is done at final selection.

## Pay scale, in-hand salary, and allowances

PGT pay scale is Level 8 in the 7th Central Pay Commission structure, with basic pay range Rs 47,600 to Rs 1,51,100 per month. Starting basic pay for a fresh PGT is Rs 47,600. Gross monthly pay including Dearness Allowance (DA) at current rates, House Rent Allowance (HRA) at the applicable city classification (X, Y, or Z), and Transport Allowance works out to approximately Rs 88,700 gross with take-home of Rs 80,800 to Rs 82,000 depending on posting city and personal deductions.

TGT pay scale is Level 7, with basic pay range Rs 44,900 to Rs 1,42,400. Starting basic for a fresh TGT is Rs 44,900. Gross monthly pay including DA, HRA, and Transport Allowance is approximately Rs 82,500 gross with take-home of Rs 75,000 to Rs 76,500.

Special allowances applicable to NVS teachers include a 10 percent special residential allowance for teachers on fully residential JNV duty (which is most NVS teachers, since JNVs are residential schools), risk allowance for teachers in certain remote or difficult postings, and Northeast Region posting allowance where applicable. Retirement benefits include National Pension System (NPS) contribution matching by the government and gratuity as per Central Government rules.

## Selection process: PGT versus TGT

PGT selection is two-tier CBT plus interview plus demo class. Tier-1 is a computer-based test of 100 objective questions carrying 300 marks, 2 hour duration, with negative marking of one-third per wrong answer. Tier-1 is qualifying only and shortlists candidates for Tier-2 at 1:15 ratio of vacancies. Tier-2 is a subject-specific test of 150 objective questions carrying 150 marks, 3 hour duration. Interview and demo class carry combined weightage, with Interview at 12 marks and Demo Class at 12 marks.

Final merit for PGT is computed as Tier-2 marks plus interview marks plus demo class marks. Tier-1 is not counted in final merit calculation. This is a significant shift from the earlier NTA-conducted single-tier pattern used in 2022.

TGT selection under the 2026 pattern is two-tier CBT with no interview. Tier-1 is a qualifying computer-based test of 100 questions and 300 marks, 2 hour duration. Tier-2 is a subject knowledge test of 150 questions and 150 marks, 3 hour duration, held in pen and paper OMR mode. Final merit for TGT is Tier-2 marks only. The absence of interview is a material change from the earlier pattern and rewards purely academic performance.

## Exam pattern and syllabus

Tier-1 for both PGT and TGT covers General English 10 questions, General Hindi 10 questions, Reasoning and Numerical Ability 20 questions, General Awareness and Current Affairs 20 questions, Teaching Aptitude 15 questions, and Basic Computer Awareness 25 questions. Total 100 questions, 300 marks, 2 hours.

Tier-2 for PGT covers the subject in depth. For PGT Physics, the syllabus spans Class 11 and 12 NCERT plus B.Sc and M.Sc level topics including Mechanics, Electrodynamics, Optics, Modern Physics, Statistical Mechanics, and Solid State Physics. For PGT Mathematics, syllabus covers Algebra, Calculus, Real and Complex Analysis, Differential Equations, Vector Analysis, Numerical Methods, and Statistics. Similar depth applies for other PGT subjects.

Tier-2 for TGT covers Bachelor's-level subject knowledge. For TGT Maths, this is Class 6 to 10 CBSE with additional Bachelor's-level Algebra, Trigonometry, Coordinate Geometry, and Statistics. For TGT Science, this is Class 6 to 10 CBSE with Bachelor's-level Physics, Chemistry, and Biology depth appropriate to the subject stream.

Pedagogy content in both Tier-1 and Tier-2 covers CBSE curriculum framework, NCF 2005 (National Curriculum Framework), NEP 2020 (National Education Policy), formative and summative assessment, inclusive education, and adolescent psychology.

## 2022 cutoff analysis and 2026 projection

NVS 2022 recruitment (conducted by NTA under a single-tier CBT pattern) provides the closest historical reference for 2026 aspirants. Cutoff analysis by subject and category from the 2022 result.

| Subject or category | UR cutoff (approx, 2022) | Notes |
|---|---|---|
| PGT Physics | 130 to 145 out of 200 | Highest subject-wise cutoff |
| PGT Chemistry | 128 to 142 | Similar band to Physics |
| PGT Mathematics | 125 to 140 | Slightly below Physics |
| PGT English | 130 to 145 | High cutoff due to competition |
| PGT Hindi | 120 to 135 | Slightly lower band |
| TGT English | 115 to 130 | Broad competitive band |
| TGT Maths | 108 to 125 | Below English cutoff |
| TGT Science | 110 to 125 | Similar to Maths |
| TGT Social Studies | 105 to 120 | Lowest of the main subjects |

Category cutoffs typically show OBC-NCL 5 to 8 percent below UR, SC 12 to 15 percent below UR, ST 15 to 20 percent below UR, and PwBD case-by-case relaxation. These are historical patterns and the 2026 two-tier design may compress or spread the range depending on Tier-1 shortlisting ratio.

For 2026 aspirants, the projection is that PGT Physics and English will continue to be the most competitive, while PGT Hindi and TGT Social Studies will remain relatively less competitive on the raw cutoff. Subject choice at application time is worth considering for candidates with dual-subject eligibility.

## Regular CBT track versus contractual walk-in track

Choosing between the two tracks depends on age, current job status, geographic flexibility, and career horizon.

The regular CBT track is best for aspirants 18 to 40 (PGT) or 18 to 35 (TGT) who want permanent central government employment with pay Level 7 or 8, transferable posting anywhere across India, retirement benefits, and higher career trajectory. Preparation time is 6 to 12 months for a serious aspirant. Selection cycles are typically 15 to 18 months long from notification to joining.

The contractual walk-in track is best for aspirants who missed the regular track window, are above the regular age limit but under 50, want teaching experience while preparing for the next CBT cycle, or are geographically locked to a specific NVS region. Selection is quick (walk-in interview typically 1 to 2 rounds) but the appointment is limited to the academic session and pay is consolidated at Rs 42,250 (PGT) or Rs 40,625 (TGT) with no retirement benefits.

Contractual-to-permanent absorption is not automatic. Contractual teachers do not get preference in future CBT rounds beyond the general age relaxation for departmental service, and each fresh CBT cycle is a competitive selection.

## Application process, fee, and documents required

Applications for the regular track are through navodaya.gov.in or the CBSE portal linked to the joint KVS-NVS notification. Applicants register with valid email and mobile number, upload photograph (recent, 4.5 cm x 3.5 cm, white background) and signature (in the specified size), fill in the online form covering personal details, educational qualifications, category, subject applied, and preferred exam city.

Application fee is Rs 1,500 for General, EWS, and OBC-NCL categories, and Rs 500 for SC, ST, PwBD, and women candidates. Payment is online via Net Banking, Credit Card, Debit Card, or UPI. Application fee is non-refundable.

Documents required at application stage are educational certificates (10th, 12th, Bachelor's, Master's, B.Ed as applicable), CTET Paper-II scorecard for TGT applicants, category certificate (SC/ST/OBC-NCL/EWS as applicable), PwBD certificate if applicable, Ex-Servicemen certificate if applicable, and Aadhaar. Original documents are required at Document Verification stage after selection.

Contractual walk-in applications are region-specific. Check the NVS Regional Office website for your target region (Lucknow, Patna, Chandigarh, Hyderabad, Shillong, Bhopal, Pune, or Jaipur) for walk-in dates, documents required, and post-wise vacancies.

## Life after selection: posting, training, and transfer policy

Selected teachers undergo an orientation programme at the NVS Regional Institute of Education Planning and Administration (NIEPA) or at the concerned Regional Office. Duration is typically 2 to 4 weeks and covers residential school pedagogy, adolescent psychology, safeguarding norms, and NVS administrative structure.

Posting is at any Jawahar Navodaya Vidyalaya (JNV) across the country, allocated by NVS Head Office based on vacancy availability and region preference. First posting is typically 3 to 5 years at the same JNV. Inter-regional transfer requests are considered at the annual transfer cycle each summer, based on vacancy match and years of service.

JNVs are fully residential schools serving Class 6 to 12 predominantly rural talented students, with a strong meritocratic admission system through the Jawahar Navodaya Vidyalaya Selection Test (JNVST). Teaching workload includes classroom teaching, hostel-related duties (as house master or house mistress in rotation), student welfare, and extracurricular guidance. The 10 percent special residential allowance compensates for the residential duty component.

Promotion track from PGT to Vice Principal to Principal is possible within NVS through internal channel or departmental competitive examination. Retirement age is 60 years per Central Government rules.

## Common preparation strategies and materials

For Tier-1 preparation, standard central government exam preparation books like Lucent's General Knowledge, R S Aggarwal for Reasoning and Numerical Ability, Wren and Martin for English, and current affairs for the past 12 months are the baseline. Teaching Aptitude sections are best prepared using NCERT B.Ed textbooks and pedagogy notes.

For Tier-2 subject preparation, the NCERT Class 6 to 12 books in the target subject plus one Bachelor's-level standard textbook (H C Verma for Physics, N C E R T Chemistry and OP Tandon, R D Sharma or M L Khanna for Maths, and equivalent standards for other subjects) form the core. Previous year question papers from NVS 2022 (NTA papers) and KVS 2023 (CBSE joint papers) are essential practice material.

Mock tests specifically designed for the CBSE joint pattern are available from mainstream exam-prep publishers. Free practice papers on navodaya.gov.in are limited but worth using. Allocate 30 percent of prep time to Tier-1 subjects and 70 percent to Tier-2 subject depth for PGT applicants. For TGT applicants, since Tier-2 marks are the sole basis of final merit, 80 percent of prep time should focus on subject depth.

## Primary sources and official links

- Navodaya Vidyalaya Samiti official site: https://navodaya.gov.in
- CBSE examination portal: https://cbse.gov.in
- KVS official site (joint recruitment reference): https://kvsangathan.nic.in
- NVS Regional Office directory for contractual walk-ins: https://navodaya.gov.in
- Ministry of Education, Government of India: https://www.education.gov.in
- CTET official portal (Paper-II requirement for TGT): https://ctet.nic.in

## Frequently asked questions
`;

const FAQS = [
  {
    question: "When will NVS PGT/TGT 2026 notification release?",
    answer: "The regular NVS PGT/TGT 2026 notification was already released on 13 November 2025 as part of the joint CBSE KVS-NVS Common Recruitment 2026 with 5,841 NVS vacancies. Application window was 3 to 17 April 2026 and is closed. TGT Tier-1 CBT was on 10 to 11 January 2026, Tier-2 on 29 March 2026, and PGT admit card released on 8 January 2026. Contractual walk-in recruitment for 2026-27 academic session is happening on a rolling basis across 8 NVS regions. The next regular CBT cycle typically follows 12 to 15 months after the previous one.",
  },
  {
    question: "Is CTET mandatory for NVS TGT 2026?",
    answer: "Yes, CTET Paper-II qualification is mandatory for NVS TGT, not just desirable. State TET (STET) is not accepted as a substitute. This is a firm requirement in the 13 November 2025 notification. Candidates without a valid CTET Paper-II certificate cannot apply for TGT posts. PGT applicants do not require CTET.",
  },
  {
    question: "Is B.Ed mandatory for NVS PGT?",
    answer: "Yes, B.Ed from an NCTE-recognised institution is mandatory for NVS PGT along with a Master's degree in the relevant subject with at least 50 percent marks. Language teacher posts have specific variations (for example PGT Hindi requires Master's in Hindi with English as a subject at Bachelor's level). Physical fitness certification from a Registered Medical Practitioner is also required at document verification.",
  },
  {
    question: "What is the age limit and relaxation for OBC/SC/ST candidates?",
    answer: "PGT maximum age is 40 years and TGT maximum age is 35 years as on the notification cut-off date. Age relaxation is 3 years for OBC-NCL, 5 years for SC and ST, 10 years for PwBD, up to 5 years for women in specific posts, and per Ministry of Personnel rules for Ex-Servicemen. Departmental candidates already working with NVS or KVS get relaxation up to 55 years for eligible internal posts.",
  },
  {
    question: "How many attempts are allowed for NVS PGT and TGT?",
    answer: "There is no formal attempt limit for NVS PGT or TGT. Any candidate meeting the eligibility criteria at the time of application can appear in the recruitment cycle. However, the age limit of 40 (PGT) or 35 (TGT) effectively caps the number of attempts a candidate can make. Since NVS notifications typically release every 12 to 15 months, most candidates get 3 to 5 attempts across their eligibility window.",
  },
  {
    question: "What is the NVS PGT in-hand salary versus TGT in-hand salary?",
    answer: "NVS PGT in-hand salary is approximately Rs 80,800 to Rs 82,000 per month at starting basic Rs 47,600 in pay Level 8, including DA, HRA (X/Y/Z city classification), and Transport Allowance. NVS TGT in-hand salary is approximately Rs 75,000 to Rs 76,500 per month at starting basic Rs 44,900 in pay Level 7. Special 10 percent residential allowance applies for fully residential JNV duty, which is most NVS teachers. NPS contribution matching and gratuity per Central Government rules are additional.",
  },
  {
    question: "Can I choose posting location in NVS after selection?",
    answer: "No. Initial posting is at any Jawahar Navodaya Vidyalaya across India, allocated by NVS Head Office based on vacancy availability. Region preference given at application is considered but not guaranteed. First posting is typically 3 to 5 years at the same JNV. Inter-regional transfer requests are considered at the annual transfer cycle each summer, based on vacancy match and years of service. Marital coordination transfer requests are considered on merit for teachers with a spouse in Central Government service.",
  },
  {
    question: "Is there an interview for NVS TGT 2026?",
    answer: "No, TGT selection under the 2026 pattern is two-tier CBT with no interview. Final merit is based on Tier-2 marks only. This is a material change from the earlier NTA-conducted single-tier pattern used in 2022 and rewards purely academic performance. PGT selection continues to have an Interview (12 marks) and Demo Class (12 marks) component alongside Tier-2 marks (150 marks).",
  },
  {
    question: "What is the difference between NVS regular and NVS contractual recruitment?",
    answer: "Regular recruitment is CBSE-conducted, uses two-tier CBT (plus interview and demo for PGT), and offers permanent central government appointment at pay Level 7 (TGT) or Level 8 (PGT) with transferable all-India posting, retirement benefits, and career progression. Contractual recruitment is region-specific walk-in interview based, offers a consolidated monthly stipend of Rs 42,250 (PGT) or Rs 40,625 (TGT) with no retirement benefits, and is limited to the academic session unless renewed. Age limits are 40 or 35 for regular, and up to 50 (or 65 for retired teachers) for contractual.",
  },
  {
    question: "How long is the training after NVS selection?",
    answer: "Selected teachers undergo orientation at NVS Regional Institute of Education Planning and Administration (NIEPA) or the concerned NVS Regional Office. Duration is typically 2 to 4 weeks. Content covers residential school pedagogy, adolescent psychology, safeguarding norms, and NVS administrative structure. This is followed by direct joining at the assigned JNV. Ongoing in-service training is provided at intervals during the career.",
  },
];

const ROW = {
  slug: "nvs-pgt-tgt-2026",
  title: "NVS PGT TGT 2026: 5,841 vacancies, salary, exam pattern",
  conducting_body: "Navodaya Vidyalaya Samiti (via CBSE Joint Recruitment)",
  exam_date: "PGT admit card 8 Jan 2026, TGT Tier-1 CBT 10-11 Jan 2026, TGT Tier-2 CBT 29 Mar 2026",
  application_start: "2026-04-03",
  application_end: "2026-04-17",
  eligibility: "PGT: Master's degree with 50 percent minimum marks in relevant subject from a UGC-recognised university plus B.Ed from an NCTE-recognised institution. Maximum age 40 years as on notification cut-off. TGT: Bachelor's degree with 50 percent minimum marks in relevant subject plus B.Ed from NCTE-recognised institution plus valid CTET Paper-II qualification (State TET not accepted). Maximum age 35 years. Age relaxation: OBC-NCL 3 years, SC/ST 5 years, PwBD 10 years, women up to 5 years in specific posts, Ex-Servicemen per Ministry of Personnel rules, departmental candidates up to 55 years. Physical fitness certification from Registered Medical Practitioner required at document verification.",
  syllabus: "Tier-1 (both PGT and TGT): General English 10 questions, General Hindi 10 questions, Reasoning and Numerical Ability 20 questions, General Awareness and Current Affairs 20 questions, Teaching Aptitude 15 questions, Basic Computer Awareness 25 questions. Total 100 questions, 300 marks, 2 hours. Tier-2 for PGT: Subject-specific in depth covering NCERT Class 11 and 12 plus Bachelor's and Master's-level topics. For PGT Physics covers Mechanics, Electrodynamics, Optics, Modern Physics, Statistical Mechanics, Solid State. For PGT Maths covers Algebra, Calculus, Real and Complex Analysis, Differential Equations, Vector Analysis, Numerical Methods, Statistics. Similar depth for other PGT subjects. Tier-2 for TGT: Bachelor's-level subject knowledge, Class 6 to 10 CBSE base with Bachelor's-level Algebra, Trigonometry, Coordinate Geometry, Statistics for Maths, and Bachelor's-level Physics, Chemistry, Biology for Science. Pedagogy content in both tiers covers CBSE curriculum framework, NCF 2005, NEP 2020, formative and summative assessment, inclusive education, adolescent psychology.",
  exam_pattern: "PGT selection: two-tier CBT plus interview plus demo class. Tier-1 CBT of 100 objective questions carrying 300 marks, 2 hour duration, one-third negative marking, qualifying only, shortlists at 1:15 vacancy ratio. Tier-2 CBT of 150 subject-specific questions carrying 150 marks, 3 hour duration. Interview 12 marks and Demo Class 12 marks. Final merit computed as Tier-2 marks plus interview plus demo class. Tier-1 not counted in final merit. TGT selection: two-tier CBT with no interview. Tier-1 CBT of 100 questions and 300 marks, 2 hours, one-third negative marking, qualifying only. Tier-2 subject knowledge test of 150 questions and 150 marks, 3 hour duration, held in pen and paper OMR mode. Final merit is Tier-2 marks only. Absence of interview is a material change from earlier NTA-conducted 2022 pattern.",
  admit_card_link: "https://navodaya.gov.in",
  result_link: "https://navodaya.gov.in",
  official_link: "https://navodaya.gov.in",
  category: "teaching",
  state: "all-india",
  reading_time: "15 min read",
  description: "NVS PGT TGT 2026 guide: 5,841 vacancies, Rs 47,600 to Rs 1.51L pay, PGT and TGT eligibility, exam pattern change, subject cutoffs, CTET Paper-II rules.",
  content: CONTENT,
};

// Attach FAQs into content-like schema? Table doesn't have faqs column for exams.
// FAQ JSON-LD is generated by the app from the content markdown "## Frequently asked questions"
// section, per the rendered pages. So the FAQ questions and answers must be inline in content.
// We already have "## Frequently asked questions" header in CONTENT; inject Q/A pairs below it.
const FAQ_BLOCK = FAQS.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n");
ROW.content = ROW.content + "\n" + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
