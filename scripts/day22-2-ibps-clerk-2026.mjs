// IBPS Clerk 2026 — thin-page fix + FACTUAL CORRECTION (urgent)
//
// Verified 2026-08-14.
//
// WHY THIS WAS URGENT
// The live page (1006w) carried wrong data on an application deadline seven
// days away:
//   - vacancies said 15,736        ACTUAL 11,403
//   - title said 15,736            ACTUAL 11,403
//   - description said "CRP Clerks XV" and "notification expected July to
//     August 2026"                 ACTUAL CRP CSA-XVI, notification OUT 1 Aug
//   - last_date said 2026-08-31    ACTUAL 2026-08-21
// A candidate trusting our last date would have missed the window by 10 days.
// Corrected here. The old page also carried em dashes and an en dash in its
// headings, violating the humanizer dash rule.
//
// FACTS VERIFIED (IBPS notification dated 1 Aug 2026; corroborated across
// FreeJobAlert, Testbook, CareerPower, Adda247, PW, BankersAdda on 2026-08-14):
//   - CRP CSA-XVI, 11,403 Customer Service Associate vacancies
//   - 11 participating public sector banks
//   - Application window 1 Aug to 21 Aug 2026
//   - Prelims 10 and 11 October 2026. Mains 27 December 2026
//   - Age 20 to 28. Graduation in any discipline
//   - Prelims: 100 Q / 100 marks / 60 min, three sections at 20 min each
//   - Negative marking 0.25 in both stages
//   - No interview. Mains alone decides the merit list
//   - Basic pay Rs 24,050 to Rs 64,480; reported in-hand Rs 28,000 to 32,000
//   - RENAME: clerical cadre is now "Customer Service Associate (CSA)" and the
//     exam is officially CRP-CSA, not CRP Clerks
//
// SOURCE CONFLICT LEFT UNRESOLVED (deliberately):
//   Mains revised pattern. Sources disagree: some say 160 questions / 125 min,
//   others 155 questions / 120 min, and section splits differ between them
//   (Reasoning 60 vs 50, Quant 40 vs 50). Rather than pick one and assert it,
//   the page states the conflict and points at the notification PDF. Every
//   competitor states a confident number and they contradict each other.
//
// NOT ASSERTED: state-wise vacancy split. IBPS publishes it in the notification
// PDF annexure; no aggregator carried a reliable table. The page explains how
// the state allocation works and tells the reader to read the annexure, rather
// than inventing numbers.
//
// MOAT vs DR 70+ competitors: all of them bury the state-selection decision in
// a sentence. For IBPS Clerk it is the single highest-leverage choice a
// candidate makes, because vacancies are allotted state-wise, you may apply to
// only ONE state, and the local-language test binds you to it. That section is
// the differentiation, along with the honest treatment of the Mains conflict.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "IBPS Clerk 2026: 11,403 CSA Vacancies, Apply by 21 August";

const description =
  "IBPS Clerk 2026 is out for 11,403 Customer Service Associate posts across 11 banks. Apply online at ibps.in by 21 August 2026. Prelims 10 and 11 October.";

