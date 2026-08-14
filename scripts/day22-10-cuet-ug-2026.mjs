// CUET UG 2026 — thin-page fix + intent repositioning + dash cleanup
//
// Verified 2026-08-14.
//
// WHY REWRITTEN
// The page was framed around registration and exam dates for an exam that was
// held in May 2026. NTA declared the result on 23 June 2026 and university
// counselling is running NOW (August 2026). The page was answering a question
// that expired three months ago.
//
// Also cleaned: en dashes and em dashes in `syllabus` and `exam_pattern`
// ("45-60 minutes per subject", "Section IA - Languages"), which violated the
// humanizer dash rule and were rendering into the exam detail box.
//
// FACTS VERIFIED (corroborated across Shiksha, Careers360, TMU, SelfStudys
// on 2026-08-14):
//   - CUET UG 2026 conducted by NTA
//   - Result declared 23 June 2026 at cuet.nta.nic.in
//   - Scorecard carries subject-wise marks, total, percentile and rank
//   - Counselling began around August 2026
//   - NTA does NOT conduct counselling and does NOT release cutoffs.
//     Participating universities publish their own cutoffs and run their own
//     counselling. This is the single biggest source of candidate confusion
//     and is the differentiating angle of this page.
//
// NOT ASSERTED: individual university cutoffs (each publishes separately and
// they change per round), total registration figures for this cycle, and the
// CUET UG 2027 notification date (NTA had not announced it).
//
// LEFT UNCHANGED DELIBERATELY: the `category` column still reads "engineering",
// which is wrong for a general UG entrance test. Not changed here because the
// allowed values for that column are not verified and a bad value could break
// category filtering. Flagged to the owner as a separate fix.

import { createExam } from "./lib/create-exam.mjs";

