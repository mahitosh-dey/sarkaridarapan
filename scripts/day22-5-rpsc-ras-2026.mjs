// RPSC RAS/RTS 2026 — thin-page fix + data correction + intent repositioning
//
// Verified 2026-08-14.
//
// DEFECTS FIXED
//   vacancies   905 "approximately"  ACTUAL 607 (192 State + 415 Subordinate)
//   last_date   2026-06-01           ACTUAL window ran 4 Jun to 3 Jul 2026
//   content     1065w                now 3000w+
//   framing     written as a pending notification; the notification is out,
//               applications have closed, and prelims is on 6 December 2026,
//               so the page is repositioned to the exam phase
//
// FACTS VERIFIED (corroborated across FreeJobAlert, CareerPower, Testbook,
// Adda247, Class24, Prepp on 2026-08-14):
//   - Rajasthan State and Subordinate Services Combined Competitive Exam 2026
//   - 607 vacancies: 192 State Services, 415 Subordinate Services
//   - Applications 4 June to 3 July 2026 (CLOSED)
//   - Prelims 6 December 2026
//   - Three stages: Prelims, Mains, Interview
//   - Bachelor's degree from a university established under a Central or State Act
//   - Portal: rpsc.rajasthan.gov.in
//
// NOT ASSERTED: post-wise split within the 192/415 figures, mains date (RPSC
// had not announced it), and cutoffs for this cycle. Prelims/mains structure is
// described as RPSC's established pattern with the notification flagged as the
// authority, since RPSC has varied paper weightings between cycles.
//
// MOAT: competitors cover this as a notification/apply page even though the
// window closed on 3 July. With prelims on 6 December, the live search intent
// is preparation and the prelims-is-only-a-filter point, which changes how a
// candidate should allocate four months. That plus the 192/415 split, which
// most coverage states without explaining what it means for post preference.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "RPSC RAS 2026: 607 Posts, Prelims 6 December, Exam Guide";

const description =
  "RPSC RAS 2026 has 607 vacancies across State and Subordinate Services. Applications closed 3 July. Prelims is on 6 December 2026. Full exam structure.";

