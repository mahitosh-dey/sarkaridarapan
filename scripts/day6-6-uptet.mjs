// Day 6 upgrade #6: NEW entrance_exams row for UPTET 2026.
// Premise flip: UPTET 2026 has already been conducted 2 to 4 July 2026 by the
// new UPESSC (replaced UPBEB). Notification Adv. No. 01/UPTET/2026 released
// 20 March 2026. Answer key out 8 July 2026. Result expected late July or
// early August 2026. Freshness moats: UPESSC-vs-UPBEB rebadge, Supreme Court
// 11 Aug 2023 Devesh Sharma ruling barring B.Ed for Paper 1, NCTE June 2020
// lifetime validity plus UP Cabinet Nov 2021 retrospective approval, full
// recruitment pipeline (UPTET to Super TET to 69,000 or 56,000 UPESSC posts).

import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## UPTET 2026 at a glance

Uttar Pradesh Teacher Eligibility Test (UPTET) 2026 has already been conducted on 2, 3, and 4 July 2026 by the newly constituted Uttar Pradesh Education Service Selection Commission (UPESSC) via upessc.up.gov.in. UPESSC replaced the older Uttar Pradesh Basic Education Board (UPBEB) as the conducting authority for teacher eligibility and recruitment examinations in the state. Notification Adv. No. 01/UPTET/2026 was released on 20 March 2026, ending a gap in the UPTET cycle after the 2021 exam and its 23 January 2022 re-exam.

Total forms filled for UPTET 2026 stood at 19,94,661 as per the UPESSC dashboard, a decline from the approximately 21 lakh applicants in the 2021 cycle. Applications opened on 27 March 2026 and closed on 3 May 2026 after the original 26 April deadline was extended. Admit cards were released on 30 June 2026. The exam ran across 955 centres in 60 districts of Uttar Pradesh in two shifts per day, 9:30 am to 12:00 pm and 2:30 pm to 5:00 pm. The provisional answer key was published on 8 July 2026 with the objection window open from 8 to 14 July 2026. UPESSC has indicated the final result will land in the last week of July or first week of August 2026.

Three points about UPTET 2026 that most top-ranking pages either miss or bury. First, UPESSC (not UPBEB) is now the conducting body, and this is the first UPTET cycle under the new commission. Second, the Supreme Court judgment of 11 August 2023 in Devesh Sharma versus Union of India removed B.Ed holders from Paper 1 (Primary Classes 1 to 5) eligibility, and this rule now applies fully to UPTET 2026 candidates. Third, the UPTET certificate is lifetime valid retrospectively from the very first 2011 exam, per NCTE Notification dated 3 June 2020 and the UP Cabinet approval of November 2021.

## Timeline: notification, apply, admit card, exam, answer key, objection, result

The full UPTET 2026 timeline as published by UPESSC.

| Event | Date |
|---|---|
| Notification released (Adv. No. 01/UPTET/2026) | 20 March 2026 |
| Online application start | 27 March 2026 |
| Original application close | 26 April 2026 |
| Extended application close | 3 May 2026 |
| Fee payment window close | 5 May 2026 |
| Correction window | 6 to 8 May 2026 |
| Admit card release | 30 June 2026 |
| Exam Day 1 (Paper 1 shift 1 and 2) | 2 July 2026 |
| Exam Day 2 (Paper 2 shift 1 and 2) | 3 July 2026 |
| Exam Day 3 (buffer and Paper 1+2 combined slots) | 4 July 2026 |
| Provisional answer key release | 8 July 2026 |
| Objection window | 8 to 14 July 2026 |
| Final answer key release (expected) | 20 to 22 July 2026 |
| Result and scorecard (expected) | Last week July or first week August 2026 |
| Certificate download start (expected) | Within 15 days of result |

The window between the provisional answer key and the final result is tight this cycle because UPESSC is running the process on a new platform and is under pressure to hand certified UPTET-qualified lists to the Basic Education Council for the pending recruitment cycles. Candidates awaiting the result should track upessc.up.gov.in and updeled.gov.in twice a week during late July.

