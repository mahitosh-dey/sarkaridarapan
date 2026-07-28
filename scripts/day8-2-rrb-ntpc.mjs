// Day 8 (Mon 2026-07-27) — RRB NTPC 2026 full rewrite (stale "2024/CEN 05" page -> 3000w+).
// Research + verification pass 2026-07-27: Graduate CEN 06/2025 (5,810) + UG CEN 07/2025 (3,058)
// = 8,868. Graduate CBT2 held 10 Jul 2026, key 15 Jul. UG CBT2 17 Sep 2026. Traffic Assistant L4.
// CBAT: SM+TA, T-score 42/battery, 70% CBT2 + 30% CBAT. DA 60% (Finance Ministry, eff 1 Jan 2026).
import { replaceJob } from "./lib/replace-job.mjs";

const title = "RRB NTPC 2026: 8,868 Posts, CBT 2 Dates, Result Updates";

const description =
  "RRB NTPC 2026 fills 8,868 Graduate and Undergraduate posts. Check vacancies, eligibility, CBT 1 and CBT 2 dates, salary, CBAT rules and cut-off updates here.";

const content = `## RRB NTPC 2026 at a glance

RRB NTPC 2026 is the Railway Recruitment Boards' recruitment for 8,868 Non-Technical Popular Categories posts across Indian Railways, split into a Graduate level (CEN 06/2025) with 5,810 posts and an Undergraduate level (CEN 07/2025) with 3,058 posts. These are permanent Group C railway jobs covering roles like Station Master, Goods Train Manager, and various clerk cadres.

The two levels run on separate notifications and separate exam calendars, which trips up a lot of candidates. The Graduate cycle is already deep into its selection stages, while the Undergraduate cycle is still working through its exams. If you applied, the level you sit for depends on the qualification you hold, not on which posts you prefer.

Here is where each cycle stands as of 27 July 2026. The Graduate CBT 2 was held on 10 July 2026, its answer key was released on 15 July 2026, and the objection window ran to 22 July 2026, so candidates are now waiting on the CBT 2 result. The Undergraduate CBT 2 is scheduled for 17 September 2026, per the RRB exam notice. Those two events are the live action right now.

RRB NTPC is one of the most contested government recruitments in the country. Past cycles have drawn well over a crore applications for a similar vacancy pool, which is why the cut-off runs high and every mark in CBT 2 counts. The upside is that a single application fee mostly comes back after CBT 1, the posts are permanent with a real promotion ladder, and the qualification bar is modest: a degree for the Graduate level and a Class 12 pass for the Undergraduate level. This guide walks through both cycles end to end, covering the post-wise vacancies, eligibility, exam pattern, the CBAT rule that decides Station Master and Traffic Assistant selection, salary with worked in-hand figures, and how normalization shapes the final merit.

## Important dates for RRB NTPC 2026

| Event | Graduate (CEN 06/2025) | Undergraduate (CEN 07/2025) |
|---|---|---|
| Notification | 20 October 2025 | 27 October 2025 |
| Application window | 27 Oct to 27 Nov 2025 | Oct to Nov 2025 |
| CBT 1 | 16 to 27 March 2026 | May to June 2026 |
| CBT 1 result | 11 June 2026 | Awaited |
| CBT 2 | 10 July 2026 | 17 September 2026 |
| CBT 2 answer key | 15 July 2026 | After CBT 2 |
| Objection window | 15 to 22 July 2026 | After CBT 2 |

Applications for both cycles have closed. This page now serves as a tracker for the exam, answer key, cut-off, and result stages, which the RRBs announce region by region.

## Graduate vs Undergraduate: which level are you in

The single biggest confusion in RRB NTPC is the two-level split. Your qualification decides your level, and the posts, pay, and age limits differ.

| Factor | Graduate level (CEN 06/2025) | Undergraduate level (CEN 07/2025) |
|---|---|---|
| Qualification | Bachelor's degree, any stream | Class 12 (10+2) pass |
| Age (as on 01 Jan 2026) | 18 to 33 years | 18 to 30 years |
| Total posts | 5,810 | 3,058 |
| Top post | Station Master (Level 6) | Commercial cum Ticket Clerk (Level 3) |
| Pay levels | Level 4 to Level 6 | Level 2 to Level 3 |
| Extra stage | CBAT for Station Master and Traffic Assistant | Typing test for clerk posts |

## Post-wise vacancies

The Graduate cycle carries the higher-paid roles, led by Goods Train Manager (the post formerly called Goods Guard) and Station Master.

| Graduate post (CEN 06/2025) | Pay Level | Vacancies |
|---|---|---|
| Goods Train Manager | Level 5 | 3,416 |
| Junior Account Assistant cum Typist | Level 5 | 921 |
| Senior Clerk cum Typist | Level 5 | 638 |
| Station Master | Level 6 | 615 |
| Chief Commercial cum Ticket Supervisor | Level 6 | 161 |
| Traffic Assistant | Level 4 | 59 |
| Total | | 5,810 |

The Undergraduate cycle is led by the Commercial cum Ticket Clerk role, which alone accounts for most of its seats.

| Undergraduate post (CEN 07/2025) | Pay Level | Vacancies |
|---|---|---|
| Commercial cum Ticket Clerk | Level 3 | 2,424 |
| Accounts Clerk cum Typist | Level 2 | 394 |
| Junior Clerk cum Typist | Level 2 | 163 |
| Trains Clerk | Level 2 | 77 |
| Total | | 3,058 |

## Eligibility for RRB NTPC 2026

Age is reckoned as on 1 January 2026. Graduate posts allow 18 to 33 years and Undergraduate posts allow 18 to 30 years, before relaxation. Category relaxation follows standard railway norms: 3 years for OBC (non-creamy layer), 5 years for SC and ST, and 10 to 15 years for PwBD candidates.

On qualification, Graduate posts need a bachelor's degree in any stream from a recognised university, and Undergraduate posts need a Class 12 (10+2) pass. Typing and clerk posts additionally require computer typing proficiency, which is checked through a separate skill test rather than at the application stage.

## Application fee

| Category | Fee | Refund |
|---|---|---|
| General, OBC, EWS | Rs 500 | Rs 400 refunded after appearing in CBT 1 |
| SC, ST, PwBD, ex-servicemen, women, transgender, minorities, EBC | Rs 250 | Fully refunded after appearing in CBT 1 |

The refund model is a railway feature worth noting: most of the fee comes back once you actually sit the CBT 1, so the real cost of applying is small for candidates who show up.

## Selection process

RRB NTPC runs through several stages, and the exact path depends on the post you are shortlisted for.

1. Computer Based Test 1 (CBT 1): a common screening test. Qualifying in nature, used to shortlist candidates for CBT 2 at roughly 20 times the number of vacancies.
2. Computer Based Test 2 (CBT 2): the merit-deciding test for most posts.
3. Typing Skill Test (TST): for typist and clerk posts such as Senior Clerk, Junior Clerk, Junior Account Assistant, and Accounts Clerk. Qualifying only.
4. Computer Based Aptitude Test (CBAT): for Station Master and Traffic Assistant only. This one counts toward the final merit.
5. Document verification and medical examination.

## CBT 1 exam pattern

CBT 1 is a 100-question paper of 100 marks in 90 minutes, with a penalty of one-third mark for each wrong answer.

| Section | Questions | Marks |
|---|---|---|
| General Awareness | 40 | 40 |
| Mathematics | 30 | 30 |
| General Intelligence and Reasoning | 30 | 30 |
| Total | 100 | 100 |

The minimum qualifying percentages in CBT 1 are 40 for UR and EWS, 30 for OBC (non-creamy layer), 30 for SC, and 25 for ST. CBT 1 marks do not carry into the final merit. The test only decides who moves to CBT 2, and the shortlist is drawn using normalized scores.

## CBT 2 exam pattern

CBT 2 is the stage that decides your rank for most posts. It is a 120-question paper of 120 marks in 90 minutes, again with a one-third negative mark per wrong answer.

| Section | Questions | Marks |
|---|---|---|
| General Awareness | 50 | 50 |
| Mathematics | 35 | 35 |
| General Intelligence and Reasoning | 35 | 35 |
| Total | 120 | 120 |

## Syllabus

The syllabus stays consistent across CBT 1 and CBT 2, with CBT 2 going a little deeper. Mathematics covers number systems, decimals, fractions, LCM and HCF, ratio and proportion, percentage, mensuration, time and work, time and distance, simple and compound interest, profit and loss, algebra, geometry, and trigonometry basics. General Intelligence and Reasoning covers analogies, series, coding and decoding, syllogism, Venn diagrams, data interpretation, and statement and conclusion questions. General Awareness covers current affairs, Indian history, geography, polity, economics, general science, and questions tied to the railways and government schemes.

## The CBAT explained

Candidates who apply for Station Master or Traffic Assistant sit an extra test called the Computer Based Aptitude Test after CBT 2. It matters a great deal, because for these two posts the final merit is 70 percent CBT 2 and 30 percent CBAT.

The CBAT is a battery of psychometric tests that assess traits like selective attention, reasoning under time pressure, spatial ability, information ordering, and personality, based on the aptitude test guidelines maintained by the railways' RDSO directorate. There is no negative marking. The rule that catches candidates out is that you must score a minimum T-score of 42 in every single test battery, with no relaxation for any category. Fail one battery and you fail the CBAT, no matter how well you did on the others. For typist and clerk posts, the skill test is only qualifying, so their merit rests purely on CBT 2.

## RRB NTPC 2026 salary

Pay depends on the post's level under the 7th Pay Commission. With dearness allowance at 60 percent of basic pay effective 1 January 2026, per the Finance Ministry order, the approximate in-hand pay in a metro (X-class city) works out as follows.

| Post | Pay Level | Basic pay | Approx in-hand (X city) |
|---|---|---|---|
| Station Master | Level 6 | Rs 35,400 | about Rs 62,000 |
| Chief Commercial cum Ticket Supervisor | Level 6 | Rs 35,400 | about Rs 62,000 |
| Goods Train Manager | Level 5 | Rs 29,200 | about Rs 52,000 |
| Senior Clerk cum Typist | Level 5 | Rs 29,200 | about Rs 52,000 |
| Traffic Assistant | Level 4 | Rs 25,500 | about Rs 44,000 |
| Commercial cum Ticket Clerk | Level 3 | Rs 21,700 | about Rs 38,000 |
| Junior Clerk cum Typist | Level 2 | Rs 19,900 | about Rs 35,000 |

Take a Station Master as a worked example. On a basic of Rs 35,400, dearness allowance at 60 percent adds Rs 21,240, house rent allowance at the metro rate of 30 percent adds Rs 10,620, and transport allowance with DA adds roughly Rs 3,600. That is a gross near Rs 70,800, and after the National Pension System contribution and other deductions the in-hand lands close to Rs 62,000 a month. Railway staff also get pass facilities, medical cover, and other service benefits on top of pay, which lift the real value of the job well above the cash salary.

## Cut-off and normalization

Because RRB NTPC runs across many shifts and days, the boards apply normalization: your raw score is adjusted for the relative difficulty of your shift, so two candidates with identical raw marks in different shifts can end with different normalized scores. The merit list uses these normalized scores, not raw marks. This is why a candidate can clear the qualifying percentage yet miss the shortlist, and why comparing raw marks with a friend in another shift tells you little.

Official category-wise cut-offs are published per RRB region with the scorecards. For the Graduate cycle, the CBT 1 result on 11 June 2026 shortlisted about 88,037 candidates for CBT 2 against 5,810 posts, an effective ratio close to 15 to 1 at that stage. Cut-offs vary by region, category, and the vacancy pool of each RRB, so read the figure for your own board rather than an all-India number.

## What each post actually does

The post you land shapes your working life far more than the pay level alone. A Station Master runs train operations at a station, controls signals and platform movement, and works rotating shifts through the night, which is why the role carries the CBAT aptitude screen. A Goods Train Manager, the role that used to be called Goods Guard, travels with freight trains and is responsible for the safe running of the rake, a field job with frequent time away from home. The clerk cadres, from Senior Clerk to Junior Account Assistant, handle accounts, records, and commercial work in railway offices, which suits candidates who prefer fixed hours and a desk. Commercial cum Ticket Clerk and Trains Clerk roles deal with ticketing, parcel, and train documentation at stations. Reading the duty profile before you rank your post preference saves a lot of regret later, since a strong CBT 2 score in a role you dislike is a poor trade.

## Career growth in Indian Railways

RRB NTPC is an entry into a service with a clear promotion ladder rather than a dead-end clerical job. A Station Master can rise through Section Controller and into operating supervisor grades over a career. Clerk cadres move up from Senior Clerk to Head Clerk and into office superintendent roles, with departmental exams opening faster routes for those who prepare for them. Railway staff also receive pass and privilege-ticket facilities for themselves and their families, medical cover through railway hospitals, and pension benefits under the applicable scheme. These service benefits, taken together with the in-hand pay, are a large part of why railway jobs draw crores of applicants each cycle.

## Preparation strategy for RRB NTPC

The two-stage structure rewards a two-speed plan. CBT 1 is a speed test of basics, so the first phase of preparation should build accuracy and pace across all three sections, since a weak section drags the whole normalized score down. General Awareness carries the most questions in both stages, and it is the section where a daily current affairs habit and a static general knowledge revision pay off directly. Mathematics and reasoning reward pattern recognition, which comes from solving previous years' papers rather than reading theory. Once CBT 1 is behind you, shift to CBT 2 depth, where the higher question count and the same negative marking mean that managing which questions to skip becomes a skill in itself. Candidates aiming for Station Master or Traffic Assistant should also practise the CBAT format early, because the aptitude batteries test traits that improve with familiarity and cannot be crammed the night before.

## Exam day and documents

Carry a printed admit card and the same photo ID you used at registration, since the biometric check at the centre matches both. Reach early, because railway exam centres run tight entry cut-off times and latecomers are not admitted. The test is computer based, so a rough sheet is provided and must be returned before you leave. Do not carry electronic devices, smart watches, or written material, as these lead to disqualification. Check your regional RRB website the night before for any last-minute centre or timing notice.

## How to apply and track your status

Applications for both 2026 cycles have closed, so the current task is tracking the exam and result stages. Log in at the RRB application portal (rrbapply.gov.in) with your registration number to download admit cards and scorecards, and watch your regional RRB website for cut-off and result notices. Admit cards release about four days before each exam, with a city intimation slip a few days earlier. Keep your registration number and password safe, since every stage from CBT 2 result to document verification is handled through the same login.

## Frequently asked questions

**How many vacancies are there in RRB NTPC 2026?**
RRB NTPC 2026 has 8,868 vacancies in total, split into 5,810 posts at the Graduate level (CEN 06/2025) and 3,058 posts at the Undergraduate level (CEN 07/2025), across all Railway Recruitment Board regions.

**What is the RRB NTPC 2026 CBT 2 exam date?**
The Graduate level CBT 2 was held on 10 July 2026, and its answer key was released on 15 July 2026. The Undergraduate level CBT 2 is scheduled for 17 September 2026, per the RRB exam notice.

**Which RRB NTPC posts require the CBAT?**
Only Station Master and Traffic Assistant require the Computer Based Aptitude Test. For these two posts the final merit is 70 percent CBT 2 and 30 percent CBAT, and a candidate must score at least a 42 T-score in every test battery with no category relaxation.

**What is the in-hand salary of a Station Master in RRB NTPC?**
A Station Master at Pay Level 6 with a basic of Rs 35,400 takes home about Rs 62,000 a month in a metro, at the 60 percent dearness allowance effective 1 January 2026, after HRA, transport allowance, and deductions.

**What is the age limit for RRB NTPC 2026?**
The age limit, reckoned as on 1 January 2026, is 18 to 33 years for the Graduate level and 18 to 30 years for the Undergraduate level, before relaxation of 3 years for OBC, 5 years for SC and ST, and up to 15 years for PwBD.

**Is there negative marking in RRB NTPC?**
Yes. Both CBT 1 and CBT 2 carry a penalty of one-third of a mark for every wrong answer. The CBAT for Station Master and Traffic Assistant has no negative marking.

**What is the difference between the Graduate and Undergraduate levels?**
The Graduate level (CEN 06/2025) needs a bachelor's degree and fills higher-paid posts like Station Master and Goods Train Manager at Levels 4 to 6. The Undergraduate level (CEN 07/2025) needs a Class 12 pass and fills clerk posts at Levels 2 to 3.

**Are RRB NTPC 2026 applications still open?**
No. Applications for both the Graduate and Undergraduate cycles closed in November 2025. The recruitment is now in its exam, answer key, and result stages, which the Railway Recruitment Boards announce region by region.

**Do CBT 1 marks count in the final merit?**
No. CBT 1 is a screening test used only to shortlist candidates for CBT 2 at about 20 times the vacancies. The final merit rests on CBT 2, plus the CBAT for Station Master and Traffic Assistant posts.`;

