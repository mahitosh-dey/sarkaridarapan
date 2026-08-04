// Day 15 (Tue 2026-08-04) — CAT 2026 deepening (491w -> 3000w+).
// Verified 2026-08-04. IIM Indore conducting. Notification 26 Jul 2026.
// REGISTRATION OPENED 3 AUG 2026 (10:00 am) and closes 15 Sep 2026 (5:00 pm) -> live now.
// Exam 29 Nov 2026, three slots, ~170 cities, 300+ centres. Admit card 4-29 Nov.
// Result expected first week Jan 2027.
// Pattern: 68 questions, 120 min, 40 min sectional lock. VARC 24 (20 MCQ + 4 TITA),
// DILR 22 (11 + 11), QA 22 (14 + 8). Marking +3, -1 on MCQ only, TITA no negative.
// Fee Rs 2,700 general/EWS/NC-OBC; Rs 1,350 SC/ST/PwD.
// Eligibility: bachelor's with 50% (45% SC/ST/PwD), final-year eligible, NO age limit.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## CAT 2026: registration is open now

CAT 2026, the Common Admission Test for the IIMs and several hundred other business schools, is conducted this year by IIM Indore. Registration opened at 10:00 am on 3 August 2026 and closes at 5:00 pm on 15 September 2026. The examination is on Sunday, 29 November 2026, in three slots across roughly 170 cities and more than 300 test centres.

If you intend to sit CAT this year, the window is open right now and it does not reopen. IIM Indore released the notification and information bulletin on 26 July 2026 on iimcat.ac.in.

Two things about CAT catch first-time candidates out, and both are structural rather than about difficulty. The sections are time-locked, so you cannot return to a section once its 40 minutes are gone. And a meaningful share of questions carry no negative marking at all, which changes how you should attempt them.

## Important dates

| Event | Date |
|---|---|
| Notification and information bulletin | 26 July 2026 |
| Registration opens | 3 August 2026, 10:00 am |
| Registration closes | 15 September 2026, 5:00 pm |
| Admit card download | 4 November to 29 November 2026 |
| Examination | 29 November 2026, three slots |
| Result | Expected first week of January 2027 |

The gap between the close of registration and the examination is about ten weeks, which is the realistic preparation window for anyone starting now.

## Exam pattern

CAT is a computer based test of 68 questions over 120 minutes.

| Section | Questions | MCQ | TITA | Time |
|---|---|---|---|---|
| Verbal Ability and Reading Comprehension (VARC) | 24 | 20 | 4 | 40 minutes |
| Data Interpretation and Logical Reasoning (DILR) | 22 | 11 | 11 | 40 minutes |
| Quantitative Ability (QA) | 22 | 14 | 8 | 40 minutes |
| Total | 68 | 45 | 23 | 120 minutes |

Sections appear in that fixed order and each is locked to its own 40 minutes. When the time for VARC expires the screen moves to DILR whether you are finished or not, and you cannot go back. Candidates used to exams where they can budget time freely across the whole paper find this the hardest adjustment.

## Marking, and why TITA changes your strategy

Every correct answer carries 3 marks. An incorrect multiple-choice answer costs 1 mark. TITA questions, meaning Type In The Answer, carry no negative marking at all.

That distinction is worth acting on deliberately. Of the 68 questions, 23 are TITA: 4 in VARC, 11 in DILR and 8 in QA. On those 23 there is no downside to attempting, so every one should carry an answer even if it is a considered guess. Leaving a TITA question blank is a guaranteed zero where a guess costs nothing.

On the 45 MCQs the arithmetic is different. A correct answer gains 3, a wrong one costs 1, so guessing blindly among four options gives on average one correct at plus 3 against three wrong at minus 3, which is exactly break-even with substantial variance. Eliminate one option and the odds turn positive. With no basis for elimination, leaving it is the sounder call.

Note the DILR section in particular: 11 of its 22 questions are TITA, half the section. A candidate who runs short of time there and leaves TITA questions blank is discarding free expected value.

## Eligibility

A bachelor's degree with at least 50 per cent marks or an equivalent CGPA is required, relaxed to 45 per cent for SC, ST and PwD candidates.

Candidates in the final year of their degree are eligible to apply and may be admitted provisionally, subject to producing proof of completion within the deadline set by the institute admitting them.

Holders of professional qualifications including CA, CS and ICWA are eligible on the same percentage conditions.

There is no age limit for CAT and no cap on the number of attempts. That is unusual among Indian competitive examinations and worth knowing: a candidate who does not get the score they want can simply sit it again the following year without any eligibility consequence.

## Registration fee

| Category | Fee |
|---|---|
| General, EWS and NC-OBC | Rs 2,700 |
| SC, ST and PwD | Rs 1,350 |

