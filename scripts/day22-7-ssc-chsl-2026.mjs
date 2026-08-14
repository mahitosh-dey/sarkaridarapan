// SSC CHSL 2026 — thin-page fix + intent repositioning
//
// Verified 2026-08-14.
//
// WHY REWRITTEN
// Same defect pattern as ssc-cgl-2026: the page was framed as a notification
// announcement ("SSC CHSL 2026 Notification: ...") even though the notification
// was released 30 April 2026, applications closed 31 May 2026, and the Tier 1
// CBT is being conducted RIGHT NOW across July to September 2026. Repositioned
// to the exam phase. The old page also carried em dashes in three headings
// ("Tier 1 - Online", "Syllabus - What to Focus On") violating the humanizer
// dash rule, and Title Case headings violating the sentence-case rule.
//
// FACTS VERIFIED (SSC notification dated 30 Apr 2026; corroborated across
// Adda247, Testbook, Mahendras, AspirantMitraa on 2026-08-14):
//   - Notification released 30 April 2026
//   - Applications closed 31 May 2026
//   - Tier 1 Computer Based Examination July to September 2026 (in progress)
//   - Posts: Lower Division Clerk / Junior Secretariat Assistant, Data Entry
//     Operator, Postal Assistant / Sorting Assistant
//   - Eligibility: 12th pass, age 18 to 27
//   - Tier 1: 100 questions, 200 marks, four sections of 25 questions / 50 marks
//   - Applications via SSC One Time Registration at ssc.gov.in
//
// VACANCY COUNT DELIBERATELY NOT ASSERTED AS A HARD NUMBER
//   The previous row carried vacancies=3500. No source supports that figure.
//   Coverage says "around 3,000+" and separately "expected 4,000 to 6,000 based
//   on previous years", which is an estimate, not an announcement. SSC finalises
//   CHSL vacancies later in the cycle after departments confirm. The numeric
//   column is therefore cleared and the prose states the sourced position
//   ("over 3,000, not yet finalised") rather than inventing precision. This is
//   the same fabrication class fixed on BHEL/SEBI/LIC AAO the same day.
//
// NOT ASSERTED: shift-level Tier 1 dates (SSC publishes per-batch), Tier 2
// date, and cutoffs for this cycle.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "SSC CHSL 2026 Tier 1: Exam Dates, Admit Card, LDC and DEO";

const description =
  "SSC CHSL 2026 Tier 1 is running from July to September 2026. Check admit card timing, exam pattern, typing test rules and the LDC, DEO and Postal posts.";

