// Day 19 (Wed 2026-08-12) — NEET SS 2026 deepening (812w -> 3000w+).
// Verified 2026-08-12. NBEMS. Exam 11 and 12 December 2026, two shifts each day
// (9:00-11:30 am and 2:00-4:30 pm).
// Pattern: 150 MCQs in THREE TIME-BOUND sections of 50 questions, 50 minutes per section,
// total 2 hours 30 minutes. Sections are locked: you cannot return to a completed one.
// Marking +4 correct, -1 wrong, 0 unattempted.
// Eligibility: MD, MS or DNB in an eligible FEEDER SPECIALITY, with PG qualification
// completion cutoff 30 April 2026. NO upper age limit.
// Leads to DM, MCh and DNB super-speciality courses.
// NOTE: one source quoted an application window in Feb 2027, which conflicts with a Dec 2026
// exam and most likely refers to the following cycle -> application dates are hedged rather
// than asserted, pointing to natboard.edu.in.
// MOAT: the feeder speciality system determines which super-speciality courses a candidate can
// even apply for, and it is the single most consequential thing to understand. Plus the
// section locking, which changes attempt strategy completely.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## NEET SS 2026: the last exam in the ladder

NEET SS, the National Eligibility cum Entrance Test for Super Speciality courses, is conducted by the National Board of Examinations in Medical Sciences for admission to DM, MCh and super-speciality DNB programmes. The 2026 examination is on 11 and 12 December 2026, in two shifts each day, from 9:00 am to 11:30 am and from 2:00 pm to 4:30 pm.

This is the final entrance examination in the Indian medical training sequence. The path runs MBBS, then [NEET PG](/entrance-exams/neet-pg-2026) for a postgraduate MD or MS, then NEET SS for super-speciality training in DM or MCh. A candidate sitting NEET SS is already a specialist doctor pursuing sub-specialisation.

Two features of this examination are structurally unusual and shape everything about how you approach it.

The paper is divided into three time-locked sections, and once a section's fifty minutes expire you cannot return to it. This is not the same as a paper with an overall time limit, and candidates who treat it as one lose marks mechanically rather than through lack of knowledge.

And eligibility works through a feeder speciality system. Your existing MD, MS or DNB determines which super-speciality courses you may apply for at all. This is the single most consequential thing to understand about NEET SS, and it is covered in detail below.

## Important dates

| Event | Date |
|---|---|
| Examination | 11 and 12 December 2026 |
| Shift 1 each day | 9:00 am to 11:30 am |
| Shift 2 each day | 2:00 pm to 4:30 pm |
| PG qualification completion cutoff | 30 April 2026 |

On the application window, treat any date you see with caution. Sources circulating a February 2027 application period are almost certainly describing the following cycle rather than this one, since an examination in December 2026 would have its applications open several months earlier. The authoritative source is the information bulletin on natboard.edu.in, and that is where the window for your cycle is fixed.

The 30 April 2026 cutoff for completing the postgraduate qualification is the eligibility condition that most commonly disqualifies candidates, and it is worth checking against your own completion date carefully.

## Exam pattern, and why the section locking matters

| Element | Detail |
|---|---|
| Total questions | 150 multiple choice |
| Sections | Three, of 50 questions each |
| Time per section | 50 minutes |
| Total duration | 2 hours 30 minutes |
| Marking | +4 correct, −1 wrong, 0 unattempted |
| Mode | Computer based |

Each section carries fifty questions and fifty minutes, which works out to exactly sixty seconds per question with no slack anywhere in the paper.

The locking is the part to internalise. When the fifty minutes for section one expire, the software moves you to section two and section one closes permanently. You cannot flag a difficult question in the first section and return to it after finishing the third. Whatever is unanswered when a section closes stays unanswered.

That has three practical consequences.

You must finish each section within its own window. Banking time by rushing section one to leave room for section three does not work, because the saved time does not transfer.