The fee is paid online during registration. Candidates select up to a defined number of preferred test cities in order during the application, and IIM Indore allots one of them, so ordering those preferences carefully matters if travel is a constraint.

## What the sections actually test

Verbal Ability and Reading Comprehension is dominated by reading comprehension, typically four passages accounting for the majority of the section, with the remainder covering para jumbles, para summary and odd sentence out. Notably, VARC in recent cycles has contained no direct grammar or vocabulary questions, which surprises candidates preparing from older material. The skill being tested is reading dense argumentative prose quickly and accurately.

Data Interpretation and Logical Reasoning consists of set-based questions, usually four or five sets of four to six questions each, covering tables, graphs, caselets, arrangements, distributions, games and tournaments. This is the section where set selection matters more than raw ability: choosing two solvable sets and completing them fully beats starting four and finishing none.

Quantitative Ability covers arithmetic, algebra, geometry and mensuration, number systems, and modern mathematics including permutations, combinations and probability. Arithmetic carries the heaviest weight in recent papers, covering percentages, ratio and proportion, averages and mixtures, time speed and distance, time and work, profit and loss, and simple and compound interest.

## Percentile, not marks

CAT results are reported as percentiles rather than raw scores, and the distinction matters when you set targets.

A percentile tells you the proportion of candidates who scored below you, not the proportion of marks you obtained. In a field of well over two lakh candidates, a raw score that looks modest in absolute terms can correspond to a high percentile, because the paper is designed so that no one comes close to attempting everything.

Sectional percentiles are also computed separately, and most institutes apply sectional cutoffs in addition to an overall one. A candidate with a strong overall percentile but a weak sectional percentile in one area can be filtered out by institutes that enforce sectional minimums, which is the argument against abandoning a weak section entirely.

Because CAT is normalised across three slots on the same day, your final score is adjusted for the relative difficulty of the slot you sat, so a harder slot is not a disadvantage.

## Which institutes accept CAT

The 21 Indian Institutes of Management use CAT for admission to their flagship postgraduate programmes, and several hundred other business schools accept the score, including FMS Delhi, SPJIMR, MDI Gurgaon, IMT Ghaziabad, IMI New Delhi and a large number of university departments and private institutes.

Selection at almost all of them combines the CAT percentile with academic record, work experience, and performance in a subsequent round involving written ability tests, group discussions and personal interviews. The percentile gets you the call; it does not by itself get you the seat. Weightage formulas differ by institute and are published in their admission policies, and several give explicit weight to academic consistency across Class 10, Class 12 and graduation, along with diversity factors.

## Preparing between now and 29 November

There are roughly 17 weeks from the opening of registration to the examination, which is a workable window for a serious start and a comfortable one for a candidate already preparing.

Begin with a full mock under real conditions to establish a baseline. Without one you are guessing at where your weaknesses lie, and CAT preparation is almost entirely about allocating limited time to the sections that will move your percentile most.

Build reading speed for VARC from the start, since it is the slowest capability to develop. Reading dense argumentative material daily, editorials and long-form journalism rather than exam passages alone, is what shifts comprehension speed over months.

Practise DILR by sets rather than by questions, and train the skill of scanning all available sets in the first two minutes and choosing which to attempt. That selection decision affects the score more than solving ability does.

Drill arithmetic in QA, since it carries the greatest weight and rewards accuracy and speed over sophisticated technique.

Take a full mock every week from September, and increase to two a week in November, spending as long analysing each mock as you spent writing it.

## CAT compared with the other MBA entrance exams

CAT is not the only route, and the calendar is arranged so that a candidate can sit several in one season. Most serious applicants do.

| Exam | Conducted by | Exam date | Duration and questions | Negative marking |
|---|---|---|---|---|
| CAT 2026 | IIM Indore | 29 November 2026 | 120 min, 68 questions | 1 mark on MCQs only |
| XAT 2027 | XLRI Jamshedpur | 3 January 2027 | 180 min, 95 questions | 0.25, plus a penalty beyond 8 unattempted |
| SNAP 2026 | Symbiosis International | December 2026, multiple slots | 60 min, 60 questions | As per the SNAP bulletin |
| NMAT 2026 | Graduate Management Admission Council | 2 November to 20 December 2026 | 120 min, 108 questions | None |
| MAT | All India Management Association | Multiple cycles a year | As per the AIMA bulletin | As per the AIMA bulletin |

Three differences are worth planning around. XAT includes a decision making section that no other exam has, and it penalises leaving more than eight questions unattempted, which is a rule unique to it. NMAT allows multiple attempts within its window and lets you choose your section order, which suits candidates who perform better with a familiar sequence. SNAP is much shorter at 60 minutes, so it rewards speed over stamina.