const content = `The Rajasthan Public Service Commission is recruiting 607 posts through the Rajasthan State and Subordinate Services Combined Competitive Examination 2026, and the preliminary exam is on 6 December 2026. Applications ran from 4 June to 3 July 2026 and that window has closed.

The 607 posts are not one pool. 192 are State Services and 415 are Subordinate Services, and the difference between those two determines the job you end up doing.

## Where this recruitment stands

| Item | Detail |
|---|---|
| Total vacancies | 607 |
| State Services | 192 |
| Subordinate Services | 415 |
| Application window | 4 June to 3 July 2026, closed |
| Prelims | 6 December 2026 |
| Mains | Not announced |
| Stages | Prelims, Mains, Interview |
| Portal | rpsc.rajasthan.gov.in |

If you applied, you have roughly four months to prelims. How you spend them should be shaped by one fact that candidates routinely get wrong, covered in the next section.

## State Services and Subordinate Services are different careers

The 192 State Services posts include Rajasthan Administrative Service, Rajasthan Police Service, Rajasthan Accounts Service and the other Group A state cadres. These are the posts people mean when they say they are preparing for RAS. A Rajasthan Administrative Service officer enters the district administration structure and progresses toward Sub Divisional Magistrate and District Collector level responsibilities.

The 415 Subordinate Services posts are Group B, and include roles such as Block Development Officer, Tehsildar and various departmental officer positions. The work is real administrative work with genuine authority, but the entry grade, the promotion ceiling and the pace of progression differ from the Group A cadres.

The split matters because Subordinate Services accounts for more than two thirds of the vacancies in this cycle. A candidate who prepares thinking only about Rajasthan Administrative Service is aiming at 192 posts while competing in an exam that mostly allocates the other 415. Your preference order, submitted during the process, decides which of these you can be allotted, and preferences are honoured by merit rank.

Read the post list in the notification and rank it honestly. Candidates who list only the glamorous posts and then fail to make that cutoff have removed themselves from posts they would have accepted.

## Prelims on 6 December: what it is and what it is not

The preliminary examination is a single objective paper in General Knowledge and General Science, carrying 200 marks over three hours, with 150 questions and negative marking of one third of a mark for each wrong answer.

Prelims is a screening filter. Its marks do not count towards your final ranking. RPSC calls forward a multiple of the vacancy count for the Mains, and everything from the prelims is then discarded.

That single design fact should govern how you use the next four months, and most candidates use it badly. They optimise for a high prelims score, which is worth nothing beyond crossing the line, and arrive at the Mains without the writing practice that actually decides the outcome. The correct approach is to secure prelims comfortably rather than maximally, and to start Mains answer writing well before the prelims result.

The syllabus is broad: Rajasthan history, art, culture, literature and heritage, Indian history, geography of Rajasthan, India and the world, Indian polity and governance, economy, science and technology, reasoning and mental ability, and current affairs. The Rajasthan-specific component is where the exam separates candidates from other states, and it is the portion with the fewest good national resources.

Negative marking at one third means a low-confidence guess is a losing bet across a full paper. RPSC has also used a system requiring candidates to mark a fifth option where they choose not to answer, with penalties for leaving questions entirely blank. Check the instructions for this cycle in the notification rather than assuming the format from a previous year, because this specific rule has caught out well-prepared candidates.

## Mains and interview: where the result is decided

The Mains is descriptive, not objective, and this is the transition that ends most RAS attempts.

RPSC's established Mains structure runs four papers of 200 marks each, three hours per paper, for 800 marks in total. Three papers cover General Studies across history, culture, economy, polity, administration, science, technology and Rajasthan-specific content, and the fourth covers General Hindi and General English.

The interview carries 100 marks. Final merit is built from the Mains and the interview together, for 900 marks, with nothing carried forward from the prelims.

Paper weightings and the detailed syllabus breakdown are set out in the official notification, and RPSC has varied them between cycles. Use that document rather than a summary when you plan your Mains preparation.

The practical difficulty of the Mains is not knowledge. It is producing structured, legible, time-bound answers in a fixed word count under exam pressure, in Hindi or English, across twelve hours of writing spread over four papers. That skill is built by writing answers and having them evaluated, not by reading more material. Candidates who postpone answer writing until after the prelims result have around two months to build a skill that takes longer.

The General Hindi and General English paper is treated as an afterthought by candidates who are fluent in both, and it should not be. It carries the same 200 marks as a General Studies paper and it is the most predictable paper on the list, which makes it the cheapest marks in the entire examination.

## A four month plan to 6 December

You have roughly sixteen weeks from mid August. Here is how to divide them.

Spend the first eight weeks on syllabus coverage with an emphasis on the Rajasthan-specific portions, because that is the material with the weakest available resources and the longest lead time. Work through Rajasthan history, art, culture, geography, polity and economy properly rather than skimming. Run current affairs alongside at a steady daily volume rather than saving it for a compressed revision block.

Start Mains answer writing in parallel from now, at a low volume, perhaps two answers a week. This feels premature and it is the single highest-return thing you can do. You are not trying to finish the Mains syllabus. You are building the habit of structuring an answer and finishing it inside the time limit, so that the skill exists when you need it in earnest.

Use weeks nine through fourteen for full-length prelims mocks under real conditions, scored with the negative marking applied honestly. Analyse each one for the topics you got wrong rather than for the score. Raise answer writing to three or four answers a week in this block.

Keep the final two weeks for revision only. Do not start new topics. Revise your notes, your error log and current affairs, and sit two or three final mocks to hold your timing.

If your prelims mock scores are comfortably clear of previous cutoff levels by week twelve, shift more time into Mains preparation rather than pushing the prelims score higher. Marks above the prelims cutoff have no value.

## Eligibility

A bachelor's degree from a university established under a Central or State Act in India, or an equivalent qualification recognised by the government, is the academic requirement. The degree must be held at the point specified in the notification.

The age band for most posts runs from 21 years, with an upper limit that varies by post and category. Rajasthan applies its own relaxation structure, which is more generous in several respects than the central pattern, including additional relaxation for women candidates and for candidates from reserved categories within the state. Because the upper limit varies by post, check it for the specific posts you have ranked rather than assuming a single figure.

Knowledge of Hindi written in Devanagari script and familiarity with Rajasthani culture is a stated requirement for these services, which is consistent with the work being conducted in Hindi at the district level.

Confirm every one of these against the notification for this cycle. RPSC has varied eligibility wording between cycles and the version that binds you is the one in the current notification.

## Salary

State Services posts at Group A entry sit on the Rajasthan pay matrix at a level comparable to other state civil service entry grades, with gross monthly pay well above the basic once dearness allowance, house rent allowance and other allowances are added. Subordinate Services posts enter at a lower level on the same matrix.

Beyond the monthly figure, these posts carry pension provision, medical benefits, and in field postings an official residence or a housing allowance, along with the authority attached to district administration roles. For most candidates the attraction is the responsibility and the security rather than the pay, which is lower than a comparable private sector role at the same age.

Exact pay levels by post are stated in the notification. Figures circulating on coaching sites are frequently drawn from older pay structures.

## The Rajasthan-specific portion, which decides the exam

Every candidate sitting this exam has access to the same national General Studies material. The Rajasthan portion is where the field actually separates, and it is the part with the thinnest supply of good resources.

The scope covers Rajasthan history from the Rajput kingdoms through the integration of the princely states, the freedom movement within Rajasthan, art and architecture, folk traditions, fairs and festivals, dialects and literature, saints and religious movements, geography including the Aravalli system, desert ecology, rivers, soils, minerals and irrigation projects, the state's political and administrative structure, panchayati raj in Rajasthan, and the state economy including agriculture, industry and the schemes run by the state government.

Two things make this material harder than its volume suggests. It is fragmented across sources of uneven quality, and questions often turn on specific detail rather than broad understanding, which rewards systematic note-making over reading widely.

Rajasthan-specific current affairs deserve separate treatment from national current affairs. State budget announcements, new state schemes, appointments, awards and sporting achievements within Rajasthan appear regularly, and national current affairs compilations do not cover them. Follow a state-level source daily and keep the notes separate.

Board and state government publications on Rajasthan history, geography and economy are the primary material here. Coaching compilations are useful for revision but should not be the base layer, because errors propagate between them.

## How RAS compares with UPSC CSE and other state exams

Candidates preparing for RAS often prepare for UPSC Civil Services simultaneously, and the overlap is genuine but smaller than it appears.

| | RPSC RAS | UPSC CSE |
|---|---|---|
| Prelims papers | One objective paper | Two papers, one a qualifying aptitude test |
| Prelims counts to merit | No | No |
| Mains papers | Four, 800 marks | Nine, with two qualifying |
| Optional subject | None | One, two papers |
| Interview | 100 marks | 275 marks |
| State-specific content | Substantial | Limited |

The absence of an optional subject is the largest structural difference and it favours RAS candidates in time terms, since a UPSC optional consumes months. The substantial Rajasthan component runs the other way, because that material earns nothing in the UPSC exam.

The sensible approach for a candidate targeting both is to treat the shared General Studies as one preparation, and to treat the Rajasthan portion and the UPSC optional as two separate specialised tracks rather than pretending either is covered by the other.

## Admit card and exam day

RPSC releases the preliminary examination admit card on rpsc.rajasthan.gov.in ahead of the 6 December exam, downloadable with the credentials created during application through the Rajasthan Single Sign On system. Keep those credentials accessible, since the same login runs through every stage of a process that extends well into next year.

Download the admit card when it appears rather than in the final days. It carries the centre address, reporting time and exam timing, and the reporting time is the deadline that binds rather than the exam start time.

Carry the printed admit card and one original photo identity document. Photocopies and photographs of an ID on a phone are not accepted, and gates close before the exam begins with no admission afterwards.

RPSC applies strict rules on clothing, footwear and accessories at its examination centres, tighter than most national recruitment bodies, and these are specified in the admit card instructions. Read them rather than assuming from another exam, because candidates are turned away at RPSC centres over items that would pass elsewhere.

Electronic devices of every kind are barred, including smart watches and fitness bands, and centres generally provide no storage.

## Mistakes that cost candidates this exam

Optimising for a high prelims score. Marks above the cutoff are worth nothing, and time spent earning them is time not spent on the Mains, which decides the result.

Postponing answer writing until the prelims result. That leaves roughly two months to build a skill that takes considerably longer, and it is the most common reason strong candidates fail the Mains.

Treating the General Hindi and General English paper as free marks that need no work. It carries the same 200 marks as a General Studies paper and it is the most predictable paper in the examination, which makes it the cheapest available marks.

Ranking only the senior-most posts in the preference order. Subordinate Services is 415 of the 607 posts, and a preference list that ignores them removes you from most of the cycle.

Reading national current affairs and assuming Rajasthan is covered. It is not, and the state-specific questions are the ones other candidates get wrong too, which makes them the highest-value marks available.

Building a plan from a previous year's paper pattern. RPSC has varied weightings and the marking rule for unanswered questions between cycles, and the notification is the only authority.

## Frequently asked questions

**How many vacancies are there in RPSC RAS 2026?**

607 in total: 192 State Services posts and 415 Subordinate Services posts. Subordinate Services accounts for more than two thirds of the cycle, which is worth factoring into your post preference order.

**Can I still apply for RPSC RAS 2026?**

No. Applications ran from 4 June to 3 July 2026 and the window has closed. There is no late route. The preliminary examination for those who applied is on 6 December 2026.

**When is the RPSC RAS 2026 prelims exam?**

6 December 2026. The Mains date had not been announced as of 14 August 2026. Admit cards are released on rpsc.rajasthan.gov.in ahead of the exam.

**Do prelims marks count towards the final RAS merit list?**

No. The preliminary examination is a screening filter only. Final merit is built from the Mains, worth 800 marks across four papers, and the interview, worth 100 marks, for a total of 900. Nothing from the prelims carries forward.

**What is the RPSC RAS prelims exam pattern?**

A single objective paper in General Knowledge and General Science, 150 questions, 200 marks, three hours, with negative marking of one third of a mark per wrong answer. RPSC has used a rule requiring candidates to mark a fifth option when not answering, with a penalty for leaving questions entirely blank, so read the instructions for this cycle rather than assuming from a previous year.

**What is the difference between State Services and Subordinate Services?**

State Services are the Group A cadres, including Rajasthan Administrative Service, Rajasthan Police Service and Rajasthan Accounts Service, and account for 192 of the 607 posts. Subordinate Services are Group B, including posts such as Block Development Officer and Tehsildar, and account for 415. They differ in entry grade, promotion ceiling and progression pace, and your preference order decides which you can be allotted.

**What is the RPSC RAS mains exam structure?**

RPSC's established pattern is four descriptive papers of 200 marks each, three hours per paper, totalling 800 marks. Three cover General Studies including substantial Rajasthan-specific content, and the fourth covers General Hindi and General English. Paper weightings have varied between cycles, so confirm against the official notification.

**What qualification is required for RPSC RAS?**

A bachelor's degree from a university established under a Central or State Act in India, or an equivalent recognised qualification. Knowledge of Hindi written in Devanagari script and familiarity with Rajasthani culture is a stated requirement for these services.

**How should I prepare in the four months before prelims?**

Cover the syllabus in the first eight weeks with emphasis on Rajasthan-specific material, which has the weakest available resources. Start Mains answer writing now at a low volume rather than after the prelims result, because it is a skill that takes months to build. Move to full-length prelims mocks from week nine, and keep the last two weeks for revision only.

**Is there negative marking in RPSC RAS?**

Yes, one third of a mark is deducted for each wrong answer in the preliminary examination. Across a 150 question paper, low-confidence guessing is a losing strategy. Check the current notification for the rule on unmarked questions, which RPSC has applied differently in some cycles.

**Does RPSC publish previous year cutoffs?**

RPSC publishes cutoff marks after each cycle concludes, and they vary by category and by service. Cutoffs move with paper difficulty, applicant volume and the vacancy count, and the 607 vacancies in this cycle are the relevant denominator rather than any earlier year's figure. Treat historical cutoffs as a rough orientation for your mock scores, not as a target.

**Can I write the mains in Hindi?**

Yes. The Mains may be written in Hindi or English, and candidates are not disadvantaged by choosing Hindi, since district administration in Rajasthan is conducted in Hindi and the paper is evaluated accordingly. Choose the language you write faster and more precisely in, and then practise in that language rather than switching between them.

## Official sources

- Rajasthan Public Service Commission: https://rpsc.rajasthan.gov.in
- The RAS 2026 notification PDF, which is the authority on the post-wise vacancy table, age limits by post, paper weightings and the marking rule for unanswered questions

Where a figure on this page conflicts with the notification, the notification is correct. This page was written on 14 August 2026 and RPSC issues corrigenda mid-cycle.`;