Flagging questions for review is only useful within the current section. A habit built on marking hard items and sweeping them up at the end of a paper has to be adapted to sweeping them up at the end of each section instead.

The last few minutes of every section, not just the paper, should be reserved for filling blanks. With a +4 and −1 marking scheme, an unanswered question is a certain zero while a guess carries positive expected value, and there are three separate deadlines at which that matters rather than one.

## The marking arithmetic

Four marks for a correct answer, one deducted for a wrong one, nothing for a blank. That is a 4 to 1 ratio.

Guessing blindly among four options yields, on average, one correct at plus 4 against three wrong at minus 3, a net gain of one mark. So blind guessing is positively valued even with no elimination, and narrowing to two options makes attempting strongly worthwhile.

Given that, finishing any section with unattempted questions is a straightforward loss. On a 150-question paper the cumulative cost of caution can run to a dozen marks or more, which on a percentile-ranked examination with a small and highly qualified field is material.

The counterweight is that the field here is entirely composed of specialist doctors, so relative performance is what counts. Careless attempting that produces many wrong answers still costs you against candidates who are more selective. The balance is to attempt everything you can reason about and leave only what you genuinely cannot narrow, then fill the remainder in the closing seconds of each section.

## Feeder specialities: what you can actually apply for

This is the structure that makes NEET SS different from every other entrance examination, and misunderstanding it wastes an application cycle.

You do not apply to NEET SS in general and then choose a super-speciality. Your existing postgraduate qualification determines which super-speciality courses you are eligible for. NBEMS publishes, for each DM and MCh course, the list of feeder specialities whose holders may apply.

Broadly, the medical super-specialities are fed by medical postgraduate qualifications and the surgical ones by surgical qualifications. A candidate with an MD in General Medicine has access to a wide range of DM courses including cardiology, neurology, nephrology, gastroenterology, endocrinology, medical oncology, pulmonary medicine and critical care. A candidate with an MS in General Surgery has access to MCh courses including urology, neurosurgery, cardiothoracic and vascular surgery, paediatric surgery, plastic surgery and surgical oncology.

Narrower postgraduate qualifications feed narrower sets. An MD in Paediatrics opens paediatric super-specialities such as neonatology and paediatric cardiology. An MD in Radiodiagnosis opens interventional radiology. An MD in Anaesthesiology opens critical care and cardiac anaesthesia. And so on across the specialities.

Three practical points follow.

Check the feeder list for your target course before anything else. The list is published with the information bulletin and it is definitive. A candidate preparing for a course their qualification does not feed is preparing for nothing.

Some courses accept multiple feeder specialities and some accept only one, which materially affects competition. A course open to several feeders draws a larger field; a course fed by one narrow speciality may have very few eligible applicants nationally.

Your feeder speciality was effectively chosen years earlier, at NEET PG. That is worth knowing for anyone still at the postgraduate stage: the MD or MS you take determines which super-specialities remain available to you afterwards, and a candidate with a clear long-term interest should factor that into their NEET PG choice rather than discovering the constraint later.

## Eligibility

Candidates must hold an MD, MS or DNB qualification in a speciality that feeds the super-speciality course applied for, with the qualification completed by the cutoff date, which is 30 April 2026 for this cycle.

Registration with the National Medical Commission or a State Medical Council is required.

There is no upper age limit for NEET SS, and no cap on attempts. That is worth noting because candidates reaching this stage are typically in their late twenties or thirties, having completed MBBS, an internship and a three-year postgraduate programme, and an age bar would exclude much of the natural field.

The condition that catches candidates is the completion cutoff rather than the qualification itself. A postgraduate degree awarded after the cutoff date does not qualify for that cycle, however close the date, and the candidate waits a year.

## What the paper covers

NEET SS tests the postgraduate-level knowledge of the feeder speciality relevant to the course applied for, rather than a general medical syllabus.

