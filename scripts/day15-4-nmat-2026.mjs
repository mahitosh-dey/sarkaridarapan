// Day 15 (Wed 2026-08-05) — NMAT 2026 deepening (840w -> 3000w+).
// Verified 2026-08-05. Conducted by GMAC (Graduate Management Admission Council).
// NOTE: some aggregator pages wrongly label NMAT as a Symbiosis test. It is not; SNAP is
// the Symbiosis one. NMAT originated as the NMIMS Management Aptitude Test.
// Registration from 20 Aug 2026, running to around October. Exam window 2 Nov to 20 Dec 2026.
// Pattern: 108 questions, 3 sections of 36 each, 360 marks, 120 minutes with SECTIONAL
// time limits. NO NEGATIVE MARKING.
// Up to 3 attempts (1 main + 2 retakes) with a 15-day gap between them.
// TRAP: NMIMS Mumbai considers ONLY the first attempt score, not retakes.
// Self-scheduling and rescheduling within the ~70-day window for a fee.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## NMAT 2026: you choose your date, your slot and your section order

NMAT 2026 is a management entrance test conducted by the Graduate Management Admission Council, the same body behind the GMAT. Registration opens on 20 August 2026 and the testing window runs from 2 November to 20 December 2026.

Almost everything about NMAT is unusual compared with the other Indian management entrance examinations, and the differences work in a prepared candidate's favour.

You choose your own test date and time slot within a testing window of roughly seventy days, rather than sitting on a date the conducting body fixes. You may attempt the test up to three times in one cycle. You may reschedule a booked appointment for a fee. And you may choose the order in which you attempt the three sections.

There is also no negative marking at all, which changes attempt strategy completely.

One correction worth making at the outset, because several sites get it wrong: NMAT is conducted by GMAC and originated as the NMIMS Management Aptitude Test. It is not a Symbiosis examination. SNAP is the Symbiosis one.

## Important dates

| Event | Date |
|---|---|
| Registration opens | 20 August 2026 |
| Registration closes | Around October 2026 |
| Testing window | 2 November to 20 December 2026 |

Within that window you book a specific date, time and centre yourself, subject to availability. Booking early gives you a better choice of slot and centre, and it also gives you room to schedule a retake before the window closes on 20 December.

## Exam pattern

NMAT is a computer based test of 108 questions in 120 minutes.

| Section | Questions | Marks |
|---|---|---|
| Language Skills | 36 | 120 |
| Quantitative Skills | 36 | 120 |
| Logical Reasoning | 36 | 120 |
| Total | 108 | 360 |

Each section carries its own time limit, and the sections are equal in both question count and weight. There is no negative marking anywhere in the paper.

## No negative marking changes everything

This is the single most actionable fact about NMAT, and candidates carrying habits from CAT or XAT routinely underuse it.

With no penalty for a wrong answer, an unattempted question is a guaranteed zero while a guess carries a one in four chance of a mark and costs nothing. There is no scenario in which leaving a question blank is correct.

The practical consequence: you should finish the test with 108 answers, every time. Reserve the final thirty seconds of each section to fill any questions you have not reached, choosing at random if necessary.

Candidates who have spent months training themselves to skip uncertain questions for CAT find this genuinely hard to do, which is why it is worth rehearsing in mocks rather than deciding on the day. The habit that protects your CAT score actively costs you marks here.

## Choosing your section order

NMAT lets you select the order in which you attempt Language Skills, Quantitative Skills and Logical Reasoning. No other major Indian management entrance test offers this.

The sensible approach is to start with your strongest section. Opening with material you handle comfortably banks marks early, settles nerves, and means that if anything goes wrong later it happens in a section that was going to be difficult anyway.

The alternative argument, starting with your weakest section while fresh, has some merit but generally loses. A poor opening section affects confidence for the remaining eighty minutes, and NMAT's sectional time limits mean a bad start cannot be recovered by borrowing time later.

Decide your order before the day and practise in that order, so the sequence is familiar rather than a decision made under pressure.

## Three attempts, and the trap in them

You may take NMAT up to three times in one cycle: one main attempt and two retakes, with a minimum gap of fifteen days between attempts.

That sounds straightforwardly good, and for most institutes it is: they consider your best score.

But there is an important exception that candidates need to know before booking. NMIMS Mumbai, the institute most NMAT candidates are primarily targeting, considers only the first attempt score. Retake scores are not used for its admission process.

Read that again if NMIMS Mumbai is your goal, because it inverts the strategy. If you are targeting NMIMS Mumbai, your first attempt is effectively your only attempt, and it should be taken when you are genuinely ready rather than early as a trial. Booking an unprepared first attempt in early November to see how it goes, planning to improve on a retake, is precisely the wrong move for that institute.

