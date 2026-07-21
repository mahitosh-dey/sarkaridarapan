// Day 5 upgrade #6: NEW entrance_exams row for REET 2026.
// Freshness moats: BSER vs RSSB flowchart (two-stage pipeline), May 2025 result
// analysis (Level 1 62.33%, Level 2 44.69%, 7,759 Mains posts vs 6.5L qualifiers),
// 2026 pattern change (5-option MCQ + negative marking for unattempted), lifetime
// certificate validity, Rajasthan-specific reservation matrix.

import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## REET 2026 recruitment at a glance

Rajasthan Eligibility Examination for Teachers (REET) is the state teacher eligibility examination for Rajasthan Government school Level 1 (Classes 1 to 5) and Level 2 (Classes 6 to 8) teacher recruitment. REET is conducted by the Board of Secondary Education Rajasthan (BSER) at Ajmer through rajeduboard.rajasthan.gov.in. It is a qualifying examination, not a recruitment examination. Candidates who clear REET become eligible to appear for the Third Grade Teacher recruitment conducted separately by Rajasthan Staff Selection Board (RSSB, formerly Rajasthan Subordinate Services Selection Board or RSMSSB).

The current REET cycle is REET 2024 held on 27 and 28 February 2025. Result declared on 8 May 2025. Total applicants for that cycle were more than 14 lakh. REET 2026 fresh notification has not yet been released by BSER as of July 2026. Expected notification window is post-April 2026 school Board exam cycle, with tentative examination in early 2027. RSSB REET Mains (Third Grade Teacher recruitment 2026) was conducted separately on 17 to 20 and 21 January 2026 for 7,759 posts (Level 1 with 5,636 posts and Level 2 with 2,123 posts). REET Mains result was declared on 27 May 2026 and final answer key on 2 June 2026.

Three things about the 2026 REET landscape most competitor pages get wrong. The BSER REET (eligibility) and RSSB REET Mains (recruitment) are two separate examinations that most sarkari pages conflate. The 2026 exam pattern shifted from 4-option MCQ to 5-option MCQ with negative marking including for unattempted questions. And the REET certificate validity was made lifetime by the Rajasthan cabinet aligning with NCTE guidelines, from the earlier 7-year and 3-year validity windows.

## REET versus REET Mains: the two-stage pipeline

Understanding the pipeline is essential because most confusion in Rajasthan teacher recruitment comes from treating REET and REET Mains as the same examination.

Stage 1 is BSER REET. Conducted by Board of Secondary Education Rajasthan. Purpose is to certify eligibility to teach in Rajasthan Government schools at Level 1 or Level 2. Passing REET does not lead to appointment. It provides a certificate of eligibility with lifetime validity. Cutoff is 60 percent for General, 55 percent for OBC/SC/ST/EWS/Widow/Divorcee/Ex-Servicemen/PwD, and 36 percent for ST in TSP or Scheduled Areas Level 1.

Stage 2 is RSSB REET Mains. Conducted by Rajasthan Staff Selection Board. Purpose is to rank REET-qualified candidates for actual Third Grade Teacher appointments. Result is a merit list with post-wise cutoffs. Successful candidates receive appointment orders for specific schools and locations.

For a first-time aspirant, the path is REET first (qualify) then REET Mains (compete for posts). Both stages must be cleared to become a Third Grade Teacher.

## REET 2026 notification and expected timeline

BSER has not yet released the REET 2026 notification as of July 2026. Delay is attributed to overlapping BSER responsibilities for the Rajasthan Board examinations, results, and administrative preparation. Expected notification window is post-April 2026, with tentative examination in early 2027.

Historical REET notification-to-examination cycle has been approximately 4 to 6 months, so if notification releases in September 2026, examination would be in January or February 2027. RSSB REET Mains cycle typically follows 6 to 9 months after REET result, so the next RSSB REET Mains recruitment would be in Q3 or Q4 of 2027.

For a fresh aspirant preparing in July 2026, the practical implication is that the earliest REET certification is likely 6 to 8 months away. Preparation window is adequate for a serious aspirant.