## Exam pattern: format, shift timing, no negative marking, question distribution

UPTET 2026 followed the standard NCTE-aligned TET template with a few UP-specific choices. The exam is offline OMR-based with 4 answer options per question (not the 5-option format that Rajasthan REET introduced in 2026). There is NO negative marking, so every question can be attempted without penalty. This is the reverse of REET 2026 where blanks and wrong answers both cost marks.

Each paper carries 150 questions and 150 marks with a duration of 150 minutes (2 hours 30 minutes). Both Paper 1 and Paper 2 are bilingual (English and Hindi). Candidates applying for both levels write Paper 1 in one shift and Paper 2 in the other on the allotted day.

Question distribution.

| Paper | Section | Questions | Marks |
|---|---|---|---|
| Paper 1 (Classes 1 to 5) | Child Development and Pedagogy | 30 | 30 |
| Paper 1 | Language 1 (Hindi) | 30 | 30 |
| Paper 1 | Language 2 (English, Urdu, or Sanskrit) | 30 | 30 |
| Paper 1 | Mathematics | 30 | 30 |
| Paper 1 | Environmental Studies (EVS) | 30 | 30 |
| Paper 2 (Classes 6 to 8) | Child Development and Pedagogy | 30 | 30 |
| Paper 2 | Language 1 (Hindi) | 30 | 30 |
| Paper 2 | Language 2 (English, Urdu, or Sanskrit) | 30 | 30 |
| Paper 2 | Mathematics and Science OR Social Studies | 60 | 60 |

Shift timing was 9:30 am to 12:00 pm for shift 1 and 2:30 pm to 5:00 pm for shift 2. Reporting time was 8:00 am and 1:00 pm respectively. Candidates arriving after 9:00 am and 2:00 pm were denied entry per the UPESSC admit card instructions.

## Eligibility: Paper 1 (Primary, Classes 1 to 5) versus Paper 2 (Upper Primary, Classes 6 to 8)

UPTET Paper 1 (Primary Classes 1 to 5) eligibility. Class 12 with at least 50 percent marks plus 2-year Diploma in Elementary Education (D.El.Ed or BTC), OR Class 12 with 45 percent marks plus D.El.Ed per NCTE 2002 norms, OR Class 12 with 50 percent plus 4-year Bachelor of Elementary Education (B.El.Ed), OR Class 12 with 50 percent plus 2-year Diploma in Education (Special Education). Bachelor's degree with a 2-year D.El.Ed is also accepted. B.Ed holders are NOT eligible for Paper 1, per the Supreme Court ruling covered in the next section.

UPTET Paper 2 (Upper Primary Classes 6 to 8) eligibility. Bachelor's degree with at least 50 percent marks plus B.Ed from an NCTE-recognised institution, OR Bachelor's with 45 percent plus B.Ed under NCTE 2002 norms, OR Class 12 with 50 percent plus a 4-year integrated B.A. B.Ed or B.Sc B.Ed, OR Bachelor's with 50 percent plus a 1-year B.Ed (Special Education).

Age minimum is 18 years for the TET stage itself. There is no upper age limit for appearing in UPTET. The upper cap of 35 years (with standard UP relaxations of 5 years for SC/ST and 3 years for OBC) applies at the recruitment stage, that is when the candidate applies for Assistant Teacher or Super TET posts through UPESSC after clearing UPTET.

## B.Ed versus D.El.Ed for Paper 1: the Supreme Court 2023 ruling

This is the single point that trips up the largest number of UPTET Paper 1 applicants. As of UPTET 2026, B.Ed holders are NOT eligible for Paper 1 (Primary, Classes 1 to 5). Only D.El.Ed, BTC, or B.El.Ed holders can apply for Paper 1.

The rule comes from the Supreme Court judgment dated 11 August 2023 in Devesh Sharma versus Union of India. The bench upheld the earlier Chhattisgarh High Court order and struck down the NCTE Notification dated 28 June 2018 that had temporarily included B.Ed as a Paper 1 qualifying degree. The court held that a B.Ed programme is designed for secondary and upper primary teaching and does not equip candidates with the pedagogy specific to primary classes.

