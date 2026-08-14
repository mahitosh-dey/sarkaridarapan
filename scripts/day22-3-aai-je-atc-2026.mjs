// AAI JE ATC 2026 — thin-page fix + URGENT data correction
//
// Verified 2026-08-14.
//
// WHY THIS WAS URGENT
// The live page was written speculatively BEFORE the notification existed, and
// its estimates were stored in real date/number fields:
//   - last_date said 2026-08-15 (TOMORROW)   ACTUAL window closes 2026-09-07
//   - vacancies said 400 "expected"          ACTUAL 129 Junior Executive
//   - title/description said "Notification July / expected"
//                                            ACTUAL notification OUT 22 Jul 2026
//   - important_dates was a paragraph of "Expected ..." estimates
// From 15 August the page would have rendered as an EXPIRED recruitment and
// turned away candidates from a window that stays open another three weeks.
//
// This is the same class of defect found on ibps-clerk-2026 the same day, and
// it is systemic: several pages were authored in anticipation of a notification
// and their guesses were written into last_date, vacancies and important_dates
// as though they were facts. See the audit note reported to the owner.
//
// FACTS VERIFIED (AAI notification dated 22 Jul 2026; corroborated across
// Testbook, CareerPower, Adda247, Prepp, Careers360, MadeEasy on 2026-08-14):
//   - AAI Recruitment 2026 total 389 posts: 260 Manager + 129 Junior Executive
//   - Notification released 22 July 2026
//   - Apply online 8 August to 7 September 2026 at aai.aero
//   - Junior Executive age limit: not more than 27 years as on 7 September 2026
//   - Selection: Computer Based Test, then verification. CBT expected Oct-Nov 2026
//
// SOURCE CONFLICT LEFT UNRESOLVED (deliberately):
//   Whether all 129 Junior Executive posts are Air Traffic Control. One source
//   states the 129 JE vacancies cover Finance, Law, Operations and Survey &
//   Cartography; another states the 129 are exclusively Air Traffic Control.
//   These cannot both be true. The page states the conflict and points at the
//   notification PDF rather than picking one. The discipline determines
//   eligibility, so guessing here would be the most damaging possible error.
//
// NOT ASSERTED: exact CBT date (AAI had not published it), post-wise or
// region-wise vacancy split, and cutoffs (AAI does not publish them).

import { replaceJob } from "./lib/replace-job.mjs";

const title = "AAI JE ATC 2026: 129 Junior Executive Posts, Apply by 7 Sep";

const description =
  "AAI Recruitment 2026 is out for 389 posts including 129 Junior Executive. Apply online at aai.aero from 8 August to 7 September 2026. CBT expected October.";

