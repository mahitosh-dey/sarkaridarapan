// Day 16 (Thu 2026-08-06) — AILET 2027 deepening (460w -> 3000w+).
// Verified 2026-08-05/06. National Law University Delhi.
// Registration opened 7 Aug 2026. Exam 13 December 2026 (Sunday), 2:00 to 4:00 pm.
// Offline, 150 MCQs, 120 minutes. Three sections only:
//   English Language 50, Current Affairs and GK 30, Logical Reasoning 70.
// Marking +1 / -0.25, no penalty for unattempted.
// Admits ONLY to NLU Delhi (BA LLB Hons, LLM, PhD).
// MOAT: AILET has NO Legal Reasoning section and NO Quantitative section, unlike CLAT, and
// Logical Reasoning alone is 70 of 150 (47 per cent). Preparation does not transfer cleanly
// from CLAT, which most candidates assume it does.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## AILET 2027: one university, and a very different paper

AILET 2027, the All India Law Entrance Test conducted by National Law University Delhi, is on Sunday 13 December 2026 from 2:00 pm to 4:00 pm. Registration opened on 7 August 2026 on the university's official portal.

AILET exists because NLU Delhi is the one National Law University that does not use CLAT. Every other NLU admits through the Consortium's common test; NLU Delhi runs its own. So AILET is a single-university examination, admitting to its BA LLB (Hons), LLM and PhD programmes and nothing else.

The assumption most candidates make is that AILET is CLAT with a different name, and that preparing for one covers the other. It does not.

AILET has no Legal Reasoning section. It has no Quantitative section either. What it has instead is Logical Reasoning carrying 70 of its 150 questions, nearly half the paper. A CLAT-prepared candidate walking into AILET has spent months on legal principles that will not appear and arithmetic that will not be tested, while under-preparing the section that dominates the paper.

## Important dates

| Event | Date |
|---|---|
| Registration opens | 7 August 2026 |
| Examination | 13 December 2026, Sunday, 2:00 pm to 4:00 pm |

AILET falls one week after CLAT, which is on 6 December 2026. That spacing is convenient: sitting both is entirely practical, and the week between them is enough to shift emphasis from one format to the other.

## Exam pattern

AILET is an offline paper of 150 multiple choice questions in 120 minutes.

| Section | Questions | Share of paper |
|---|---|---|
| Logical Reasoning | 70 | About 47 per cent |
| English Language | 50 | About 33 per cent |
| Current Affairs and General Knowledge | 30 | 20 per cent |
| Total | 150 | 100 per cent |

Each correct answer carries 1 mark and each wrong answer costs 0.25 marks. Unattempted questions carry no penalty.

At 150 questions in 120 minutes you have 48 seconds per question, which is noticeably faster than CLAT's full minute. AILET asks more questions in the same time, so pace matters more here than it does a week earlier.

## Logical Reasoning is the exam

Seventy questions out of 150 sit in one section. No other law entrance examination weights a single section this heavily, and it should reshape how you allocate preparation time.

The section covers argument analysis, assumptions, inferences, conclusions and flaws; syllogisms and logical deductions; analytical reasoning through arrangements, sequences, orderings and puzzles; coding and decoding; blood relations and directions; series; and critical reasoning on short passages.

Two implications follow.

First, a candidate strong in logical reasoning has a structural advantage at AILET that they do not have at CLAT, where the same skill covers only about a fifth of the paper. If reasoning is your strength, AILET is the better bet of the two.

Second, the reverse is equally true. A candidate who is comfortable with legal reasoning and current affairs but slow at puzzles will find AILET considerably harder than CLAT, and should plan accordingly rather than treating it as a free second attempt.

Because analytical reasoning puzzles are time-expensive, set selection matters here in the same way it does in a data interpretation section. Recognising within thirty seconds whether a puzzle is tractable, and moving on when it is not, is worth more than raw solving ability on a paper this long.

## English Language

Fifty questions, a third of the paper, and a section where AILET tests more directly than CLAT does.

Expect reading comprehension passages with inference and tone questions, alongside vocabulary, synonyms and antonyms, idioms, grammar and error identification, sentence correction, para jumbles and cloze passages.

The distinction from CLAT is worth noting. CLAT's English section is almost entirely comprehension-based, with vocabulary tested in context. AILET retains direct vocabulary and grammar questions, which means the word lists and grammar rules that CLAT preparation has largely abandoned remain useful here.

## Current Affairs and General Knowledge

Thirty questions, the smallest section, covering national and international current affairs of roughly the preceding year, along with static general knowledge across history, geography, polity, economics, science, awards, sports and matters of legal significance.

At 20 per cent of the paper it deserves proportionate attention. A daily newspaper habit maintained through the autumn covers most of what is needed, and it serves CLAT simultaneously, which makes it efficient preparation across both examinations.