const content = `NTA declared the CUET UG 2026 result on 23 June 2026, and university counselling has been running since around August. If you sat the exam in May, the scorecard is out and the part that decides your admission is happening now.

One thing causes more confusion at this stage than anything else: NTA does not run counselling and does not publish cutoffs. Your score comes from NTA. Your admission does not.

## Where CUET UG 2026 stands

| Stage | Status |
|---|---|
| Exam | Conducted May 2026 |
| Result declared | 23 June 2026 |
| Scorecard | Available at cuet.nta.nic.in |
| Counselling | Running from around August 2026 |
| Cutoffs | Published by each university, not by NTA |
| Admission | Conducted by individual universities |

## The thing most candidates get wrong about counselling

NTA conducts the examination, processes the answer sheets and issues your scorecard. That is where its role ends.

It does not release a merit list for admission. It does not publish cutoffs. It does not allot seats. It does not run a single centralised counselling process that places every CUET candidate into a university.

Each participating university runs its own admission process using your CUET score. That means separate registrations, separate deadlines, separate cutoffs and separate counselling rounds, at every university you want to be considered by. Delhi University runs its own process. Banaras Hindu University runs its own. A state university runs its own. Applying to CUET does not apply you to any of them.

Candidates lose seats every year by assuming the scorecard triggers something automatic. It does not. If you have not separately registered with the universities you want, a strong CUET score achieves nothing.

The practical consequence is that August and September are administratively heavy months. You need to track each university's portal, registration window and document requirements independently, and those windows do not align with each other.

## Reading your scorecard

The CUET UG scorecard carries your name, roll number, application number, category, subject-wise marks, total marks, percentile score and rank.

The distinction between marks and percentile matters. Your marks are what you scored. Your percentile reflects where you sit relative to everyone who took that subject in that shift, after normalisation. Because CUET runs across multiple shifts and days for the same subject, NTA normalises scores so candidates who sat a harder shift are not penalised.

That is why your percentile can differ from what raw marks alone would suggest, and why comparing your marks against a friend who sat a different shift tells you little. Universities generally work from the normalised score.

Download the scorecard and keep multiple copies. Universities ask for it at registration, again at document verification, and sometimes again at admission. The NTA portal does not stay open indefinitely.

## How university cutoffs actually work

Cutoffs in CUET-based admission are not fixed in advance. They emerge from the applicant pool at each university in each round.

A university announces seats for a programme, candidates apply, and the cutoff settles at whatever score the last admitted candidate held once the seats fill. If seats remain, the university runs a further round at a lower cutoff. If demand is heavy, the first-round cutoff is high and later rounds may not happen at all.

This produces a few consequences worth planning around.

Cutoffs vary enormously between universities for the same programme, because they reflect that university's demand rather than a national standard. A score that is comfortable at one institution may be well short at another.

Cutoffs also vary between rounds at the same university, usually falling as rounds progress. Candidates who miss the first round should not conclude they are out.

And cutoffs vary by category, with separate lists for reserved categories, which means the relevant comparison is against your own category rather than the general list.

Previous year cutoffs are a rough orientation, not a prediction. They move with the applicant pool each year.

## What to do right now if you have your score

Shortlist universities honestly against your score, with a spread. Include a few where your score is comfortably above last year's level, several where it is around the mark, and one or two ambitious choices. A list made entirely of ambitious choices is how strong candidates end up unplaced.

Register separately at each one, inside its own window. Put the deadlines in a calendar, because they overlap and they are not extended for candidates who missed them.

Keep a document set ready and duplicated: Class 10 and Class 12 marksheets, the CUET scorecard, category certificate if applicable, identity proof, passport photographs and any programme-specific document. Verification is where admissions are lost on paperwork rather than on scores.

Read each programme's subject requirement carefully. Many programmes require specific CUET subjects, and a strong overall score in the wrong subject combination does not qualify you. This is a rule candidates discover at the wrong moment.

Track the fee payment deadline separately from the registration deadline. They are often different dates, and an unpaid seat is released.

## The exam itself, for candidates planning 2027

CUET UG is a computer based test conducted by NTA for undergraduate admission to central, state, deemed and private participating universities.

The paper is organised in sections. One set covers languages, with a large list of Indian and foreign languages available. Another covers domain subjects, spanning the common Class 12 streams including Physics, Chemistry, Mathematics, Biology, Accountancy, Business Studies, Economics, History, Political Science, Geography and others. A general test section covers general knowledge, current affairs, general mental ability, numerical ability and logical reasoning.

You select subjects according to what the universities and programmes you want require, which is why the subject choice needs to be made after checking programme requirements rather than before.

Eligibility for the test itself is a Class 12 pass or appearing, and NTA does not impose a minimum percentage or an age limit for CUET. Universities set their own eligibility on top, and those conditions are frequently stricter than NTA's. A candidate can be eligible for CUET and ineligible for a specific programme.

The test is conducted in multiple shifts across several days per subject, which is what makes score normalisation necessary.

## Normalisation, with an actual example

Normalisation is the part of CUET scoring that generates the most complaint and the least understanding, so it is worth working through concretely.

Suppose Physics is conducted across four shifts over two days. Shift 1 gets a paper that most candidates find manageable, and the average score lands around 120 out of 200. Shift 3 gets a harder paper and the average lands around 95.

Without adjustment, a candidate who scored 140 in Shift 3 would rank below a candidate who scored 145 in Shift 1, even though the Shift 3 candidate performed further above their shift's average and arguably did better. Normalisation corrects for that by converting raw scores into percentiles within each shift and mapping them onto a common scale.

The result is that your percentile answers a different question from your marks. Your marks say what you scored. Your percentile says what proportion of candidates in that subject you finished ahead of.

Two practical points follow. First, do not compare raw marks with someone who sat a different shift, because the comparison is meaningless. Second, do not assume a low raw score in a hard shift has sunk you, because the whole point of normalisation is that it should not have.

What normalisation cannot do is fix a genuinely weak performance. It adjusts for shift difficulty, not for preparation.

## Which universities accept CUET UG

CUET UG is accepted by central universities, a large number of state universities, deemed universities and participating private universities. The list has expanded across cycles as more institutions moved undergraduate admission onto the common test.

Acceptance does not mean uniformity. Universities differ in which CUET subjects they require for a given programme, what weighting they give to CUET score against Class 12 marks, whether they impose an additional eligibility bar, and how many counselling rounds they run.

Some programmes at some universities also use CUET as one component alongside an interview, a portfolio or an aptitude assessment, particularly in design, fine arts, performing arts and some professional courses.

The only reliable source for what a specific university wants is that university's admission prospectus for the current year. Aggregator lists of participating institutions are useful for building a shortlist and unreliable for programme-level detail.

Check also whether the university admits through CUET for the specific programme you want. An institution can participate in CUET for most undergraduate courses while admitting to a handful through a separate route.

## What CUET changed about undergraduate admission

Before CUET, undergraduate admission at most central universities ran on Class 12 board marks, which produced the well-documented problem of cutoffs approaching or reaching 100 per cent at the most competitive Delhi colleges.

That system disadvantaged candidates from boards that marked more conservatively, because a 92 per cent from a strict board competed directly against a 98 per cent from a lenient one. CUET replaced the board marksheet with a common test taken under the same conditions nationally.

The change is not without its own costs. Candidates now prepare for an additional examination on top of board exams in the same academic year, coaching has grown around it, and the administrative burden of applying separately to each university persists because the common test did not bring a common counselling process with it.

For a candidate planning ahead, the useful takeaway is that Class 12 marks still matter, because universities set eligibility conditions and some weight board performance, but they no longer decide admission on their own at CUET-participating institutions.

## Planning for CUET UG 2027

NTA had not announced the 2027 schedule as of 14 August 2026. The exam has historically been conducted in the first half of the calendar year, with registration opening several months ahead.

If you are in Class 11 or entering Class 12, the highest-return preparation is not exam-specific. Domain subjects test Class 12 syllabus content, so studying properly for boards is studying for CUET, and candidates who treat them as two separate preparations waste effort.

Where CUET does need separate work is the general test, which covers current affairs, general knowledge, mental ability, numerical ability and logical reasoning, none of which the board syllabus builds. That section rewards steady low-volume preparation across the year far more than a compressed effort near the exam.

Decide your target universities and programmes before you register, because the subject selection follows from what they require and the choice is not easily undone. This is the single most common planning failure and it happens at registration, months before anyone thinks about cutoffs.

Finally, budget for the administrative load in the admission season. Registering separately at eight universities, tracking eight sets of deadlines and assembling eight document sets is genuinely demanding work, and it lands at the same time as the result.

## Common mistakes across the CUET cycle

Assuming NTA handles admission. It does not, and this single misunderstanding costs more seats than any other.

Choosing CUET subjects before checking what the target programmes require. The subject combination gates your eligibility for specific courses regardless of your score.

Applying only to high-demand universities. Cutoffs at the most competitive institutions clear a narrow band of candidates, and a shortlist without safer options is a plan with one outcome.

Missing a university registration window while waiting for another university's result. The windows run in parallel and do not wait for each other.

Treating previous year cutoffs as a guarantee. They shift each year with the applicant pool and with the number of seats a university offers.

Underestimating document verification. Category certificates in the wrong format, name mismatches between certificates, and missing originals cause avoidable losses at the final step.

## Frequently asked questions

**Has the CUET UG 2026 result been declared?**

Yes. NTA declared the CUET UG 2026 result on 23 June 2026 at cuet.nta.nic.in. The scorecard is downloaded by logging in with your application number and password or date of birth, and carries subject-wise marks, total marks, percentile and rank.

**Does NTA conduct CUET counselling?**

No. NTA conducts the examination and issues the scorecard only. It does not run counselling, does not publish cutoffs and does not allot seats. Each participating university runs its own admission process using your CUET score, with its own registration, deadlines and counselling rounds.

**Do I have to apply separately to each university?**

Yes. A CUET scorecard does not register you anywhere. You must apply separately to every university you want to be considered by, within each one's own window. Candidates lose seats every year by assuming the process is automatic.

**What is the CUET UG cutoff for 2026?**

There is no single CUET cutoff. Each university publishes its own for each programme, category and counselling round, and those emerge from the applicant pool rather than being fixed in advance. Cutoffs generally fall across successive rounds as seats fill, and previous year figures are a rough orientation rather than a prediction.

**What is the difference between marks and percentile on the scorecard?**

Marks are what you scored. Percentile reflects your standing relative to everyone who took that subject, after normalisation. NTA normalises because CUET runs across multiple shifts and days for the same subject, so a candidate who sat a harder shift is not penalised. Universities generally work from the normalised score.

**Is there a minimum percentage or age limit for CUET UG?**

NTA does not set a minimum Class 12 percentage or an age limit for the test itself. Individual universities set their own eligibility conditions on top, and those are frequently stricter, so a candidate can be eligible for CUET and ineligible for a particular programme.

**What subjects should I choose in CUET UG?**

Choose according to what your target universities and programmes require, and check those requirements before selecting rather than after. Many programmes require specific CUET subjects, and a strong overall score in the wrong subject combination does not make you eligible.

**When will CUET UG 2027 be held?**

NTA had not announced the CUET UG 2027 schedule as of 14 August 2026. NTA publishes the notification and the registration window on cuet.nta.nic.in, and the exam has historically been conducted in the first half of the calendar year.

**What documents do I need for university admission?**

Class 10 and Class 12 marksheets, the CUET scorecard, a category certificate if applicable, identity proof, passport photographs and any programme-specific document. Keep duplicates, since universities ask at registration, at verification and again at admission. Name mismatches between certificates are a common cause of avoidable rejection.

**What if I miss the first counselling round?**

Universities generally run further rounds if seats remain, usually at lower cutoffs than the first. Missing the first round is not the end of the process, but you must be registered with that university to be considered in any round, and registration windows are separate from round schedules.

**Can I apply to a university if my CUET subject does not match the programme?**

Generally no. Many programmes specify which CUET subjects a candidate must have taken, and the requirement is checked at eligibility rather than being waived for a high scorer. A candidate with an excellent overall score in an unrelated subject combination will not qualify for a programme that requires specific domain subjects. Check requirements before selecting subjects at registration, since the choice cannot be revisited afterwards.

**Do Class 12 marks still matter with CUET?**

Yes, though not in the way they used to. Universities set their own eligibility conditions, and many require a minimum Class 12 percentage to be considered at all. Some also weight board performance alongside the CUET score. What changed is that board marks no longer decide admission on their own at participating institutions, which was the practice that pushed Delhi cutoffs toward 100 per cent.

**Is there negative marking in CUET UG?**

CUET UG applies negative marking, with a deduction for each wrong answer and no penalty for questions left unattempted. Confirm the exact marking scheme for your subject in the information bulletin for the relevant cycle, since NTA states it there and has adjusted the paper structure between cycles.

**How many universities should I apply to?**

Build a spread rather than a number. Include a few where your score sits comfortably above last year's level, several where it is around the mark, and one or two ambitious choices. A shortlist made entirely of the most competitive institutions is the most common way strong candidates end up unplaced, because those cutoffs clear only a narrow band.

**What happens if I am not satisfied with my CUET score?**

There is no re-examination within a cycle, and NTA does not offer score improvement mid-year. The options are accepting an admission at an institution where the score qualifies, or preparing for the next cycle. Candidates considering a repeat year should weigh it against the programme they can secure now, since a year is a real cost and cutoffs are not guaranteed to move in their favour.

## Official sources

- CUET UG portal, National Testing Agency: https://cuet.nta.nic.in
- Individual participating university admission portals, which are the authority on cutoffs, counselling schedules and programme eligibility

NTA is the authority on your score. Your university is the authority on your admission. Where this page conflicts with either, they are correct.

A closing point worth repeating, because it is the one that costs seats. The CUET scorecard is a qualification, not an application. Nothing happens automatically when it is issued, no central body places you anywhere, and no university will consider you because you scored well nationally. The admission belongs to whichever institutions you personally registered with, inside their own deadlines, with their own documents. Candidates who understand that in June do considerably better than candidates who discover it in September, when most of the good seats have already gone.`;