const fields = {
  vacancies: 8868,
  last_date: "2025-11-27",
  post_name: "Station Master, Goods Train Manager, Chief Commercial cum Ticket Supervisor, Senior Clerk cum Typist, Junior Account Assistant cum Typist, Traffic Assistant, Commercial cum Ticket Clerk, Accounts Clerk cum Typist, Junior Clerk cum Typist, Trains Clerk",
  eligibility: {
    age: "Graduate level 18 to 33 years and Undergraduate level 18 to 30 years, as on 1 January 2026. Relaxation: OBC-NCL +3 yrs, SC/ST +5 yrs, PwBD +10 to +15 yrs.",
    education: "Graduate posts (CEN 06/2025): bachelor's degree in any stream. Undergraduate posts (CEN 07/2025): Class 12 (10+2) pass. Typing proficiency needed for clerk posts.",
  },
  salary: "Level 2 to Level 6 (7th CPC). In-hand at 60% DA (eff 1 Jan 2026), metro: Station Master (L6) about Rs 62,000; Goods Train Manager (L5) about Rs 52,000; Traffic Assistant (L4) about Rs 44,000; clerks (L2 to L3) about Rs 35,000 to 38,000.",
  application_fee: {
    general: "Rs 500 (Rs 400 refunded after CBT 1)",
    obc: "Rs 500 (Rs 400 refunded after CBT 1)",
    ews: "Rs 500 (Rs 400 refunded after CBT 1)",
    sc_st: "Rs 250 (fully refunded after CBT 1)",
    women: "Rs 250 (fully refunded after CBT 1)",
    ph: "Rs 250 (fully refunded after CBT 1)",
  },
  important_dates: {
    startDate: "2025-10-27",
    lastDate: "2025-11-27",
    examDate: "2026-09-17",
  },
  how_to_apply:
    "Applications for both 2026 cycles closed in November 2025. To track status: log in at https://www.rrbapply.gov.in/ with your registration number to download admit cards and scorecards, and check your regional RRB website for cut-off and result notices. Admit cards release about four days before each exam, with a city intimation slip a few days earlier.",
  selection_process:
    "**Stage 1: CBT 1** (screening, qualifying). 100 Q, 90 min, negative 1/3. Shortlist about 20x vacancies via normalized score.\n\n**Stage 2: CBT 2** (merit-deciding). 120 Q, 90 min, negative 1/3.\n\n**Stage 3: Typing Skill Test** (typist and clerk posts, qualifying). 30 wpm English or 25 wpm Hindi.\n\n**Stage 4: CBAT** (Station Master and Traffic Assistant only). Merit weight 70% CBT 2 + 30% CBAT, minimum 42 T-score per battery, no negative marking.\n\n**Stage 5: Document Verification and Medical Examination.**",
  reading_time: "12 min read",
};

await replaceJob({ slug: "rrb-ntpc-2026", title, description, content, fields });
