// Allahabad High Court RO/ARO/CA 2026 — thin-page fix + major data correction
//
// Verified 2026-08-18.
//
// DEFECT
//   vacancies  2023        ACTUAL 543  (RO 138, ARO 380, Computer Assistant 25)
//              The stored 2023 was a year sitting in a count field, and it had
//              propagated into the title ("2,023 RO, ARO & CA Posts") and the
//              description. Wrong by roughly 1,480 posts.
//   last_date  2026-06-01  ACTUAL 2026-06-21. The stored date was the START of
//              the application window, not its close.
//
// FACTS VERIFIED (High Court notification; corroborated across Testbook,
// Lawctopus, Careerera, OnlineForms, AllGovJobNews and the Court's own PDF on
// 2026-08-18):
//   - 543 vacancies: Review Officer 138, Assistant Review Officer 380,
//     Computer Assistant 25
//   - Applications 1 June to 21 June 2026; fee payment to 22 June 2026 (CLOSED)
//   - Age 21 to 35 as on 1 July 2026; minimum 18 for Computer Assistant
//   - Bachelor's degree plus a computer qualification (diploma/degree in
//     Computer Science, NIELIT/DOEACC 'O' Level, or CCC)
//   - Fee Rs 1200 General/OBC, Rs 1000 EWS/SC/ST
//   - Selection: Preliminary, Mains, Computer Knowledge Test
//   - Conducted through NTA at exams.nta.nic.in/allhcre
//
// NOT ASSERTED: exam dates (the Court and NTA had not published a schedule as
// of 18 Aug 2026), category-wise vacancy split, and cutoffs.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "Allahabad High Court RO ARO 2026: 543 Posts, Exam Guide";

const description =
  "Allahabad High Court 2026 has 543 posts: 138 RO, 380 ARO and 25 Computer Assistant. Applications closed 21 June 2026. Exam runs through NTA. Full guide.";

