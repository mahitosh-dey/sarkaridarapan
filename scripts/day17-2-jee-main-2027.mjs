// Day 17 (Mon 2026-08-10) — JEE Main 2027 deepening (438w -> 3000w+).
// Verified 2026-08-10. NTA. NOTIFICATION NOT OUT: expected October 2026.
// Session 1 expected January 2027, Session 2 expected April 2027, on the recent pattern.
// All dates are PROJECTIONS until NTA publishes the information bulletin -> stated honestly.
// Established structure (Paper 1, BE/BTech): 75 questions, 300 marks, 3 subjects x 25
// (20 MCQ + 5 numerical). Marking +4 / -1. NOTE the change from 2025: Section B numerical
// questions became COMPULSORY (5 of 5) instead of optional (5 of 10) -> older material wrong.
// Two sessions with BEST of the two NTA scores considered.
// Top ~2.5 lakh qualify for JEE Advanced. 75% in Class 12 (65% SC/ST) or top 20 percentile
// required for NIT/IIIT/GFTI admission, which is separate from JEE Main eligibility itself.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## JEE Main 2027: what is settled and what is not

JEE Main 2027 will be conducted by the National Testing Agency, with the notification expected in October 2026 and Session 1 expected in January 2027.

Both of those are expectations rather than announcements. NTA has not published the information bulletin for 2027, which means the registration window, the exact examination dates, the fee and the centre list are all unconfirmed. Any specific date you see quoted for JEE Main 2027 at present is a projection from the recent cycles, not a published schedule.

What is settled is the structure, because NTA has run it consistently and the examination's design is well established. That is what this page covers in detail, along with one change from recent cycles that older preparation material still gets wrong.

The change: from 2025, the numerical answer questions in Section B became compulsory. Previously each subject offered ten numerical questions of which candidates attempted any five. Now there are five and all five must be attempted. Anyone practising from books or question banks built before that change is training against a paper that allowed a choice which no longer exists.

## Expected schedule

| Event | Expected timing |
|---|---|
| Notification and information bulletin | October 2026 |
| Session 1 registration | October to November 2026 |
| Session 1 examination | January 2027 |
| Session 2 registration | February 2027 |
| Session 2 examination | April 2027 |

These follow the pattern of recent cycles. Watch jeemain.nta.nic.in for the bulletin rather than relying on secondary sites, since NTA fixes the dates there and has occasionally shifted them.

## Two sessions, and how the best score works

JEE Main runs in two sessions, and this is one of the most useful features of the examination for a candidate.

You may appear in one session or both. If you appear in both, the better of your two NTA scores is the one used for your rank and for JEE Advanced eligibility. The weaker score is discarded.

That structure removes much of the single-day risk that makes other entrance examinations stressful. A candidate who is unwell in January, or who mismanages the paper, has a full second attempt in April with nothing lost.

The strategic implication is worth stating clearly. Session 1 should be treated as a real attempt rather than a rehearsal, because a good score there removes pressure entirely and lets you use February and March on JEE Advanced preparation instead. But it should be sat without the anxiety of finality, because it is not final.

Candidates who deliberately skip Session 1 to prepare more for Session 2 usually get this wrong. They forgo a free attempt, arrive in April with no live examination experience, and carry all the pressure into a single day.

## Exam pattern for Paper 1 (BE and BTech)

| Element | Detail |
|---|---|
| Subjects | Physics, Chemistry, Mathematics |
| Questions per subject | 25, being 20 multiple choice and 5 numerical answer |
| Total questions | 75 |
| Total marks | 300 |
| Duration | 3 hours |
| Mode | Computer based |
| Marking | +4 for correct, −1 for incorrect |

Section A of each subject holds the 20 multiple choice questions. Section B holds the 5 numerical answer questions, where you type a numerical value rather than selecting an option, and all five are compulsory.

Negative marking applies to both sections at one mark, which is another change worth noting: numerical questions previously carried no penalty in some cycles, and they now do.

## Papers 2A and 2B

JEE Main is not only an engineering entrance. Paper 2A is for BArch and Paper 2B for BPlanning admissions.

Paper 2A covers Mathematics, an Aptitude Test, and a Drawing Test, with the drawing component assessed separately. Paper 2B covers Mathematics, an Aptitude Test, and a Planning-based section.

Candidates may appear for Paper 1 and Paper 2 in the same session if applying to both engineering and architecture or planning programmes, which requires selecting both at application and paying the applicable fee.

## Marking strategy

At +4 and −1 the ratio is 4 to 1, which is comparatively forgiving.

Guessing blindly among four options in Section A yields on average one correct at plus 4 against three wrong at minus 3, netting plus 1. So blind guessing has positive expected value, and eliminating even one option makes attempting clearly correct.

