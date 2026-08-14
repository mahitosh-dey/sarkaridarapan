// SSC CGL 2026 — thin-page fix + intent repositioning
//
// Verified 2026-08-14.
//
// WHY THIS PAGE WAS REWRITTEN
// The old page (1007w) was built as an application funnel: title ended in
// "Apply", H1 read "Everything You Need to Know Before June 22", and it carried
// a "Should You Apply?" section. Applications closed 22 June 2026. Tier 1 is
// being conducted RIGHT NOW (August to September 2026). The page was answering
// a question that expired seven weeks before this rewrite. Repositioned to the
// exam phase while keeping full notification detail for historical queries.
//
// FACTS VERIFIED (SSC notification dated 21 May 2026; corroborated across
// Adda247, CareerPower, PW, Testbook, Oliveboard on 2026-08-14):
//   - 12,256 tentative vacancies, Group B and Group C
//   - Application window 21 May to 22 June 2026 (fee payment to 23 June)
//   - Tier 1: August to September 2026. Tier 2: December 2026
//   - NEW IN 2026: 15-minute sectional timing in Tier 1 (previously a single
//     60-minute pool across all four sections)
//   - Tier 1: 100 Q / 200 marks / 60 min / 4 sections / negative 0.50
//   - Tier 2 Paper I: Session I is 2h15m (Sections I, II, Module I of III),
//     Session II is 15 min (DEST, qualifying only). Negative marking 1 mark in
//     Sections I, II and Module I of Section III; 0.50 in Papers II and III.
//   - SSC CGL 2025 Tier 1 cutoffs declared 18 Dec 2025. JSO: UR 153.46,
//     OBC 153.46, EWS 151.59, SC 137.30, ST 136.40. SI Gr-II: UR 152.47,
//     EWS 152.15, OBC 150.51, SC 137.16, ST 130.17.
//
// NOT ASSERTED (no reliable source as of 2026-08-14):
//   - Exact Tier 1 shift dates. SSC had not published the datesheet.
//   - City intimation slip / admit card release dates. Aggregators give only
//     an expected window. Stated as a pattern, not a date.
//   - Post-wise vacancy split of the 12,256. SSC publishes this at the
//     vacancy-detail stage, not in the notification. Left unquantified rather
//     than invented.
//   - AAO category cutoffs. Only JSO and SI Gr-II figures were sourced.
//
// MOAT vs DR 70+ competitors (CareerPower, Adda247, Testbook, PW all checked):
// every one of them still frames the page around "apply online" and none
// convert the new sectional-timing rule into an actual per-section attempt
// plan with worked numbers. That worked plan plus an honest exam-phase
// timeline is the differentiation here.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "SSC CGL 2026 Tier 1 Exam: Admit Card, Dates, 12,256 Posts";

const description =
  "SSC CGL 2026 Tier 1 runs from August 2026 with 12,256 vacancies. Check admit card timing, city slip, the new 15 minute sectional rule and exam day steps.";