That is a significant design point. The examination is not a broad test of medicine as NEET PG is; it assesses depth within your own speciality. A candidate applying for a DM course fed by General Medicine is examined on internal medicine at postgraduate depth, including the sub-speciality areas within it.

The practical implication is that preparation is narrower and deeper than for NEET PG. Standard postgraduate textbooks in your speciality, recent guidelines, and question practice at postgraduate level are the working material. Broad revision across all of medicine, which is the correct approach for NEET PG, is the wrong approach here.

Recent literature and guideline updates carry more weight at this level than at earlier stages, because super-speciality practice moves faster and the examination reflects current standards of care.

## Counselling and seat allotment

After the result, counselling for DM, MCh and super-speciality DNB seats is conducted by the Medical Counselling Committee across multiple rounds, in a structure similar to the [NEET UG counselling](/entrance-exams/neet-ug-2026-mcc-counselling) process though on a far smaller scale.

Seats are few. Super-speciality programmes admit small numbers by design, since they require specialist faculty, dedicated units and case volume that only larger institutions can provide. That concentrates seats in the major government medical colleges, the institutes of national importance and a limited number of private institutions.

The consequences are that competition is severe even in a small field, that geographic flexibility matters more than at earlier stages because a course may exist in only a handful of centres nationally, and that bond conditions and service obligations attached to government super-speciality seats should be checked before preferencing, since they can commit several years after an already long training period.

Read the counselling bulletin for the cycle before the first round. The rules on accepting, resigning and upgrading between rounds carry consequences for security deposits and further participation, and at this stage of a career the cost of a procedural error is high.

## Preparing for NEET SS

Work within your speciality rather than across medicine. The examination tests depth in your feeder speciality, so broad revision is misallocated effort.

Practise under the section format specifically. Fifty questions in fifty minutes, three times, with no carry-over, is a distinctive rhythm and it needs rehearsing. A candidate who has practised only on continuous papers will mismanage the first section.

Train the end-of-section reflex. Decide in advance that you stop solving at the forty-five minute mark in each section and spend the remainder filling anything unanswered, since blanks score zero while guesses are positively valued.

Keep current with guidelines in your field. Super-speciality examinations reflect present standards of care more closely than earlier examinations do.

Confirm your feeder speciality eligibility for every course you intend to apply to, from the information bulletin rather than from memory or a secondary site.

And begin thinking about counselling early. With few seats in few centres, the realistic option set is narrow and knowing it in advance changes how you weigh the result.

## What a DM or MCh actually leads to

Worth being concrete, because the commitment is substantial and the return should be understood before adding three more years to an already long training path.

A DM or MCh is a three-year super-speciality programme taken after a postgraduate degree. By the time a doctor completes one, they have typically spent five and a half years on MBBS including internship, three years on an MD or MS, and three years on the super-speciality, which is around twelve years of training after school.

What it opens is practice as a sub-specialist: a cardiologist rather than a physician, a urologist rather than a general surgeon. In practical terms that means consultant positions in tertiary care hospitals, faculty posts in medical colleges teaching the super-speciality, independent practice in the sub-speciality, and access to the procedures and case types that only sub-specialists handle.

The financial and professional return is generally significant, since sub-specialists are scarcer than specialists and the procedures they perform command higher reimbursement. But the opportunity cost is three years of consultant-level earnings foregone, at a stage when many peers are establishing practices.

For readers of this site tracking government careers specifically: super-speciality qualifications are the entry requirement for senior faculty and consultant posts in government medical colleges and central institutions, which are recruited through UPSC, state public service commissions and institutional processes. A DM or MCh is often the difference between eligibility for those posts and not.

## Government super-speciality posts after DM or MCh

Since a substantial share of DM and MCh graduates move into government service, the routes are worth knowing.

Central government medical institutions, including AIIMS and the other institutes of national importance, recruit faculty at Assistant Professor level and above through their own institutional processes, with super-speciality qualifications required for the corresponding departments.