Section B is different in character. A numerical answer question has no options to eliminate, so a guess is not a one-in-four proposition; it is effectively a shot in the dark with a one-mark penalty attached. There, attempt only where you have actually worked the problem or can bound the answer sensibly. Since all five are compulsory in the sense that no choice is offered, that does not mean all five must be answered.

Across the paper, the practical rule is to be liberal with attempts in Section A once you can narrow options, and disciplined in Section B where a wrong value costs a mark with no compensating probability.

## Percentile and normalisation

JEE Main results are reported as NTA scores, which are percentile scores, rather than as raw marks.

Because the examination runs across multiple days and shifts, NTA normalises across sessions so that a candidate who sat a harder shift is not disadvantaged. Your NTA score reflects your relative position among candidates in your session, computed to several decimal places.

The All India Rank is then derived from the combined best NTA scores of both sessions, with a defined tie-breaking procedure applied where scores are identical.

Two consequences follow. There is no advantage in choosing a particular shift or date in the hope of an easier paper, since normalisation removes it. And a high percentile in a shift with strong candidates is worth the same as a high percentile anywhere else.

## Eligibility, and the separate Class 12 condition

For appearing in JEE Main, a candidate must have passed Class 12 or an equivalent examination, or be appearing in it in the current year. Candidates who passed in the two preceding years are also eligible, giving effectively three consecutive years of eligibility.

There is no age limit for appearing in JEE Main itself.

The condition that catches candidates out is separate from examination eligibility. For admission to the NITs, IIITs and centrally funded technical institutions through JoSAA counselling, a candidate needs either 75 per cent aggregate in Class 12, relaxed to 65 per cent for SC and ST candidates, or to be within the top 20 percentile of their Class 12 board.

So it is entirely possible to score well in JEE Main and be ineligible for an NIT seat on Class 12 marks. That requirement is set by the admitting institutions rather than by NTA, and candidates in Class 12 should treat their board examination as part of the engineering admission process rather than as a separate matter.

## What JEE Main leads to

| Destination | Route |
|---|---|
| NITs, IIITs and GFTIs | JoSAA counselling on the basis of JEE Main rank, subject to the Class 12 condition |
| IITs | JEE Main is the qualifying stage; the top candidates, around 2.5 lakh, become eligible for JEE Advanced |
| State engineering colleges | Many states use JEE Main scores for admission to their institutions |
| Private and deemed universities | A large number accept JEE Main scores |
| BArch and BPlanning programmes | Through Papers 2A and 2B |

The JEE Advanced link is the one candidates focus on most. Qualifying JEE Main at a rank within the announced cutoff, generally around the top 2.5 lakh, makes a candidate eligible to sit JEE Advanced, which is the examination for admission to the IITs. Session performance therefore matters twice: for your own NIT and state options, and for whether you reach JEE Advanced at all.

## Preparing for JEE Main 2027

Working back from an expected January 2027 Session 1, there are roughly five months.

Build from the NCERT texts for Class 11 and 12 across all three subjects, since the syllabus is drawn from them and NTA questions stay within that scope. Standard reference books add depth for the harder questions but do not replace the NCERT base.

Practise numerical answer questions specifically. They are compulsory now, they carry negative marking, and they require exact values rather than recognisable options, which is a different skill from multiple choice work. Candidates who prepare only on MCQs are underprepared for a third of each subject's question count.

Work previous years' papers, which are freely available and remain the best guide to how NTA frames questions.

Take full computer-based mocks under the three-hour clock, including on NTA's own mock platform when it opens, so the interface is familiar. A candidate meeting the numerical entry field for the first time on exam day loses time to it.

Do not neglect Class 12 board preparation. The 75 per cent condition for NIT admission makes the board examination part of the same project, and candidates who treat it as an afterthought can find a good JEE rank unusable.

Plan to sit both sessions from the outset.

## Subject-wise approach

Because the three subjects reward different things, a single study method applied uniformly wastes effort.

Physics rewards conceptual clarity over memorisation. Mechanics, electrostatics, current electricity, magnetism, optics and modern physics carry consistent weight, and the questions typically require applying two or three concepts together rather than recalling a formula. Working problems is the only method that builds this; reading theory produces a false sense of readiness.

Chemistry splits into three parts that behave differently. Physical chemistry is numerical and rewards practice in the same way physics does. Inorganic chemistry is substantially memory-based, covering periodic properties, chemical bonding, coordination compounds and the p-block and d-block elements, and it responds directly to systematic revision, which makes it the most reliably scoring portion for a disciplined candidate. Organic chemistry rewards understanding reaction mechanisms rather than memorising individual reactions, since the same mechanism explains many transformations.