const content = `Applications for 11,403 Customer Service Associate posts close on 21 August 2026. IBPS opened the window on 1 August, which leaves a short runway, and the single decision that will affect your odds more than any amount of preparation has to be made inside the application form itself: which state you apply to.

This recruitment runs under the code CRP CSA-XVI. If you have been searching for "IBPS Clerk 2026" and finding inconsistent information, that is why.

## The rename from Clerk to Customer Service Associate

IBPS changed the job title for the clerical cadre to Customer Service Associate, and the recruitment is now officially the Common Recruitment Process for Customer Service Associates, abbreviated CRP-CSA. The current cycle is CRP CSA-XVI.

Older material still calls it IBPS Clerk and refers to CRP Clerks XV or earlier. The post is the same, the work is the same, and the pay scale is the same. Only the name changed. When you search for study material or previous year papers, material labelled IBPS Clerk remains valid.

The practical catch is that some sites have not updated and are still describing the previous cycle's vacancy count and dates as though they were current. Check the cycle code and the notification date on anything you read, including this page.

## Key dates

| Event | Date |
|---|---|
| Notification released | 1 August 2026 |
| Application window opens | 1 August 2026 |
| Application last date | 21 August 2026 |
| Prelims exam | 10 and 11 October 2026 |
| Mains exam | 27 December 2026 |
| Provisional allotment | Expected in the following financial year cycle |

The recruitment is for the 2027-28 vacancy year, which is why the gap between application and allotment is long. Candidates sometimes read the year in the notification title and conclude they have applied to the wrong cycle. You have not.

## The state choice that decides your odds

IBPS allots Customer Service Associate vacancies state by state, not as one national pool. You apply for one state or union territory only, and you compete solely against other candidates who chose that same state. You cannot change it after submission.

Two things follow from that, and most candidates underweight both.

The first is that competition varies enormously between states. A state with a large vacancy allocation and a smaller applicant base produces a lower cutoff than a state with few vacancies and heavy applicant volume. Two candidates with identical marks can get opposite results purely on the state they picked. The state-wise vacancy table sits in the annexure of the official notification PDF, and reading it before you submit is the highest-return 20 minutes in this entire process.

The second is the local language requirement. You must be proficient in the official language of the state you apply to, and IBPS verifies this. Candidates who studied the state's official language as a subject at Class 10 or Class 12 generally satisfy it through their marksheet. Everyone else faces a language proficiency test at the provisional allotment stage, and failing it cancels the candidature outright, no matter how well you scored in the Mains.

That combination is what makes the state field a binding commitment rather than a preference. Picking a state with a soft cutoff is worthless if you cannot clear its language test, and picking your home state is worthless if it has 40 vacancies and 90,000 applicants. Weigh both together before you submit, because there is no correction window for this field once the application closes.

## Eligibility

You need a bachelor's degree in any discipline from a recognised university, held on the date you register. A degree expected later in the year does not qualify.

The age band is 20 to 28 years, calculated against the cutoff date stated in the notification. Standard relaxation applies: 5 years for SC and ST candidates, 3 years for OBC in the non-creamy layer, 10 years for candidates with benchmark disabilities in the unreserved category, with further relaxation stacking for reserved categories, and separate provisions for ex-servicemen and for candidates domiciled in Jammu and Kashmir during the notified period.

Computer literacy is a stated requirement. A certificate or diploma in computer operations, or having studied computing as a subject at school or degree level, covers it.

The local language proficiency requirement described above applies to the state you select.

## How to apply

Registration runs at ibps.in and closes on 21 August 2026. The process is a single online form with document uploads and an online fee payment, and there is no offline route.

Register with a working email address and mobile number, because IBPS sends the registration number and password there and every later communication, including the call letter, depends on that login. Keep the credentials somewhere you will still have them in December.

Uploads have to meet a specification: a recent photograph, a signature, a left thumb impression and a handwritten declaration, each within stated dimensions and file sizes. Rejections at this step are common and almost always avoidable. Prepare the four files before you start the form rather than scrambling mid-session.

Application fee is Rs 175 for SC, ST and candidates with disabilities, and Rs 850 for all other categories, paid online. Your application is not complete until the payment succeeds, and an incomplete payment leaves you unregistered even though the form appears filled.

Do not leave this to 21 August. The IBPS portal slows badly on the closing day of every cycle, and payment gateway failures on the final evening are a recurring complaint.

## Prelims exam pattern

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Numerical Ability | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| Total | 100 | 100 | 60 min |

Each section is separately timed at 20 minutes and closes when that time expires. Negative marking is 0.25 marks for each wrong answer.

Prelims is a screening stage. Your marks here decide only whether you sit the Mains, and they do not carry into the final merit list. IBPS calls forward a multiple of the vacancy count in each state, which is another reason the state you chose shapes your experience of the same exam.

Sectional timing means the old habit of banking minutes from English to spend on Numerical Ability does not work. Twenty minutes for 35 numerical questions is roughly 34 seconds each, so selection matters more than speed: identify the questions you can finish quickly and leave the long calculation-heavy ones alone.

## Mains exam pattern and the reported revision

The Mains carries 200 marks across four sections: General and Financial Awareness, General English, Reasoning Ability with Computer Aptitude, and Quantitative Aptitude. Every section is separately timed, sections carry different maximum marks, and negative marking is 0.25 per wrong answer. All of that is consistent across sources.

The question count and duration are not. IBPS is reported to have revised the Mains pattern for this cycle, and the coverage disagrees on what the revision actually is. Some sites state 160 questions across 125 minutes. Others state 155 questions across 120 minutes. The reported section splits also differ, with Reasoning quoted at both 60 and 50 questions and Quantitative Aptitude at both 40 and 50.

We are not going to pick one of those and present it as fact. The official notification PDF at ibps.in is the authority, and it is the document you should open before building a sectional time plan. If a site gives you a confident Mains table with no source, treat it with suspicion, because several confident tables currently contradict each other.

What is safe to plan around: four sections, 200 marks, separate sectional timing, 0.25 negative marking, and roughly two hours in the chair. Build your preparation on the syllabus rather than on a question count that may move.

## There is no interview, and that changes everything

The Customer Service Associate selection has no interview stage. Prelims screens, and the Mains score alone produces the merit list and the provisional allotment.

That single fact should reshape how you allocate effort. In recruitments with an interview, a moderate written score can be recovered later. Here it cannot. Every mark in the Mains on 27 December is a mark in your final ranking, and there is no second instrument that can lift a weak paper.

It also means General and Financial Awareness deserves more respect than candidates usually give it. It is the one section where preparation converts to marks almost linearly, it has no time-pressure problem in the way Quantitative Aptitude does, and in an exam decided entirely on one paper, a section you can reliably bank is worth a great deal. Banking and financial awareness for the six months before the exam is the standard scope, so start collecting now rather than in December.

## Salary and what you take home

The Customer Service Associate pay scale runs from Rs 24,050 to Rs 64,480 in basic pay, with increments at defined stages. Reported in-hand pay at entry is roughly Rs 28,000 to Rs 32,000 per month, varying with the posting city because dearness allowance and house rent allowance sit on top of basic and house rent allowance is banded by city classification.

Beyond the monthly figure, the post carries pension under the National Pension System, medical benefits, leave fare concession, and staff loan rates on housing and vehicle borrowing that are materially below commercial rates. Those loan rates are worth more over a career than the headline salary gap against a private sector alternative, and they are the reason bank clerical posts retain candidates who could earn more elsewhere at entry.

Promotion runs from Customer Service Associate to Officer Scale I through internal written examination, and then upward through the officer grades. Candidates who take the internal promotion route seriously tend to reach officer grade considerably faster than the direct-recruitment competition would allow.

## Participating banks

Eleven public sector banks participate in this cycle. The list has shifted over the years as bank mergers consolidated the sector, so a list you find in older material may name banks that no longer exist as separate entities.

You do not choose a bank. You choose a state, and IBPS allots you to a participating bank in that state based on your merit position and the vacancies each bank has reported there. Candidates who apply expecting to pick their employer are misreading the process.

## How this compares with IBPS PO and SBI Clerk

Candidates preparing for banking exams usually sit more than one, and the three most common are worth putting side by side because the preparation overlaps heavily but the selection design does not.

| | IBPS Clerk (CSA) | IBPS PO | SBI Clerk |
|---|---|---|---|
| Cadre | Clerical | Officer, Scale I | Clerical |
| Interview stage | None | Yes | None |
| Entry basic pay | Rs 24,050 | Higher, officer scale | Comparable to IBPS Clerk |
| Allotment | State-wise, one state | All India | State and circle-wise |
| Employer | 11 participating banks | Participating banks | State Bank of India only |
| Local language | Required for chosen state | Applies at allotment | Required for chosen state |

The syllabus for the written stages is close enough that preparing for one prepares you substantially for the others, so sitting several in the same year is normal and sensible. What differs is the endgame. IBPS PO adds an interview, which means a written score can be recovered or lost late. Both clerical exams end on the written paper, which front-loads all the pressure onto one day.

If you are applying to more than one, note that the exam calendar can collide and that each recruitment charges its own fee. Budget for that rather than being surprised in October.

## Call letters and what to keep

IBPS releases call letters for each stage on its portal, downloadable with the registration number and password you created during the application. They appear roughly one to two weeks before the relevant exam, and they carry the centre address, date, shift and reporting time.

Keep four things until the process ends: your registration number and password, the application form printout, the fee payment receipt, and the photograph you uploaded. You will need the same photograph at the exam centre and again at document verification, and a candidate who arrives with a visibly different photograph creates a problem that takes time to resolve. Save the whole set somewhere you will still be able to reach in December, because this recruitment runs across five months.

## Eight weeks to prelims: a working plan

Prelims is on 10 and 11 October, which is about eight weeks out from the middle of August. That is enough time to build prelims-level speed if you use it on the right things.

Spend the first three weeks on accuracy rather than speed, working through the three prelims sections without a timer and fixing the topics where you are getting things wrong rather than slow. Speed built on a shaky method collapses under sectional timing.

Move to sectionally-timed practice for the next three weeks. Twenty-minute blocks, one section at a time, scored honestly with the 0.25 penalty applied. The goal is to learn what your realistic attempt count is per section, not to maximise attempts.

Use the final two weeks for full mocks under real conditions and for revision of your error log. Do not learn new topics in this window.

Start General and Financial Awareness for the Mains now, in parallel, at a low daily volume. It is the only part of the Mains that rewards early slow accumulation, and leaving it until after prelims results compresses it into an impossible window.

## Mistakes that cost candidates the application

Applying on the closing day. The portal slows and payment gateways fail on 21 August, and there is no extension for a failed transaction.

Choosing a state on sentiment rather than on the vacancy annexure and the language requirement together. This field cannot be corrected and it shapes your cutoff.

Assuming the local language requirement is a formality. It is verified at allotment, and failing it cancels the candidature regardless of your Mains score.

Preparing photograph, signature, thumb impression and declaration files during the form session rather than before it. Specification mismatches cause rejections that surface late.

Treating prelims marks as part of the final score. They are not. The Mains is the entire merit list.

Building a Mains time plan from an aggregator table. Sources currently contradict each other on the revised pattern. Use the notification PDF.

## Frequently asked questions

**What is the last date to apply for IBPS Clerk 2026?**

21 August 2026. Applications opened on 1 August 2026 at ibps.in. There is no offline route and no late window, and the fee payment must complete successfully for the application to count.

**How many vacancies are there in IBPS Clerk 2026?**

11,403 Customer Service Associate vacancies across 11 participating public sector banks, under the recruitment code CRP CSA-XVI. Vacancies are allotted state by state, and the state-wise breakdown is in the annexure of the official notification PDF.

**Why is IBPS Clerk now called Customer Service Associate?**

IBPS renamed the clerical cadre to Customer Service Associate, and the recruitment is officially the Common Recruitment Process for Customer Service Associates, or CRP-CSA. The post, work and pay scale are unchanged. Study material labelled IBPS Clerk is still valid.

**When are the IBPS Clerk 2026 prelims and mains exams?**

Prelims is on 10 and 11 October 2026, and the Mains is on 27 December 2026. Call letters are released on the IBPS portal ahead of each stage and are downloaded using the registration number and password created during the application.

**Can I apply for more than one state?**

No. You may apply for only one state or union territory, and the choice cannot be changed after submission. You compete only against candidates who selected the same state, and you must be proficient in that state's official language.

**Is there an interview in IBPS Clerk 2026?**

No. The selection has no interview stage. Prelims screens candidates for the Mains, and the Mains score alone decides the merit list and provisional allotment. Prelims marks do not count towards the final ranking.

**What is the age limit for IBPS Clerk 2026?**

20 to 28 years, against the cutoff date stated in the notification. Relaxation is 5 years for SC and ST, 3 years for OBC in the non-creamy layer, and 10 years for candidates with benchmark disabilities in the unreserved category, with further provisions for ex-servicemen and other notified categories.

**What is the application fee?**

Rs 175 for SC, ST and candidates with disabilities, and Rs 850 for all other categories, paid online. The application is incomplete until payment succeeds, so confirm the transaction rather than assuming it went through.

**What is the IBPS Clerk salary in 2026?**

The pay scale runs from Rs 24,050 to Rs 64,480 in basic pay. Reported in-hand pay at entry is around Rs 28,000 to Rs 32,000 per month, varying by posting city because house rent allowance is banded by city classification. The post also carries pension under the National Pension System, medical benefits and concessional staff loan rates.

**Has the IBPS Clerk mains pattern changed for 2026?**

IBPS is reported to have revised the Mains pattern, but published sources contradict each other on the detail, quoting both 160 questions across 125 minutes and 155 questions across 120 minutes, with different section splits. What is consistent: four sections, 200 marks, separate sectional timing and 0.25 negative marking. Check the official notification PDF at ibps.in before building a sectional time plan.

**Do I need to know the local language?**

Yes. You must be proficient in the official language of the state you apply to. Candidates who studied that language at Class 10 or Class 12 usually satisfy the requirement through their marksheet. Others face a language proficiency test at the provisional allotment stage, and failing it cancels the candidature.

## Official sources

- Institute of Banking Personnel Selection: https://www.ibps.in
- The CRP CSA-XVI notification PDF, which is the authority on the state-wise vacancy annexure, the Mains pattern and the language requirement
- Participating bank websites for pay scale and service condition detail

Where a figure on this page conflicts with the notification PDF, the PDF is correct. This page was written on 14 August 2026 and IBPS does amend notifications mid-cycle.`;