const content = `The Staff Selection Commission released the Combined Higher Secondary Level notification on 30 April 2026, applications closed on 31 May, and the Tier 1 computer based examination is being conducted across July to September 2026. If you applied, the paper is either behind you or a few weeks ahead.

This is a 12th-pass recruitment into clerical and data entry posts across central government departments, and it is one of the largest entry points into government service for candidates who have not completed a degree.

## Where this recruitment stands

| Stage | Status as of August 2026 |
|---|---|
| Notification | Released 30 April 2026 |
| Application window | Closed 31 May 2026 |
| Tier 1 exam | Running, July to September 2026 |
| Tier 1 admit card | Released a few days before your batch |
| Tier 1 answer key | After Tier 1 concludes |
| Tier 2 exam | Not yet announced |

SSC conducts Tier 1 in multiple shifts spread over weeks rather than on one national date. Your exam date depends on the batch you are assigned, so two candidates who applied the same day can sit the paper a month apart. The admit card is the only document that states your date, shift and centre.

## How many vacancies there actually are

SSC has indicated over 3,000 vacancies for this cycle, and the final count is not settled.

That vagueness is genuine rather than evasive. SSC announces a tentative figure at notification and finalises it later once participating departments confirm their requirements, and CHSL counts have moved substantially in both directions in past cycles. Sites quoting a precise number today are either repeating the tentative figure or estimating from previous years.

Treat any exact figure you see with caution, including any you may have seen on this page previously. The number that matters is the one SSC publishes at the vacancy-detail stage.

## The posts and what the work involves

Three post groups sit under CHSL, and the work differs more than candidates expect.

Lower Division Clerk, also designated Junior Secretariat Assistant, is general clerical work in ministries, departments and subordinate offices: file handling, correspondence, data maintenance and office administration. This is the largest group and the most common outcome.

Data Entry Operator is exactly what the name says, with the volume and accuracy expectations that follow. DEO posts carry a higher typing requirement than clerical posts and in some departments sit at a higher pay level than LDC, which is why they attract candidates who can type quickly.

Postal Assistant and Sorting Assistant work in the Department of Posts, handling counter operations, mail processing and sorting. The working environment differs from a ministry desk job, and postings follow the postal circle structure rather than the central secretariat.

Your post allocation follows from your merit rank applied against the preference order you submitted, so the preferences you entered during the application are already shaping where you can land.

## Tier 1 exam pattern

| Section | Questions | Marks |
|---|---|---|
| English Language | 25 | 50 |
| General Intelligence | 25 | 50 |
| Quantitative Aptitude | 25 | 50 |
| General Awareness | 25 | 50 |
| Total | 100 | 200 |

The paper is objective multiple choice, delivered as a computer based test, with 60 minutes total. Each question carries 2 marks and there is negative marking of 0.50 marks for each wrong answer.

Candidates entitled to scribe provisions receive compensatory time, which appears on the admit card if it was claimed in the application.

Tier 1 screens the field. Confirm the sectional timing arrangement for your batch in the admit card instructions rather than assuming it from another SSC exam, because the Commission has applied sectional limits in some recruitments and a single pooled timer in others.

## Admit card and exam day

The city intimation slip comes first and tells you only which city you have been allotted. It exists so candidates assigned a distant centre can arrange travel. The admit card follows and carries the centre address, date, shift and reporting time.

Both are downloaded by signing in to your candidate account at ssc.gov.in. Regional SSC websites also mirror admit card links for their own candidates.

Download it the day it appears rather than the night before. Server load rises near the exam date and a printing problem is easier to solve with days in hand.

Check your name and photograph against your identity document, the centre address, the reporting time and the shift. Reporting time is well ahead of the exam start, and the gate closes before the paper begins with no admission afterwards on any grounds.

Carry the printed admit card and one original photo identity document. Aadhaar, voter ID, PAN card, passport and driving licence are the usual accepted forms. Photocopies are not accepted and a photo on a phone is not accepted.

Leave every electronic device behind, including smart watches and fitness bands. Carrying a prohibited item into the hall can end in debarment from SSC examinations, a penalty far larger than losing one paper.

## Tier 2 and the typing test that decides more than people think

Tier 2 combines a computer based examination with a skill test, and the skill test is where a large number of otherwise successful candidates lose the post.

For Data Entry Operator posts the requirement is a data entry speed measured in key depressions per hour, tested on a passage under timed conditions. For Lower Division Clerk, Junior Secretariat Assistant and Postal Assistant posts the requirement is a typing test in English or Hindi at a specified words per minute.

The skill test is qualifying. It adds nothing to your merit score. Failing it removes you from consideration for the posts that require it regardless of how well you performed in the written stages.

That combination, high stakes and zero marks, is exactly why candidates neglect it. Typing speed is a motor skill that takes weeks of daily practice to build and cannot be improvised in the fortnight after a result. If you are reading this before your Tier 1 result, start typing practice now. Fifteen minutes a day from August is worth more than four hours a day in December.

Practise on a standard keyboard layout with the passage format the test actually uses, and practise accuracy before speed, because errors are penalised and a fast typist with poor accuracy fails.

Hindi typing candidates should confirm which keyboard layout applies, since the choice between Krutidev and Mangal font conventions affects how you should practise, and this is specified in the notification rather than left to the candidate on the day.

## Eligibility

The academic requirement is a pass in Class 12 or an equivalent examination from a recognised board or university.

Data Entry Operator posts in some departments carry an additional requirement of Mathematics as a subject at Class 12 in the Science stream, which is a condition candidates miss when selecting preferences. Check the post-specific requirement in the notification against your marksheet.

The age band is 18 to 27 years, calculated against the cutoff date stated in the notification. Relaxation follows the standard pattern: 5 years for SC and ST, 3 years for OBC in the non-creamy layer, 10 years for candidates with benchmark disabilities in the unreserved category, with stacking for reserved categories and separate provisions for ex-servicemen.

## Salary

CHSL posts sit at Pay Level 2 and Pay Level 4 on the 7th Pay Commission matrix depending on the post.

Lower Division Clerk and Junior Secretariat Assistant are at Pay Level 2, with an entry basic pay of Rs 19,900. Postal Assistant and Sorting Assistant, and Data Entry Operator in several departments, sit at Pay Level 4 with an entry basic pay of Rs 25,500. Some Data Entry Operator posts sit higher still depending on the department.

Gross monthly pay is meaningfully above basic once dearness allowance, house rent allowance and transport allowance are added. House rent allowance is banded by city classification, so the same post pays noticeably more in Delhi or Mumbai than in a smaller town, which is worth weighing when you consider a posting.

The posts carry pension under the National Pension System, medical benefits under the central government health scheme where available, and leave entitlements on the central government pattern.

Promotion from LDC runs through Upper Division Clerk and onward through the ministerial grades, and departmental examinations can accelerate that route. Candidates who treat CHSL as a permanent ceiling underestimate the internal progression available to those who sit departmental exams.

## What to do between now and your exam

If your Tier 1 is still ahead, the highest-return work is General Awareness and accuracy in Quantitative Aptitude. General Awareness converts preparation into marks more directly than any other section, and it has no time pressure problem. Quantitative Aptitude at CHSL level rewards arithmetic fluency rather than advanced technique.

Sit full mocks under real conditions with the 0.50 penalty applied honestly. The purpose is to learn your realistic attempt count, not to maximise attempts. With negative marking, an unattempted question costs nothing and a low-confidence guess costs half a mark.

If your Tier 1 is behind you, do not wait for the result before starting typing practice. That is the single most common avoidable failure in this recruitment.

## How CHSL compares with CGL and MTS

SSC runs three large recruitments that candidates often confuse, and the difference is the qualification gate rather than the difficulty.

| | SSC MTS | SSC CHSL | SSC CGL |
|---|---|---|---|
| Qualification | Class 10 | Class 12 | Bachelor's degree |
| Typical entry pay level | Level 1 | Level 2 to 4 | Level 4 to 8 |
| Posts | Multi Tasking Staff, Havaldar | LDC, JSA, DEO, Postal Assistant | ASO, Inspector, AAO, JSO and others |
| Skill test | Generally none | Typing or data entry, qualifying | DEST, qualifying |
| Stages | Tier 1, then PET for Havaldar | Tier 1, Tier 2 with skill test | Tier 1, Tier 2 |

The syllabus areas overlap heavily across all three: English, reasoning, quantitative aptitude and general awareness appear in each, at different depths. A candidate preparing for CHSL is substantially prepared for MTS and partly prepared for CGL, which is why sitting more than one in the same year is normal.

The practical advice is to sit every one you are eligible for. The preparation is shared, the exam calendars rarely collide badly, and the cost of an additional application is small against the chance of a posting. Candidates who hold out for CGL alone because the pay level is higher often spend several years doing it.

If you are a graduate reading this, you are eligible for all three, and CHSL is worth applying to as a floor rather than treating it as beneath your qualification.

## Answer key, objections and normalisation

After Tier 1 concludes SSC releases a provisional answer key alongside your response sheet, with a short window to raise objections against specific questions. There is a per-question fee that is refunded when an objection is upheld.

Take this seriously. SSC does drop or revise questions where objections are valid, and in an exam separated by fractions of a mark, one dropped question moves thousands of ranks.

Tier 1 scores are normalised because the exam runs across multiple shifts of differing difficulty. Normalisation adjusts raw marks so a candidate who sat a harder shift is not penalised for it. This is why the score you calculate from the answer key rarely matches your published score, and why comparing your raw marks against a friend who sat a different shift tells you almost nothing.

Do not panic when the published score differs from your own calculation. Do check that your response sheet matches what you remember marking, because that is the one discrepancy worth raising.

## Mistakes that cost candidates the post

Neglecting typing practice until after the Tier 1 result. This is the single largest avoidable loss in CHSL. The skill test carries no marks, so candidates rank it last, and then discover that speed cannot be built in a fortnight.

Guessing to fill blanks. With 0.50 negative marking, an unattempted question is strictly better than a low-confidence guess.

Selecting Data Entry Operator preferences without checking the Mathematics requirement. Some DEO posts require Mathematics at Class 12 in the Science stream, and the mismatch surfaces at document verification rather than at application.

Submitting a careless preference order. Allocation follows merit rank strictly down your list, and it cannot be revised afterwards.

Assuming sectional timing from another SSC exam. The arrangement is stated in your admit card instructions and the Commission has not applied it uniformly across recruitments.

Reaching the centre at exam time rather than reporting time. Gates close early and close permanently.

## Frequently asked questions

**Can I still apply for SSC CHSL 2026?**

No. The notification was released on 30 April 2026 and applications closed on 31 May 2026. There is no late window. The next opportunity is the following CHSL cycle, usually notified in the first half of the year.

**When is the SSC CHSL 2026 Tier 1 exam?**

Tier 1 is being conducted across July to September 2026 in multiple shifts. Because SSC runs it in staggered batches rather than on a single national date, your exam date depends on your allotted batch and appears only on your admit card.

**How many vacancies are there in SSC CHSL 2026?**

SSC has indicated over 3,000 vacancies, and the final count is not settled. SSC announces a tentative figure at notification and confirms it later once departments finalise requirements, and CHSL counts have moved substantially in past cycles. Precise figures circulating on aggregator sites are estimates rather than announcements.

**When will the SSC CHSL 2026 admit card be released?**

A few days before your allotted batch, downloadable from your candidate login at ssc.gov.in. The city intimation slip is released first and tells you only your allotted city, without the centre address or shift timing.

**What is the SSC CHSL Tier 1 exam pattern?**

100 objective questions for 200 marks in 60 minutes, across four sections of 25 questions each: English Language, General Intelligence, Quantitative Aptitude and General Awareness. Each question carries 2 marks and negative marking is 0.50 marks per wrong answer.

**What qualification do I need for SSC CHSL?**

A pass in Class 12 or an equivalent examination from a recognised board. Some Data Entry Operator posts additionally require Mathematics as a subject at Class 12 in the Science stream, so check the post-specific requirement against your marksheet before relying on a general eligibility summary.

**Is the typing test compulsory in SSC CHSL?**

Yes, for the posts that require it. Data Entry Operator posts are tested on data entry speed in key depressions per hour, while LDC, JSA and Postal Assistant posts are tested on typing speed in English or Hindi. The skill test is qualifying and adds nothing to your merit score, but failing it removes you from those posts regardless of your written performance.

**What is the SSC CHSL salary?**

Lower Division Clerk and Junior Secretariat Assistant sit at Pay Level 2 with an entry basic pay of Rs 19,900. Postal Assistant, Sorting Assistant and Data Entry Operator in several departments sit at Pay Level 4 with an entry basic pay of Rs 25,500. Gross pay is meaningfully higher once dearness allowance, house rent allowance and transport allowance are added, with house rent allowance banded by city classification.

**What is the age limit for SSC CHSL 2026?**

18 to 27 years against the cutoff date stated in the notification, with relaxation of 5 years for SC and ST, 3 years for OBC in the non-creamy layer and 10 years for candidates with benchmark disabilities in the unreserved category.

**Is there negative marking in SSC CHSL?**

Yes, 0.50 marks are deducted for each wrong answer in Tier 1. An unattempted question carries no penalty, so a low-confidence guess is a losing bet.

**Where will I be posted?**

CHSL posts are spread across central government ministries, departments and subordinate offices nationwide, and Postal Assistant and Sorting Assistant roles follow the postal circle structure. Allocation depends on your merit rank, your preference order and where vacancies exist in the cycle. Candidates expecting a posting in their home state should treat that as a possibility rather than an entitlement, since central government posts are allocated on an all India basis.

**Do Tier 1 marks count towards the final merit list?**

Tier 1 screens candidates for the next stage. The final merit is built from the Tier 2 written performance, with the skill test acting as a qualifying gate rather than contributing marks. Check the notification for the exact weighting applied in this cycle, since SSC has revised how CHSL stages combine between cycles.

**Can I take the typing test in Hindi?**

Yes, the typing test is available in English or Hindi for the posts that require it. Confirm the applicable keyboard layout in the notification before you start practising, because the Krutidev and Mangal font conventions require different practice and switching between them late is difficult.

## Official sources

- Staff Selection Commission: https://ssc.gov.in
- SSC candidate login for the admit card and city intimation slip
- SSC regional office websites, which mirror admit card links for their own candidates
- The CHSL 2026 notification PDF, which is the authority on post-specific eligibility, the skill test standard and the Hindi typing layout

If a date on this page conflicts with your admit card, your admit card is correct. SSC schedules move, the Commission does not announce every change through a press release, and vacancy counts for CHSL in particular are revised after departments confirm their requirements. Check the notification PDF and your candidate login rather than relying on any aggregator summary, including this one, for anything that determines whether you sit the exam.`;