Mathematics is the most time-expensive subject in the examination. Calculus, coordinate geometry, algebra, trigonometry, vectors and three-dimensional geometry, and probability carry the bulk of the questions, and speed comes from recognising question types rather than from working faster. Candidates who run short of time on the paper are usually losing it here.

A practical allocation, for a candidate with all three at a comparable level, is to protect inorganic chemistry revision as the cheapest marks available, invest most problem-solving time in mathematics and physics, and treat organic chemistry mechanisms as a distinct project rather than as reaction lists to memorise.

## Mistakes that cost JEE Main candidates

Skipping Session 1. It is a free attempt with the better score counting, and forgoing it concentrates all the risk on a single April date with no live examination experience behind you.

Practising numerical questions as though they were optional. They are compulsory now and carry negative marking, and a candidate who has only drilled multiple choice is unprepared for a third of each subject's questions.

Guessing in Section B. With no options to eliminate, a numerical guess is a shot in the dark with a one-mark penalty. Discipline there is worth more than volume.

Treating the Class 12 board examination as separate. The 75 per cent condition for NIT admission makes it part of the same project, and a strong JEE rank with insufficient board marks is a genuinely wasted year.

Preparing beyond the NCERT scope. Reference books add depth on hard questions, but candidates who abandon the NCERT base for advanced material often find they have gaps in exactly the straightforward questions that make up most of the paper.

Meeting the computer interface on exam day. NTA publishes a mock platform, and the numerical entry field in particular costs time to anyone using it for the first time under pressure.

## How to apply, when the window opens

Applications will be filed on jeemain.nta.nic.in.

1. Register with a valid email address and mobile number, both used for all communication including the admit card.
2. Complete the application with personal and academic details exactly as on your certificates.
3. Select the paper or papers you are applying for: Paper 1 for BE and BTech, Paper 2A for BArch, Paper 2B for BPlanning, or a combination.
4. Choose your examination city preferences in order.
5. Upload photograph, signature and the required documents in the specified format and dimensions, which NTA specifies precisely and rejects if not met.
6. Pay the application fee, which varies by paper combination and category.
7. Submit and save the confirmation page and application number.

NTA usually provides a correction window after the close of applications, but it is limited in what it allows to be changed, so accuracy at submission matters.

## Frequently asked questions

**When is JEE Main 2027?**
Session 1 is expected in January 2027 and Session 2 in April 2027, with the NTA notification expected in October 2026. None of these are confirmed: NTA has not published the 2027 information bulletin, so registration dates, exact examination dates, fees and centres are all unannounced. Any specific date circulating now is a projection from recent cycles rather than a published schedule.

**What is the JEE Main 2027 exam pattern?**
Paper 1 for BE and BTech has 75 questions for 300 marks over 3 hours, computer based, with 25 questions in each of Physics, Chemistry and Mathematics. Each subject has 20 multiple choice questions in Section A and 5 numerical answer questions in Section B. Marking is +4 for a correct answer and −1 for an incorrect one in both sections.

**Are the numerical questions in JEE Main optional?**
No, not since 2025. Previously each subject offered ten numerical questions of which candidates attempted any five. From 2025 there are five and no choice is offered. Preparation material published before that change trains against a paper that allowed an option which no longer exists, so check the edition of any question bank you are using.

**How do the two JEE Main sessions work?**
JEE Main runs in two sessions and you may appear in one or both. If you appear in both, the better of your two NTA scores is used for your rank and for JEE Advanced eligibility, and the weaker is discarded. This removes most of the single-day risk, which is why deliberately skipping Session 1 to prepare longer for Session 2 is usually a mistake: it forgoes a free attempt and puts all the pressure on one day.

**Is there negative marking in JEE Main?**
Yes, one mark for each incorrect answer against four for a correct one, in both the multiple choice and the numerical sections. In Section A that 4 to 1 ratio makes guessing positively valued once you can eliminate an option. In Section B there are no options to eliminate, so a guess is a shot in the dark carrying a one-mark penalty, and those questions should be attempted only where you have worked the problem.

**What is the Class 12 percentage requirement for JEE Main?**
There is no percentage requirement to appear in JEE Main. But for admission to the NITs, IIITs and centrally funded technical institutions through JoSAA counselling, a candidate needs 75 per cent aggregate in Class 12, relaxed to 65 per cent for SC and ST candidates, or to be within the top 20 percentile of their board. That condition is set by the admitting institutions, so it is possible to score well in JEE Main and still be ineligible for an NIT seat.

**How many attempts do I get at JEE Main?**
Candidates who passed Class 12 in the current year or either of the two preceding years are eligible, which gives effectively three consecutive years of eligibility, with two sessions in each year. There is no age limit for appearing in the examination itself.