const content = `The Airports Authority of India released its 2026 recruitment notification on 22 July for 389 posts, and the application window runs from 8 August to 7 September 2026. The total splits into 260 Manager posts and 129 Junior Executive posts.

If you read earlier coverage saying this notification was still expected, that information is out of date. It is out, the portal is open, and you have until 7 September.

## What is actually on offer

| Item | Detail |
|---|---|
| Notification date | 22 July 2026 |
| Total posts | 389 |
| Manager posts | 260 |
| Junior Executive posts | 129 |
| Application window | 8 August to 7 September 2026 |
| Apply at | aai.aero |
| Junior Executive age limit | Not more than 27 years as on 7 September 2026 |
| Selection | Computer Based Test, then verification |
| CBT | Expected October to November 2026 |

## An important caveat on the Junior Executive disciplines

Published sources contradict each other on which disciplines the 129 Junior Executive posts cover, and we are not going to resolve it by guessing.

One set of coverage states the 129 Junior Executive vacancies span Finance, Law, Operations and Survey and Cartography. Another states the 129 are exclusively Air Traffic Control. Both cannot be correct.

This matters more than any other detail on this page, because the discipline determines your eligibility. A B.Sc in Physics and Mathematics qualifies you for Air Traffic Control and does nothing for a Finance post. Applying on the strength of a wrong assumption wastes the fee and the application.

Open the notification PDF at aai.aero and read the vacancy table before you apply. If a site gives you a confident discipline breakdown without linking the PDF, treat it carefully, because several confident breakdowns currently disagree.

What is not in dispute: the notification exists, it was released on 22 July 2026, the window closes on 7 September 2026, and there are 129 Junior Executive posts in it.

## Junior Executive Air Traffic Control: what the role is

Air Traffic Control is the function that separates aircraft in the air and on the ground. Controllers issue clearances for takeoff, landing, routing and altitude, and they carry direct responsibility for keeping aircraft apart. AAI operates air traffic services across Indian airspace and at airports nationwide.

The work runs in shifts around the clock because airspace does not close. Controllers work rostered rotations including nights, weekends and public holidays. This is worth understanding before you apply, because the shift pattern is a permanent feature of the career rather than an early-career inconvenience.

The role also carries medical and licensing requirements that most government posts do not. Controllers must maintain a medical fitness standard throughout their service, and a change in hearing or speech can end operational duty. That is why the selection includes screening most recruitments do not use.

## Eligibility for Junior Executive Air Traffic Control

AAI has historically set the academic requirement for Air Traffic Control as a full-time bachelor's degree in science with Physics and Mathematics as subjects, or a bachelor's degree in engineering or technology in a stream such as Electronics, Telecommunications, Information Technology or Electrical. Physics and Mathematics at graduation level is the common thread, because the work involves continuous spatial and numerical reasoning.

English proficiency is a hard requirement rather than a preference. Air traffic communication is conducted in English under international standards, and clarity of speech is assessed directly.

Candidates are required to be free of any speech impediment and to meet a hearing standard. A stammer or a hearing deficiency is disqualifying for this specific role, which is not discrimination in the ordinary sense but a consequence of the job being conducted almost entirely through voice communication under time pressure.

The age limit for Junior Executive in this cycle is 27 years as on 7 September 2026, with the standard relaxations for reserved categories.

Confirm every one of these against the notification PDF for this cycle. AAI has varied the eligibility wording between cycles, and the requirement that applies to you is the one printed in the current notification.

## Selection process

The Computer Based Test is the first stage and the one that screens the field. It is expected in October or November 2026, though AAI had not published a date at the time of writing.

The paper for Air Traffic Control typically combines a general aptitude component covering English, general knowledge, reasoning and numerical ability with a subject component drawing on Physics and Mathematics at degree level. The subject portion is where most candidates are separated, because the general component is broadly similar to other recruitment tests while the Physics and Mathematics is not.

Candidates who clear the CBT for Air Traffic Control face a voice test. This assesses clarity, pronunciation and intelligibility of speech in English, conducted by a panel. Candidates underestimate this stage regularly because it is unlike anything in a conventional recruitment, and there is no written syllabus to prepare from. The practical preparation is reading aloud in English daily, recording yourself and listening for clarity rather than accent.

A psychoactive substance test is part of the process for air traffic roles, consistent with the safety-critical nature of the work.

Document verification follows, checking degree, subject combination, age, category and identity. The subject combination check matters here: a science degree without Physics or Mathematics as a full subject can fail at this stage even though the candidate cleared the CBT.

Medical examination applies the fitness standard for the role, including vision and hearing.

## Salary and career progression

Junior Executive at AAI is placed in the E-1 grade on an Industrial Dearness Allowance pay scale, with a pay range of roughly Rs 40,000 to Rs 1,40,000 in basic pay. Gross monthly pay is considerably higher than basic because Industrial Dearness Allowance, house rent allowance, perks and allowances sit on top.

AAI is a public sector undertaking rather than a government department, and this has a real consequence for pay. Employees are on IDA scales revised quarterly against an industrial index, not on the 7th Pay Commission matrix revised through Pay Commissions. The two diverge over time, and PSU pay revision happens through periodic wage settlement specific to the enterprise. Candidates comparing an AAI offer against a central government post on basic pay alone are comparing two different systems.

Air traffic controllers additionally receive allowances specific to the function, reflecting the shift pattern and the responsibility carried.

Progression runs from Junior Executive through Assistant Manager, Manager and the senior executive grades. Controllers also progress through operational ratings and endorsements, which are a parallel professional ladder tied to the facilities and airspace they are qualified to control.

## Training after selection

Selected Air Traffic Control candidates undergo structured training before they hold an operational position. Training covers air traffic management procedures, aviation regulations, meteorology, navigation and simulator work, and is conducted at AAI training establishments.

Training is not a formality. Candidates must qualify at defined checkpoints, and controllers are certified for specific positions rather than being generally licensed. Plan on a substantial period between joining and holding an independent operational role.

## How to apply

Applications run online at aai.aero from 8 August to 7 September 2026. There is no offline route.

Read the notification PDF first and confirm the discipline you are eligible for, given the source conflict described above. This is the step candidates skip and the one that causes wasted applications.

Register with a working email address and mobile number, because AAI sends the registration details and later communication including the call letter there. Prepare your uploads before starting the form: a recent photograph, a signature and the supporting documents in the specified formats and sizes.

Enter your degree, subject combination and percentage exactly as printed on your certificates. The subject combination is checked at verification, so a discrepancy between what you entered and what your marksheet says will surface later at the worst possible moment.

Pay the fee online and confirm the transaction completed. An application with a failed payment is not an application.

Do not submit on 7 September. Portals slow on closing day and payment gateway failures on the final evening are a recurring problem across every recruitment.

## What to do in the weeks before the CBT

The CBT is expected in October or November, which gives roughly two to three months from the application window.

Spend the bulk of that on the Physics and Mathematics component if you are applying for Air Traffic Control, because that is where the field separates. The general aptitude portion overlaps with other competitive exams and most candidates arrive with some baseline in it. The degree-level subject portion is where a candidate who has not opened a Physics textbook since graduation loses the paper.

Work on spoken English in parallel from now rather than after the CBT result. The voice test comes quickly after the CBT result, the gap is not long enough to build clarity from scratch, and unlike the written paper there is no shortcut or question bank for it.

Do not build a detailed sectional time plan from an aggregator's exam pattern table for this recruitment. AAI publishes the pattern in the notification and it has varied between cycles.

## The 260 Manager posts in the same notification

The larger share of this recruitment is at Manager level, and candidates focused on Junior Executive often miss that they may be eligible for both.

Manager posts at AAI sit above Junior Executive in the executive structure and carry a higher pay grade, and they generally require either a longer qualification or prior experience depending on the discipline. Disciplines at Manager level in AAI recruitments have covered engineering streams, finance, law, human resources, commercial and technical functions.

If you hold a professional qualification such as CA, CS, a law degree or an engineering degree with relevant experience, check the Manager vacancy table before defaulting to Junior Executive. The application is separate and the eligibility differs, but the window and the portal are the same, and the pay difference across a career is substantial.

The discipline-wise split for both categories is in the notification PDF. Neither this page nor the aggregator coverage reproduces it reliably.

## How this compares with other routes into aviation and PSUs

Candidates considering Air Traffic Control usually weigh it against a few alternatives, and the comparison is less about pay than about what the working life looks like.

| | AAI Junior Executive ATC | Central government Group B | Other PSU executive entry |
|---|---|---|---|
| Pay system | IDA, revised quarterly | 7th Pay Commission matrix | IDA, revised quarterly |
| Shift work | Yes, permanent, round the clock | Usually not | Varies by role |
| Medical standard | Ongoing, can end operational duty | One-time at entry | Usually one-time |
| Voice or speech screening | Yes | No | Rare |
| Specialised training after joining | Extensive, with qualifying checkpoints | Limited | Varies |

Air Traffic Control is the least interchangeable of these. The training and the operational ratings are specific to the function, which makes lateral movement out of it harder than moving between administrative posts. That cuts both ways: the specialisation protects the role, and it also narrows your options if you later decide the shift pattern does not suit you.

Weigh the shift roster honestly before applying. Candidates who leave air traffic roles overwhelmingly cite the rotation rather than the pay or the responsibility.

## Call letter and exam day

AAI releases the call letter on its portal ahead of the Computer Based Test, downloadable with the credentials you created during registration. It carries the centre, date, shift and reporting time. Keep your registration number and password somewhere reliable, because this recruitment runs across several months and the same login is used at every stage.

Download the call letter when it appears rather than the night before. Server load rises near the exam date, and a printing problem is easier to fix with days in hand.

Carry the printed call letter and one original photo identity document. Photocopies and photographs of an ID on a phone are not accepted. Reporting time is well ahead of the exam start and the gate closes before the paper begins, with no admission afterwards on any grounds.

Leave electronics behind. Phones, smart watches, fitness bands and calculators are barred, and most centres provide no storage.

## Why candidates get rejected

The subject combination is the biggest one for Air Traffic Control. A bachelor's degree in science is not sufficient by itself if Physics and Mathematics were not full subjects, and this is verified against your marksheet at document verification rather than filtered at application. Candidates clear the CBT and then lose the post on a certificate they never re-read.

Applying for the wrong discipline is the second, and it is unusually likely in this cycle because published sources disagree on what the Junior Executive vacancies cover. The notification PDF settles it and nothing else does.

The voice test accounts for a share of losses that surprises people. It has no syllabus and no question bank, which candidates read as meaning it needs no preparation. It needs several weeks of daily practice reading aloud.

Data entered carelessly in the application form causes rejections at verification. Percentages, subject names and dates have to match the certificates exactly.

Late submission and failed payments account for the rest. Both are entirely avoidable and both spike on the closing day.

## Frequently asked questions

**Is the AAI JE ATC 2026 notification out?**

Yes. The Airports Authority of India released its 2026 recruitment notification on 22 July 2026 for 389 posts, comprising 260 Manager and 129 Junior Executive positions. Applications opened on 8 August 2026.

**What is the last date to apply for AAI Junior Executive 2026?**

7 September 2026. The application window opened on 8 August 2026 and runs online at aai.aero. There is no offline route and no late window.

**How many Junior Executive vacancies are there?**

129 Junior Executive posts, within a total of 389 posts that also includes 260 Manager positions. The region-wise split is in the notification PDF rather than in the summary coverage.

**Are all 129 Junior Executive posts for Air Traffic Control?**

Published sources contradict each other on this. One set of coverage states the 129 posts cover Finance, Law, Operations and Survey and Cartography. Another states they are exclusively Air Traffic Control. Because the discipline decides your eligibility, read the vacancy table in the official notification PDF at aai.aero before applying rather than relying on any summary, including this one.

**What is the age limit for AAI Junior Executive 2026?**

Not more than 27 years as on 7 September 2026, with standard relaxation for reserved categories as stated in the notification.

**What qualification is needed for AAI JE Air Traffic Control?**

AAI has historically required a full-time bachelor's degree in science with Physics and Mathematics as subjects, or a bachelor's degree in engineering or technology in a stream such as Electronics, Telecommunications, Information Technology or Electrical. English proficiency is required, and candidates must be free of speech impediment and meet a hearing standard. Confirm against the current notification, since AAI has varied the wording between cycles.

**What is the selection process?**

A Computer Based Test first, expected in October or November 2026. Candidates for Air Traffic Control then face a voice test assessing clarity and intelligibility of spoken English, a psychoactive substance test, document verification and a medical examination applying the fitness standard for the role.

**What is the AAI Junior Executive salary?**

Junior Executive sits in the E-1 grade on an Industrial Dearness Allowance scale, with basic pay running roughly Rs 40,000 to Rs 1,40,000. Gross pay is considerably higher once Industrial Dearness Allowance, house rent allowance and perks are added. AAI is a public sector undertaking, so pay follows IDA scales revised quarterly rather than the 7th Pay Commission matrix.

**Is there a voice test in AAI ATC recruitment?**

Yes, for Air Traffic Control candidates. It assesses clarity, pronunciation and intelligibility of spoken English before a panel, because air traffic communication is conducted in English under international standards. There is no written syllabus for it, so preparation means reading aloud in English daily well before the CBT result.

**Can I apply if my degree does not include Mathematics?**

For Air Traffic Control, a science degree without Physics and Mathematics as full subjects generally does not qualify, and the subject combination is checked at document verification rather than at application. Candidates have cleared the CBT and then failed at verification on this. Check your marksheet against the notification wording before you pay the fee.

**Does AAI publish cutoff marks?**

AAI does not publish cutoff marks the way commissions such as SSC and UPSC do. Figures circulating on coaching sites are reconstructions from candidate reports rather than official releases, so treat them as rough indications and do not build a target score around them.

**What happens after selection?**

Selected Air Traffic Control candidates undergo structured training covering air traffic management procedures, aviation regulations, meteorology, navigation and simulator work at AAI training establishments. Training includes qualifying checkpoints, and controllers are certified for specific operational positions rather than being generally licensed, so expect a substantial period between joining and holding an independent operational role.

**Is Air Traffic Control shift work?**

Yes, permanently. Airspace does not close, so controllers work rostered rotations including nights, weekends and public holidays throughout their career. This is a structural feature of the job rather than an early-career phase, and it is the reason most often cited by people who leave the role.

## Official sources

- Airports Authority of India: https://www.aai.aero
- The AAI Recruitment 2026 notification PDF, which is the authority on the discipline-wise vacancy table, eligibility wording and exam pattern

Where anything on this page conflicts with the notification PDF, the PDF is correct. This page was written on 14 August 2026, and the discipline breakdown in particular is disputed between published sources.`;

