// IBPS PO 2026 — thin-page fix + URGENT data correction
//
// Verified 2026-08-14.
//
// WHY URGENT
// The live page advertised an application window that is both wrong and still
// open, eight days before the prelims:
//   vacancies   4500              ACTUAL revised count, 7,365 or 7,565 (see below)
//   last_date   2026-09-30        ACTUAL applications closed 26 July 2026
//   startDate   2026-08-01        ACTUAL window opened 1 July 2026
//   framing     "apply now"       ACTUAL prelims on 22-23 Aug 2026, mains 4 Oct
// A candidate reading our page would believe they had six more weeks to apply
// for a recruitment whose prelims is next week.
//
// FACTS VERIFIED (IBPS notification dated 30 Jun 2026; corroborated across
// Testbook, CareerPower, Adda247, PW, Practicemock, Mahendras on 2026-08-14):
//   - CRP PO/MT-XVI, Probationary Officer / Management Trainee
//   - Notification 30 June 2026
//   - Applications 1 July to 21 July 2026, extended to 26 July 2026 (CLOSED)
//   - Prelims 22 and 23 August 2026
//   - Mains 4 October 2026
//
// SOURCE CONFLICT LEFT UNRESOLVED (deliberately):
//   The revised vacancy count. Testbook, CareerPower and Adda247 report 7,565
//   as the revised figure; PW reports 7,365. Both are described as post-revision
//   numbers, so this is not a stale-vs-current difference. The numeric column is
//   cleared and the prose states the conflict, rather than picking one. The
//   previous value (4500) matched neither and appears to have been an estimate.
//
// NOT ASSERTED: participating bank list count (varies by cycle after mergers),
// state-wise split (IBPS PO is all-India unlike Clerk), and cutoffs.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "IBPS PO 2026 Prelims: 22 and 23 August, Mains 4 October";

const description =
  "IBPS PO 2026 prelims is on 22 and 23 August, mains on 4 October. Applications closed 26 July. Check call letter, exam pattern and the interview stage."; 

