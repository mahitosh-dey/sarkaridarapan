// Day 15 (Wed 2026-08-05) — SNAP 2026 deepening (808w -> 3000w+).
// Verified 2026-08-05. Symbiosis International (Deemed University).
// Registration opened 1 Aug 2026. Exam on THREE dates: 6, 14 and 20 December 2026.
// 60 MCQs, 60 minutes, 60 marks. NO sectional time limit.
// Sections: General English; Quantitative Aptitude, Data Interpretation and Data
// Sufficiency; Analytical and Logical Reasoning.
// Marking: +1 correct, -0.25 wrong.
// THREE ATTEMPTS allowed and the BEST score is considered for admission - the single
// most consequential feature and the one competitors bury.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## SNAP 2026: three attempts, best score counts

SNAP 2026, the Symbiosis National Aptitude Test, is the entrance examination for the management programmes of Symbiosis International (Deemed University) and its constituent institutes. Registration opened on 1 August 2026 and the test is held on three separate dates: 6, 14 and 20 December 2026.

The feature that shapes everything about how you should approach SNAP is this: you may sit it up to three times across those dates, and only your best score is considered for admission.

That is unusual. Most entrance examinations give you one attempt in a cycle, which makes the day itself high-stakes and rewards caution. SNAP does the opposite. A bad slot costs you nothing but the additional fee, because a later attempt replaces it. That changes the optimal strategy substantially, and it is discussed in detail below.

The second thing to know is that SNAP is short. Sixty questions in sixty minutes, which works out to a minute per question with no time to spare. It is the fastest of the major management entrance tests, and speed rather than depth is what it rewards.

## Important dates

| Event | Date |
|---|---|
| Registration opens | 1 August 2026 |
| Test date 1 | 6 December 2026 |
| Test date 2 | 14 December 2026 |
| Test date 3 | 20 December 2026 |

Candidates register once and then select which of the three dates they wish to sit, up to a maximum of three attempts. Each attempt beyond the first carries an additional fee.

## Exam pattern

SNAP is a computer based test of 60 multiple choice questions in 60 minutes for a total of 60 marks.

| Section | What it covers |
|---|---|
| General English | Reading comprehension, verbal reasoning, verbal ability |
| Quantitative Aptitude, Data Interpretation and Data Sufficiency | Arithmetic, algebra, geometry, number systems, data interpretation, data sufficiency |
| Analytical and Logical Reasoning | Arrangements, series, coding, blood relations, syllogism, critical reasoning, puzzles |

Each correct answer carries 1 mark and each wrong answer costs 0.25 marks.

There is no sectional time limit. The full 60 minutes is yours to distribute across the three sections however you choose, and you may move freely between them. This is the opposite of CAT, which locks each section to 40 minutes.

## What the absence of sectional limits means

Freedom of movement between sections sounds like a convenience, and for a prepared candidate it is a real advantage. You can open the paper, scan for the questions you can answer fastest, and bank those marks before the clock becomes a problem.

But it is also where unprepared candidates lose. With one minute per question and no forced section changes, it is entirely possible to spend 35 of your 60 minutes on quantitative aptitude, answer 20 questions there, and reach the other two sections with 25 minutes for 40 questions.

The approach that works on a 60-minute paper is to make a fast first pass across the whole test, answering only what you can do quickly, then return for the harder items with whatever time remains. Trying to solve the paper in order, question by question, is the most common way candidates run out of time here.

## The three-attempt rule, and how to use it

Because your best of up to three scores is what counts, SNAP rewards a different strategy from a single-attempt examination.

Treat the first attempt as a real attempt rather than a practice run, but sit it without the anxiety that a one-shot examination produces. If it goes badly, the score is discarded the moment a later attempt beats it.

Use the gap between dates. There is roughly a week between 6 and 14 December and another six days to 20 December. That is not long enough to learn new material, but it is enough to fix a specific, identified problem: a section you mismanaged on time, a question type you kept getting wrong, or an attempt strategy that did not work.

Be realistic about diminishing returns. Three attempts cost three fees and three December weekends. If your first score is close to your practice ceiling, a second attempt may add little. If your first attempt was derailed by time management rather than knowledge, a second attempt usually improves markedly.

Note also that attempting all three is not compulsory. Many candidates sit two and stop, which is often the sensible balance between improving a score and spending three December weekends on it.

## Negative marking, and how it should shape attempts

