// Day 10 (Wed 2026-07-29) — UPSC CMS 2026 job deepening (566w -> 3000w+).
// Verified 2026-07-28: cycle LIVE. Notified 11 Mar 2026, apps 11-31 Mar, admit card out,
// exam 2 Aug 2026. 1,358 vacancies. Pay Level 10 + 20% NPA. DA 60% (Finance Ministry, 1 Jan 2026).
// FAQ questions in BOLD for FAQPage JSON-LD. Internal link to neet-pg (exists).
import { replaceJob } from "./lib/replace-job.mjs";

const title = "UPSC CMS 2026: 1,358 Doctor Posts, Exam 2 Aug, Salary";

const description =
  "UPSC CMS 2026 recruits 1,358 medical officers. Exam on 2 August, admit card out. Check eligibility, posts, exam pattern, salary with NPA and CMS vs NEET-PG.";

const content = `## UPSC CMS 2026 at a glance

The UPSC Combined Medical Services Examination 2026 recruits 1,358 medical officers into central government health services, and the cycle is live: the notification came out on 11 March 2026, the admit card is already available, and the written exam is scheduled for 2 August 2026. If you have an MBBS and want a permanent central government doctor's job, this is the direct route, without going through NEET-PG first.

CMS is one of the few ways to become a government doctor straight after MBBS, with pay and job security from day one. The 1,358 posts span four employers: the Central Health Service, Indian Railways, and the Delhi municipal bodies. This guide covers where each post lands you, the exam and salary in detail, and how CMS compares with the NEET-PG route.

Here is where the 2026 cycle stands as of late July 2026: applications closed on 31 March, the admit card is out, and the exam is days away on 2 August 2026. So this page is a full guide for the exam and for candidates planning the next cycle, not an apply-now listing.

## Important dates for UPSC CMS 2026

| Event | Date |
|---|---|
| Notification released | 11 March 2026 |
| Application window | 11 to 31 March 2026 |
| Admit card | Released (July 2026) |
| Written exam (CBRT) | 2 August 2026 |
| Result and Personality Test | After the written exam |

The written exam runs in two shifts across 48 cities. Carry the admit card with a valid photo ID. Once the written result is declared, shortlisted candidates are called for the Personality Test, after which the final merit and allocation to services follow, so keep tracking upsc.gov.in through the result and interview stages.

## Vacancy details

The 1,358 posts split across four employers, in two categories.

| Post | Employer | Vacancies |
|---|---|---|
| Medical Officer (Category I) | Central Health Service | 864 |
| Assistant Divisional Medical Officer (Category II) | Indian Railways | 450 |
| General Duty Medical Officer Grade II | NDMC | 14 |
| General Duty Medical Officer Grade II | Municipal Corporation of Delhi | 30 |
| Total | | 1,358 |

Verify the exact split against the UPSC press note, since aggregator sources differ slightly on the Category I count. Reservation applies as per government norms across the posts.

## Which service you actually join

This is the part most guides skip, and it decides your working life. A Central Health Service Medical Officer works in central government hospitals and dispensaries under the Ministry of Health, with a mix of clinical and administrative work and a structured promotion path. An Assistant Divisional Medical Officer in the Railways runs railway health units and hospitals, a transferable all-India posting tied to the railway network. A General Duty Medical Officer in NDMC or the Municipal Corporation of Delhi works in Delhi's civic dispensaries and hospitals, a posting that stays within the city. Reading these differences before you rank preferences matters, because the transfer liability and work profile differ a lot between a Railways posting and a Delhi municipal one.

## Eligibility for UPSC CMS 2026

On qualification, you must have passed the written and practical parts of the final MBBS examination. Final-year candidates and those completing the compulsory rotating internship can apply provisionally, subject to producing proof in time.

On age, you must not have turned 32 years as on 1 August 2026. Relaxation applies: 3 years for OBC, 5 years for SC and ST, 10 years for PwBD candidates, and further relaxation for ex-servicemen and disabled defence personnel per the rules.

On attempts, General candidates get 6 attempts, OBC candidates 9, and SC and ST candidates have no cap up to the age limit. Confirm the exact attempt rule in the notification, as UPSC states it precisely there.

## Application fee

The fee is Rs 200 for General and OBC male candidates. All female candidates and SC, ST, and PwBD candidates are exempt. Payment is online through net banking, a card, or UPI, or through an SBI challan, and once paid the fee is not refunded, so confirm your eligibility before you pay.

## Selection process

CMS selection runs in two stages.

1. Computer Based Recruitment Test (CBRT): an objective written test of 500 marks.
2. Personality Test: an interview of 100 marks.

The final merit is built from the CBRT and the Personality Test together, out of 600 marks. There is no separate physical test for the medical posts.

## Exam pattern

The CBRT has two papers of 250 marks each, both objective, held on the same day in two shifts, with a penalty of one-third mark for each wrong answer.

| Paper | Subjects | Marks | Duration |
|---|---|---|---|
| Paper 1 | General Medicine and Paediatrics | 250 | 2 hours |
| Paper 2 | Surgery, Gynaecology and Obstetrics, and Preventive and Social Medicine | 250 | 2 hours |

Because of the one-third negative marking, blind guessing is costly, so accuracy on the topics you know well matters more than attempting everything.

## Syllabus

Paper 1 covers General Medicine, including cardiology, respiratory medicine, neurology, and gastroenterology, along with Paediatrics. Paper 2 covers Surgery and its specialties, Obstetrics and Gynaecology, and Preventive and Social Medicine, which spans national health programmes, epidemiology, and biostatistics. The syllabus is entirely MBBS-level, so a candidate fresh out of MBBS is well placed, and the exam rewards clinical fundamentals over specialised depth. There is no separate optional subject and no specialisation paper, which is one reason CMS is approachable straight after the final MBBS: the same subjects you studied for your degree are the subjects the exam tests, only under time pressure and with negative marking. A candidate who kept up with the core subjects through internship often needs revision and practice more than fresh learning.

## UPSC CMS 2026 salary

CMS medical officers enter at Pay Level 10 of the 7th Pay Commission, with a basic pay of Rs 56,100, and doctors additionally receive a Non-Practicing Allowance of 20 percent of basic pay because they cannot run a private practice. With dearness allowance at 60 percent effective 1 January 2026, per the Finance Ministry order, the in-hand works out well above the basic.

Here is a worked in-hand estimate in a metro (X-class city). The basic of Rs 56,100 plus the 20 percent Non-Practicing Allowance of Rs 11,220 gives a base of Rs 67,320. Dearness allowance at 60 percent of that base adds Rs 40,392. House rent allowance at the metro rate of 30 percent adds Rs 16,830, and transport allowance with DA adds about Rs 11,520. That is a gross near Rs 1,36,000 a month. After the National Pension System contribution and other deductions, the in-hand lands around Rs 1.1 to 1.2 lakh a month before income tax. In a Y-class city the gross settles near Rs 1.25 lakh and in a Z-class city near Rs 1.17 lakh, because house rent allowance changes with location. Competitor pages that quote Rs 75,000 to 95,000 use a stale DA and often leave out the Non-Practicing Allowance.

## UPSC CMS vs NEET-PG

After MBBS, doctors weigh a government job through CMS against specialisation through [NEET-PG](/entrance-exams/neet-pg-2026). They are different goals, not a which-is-harder contest.

| Factor | UPSC CMS | NEET-PG |
|---|---|---|
| Outcome | A central government doctor's job | A PG specialisation seat |
| Timing | A job right after MBBS | Delays earning while you study |
| Age limit | Up to 32 years | No upper age limit |
| Syllabus | MBBS subjects only | Deeper, whole-MBBS with a PG focus |
| Competition | About 1,358 posts | Very high, lakhs for the PG seats |
| Later options | Can do PG later via study leave | Leads to a specialist career |

CMS suits a candidate who wants a stable government job and salary immediately after MBBS, with the option to specialise later. NEET-PG suits one whose priority is specialisation. Many doctors take CMS first for security and pursue a PG afterwards.

## Career growth as a government medical officer

A CMS medical officer does not stay at the entry grade. In the Central Health Service the path runs from Junior Scale Medical Officer up through senior administrative grades over a career, with pay progression and the chance to move into hospital administration and public health policy roles. Railway and municipal medical officers follow their own promotion tracks within those services. Alongside pay, the post carries the security, medical benefits, and pension provisions of a central government job, which is why CMS draws thousands of MBBS graduates each year despite the tough exam.

## Documents you will need

Keep these ready for the application and the later stages, since the process pauses if you cannot produce them.

1. Your MBBS degree or a provisional passing certificate, and internship completion proof where applicable.
2. Registration with the Medical Council, state or national, as the notification requires.
3. A category certificate (OBC, SC, ST, EWS, or PwBD) where you claim relaxation.
4. Proof of date of birth, usually your Class 10 certificate.
5. A recent photograph, signature, and a valid photo ID matching your application.

## Competition and cut-off context

CMS draws a large field of MBBS graduates each year for its posts, so while the exam is MBBS-standard, the cut-off runs high because the paper is scoring for a prepared candidate. The merit is decided by the combined CBRT and Personality Test score out of 600, and the Personality Test can move a candidate several places, so a strong written score is necessary but not the whole story. UPSC publishes category-wise cut-offs with each cycle's result, and they shift year to year with the difficulty of the papers and the number of posts. The practical takeaway is to aim to clear the written stage comfortably rather than by a whisker, and to prepare for the interview as seriously as the exam, since both feed the final merit.

## A closer look at the three services

The Central Health Service is the largest employer in CMS, and its medical officers staff central government hospitals and dispensaries, teaching and referral institutions, and public health roles under the Ministry of Health and Family Welfare. The work mixes clinical duty with administrative and policy responsibility as an officer rises, and the promotion ladder is the most structured of the three services.

The Railways route, as an Assistant Divisional Medical Officer, places you in the railway health system, which runs its own network of hospitals and health units for railway staff and their families across the country. It is a transferable all-India service tied to railway divisions and zones, which suits candidates open to mobility.

The municipal route, as a General Duty Medical Officer in NDMC or the Municipal Corporation of Delhi, keeps you within Delhi's civic health system, staffing dispensaries and municipal hospitals. It offers a settled, city-based posting rather than the transfer liability of the Railways. Weighing these three against your own priorities on location and work profile is worth doing before you rank preferences.

## Common mistakes candidates make

The first mistake is treating CMS as an afterthought to NEET-PG and preparing too late, when the exam rewards focused revision of MBBS subjects over a few months. The second is neglecting Preventive and Social Medicine, which carries a full share of Paper 2 yet is the subject candidates most often underprepare. The third is over-attempting under the one-third negative marking, which turns a strong candidate into a borderline one. The fourth is ignoring the Personality Test until the written result is out, when it carries 100 of the 600 merit marks and rewards preparation on your background, current health-sector topics, and communication. Avoiding these four puts you ahead of much of the field.

## A preparation plan that fits CMS

Because the syllabus is MBBS-level, the most efficient plan revises your existing knowledge to exam depth rather than learning new material. Give the early weeks to a full pass through General Medicine, Surgery, Obstetrics and Gynaecology, Paediatrics, and Preventive and Social Medicine, then move to previous years' CMS papers under timed conditions to build speed and accuracy. General Medicine and Surgery carry the largest weight and reward steady revision, while Preventive and Social Medicine is the highest-return single subject for the effort because it is factual and scoring. Take full-length mock tests in the two-shift format in the final weeks, review every wrong answer to find your recurring gaps, and keep a short current-affairs note on health programmes and policy for the interview. Candidates who convert CMS are usually those who revised smart and made few careless errors, not those who studied the longest.

## Why UPSC CMS is worth targeting

For an MBBS graduate who wants a government career, CMS is one of the most direct routes available: a permanent central government post with officer status, a strong pay package including the Non-Practicing Allowance, and job security from the first day. Unlike the long and uncertain path of NEET-PG followed by a specialisation and then a job hunt, CMS gives an immediate, stable career with the option to specialise later through study leave. That combination of early security and future flexibility is why the exam stays competitive despite the growing pull of private-sector medicine.

## How to prepare for UPSC CMS

The exam is MBBS-standard, so the highest-return preparation is revising your core clinical subjects to the depth the two papers demand rather than chasing specialised topics. Preventive and Social Medicine is often underrated by candidates yet carries a full share of Paper 2, so national health programmes, epidemiology, and biostatistics deserve dedicated revision. Because of the one-third negative marking, practise judging which questions to leave, and take timed mock tests in the two-shift format to build stamina for a two-paper day. Previous years' CMS papers are the best guide to the balance and difficulty the exam sets.

## Admit card and exam day

The UPSC admit card, or e-admit card, is released a couple of weeks before the exam on upsc.gov.in and upsconline.nic.in, and for the 2026 cycle it is already available. Download it, check that your name, photograph, and centre are correct, and carry a clear printout with the same photo ID you used to apply. The written exam runs in two shifts on 2 August 2026 across 48 cities, so reach your centre early, since biometric and document checks take time and latecomers are refused entry. Follow the instructions on the admit card exactly, since UPSC enforces its exam-day rules strictly, from the items you may carry to the reporting time.

## Where CMS fits in a medical career

CMS is not a dead-end job but a platform. Officers can pursue post-graduate qualifications through study leave provisions, move into administrative and public health leadership over a career, and, in the Central Health Service, reach senior policy and hospital-management roles. For many doctors the appeal is exactly this blend: the security and standing of a government post now, without closing the door on specialisation later. Understanding that CMS and NEET-PG are complementary stages rather than rival choices helps a candidate plan a medical career with both security and growth, and it is why a large share of CMS entrants are graduates who fully intend to specialise in time.

## Frequently asked questions

**Is the UPSC CMS 2026 notification out?**
Yes. The UPSC CMS 2026 notification was released on 11 March 2026 for 1,358 medical officer posts. Applications ran from 11 to 31 March, the admit card is out, and the written exam is scheduled for 2 August 2026.

**How many vacancies are there in UPSC CMS 2026?**
UPSC CMS 2026 has 1,358 vacancies: about 864 Medical Officer posts in the Central Health Service, 450 Assistant Divisional Medical Officer posts in the Railways, and 44 General Duty Medical Officer posts in NDMC and the Municipal Corporation of Delhi.

**What is the age limit for UPSC CMS 2026?**
A candidate must not have turned 32 years as on 1 August 2026. Relaxation is 3 years for OBC, 5 years for SC and ST, and 10 years for PwBD candidates, with further relaxation for ex-servicemen and disabled defence personnel.

**Can final-year MBBS students apply for UPSC CMS?**
Yes. Final-year MBBS candidates and those completing the compulsory rotating internship can apply provisionally, provided they produce proof of passing the final MBBS examination in time as required by the notification.

**What is the salary of a UPSC CMS medical officer?**
A CMS medical officer enters at Pay Level 10 with a basic of Rs 56,100 plus a 20 percent Non-Practicing Allowance. At 60 percent dearness allowance effective 1 January 2026, the in-hand works out to about Rs 1.1 to 1.2 lakh a month in a metro before income tax.

**Is there negative marking in UPSC CMS?**
Yes. The Computer Based Recruitment Test deducts one-third of a mark for each wrong answer in both papers. There is no negative marking in the Personality Test.

**How many attempts are allowed in UPSC CMS?**
General candidates get 6 attempts, OBC candidates get 9, and SC and ST candidates have no cap up to the age limit. Confirm the exact rule in the official notification.

**Which posts can I get through UPSC CMS?**
Through UPSC CMS you can join as a Medical Officer in the Central Health Service, an Assistant Divisional Medical Officer in the Railways, or a General Duty Medical Officer in NDMC or the Municipal Corporation of Delhi, each with a different posting and transfer profile.

**Is UPSC CMS better than NEET-PG after MBBS?**
They serve different goals. CMS gives a central government doctor's job right after MBBS with immediate pay and security, and has an upper age limit of 32. NEET-PG leads to specialisation with no age limit but delays earning. Many doctors take CMS first and pursue a PG later.`;