const content = `The IBPS Probationary Officer prelims is on 22 and 23 August 2026, and the mains follows on 4 October. Applications for CRP PO/MT-XVI opened on 1 July and closed on 26 July 2026 after an extension from the original 21 July deadline.

If you applied, your call letter is the immediate concern and the paper is days away. If you did not, this cycle is closed and the next notification is usually issued around the middle of next year.

## Where this recruitment stands

| Stage | Date |
|---|---|
| Notification | 30 June 2026 |
| Application window | 1 July to 26 July 2026, closed |
| Prelims | 22 and 23 August 2026 |
| Mains | 4 October 2026 |
| Interview | After the mains result |
| Provisional allotment | Following the interview stage |

The gap between prelims and mains is roughly six weeks. That is the window most candidates plan badly, and how to use it is covered below.

## How many vacancies, and why sources disagree

IBPS revised the vacancy count upward after the notification, and published figures now contradict each other. Several outlets report the revised total as 7,565. At least one reports 7,365. Both describe their figure as the post-revision number, so this is not a case of one source being out of date.

We are not going to pick one and present it as fact. The authority is IBPS at ibps.in, and the revised figure appears in the corrigendum rather than in the original notification PDF.

What is not in dispute is the scale. This is a recruitment of well over seven thousand officer-grade posts, which makes it one of the largest single officer intakes in Indian banking, and considerably larger than the previous cycle.

If you saw a figure of 4,500 on this page previously, that was wrong and has been removed.

## Call letter and the eight days before prelims

IBPS releases the prelims call letter on its portal, downloaded with the registration number and password created during the application. It carries the centre address, date, shift and reporting time.

Download it now if you have not. With the exam on 22 and 23 August, there is no margin left for a login problem or a printing failure, and portal load rises sharply in the final days.

Check the shift on your call letter carefully. IBPS runs multiple shifts per day across both dates, and candidates have arrived for the wrong session.

Carry the printed call letter, one original photo identity document and the photocopy IBPS specifies in its instructions. Aadhaar, voter ID, PAN card, passport and driving licence are the usual accepted forms. Reporting time is well ahead of the exam start and gates close before the paper begins.

For the remaining days, do not learn new topics. Sit two or three full mocks under real conditions, revise your error log, and protect your sleep schedule for the shift you have been allotted. Cramming new material in the final week reliably costs more in accuracy than it adds in coverage.

## Prelims exam pattern

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 min |
| Quantitative Aptitude | 35 | 35 | 20 min |
| Reasoning Ability | 35 | 35 | 20 min |
| Total | 100 | 100 | 60 min |

Each section is separately timed at 20 minutes and closes when that time expires. Negative marking is 0.25 marks per wrong answer.

Prelims is a screening stage. Its marks do not carry into the final merit list. IBPS calls forward a multiple of the vacancy count for the mains, so clearing prelims comfortably is the only objective. Marks above the cutoff are worth nothing.

Twenty minutes for 35 quantitative questions is roughly 34 seconds each, which means selection matters more than raw speed. Identify the questions you can finish quickly, complete them, and leave the long calculation-heavy ones untouched rather than half-solved. With 0.25 negative marking, a blank costs nothing and a low-confidence guess costs a quarter mark.

## Mains on 4 October and where the result is decided

The mains is the stage that determines your rank, alongside the interview.

It covers Reasoning and Computer Aptitude, General, Economy and Banking Awareness, English Language and Data Analysis and Interpretation, and it includes a descriptive English paper testing letter and essay writing, which is evaluated separately from the objective sections.

The descriptive paper is the part candidates most often neglect, on the reasoning that it carries fewer marks than the objective sections. That reasoning is wrong in a competitive field, because the descriptive paper is where a prepared candidate can separate themselves cheaply. Letter and essay formats are predictable, and practising a handful of each in timed conditions is a small investment against a stage most people walk into cold.

Banking and economy awareness deserves the bulk of your six weeks. It converts preparation into marks more directly than any other section, it has no time-pressure problem, and the scope is the six months of banking and financial news preceding the exam. Start compiling now rather than in the final fortnight.

## The interview stage, and why IBPS PO differs from IBPS Clerk

IBPS PO includes an interview. IBPS Clerk does not, and that single difference changes the shape of the whole recruitment.

The interview is conducted by participating banks in coordination with IBPS and nodal banks. Final merit combines the mains score and the interview score in a defined ratio, with the mains carrying the larger weight. A candidate with a moderate mains performance can recover ground at interview, and a strong written candidate can lose it there.

Because of that, the mains result is not the end of the process in the way the clerical mains is. Candidates who clear the mains and then wait passively for the interview date lose an opportunity, since interview preparation covering banking awareness, current affairs, your own academic and work background, and basic composure under questioning is entirely learnable.

## Eligibility

A bachelor's degree in any discipline from a recognised university, held on the date specified in the notification. A degree expected later does not qualify.

The age band is 20 to 30 years against the cutoff date in the notification, with relaxation of 5 years for SC and ST, 3 years for OBC in the non-creamy layer, and 10 years for candidates with benchmark disabilities in the unreserved category, plus provisions for ex-servicemen and other notified categories.

Computer literacy is required, satisfied by a certificate or diploma in computer operations or by having studied computing as a subject at school or degree level.

Unlike IBPS Clerk, there is no single-state application restriction and no local language requirement binding you to one state. IBPS PO is an all-India recruitment, and you may be allotted to a participating bank anywhere in the country. Candidates who want to remain in a specific state should understand that IBPS PO does not offer that, and IBPS Clerk does.

## Salary and career progression

A Probationary Officer joins in Junior Management Grade Scale I, the entry officer grade in public sector banking. Basic pay at entry sits well above the clerical scale, and gross monthly pay is considerably higher once dearness allowance, house rent allowance, city compensatory allowance and other benefits are added. House rent allowance is banded by city classification, so the same post pays noticeably more in a metro.

Beyond pay, the post carries pension under the National Pension System, medical benefits, leave fare concession, and staff loan rates on housing and vehicle borrowing well below commercial rates. Those loan terms are worth a substantial amount across a career and are routinely underweighted when candidates compare a banking offer against a private sector alternative.

Progression runs from Scale I through Scale II and Scale III into senior and top management grades. A Probationary Officer who performs well and clears internal promotion processes reaches Scale II considerably faster than a clerical entrant reaching officer grade, which is the structural reason IBPS PO attracts heavier competition than IBPS Clerk despite the harder selection.

The probation period involves rotation across branch functions, and postings in the early years are frequently rural or semi-urban. Candidates expecting a metro posting from year one are usually disappointed.

## How IBPS PO compares with IBPS Clerk and SBI PO

| | IBPS PO | IBPS Clerk | SBI PO |
|---|---|---|---|
| Cadre | Officer, Scale I | Clerical | Officer |
| Interview | Yes | None | Yes, with group exercise |
| Allotment | All India | One state, binding | All India |
| Local language | Not binding | Required for chosen state | Applies at allotment |
| Employer | Participating banks | Participating banks | State Bank of India only |
| Descriptive paper | Yes, in mains | No | Yes |

The written syllabus across all three overlaps heavily, so preparing for one prepares you substantially for the others, and sitting several in a year is normal. What differs is the endgame and the geography. IBPS Clerk binds you to one state and ends on the written paper. IBPS PO and SBI PO are all-India and add an interview.

If your priority is remaining in a particular state, IBPS Clerk is the exam that offers it. If your priority is officer grade and faster progression, IBPS PO is the larger opportunity, and this cycle is an unusually large one.

## Participating banks and how allotment works

IBPS conducts the common recruitment process on behalf of participating public sector banks. The list has changed across cycles as bank mergers consolidated the sector, so a list you find in older material may name banks that no longer exist independently.

You do not apply to a bank. You apply to the common process, and allotment to a specific bank happens after the interview stage based on your merit position, your preferences and the vacancies each bank has reported. Candidates who join expecting to have chosen their employer have misread the process.

Because this is an all-India recruitment, geographic allotment follows the bank's own posting policy rather than a state you selected. Early postings are frequently rural or semi-urban regardless of where you sat the exam, and the probation period involves rotation across branch functions to build a working knowledge of operations.

## Normalisation and the scores you will see

IBPS normalises scores across shifts, because prelims runs in multiple sessions of differing difficulty and the mains is conducted at scale. Normalisation adjusts raw marks so a candidate who sat a harder shift is not disadvantaged.

The practical consequence is that the score you calculate from a memory-based answer key will rarely match your published score, and comparing your raw performance against a friend who sat a different shift tells you very little. Candidates spend a great deal of energy on this comparison every cycle and it produces no useful information.

What is worth checking when scorecards are released is whether your recorded responses match what you remember marking. That is a discrepancy worth raising through the proper channel. A difference between your estimate and your normalised score is not.

## Mistakes that cost candidates this exam

Waiting for the prelims result before starting mains preparation. The gap is roughly six weeks and the result consumes part of it, so candidates who wait are effectively preparing for the deciding stage in a month.

Skipping the descriptive paper. It is the cheapest differentiation available in the mains because the formats are predictable and most candidates arrive unprepared.

Treating banking awareness as a final-fortnight subject. The scope is six months of banking and financial news, which cannot be compressed, and it is the section where preparation converts most reliably into marks.

Guessing to fill blanks in the prelims. With 0.25 negative marking, an unattempted question is strictly better than a low-confidence guess, and sectional timing means a rushed final thirty seconds is where those guesses cluster.

Downloading the call letter at the last moment. Portal load rises before the exam and a login or printing problem days before the paper is a solvable issue that becomes unsolvable on the morning.

Assuming the interview is a formality. It carries real weight in the final merit and it is entirely learnable, yet candidates routinely prepare for it only after the mains result arrives.

## Frequently asked questions

**Can I still apply for IBPS PO 2026?**

No. Applications for CRP PO/MT-XVI ran from 1 July 2026 and closed on 26 July 2026, after an extension from the original 21 July deadline. There is no late window. The prelims is on 22 and 23 August 2026 and the next cycle is usually notified around the middle of next year.

**When is the IBPS PO 2026 exam?**

Prelims on 22 and 23 August 2026, and mains on 4 October 2026. The interview follows the mains result. Call letters are released on the IBPS portal and downloaded with the registration number and password created during the application.

**How many vacancies are there in IBPS PO 2026?**

IBPS revised the count upward after the notification and published sources now disagree, reporting the revised total as either 7,565 or 7,365. Both are described as post-revision figures, so check ibps.in and the corrigendum rather than relying on an aggregator. The scale is not in dispute: this is a recruitment of well over seven thousand officer posts.

**Do prelims marks count towards the final IBPS PO merit list?**

No. Prelims is a screening stage only. The final merit combines the mains score and the interview score in a defined ratio, with the mains carrying the larger weight. Marks earned in the prelims above the cutoff have no further value.

**Is there an interview in IBPS PO?**

Yes, and this is the main structural difference from IBPS Clerk, which has none. The interview is conducted by participating banks in coordination with IBPS and nodal banks, and it can move your final position materially in either direction.

**What is the IBPS PO prelims exam pattern?**

100 questions for 100 marks in 60 minutes: English Language (30 questions, 20 minutes), Quantitative Aptitude (35 questions, 20 minutes) and Reasoning Ability (35 questions, 20 minutes). Each section is separately timed and closes when its 20 minutes expire. Negative marking is 0.25 marks per wrong answer.

**Is there a descriptive paper in IBPS PO mains?**

Yes. The mains includes a descriptive English paper testing letter and essay writing, evaluated separately from the objective sections. Candidates neglect it because it carries fewer marks, which is a mistake in a competitive field since the formats are predictable and few people prepare for it.

**What is the age limit for IBPS PO 2026?**

20 to 30 years against the cutoff date in the notification, with relaxation of 5 years for SC and ST, 3 years for OBC in the non-creamy layer, and 10 years for candidates with benchmark disabilities in the unreserved category.

**Can I choose which state I am posted in?**

No. IBPS PO is an all-India recruitment with no single-state application restriction and no binding local language requirement, so you may be allotted to a participating bank anywhere in the country. Candidates who need to remain in a specific state should look at IBPS Clerk, which allocates state-wise.

**How should I use the six weeks between prelims and mains?**

Put the bulk of it into banking and economy awareness, which converts preparation into marks more directly than any other section and has no time-pressure problem. Practise a handful of letters and essays under timed conditions for the descriptive paper. Do not wait for the prelims result to start, because six weeks is already tight and the result consumes part of it.

**What is the application fee for IBPS PO?**

The fee is set in the notification and is lower for SC, ST and candidates with disabilities than for other categories, paid online only. Since the window closed on 26 July 2026, this matters only for planning a future cycle, and the figure is restated in each notification rather than fixed permanently.

**How many attempts do I get at IBPS PO?**

There is no cap on the number of attempts. Eligibility is governed by the age limit rather than an attempt limit, so you may sit the exam in every cycle for which you fall inside the 20 to 30 band, with the applicable relaxation for your category.

**Is IBPS PO harder than IBPS Clerk?**

The selection is longer and the competition heavier, because the post is officer grade with faster progression and the interview adds a stage that clerical recruitment does not have. The written syllabus areas are similar, but the depth expected in the mains and the presence of a descriptive paper make the overall process more demanding.

**When will the IBPS PO 2026 result be declared?**

IBPS publishes the prelims result after the exam concludes, followed by the mains result and then the final result after the interview stage. IBPS had not announced result dates for this cycle as of 14 August 2026, and they are published on ibps.in rather than announced in advance.

## Official sources

- Institute of Banking Personnel Selection: https://www.ibps.in
- The CRP PO/MT-XVI notification PDF and the vacancy corrigendum, which is the authority on the revised count
- Participating bank websites for pay scale and service condition detail

Where a figure on this page conflicts with IBPS, IBPS is correct. This page was written on 14 August 2026, and the vacancy count in particular is disputed between published sources. IBPS also issues corrigenda mid-cycle that amend dates, vacancy counts and occasionally eligibility wording, and those amendments are published on the IBPS site without a separate announcement. Check the portal directly for anything that determines whether you sit the exam or which stage you are at, rather than relying on an aggregator summary, this page included.`;