The penalty is 0.25 for a wrong answer against 1 mark for a correct one, a ratio of 4 to 1.

Work the arithmetic. Guessing blindly among four options yields on average one correct at plus 1 and three wrong at minus 0.75, a net gain of 0.25. So blind guessing carries a small positive expected value, and eliminating even one option makes attempting clearly correct.

On a 60-question paper where every mark matters against a tight cutoff, that means you should not leave many blanks. In the final minutes, filling remaining questions is worth doing rather than leaving them empty.

## Eligibility

A bachelor's degree of at least three years' duration from a recognised university, with a minimum of 50 per cent marks, relaxed to 45 per cent for SC and ST candidates.

Candidates in the final year of their degree may apply, subject to producing proof of completion within the deadline set by the institute admitting them.

There is no age limit for SNAP.

Note that the 50 per cent requirement is stricter than XAT, which sets no minimum percentage, and comparable to CAT. Candidates whose graduation marks fall below that threshold should check institute-level conditions before paying the fee.

## Which institutes accept SNAP

SNAP is used for admission to the management programmes of Symbiosis International (Deemed University) and its constituent institutes, which include Symbiosis Institute of Business Management in Pune and Bengaluru, Symbiosis Institute of Management Studies, Symbiosis Centre for Management and Human Resource Development, Symbiosis Institute of International Business, Symbiosis Institute of Telecom Management, Symbiosis Institute of Operations Management, Symbiosis School of Banking and Finance, Symbiosis Institute of Health Sciences and others across the Symbiosis network.

Unlike CAT, whose score is accepted by hundreds of unrelated institutes, SNAP is essentially a gateway to one university system. That is worth understanding before you sit it: the return on a strong SNAP score is admission to a Symbiosis institute, not a broad set of options across the country.

After the test, candidates apply separately to the individual Symbiosis institutes they are interested in, each of which sets its own cutoff and conducts its own subsequent selection process involving group exercises, personal interaction and writing ability assessment.

## How SNAP compares with the other management entrance exams

| Exam | Date | Questions and time | Attempts | Distinctive feature |
|---|---|---|---|---|
| [CAT 2026](/entrance-exams/cat-2026) | 29 November 2026 | 68 in 120 min | One | 40-minute sectional locks, TITA with no penalty |
| SNAP 2026 | 6, 14, 20 December 2026 | 60 in 60 min | Up to three, best counts | Shortest paper, no sectional limits |
| [XAT 2027](/entrance-exams/xat-2027) | 3 January 2027 | 95 in 180 min | One | Decision Making section, penalty for blanks |
| [NMAT 2026](/entrance-exams/nmat-2026) | 2 November to 20 December 2026 | 108 in 120 min | Up to three | Self-scheduled, no negative marking |

The December dates place SNAP after CAT and before XAT, which is convenient: a candidate can sit CAT in late November, SNAP across December, and XAT in early January without any clash.

Because SNAP is short and its syllabus overlaps heavily with CAT's, a candidate already preparing for CAT needs relatively little additional work for SNAP beyond practising at the faster pace. The marginal cost of adding it is low and the additional option is a full university system.

## What happens after the SNAP score

A SNAP score by itself admits nobody. What follows is a separate process run by each institute, and understanding it early changes how you spend December and January.

Symbiosis institutes publish their own cutoffs after the results, and these vary widely across the network. The flagship institutes at Pune set the highest bars, while several of the specialised institutes admit at noticeably lower scores. A score that is short of one institute can be comfortable at another, which is the argument for applying to several rather than betting on one.

Shortlisted candidates then attend the institute's selection process, which across the Symbiosis network typically combines a group exercise, a personal interaction and a writing ability test. The final merit is computed from a formula weighting the SNAP score alongside these components, and at most institutes the test accounts for well under half of the final score.

That has a practical consequence. A candidate who scores well in December and then does nothing until the selection round in February has left the larger part of the decision unprepared. Work on articulating why you want an MBA, why this institute, and what your academic and work background actually says about you, and do it before the results rather than after.

Academic record also carries weight at several institutes, drawing on Class 10, Class 12 and graduation performance, which is fixed and worth knowing when you assess your realistic call set.

## Common mistakes in SNAP

Preparing on CAT-length papers only. A 60-minute test rewards a different rhythm, and candidates who have only practised at two-hour length consistently mismanage the first twenty minutes.

Attempting the paper in order. With no sectional locks and no slack in the clock, working straight through from question one guarantees that whichever section falls last gets whatever time is left rather than the time it deserves.