A narrow NCTE bridge course provision applies. B.Ed holders who were appointed as Primary teachers between 28 June 2018 and 28 November 2023 (that is, in the window when the 2018 NCTE notification was in force before the Supreme Court struck it down) retain their appointments provided they complete a 6-month NCTE-recognised bridge course. Fresh B.Ed holders sitting for UPTET 2026 do NOT get this bridge cover, and B.Ed candidates who appeared for Paper 1 in the 2026 cycle will have their Paper 1 result withheld or disqualified per UPESSC guidance issued after the notification.

Practical implication for the 2026 cycle. If you hold B.Ed, apply only for Paper 2. If you hold D.El.Ed or BTC or B.El.Ed, you can apply for Paper 1. If you hold both D.El.Ed and B.Ed, you can apply for both Paper 1 and Paper 2. If you appeared for Paper 1 as a B.Ed holder in the 2026 cycle, the result is subject to legal challenges that were already pending as of July 2026.

## Syllabus: Paper 1 sections and Paper 2 subject-specific

Paper 1 syllabus (Primary, Classes 1 to 5). Child Development and Pedagogy 30 marks covers principles of child development, individual differences, inclusive education, concepts of learning and motivation, National Curriculum Framework (NCF) 2005 and 2023, National Education Policy (NEP) 2020, and assessment and evaluation. Language 1 (Hindi) 30 marks covers reading comprehension, grammar, and pedagogy of Hindi teaching. Language 2 (English, Urdu, or Sanskrit) 30 marks covers reading comprehension, grammar, and language pedagogy in the chosen second language. Mathematics 30 marks covers numbers, operations, geometry, measurement, data handling, patterns, and pedagogy of maths at the primary level. Environmental Studies (EVS) 30 marks covers family and friends, food, shelter, water, travel, things we make and do, and EVS pedagogy.

Paper 2 syllabus (Upper Primary, Classes 6 to 8). Child Development and Pedagogy 30 marks covers the same themes as Paper 1 but at a higher cognitive level for the 11 to 14 age band. Language 1 (Hindi) 30 marks and Language 2 (English, Urdu, or Sanskrit) 30 marks follow the Paper 1 pattern at upper primary level. Subject-specific portion of 60 marks is chosen at the time of application. Mathematics and Science candidates get 30 marks of Mathematics (arithmetic, algebra, geometry, mensuration, data handling) and 30 marks of Science (physical, chemical, biological, and Earth sciences at NCERT Class 6 to 8 level). Social Studies candidates get 60 marks covering History, Geography, Civics, and Economics at NCERT Class 6 to 8 level.

NCERT textbooks from Class 6 to Class 12 are the primary reference for both papers. UP-specific General Knowledge is not a separate section in UPTET, unlike REET where Rajasthan-specific GK is inbuilt into the Child Development and Pedagogy paper.

## Qualifying marks: category-wise cutoff

UPTET qualifying cutoffs as per the UPESSC notification.

| Category | Qualifying marks (out of 150) | Percentage |
|---|---|---|
| General / EWS | 90 marks | 60 percent |
| OBC (Non-Creamy Layer) | 82 or 83 marks | 55 percent |
| SC | 82 or 83 marks | 55 percent |
| ST | 82 or 83 marks | 55 percent |
| PwBD | 82 or 83 marks | 55 percent |

The 82 or 83 mark cutoff for reserved categories depends on the rounding convention UPESSC applies. In past cycles the mark sheet has shown 82.5 rounded to 83. The 55 percent threshold is applied strictly per NCTE guidelines. Ex-Servicemen and Widow categories do not get a separate lower cutoff in UP (unlike Rajasthan where Widow and Divorcee get the 55 percent relaxation).

Passing UPTET does NOT guarantee a teaching job. It only certifies eligibility. Actual appointment as an Assistant Teacher requires clearing the Super TET recruitment or the direct UPESSC recruitment for TGT, PGT, or Principal posts.