const fields = {
  vacancies: null,
  last_date: "2026-07-26",
  post_name:
    "Probationary Officer / Management Trainee in Junior Management Grade Scale I at participating public sector banks, under CRP PO/MT-XVI. All-India recruitment with no single-state restriction. IBPS revised the vacancy count upward after the notification and published sources disagree, reporting either 7,565 or 7,365 as the revised total: check the corrigendum at ibps.in.",
  eligibility: {
    education:
      "A bachelor's degree in any discipline from a recognised university, held on the date specified in the notification. A degree expected later does not qualify. Computer literacy is required, satisfied by a certificate or diploma in computer operations or by having studied computing as a subject at school or degree level. UNLIKE IBPS Clerk, there is no single-state application restriction and no binding local language requirement.",
    age: "20 to 30 years against the cutoff date stated in the notification, with relaxation of 5 years for SC and ST, 3 years for OBC in the non-creamy layer, and 10 years for candidates with benchmark disabilities in the unreserved category, plus provisions for ex-servicemen and other notified categories.",
  },
  salary:
    "A Probationary Officer joins in Junior Management Grade Scale I, the entry officer grade in public sector banking. Basic pay at entry sits well above the clerical scale, and gross monthly pay is considerably higher once dearness allowance, house rent allowance, city compensatory allowance and other benefits are added. House rent allowance is banded by city classification, so the same post pays noticeably more in a metro than in a smaller town. The post carries pension under the National Pension System, medical benefits, leave fare concession, and staff loan rates on housing and vehicle borrowing well below commercial rates, which are worth a substantial amount across a career and are routinely underweighted when comparing against a private sector offer. Progression runs from Scale I through Scale II and Scale III into senior and top management grades, and a Probationary Officer reaches Scale II considerably faster than a clerical entrant reaches officer grade. The probation period involves rotation across branch functions, and early postings are frequently rural or semi-urban.",
  important_dates: {
    notificationDate: "2026-06-30",
    startDate: "2026-07-01",
    lastDate: "2026-07-26",
    examDate: "Prelims on 22 and 23 August 2026. Mains on 4 October 2026. Interview after the mains result.",
    note: "The application window was extended from the original 21 July deadline to 26 July 2026 and is now closed. Call letters are released on the IBPS portal and downloaded with the registration number and password created during the application.",
  },
  how_to_apply:
    "Applications for IBPS PO 2026 (CRP PO/MT-XVI) ran from 1 July to 26 July 2026, after an extension from the original 21 July deadline, and the window is closed. There is no late route. Candidates who applied should sign in at ibps.in with the registration number and password created during the application to download the prelims call letter for the 22 and 23 August exam, and should do so immediately rather than in the final days, since portal load rises sharply before the exam. Check the shift on the call letter carefully, because IBPS runs multiple shifts per day across both dates and candidates have arrived for the wrong session. For a future cycle: register on the IBPS portal, wait for the CRP PO/MT notification (usually issued around the middle of the year), apply within the window, prepare the photograph, signature, thumb impression and handwritten declaration uploads before starting the form, pay the fee online and confirm the transaction succeeded.",
  selection_process:
    "**Stage 1: Preliminary examination** on 22 and 23 August 2026. 100 questions, 100 marks, 60 minutes: English Language (30 questions, 30 marks, 20 minutes), Quantitative Aptitude (35 questions, 35 marks, 20 minutes) and Reasoning Ability (35 questions, 35 marks, 20 minutes). Each section is separately timed and closes when its 20 minutes expire. Negative marking of 0.25 marks per wrong answer. Prelims is a SCREENING stage and its marks do NOT carry into the final merit list. IBPS calls forward a multiple of the vacancy count, so clearing comfortably is the only objective and marks above the cutoff have no value.\n\n**Stage 2: Main examination** on 4 October 2026. Covers Reasoning and Computer Aptitude, General, Economy and Banking Awareness, English Language, and Data Analysis and Interpretation. Includes a DESCRIPTIVE English paper testing letter and essay writing, evaluated separately from the objective sections. Candidates neglect the descriptive paper because it carries fewer marks, which is a mistake in a competitive field since the formats are predictable and few people prepare for it.\n\n**Stage 3: Interview** Conducted by participating banks in coordination with IBPS and nodal banks, after the mains result. This is the main structural difference from IBPS Clerk, which has no interview.\n\n**Final merit** combines the mains score and the interview score in a defined ratio, with the mains carrying the larger weight. A moderate mains performance can be recovered at interview and a strong written performance can be lost there, so the mains result is not the end of the process.\n\n**Provisional allotment** follows the interview stage. IBPS PO is an ALL-INDIA recruitment, so candidates may be allotted to a participating bank anywhere in the country. Candidates who need to remain in a specific state should consider IBPS Clerk, which allocates state-wise.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "ibps-po-2026", title, description, content, fields });