Leaving too many blanks. At a 4 to 1 ratio the expected value of a guess is positive, so a candidate finishing with fifteen unanswered questions has left marks on the table.

Registering for the test and forgetting the institute applications. These are separate transactions with separate fees, and the test registration alone puts you nowhere.

Booking only one date. The three-attempt structure with best-score counting is the single biggest advantage SNAP offers, and using only one attempt discards it.

Assuming SNAP opens doors beyond Symbiosis. It is a gateway to one university system, which is a good outcome but a narrower one than CAT, and it should be sat as a complement to other tests rather than as a substitute.

## Preparing for SNAP

Practise at the real pace. A minute per question is the defining constraint, and candidates who prepare on CAT-length papers are training a different rhythm. Take timed 60-question, 60-minute mocks specifically.

Drill accuracy on the easier question types rather than depth on the hard ones. On a 60-mark paper, converting the questions you can do quickly matters more than solving the two or three hardest items.

Build a first-pass discipline: scan, answer what is fast, mark the rest, return. Practise it until it is automatic, because there is no time to invent a strategy on the day.

Work General English through reading practice, since it is typically the fastest-scoring section and a strong performance there buys time for the quantitative questions. Reading comprehension answered quickly and accurately is the cheapest source of marks on this paper.

Since attempts are cheap relative to a wasted year, plan for at least two dates from the outset and treat the first as both a real attempt and the best possible diagnostic.

Work Analytical and Logical Reasoning deliberately rather than assuming it will look after itself. On a paper this short, reasoning sets that take four minutes each are the main drain on the clock, and recognising within thirty seconds whether a puzzle is worth starting is a trained skill that separates candidates more than raw ability does.

Finally, rehearse the last five minutes. Decide in advance that you will stop solving at the 55-minute mark and spend the remainder filling every unanswered question, because at a 4 to 1 penalty ratio those blind attempts carry positive expected value and most candidates leave them on the table.

## How to apply

Registration is on the official SNAP portal.

1. Register with a valid email address and mobile number, which are used for the admit card and all further communication.
2. Complete the application with academic details exactly as on your certificates.
3. Select which of the three December test dates you wish to sit, up to three.
4. Pay the registration fee, plus the additional fee for each further attempt selected.
5. Apply separately to the individual Symbiosis institutes and programmes you are interested in, each of which carries its own application and fee.
6. Upload photograph and signature in the specified format.
7. Submit and save the confirmation, then download the admit card ahead of each test date you have booked.

Step 5 is the one candidates miss. Registering for SNAP does not apply you to any institute. The test score and the institute applications are separate transactions, and a candidate with a strong SNAP score who never filed institute applications is not considered anywhere.

## Documents you will need

1. Class 10 and Class 12 mark sheets and certificates.
2. Graduation mark sheets and degree certificate, or a bonafide certificate if you are in the final year.
3. Category certificate for SC and ST claims where the relaxed percentage is being applied.
4. PwD certificate where applicable.
5. Work experience certificates for the selection stage at institutes that give weight to experience.
6. Photograph, signature and a photo identity document matching the application.

## Frequently asked questions

**When is SNAP 2026 and when did registration open?**
SNAP 2026 is held on three dates: 6, 14 and 20 December 2026. Registration opened on 1 August 2026. Candidates register once and then select which of the three dates to sit, up to a maximum of three attempts, with an additional fee for each attempt beyond the first.

**How many times can I attempt SNAP 2026?**
Up to three times, across the three December test dates, and only your best score is considered for admission. This is unusual among management entrance examinations and means a poor first attempt costs you nothing but the additional fee, since a later attempt replaces it.

**What is the SNAP 2026 exam pattern?**
Sixty multiple choice questions in sixty minutes for 60 marks, across three sections: General English; Quantitative Aptitude, Data Interpretation and Data Sufficiency; and Analytical and Logical Reasoning. There is no sectional time limit, so the full hour can be distributed across sections as you choose.

**Is there negative marking in SNAP?**
Yes, 0.25 marks are deducted for a wrong answer against 1 mark for a correct one. That 4 to 1 ratio means blind guessing among four options carries a small positive expected value, and eliminating even one option makes attempting clearly worthwhile, so you should not leave many questions blank.

**Does SNAP have sectional time limits?**
No. The full 60 minutes is yours to distribute across the three sections and you can move between them freely, which is the opposite of CAT's 40-minute sectional locks. That freedom helps prepared candidates but is also where unprepared ones lose time, since nothing forces you out of a section you are stuck in.