## Eligibility for REET Level 1 and Level 2

REET Level 1 (Classes 1 to 5). Educational qualification is Senior Secondary (Class 12) with 50 percent marks and a 2-year Diploma in Elementary Education (D.Ed or D.El.Ed), OR Senior Secondary with 45 percent and D.El.Ed as per NCTE 2002 norms, OR Senior Secondary with 50 percent and a 4-year Bachelor of Elementary Education (B.El.Ed), OR Senior Secondary with 50 percent and a 2-year Diploma in Education (Special Education). Bachelor's degree with 2-year D.El.Ed is also accepted.

REET Level 2 (Classes 6 to 8). Educational qualification is Bachelor's degree with 50 percent marks and B.Ed from an NCTE-recognised institution, OR Bachelor's degree with 45 percent and B.Ed as per NCTE 2002 norms, OR Senior Secondary with 50 percent and a 4-year integrated B.A. B.Ed or B.Sc B.Ed, OR Bachelor's degree with 50 percent and a 1-year B.Ed (Special Education).

Age eligibility for REET is 18 years minimum with no upper age limit for the eligibility examination itself. Upper age limit applies at RSSB REET Mains recruitment stage where the standard Rajasthan Government recruitment age limits apply (18 to 40 years with 5 years relaxation for Rajasthan female SC and ST, 10 years for Rajasthan female SC/ST/OBC/MBC/EWS, 5 years for reserved category men, and 3 years for OBC and EWS).

Domicile requirement applies at RSSB REET Mains stage. Candidates from other states can appear for REET (eligibility) but face restrictions at RSSB REET Mains where Rajasthan domicile is often required for the reserved category posts.

## REET 2026 exam pattern change: 5-option MCQ with negative marking

The most material change for REET 2026 is the exam pattern shift from 4-option to 5-option MCQ format with negative marking including for unattempted questions. This is a major departure from the 2024 pattern and matters for preparation strategy.

Under the new pattern, each question has 5 answer options (labelled A, B, C, D, E). Negative marking of 1 divided by 3 marks applies to wrong answers. Critically, unattempted questions also attract 1 divided by 3 mark negative. This is the reverse of most competitive examinations where unattempted questions are neutral.

Practical implication for candidates is that leaving questions blank is not a safe option. Every question must be attempted with either a genuine attempt or an educated guess. This shifts the risk-reward calculation dramatically from the earlier pattern where blank was neutral.

For a 150-question paper with 150 marks, a candidate attempting 120 and leaving 30 blank under the new pattern loses 30 divided by 3 or 10 marks just for blanks. This is enough to push a borderline candidate below the qualifying cutoff. Answer every question, use elimination strategy, and manage time to avoid unfinished questions.

## Syllabus for REET Level 1 and Level 2

REET Level 1 (Classes 1 to 5) syllabus covers 5 sections in a single paper of 150 questions. Child Development and Pedagogy 30 questions. Language 1 (Hindi) 30 questions. Language 2 (English or another language) 30 questions. Mathematics 30 questions. Environmental Studies 30 questions.

REET Level 2 (Classes 6 to 8) syllabus covers 4 or 5 sections depending on subject specialisation. Child Development and Pedagogy 30 questions. Language 1 (Hindi) 30 questions. Language 2 (English or another language) 30 questions. Subject-specific portion (Mathematics and Science combined, OR Social Studies) 60 questions.

Child Development and Pedagogy covers concepts of learning and cognitive development, individual differences, inclusion of children with special needs, National Curriculum Framework (NCF) 2005 and 2023, National Education Policy (NEP) 2020, assessment and evaluation techniques, and Rajasthan-specific pedagogy content.

Rajasthan-specific General Knowledge portion is included in the Child Development and Pedagogy section for the Level 1 and 2 papers. This covers Rajasthan history, geography, culture, art, and recent developments. Weightage is approximately 10 to 12 percent of the paper. Rajasthan-specific preparation is often the differentiator between candidates.