If NMIMS Mumbai is not your target, the three-attempt structure is a real advantage and an early first attempt as a diagnostic makes sense.

Each attempt carries its own fee, and a rescheduling fee applies if you move a booked appointment.

## What the sections test

Language Skills covers reading comprehension, para jumbles, sentence completion, error identification, synonyms and antonyms, analogies and vocabulary. NMAT retains more direct vocabulary and grammar testing than CAT does, so material that CAT preparation has largely abandoned remains useful here.

Quantitative Skills covers arithmetic, algebra, geometry and mensuration, number systems, modern mathematics, and a substantial data interpretation and data sufficiency component. The questions are generally more direct than CAT's, with less emphasis on unusual framing and more on straightforward computation done quickly.

Logical Reasoning covers arrangements, series, coding and decoding, blood relations, syllogism, critical reasoning, statement and assumption, and puzzle-based sets. It includes both verbal and analytical reasoning.

Across all three sections the defining characteristic is volume rather than difficulty. Thirty-six questions per section under a sectional clock means the paper rewards speed and accuracy on moderate questions rather than the ability to crack a few very hard ones.

## Eligibility

A bachelor's degree from a recognised university, completed in the standard duration, is required.

Final-year students may apply, subject to producing proof of completion within the deadline set by the institute admitting them.

Requirements on minimum percentage and age vary by the institute you are applying to rather than being set by the test itself, so check the admission criteria of your target institutes alongside registering for NMAT.

## Which institutes accept NMAT

NMIMS Mumbai and the wider NMIMS network are the principal users, and the score is accepted by a substantial list of other business schools including SDA Bocconi Asia Center, ISB Hyderabad and Mohali for certain programmes, Xavier University Bhubaneswar, Amity, BML Munjal, ICFAI, VIT and a range of university management departments.

Because you select which institutes receive your score during registration, with a defined number included in the base fee and additional score reports available for a charge, it is worth deciding your institute list before you register rather than after.

## How NMAT compares with the other management entrance exams

| Exam | Window or date | Questions and time | Negative marking | Attempts |
|---|---|---|---|---|
| [CAT 2026](/entrance-exams/cat-2026) | 29 November 2026 | 68 in 120 min | Yes, on MCQs | One |
| [SNAP 2026](/entrance-exams/snap-2026) | 6, 14, 20 December 2026 | 60 in 60 min | Yes, 0.25 | Up to three, best counts |
| [XAT 2027](/entrance-exams/xat-2027) | 3 January 2027 | 95 in 180 min | Yes, plus blank penalty | One |
| NMAT 2026 | 2 November to 20 December 2026 | 108 in 120 min | None | Up to three |

NMAT is the highest-volume paper of the four at 108 questions, and the only one with no negative marking. It is also the only one where you choose the date, the slot and the section order.

Its long window is a scheduling advantage worth using deliberately: you can sit NMAT in early November before CAT, or after CAT in December, depending on whether you want an early low-stakes test experience or prefer to concentrate on CAT first.

## How scoring and scaling work

NMAT scores are reported on a scaled range rather than as raw marks, with each section scaled and the three combined into a total out of 360.

Scaling exists because candidates sit different forms of the test across a seventy-day window, and those forms are not identical in difficulty. A scaled score adjusts for the specific form you received, so a candidate who happened to get a harder set is not penalised for it. Your scaled score is therefore comparable with every other candidate's regardless of when in the window you sat.

The practical consequence is that there is no advantage to be gained from picking a particular week of the window in the hope of an easier paper. Choose your date on readiness and convenience instead.

Institutes publish their cutoffs as scaled scores, and because the three sections are equally weighted at 120 marks each, a badly weak section is difficult to compensate for. Many institutes also apply sectional minimums alongside the overall cutoff, so an unbalanced profile with a very strong quantitative score and a very weak language score can fall short even where the total looks adequate.

## Using the long testing window strategically

The seventy-day window is a planning tool rather than just a convenience, and it interacts with the rest of the season.

Sitting NMAT in early November, before CAT on 29 November, gives you a live test experience under real conditions while the stakes are lower, which many candidates find steadies them for CAT. The risk is that preparation time in November is diverted from CAT at its most valuable point.

Sitting NMAT in December, after CAT, lets you concentrate fully on CAT first and then use the following weeks for NMAT. The risk is a compressed run into the 20 December close, with less room for a retake if the first attempt disappoints.

There is no universally correct answer, but the decision should be deliberate. The one combination to avoid is booking late in December with no slack, since a poor attempt then leaves no time for the fifteen-day gap a retake requires before the window shuts.

Remember also the NMIMS Mumbai exception when planning: if that institute is your target, the timing question is simply when you will be at your best, because the first attempt is the one that counts.

## Preparing for NMAT