const content = `The High Court of Judicature at Allahabad is recruiting 543 posts across Review Officer, Assistant Review Officer and Computer Assistant. Applications ran from 1 June to 21 June 2026, with fee payment open until 22 June, and that window has closed.

The examination is conducted through the National Testing Agency rather than by the Court directly, which is a detail that matters for where you look for your admit card and result.

## What is on offer

| Post | Vacancies |
|---|---|
| Review Officer | 138 |
| Assistant Review Officer | 380 |
| Computer Assistant | 25 |
| Total | 543 |

Assistant Review Officer accounts for the large majority of the recruitment. Candidates who applied thinking primarily about Review Officer should understand that ARO is where most selections will happen.

If you saw a figure of 2,023 posts on this page previously, that was wrong and has been corrected. The correct total is 543.

## Why the vacancy number on this page changed

This page previously stated 2,023 posts. That figure was wrong and it is worth being explicit about why, because the same error pattern shows up across recruitment sites.

The number 2023 was a year that had ended up in a vacancy field, and once there it propagated into the page title and the description as though it were a real count. Nothing about it was ever sourced. The actual total, confirmed against the Court's notification and multiple independent reports, is 543.

The practical consequence for a candidate is not small. A recruitment of 2,023 posts and one of 543 posts are very different propositions when you are deciding where to spend a preparation cycle, and a candidate who chose this examination on the strength of the larger figure was choosing on false information.

The wider lesson applies to every recruitment page you read, including this one. Vacancy figures and deadlines are the two fields most likely to be wrong on aggregator sites, because they are entered by hand, they change through corrigenda, and nothing forces them to be updated when they do. Check both against the official notification before you commit time to an examination, and treat a number that appears without a linked source as unverified.

## Where this recruitment stands

| Item | Detail |
|---|---|
| Application window | 1 June to 21 June 2026, closed |
| Fee payment deadline | 22 June 2026, closed |
| Age reference date | 1 July 2026 |
| Examination portal | exams.nta.nic.in/allhcre |
| Exam dates | Not announced as of 18 August 2026 |
| Stages | Preliminary, Mains, Computer Knowledge Test |

Neither the Court nor NTA had published an examination schedule at the time of writing. Any specific date quoted elsewhere is an estimate rather than an announcement.

## What these posts actually do

Review Officer and Assistant Review Officer are court administrative posts. The work is documentary and procedural: examining case files, checking that filings comply with the rules of the Court, preparing notes, maintaining registers and supporting the judicial process on the administrative side.

This is not a judicial post. You are not adjudicating anything and a law degree is not required. What the work demands is precision with documents, familiarity with procedure, and the patience to apply rules consistently across a very large volume of files.

Computer Assistant is a technical support role within the same establishment, and it carries a lower minimum age of 18 rather than 21.

The attraction of High Court establishment posts is the combination of a stable central-standard pay structure, the working environment of a constitutional institution, and promotion prospects within the Court's own hierarchy. The trade is that the work is procedural rather than varied.

## Eligibility

The academic requirement is a bachelor's degree from a university established by law in India.

Alongside the degree, you need a computer qualification: a diploma or degree in Computer Science, an 'O' Level certificate from NIELIT or DOEACC, or a CCC certificate in Computer Science from a recognised institution. This is a genuine requirement rather than a preference, and it is verified, so a candidate with a strong degree and no computer certificate does not qualify.

The age band runs from 21 to 35 years as on 1 July 2026, with the minimum reduced to 18 for Computer Assistant. Relaxation applies for reserved categories as stated in the notification.

Because eligibility is defined against a fixed reference date, a candidate who turned 36 in, say, August 2026 was still eligible if they were within the limit on 1 July. Candidates routinely miscalculate this by using the application date instead.

## Application fee

Rs 1200 for General and OBC candidates, Rs 1000 for EWS, SC and ST candidates, paid online. The payment window closed on 22 June 2026, one day after the application window.

That one-day gap between the form deadline and the fee deadline catches people. An application submitted on 21 June with an unpaid fee is not a completed application, and the extra day exists to let candidates finish a payment that failed rather than to extend the application itself.

## Selection process

Three stages, and the structure rewards different things at each.

The Preliminary Examination screens the field. It is objective and its marks do not carry into the final merit list, so the only objective is to clear it comfortably rather than maximally.

The Main Examination decides your rank. It is the stage where preparation converts into position, and everything from the preliminary stage falls away.

The Computer Knowledge Test assesses practical computing competence. Candidates persistently underestimate this stage because it sits last and sounds administrative, but a recruitment that requires a computer qualification at entry is going to test it seriously at selection.

Because the examination runs through NTA, admit cards, response sheets and results appear on the NTA portal at exams.nta.nic.in/allhcre rather than on the Court's own site. Candidates watching only allahabadhighcourt.in will miss releases.

## What to prepare, given no exam date

With no schedule published, the sensible approach is to build the durable parts of the preparation rather than to peak for a date that does not exist yet.

General studies and current affairs run continuously and reward steady accumulation. Hindi and English language ability, including comprehension and formal writing, underpins both the preliminary and main stages and is slow to build.

Give the computer component real attention rather than treating it as a formality at the end. Practical familiarity with word processing, spreadsheets, operating system basics, internet and email usage, and general computing concepts is what the Computer Knowledge Test assesses, and it is learnable in a way that is hard to cram late.

Keep your registration credentials accessible. This process began in June and will run for months, and the same login carries through admit cards and results across every stage.

Watch the NTA portal on a fixed schedule rather than waiting for a notification, because NTA publishes and does not individually notify.

## How this compares with other court and administrative recruitment

| | Allahabad HC RO/ARO | State PSC clerical | SSC CGL Assistant grades |
|---|---|---|---|
| Employer | High Court establishment | State government | Central government |
| Law degree needed | No | No | No |
| Computer qualification | Required at entry | Varies | Not usually |
| Nature of work | Court procedure and files | General administration | Ministry administration |
| Selection stages | Prelims, Mains, computer test | Varies by state | Tier 1, Tier 2, skill test |

The distinguishing feature here is the mandatory computer qualification at the application stage, which narrows the applicant pool relative to comparable administrative recruitments. A candidate who already holds an 'O' Level or CCC certificate is competing against a smaller field than the headline applicant numbers for general administrative posts would suggest.

The work itself is more specialised than general administration. Court procedure is a body of knowledge that transfers well within the judicial system and less well outside it, which is worth weighing if you expect to move between departments later in a career.

## The preliminary and main stages in more detail

The Court has used a three stage structure for these posts, and understanding what each stage is for changes how you should allocate preparation.

The preliminary paper is a filter. It is objective, it covers general studies, general awareness, reasoning and language ability at a level appropriate to a graduate recruitment, and its function is to reduce a very large applicant pool to a manageable number for the main examination. Scoring far above the cutoff earns nothing. Failing to reach it ends the attempt regardless of how well prepared you are for the later stages.

The main examination is where the recruitment is actually decided. It tests the same broad areas at greater depth, with a heavier weighting on language ability, comprehension and written expression in both Hindi and English, because the work itself is documentary. A candidate who can read a file accurately and write a clear note is demonstrating the core competence of the post.

The computer knowledge test is practical rather than theoretical. It is checking that you can actually operate the tools the job uses, which is consistent with the recruitment requiring a computer qualification before you could even apply.

Confirm the paper structure, marks and syllabus in the official notification for this cycle rather than from a summary. Court recruitments vary their pattern between cycles more than the large national commissions do, and material describing an earlier Allahabad High Court examination may not describe this one.

## Language ability carries more weight than candidates expect

For a documentary post, language is not a side subject. It is the job.

Review Officers and Assistant Review Officers read filings, check them against procedural rules, and produce written notes that other people rely on. An error of comprehension or an ambiguous note has consequences inside a judicial process. That is why the examination weights comprehension and written expression heavily, in both Hindi and English.

Candidates who are fluent speakers routinely under-prepare this. Fluency is not the same as formal written accuracy, and the examination tests the latter: precis, comprehension of dense procedural text, grammar, and the ability to write plainly without losing precision.

The practical preparation is reading formal Hindi and English prose regularly and writing summaries of it. This is slow to build and cannot be crammed, which is an argument for starting it now given no examination date has been announced.

## What happens after selection

Selected candidates join the establishment of the High Court rather than a state government department, which has a few practical consequences worth knowing before you plan a career around it.

The posting is at the Court, so the geography is fixed rather than transferable across a state in the way a general administrative post would be. Candidates who value stability of location will see that as an advantage and those expecting variety will not.

Promotion runs within the Court's own hierarchy. The progression is real but the ladder is specific to the judicial establishment, and lateral movement into general state administration is not the normal route.

The work builds expertise in court procedure, which is genuinely valuable within the judicial system and less transferable outside it. That specialisation is the trade you are making, and it is worth making deliberately rather than by accident.

## A note on preparing without a schedule

It is genuinely uncomfortable to prepare for an examination with no announced date, and candidates handle it badly in two opposite directions.

Some treat the absence of a date as permission to postpone, and then find themselves with a few weeks' notice when NTA publishes. Court and NTA schedules can appear with relatively short lead time, and a candidate starting from cold at that point is at a real disadvantage against one who has been working steadily.

Others burn out by preparing at examination intensity for months on an open-ended timeline. That is not sustainable and it produces diminishing returns long before the date arrives.

The workable middle is to build the slow-moving components at a moderate, sustainable pace: language ability, comprehension, general awareness accumulated daily, and practical computer familiarity. All of these improve gradually and none of them can be compressed. Save the high-intensity revision and full-length mock practice for when a date exists.

Check the NTA portal on a fixed schedule, weekly rather than daily, so that you learn of the announcement promptly without the anxiety of constant refreshing.

## Common mistakes

Calculating age against the application date rather than the 1 July 2026 reference date. The reference date is what governs.

Assuming the computer qualification is optional or can be produced later. It is an eligibility condition, checked at verification.

Submitting the form on the final day and leaving the fee unpaid. The application is incomplete without a successful payment, and the extra fee day is not an application extension.

Watching the Court website for exam updates. The examination runs through NTA and releases appear on the NTA portal.

Treating the Computer Knowledge Test as a formality. It is a real stage in a recruitment that already required a computer qualification to apply.

Preparing only for Review Officer. Assistant Review Officer is 380 of the 543 posts and is where most selections happen.

## Frequently asked questions

**How many vacancies are there in the Allahabad High Court RO ARO 2026 recruitment?**

543 in total: 138 Review Officer, 380 Assistant Review Officer and 25 Computer Assistant. Assistant Review Officer accounts for the large majority of the recruitment.

**Can I still apply?**

No. Applications ran from 1 June to 21 June 2026 and fee payment closed on 22 June 2026. There is no late route.

**When is the exam?**

Neither the High Court nor NTA had published an examination schedule as of 18 August 2026. Any date quoted elsewhere is an estimate. Admit cards and the schedule will appear on the NTA portal at exams.nta.nic.in/allhcre.

**Do I need a law degree?**

No. These are court administrative posts, not judicial posts. The requirement is a bachelor's degree in any discipline from a university established by law in India, together with a computer qualification.

**What computer qualification is required?**

A diploma or degree in Computer Science, an 'O' Level certificate from NIELIT or DOEACC, or a CCC certificate in Computer Science from a recognised institution. This is an eligibility condition verified at document verification, not a preference.

**What is the age limit?**

21 to 35 years as on 1 July 2026, with the minimum reduced to 18 for Computer Assistant, and relaxation for reserved categories as stated in the notification. The reference date governs, not the date you applied.

**What is the application fee?**

Rs 1200 for General and OBC candidates and Rs 1000 for EWS, SC and ST candidates, paid online. Payment closed on 22 June 2026, one day after the application deadline, and an application with an unpaid fee is incomplete.

**What is the selection process?**

A Preliminary Examination that screens the field, a Main Examination that decides the merit list, and a Computer Knowledge Test. Preliminary marks do not carry into the final ranking.

**Where do I download the admit card?**

From the NTA portal at exams.nta.nic.in/allhcre, using the credentials created during the application. The examination is conducted through NTA rather than by the Court directly, so watching only the Court website will cause you to miss releases.

**What does a Review Officer actually do?**

Court administrative work: examining case files, checking that filings comply with the rules of the Court, preparing notes and maintaining registers. It supports the judicial process on the administrative side rather than adjudicating anything, which is why no law degree is required.

**Is Assistant Review Officer a promotion post from Computer Assistant?**

They are separate posts recruited in the same examination with different eligibility, not steps on one ladder. Computer Assistant carries a lower minimum age of 18 against 21 for the other posts. Promotion within the Court establishment follows the Court's own hierarchy and service rules rather than movement between these entry posts.

**Will there be a fresh notification if the exam is delayed?**

A delay in scheduling does not reopen the application window. The 543 posts advertised in this cycle will be filled from the candidates who applied between 1 and 21 June 2026. If you missed it, the next opportunity is a future notification, which the Court publishes on its own site and through NTA.

**How competitive is this recruitment?**

The mandatory computer qualification narrows the pool relative to comparable graduate administrative recruitments, since candidates without an 'O' Level, CCC or equivalent could not apply at all. That said, 543 posts against a graduate applicant pool in Uttar Pradesh remains heavily competitive, and Assistant Review Officer at 380 posts is where the bulk of selections will fall.

**Does the Computer Knowledge Test carry marks towards the merit list?**

Confirm this against the official notification for the current cycle, since court recruitments vary the treatment of practical tests between cycles and some are qualifying while others contribute. What is consistent is that the test is a real stage and failing it removes you from selection regardless of your written performance.

**Can candidates from outside Uttar Pradesh apply?**

The recruitment is by the High Court of Judicature at Allahabad, and eligibility conditions including any domicile or reservation provisions are set out in the notification. Reservation benefits under state rules generally apply to candidates domiciled in the state, while the unreserved pool is open more broadly. Check the notification wording against your own position rather than assuming.

## Official sources

- High Court of Judicature at Allahabad: https://www.allahabadhighcourt.in
- Examination portal, National Testing Agency: https://exams.nta.nic.in/allhcre
- The recruitment notification PDF, which is the authority on the category-wise vacancy split, eligibility wording and relaxation

Where a figure on this page conflicts with the notification, the notification is correct.`;