## UPTET certificate is only the gate: the full recruitment pipeline

This is where most competitor pages stop. They tell you how to clear UPTET but leave the reader stranded on what happens next. Here is the full pipeline for a candidate targeting a UP Government teaching job.

Step 1: UPTET (Paper 1 for Primary, Paper 2 for Upper Primary). Qualifying exam only. Certificate is lifetime valid. Cost is Rs 600 for one paper.

Step 2 for Primary teachers: Assistant Teacher recruitment via the Basic Education Council. The last major recruitment was the 69,000 Assistant Teacher recruitment cycle, most of whose records and appointment orders sit at upbasiceduboard.gov.in. A fresh cycle has been announced by UPESSC for the current pipeline. Selection is based on UPTET marks plus academic weightage as per the UP quality-point formula.

Step 2 for Upper Primary and Secondary teachers: Super TET or the fresh UPESSC recruitment for TGT (Trained Graduate Teacher, Classes 6 to 10), PGT (Post Graduate Teacher, Classes 11 to 12), and Principal posts. UPESSC has indicated a combined recruitment cycle for 56,000 to 85,000 posts across TGT, PGT, and Principal levels once the pending 69,000 primary cycle is closed. This will use UPTET qualification as a filter for the primary-level recruitments and Super TET or direct UPESSC subject-specific tests for the secondary-level recruitments.

Step 3: Interview and document verification. Final merit list is issued district-wise. Appointment orders are dispatched to the candidate's registered address and to the district Basic Shiksha Adhikari (BSA) office.

Step 4: Joining. Reporting to the assigned school within 30 days of appointment order. Probation is typically 2 years with an annual increment freeze during probation.

Salary for a UP Assistant Teacher at Primary level starts at Pay Matrix Level 7 with basic pay around Rs 35,400 during probation. Gross monthly including DA, HRA, and TA is in the range of Rs 45,000 to Rs 55,000 during probation and Rs 55,000 to Rs 70,000 post-probation. Secondary-level TGT and PGT roles are at Level 8 and Level 10 respectively with higher basic and gross figures.

## Application fee and how to pay

UPTET 2026 application fee structure per the notification.

| Category | Single paper (Paper 1 OR Paper 2) | Both papers (Paper 1 AND Paper 2) |
|---|---|---|
| General / EWS / OBC | Rs 600 | Rs 1,200 |
| SC / ST | Rs 400 | Rs 800 |
| PwD | Rs 100 | Rs 200 |

Payment channels accepted are net banking, credit and debit card (Visa or Mastercard), and UPI through the SBI e-collect gateway integrated into the UPESSC portal. Application is considered submitted only after fee payment success. Candidates who submit the form but do not complete the fee payment by the last date (5 May 2026 for the 2026 cycle) had their applications cancelled automatically.

Refund of fee is not available in any circumstances once payment has been made and the application confirmation is generated. Corrections to the application form are permitted only during the correction window (6 to 8 May 2026 in this cycle).

## Age limits: TET stage versus recruitment stage

Age limit at the TET stage (UPTET itself). Minimum 18 years. No upper cap. A candidate of any age above 18 can appear for UPTET and hold a lifetime-valid certificate.

Age limit at the recruitment stage (Assistant Teacher, TGT, PGT, or Principal). Standard UP Government recruitment upper cap of 35 years, with age relaxations per Government orders. SC and ST candidates get 5 years relaxation (upper cap 40). OBC candidates get 3 years relaxation (upper cap 38). Persons with Disability get 15 years relaxation (upper cap 50). Ex-Servicemen get age relaxation per Ministry of Personnel rules. Female candidates get separate horizontal reservation but no additional age relaxation beyond the category rule.

Practical implication. Clear UPTET early (in your 20s if possible) since the certificate is lifetime valid. The age constraint bites at the recruitment stage, and a 34-year-old General category candidate has only one shot at the standard recruitment cycle.

## Lifetime certificate validity: 2011 batches onward