Because the dates are spread from late November to early January, sitting three or four of these costs mainly registration fees and a few weekends, and it widens the set of institutes available to you considerably. Our pages on [XAT 2027](/entrance-exams/xat-2027), [SNAP 2026](/entrance-exams/snap-2026) and [NMAT 2026](/entrance-exams/nmat-2026) cover each in detail.

## What happens after the CAT result

A percentile is the beginning of the admission process rather than the end of it, and candidates focused entirely on the exam are often unprepared for what follows.

Institutes release shortlists in January and February based on the CAT percentile combined with their own weightage formula, which typically includes Class 10 and Class 12 marks, graduation performance, work experience and diversity factors. Two candidates with the same percentile can receive very different call sets because of academic record alone.

Shortlisted candidates attend a selection round, usually some combination of a Written Ability Test, a group discussion or group exercise, and a personal interview. The final offer is computed from a formula that gives the CAT percentile a defined weight alongside these components, and at several institutes the exam accounts for less than half of the final score.

This has a practical consequence for anyone reading this in August. Preparation for the interview stage, which means being able to discuss your own academic background, work, and reasons for an MBA coherently, is worth starting well before the result rather than in the fortnight after it.

## Mistakes that cost candidates marks

Ignoring the sectional time limit in practice. Candidates who take mocks without enforcing the 40-minute lock arrive on exam day with time-allocation habits that the software will not permit.

Leaving TITA questions blank. There are 23 of them carrying no penalty, and every blank one is a guaranteed zero in place of a free attempt.

Starting too many DILR sets. Completing two sets fully scores better than beginning four and finishing none, and set selection in the opening minutes is the highest-value decision in the section.

Abandoning a weak section entirely. Sectional percentiles are computed separately and most institutes enforce sectional cutoffs, so a zero-effort section can end an application that a strong overall percentile would otherwise carry.

Preparing VARC from grammar and vocabulary material. Recent papers test reading comprehension rather than rules, so the useful preparation is sustained reading of dense argumentative prose.

Taking mocks without analysing them. The analysis is where the improvement happens, and it deserves at least as much time as the attempt.

## How to apply

Applications are filed only on iimcat.ac.in.

1. Register with a valid email address and mobile number, both of which are used for all communication including the admit card.
2. Complete the application with academic details exactly as on your certificates, since percentages entered here feed institute shortlisting.
3. Select your programme preferences across the participating IIMs.
4. Choose your preferred test cities in order, since allotment follows that order and your travel plans depend on it.
5. Upload photograph and signature in the specified format and size.
6. Pay the fee of Rs 2,700, or Rs 1,350 for SC, ST and PwD candidates.
7. Submit and save the application, then download the admit card between 4 and 29 November 2026.

## Documents you will need

1. Class 10 and Class 12 mark sheets and certificates.
2. Graduation mark sheets and degree certificate, or a bonafide certificate if you are in the final year.
3. Category certificate in the prescribed central government format for NC-OBC, SC, ST and EWS claims, issued within the validity period stated in the bulletin.
4. PwD certificate where applicable.
5. Work experience certificates where you intend to claim experience at the interview stage.
6. Photograph, signature and a photo identity document matching the application.

## Frequently asked questions

**When is CAT 2026 and when does registration close?**
CAT 2026 is on Sunday, 29 November 2026, in three slots across roughly 170 cities. Registration opened at 10:00 am on 3 August 2026 and closes at 5:00 pm on 15 September 2026 on iimcat.ac.in. IIM Indore is the conducting institute this year and released the notification on 26 July 2026. Admit cards are available from 4 November.

**What is the CAT 2026 exam pattern?**
68 questions over 120 minutes in three sections with a 40-minute sectional time limit each: Verbal Ability and Reading Comprehension with 24 questions, Data Interpretation and Logical Reasoning with 22, and Quantitative Ability with 22. The sections appear in that fixed order and you cannot return to a section once its time expires.

**What is the CAT marking scheme?**
Every correct answer carries 3 marks and an incorrect multiple-choice answer costs 1 mark. TITA questions, meaning Type In The Answer, carry no negative marking. Of the 68 questions, 23 are TITA: 4 in VARC, 11 in DILR and 8 in QA. Those 23 should always be attempted since a blank scores zero while a guess costs nothing.

**Is there negative marking in CAT?**
Yes, but only on multiple-choice questions, at 1 mark for a wrong answer against 3 for a correct one. That ratio makes blind guessing among four options break-even, so answer where you can eliminate at least one option. The 23 TITA questions carry no penalty at all and should never be left blank.

**What is the eligibility for CAT 2026?**
A bachelor's degree with at least 50 per cent marks or equivalent CGPA, relaxed to 45 per cent for SC, ST and PwD candidates. Final-year students may apply and be admitted provisionally. Professional qualifications including CA, CS and ICWA are accepted on the same percentage conditions. There is no age limit and no cap on the number of attempts.