Train for speed over depth. At 108 questions in 120 minutes with sectional limits, you have roughly 67 seconds per question, so the constraint is throughput on moderate questions rather than the ability to solve hard ones. Practice sets should be timed and voluminous rather than difficult.

Rebuild vocabulary and grammar work if your preparation has been CAT-focused. Language Skills tests these directly in a way CAT no longer does, so synonyms, antonyms, analogies and error identification all reappear as question types you may not have touched in months.

Practise in your chosen section order every time, so the sequence becomes automatic.

Rehearse full attempts. Because there is no negative marking, the target is 108 answers, and the discipline of filling every remaining question in the closing seconds of each section needs to be a trained reflex rather than a decision.

Book your slot early for choice of centre and timing, and if NMIMS Mumbai is your target, book the first attempt for when you are actually ready rather than as an experiment.

Balance your preparation across all three sections rather than maximising your strongest. Because the sections are equally weighted at 120 marks each and many institutes apply sectional minimums alongside the overall cutoff, a very strong quantitative score cannot rescue a very weak language score. The candidate with three solid sections is better placed than one with a spike and a hole, even at the same total.

Practise data interpretation deliberately within Quantitative Skills. It carries a substantial share of that section, the sets are more direct than CAT's but come at pace, and it is the area where trained speed converts most reliably into marks.

## Mistakes that cost NMAT candidates marks

Leaving questions blank. There is no negative marking, so every blank is a discarded one in four chance at a mark. Candidates arriving from CAT preparation carry a skipping habit that actively costs them here, and it needs unlearning in mocks rather than on the day.

Booking the first attempt as a trial run while targeting NMIMS Mumbai. That institute counts only the first score, so an unprepared opening attempt cannot be repaired by a retake.

Leaving the booking until December. Slots tighten towards the close of the window on 20 December, centre choice narrows, and there is no room left for the fifteen-day gap a retake requires.

Deciding the section order at the test centre. The order is a real advantage only if it is familiar, and choosing under pressure wastes the benefit.

Neglecting the weakest section on the assumption that a strong total will carry it. With three equally weighted sections and sectional minimums applied by many institutes, a hole in one area can end an application that the total appeared to support.

Registering without deciding the institute list. Score reports to institutes are selected during registration, with a set number included in the base fee and further reports charged, so a list decided in advance saves both money and rework.

Turning up with an identity document whose name does not match the registration. GMAC applies international testing standards and this results in refused entry with the fee forfeited.

## How to apply

Registration is on the official NMAT portal run by GMAC.

1. Create an account and complete your profile with academic details exactly as on your certificates.
2. Select the institutes and programmes you want your score sent to, noting how many are included in the base fee and what additional reports cost.
3. Pay the registration fee.
4. Schedule your test appointment: choose date, time slot and test centre within the 2 November to 20 December window, subject to availability.
5. Download the admit card once the appointment is confirmed.
6. If you need to change your appointment, reschedule through the portal, which carries a fee.
7. If you intend to retake, book the next attempt observing the fifteen-day minimum gap and ensure it falls before the window closes on 20 December.

## Documents you will need

1. Class 10 and Class 12 mark sheets and certificates.
2. Graduation mark sheets and degree certificate, or a bonafide certificate if you are in the final year.
3. A valid photo identity document, which must match the name in your registration exactly, since GMAC is strict on identity verification at the centre.
4. Category certificate where a target institute applies reservation.
5. Work experience certificates for the selection stage where institutes weight experience.
6. Photograph and signature in the specified format.

The identity document requirement deserves attention. GMAC applies international testing standards on identity verification and a mismatch between the name on your ID and your registration can result in being refused entry to the centre, with the fee forfeited.

## Frequently asked questions

**When is NMAT 2026 and how do I choose my date?**
Registration opens on 20 August 2026 and runs to around October, with the testing window from 2 November to 20 December 2026. You select your own date, time slot and centre within that window when you schedule your appointment, subject to availability, rather than sitting on a fixed date set by the conducting body. Booking early gives better choice of slot and leaves room for a retake.

**Is there negative marking in NMAT?**
No. There is no penalty for a wrong answer anywhere in the paper, which means an unattempted question is a guaranteed zero while a guess costs nothing and carries a one in four chance of a mark. You should finish with all 108 questions answered, filling any you have not reached in the closing seconds of each section.

**How many times can I attempt NMAT 2026?**
Up to three times in one cycle: one main attempt and two retakes, with a minimum gap of fifteen days between attempts and each carrying its own fee. All attempts must fall within the testing window, which closes on 20 December 2026.

**Does NMIMS Mumbai consider NMAT retake scores?**
No. NMIMS Mumbai considers only the first attempt score for its admission process, which is a critical exception to the three-attempt advantage. If NMIMS Mumbai is your target, your first attempt is effectively your only one and should be booked for when you are genuinely prepared rather than taken early as a trial. Most other institutes consider your best score.