const fields = {
  vacancies: 11403,
  last_date: "2026-08-21",
  post_name:
    "Customer Service Associate (CSA), formerly designated Clerk, in participating public sector banks under CRP CSA-XVI. Vacancies are allotted state-wise and candidates apply for one state or union territory only.",
  eligibility: {
    education:
      "A bachelor's degree in any discipline from a recognised university, held on the date of registration. A degree expected later in the year does not qualify. Computer literacy is required, satisfied by a certificate or diploma in computer operations or by having studied computing as a subject at school or degree level. Proficiency in the official language of the state or union territory applied for is mandatory: candidates who studied that language at Class 10 or Class 12 generally satisfy it through their marksheet, and others face a language proficiency test at the provisional allotment stage, with failure cancelling the candidature.",
    age: "20 to 28 years against the cutoff date stated in the notification. Relaxation of 5 years for SC and ST, 3 years for OBC in the non-creamy layer, and 10 years for candidates with benchmark disabilities in the unreserved category, with relaxation stacking for reserved categories and separate provisions for ex-servicemen and for candidates domiciled in Jammu and Kashmir during the notified period.",
  },
  salary:
    "Pay scale of Rs 24,050 to Rs 64,480 in basic pay, with increments at defined stages. Reported in-hand pay at entry is around Rs 28,000 to Rs 32,000 per month, varying with the posting city because dearness allowance and house rent allowance sit on top of basic pay and house rent allowance is banded by city classification. The post carries pension under the National Pension System, medical benefits, leave fare concession, and staff loan rates on housing and vehicle borrowing well below commercial rates. Promotion runs from Customer Service Associate to Officer Scale I through an internal written examination and then upward through the officer grades.",
  application_fee:
    "Rs 175 for SC, ST and candidates with disabilities. Rs 850 for all other categories. Paid online only. The application is not complete until the payment succeeds.",
  important_dates: {
    notificationDate: "2026-08-01",
    startDate: "2026-08-01",
    lastDate: "2026-08-21",
    examDate: "Prelims on 10 and 11 October 2026. Mains on 27 December 2026.",
    note: "Recruitment code CRP CSA-XVI, for the 2027-28 vacancy year. The clerical cadre is now designated Customer Service Associate, so older material referring to CRP Clerks XV describes a previous cycle.",
  },
  how_to_apply:
    "Register online at ibps.in between 1 August and 21 August 2026. There is no offline route. Use a working email address and mobile number, because IBPS sends the registration number and password there and every later communication including call letters depends on that login. Prepare four upload files BEFORE starting the form, each within the stated dimensions and file sizes: a recent photograph, a signature, a left thumb impression and a handwritten declaration. Specification mismatches are a common cause of rejection. Select your state or union territory carefully: you may apply for ONE state only, the choice cannot be changed after submission, you compete only against candidates who selected the same state, and you must be proficient in that state's official language. Read the state-wise vacancy annexure in the notification PDF before choosing. Pay the fee online and confirm the transaction succeeded. Do not leave submission to 21 August, since the portal slows and payment gateways fail on the closing day of every cycle.",
  selection_process:
    "**Stage 1: Preliminary examination** on 10 and 11 October 2026. 100 questions, 100 marks, 60 minutes: English Language (30 questions, 30 marks, 20 minutes), Numerical Ability (35 questions, 35 marks, 20 minutes) and Reasoning Ability (35 questions, 35 marks, 20 minutes). Each section is separately timed and closes when its 20 minutes expire. Negative marking of 0.25 marks per wrong answer. Prelims is a SCREENING stage only and its marks do NOT count towards the final merit list. IBPS calls forward a multiple of the vacancy count in each state, so the shortlisting threshold varies by state.\n\n**Stage 2: Main examination** on 27 December 2026. 200 marks across four sections: General and Financial Awareness, General English, Reasoning Ability with Computer Aptitude, and Quantitative Aptitude. Every section is separately timed, sections carry different maximum marks, and negative marking is 0.25 per wrong answer. NOTE: IBPS is reported to have revised the Mains pattern for this cycle and published sources contradict each other on the question count and duration, quoting both 160 questions across 125 minutes and 155 questions across 120 minutes with differing section splits. Confirm against the official notification PDF rather than an aggregator table. The Mains score ALONE decides the merit list.\n\n**There is no interview stage.** This is the defining feature of the selection. A moderate Mains score cannot be recovered later, so every mark on 27 December is a mark in the final ranking.\n\n**Stage 3: Language proficiency test** Applies to candidates who cannot evidence proficiency in the official language of their chosen state through a Class 10 or Class 12 marksheet. Conducted at the provisional allotment stage. Failure cancels the candidature regardless of Mains performance.\n\n**Stage 4: Provisional allotment** Candidates are allotted to a participating bank within their chosen state based on merit position and the vacancies each bank reported in that state. Candidates do not choose their bank.",
  reading_time: "13 min read",
};

await replaceJob({ slug: "ibps-clerk-2026", title, description, content, fields });