**What is the CAT 2026 registration fee?**
Rs 2,700 for General, EWS and NC-OBC candidates and Rs 1,350 for SC, ST and PwD candidates, paid online during registration on iimcat.ac.in.

**How is the CAT percentile calculated?**
CAT reports percentiles rather than raw scores. A percentile is the proportion of candidates who scored below you, not the proportion of marks you obtained, which is why a modest-looking raw score can produce a high percentile in a field of over two lakh candidates. Scores are normalised across the three slots so that a harder slot is not a disadvantage, and sectional percentiles are computed separately.

**Do I need to clear sectional cutoffs in CAT?**
CAT itself reports sectional percentiles, and most institutes apply sectional cutoffs alongside the overall one. A candidate with a strong overall percentile but a weak sectional percentile can be filtered out by institutes enforcing sectional minimums, which is the main argument against abandoning a weak section entirely.

**Which colleges accept the CAT score?**
All 21 IIMs use CAT for their flagship postgraduate programmes, and several hundred other business schools accept it, including FMS Delhi, SPJIMR, MDI Gurgaon, IMT Ghaziabad and IMI New Delhi. Almost all combine the percentile with academic record, work experience and a later round of written ability tests, group discussions and interviews, so the percentile earns the call rather than the seat.

**How many attempts are allowed in CAT?**
There is no limit. CAT has no age restriction and no cap on attempts, so a candidate who does not achieve the percentile they want can sit it again the following year with no eligibility consequence. This is unusual among Indian competitive examinations, where attempt caps are common.

**Does CAT test grammar and vocabulary?**
Not directly in recent cycles. The VARC section is dominated by reading comprehension, typically four passages accounting for most of the section, with the remainder covering para jumbles, para summary and odd sentence out. Candidates preparing from older material that emphasises grammar rules and vocabulary lists are studying for a pattern that no longer appears.

**How should I approach the DILR section?**
By set selection rather than by solving speed. DILR consists of four or five sets of four to six questions each, and the highest-return skill is scanning all available sets in the first couple of minutes and choosing the two or three you can complete fully. Starting four sets and finishing none scores far worse than completing two. Remember also that 11 of the 22 DILR questions are TITA with no negative marking.`;

const FAQS = [];

const ROW = {
  slug: "cat-2026",
  title: "CAT 2026: Registration Open, Exam 29 Nov, Pattern, Fee",
  conducting_body: "Indian Institute of Management Indore (IIM Indore), on behalf of the IIMs",
  exam_date:
    "29 November 2026 (Sunday), in three slots across roughly 170 cities and 300+ test centres. Admit card available 4 to 29 November 2026. Result expected first week of January 2027.",
  application_start: "2026-08-03",
  application_end: "2026-09-15",
  eligibility:
    "Bachelor's degree with at least 50 per cent marks or equivalent CGPA, relaxed to 45 per cent for SC, ST and PwD candidates. Final-year students may apply and be admitted provisionally subject to producing proof of completion within the admitting institute's deadline. Professional qualifications including CA, CS and ICWA are accepted on the same percentage conditions. NO age limit and NO cap on the number of attempts.",
  syllabus:
    "Three sections. Verbal Ability and Reading Comprehension: dominated by reading comprehension (typically four passages), plus para jumbles, para summary and odd sentence out. Recent cycles contain no direct grammar or vocabulary questions. Data Interpretation and Logical Reasoning: four or five set-based groups covering tables, graphs, caselets, arrangements, distributions, games and tournaments. Quantitative Ability: arithmetic (heaviest weight, covering percentages, ratio and proportion, averages and mixtures, time speed and distance, time and work, profit and loss, interest), algebra, geometry and mensuration, number systems, and modern mathematics including permutations, combinations and probability.",
  exam_pattern:
    "Computer based test, 68 questions, 120 minutes, with a 40-minute SECTIONAL TIME LIMIT per section in fixed order (you cannot return to a section once its time expires). VARC 24 questions (20 MCQ + 4 TITA), DILR 22 (11 MCQ + 11 TITA), QA 22 (14 MCQ + 8 TITA). Marking: +3 for a correct answer, -1 for an incorrect MCQ, and NO negative marking on the 23 TITA (Type In The Answer) questions, which should therefore always be attempted. Scores are normalised across the three slots and results are reported as percentiles rather than raw marks, with sectional percentiles computed separately.",
  admit_card_link: "https://iimcat.ac.in/",
  result_link: "https://iimcat.ac.in/",
  official_link: "https://iimcat.ac.in/",
  category: "management",
  state: "all-india",
  reading_time: "12 min read",
  description:
    "CAT 2026 registration is open to 15 September and the exam is on 29 November. Check the 68-question pattern, sectional time limits, TITA marking and fee.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