const fields = {
  vacancies: null,
  post_name:
    "Lower Division Clerk / Junior Secretariat Assistant, Data Entry Operator, and Postal Assistant / Sorting Assistant across central government ministries, departments, subordinate offices and the Department of Posts. SSC has indicated over 3,000 vacancies and the final count is not settled: SSC announces a tentative figure at notification and confirms it later once departments finalise requirements.",
  eligibility: {
    education:
      "A pass in Class 12 or an equivalent examination from a recognised board or university. IMPORTANT: some Data Entry Operator posts additionally require Mathematics as a subject at Class 12 in the Science stream, which candidates miss when selecting preferences. Check the post-specific requirement in the notification against your marksheet rather than relying on a general eligibility summary.",
    age: "18 to 27 years against the cutoff date stated in the notification. Relaxation of 5 years for SC and ST, 3 years for OBC in the non-creamy layer, and 10 years for candidates with benchmark disabilities in the unreserved category, with stacking for reserved categories and separate provisions for ex-servicemen.",
  },
  salary:
    "CHSL posts sit at Pay Level 2 and Pay Level 4 on the 7th Pay Commission matrix depending on the post. Lower Division Clerk and Junior Secretariat Assistant are at Pay Level 2 with an entry basic pay of Rs 19,900. Postal Assistant, Sorting Assistant and Data Entry Operator in several departments sit at Pay Level 4 with an entry basic pay of Rs 25,500, and some Data Entry Operator posts sit higher depending on the department. Gross monthly pay is meaningfully above basic once dearness allowance, house rent allowance and transport allowance are added, and house rent allowance is banded by city classification so the same post pays noticeably more in a metro than in a smaller town. The posts carry pension under the National Pension System, medical benefits and central government leave entitlements. Promotion from LDC runs through Upper Division Clerk and onward through the ministerial grades, and departmental examinations can accelerate that route.",
  important_dates: {
    notificationDate: "2026-04-30",
    startDate: "2026-04-30",
    lastDate: "2026-05-31",
    examDate: "Tier 1 computer based examination across July to September 2026 in multiple shifts. Tier 2 not yet announced.",
    note: "Applications closed 31 May 2026. Tier 1 runs in staggered batches rather than on a single national date, so the city intimation slip and admit card are released in stages. Your admit card is the only document that states your exam date, shift and centre.",
  },
  how_to_apply:
    "Applications for SSC CHSL 2026 closed on 31 May 2026. This recruitment is at the Tier 1 examination stage, with the computer based test running across July to September 2026. There is no late application window. If you applied, sign in to your candidate account at ssc.gov.in to download the city intimation slip and then the admit card, both released a few days ahead of your allotted batch. For a future cycle: complete the SSC One Time Registration, wait for the CHSL notification (usually released in the first half of the year), apply within the window, and enter post preferences carefully since allocation follows merit rank applied against the preference order and some Data Entry Operator posts carry an additional Mathematics requirement. Pay the fee and submit before the deadline rather than on the closing day.",
  selection_process:
    "**Stage 1: Tier 1 computer based examination** across July to September 2026. 100 objective questions, 200 marks, 60 minutes, four sections of 25 questions each: English Language, General Intelligence, Quantitative Aptitude and General Awareness. Each question carries 2 marks and negative marking is 0.50 marks per wrong answer. Confirm the sectional timing arrangement for your batch in the admit card instructions rather than assuming it from another SSC exam, since the Commission has applied sectional limits in some recruitments and a single pooled timer in others.\n\n**Stage 2: Tier 2** A computer based examination combined with a skill test. Not yet announced for this cycle.\n\n**Skill test / typing test** QUALIFYING ONLY, and the stage where a large number of otherwise successful candidates lose the post. Data Entry Operator posts are tested on data entry speed measured in key depressions per hour. Lower Division Clerk, Junior Secretariat Assistant and Postal Assistant posts are tested on typing speed in English or Hindi at a specified words per minute. It adds NOTHING to your merit score, but failing it removes you from consideration for the posts that require it regardless of written performance. Typing is a motor skill that takes weeks of daily practice and cannot be improvised after a result is declared. Practise accuracy before speed, since errors are penalised. Hindi typing candidates should confirm the applicable keyboard layout in the notification, as the Krutidev and Mangal conventions require different practice.\n\n**Document verification** Checks Class 12 certificate, post-specific subject requirements, age, category and identity. Post allocation follows from merit rank applied against the preference order submitted during the application.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "ssc-chsl-2026", title, description, content, fields });