**What is the NMAT 2026 exam pattern?**
108 questions in 120 minutes across three equally weighted sections of 36 questions each: Language Skills, Quantitative Skills and Logical Reasoning, for a total of 360 marks. Each section carries its own time limit, and there is no negative marking.

**Can I choose the order of sections in NMAT?**
Yes, and no other major Indian management entrance test allows this. Most candidates do best starting with their strongest section, since it banks marks early and settles nerves, and the sectional time limits mean a poor opening cannot be recovered by borrowing time later. Decide the order in advance and practise in it.

**Who conducts NMAT?**
The Graduate Management Admission Council, GMAC, the body behind the GMAT. NMAT originated as the NMIMS Management Aptitude Test. It is not a Symbiosis examination, despite some sites describing it that way; SNAP is the Symbiosis test.

**Which colleges accept NMAT scores?**
NMIMS Mumbai and the wider NMIMS network are the principal users, alongside SDA Bocconi Asia Center, ISB for certain programmes, Xavier University Bhubaneswar, Amity, BML Munjal, ICFAI, VIT and a range of university management departments. You select which institutes receive your score during registration, with a set number included in the base fee.

**Is NMAT easier than CAT?**
The individual questions are generally more direct than CAT's, with less unusual framing, and the absence of negative marking removes the risk that makes CAT stressful. Against that, NMAT asks 108 questions in the same 120 minutes CAT uses for 68, so the pace is considerably faster. It is less about difficulty and more about throughput.

**Can I reschedule my NMAT appointment?**
Yes, through the official portal, subject to a rescheduling fee and slot availability. This flexibility is one of NMAT's distinguishing features, though it is worth avoiding late rescheduling since availability tightens towards the end of the window in December.

**What should I carry to the NMAT test centre?**
A valid photo identity document whose name matches your registration exactly, along with your admit card. GMAC applies international testing standards on identity verification, and a name mismatch can result in refused entry with the fee forfeited, so check this when you register rather than on the day.

**Should I take NMAT alongside CAT?**
For most candidates yes. The long testing window means it need not clash with CAT preparation, the absence of negative marking makes it lower-risk, and the three-attempt structure suits candidates who improve with test experience. The main additional preparation is rebuilding vocabulary and grammar work, which CAT-focused study tends to drop, and training for the faster pace.`;

const FAQS = [];

const ROW = {
  slug: "nmat-2026",
  title: "NMAT 2026: No Negative Marking, 3 Attempts, Your Slot",
  conducting_body: "Graduate Management Admission Council (GMAC)",
  exam_date:
    "Testing window 2 November to 20 December 2026. Candidates self-schedule their own date, time slot and centre within that window, subject to availability, and may reschedule for a fee.",
  application_start: "2026-08-20",
  application_end: null,
  eligibility:
    "A bachelor's degree from a recognised university completed in the standard duration. Final-year students may apply subject to producing proof of completion within the admitting institute's deadline. Minimum percentage and age requirements are set by the individual institutes rather than by the test itself, so check the admission criteria of your target institutes alongside registering.",
  syllabus:
    "Language Skills: reading comprehension, para jumbles, sentence completion, error identification, synonyms and antonyms, analogies and vocabulary. NMAT tests vocabulary and grammar more directly than CAT does. Quantitative Skills: arithmetic, algebra, geometry and mensuration, number systems, modern mathematics, plus a substantial data interpretation and data sufficiency component, with questions generally more direct than CAT's. Logical Reasoning: arrangements, series, coding and decoding, blood relations, syllogism, critical reasoning, statement and assumption, and puzzle-based sets, covering both verbal and analytical reasoning.",
  exam_pattern:
    "Computer based test, 108 questions, 120 minutes, 360 marks. Three equally weighted sections of 36 questions each: Language Skills, Quantitative Skills and Logical Reasoning, each with its own SECTIONAL TIME LIMIT. NO NEGATIVE MARKING anywhere in the paper, so every question should be answered and no blanks left. Candidates may CHOOSE THE ORDER of the three sections, which no other major Indian management entrance test allows. UP TO THREE ATTEMPTS per cycle (one main plus two retakes) with a minimum 15-day gap. IMPORTANT: NMIMS Mumbai considers ONLY the first attempt score; most other institutes consider the best score.",
  admit_card_link: "https://www.nmat.org/",
  result_link: "https://www.nmat.org/",
  official_link: "https://www.nmat.org/",
  category: "management",
  state: "all-india",
  reading_time: "12 min read",
  description:
    "NMAT 2026 runs 2 November to 20 December with no negative marking and three attempts. Check the pattern, section order choice and the NMIMS Mumbai catch.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