await createExam({
  slug: "cuet-ug-2026",
  title: "CUET UG 2026 Result: Scorecard, Counselling, University Cutoffs",
  conducting_body: "NTA (National Testing Agency)",
  exam_date: "2026-05-11",
  eligibility:
    "Class 12 pass or appearing. NTA sets no minimum percentage and no age limit for the test itself. Participating universities set their own eligibility conditions on top, and those are frequently stricter, so a candidate can be eligible for CUET and ineligible for a specific programme. Many programmes also require specific CUET subjects, so the subject combination gates eligibility regardless of the overall score.",
  syllabus:
    "Organised in sections. Languages: a large list of Indian and foreign languages. Domain subjects: the common Class 12 streams including Physics, Chemistry, Mathematics, Biology, Accountancy, Business Studies, Economics, History, Political Science, Geography and others. General test: general knowledge, current affairs, general mental ability, numerical ability and logical reasoning. Candidates select subjects according to what their target universities and programmes require, so programme requirements should be checked BEFORE selecting subjects.",
  exam_pattern: {
    mode: "Computer Based Test (CBT)",
    duration: "45 to 60 minutes per subject",
    normalisation:
      "Scores are normalised because the exam runs across multiple shifts and days for the same subject, so a candidate who sat a harder shift is not penalised. Percentile reflects standing after normalisation, which is why it can differ from what raw marks alone suggest.",
    sections: [
      { name: "Section IA, Languages", detail: "13 regional languages" },
      { name: "Section IB, Languages", detail: "20 additional languages" },
      { name: "Section II, Domain subjects", detail: "27 domain subjects across the common Class 12 streams" },
      { name: "Section III, General test", detail: "General knowledge, current affairs, general mental ability, numerical ability and logical reasoning" },
    ],
  },
  admit_card_link: "https://cuet.nta.nic.in/",
  result_link: "https://cuet.nta.nic.in/",
  official_link: "https://cuet.nta.nic.in/",
  category: "engineering",
  state: "all-india",
  description:
    "CUET UG 2026 result was declared on 23 June 2026 by NTA. Counselling is run by each university, not NTA. Check scorecard, cutoffs and admission steps.",
  content,
  reading_time: "12 min read",
});