const fields = {
  vacancies: 543,
  last_date: "2026-06-21",
  post_name:
    "Review Officer (138 posts), Assistant Review Officer (380 posts) and Computer Assistant (25 posts) in the establishment of the High Court of Judicature at Allahabad. Assistant Review Officer accounts for the large majority of the recruitment.",
  eligibility: {
    education:
      "A bachelor's degree from a university established by law in India, TOGETHER WITH a computer qualification: a diploma or degree in Computer Science, an 'O' Level certificate from NIELIT or DOEACC, or a CCC certificate in Computer Science from a recognised institution. The computer qualification is an eligibility condition verified at document verification, not a preference, so a candidate with a strong degree and no computer certificate does not qualify. No law degree is required: these are court administrative posts, not judicial posts.",
    age: "21 to 35 years as on 1 July 2026, with the minimum reduced to 18 years for Computer Assistant, and relaxation for reserved categories as stated in the notification. The reference date governs rather than the date of application, which candidates routinely miscalculate.",
  },
  application_fee:
    "Rs 1200 for General and OBC candidates. Rs 1000 for EWS, SC and ST candidates. Paid online. The fee window closed on 22 June 2026, one day after the application deadline: that extra day exists to let a failed payment be completed, not to extend the application itself, and a form submitted without a successful payment is incomplete.",
  important_dates: {
    startDate: "2026-06-01",
    lastDate: "2026-06-21",
    feeLastDate: "2026-06-22",
    ageReferenceDate: "2026-07-01",
    examDate: "Not announced as of 18 August 2026",
    note: "The examination is conducted through the National Testing Agency, so admit cards, response sheets and results appear at exams.nta.nic.in/allhcre rather than on the Court's own website. Candidates watching only allahabadhighcourt.in will miss releases.",
  },
  how_to_apply:
    "Applications ran from 1 June to 21 June 2026 with fee payment open to 22 June 2026, and the window has closed. There is no late route. Candidates who applied should watch the NTA portal at exams.nta.nic.in/allhcre for the examination schedule and admit card, since neither the Court nor NTA had published a schedule as of 18 August 2026, and NTA publishes without individually notifying. Keep the registration credentials created during the application accessible, because the same login carries through admit cards and results across every stage of a process that will run for months.",
  selection_process:
    "**Stage 1: Preliminary Examination** Objective. Screens the field. Marks do NOT carry into the final merit list, so the objective is to clear it comfortably rather than maximally.\n\n**Stage 2: Main Examination** Decides the merit list and your rank. Everything from the preliminary stage falls away.\n\n**Stage 3: Computer Knowledge Test** Assesses practical computing competence, covering word processing, spreadsheets, operating system basics, internet and email usage and general computing concepts. Candidates underestimate this stage because it sits last and sounds administrative, but a recruitment that requires a computer qualification at entry tests it seriously at selection.\n\n**Document verification** Checks the degree, the computer qualification, age against the 1 July 2026 reference date, category and identity.\n\nThe entire examination is conducted through the National Testing Agency at exams.nta.nic.in/allhcre.",
  reading_time: "11 min read",
};

await replaceJob({ slug: "allahabad-high-court-roaroca-2026", title, description, content, fields });