**How does JEE Main lead to the IITs?**
JEE Main is the qualifying stage. Candidates ranked within the announced cutoff, generally around the top 2.5 lakh, become eligible to sit JEE Advanced, which is the examination used for admission to the IITs. So JEE Main performance matters twice: for your own NIT, IIIT and state college options through JoSAA, and for whether you reach JEE Advanced at all.

**What is the NTA score and how is it different from marks?**
The NTA score is a percentile score reflecting your relative position among candidates in your session, computed to several decimal places, rather than your raw marks. Because the examination runs across multiple days and shifts, NTA normalises across them so a candidate who sat a harder shift is not disadvantaged. There is therefore no advantage in choosing a particular date or shift hoping for an easier paper.

**What are Paper 2A and Paper 2B in JEE Main?**
Paper 2A is for BArch admissions and covers Mathematics, an Aptitude Test and a Drawing Test. Paper 2B is for BPlanning admissions and covers Mathematics, an Aptitude Test and a Planning-based section. Candidates applying to both engineering and architecture or planning programmes may appear for Paper 1 and Paper 2 in the same session by selecting both at application and paying the applicable fee.

**How should I prepare for JEE Main 2027 from now?**
With roughly five months to an expected January session, build from the NCERT texts for Classes 11 and 12 since the syllabus is drawn from them, using reference books for depth rather than as a replacement. Practise numerical answer questions specifically, as they are compulsory, carry negative marking and demand exact values. Work previous years' papers, take full computer-based mocks under the three-hour clock including on NTA's own mock platform, and keep Class 12 board preparation running given the 75 per cent condition for NIT admission.

**Where will JEE Main 2027 applications be filed?**
On jeemain.nta.nic.in, once NTA publishes the information bulletin expected in October 2026. Watch that site directly rather than aggregator pages, since the dates, fees, centre list and document specifications are all fixed there, and NTA rejects uploads that do not meet its stated format and dimension requirements.`;

const FAQS = [];

const ROW = {
  slug: "jee-main-2027",
  title: "JEE Main 2027: Expected Dates, Pattern, Two Sessions",
  conducting_body: "National Testing Agency (NTA)",
  exam_date:
    "NOT CONFIRMED. Session 1 expected January 2027 and Session 2 expected April 2027, with the NTA notification expected October 2026. NTA has not published the 2027 information bulletin, so registration dates, exact exam dates, fees and centres are all unannounced. Any specific date circulating now is a projection from recent cycles.",
  application_start: null,
  application_end: null,
  eligibility:
    "Passed Class 12 or an equivalent examination, or appearing in it in the current year. Candidates who passed in either of the two preceding years are also eligible, giving effectively three consecutive years of eligibility with two sessions in each. NO age limit for appearing. SEPARATE CONDITION for admission: for the NITs, IIITs and centrally funded technical institutions through JoSAA counselling, a candidate needs 75 per cent aggregate in Class 12 (65 per cent for SC and ST) or to be within the top 20 percentile of their board. That is set by the admitting institutions, so it is possible to score well in JEE Main and still be ineligible for an NIT seat.",
  syllabus:
    "Physics, Chemistry and Mathematics, drawn from the Class 11 and 12 NCERT curriculum, which is the right base to prepare from since NTA questions stay within that scope. Paper 2A for BArch covers Mathematics, an Aptitude Test and a Drawing Test. Paper 2B for BPlanning covers Mathematics, an Aptitude Test and a Planning-based section.",
  exam_pattern:
    "Paper 1 (BE and BTech): 75 questions, 300 marks, 3 hours, computer based. 25 questions in each of Physics, Chemistry and Mathematics, comprising 20 multiple choice in Section A and 5 numerical answer questions in Section B. Marking +4 for correct and -1 for incorrect in BOTH sections. IMPORTANT CHANGE FROM 2025: the Section B numerical questions are now COMPULSORY (five, with no choice) where previously ten were offered and any five attempted, and they now carry negative marking. Material published before that change trains against a paper that no longer exists. Results are reported as NTA percentile scores, not raw marks, with normalisation across days and shifts so no shift is advantageous. TWO SESSIONS per cycle with the BEST of the two NTA scores used for rank and JEE Advanced eligibility. Candidates ranked within the announced cutoff, generally around the top 2.5 lakh, qualify for JEE Advanced.",
  admit_card_link: "https://jeemain.nta.nic.in/",
  result_link: "https://jeemain.nta.nic.in/",
  official_link: "https://jeemain.nta.nic.in/",
  category: "engineering",
  state: "all-india",
  reading_time: "12 min read",
  description:
    "JEE Main 2027 notification is expected in October with Session 1 in January. Check the pattern, the 2025 numerical question change and the 75 per cent rule.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