## Qualifying marks and Rajasthan reservation matrix

Qualifying cutoffs for REET as notified by BSER.

| Category | Qualifying marks (out of 150) | Percentage |
|---|---|---|
| General | 90 marks | 60 percent |
| OBC (Non-Creamy Layer) | 82 marks | 55 percent |
| SC | 82 marks | 55 percent |
| ST | 82 marks | 55 percent |
| EWS | 82 marks | 55 percent |
| Widow, Divorcee | 82 marks | 55 percent |
| Ex-Servicemen | 82 marks | 55 percent |
| PwD | 82 marks | 55 percent |
| ST in TSP or Scheduled Areas Level 1 | 54 marks | 36 percent |

The 36 percent cutoff for ST in TSP or Scheduled Areas Level 1 is a Rajasthan-specific carve-out that applies to tribal-belt districts. The 55 percent cutoff for Widow and Divorcee is another Rajasthan-specific relaxation not available in other state TETs.

Reservation matrix at the RSSB REET Mains recruitment stage includes horizontal reservation for women, Persons with Disability, Ex-Servicemen, and specific Rajasthan Government defined categories like Sahariya Jan-Jati (Sahariya tribal community).

## REET 2024 result analysis and 2026 projection

REET 2024 was held on 27 and 28 February 2025 with more than 14 lakh applicants. Result declared on 8 May 2025.

Level 1 pass percentage was 62.33 percent, indicating that most Level 1 aspirants clear the qualifying cutoff. Level 1 has less educational barrier (D.El.Ed instead of B.Ed) so the applicant pool is broader.

Level 2 pass percentage was 44.69 percent, indicating that fewer than half of Level 2 aspirants qualify. The subject-specific 60-question portion drives the differential pass rate.

Combined pass percentage was 50.77 percent aggregating Level 1 and Level 2 (with candidates applying for both counted separately).

RSSB REET Mains 2026 cycle (Jan 2026 exam) recruited for 7,759 posts. Against approximately 6.5 lakh Level 2 REET-qualified candidates, the applicant to post ratio was approximately 85 to 1. Level 1 applicant to post ratio was closer to 60 to 1 given the higher pass rate.

For REET 2026 aspirants, the practical projection is that Level 1 remains a broader entry with better qualification odds but tighter competition at RSSB REET Mains. Level 2 has a harder qualifying exam but slightly better recruitment odds.

## What happens after REET: Third Grade Teacher salary and career

Third Grade Teacher appointments in Rajasthan Government schools are at Pay Matrix Level 10. Basic pay during the 2-year probation period is Rs 23,700 per month. Post-probation basic pay moves to Level 10 progression starting Rs 37,800.

Gross monthly pay including Dearness Allowance (DA), House Rent Allowance (HRA) at applicable classification, and Transport Allowance is approximately Rs 55,000 to Rs 60,000 during probation and Rs 65,000 to Rs 75,000 post-probation depending on posting location.

Career progression from Third Grade Teacher (Level 10) is to Second Grade Teacher (Level 11) through departmental promotion after minimum service and qualification, then to First Grade Teacher (Level 12), Vice Principal, and Principal. Rajasthan Government has a defined promotion cycle typically at 8 to 10 year intervals.

## REET certificate lifetime validity

REET certificate is now valid for lifetime. Earlier validity was 7 years, later reduced to 3 years, and then made lifetime through a Rajasthan Cabinet decision aligning with the National Council for Teacher Education (NCTE) framework.

Practical implication is that a candidate who cleared REET 2024 can appear for RSSB REET Mains 2026 and any future RSSB REET Mains cycle without re-appearing in REET. Certificate is issued digitally and downloadable from the BSER Ajmer portal at rajeduboard.rajasthan.gov.in.

Certificate download requires the roll number and date of birth. If your certificate download fails, contact the BSER helpline or visit BSER Ajmer office for physical certificate collection.

## How to apply for REET when notification releases