UPTET certificate is valid for the lifetime of the holder. The National Council for Teacher Education (NCTE) issued Notification F. No. NCTE-Regl010(70)/1/2020-US (Regu) 1 dated 3 June 2020 that extended TET certificate validity from 7 years to lifetime. The Uttar Pradesh Cabinet approved the retrospective application of this rule in November 2021, making all UPTET certificates from the very first 2011 exam onward valid for lifetime.

Retrospective validity is the important part. If you cleared UPTET in 2011, 2013, 2014, 2017, 2018, or 2019 (or the 2021 cycle with the 23 January 2022 re-exam), your certificate is now lifetime valid even if it had expired under the earlier 7-year rule. UP Basic Education Council has been reissuing lifetime-valid certificates on request since 2022 through updeled.gov.in.

For 2026 candidates, the certificate you receive after clearing UPTET 2026 will carry lifetime validity from the start. No renewal, no re-examination, no expiry.

## CTET versus UPTET for UP jobs: which one to hold, when it matters

Both CTET (Central Teacher Eligibility Test, conducted by CBSE) and UPTET are accepted for UP Government teacher recruitment. UPESSC and the UP Basic Education Council explicitly recognise CTET as an equivalent qualification for Assistant Teacher, TGT, and PGT recruitment in UP schools.

When to prefer CTET. If you are targeting Kendriya Vidyalaya (KVS), Navodaya Vidyalaya (NVS), Central Government schools, or plan to appear for teacher recruitment in multiple states, CTET is the better single-exam investment. CTET is accepted by all Central schools and most state Governments including UP.

When to prefer UPTET. If you are specifically targeting UP Government schools and want to maximise the quality-point score in the UP recruitment formula, UPTET is often weighted slightly higher than CTET in the internal ranking algorithm. UPTET is also the only route for candidates who could not clear CTET but are strong on UP-specific pedagogy.

Holding both CTET and UPTET is the strongest position for a UP-focused candidate. The higher score between the two is typically taken forward at the recruitment stage.

## 2021 paper leak history and 23 January 2022 re-exam

For context, the UPTET 2021 cycle was scheduled for 28 November 2021 but the paper was leaked hours before the exam start. The UP Government cancelled the exam on the same day, arrested more than 30 people including a paper leak gang from Prayagraj and Bareilly, and refunded exam fees for candidates who could not travel for the rescheduled date.

The re-exam was held on 23 January 2022 and the result was declared on 8 April 2022. That result stands as the last valid UPTET result before the 2026 cycle. Certificates from the 23 January 2022 re-exam are lifetime valid per the November 2021 UP Cabinet decision.

The 4-year gap between January 2022 and July 2026 was caused by the transition of the conducting body from UPBEB to UPESSC and the pending completion of the 69,000 Assistant Teacher recruitment cycle. UPESSC has committed to an annual UPTET cycle from 2026 onward, with UPTET 2027 notification expected in Q1 2027 for a Q2 2027 exam.

## UPESSC versus UPBEB: who does what now

UPESSC (Uttar Pradesh Education Service Selection Commission) was constituted by the UP Government to consolidate the fragmented teacher recruitment ecosystem. It absorbs the functions of the older UPBEB (Uttar Pradesh Basic Education Board) for TET conduct, and it also handles the recruitment tests for TGT, PGT, and Principal posts that were earlier handled by the UP Secondary Education Services Selection Board.

Current division of responsibilities. UPESSC (upessc.up.gov.in) conducts UPTET, Super TET, Assistant Teacher recruitment tests, and the TGT/PGT/Principal recruitment tests. UP Basic Education Council (upbasiceduboard.gov.in) handles the primary school administration, teacher postings, and legacy 69,000 recruitment record maintenance. UPBEB legacy portal (updeled.gov.in) hosts the old UPTET certificate archive for the 2011 to 2022 cycles and is being migrated to the UPESSC platform.

For a UPTET 2026 candidate, the only portal that matters is upessc.up.gov.in during the exam and result cycle, and updeled.gov.in for historical certificate access.