const fields = {
  vacancies: 1358,
  last_date: "2026-03-31",
  post_name: "Medical Officer (Central Health Service), Assistant Divisional Medical Officer (Railways), General Duty Medical Officer (NDMC and MCD)",
  eligibility: {
    age: "Must not have turned 32 years as on 1 August 2026. Relaxation: OBC +3, SC/ST +5, PwBD +10 years, plus ex-servicemen and disabled defence personnel per rules.",
    education: "Passed the written and practical parts of the final MBBS examination. Final-year candidates and those completing the compulsory rotating internship may apply provisionally.",
  },
  salary: "Pay Level 10 (7th CPC), basic Rs 56,100 plus 20% Non-Practicing Allowance. In-hand about Rs 1.1 to 1.2 lakh/month in a metro at 60% DA (effective 1 Jan 2026) before income tax.",
  application_fee: {
    general: "Rs 200",
    obc: "Rs 200",
    ews: "Rs 200",
    sc_st: "Nil",
    women: "Nil",
    ph: "Nil",
  },
  important_dates: {
    startDate: "2026-03-11",
    lastDate: "2026-03-31",
    examDate: "2026-08-02",
  },
  how_to_apply:
    "Applications for UPSC CMS 2026 closed on 31 March 2026. The notification and application portal are on the UPSC website https://upsc.gov.in/ and https://upsconline.nic.in/ . The admit card is out; carry it with a valid photo ID for the 2 August 2026 exam. For the next cycle: register on upsconline.nic.in, fill the form, upload documents, pay the Rs 200 fee if applicable, and submit before the deadline.",
  selection_process:
    "**Stage 1: Computer Based Recruitment Test (CBRT)** objective, 500 marks (Paper 1 and Paper 2, 250 each), negative 1/3.\n\n**Stage 2: Personality Test** (interview), 100 marks.\n\nFinal merit from CBRT + Personality Test, out of 600. No physical test.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "upsc-cms-2026", title, description, content, fields });