**What is the eligibility for SNAP 2026?**
A bachelor's degree of at least three years' duration from a recognised university with a minimum of 50 per cent marks, relaxed to 45 per cent for SC and ST candidates. Final-year students may apply subject to producing proof of completion within the admitting institute's deadline. There is no age limit.

**Which colleges accept SNAP scores?**
SNAP is used for admission to Symbiosis International (Deemed University) and its constituent institutes, including SIBM Pune and Bengaluru, SIMS, SCMHRD, SIIB, SITM, SIOM, SSBF and SIHS among others. Unlike CAT, it is a gateway to one university system rather than a score accepted by hundreds of unrelated institutes.

**Is registering for SNAP the same as applying to Symbiosis institutes?**
No, and this catches candidates out every year. SNAP registration books the test only. You must apply separately to each Symbiosis institute and programme you are interested in, with its own application and fee. A candidate with a strong SNAP score who filed no institute applications is not considered anywhere.

**How should I manage time in a 60-minute SNAP paper?**
Make a fast first pass across the whole paper, answering only what you can do quickly, then return for the harder items with the time remaining. At one minute per question there is no slack, and attempting the paper in strict order is the most common way candidates run out of time before reaching sections they could have scored in.

**Is SNAP easier than CAT?**
It is shorter and its individual questions are generally regarded as less difficult than CAT's, but the time pressure is greater at one minute per question against CAT's roughly one minute forty seconds. The syllabus overlaps heavily, so a candidate preparing for CAT needs little extra content work for SNAP, mainly practice at the faster pace.

**Should I take SNAP if I am already preparing for CAT?**
Generally yes. The syllabus overlap is substantial, the December dates fall between CAT in late November and XAT in early January with no clash, and the three-attempt structure with best-score counting lowers the risk considerably. The main additional preparation is timed practice at the 60-question, 60-minute format.

**How much gap is there between the SNAP test dates?**
Roughly a week between 6 and 14 December, and a further six days to 20 December. That is not enough time to learn new material, but it is enough to correct a specific identified problem such as time mismanagement in a section or a recurring error in one question type, which is where second attempts usually gain most.`;

const FAQS = [];

const ROW = {
  slug: "snap-2026",
  title: "SNAP 2026: Three Attempts, Best Score, 60-Minute Paper",
  conducting_body: "Symbiosis International (Deemed University)",
  exam_date:
    "Three test dates: 6, 14 and 20 December 2026. Candidates may sit up to three attempts and the BEST score is considered for admission.",
  application_start: "2026-08-01",
  application_end: null,
  eligibility:
    "Bachelor's degree of at least three years' duration from a recognised university with a minimum of 50 per cent marks, relaxed to 45 per cent for SC and ST candidates. Final-year students may apply subject to producing proof of completion within the admitting institute's deadline. NO age limit. Note the 50 per cent floor is stricter than XAT, which sets no minimum percentage.",
  syllabus:
    "General English: reading comprehension, verbal reasoning and verbal ability. Quantitative Aptitude, Data Interpretation and Data Sufficiency: arithmetic, algebra, geometry, number systems, data interpretation and data sufficiency. Analytical and Logical Reasoning: arrangements, series, coding, blood relations, syllogism, critical reasoning and puzzles. The syllabus overlaps heavily with CAT, so a CAT aspirant needs little additional content work beyond practice at the faster pace.",
  exam_pattern:
    "Computer based test, 60 multiple choice questions, 60 minutes, 60 marks, across three sections. NO SECTIONAL TIME LIMIT: the full hour can be distributed across sections as you choose and you may move between them freely, the opposite of CAT's 40-minute locks. Marking: +1 for a correct answer and -0.25 for a wrong one, a 4 to 1 ratio under which blind guessing carries a small positive expected value, so few questions should be left blank. UP TO THREE ATTEMPTS across the three December dates, with only the BEST score considered for admission and an additional fee per attempt.",
  admit_card_link: "https://snaptest.org/",
  result_link: "https://snaptest.org/",
  official_link: "https://snaptest.org/",
  category: "management",
  state: "all-india",
  reading_time: "12 min read",
  description:
    "SNAP 2026 runs on 6, 14 and 20 December with up to three attempts and best score counting. Check the 60-minute pattern, marking and Symbiosis institutes.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