## Answer key objection process and how the final key is issued

Provisional answer key was published on 8 July 2026 on upessc.up.gov.in. Objections were accepted from 8 to 14 July 2026 through the same portal. Each objection required an objection fee of Rs 100 per question, refundable if the objection was accepted by the subject expert committee.

Objection format. Candidates had to log in to the UPESSC portal with their application number and password, select the question they wished to challenge, upload a supporting document or reference (typically the source NCERT page or authoritative reference), and pay the objection fee. Objections without a supporting document are rejected without review.

The final answer key is issued after the UPESSC subject expert committee reviews all objections. Objections that are accepted lead to the question being deleted, awarded to all, or the correct answer being changed. Once the final answer key is out, no further challenge is possible outside the courts, and the result is prepared on the basis of the final key.

## Result and scorecard: what to expect and download

UPTET 2026 result is expected in the last week of July or first week of August 2026 as per UPESSC guidance. The result comes with a downloadable scorecard showing category-wise rank, marks in each section, total marks, and qualifying status.

How to download once available. Visit upessc.up.gov.in, open the UPTET 2026 result section, enter the roll number and date of birth, submit and view the scorecard. Take a printout for future reference and record the roll number in a safe place because the printed scorecard is often required at the recruitment stage.

The UPTET certificate (as distinct from the scorecard) is typically issued 15 to 30 days after the result. Certificate has a unique alphanumeric ID, QR code for verification, holder name and photograph, category, paper (1 or 2), marks, and lifetime validity remark. Certificate is downloadable in PDF format from the same portal.

## Primary sources and official links

- UPESSC (new conducting body): https://upessc.up.gov.in
- UPBEB legacy portal (old certificates and archive): https://updeled.gov.in
- UP Basic Education Council (69,000 records, primary school postings): https://upbasiceduboard.gov.in
- NCTE Notification dated 3 June 2020 on lifetime TET validity: https://ncte.gov.in
- UP Cabinet approval of retrospective lifetime validity (November 2021): reported in Government of Uttar Pradesh cabinet decisions archive
- Supreme Court judgment 11 August 2023, Devesh Sharma v Union of India (barring B.Ed for Paper 1): https://main.sci.gov.in