Application process for future REET cycles will follow BSER standard workflow. Register on the BSER REET portal (typically a dedicated URL like reet2026.co.in or reet2027.co.in launched at notification time). Fill in personal details, educational qualifications, category, and preferred exam city. Upload photograph and signature in specified size. Pay the application fee (Rs 550 to Rs 750 for single level, and Rs 750 to Rs 950 for both levels combined).

Documents required at application are Aadhaar, educational qualification certificates (Class 10, Class 12, Bachelor's, B.Ed or D.El.Ed as applicable), category certificate for reserved categories, PwD certificate if applicable, and Widow or Divorcee certificate for the specific relaxation.

Admit card is typically released 15 to 21 days before the examination date. Download from the same portal used for registration. Carry admit card, one photo ID (Aadhaar or PAN or Voter ID), and specified stationery on the exam day.

## Preparation strategy for REET 2026

Rajasthan-specific preparation is the differentiator. Standard TET books cover Child Development, Pedagogy, and subject syllabus but often miss the Rajasthan history, geography, and culture portion.

Recommended books for REET preparation. NCERT Class 6 to 12 for subject knowledge (primary source). NCF 2005 and 2023 plus NEP 2020 booklets from ncert.nic.in for pedagogy. Rajasthan-specific GK books from Rajasthan-focused publishers (Lucent Rajasthan, RBSE Class 6 to 10 textbooks, Rajasthan Adhyayan by Kaleera and Sharma). B.Ed or D.El.Ed textbooks for education theory. Previous year REET question papers from 2022, 2023, and 2024 cycles.

Mock tests specifically designed for the new 5-option MCQ pattern with negative marking are available from mainstream publishers. Practising under the new pattern is essential given the material change in scoring rules.

Allocation of preparation time. 25 percent for Child Development and Pedagogy. 20 percent for Language 1 and Language 2. 30 percent for subject portion (Level 1 covers Mathematics and Environmental Studies, Level 2 covers Mathematics-Science or Social Studies). 15 percent for Rajasthan-specific General Knowledge. 10 percent for mock tests and revision.

## Primary sources and official links

- Board of Secondary Education Rajasthan (BSER Ajmer): https://rajeduboard.rajasthan.gov.in
- REET 2024 official portal: https://reet2024.co.in
- Rajasthan Staff Selection Board (RSSB): https://rssb.rajasthan.gov.in
- Legacy RSMSSB (still hosts older adverts): https://rsmssb.rajasthan.gov.in
- Rajasthan Education Department: https://rajeducation.rajasthan.gov.in
- National Council for Teacher Education: https://ncte.gov.in

## Frequently asked questions
`;

const FAQS = [
  {
    question: "When will REET 2026 notification be released?",
    answer: "BSER has not yet released the REET 2026 notification as of July 2026. Expected notification window is post-April 2026 school Board exam cycle, with tentative examination in early 2027. Historical REET notification-to-examination cycle has been approximately 4 to 6 months. Track rajeduboard.rajasthan.gov.in for the fresh notification.",
  },
  {
    question: "What is the difference between REET and REET Mains?",
    answer: "REET is the qualifying examination conducted by Board of Secondary Education Rajasthan (BSER) that certifies eligibility to teach in Rajasthan Government schools. Passing REET does not lead to appointment. It provides a certificate of eligibility with lifetime validity. REET Mains is the recruitment examination conducted by Rajasthan Staff Selection Board (RSSB) that ranks REET-qualified candidates for actual Third Grade Teacher appointments. Successful REET Mains candidates receive appointment orders. Both stages must be cleared to become a Third Grade Teacher.",
  },
  {
    question: "What is the eligibility for REET Level 1 and Level 2?",
    answer: "Level 1 (Classes 1 to 5) requires Class 12 with 50 percent marks plus 2-year D.El.Ed, OR Class 12 with 45 percent plus D.El.Ed under NCTE 2002 norms, OR Class 12 with 50 percent plus 4-year B.El.Ed, OR Bachelor's degree with 2-year D.El.Ed. Level 2 (Classes 6 to 8) requires Bachelor's with 50 percent plus B.Ed, OR Bachelor's with 45 percent plus B.Ed under NCTE 2002 norms, OR Class 12 with 50 percent plus 4-year integrated B.A. B.Ed or B.Sc B.Ed. Age minimum is 18 years with no upper limit for the eligibility exam itself.",
  },
  {
    question: "What are the qualifying marks for REET 2026?",
    answer: "60 percent (90 out of 150) for General category, 55 percent (82 out of 150) for OBC-NCL, SC, ST, EWS, Widow, Divorcee, Ex-Servicemen, and PwD categories. A Rajasthan-specific carve-out sets 36 percent (54 out of 150) qualifying for ST in TSP or Scheduled Areas Level 1. The 55 percent cutoff for Widow and Divorcee is another Rajasthan-specific relaxation not available in other state TETs.",
  },
  {
    question: "Is REET certificate valid for lifetime?",
    answer: "Yes. REET certificate has lifetime validity following the Rajasthan Cabinet decision aligning with the National Council for Teacher Education (NCTE) framework. Earlier validity was 7 years, later reduced to 3 years, and now made lifetime. A candidate who cleared REET 2024 can appear for RSSB REET Mains 2026 and any future RSSB REET Mains cycle without re-appearing in REET. Certificate is issued digitally and downloadable from rajeduboard.rajasthan.gov.in.",
  },
  {
    question: "What is the salary of a Third Grade Teacher in Rajasthan after REET?",
    answer: "Third Grade Teacher appointments are at Pay Matrix Level 10 in the Rajasthan Government pay structure. Basic pay during the 2-year probation period is Rs 23,700 per month. Post-probation basic pay moves to Level 10 progression starting Rs 37,800. Gross monthly pay including DA, HRA, and Transport Allowance is approximately Rs 55,000 to Rs 60,000 during probation and Rs 65,000 to Rs 75,000 post-probation depending on posting location. Career progression is to Second Grade Teacher, First Grade Teacher, Vice Principal, and Principal.",
  },
  {
    question: "What is the age limit for REET 2026 in Rajasthan?",
    answer: "REET has no upper age limit for the eligibility examination itself. Minimum age is 18 years. Upper age limit applies at RSSB REET Mains recruitment stage where standard Rajasthan Government limits apply (18 to 40 years). Age relaxations at recruitment stage: Rajasthan female General 5 years, Rajasthan female SC/ST/OBC/MBC/EWS 10 years, reserved category men 5 years, OBC and EWS 3 years, PwD case-by-case, Ex-Servicemen per Ministry of Personnel rules.",
  },
  {
    question: "How many vacancies are expected in REET Mains 2026 recruitment?",
    answer: "RSSB REET Mains 2026 cycle recruited for 7,759 posts across Rajasthan Government schools. Level 1 had 5,636 posts and Level 2 had 2,123 posts. Application to post ratio for Level 2 was approximately 85 to 1 against 6.5 lakh Level 2 REET-qualified candidates. Level 1 ratio was closer to 60 to 1 given the higher pass rate. Next RSSB REET Mains recruitment vacancies will be notified separately after REET 2026 results are declared.",
  },
  {
    question: "What is the new REET exam pattern for 2026 (5 options and negative marking)?",
    answer: "The 2026 exam pattern shifted from 4-option MCQ to 5-option MCQ format. Each question has 5 answer options (A, B, C, D, E). Negative marking of 1 divided by 3 marks applies to wrong answers. Critically, unattempted questions also attract 1 divided by 3 mark negative marking, which is the reverse of most competitive exams. Practical implication: leaving questions blank is not safe. Every question must be attempted with genuine answer or educated guess. For a 150-question paper, leaving 30 blank costs 10 marks just for blanks.",
  },
  {
    question: "Can candidates from other states appear for REET?",
    answer: "Yes, candidates from other states can appear for REET (eligibility examination) conducted by BSER. There is no domicile restriction at the eligibility examination stage. However, domicile requirement applies at the RSSB REET Mains recruitment stage. Rajasthan domicile is typically required for reserved category posts. Non-Rajasthan candidates can compete for the General category posts at REET Mains but face restrictions on reserved category posts.",
  },
];

const ROW = {
  slug: "reet-2026",
  title: "REET 2026: Rajasthan TET apply, syllabus, salary guide",
  conducting_body: "Board of Secondary Education Rajasthan (BSER Ajmer)",
  exam_date: "REET 2024 held 27-28 Feb 2025 (result 8 May 2025). REET 2026 notification awaited, tentative exam early 2027. RSSB REET Mains 2026 held 17-21 Jan 2026 for 7,759 posts, result 27 May 2026",
  application_start: null,
  application_end: null,
  eligibility: "Level 1 (Classes 1 to 5): Class 12 with 50 percent marks plus 2-year D.El.Ed, OR Class 12 with 45 percent plus D.El.Ed under NCTE 2002 norms, OR Class 12 with 50 percent plus 4-year B.El.Ed, OR Bachelor's degree with 2-year D.El.Ed. Level 2 (Classes 6 to 8): Bachelor's degree with 50 percent marks plus B.Ed from NCTE-recognised institution, OR Bachelor's with 45 percent plus B.Ed under NCTE 2002 norms, OR Class 12 with 50 percent plus 4-year integrated B.A. B.Ed or B.Sc B.Ed. Age minimum 18 years with no upper limit for eligibility exam. Upper age at RSSB REET Mains recruitment stage is 18 to 40 with standard Rajasthan relaxations (Rajasthan female General 5 years, Rajasthan female reserved 10 years, reserved men 5 years, OBC and EWS 3 years).",
  syllabus: "Level 1 syllabus covers 5 sections in 150 questions. Child Development and Pedagogy 30 questions. Language 1 (Hindi) 30 questions. Language 2 (English or another language) 30 questions. Mathematics 30 questions. Environmental Studies 30 questions. Level 2 syllabus covers 4 or 5 sections depending on subject specialisation. Child Development and Pedagogy 30 questions. Language 1 (Hindi) 30 questions. Language 2 (English or another language) 30 questions. Subject-specific portion 60 questions (Mathematics and Science combined, OR Social Studies). Rajasthan-specific General Knowledge covering history, geography, culture, and recent developments is included in Child Development and Pedagogy section at approximately 10 to 12 percent weightage.",
  exam_pattern: "Single 150-question paper of 150 marks with 2 hour 30 minute duration. New 2026 pattern uses 5-option MCQ format (A, B, C, D, E) versus the earlier 4-option format. Negative marking of 1 divided by 3 marks applies to wrong answers. Critically, unattempted questions also attract 1 divided by 3 mark negative marking, so leaving questions blank is not safe. Qualifying marks: 60 percent (90 out of 150) for General, 55 percent (82 out of 150) for OBC-NCL/SC/ST/EWS/Widow/Divorcee/Ex-Servicemen/PwD, 36 percent (54 out of 150) for ST in TSP or Scheduled Areas Level 1 (Rajasthan-specific relaxation). REET certificate has lifetime validity per Rajasthan Cabinet decision aligning with NCTE framework.",
  admit_card_link: "https://rajeduboard.rajasthan.gov.in",
  result_link: "https://rajeduboard.rajasthan.gov.in",
  official_link: "https://rajeduboard.rajasthan.gov.in",
  category: "teaching",
  state: "rajasthan",
  reading_time: "15 min read",
  description: "REET 2026 Rajasthan TET guide: BSER vs RSSB Mains pipeline, 5-option MCQ new pattern, salary Rs 37,800 basic, lifetime validity, syllabus and cutoffs.",
  content: CONTENT,
};

// entrance_exams doesn't have a faqs column, so inline FAQ Q/A pairs into content
const FAQ_BLOCK = FAQS.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n");
ROW.content = ROW.content + "\n" + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