## Marking strategy

At +1 and −0.25 the ratio is 4 to 1, the same as CLAT.

A blind guess among four options yields on average one correct at plus 1 against three wrong at minus 0.75, netting plus 0.25. So guessing carries a small positive expected value and eliminating even one option makes attempting clearly worthwhile.

On a 150-question paper at 48 seconds a question, though, the realistic constraint is not whether to guess but whether you reach the questions at all. Most candidates do not complete AILET. Time management, and particularly the discipline of abandoning expensive puzzles, decides more outcomes than marking strategy does.

Reserve the closing minutes to fill anything unanswered, since blanks score nothing while guesses carry positive expected value.

## Eligibility

For the BA LLB (Hons) programme, candidates must have passed Class 12 or an equivalent examination with the minimum percentage prescribed by NLU Delhi, with relaxation for reserved categories as specified in the prospectus.

Candidates appearing in Class 12 in the current academic year may apply, subject to producing proof of passing at the time of admission.

For the LLM programme, an LLB degree or equivalent with the prescribed minimum marks is required, and for the PhD programme the conditions set out in the prospectus apply.

Because AILET is a single-university examination, the eligibility conditions are set by NLU Delhi rather than by a consortium, and candidates should read the current prospectus rather than assuming CLAT's conditions carry across.

## AILET compared with CLAT

The two examinations of December sit a week apart and are routinely treated as interchangeable. They are not.

| | [CLAT 2027](/entrance-exams/clat-2027) | AILET 2027 |
|---|---|---|
| Conducted by | Consortium of NLUs | NLU Delhi |
| Exam date | 6 December 2026 | 13 December 2026 |
| Questions | 120 | 150 |
| Duration | 120 minutes | 120 minutes |
| Time per question | 60 seconds | 48 seconds |
| Sections | Five | Three |
| Legal Reasoning | About 25 per cent | Not a section |
| Quantitative | About 10 per cent | Not a section |
| Logical Reasoning | About 20 per cent | About 47 per cent |
| English | About 20 per cent, comprehension-led | About 33 per cent, includes direct grammar and vocabulary |
| Admits to | 26 NLUs | NLU Delhi only |

Read that table properly and the strategic picture is clear. These examinations reward different profiles. CLAT spreads its weight across five areas and rewards the all-rounder with strong reading comprehension. AILET concentrates nearly half its marks in logical reasoning and rewards the candidate who is fast and accurate at puzzles and argument analysis.

Sitting both is still sensible for anyone serious about the NLUs, since the marginal preparation is manageable and NLU Delhi is among the most sought-after law schools in the country. But budget real time for AILET-specific reasoning practice rather than assuming CLAT preparation covers it.

## Preparing for AILET

Put logical reasoning first, and by a wide margin. At 70 of 150 questions it is where the paper is won, and it is a trainable skill that improves measurably with volume.

Practise puzzle triage explicitly. Take sets of analytical reasoning puzzles and train yourself to judge within thirty seconds whether one is worth starting. On a paper where most candidates do not finish, the ability to skip well is worth more than the ability to solve everything.

Retain vocabulary and grammar work. AILET tests these directly where CLAT does not, so if your preparation has been CLAT-led you have a gap here, and closing it is cheap: word lists and grammar drills produce marks quickly in a way that reading comprehension practice does not.

Keep current affairs running through a daily newspaper habit, which serves both examinations at once and is the most efficient preparation available across the December law season.

Take full 150-question mocks under the two-hour clock from October, and track how far through the paper you get rather than only your score. Reaching question 130 with 70 per cent accuracy beats reaching question 100 with 85 per cent.

Practise on paper, since AILET is an offline OMR examination. Candidates who have prepared entirely on screen sometimes lose time to the mechanics of an OMR sheet, and bubbling errors under time pressure are a genuine risk. Decide in advance whether you will bubble after each question or in batches at the end of a page, and rehearse it, because the batching approach saves time but goes badly wrong if the clock runs out with a page unmarked.

Use the week between the two examinations deliberately. CLAT is on 6 December and AILET on 13 December, and those seven days are best spent shifting emphasis rather than resting: heavier reasoning practice, a vocabulary and grammar refresh, and at least one full AILET-format mock on paper.

## What NLU Delhi offers

Since AILET admits to one university, it is worth knowing what you are competing for rather than treating it as an abstract target.

NLU Delhi is consistently among the highest-ranked law schools in India and sits in the national capital, which shapes the opportunities available during the degree. Proximity to the Supreme Court, the Delhi High Court, tribunals, regulatory bodies, ministries, policy organisations and the head offices of most major law firms means internships and court exposure are considerably easier to arrange than at an NLU in a smaller city.

The BA LLB (Hons) is a five-year integrated programme taken directly after Class 12. The intake is small compared with the combined intake across the 26 CLAT universities, which is precisely why AILET is competitive: a single university's seats against a national applicant pool.