const fields = {
  vacancies: 607,
  last_date: "2026-07-03",
  post_name:
    "607 posts in the Rajasthan State and Subordinate Services Combined Competitive Examination 2026: 192 State Services (Group A, including Rajasthan Administrative Service, Rajasthan Police Service and Rajasthan Accounts Service) and 415 Subordinate Services (Group B, including posts such as Block Development Officer and Tehsildar).",
  eligibility: {
    education:
      "A bachelor's degree from a university established under a Central or State Act in India, or an equivalent qualification recognised by the government, held at the point specified in the notification. Knowledge of Hindi written in Devanagari script and familiarity with Rajasthani culture is a stated requirement for these services, consistent with district-level administration being conducted in Hindi.",
    age: "From 21 years, with an upper limit that VARIES BY POST and category, so check the limit for the specific posts you have ranked rather than assuming a single figure. Rajasthan applies its own relaxation structure, which is more generous in several respects than the central pattern, including additional relaxation for women candidates and for candidates from reserved categories within the state. Confirm against the current notification.",
  },
  salary:
    "State Services posts at Group A entry sit on the Rajasthan pay matrix at a level comparable to other state civil service entry grades, with gross monthly pay well above basic once dearness allowance, house rent allowance and other allowances are added. Subordinate Services posts enter at a lower level on the same matrix. The posts carry pension provision, medical benefits, and in field postings an official residence or housing allowance, along with the authority attached to district administration roles. Exact pay levels by post are stated in the notification: figures circulating on coaching sites are frequently drawn from older pay structures.",
  important_dates: {
    startDate: "2026-06-04",
    lastDate: "2026-07-03",
    examDate: "Preliminary examination on 6 December 2026. Mains date not announced as of 14 August 2026.",
    note: "Applications closed on 3 July 2026. This recruitment is in the preparation phase ahead of the 6 December prelims. Admit cards are released on rpsc.rajasthan.gov.in ahead of the exam.",
  },
  how_to_apply:
    "Applications for RPSC RAS 2026 ran from 4 June to 3 July 2026 and the window has closed. There is no late route. Candidates who applied should watch rpsc.rajasthan.gov.in for the preliminary examination admit card ahead of the 6 December 2026 exam. For a future cycle: register on the RPSC portal through the Rajasthan Single Sign On system, wait for the RAS notification, complete the application within the window, and rank your post preferences carefully since preferences are honoured strictly by merit rank and Subordinate Services accounts for more than two thirds of the vacancies. Candidates who rank only the senior-most posts and miss that cutoff remove themselves from posts they would have accepted. Pay the fee online and confirm the transaction completed before the deadline.",
  selection_process:
    "**Stage 1: Preliminary examination** on 6 December 2026. A single objective paper in General Knowledge and General Science, 150 questions, 200 marks, three hours, with negative marking of one third of a mark per wrong answer. RPSC has in some cycles required candidates to mark a fifth option where they choose not to answer, with a penalty for leaving questions entirely blank: read the instructions for this cycle rather than assuming from a previous year. Prelims is a SCREENING FILTER ONLY. Its marks do NOT count towards the final merit list, and RPSC calls forward a multiple of the vacancy count for the Mains.\n\n**Stage 2: Main examination** Descriptive, not objective. RPSC's established structure is four papers of 200 marks each, three hours per paper, totalling 800 marks: three covering General Studies across history, culture, economy, polity, administration, science and technology with substantial Rajasthan-specific content, and a fourth covering General Hindi and General English. Paper weightings and the detailed syllabus have varied between cycles, so confirm against the official notification. The practical difficulty is not knowledge but producing structured, legible, time-bound answers across twelve hours of writing, which is a skill built by writing and having answers evaluated rather than by reading more material.\n\n**Stage 3: Interview** 100 marks.\n\n**Final merit** is built from the Mains (800) and the interview (100) for a total of 900 marks. Nothing from the preliminary examination carries forward. Post allocation follows from merit rank applied against the preference order submitted during the process.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "rpsc-rasrts-2026", title, description, content, fields });