The Union Public Service Commission conducts recruitment for specialist and senior specialist posts in central health services, where super-speciality qualifications count both for eligibility to specific posts and for weighting in selection.

State public service commissions recruit specialists and super-specialists into state medical services and government medical colleges, with the qualification requirements set by each state's rules.

Central government hospitals, ESIC, railways and defence medical services all recruit specialists, with super-speciality posts advertised as and when sanctioned.

The general pattern is that a DM or MCh substantially widens the set of government posts available and improves the position within selection processes, alongside the clinical scope it opens. Watching the recruitment notifications of the institutions and commissions relevant to your speciality is the practical step, since these posts are advertised in small numbers rather than through a single annual examination.

## Frequently asked questions

**When is NEET SS 2026?**
The examination is on 11 and 12 December 2026, in two shifts each day, from 9:00 am to 11:30 am and from 2:00 pm to 4:30 pm. It is conducted by the National Board of Examinations in Medical Sciences for admission to DM, MCh and super-speciality DNB courses.

**What is the NEET SS 2026 exam pattern?**
150 multiple choice questions divided into three time-bound sections of 50 questions each, with 50 minutes per section and a total duration of 2 hours 30 minutes. Marking is +4 for a correct answer, −1 for a wrong one and nothing for an unattempted question. The examination is computer based.

**Can I go back to a previous section in NEET SS?**
No. The sections are time-locked: when the fifty minutes for a section expire, that section closes permanently and you cannot return to it. Time saved in one section does not transfer to another, and questions flagged for review must be resolved within the same section. This is the most important operational difference from a conventional paper.

**Is there negative marking in NEET SS?**
Yes, one mark is deducted for a wrong answer against four awarded for a correct one. That 4 to 1 ratio means blind guessing among four options carries positive expected value of about one mark, so no question should be left blank. Because the sections lock, the closing minutes of each section should be used to fill anything unanswered rather than only the end of the paper.

**What is a feeder speciality in NEET SS?**
The postgraduate qualification that makes you eligible for a particular super-speciality course. NBEMS publishes, for each DM and MCh course, the list of feeder specialities whose holders may apply. Your existing MD, MS or DNB therefore determines which super-speciality courses you can apply for at all, which makes checking the feeder list for your target course the first step rather than a detail.

**Which DM courses can I apply for with an MD in General Medicine?**
General Medicine feeds a wide range of DM courses including cardiology, neurology, nephrology, gastroenterology, endocrinology, medical oncology, pulmonary medicine and critical care. The definitive list for each course is published with the NBEMS information bulletin, and it should be checked there rather than assumed, since feeder lists can be revised.

**Which MCh courses can I apply for with an MS in General Surgery?**
General Surgery feeds MCh courses including urology, neurosurgery, cardiothoracic and vascular surgery, paediatric surgery, plastic surgery and surgical oncology. As with the medical super-specialities, the authoritative list is in the information bulletin for the cycle.

**What is the eligibility for NEET SS 2026?**
An MD, MS or DNB qualification in a speciality that feeds the super-speciality course applied for, completed by the cutoff date of 30 April 2026 for this cycle, along with registration with the National Medical Commission or a State Medical Council. There is no upper age limit and no cap on attempts. The completion cutoff is the condition that most commonly disqualifies otherwise eligible candidates.

**Is there an age limit for NEET SS?**
No. There is no upper age limit and no restriction on the number of attempts. That is appropriate to the stage, since candidates reaching NEET SS have completed MBBS, an internship and a three-year postgraduate programme and are typically in their late twenties or thirties.

**How is NEET SS different from NEET PG?**
NEET PG is a broad examination across the whole MBBS curriculum, taken after an MBBS, leading to MD and MS programmes. NEET SS tests depth within your own postgraduate speciality, is taken after an MD, MS or DNB, and leads to DM and MCh super-speciality programmes. NEET SS also uses time-locked sections and a feeder speciality eligibility system, neither of which applies to NEET PG.