const content = `The Staff Selection Commission received applications from 21 May to 22 June 2026 for 12,256 Group B and Group C posts, and the Tier 1 computer based test is being held across August and September 2026. If you applied, the paper is either just behind you or a few weeks ahead. This page covers what matters at this stage: when your admit card appears, the sectional timing rule that changed how Tier 1 must be attempted, what happens in December, and how the score that decides your posting is actually built.

One rule change matters more than everything else on this page. Tier 1 now runs on a 15-minute per-section limit instead of a single 60-minute pool. If you have prepared on old mock tests, your attempt strategy is out of date.

## Where SSC CGL 2026 stands right now

| Stage | Status as of August 2026 |
|---|---|
| Notification | Released 21 May 2026 |
| Application window | Closed 22 June 2026 |
| Fee payment deadline | Closed 23 June 2026 |
| Correction window | Closed |
| City intimation slip | Released shortly before each exam batch |
| Tier 1 admit card | Released a few days before your shift |
| Tier 1 exam | Running, August to September 2026 |
| Tier 1 answer key | After Tier 1 concludes |
| Tier 1 result | Expected after the answer key objection window |
| Tier 2 exam | December 2026 |

SSC conducts Tier 1 in multiple shifts spread over several weeks rather than on a single national date. Your personal exam date depends on the batch you are assigned, which is why two people who applied on the same day can sit the paper three weeks apart. Do not plan around a date you saw quoted for someone else.

The Commission had not published a full public datesheet with shift-level dates at the time of writing. Coaching sites that quote a precise date are giving you an expectation, not an SSC announcement. Your admit card is the only document that states your date, shift and centre.

## The 15 minute sectional timing rule and what it changes

Tier 1 in 2026 gives each of the four sections its own 15-minute limit. When those 15 minutes end, that section closes and the next one opens. You cannot return to it.

Under the older format, all 100 questions sat in one 60-minute pool. Strong candidates exploited that. They cleared General Awareness in six or seven minutes, banked the surplus, and spent 22 minutes on Quantitative Aptitude. That entire approach is now unusable.

Here is what the arithmetic looks like in practice. Take a candidate who historically attempted this way:

| Section | Old approach | Result |
|---|---|---|
| General Awareness | 7 min, 23 attempts | Time banked |
| General Intelligence | 13 min, 24 attempts | Slightly over |
| English | 12 min, 25 attempts | Time banked |
| Quantitative Aptitude | 28 min, 22 attempts | Funded by the surplus |

That same candidate in 2026 gets 15 minutes for Quantitative Aptitude and no more. The 13 extra minutes that used to come from General Awareness and English are gone. On a paper where Quant carries 50 of the 200 marks, losing half your working time on the hardest section is a large hit if you have not rehearsed for it.

The correction is to build a per-section floor and stop. Reasoning and General Awareness are the sections where 15 minutes is generous, so treat them as complete-and-bank-nothing zones: finish every question you can read quickly, mark nothing for review, move on. In English, 15 minutes across 25 questions means roughly 36 seconds per question, which is workable for grammar and vocabulary but tight if a long comprehension passage appears, so attempt the passage last. In Quant, accept from the start that you will not attempt all 25. Pick the 15 to 18 questions you can solve in under 50 seconds each and leave the rest untouched rather than half-solved.

Two behaviours cost marks under sectional timing. The first is over-investing early in a section and running out of time on questions you could have solved. The second is panic-guessing in the final 30 seconds of a section, which with 0.50 negative marking turns a blank into a loss. A blank costs zero. A wrong answer costs half a mark and half a mark can sit between you and a posting when cutoffs are separated by fractions.

Practise on mocks that enforce sectional locks. A mock with a single 60-minute timer is now training you for the wrong exam.

## Tier 1 exam pattern 2026

| Section | Questions | Marks | Time |
|---|---|---|---|
| General Intelligence and Reasoning | 25 | 50 | 15 min |
| General Awareness | 25 | 50 | 15 min |
| Quantitative Aptitude | 25 | 50 | 15 min |
| English Comprehension | 25 | 50 | 15 min |
| Total | 100 | 200 | 60 min |

Each question carries 2 marks. Negative marking is 0.50 marks for every wrong answer. The paper is objective multiple choice, delivered as a computer based test.

Candidates with a disability covered under the scribe provisions get compensatory time, and the sectional limits scale accordingly. That entitlement has to be claimed in the application, so it appears on your admit card if it was granted.

Tier 1 is a screening stage. Its marks do not carry into the final merit list. What Tier 1 decides is whether you sit Tier 2 at all, and how many candidates SSC calls forward for each post category.

## City intimation slip and admit card

These are two different documents released at two different times, and confusing them causes avoidable anxiety every cycle.

The city intimation slip comes first. It tells you which city you have been allotted, and nothing else. No centre address, no shift timing, no reporting time. It exists so candidates who have been assigned a distant city can arrange travel and accommodation before the admit card lands. SSC typically releases it a handful of days before the relevant exam batch.

The admit card, sometimes called the hall ticket, comes after and carries everything that matters: exact centre address, exam date, shift, reporting time and your photograph. You cannot enter the centre without it.

Both are downloaded from the SSC portal at ssc.gov.in. Since the Commission moved to a single candidate login, you access them by signing in to your account rather than by entering a registration number on a public page. Regional SSC websites also mirror admit card links for their own candidates.

Download your admit card the day it appears rather than the night before the exam. Server load spikes near the exam date, and a printing problem is easier to solve with three days in hand than three hours.

Check four things the moment you open it. Your name and photograph, because a mismatch with your ID is the most common reason candidates are turned away. The centre address, because SSC allots centres within your chosen city and it may not be the area you expected. The reporting time, which is well before the exam start time and is the deadline that actually binds. And the shift, because morning and afternoon batches at the same centre have caught people out.

## What to carry on exam day

Bring the printed admit card and one original photo identity document. Aadhaar, voter ID, PAN card, passport, driving licence and a government-issued employee ID are the usual accepted forms. Photocopies are not accepted, and a photo on a phone is not accepted.

Reporting time is not exam time. It is usually 60 to 90 minutes ahead of the shift start, and gates close before the exam begins. Once the gate shuts, there is no admission on any grounds. Candidates lose the cycle over a traffic delay every single year, so plan for the trip to take longer than it should.

Leave electronics behind entirely. Phones, smart watches, fitness bands, Bluetooth earpieces and calculators are barred, and most centres have no storage facility. Carrying a prohibited item into the hall can end in debarment from SSC examinations, which is a far larger penalty than missing one paper.

Rough sheets and pens are provided at the centre in most cases, though the admit card instructions for your batch take precedence over anything you read elsewhere. Read those instructions rather than assuming from a previous exam.

## Tier 2 in December and how the real score is built

Tier 2 is the stage that decides your rank and your post. Everything from Tier 1 falls away.

Paper I is compulsory for every candidate who qualifies. It runs in two sessions on the same day. Session I lasts 2 hours and 15 minutes and covers Section I, Section II and Module I of Section III. Session II lasts 15 minutes and covers the Data Entry Speed Test.

| Component | What it covers |
|---|---|
| Section I | Mathematical Abilities, Reasoning and General Intelligence |
| Section II | English Language and Comprehension, General Awareness |
| Section III Module I | Computer Knowledge Test |
| Section III Module II | Data Entry Speed Test, qualifying only |

Paper II applies to candidates who applied for Junior Statistical Officer and tests statistics at a considerably higher level than Tier 1 quantitative aptitude. Paper III applies to candidates who applied for Assistant Audit Officer and Assistant Accounts Officer, covering finance and economics.

Negative marking in Tier 2 is heavier than Tier 1. One full mark is deducted for each wrong answer in Section I, Section II and Module I of Section III of Paper I. Papers II and III carry a 0.50 deduction. A one-mark penalty changes the calculation on guessing substantially: at a 25 per cent blind-guess success rate, guessing is a losing strategy in Paper I.

The Data Entry Speed Test is qualifying and its marks are not added to the merit list, but failing it removes you from consideration for any post that requires it. Candidates who ignore typing practice because the marks do not count have lost postings on this.

Module-level question counts and marks are set out in the official notification PDF. Check that document rather than a summary table if you are planning your Tier 2 preparation in detail, because SSC has revised the module structure between cycles.

## The 12,256 vacancies and which posts they cover

SSC announced 12,256 tentative vacancies for CGL 2026. The word tentative is doing real work in that sentence. The final count moves as participating departments confirm their requirements, and it has moved in both directions in past cycles.

CGL recruits into roughly 40 different posts across central government ministries, departments and subordinate offices. The commonly contested ones include Assistant Audit Officer and Assistant Accounts Officer under the Comptroller and Auditor General, Assistant Section Officer in various ministries and in the Central Secretariat Service, Inspector of Income Tax and Inspector in Central Excise and GST under the Central Board of Direct Taxes and the Central Board of Indirect Taxes and Customs, Assistant Enforcement Officer in the Directorate of Enforcement, Sub Inspector in the Central Bureau of Investigation and in the Narcotics Bureau, Junior Statistical Officer in the Ministry of Statistics, Auditor and Accountant in various offices, and Tax Assistant and Upper Division Clerk at the lower pay levels.

SSC does not publish a post-wise numerical split at notification stage. It releases the vacancy detail closer to the post-preference stage, which is why any site quoting an exact figure for a specific post right now is estimating from a previous year. Treat those numbers as background, not as planning data.

Your post preference order is submitted during the process and it matters more than most candidates realise. Preferences are honoured strictly by merit rank, so a candidate ranked below you cannot take a post you ranked higher and qualified for. Ranking a post you do not want above one you do is a mistake with no recovery once submitted.

## Salary by pay level

| Pay level | Representative posts | Basic pay |
|---|---|---|
| Level 8 | Assistant Audit Officer, Assistant Accounts Officer | Rs 47,600 |
| Level 7 | Assistant Section Officer, Inspector, Sub Inspector, AEO | Rs 44,900 |
| Level 6 | Junior Statistical Officer, Assistant, Divisional Accountant | Rs 35,400 |
| Level 5 | Auditor, Accountant, Junior Accountant | Rs 29,200 |
| Level 4 | Tax Assistant, Upper Division Clerk, Sub Inspector NCB | Rs 25,500 |

Those figures are entry basic pay under the 7th Pay Commission matrix. Gross monthly pay is higher because dearness allowance, house rent allowance and transport allowance sit on top. House rent allowance varies sharply by city class, so the same post pays noticeably more in Delhi or Mumbai than in a smaller town, which is worth factoring into your post and location preferences.

Assistant Audit Officer at Level 8 is the most sought post in the CGL pool, and its cutoff reflects that.

## Previous year cutoffs as a benchmark

SSC declared the CGL 2025 Tier 1 cutoffs on 18 December 2025. Two post categories give a usable reference point:

| Category | Junior Statistical Officer | Statistical Investigator Grade II |
|---|---|---|
| UR | 153.46 | 152.47 |
| EWS | 151.59 | 152.15 |
| OBC | 153.46 | 150.51 |
| SC | 137.30 | 137.16 |
| ST | 136.40 | 130.17 |

Read those as a rough floor rather than a target. Cutoffs move every cycle with paper difficulty, candidate volume and the final vacancy count, and the 2026 sectional timing rule adds a further variable that has no precedent in the historical series. If sectional locks depress average Quantitative Aptitude scores across the board, cutoffs may fall rather than rise.

Cutoffs for other post categories, including Assistant Audit Officer, are published in the official SSC cutoff PDF. Figures circulating on aggregator sites for those posts should be checked against that document before you rely on them.

## Answer key, objections and how scoring works

After Tier 1 concludes, SSC releases a provisional answer key along with your response sheet. You get a window, usually a few days, to raise objections against specific questions, and there is a per-question fee that is refunded if your objection is upheld.

This process is worth taking seriously. SSC does drop or revise questions where objections are valid, and in an exam decided by fractions of a mark, one dropped question shifts thousands of ranks.

Scores in Tier 1 are normalised because the exam runs across multiple shifts of differing difficulty. Normalisation adjusts raw marks so that a candidate who sat a harder shift is not penalised for it. This is why the marks you calculate from the answer key rarely match your published score exactly, and why comparing your raw score against a friend who sat a different shift tells you very little.

## Common mistakes that cost candidates the post

Practising on a single-timer mock is the big one this cycle. Sectional locks punish a strategy built on banking time, and the only way to find that out safely is in a mock rather than in the hall.

Guessing to fill blanks is the second. With 0.50 negative marking in Tier 1 and a full mark in Tier 2 Paper I, an unattempted question is strictly better than a low-confidence guess. Fill the answer sheet completely only if you genuinely narrowed the options.

Ignoring the Data Entry Speed Test because it is qualifying. It removes you from posts that require it, regardless of your rank.

Submitting a careless post preference order. Merit is applied strictly down the preference list and there is no correction afterwards.

Reaching the centre at exam time instead of reporting time. Gates close early and close permanently.

## Frequently asked questions

**Can I still apply for SSC CGL 2026?**

No. Applications closed on 22 June 2026 and fee payment closed on 23 June 2026. There is no late window. The next opportunity is the CGL 2027 cycle, whose notification is usually released around the middle of the year.

**When will the SSC CGL 2026 Tier 1 admit card be released?**

SSC releases the admit card a few days before your allotted exam batch, downloadable from your candidate login at ssc.gov.in. Because Tier 1 runs across multiple batches from August into September 2026, release is staggered rather than on a single date. The city intimation slip arrives first and tells you only your allotted city.

**What is the new sectional timing rule in SSC CGL 2026 Tier 1?**

Each of the four Tier 1 sections has its own 15-minute limit in 2026. When a section's 15 minutes expire it closes and you cannot return to it. Previously all 100 questions shared one 60-minute pool, which allowed candidates to save time on General Awareness and spend it on Quantitative Aptitude. That is no longer possible.

**How many vacancies are there in SSC CGL 2026?**

SSC announced 12,256 tentative vacancies for Group B and Group C posts. The figure is tentative and moves as participating departments confirm requirements. SSC publishes the post-wise split later in the process rather than at notification stage.

**Is there negative marking in SSC CGL 2026?**

Yes. Tier 1 deducts 0.50 marks for each wrong answer. Tier 2 is harsher: one full mark is deducted in Section I, Section II and Module I of Section III of Paper I, and 0.50 marks in Papers II and III. Unattempted questions carry no penalty.

**Do Tier 1 marks count towards the final merit list?**

No. Tier 1 is a screening stage only. Your final rank and your post are decided by Tier 2 performance, which is why candidates who scrape through Tier 1 can still finish well.

**What documents do I need to carry to the exam centre?**

A printed copy of the admit card and one original photo identity document, such as Aadhaar, voter ID, PAN card, passport or driving licence. Photocopies and digital copies on a phone are not accepted. Electronic devices of any kind, including smart watches, are prohibited.

**When is SSC CGL 2026 Tier 2 scheduled?**

Tier 2 is scheduled for December 2026. Paper I is compulsory for all qualified candidates and runs in two sessions on the same day. Paper II applies to Junior Statistical Officer applicants and Paper III to Assistant Audit Officer and Assistant Accounts Officer applicants.

**Which SSC CGL post has the highest salary?**

Assistant Audit Officer and Assistant Accounts Officer sit at Pay Level 8 with an entry basic pay of Rs 47,600, the highest in the CGL pool. Gross pay is higher once dearness allowance, house rent allowance and transport allowance are added, and house rent allowance varies by city class.

**What was the SSC CGL Tier 1 cutoff last year?**

SSC declared the CGL 2025 Tier 1 cutoffs on 18 December 2025. For Junior Statistical Officer the UR cutoff was 153.46, OBC 153.46, EWS 151.59, SC 137.30 and ST 136.40. For Statistical Investigator Grade II, UR was 152.47 and EWS 152.15. Cutoffs shift each cycle with paper difficulty and vacancy count.

## Official sources

Check these before acting on anything you read on an aggregator site, including this page.

- Staff Selection Commission: https://ssc.gov.in
- SSC candidate login for admit card and city intimation slip: https://ssc.gov.in
- SSC regional office websites, which mirror admit card links for their own candidates
- The CGL 2026 notification PDF, which is the authority on module-level marks and post eligibility

If a date on this page conflicts with your admit card, your admit card is correct. SSC schedules move, and the Commission does not announce every change through a press release.`;