Graduates move into litigation, corporate law firms, in-house legal teams, judicial services through state examinations, policy and research organisations, academia and the civil services. NLU Delhi's location and reputation make the corporate and policy routes particularly accessible.

For readers of this site tracking government careers specifically, the judicial services route is worth noting: state public service commissions and high courts recruit Civil Judges through their own examinations, for which the LLB is the qualifying degree, and a law degree is also a common foundation for the UPSC Civil Services Examination.

## Mistakes AILET candidates make

Assuming CLAT preparation covers it. The absence of legal reasoning and quantitative sections, and the concentration of nearly half the paper in logical reasoning, make these genuinely different examinations.

Treating AILET as a low-stakes second attempt. Because it admits to one university with a small intake, it is competitive in its own right rather than a softer alternative to CLAT.

Neglecting direct vocabulary and grammar. CLAT has moved away from testing these directly; AILET has not, and candidates prepared solely for CLAT arrive with a gap in a section worth a third of the paper.

Getting stuck on puzzles. At 48 seconds a question across 150 questions, a single analytical reasoning set consuming eight minutes can cost more marks elsewhere than it earns.

Preparing only on screen. AILET is an offline OMR examination, and OMR mechanics under time pressure cost minutes for candidates who have never practised on paper.

Measuring mocks only by score. On a paper most candidates do not finish, how far through you get is as diagnostic as your accuracy, and the two need tracking separately.

## How to apply

Applications are filed on the National Law University Delhi official portal.

1. Register with a valid email address and mobile number, both used for the admit card and all further communication.
2. Complete the application with personal and academic details exactly as on your certificates.
3. Select the programme you are applying to: BA LLB (Hons), LLM or PhD.
4. Choose your test city preference.
5. Upload photograph, signature and the required documents in the specified format.
6. Pay the application fee, noting the concession available to reserved category candidates and the provision NLU Delhi makes for candidates from economically weaker backgrounds.
7. Submit and save the confirmation, then download the admit card ahead of the 13 December examination.

Because AILET admits to a single university, there is no preference ordering to complete as there is with CLAT. The application is simpler, but the stakes on the day are concentrated: there is no alternative allotment if your score falls short.

## Documents you will need

1. Class 10 certificate as proof of date of birth.
2. Class 12 mark sheet and certificate, or evidence of appearing in the current year.
3. LLB degree and mark sheets for LLM applicants.
4. Category certificate in the prescribed format for reserved category claims.
5. PwD certificate where applicable.
6. Income or economic status documentation where applying under any provision for candidates from economically weaker backgrounds.
7. Photograph, signature and a photo identity document matching the application.

## Frequently asked questions

**When is AILET 2027 and when did registration open?**
AILET 2027 is on Sunday 13 December 2026 from 2:00 pm to 4:00 pm, and registration opened on 7 August 2026 on the National Law University Delhi portal. It falls one week after CLAT 2027, which is on 6 December 2026, so sitting both is practical.

**What is the AILET 2027 exam pattern?**
An offline paper of 150 multiple choice questions in 120 minutes across three sections: Logical Reasoning with 70 questions, English Language with 50, and Current Affairs and General Knowledge with 30. Marking is +1 for a correct answer and −0.25 for a wrong one, with no penalty for unattempted questions. That works out to 48 seconds per question.

**Does AILET have a Legal Reasoning section?**
No. Unlike CLAT, AILET has no Legal Reasoning section and no Quantitative section. Its 150 questions are divided between Logical Reasoning, English Language, and Current Affairs and General Knowledge only. A candidate who has prepared for CLAT has therefore spent time on legal principles and arithmetic that will not appear in AILET.

**Which university does AILET admit to?**
National Law University Delhi only, for its BA LLB (Hons), LLM and PhD programmes. NLU Delhi is the one National Law University that does not participate in CLAT; the other 26 admit through the Consortium's common test. So AILET is a single-university examination with no preference ordering and no alternative allotment.

**What is the difference between CLAT and AILET?**
CLAT has 120 questions in 120 minutes across five sections including Legal Reasoning and Quantitative Techniques, and admits to 26 NLUs. AILET has 150 questions in the same 120 minutes across three sections, with Logical Reasoning alone carrying about 47 per cent of the paper, and admits only to NLU Delhi. They reward different profiles: CLAT the all-rounder with strong reading comprehension, AILET the candidate fast and accurate at reasoning.

**How important is Logical Reasoning in AILET?**
It is the exam. Seventy of 150 questions, nearly half the paper, sit in that one section, which is a heavier concentration than any other law entrance examination applies. A candidate strong at reasoning holds a structural advantage at AILET that they do not have at CLAT, and one weak at puzzles will find AILET considerably harder.