**How should I prepare for NEET SS?**
Within your speciality rather than across medicine, since the examination tests depth in your feeder speciality and broad revision is misallocated. Use standard postgraduate textbooks in your field, recent guidelines, and postgraduate-level question practice. Rehearse the three-section format specifically, because fifty questions in fifty minutes with no carry-over is a distinctive rhythm, and train yourself to stop solving around the forty-five minute mark in each section to fill blanks.

**How does NEET SS counselling work?**
The Medical Counselling Committee conducts counselling for DM, MCh and super-speciality DNB seats across multiple rounds after the result. Seats are few by design, since these programmes need specialist faculty, dedicated units and case volume, which concentrates them in major government medical colleges, institutes of national importance and a limited number of private institutions. Geographic flexibility matters more than at earlier stages, and bond or service obligations attached to government seats should be checked before preferencing.`;

const FAQS = [];

const ROW = {
  slug: "neet-ss-2026",
  title: "NEET SS 2026: Exam 11-12 Dec, Sections Lock, Feeders",
  conducting_body: "National Board of Examinations in Medical Sciences (NBEMS)",
  exam_date:
    "11 and 12 December 2026, computer based, in two shifts each day: 9:00 am to 11:30 am and 2:00 pm to 4:30 pm. Application window is fixed in the NBEMS information bulletin on natboard.edu.in; dates circulating for February 2027 almost certainly describe the following cycle rather than this one.",
  application_start: null,
  application_end: null,
  eligibility:
    "An MD, MS or DNB qualification in a speciality that FEEDS the super-speciality course applied for, completed by the cutoff date of 30 April 2026 for this cycle, plus registration with the National Medical Commission or a State Medical Council. NO upper age limit and NO cap on attempts. The completion cutoff is the condition that most commonly disqualifies otherwise eligible candidates: a postgraduate degree awarded after that date does not qualify for the cycle, however close, and the candidate waits a year. NBEMS publishes for each DM and MCh course the list of feeder specialities whose holders may apply, and that list is definitive.",
  syllabus:
    "Postgraduate-level knowledge of the FEEDER SPECIALITY relevant to the course applied for, rather than a general medical syllabus. This is narrower and deeper than NEET PG: a candidate applying for a DM course fed by General Medicine is examined on internal medicine at postgraduate depth including its sub-speciality areas. Working material is standard postgraduate textbooks in the speciality, recent guidelines, and postgraduate-level question practice. Recent literature and guideline updates carry more weight than at earlier stages, since super-speciality practice moves faster and the examination reflects current standards of care. Broad revision across all of medicine, correct for NEET PG, is the wrong approach here.",
  exam_pattern:
    "150 multiple choice questions in THREE TIME-BOUND SECTIONS of 50 questions each, 50 minutes per section, total 2 hours 30 minutes, computer based. Exactly 60 seconds per question with no slack. CRITICAL: the sections LOCK. When a section's 50 minutes expire it closes permanently and cannot be revisited, so time saved in one section does not transfer, questions flagged for review must be resolved within the same section, and the closing minutes of EACH section (not just the paper) should be used to fill blanks. Marking: +4 correct, -1 wrong, 0 unattempted, a 4 to 1 ratio under which blind guessing carries positive expected value of about one mark, so no question should be left unanswered. Counselling for DM, MCh and super-speciality DNB seats is conducted by the Medical Counselling Committee across multiple rounds; seats are few and concentrated in major government colleges and institutes of national importance.",
  admit_card_link: "https://natboard.edu.in/",
  result_link: "https://natboard.edu.in/",
  official_link: "https://natboard.edu.in/",
  category: "medical",
  state: "all-india",
  reading_time: "11 min read",
  description:
    "NEET SS 2026 is on 11 and 12 December with three time-locked sections. Check the feeder speciality rules that decide which DM and MCh courses you can apply for.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