const fields = {
  vacancies: 129,
  last_date: "2026-09-07",
  post_name:
    "Junior Executive, 129 posts, within an AAI Recruitment 2026 total of 389 posts that also includes 260 Manager positions. NOTE: published sources contradict each other on whether the 129 Junior Executive posts are exclusively Air Traffic Control or span Finance, Law, Operations and Survey and Cartography. Confirm the discipline in the official notification PDF before applying, since it determines eligibility.",
  eligibility: {
    education:
      "For Junior Executive Air Traffic Control, AAI has historically required a full-time bachelor's degree in science with Physics and Mathematics as subjects, or a bachelor's degree in engineering or technology in a stream such as Electronics, Telecommunications, Information Technology or Electrical. English proficiency is a hard requirement because air traffic communication is conducted in English under international standards. Candidates must be free of any speech impediment and must meet a hearing standard, since the role is conducted almost entirely through voice communication. The subject combination is verified at document verification, so a science degree without Physics or Mathematics as a full subject can fail at that stage even after the CBT is cleared. Eligibility wording has varied between AAI cycles: confirm against the current notification PDF.",
    age: "Not more than 27 years as on 7 September 2026 for Junior Executive, with standard relaxation for reserved categories as stated in the notification.",
  },
  salary:
    "Junior Executive is placed in the E-1 grade on an Industrial Dearness Allowance pay scale, with basic pay running roughly Rs 40,000 to Rs 1,40,000. Gross monthly pay is considerably higher than basic once Industrial Dearness Allowance, house rent allowance, perks and allowances are added, and air traffic controllers receive further allowances specific to the function reflecting the shift pattern and responsibility carried. IMPORTANT: AAI is a public sector undertaking, not a government department, so employees are on IDA scales revised quarterly against an industrial index rather than on the 7th Pay Commission matrix revised through Pay Commissions. The two diverge over time, and PSU pay revision happens through periodic wage settlement specific to the enterprise. Comparing an AAI basic against a central government basic compares two different systems. Progression runs from Junior Executive through Assistant Manager, Manager and the senior executive grades, with controllers also progressing through operational ratings tied to the facilities and airspace they are qualified to control.",
  important_dates: {
    notificationDate: "2026-07-22",
    startDate: "2026-08-08",
    lastDate: "2026-09-07",
    examDate: "Computer Based Test expected October to November 2026. AAI had not published a date as of 14 August 2026.",
    note: "AAI Recruitment 2026 covers 389 posts in total: 260 Manager and 129 Junior Executive. Sources disagree on the Junior Executive discipline split, so read the vacancy table in the notification PDF before applying.",
  },
  how_to_apply:
    "Apply online at aai.aero between 8 August and 7 September 2026. There is no offline route. FIRST read the notification PDF and confirm which discipline the Junior Executive vacancies cover, because published sources contradict each other on this and the discipline determines your eligibility. Register with a working email address and mobile number, since AAI sends registration details and later communication including the call letter there. Prepare uploads before starting the form: a recent photograph, a signature and supporting documents in the specified formats and sizes. Enter your degree, subject combination and percentage exactly as printed on your certificates, because the subject combination is checked at document verification and a discrepancy surfaces there rather than at application. Pay the fee online and confirm the transaction completed, since an application with a failed payment is not an application. Do not submit on 7 September: portals slow on closing day and payment gateway failures on the final evening are a recurring problem.",
  selection_process:
    "**Stage 1: Computer Based Test** Expected October to November 2026, though AAI had not published a date as of 14 August 2026. For Air Traffic Control the paper typically combines a general aptitude component covering English, general knowledge, reasoning and numerical ability with a subject component drawing on Physics and Mathematics at degree level. The subject portion is where the field separates, because the general component overlaps with other competitive exams while the degree-level Physics and Mathematics does not. Confirm the pattern in the notification rather than from an aggregator table, since AAI has varied it between cycles.\n\n**Stage 2: Voice test** Applies to Air Traffic Control candidates. A panel assesses clarity, pronunciation and intelligibility of spoken English, because air traffic communication is conducted in English under international standards. There is no written syllabus to prepare from, so preparation means reading aloud in English daily well before the CBT result. Candidates underestimate this stage regularly.\n\n**Stage 3: Psychoactive substance test** Part of the process for air traffic roles, consistent with the safety-critical nature of the work.\n\n**Stage 4: Document verification** Checks degree, subject combination, age, category and identity. The subject combination check matters here: a science degree without Physics or Mathematics as a full subject can fail at this stage even though the candidate cleared the CBT.\n\n**Stage 5: Medical examination** Applies the fitness standard for the role, including vision and hearing. Controllers must maintain medical fitness throughout service, and a change in hearing or speech can end operational duty.\n\nSelected candidates then undergo structured training covering air traffic management procedures, aviation regulations, meteorology, navigation and simulator work at AAI training establishments. Training is not a formality: candidates must qualify at defined checkpoints, and controllers are certified for specific positions rather than generally licensed.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "aai-je-atc-2026", title, description, content, fields });