**Is there negative marking in AILET?**
Yes, 0.25 marks are deducted for each wrong answer against 1 mark for a correct one, with nothing deducted for unattempted questions. That 4 to 1 ratio gives a blind guess a small positive expected value, so the closing minutes are best spent filling blanks rather than leaving them.

**Is AILET conducted online or offline?**
Offline, as a pen and paper OMR examination. Candidates who have prepared entirely on screen should practise on paper beforehand, since the mechanics of an OMR sheet cost time under pressure and bubbling errors are a real risk on a 150-question paper.

**What is the eligibility for AILET 2027?**
For BA LLB (Hons), Class 12 or an equivalent examination with the minimum percentage prescribed by NLU Delhi, with relaxation for reserved categories as specified in the prospectus, and candidates appearing in Class 12 in the current year may apply. For LLM, an LLB or equivalent with the prescribed minimum marks. Because AILET is a single-university test, conditions are set by NLU Delhi rather than a consortium, so read the current prospectus rather than assuming CLAT's rules apply.

**Should I take both CLAT and AILET?**
For anyone serious about the National Law Universities, generally yes. The examinations fall a week apart, NLU Delhi is among the most sought-after law schools in the country, and the current affairs and English preparation overlaps. But budget genuine time for AILET-specific reasoning practice rather than assuming CLAT preparation transfers, because the two papers reward different strengths.

**How should I manage time in AILET?**
By triaging puzzles ruthlessly. At 48 seconds per question across 150 questions, most candidates do not finish, so the decisive skill is judging within about thirty seconds whether an analytical reasoning puzzle is tractable and moving on when it is not. Track how far through the paper you reach in mocks, not just your accuracy, since reaching question 130 at 70 per cent accuracy beats reaching question 100 at 85 per cent.

**Does AILET test vocabulary and grammar directly?**
Yes, unlike CLAT. AILET's English section includes vocabulary, synonyms and antonyms, idioms, grammar and error identification, sentence correction, para jumbles and cloze passages alongside reading comprehension. CLAT-led preparation, which has largely moved away from direct vocabulary and grammar testing, leaves a gap here that is worth closing.`;

const FAQS = [];

const ROW = {
  slug: "ailet-2027",
  title: "AILET 2027: Exam 13 Dec, 150 Questions, NLU Delhi Only",
  conducting_body: "National Law University Delhi",
  exam_date: "13 December 2026 (Sunday), 2:00 pm to 4:00 pm. Offline OMR-based paper, 120 minutes.",
  application_start: "2026-08-07",
  application_end: null,
  eligibility:
    "BA LLB (Hons): Class 12 or equivalent with the minimum percentage prescribed by NLU Delhi, with relaxation for reserved categories as specified in the prospectus. Candidates appearing in Class 12 in the current academic year may apply subject to producing proof of passing at admission. LLM: an LLB degree or equivalent with the prescribed minimum marks. PhD: as set out in the prospectus. Because AILET is a single-university examination, conditions are set by NLU Delhi rather than a consortium, so the current prospectus governs rather than CLAT's rules.",
  syllabus:
    "Logical Reasoning (70 questions): argument analysis, assumptions, inferences, conclusions and flaws; syllogisms and logical deductions; analytical reasoning through arrangements, sequences, orderings and puzzles; coding and decoding; blood relations and directions; series; and critical reasoning on short passages. English Language (50 questions): reading comprehension with inference and tone, plus DIRECT vocabulary, synonyms and antonyms, idioms, grammar and error identification, sentence correction, para jumbles and cloze passages, which CLAT no longer emphasises. Current Affairs and General Knowledge (30 questions): national and international current affairs of roughly the preceding year, plus static general knowledge across history, geography, polity, economics, science, awards, sports and matters of legal significance.",
  exam_pattern:
    "Offline OMR-based, 150 multiple choice questions in 120 minutes (about 48 seconds per question, notably faster than CLAT's full minute). Three sections only: Logical Reasoning 70 (~47 per cent), English Language 50 (~33 per cent), Current Affairs and General Knowledge 30 (20 per cent). NO Legal Reasoning section and NO Quantitative section, unlike CLAT, so CLAT preparation does not transfer cleanly. Marking: +1 for a correct answer, -0.25 for a wrong one, 0 for unattempted, a 4 to 1 ratio under which guessing carries a small positive expected value. Most candidates do not finish the paper, so puzzle triage and time management decide more outcomes than marking strategy.",
  admit_card_link: "https://nationallawuniversitydelhi.in/",
  result_link: "https://nationallawuniversitydelhi.in/",
  official_link: "https://nationallawuniversitydelhi.in/",
  category: "law",
  state: "all-india",
  reading_time: "12 min read",
  description:
    "AILET 2027 is on 13 December with registration open since 7 August. Check why it has no legal reasoning section and how it differs from CLAT a week earlier.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