const fields = {
  vacancies: 12256,
  post_name:
    "Around 40 Group B and Group C posts across central government ministries and departments, including Assistant Audit Officer, Assistant Accounts Officer, Assistant Section Officer, Inspector of Income Tax, Inspector in Central Excise and GST, Assistant Enforcement Officer, Sub Inspector in CBI, Junior Statistical Officer, Auditor, Accountant, Tax Assistant and Upper Division Clerk",
  eligibility: {
    education:
      "A bachelor's degree in any discipline from a recognised university for most posts. Junior Statistical Officer requires a bachelor's degree with Statistics as a subject at graduation level, or a degree with at least 60 per cent in Mathematics at Class 12. Statistical Investigator Grade II requires a bachelor's degree with Statistics as one of the subjects. Assistant Audit Officer and Assistant Accounts Officer are open to any graduate, with CA, CS, MBA, Cost and Management Accountancy or a Masters in Commerce, Business Studies, Business Economics or Business Administration in Finance listed as desirable rather than mandatory.",
    age: "Age limits vary by post and pay level, running from 18 to 27, 18 to 30, 20 to 30 and 18 to 32 across different posts, so check the age band for the specific post you applied to rather than assuming a single limit. Standard relaxation applies: 5 years for SC and ST, 3 years for OBC, 10 years for candidates with disabilities in the unreserved category, and further relaxation for ex-servicemen and other notified categories.",
  },
  salary:
    "Pay depends on the post and its pay level under the 7th Pay Commission matrix. Level 8 (Assistant Audit Officer, Assistant Accounts Officer) starts at Rs 47,600 basic. Level 7 (Assistant Section Officer, Inspector, Sub Inspector, Assistant Enforcement Officer) starts at Rs 44,900. Level 6 (Junior Statistical Officer, Assistant, Divisional Accountant) starts at Rs 35,400. Level 5 (Auditor, Accountant, Junior Accountant) starts at Rs 29,200. Level 4 (Tax Assistant, Upper Division Clerk, Sub Inspector in the Narcotics Control Bureau) starts at Rs 25,500. Gross monthly pay is higher than basic because dearness allowance, house rent allowance and transport allowance are added on top. House rent allowance varies by city class, so the same post pays noticeably more in a metro than in a smaller town.",
  important_dates: {
    notificationDate: "2026-05-21",
    startDate: "2026-05-21",
    lastDate: "2026-06-22",
    examDate: "Tier 1 computer based test across August and September 2026 in multiple shifts. Tier 2 in December 2026.",
    note: "Fee payment closed 23 June 2026. Tier 1 runs in staggered batches rather than on a single national date, so the city intimation slip and admit card are released in stages. Your admit card is the only document that states your exam date, shift and centre.",
  },
  how_to_apply:
    "Applications for SSC CGL 2026 closed on 22 June 2026 and fee payment closed on 23 June 2026. This recruitment is now at the Tier 1 examination stage, with the computer based test running across August and September 2026. There is no late application window. If you applied, sign in to your candidate account at ssc.gov.in to download the city intimation slip and then the admit card, both released a few days ahead of your allotted batch. For a future cycle: register on the SSC portal with a one-time registration, wait for the CGL notification (usually released around the middle of the year), complete the application within the window, enter your post preferences carefully since preferences are honoured strictly by merit rank and cannot be changed after submission, upload documents in the specified format, pay the fee and submit before the deadline.",
  selection_process:
    "**Stage 1: Tier 1 computer based test** across August and September 2026. 100 objective questions, 200 marks, 60 minutes, four sections of 25 questions each covering General Intelligence and Reasoning, General Awareness, Quantitative Aptitude and English Comprehension. Negative marking of 0.50 marks per wrong answer. NEW IN 2026: each section has its own 15-minute limit and closes when that time expires, replacing the earlier single 60-minute pool. Tier 1 is a screening stage and its marks do NOT count towards the final merit list. Scores are normalised across shifts because the exam runs in multiple batches of differing difficulty.\n\n**Stage 2: Tier 2 examination** in December 2026. This is the stage that decides rank and post. Paper I is compulsory for all qualified candidates and runs in two sessions on the same day: Session I lasts 2 hours 15 minutes and covers Section I (Mathematical Abilities, Reasoning and General Intelligence), Section II (English Language and Comprehension, General Awareness) and Module I of Section III (Computer Knowledge Test); Session II lasts 15 minutes and covers Module II of Section III, the Data Entry Speed Test. Paper II applies to Junior Statistical Officer applicants and covers statistics. Paper III applies to Assistant Audit Officer and Assistant Accounts Officer applicants and covers finance and economics. Negative marking is 1 mark in Sections I and II and Module I of Section III of Paper I, and 0.50 marks in Papers II and III.\n\n**Stage 3: Data Entry Speed Test and skill tests** Qualifying only. DEST marks are not added to the merit list, but failing it removes you from consideration for any post that requires it.\n\n**Stage 4: Document verification** Qualifying. Checks degree, age, category, post-specific eligibility and identity. Post allocation follows strictly from Tier 2 merit rank applied against the preference order you submitted.",
  reading_time: "13 min read",
};

await replaceJob({ slug: "ssc-cgl-2026", title, description, content, fields });