## Frequently asked questions
`;

const FAQS = [
  {
    question: "Is UPTET 2026 notification out?",
    answer: "Yes. UPTET 2026 notification was released as Adv. No. 01/UPTET/2026 on 20 March 2026 by the newly constituted Uttar Pradesh Education Service Selection Commission (UPESSC) at upessc.up.gov.in. UPESSC has replaced the older UPBEB as the conducting body for UPTET. Applications opened on 27 March 2026 and closed on 3 May 2026 after the original 26 April deadline was extended. Total forms filled stood at 19,94,661.",
  },
  {
    question: "When is UPTET 2026 exam date?",
    answer: "UPTET 2026 was conducted on 2, 3, and 4 July 2026 across 955 centres in 60 districts of Uttar Pradesh. The exam ran in two shifts per day, 9:30 am to 12:00 pm and 2:30 pm to 5:00 pm. The provisional answer key was released on 8 July 2026 with objections accepted from 8 to 14 July 2026. Result and scorecard are expected in the last week of July or first week of August 2026 as per UPESSC guidance.",
  },
  {
    question: "What is the qualifying mark for UPTET 2026?",
    answer: "Qualifying cutoff is 60 percent (90 marks out of 150) for General and EWS category. Reserved categories (OBC-NCL, SC, ST, and PwBD) need 55 percent (82 or 83 marks out of 150 depending on rounding). Ex-Servicemen and Widow do not get a separate lower cutoff in UP, unlike Rajasthan REET. Passing UPTET does not guarantee a teaching job. It only certifies eligibility for the Assistant Teacher or Super TET or UPESSC TGT and PGT recruitment cycles.",
  },
  {
    question: "Is UPTET certificate valid for lifetime?",
    answer: "Yes. UPTET certificate is lifetime valid retrospectively from the very first 2011 exam. The rule comes from NCTE Notification dated 3 June 2020 that extended TET certificate validity from 7 years to lifetime, and the UP Cabinet approval of November 2021 that applied this retrospectively. Candidates who cleared UPTET in 2011, 2013, 2014, 2017, 2018, 2019, or the 2021 cycle (23 January 2022 re-exam) now hold lifetime-valid certificates even if the earlier 7-year window had lapsed.",
  },
  {
    question: "Can B.Ed candidates apply for UPTET Paper 1 in 2026?",
    answer: "No. B.Ed holders are not eligible for UPTET Paper 1 (Primary Classes 1 to 5) in 2026. Only D.El.Ed, BTC, or B.El.Ed holders can apply for Paper 1. The rule comes from the Supreme Court judgment dated 11 August 2023 in Devesh Sharma v Union of India, which struck down the 2018 NCTE notification that had briefly allowed B.Ed for Paper 1. A narrow bridge course covers only those B.Ed holders appointed as Primary teachers between 28 June 2018 and 28 November 2023. Fresh B.Ed applicants for UPTET 2026 Paper 1 will have their result withheld or disqualified.",
  },
  {
    question: "Is there negative marking in UPTET 2026?",
    answer: "No. UPTET 2026 has no negative marking, so every question can be attempted without penalty. This is different from Rajasthan REET 2026, which introduced a 5-option MCQ format with negative marking including for unattempted questions. UPTET keeps the standard 4-option MCQ format with no penalty for wrong or blank answers. Strategy: attempt all 150 questions in the 150 minutes available. Even educated guesses on the difficult questions add to the score without downside.",
  },
  {
    question: "What is the UPTET 2026 application fee?",
    answer: "Application fee for General, EWS, and OBC candidates is Rs 600 for a single paper (Paper 1 OR Paper 2) and Rs 1,200 for both papers combined. SC and ST candidates pay Rs 400 for one paper and Rs 800 for both. PwD candidates pay Rs 100 for one paper and Rs 200 for both. Payment channels are net banking, credit and debit card, and UPI through the SBI e-collect gateway integrated into the UPESSC portal. Fee refund is not available under any circumstances once payment is confirmed.",
  },
  {
    question: "Is CTET accepted for UP teacher recruitment?",
    answer: "Yes. CTET (Central Teacher Eligibility Test conducted by CBSE) is accepted for UP Government teacher recruitment on par with UPTET. UPESSC and the UP Basic Education Council recognise CTET as an equivalent qualification for Assistant Teacher, TGT, and PGT recruitment in UP schools. Holding both CTET and UPTET is the strongest position for a UP-focused candidate because the higher score between the two is typically taken forward at the recruitment stage. CTET is also the required qualification for KVS, NVS, and other Central Government schools.",
  },
  {
    question: "What is the age limit for UPTET 2026?",
    answer: "Minimum age is 18 years for the UPTET stage itself. There is no upper age limit for appearing in UPTET. A candidate of any age above 18 can write UPTET and hold a lifetime-valid certificate. The upper cap of 35 years applies at the recruitment stage (Assistant Teacher, TGT, PGT, or Principal), with standard UP relaxations: 5 years for SC and ST (upper cap 40), 3 years for OBC (upper cap 38), 15 years for Persons with Disability (upper cap 50), and separate rules for Ex-Servicemen per Ministry of Personnel guidelines.",
  },
  {
    question: "How to download UPTET admit card 2026?",
    answer: "UPTET 2026 admit card was released on 30 June 2026 at upessc.up.gov.in. To download, log in with the application number and password used at registration, open the admit card section, verify the photo, roll number, exam centre, and shift, then download the PDF and take at least two printouts. Carry the admit card, one photo ID (Aadhaar, PAN, Voter ID, or Driving Licence), and the specified stationery (blue or black ballpoint pen) on exam day. Reporting time was 8:00 am for shift 1 and 1:00 pm for shift 2, with entry closed 30 minutes before the exam start.",
  },
];

const ROW = {
  slug: "uptet-2026",
  title: "UPTET 2026: UPESSC exam done, result timeline and eligibility",
  conducting_body: "Uttar Pradesh Education Service Selection Commission (UPESSC)",
  exam_date: "2 to 4 July 2026 (already conducted; answer key 8 July 2026, objection window 8 to 14 July 2026, result expected last week July or first week August 2026)",
  application_start: "2026-03-27",
  application_end: "2026-05-03",
  eligibility: "Paper 1 (Classes 1 to 5): Class 12 with at least 50 percent marks plus 2-year D.El.Ed or BTC, OR Class 12 with 45 percent plus D.El.Ed under NCTE 2002 norms, OR Class 12 with 50 percent plus 4-year B.El.Ed, OR Class 12 with 50 percent plus 2-year Diploma in Education (Special Education). Bachelor's degree with 2-year D.El.Ed is also accepted. B.Ed holders are NOT eligible for Paper 1 per Supreme Court judgment dated 11 August 2023 in Devesh Sharma v Union of India. Paper 2 (Classes 6 to 8): Bachelor's degree with at least 50 percent marks plus B.Ed from NCTE-recognised institution, OR Bachelor's with 45 percent plus B.Ed under NCTE 2002 norms, OR Class 12 with 50 percent plus 4-year integrated B.A. B.Ed or B.Sc B.Ed, OR Bachelor's with 50 percent plus 1-year B.Ed (Special Education). Age minimum 18 years with no upper limit for TET stage. Upper cap 35 years at recruitment stage with standard UP relaxations (SC and ST 5 years, OBC 3 years, PwD 15 years).",
  syllabus: "Paper 1 (Primary Classes 1 to 5) covers 5 sections with 30 questions each in 150 questions total. Child Development and Pedagogy 30 marks. Language 1 (Hindi) 30 marks. Language 2 (English, Urdu, or Sanskrit) 30 marks. Mathematics 30 marks. Environmental Studies (EVS) 30 marks. Paper 2 (Upper Primary Classes 6 to 8) covers 4 sections in 150 questions. Child Development and Pedagogy 30 marks. Language 1 (Hindi) 30 marks. Language 2 (English, Urdu, or Sanskrit) 30 marks. Subject-specific portion 60 marks (Mathematics and Science combined OR Social Studies chosen at application). NCERT textbooks Class 6 to 12 are the primary reference. UP-specific General Knowledge is not a separate section in UPTET.",
  exam_pattern: "Offline OMR-based single paper of 150 questions and 150 marks with 150 minutes (2 hours 30 minutes) duration. Bilingual (English and Hindi). 4-option MCQ format (not the 5-option format Rajasthan REET introduced in 2026). NO negative marking, so every question can be attempted without penalty. Two shifts per day: shift 1 from 9:30 am to 12:00 pm and shift 2 from 2:30 pm to 5:00 pm. Candidates applying for both Paper 1 and Paper 2 write one paper in each shift on the allotted day. 955 centres across 60 districts of Uttar Pradesh in the 2026 cycle. Qualifying cutoffs: 60 percent (90 out of 150) for General and EWS, 55 percent (82 or 83 out of 150) for OBC-NCL, SC, ST, and PwBD. UPTET certificate is lifetime valid retrospectively from 2011 per NCTE June 2020 amendment and UP Cabinet November 2021 approval.",
  admit_card_link: "https://upessc.up.gov.in",
  result_link: "https://upessc.up.gov.in",
  official_link: "https://upessc.up.gov.in",
  category: "teaching",
  state: "uttar-pradesh",
  reading_time: "15 min read",
  description: "UPTET 2026 by UPESSC held 2 to 4 July, 19.94 lakh forms filed. Answer key 8 July, result expected late July or early August 2026. Full eligibility guide.",
  content: CONTENT,
};

// entrance_exams doesn't have a faqs column, so inline FAQ Q/A pairs into content
const FAQ_BLOCK = FAQS.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n");
ROW.content = ROW.content + "\n" + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
