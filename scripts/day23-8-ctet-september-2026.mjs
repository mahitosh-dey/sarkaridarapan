// CTET September 2026 — thin-page fix + repositioning + dash/heading cleanup
//
// Verified 2026-08-15.
//
// WHY REWRITTEN
//   thin      1502w -> 3000w+
//   intent    page was framed around applying ("...Syllabus, Apply" in the
//             title) but applications closed 10 June 2026 and the exam is on
//             6 September 2026, three weeks after this rewrite. Repositioned
//             to the exam phase: admit card, exam day, final-weeks strategy.
//   dashes    em dashes in three headings and en dashes in eligibility and
//             syllabus ("Classes 1-5") violated the humanizer dash rule.
//   FAQ       old heading was "## Frequently Asked Questions" in Title Case.
//             The FAQ marker the helpers require is lowercase, so this was
//             both a sentence-case violation and a likely cause of the
//             FAQPage schema not parsing. Now lowercase.
//
// FACTS VERIFIED (CBSE notification 11 May 2026; corroborated across Testbook,
// Adda247, Arihant, SciAstra on 2026-08-15):
//   - Conducted by CBSE. Paper I for Classes 1 to 5, Paper II for Classes 6 to 8
//   - Notification 11 May 2026; applications 11 May to 10 June 2026 (CLOSED)
//   - Exam 6 September 2026
//   - 150 MCQs, 150 marks, 2.5 hours per paper, NO negative marking
//   - Portal ctet.nic.in
//
// NOT ASSERTED: shift timings and the contingency second date (the row noted
// "September 5 if candidate count is high", which CBSE had not confirmed), and
// the number of registered candidates.
//
// UNBLOCKS one redirect held back while this destination was thin:
//   ctet-2026-eligibility-exam-pattern-syllabus-preparation-guide  1646w

import { createExam } from "./lib/create-exam.mjs";

const content = `The Central Teacher Eligibility Test for the September 2026 session is on 6 September 2026. Applications ran from 11 May to 10 June 2026 and that window has closed.

CTET is the qualifying test for teaching posts in classes 1 to 8 at central government schools and their affiliates. Clearing it does not give you a job. It makes you eligible to apply for one, which is a distinction worth being clear about before you invest a preparation cycle in it.

## Where this session stands

| Item | Detail |
|---|---|
| Conducting body | Central Board of Secondary Education |
| Notification | 11 May 2026 |
| Application window | 11 May to 10 June 2026, closed |
| Exam date | 6 September 2026 |
| Papers | Paper I for classes 1 to 5, Paper II for classes 6 to 8 |
| Marks | 150 questions, 150 marks, 2.5 hours per paper |
| Negative marking | None |
| Portal | ctet.nic.in |

CBSE conducts CTET in two sessions a year. If you missed this window, the next session opens later and is announced on the same portal.

## No negative marking changes how you should sit this paper

CTET has no negative marking. Every one of the 150 questions is worth attempting, and leaving an answer blank is a pure loss with no offsetting benefit.

This is unusual enough to be worth stating plainly, because candidates carry habits between exams. In SSC and IBPS papers, a low-confidence guess costs you marks and blanks are the correct choice when you are unsure. In CTET the arithmetic is reversed. An uncertain answer has positive expected value and an unanswered question has none.

The practical consequence for your last twenty minutes is that you should be filling every remaining blank rather than protecting a score. Work through the paper answering what you know, mark what you are unsure of, return to those, and in the final minutes answer everything still empty regardless of confidence.

Candidates who apply SSC habits to CTET leave marks on the table every session. In an exam where the qualifying bar is fixed rather than competitive, those marks are often the difference.

## Paper I and Paper II: which one you sat

Paper I qualifies you to teach classes 1 to 5. Paper II qualifies you for classes 6 to 8. A candidate who wants to be eligible for both ranges sits both papers, which are conducted in separate sessions on the exam day.

| Section | Paper I | Paper II |
|---|---|---|
| Child Development and Pedagogy | 30 questions | 30 questions |
| Language I | 30 | 30 |
| Language II | 30 | 30 |
| Mathematics | 30 | Part of the 60 question elective |
| Environmental Studies | 30 | Not applicable |
| Mathematics and Science | Not applicable | 60, for maths and science teachers |
| Social Studies or Social Science | Not applicable | 60, for social studies teachers |
| Total | 150 | 150 |

In Paper II the final 60 questions are an either or choice made according to the subject you intend to teach. You do not answer both.

Child Development and Pedagogy carries 30 marks in both papers and is the section that most reliably separates candidates. It is also the section least served by general knowledge, because it tests teaching theory rather than subject content, and a strong graduate in mathematics has no inherent advantage in it.

## Qualifying marks and what the certificate gets you

The qualifying standard is 60 per cent, meaning 90 marks out of 150, for candidates in the general category. Reserved categories receive relaxation as specified by CBSE and by the recruiting bodies that use the certificate.

CTET is a qualifying examination rather than a ranked one. There is no merit list for jobs and no cutoff that moves with the candidate pool. You either reach the bar or you do not, which means your only competitor is the paper.

The certificate is valid for life. CBSE removed the earlier seven year validity period, so a certificate obtained now does not expire and does not need to be re-earned. Candidates who cleared CTET years ago under the old rule and assumed their certificate had lapsed should check, because the change applied to previously issued certificates as well.

What the certificate qualifies you for is applying to teaching posts at Kendriya Vidyalayas, Navodaya Vidyalayas, central government schools, and schools under the administrative control of the union territories, alongside private schools that choose to require it. Each of those runs its own recruitment with its own selection process. CTET is the eligibility gate, not the recruitment.

State government school posts generally require the relevant State Teacher Eligibility Test rather than CTET, though some states accept CTET as well. Check the rule for the state you intend to work in before assuming CTET covers it.

## Admit card and exam day

CBSE releases the admit card on ctet.nic.in ahead of the exam, downloaded with the credentials created during the application. It carries the centre address, reporting time and shift.

Download it as soon as it appears rather than close to the exam. Portal load rises sharply in the final days and a login or printing problem is far easier to resolve with time in hand.

Carry the printed admit card and one original photo identity document. Photocopies and a photograph of an ID on a phone are not accepted. Reporting time is well ahead of the exam start and gates close before the paper begins.

Candidates sitting both papers should note that they run in separate sessions on the same day. Plan for a long day at the centre, bring what you need for the gap between sessions, and check the reporting time for each session separately rather than assuming the second follows immediately.

Leave electronic devices behind entirely, including smart watches.

## The three weeks before 6 September

With the exam on 6 September, the remaining time is best spent narrowly.

Put the largest share into Child Development and Pedagogy. It carries 30 marks, it is the section where preparation converts most directly into score, and it is the one candidates most often underestimate because it feels less concrete than subject content. Theories of learning, stages of development, inclusive education and assessment principles are all learnable in the time available.

Revise the language papers rather than assuming fluency covers them. Language I and Language II together carry 60 of the 150 marks, and both test pedagogy of language teaching alongside comprehension. A fluent speaker who has not studied language pedagogy will lose marks in a section they expected to carry them.

Work previous years' papers under timed conditions. CTET question patterns are stable enough that past papers are a strong guide, and the value is in learning the phrasing and the level rather than in the specific questions.

Do not learn new subject content in the final week. Consolidate what you have and practise retrieval speed.

## Child Development and Pedagogy: what it actually asks

This section carries 30 marks in both papers and it is the one candidates most reliably misjudge, so it is worth setting out what it covers.

It tests how children learn and how teaching should respond to that, rather than any subject content. Questions draw on developmental stages and what a child at a given stage can and cannot do, theories of learning and their classroom implications, the difference between assessment of learning and assessment for learning, inclusive education and how to teach children with diverse needs, motivation, language acquisition, and the principles behind curriculum design.

The reason strong graduates lose marks here is that subject expertise gives no advantage. A candidate with a first class degree in mathematics has no head start on questions about the zone of proximal development or on how to assess a child with a learning difficulty.

The reason it rewards preparation is that the material is finite and stable. The theorists who appear, the developmental frameworks and the assessment vocabulary recur session after session, and a candidate who has worked through them systematically will recognise most of what appears.

Approach it as a subject to be studied rather than as common sense about children. Questions frequently offer options that sound sensible to an untrained reader and are wrong against the pedagogy, which is precisely what the section is designed to detect.

## What comes after you qualify

Clearing CTET produces a certificate. What happens next is a separate process, and understanding the sequence prevents the disappointment that follows treating the exam as the finish line.

Kendriya Vidyalaya Sangathan, Navodaya Vidyalaya Samiti and other central school bodies conduct their own recruitment when vacancies arise. Those recruitments have their own notifications, their own application windows, their own written examinations in many cases, and their own interviews. CTET qualification is a precondition for applying, not a substitute for competing.

The recruitment cycles do not align with CTET sessions. A candidate may qualify in September and wait months before a relevant vacancy is notified, which is why the lifetime validity of the certificate matters so much. It means the wait costs you nothing.

Private schools vary. Many require CTET, some prefer it, and some do not ask for it at all. Where it is required it functions the same way: as an eligibility filter ahead of the school's own selection.

The practical advice is to treat qualifying and job-hunting as two separate projects. Prepare for and clear the test, then watch the recruitment notifications from the bodies you want to work for, which is a different activity with a different calendar.

## Common mistakes

Leaving questions blank. There is no negative marking, so a blank is worth strictly less than a guess.

Under-preparing Child Development and Pedagogy because it is not subject content. It is 30 marks in both papers and it is where the exam is often decided.

Assuming CTET is a job. It is an eligibility certificate. The recruitment is separate, run by each employing body, and clearing CTET is the beginning of that process rather than the end.

Assuming CTET covers state school posts. Most states require their own Teacher Eligibility Test. Check the specific state.

Treating a language you speak fluently as requiring no preparation. The language sections test teaching pedagogy, not conversational ability.

Believing the certificate expires. Validity is now lifetime, including for certificates issued under the earlier seven year rule.

## Frequently asked questions

**When is the CTET September 2026 exam?**

6 September 2026. Applications ran from 11 May to 10 June 2026 and the window has closed. The admit card is released on ctet.nic.in ahead of the exam and carries your centre, reporting time and shift.

**Is there negative marking in CTET?**

No. All 150 questions carry equal marks and nothing is deducted for a wrong answer, so every question is worth attempting and leaving a blank is a pure loss. Candidates who carry guessing habits from SSC or banking exams, where blanks are often correct, lose marks here.

**What are the qualifying marks for CTET?**

60 per cent, meaning 90 out of 150, for general category candidates. Reserved categories receive relaxation as specified by CBSE and by the recruiting bodies. CTET is a qualifying exam rather than a ranked one, so there is no competitive cutoff that moves with the candidate pool.

**How long is the CTET certificate valid?**

For life. CBSE removed the earlier seven year validity period, and the change applied to previously issued certificates as well, so candidates who cleared CTET years ago and assumed their certificate had lapsed should check.

**What is the difference between CTET Paper I and Paper II?**

Paper I qualifies you to teach classes 1 to 5 and Paper II qualifies you for classes 6 to 8. Both carry 150 questions for 150 marks. A candidate wanting eligibility for both ranges sits both, in separate sessions on the same exam day.

**Does clearing CTET get me a teaching job?**

No. CTET is an eligibility certificate, not a recruitment. It qualifies you to apply for teaching posts at Kendriya Vidyalayas, Navodaya Vidyalayas, central government schools and others that require it, each of which runs its own selection process.

**Is CTET valid for state government school jobs?**

Generally not on its own. Most states require their own State Teacher Eligibility Test, though some accept CTET as well. Check the rule for the specific state you intend to work in rather than assuming CTET is universally accepted.

**What is the CTET exam pattern?**

150 multiple choice questions for 150 marks in 2.5 hours per paper. Paper I covers Child Development and Pedagogy, Language I, Language II, Mathematics and Environmental Studies at 30 questions each. Paper II covers Child Development and Pedagogy, Language I and Language II at 30 each, plus a 60 question elective in either Mathematics and Science or Social Studies.

**Can I take both Paper I and Paper II?**

Yes. They are conducted in separate sessions on the same day, so plan for a long day at the centre and check the reporting time for each session separately rather than assuming the second follows immediately after the first.

**What should I focus on in the final weeks?**

Child Development and Pedagogy, which carries 30 marks in both papers and rewards preparation most directly. Then the language sections, which together carry 60 marks and test teaching pedagogy rather than fluency. Work past papers under timed conditions and avoid learning new subject content in the last week.

**How many times a year is CTET conducted?**

CBSE conducts CTET in two sessions a year. Candidates who miss one window can apply for the next, which is announced on ctet.nic.in. Because the certificate is now valid for life, there is no penalty for qualifying in one session and applying for jobs over the following years.

**Is there a limit on how many times I can attempt CTET?**

No. There is no cap on attempts, and a candidate who has already qualified may sit again to improve their score, which some do because certain recruiting bodies weight the CTET score in their own selection. A later attempt does not invalidate an earlier certificate.

**What documents do I need on exam day?**

The printed admit card and one original photo identity document. Photocopies and a photograph of an ID on a phone are not accepted. Electronic devices of every kind, including smart watches, are prohibited, and gates close before the paper begins so the reporting time on your admit card is the deadline that binds.

**Which language should I choose for Language I and Language II?**

Language I should be the language you are most proficient in, since it tests the pedagogy of teaching that language at a higher level. Language II is assessed for proficiency and its pedagogy at a different level. The available options are listed in the notification, and the choice is made at application, so it is already fixed for this session.

**Does the CTET score matter, or only qualifying?**

For eligibility purposes only the 60 per cent threshold matters. However, some recruiting bodies weight the CTET score within their own selection process, so a higher score can help at the recruitment stage even though it does not change your eligibility status. This is why some already-qualified candidates sit the exam again.

**What happens if I clear Paper I but not Paper II?**

You are eligible for classes 1 to 5 and not for classes 6 to 8. The papers are assessed independently, so clearing one gives you the corresponding eligibility regardless of the other, and you may sit the paper you did not clear in a future session without affecting the certificate you already hold.

## Official sources

- CTET portal, Central Board of Secondary Education: https://ctet.nic.in
- The CTET notification PDF for the relevant session, which is the authority on eligibility wording, relaxation and the exam schedule

Where anything on this page conflicts with CBSE, CBSE is correct, and your admit card is the authority on your centre, date and reporting time.

## A note on what CTET is worth

It is worth being honest about the position CTET occupies, because candidates invest months in it on assumptions that are sometimes wrong.

The certificate is a genuine asset. It never expires, it is accepted across central school systems and by many private schools, and the qualifying standard is fixed rather than competitive, so your effort translates directly into a result that nobody else can take from you by scoring higher.

What it is not is a route to a job on its own. The number of people holding valid CTET certificates substantially exceeds the number of teaching vacancies notified in any given year, and the recruitment that follows is competitive in a way the eligibility test is not. A candidate who clears CTET and then waits for something to happen will usually be waiting a long time.

The candidates who convert CTET into employment tend to do two things. They treat qualifying as the first step rather than the achievement, and they actively track the recruitment notifications from Kendriya Vidyalaya Sangathan, Navodaya Vidyalaya Samiti, state education departments where CTET is accepted, and private school groups in their area. The certificate opens the door; walking through it is a separate effort with its own calendar.

That is not a reason to skip the exam. It is a reason to plan the year after it, and to start watching recruitment notifications from the day you sit the paper rather than from the day your result arrives. The two calendars are independent, and a vacancy notified in October will not wait for a certificate issued in November. Keep a list of the bodies you want to work for and check their notification pages on a fixed schedule, because none of them will contact you.`;

await createExam({
  slug: "ctet-september-2026",
  title: "CTET September 2026: Exam on 6 September, Admit Card, Pattern",
  conducting_body: "Central Board of Secondary Education (CBSE)",
  exam_date: "2026-09-06",
  application_start: "2026-05-11",
  application_end: "2026-06-10",
  eligibility:
    "Paper I (classes 1 to 5): passed Senior Secondary (class 12 or equivalent) with at least 50 per cent marks, and passed or appearing in a Diploma in Elementary Education, or equivalent teacher education qualification as specified by CBSE. Paper II (classes 6 to 8): a bachelor's degree together with a Bachelor of Education, or the equivalent combinations specified in the notification. Relaxation in the qualifying percentage applies to reserved categories as specified. Exact qualification combinations vary and CBSE lists several accepted routes, so check the notification against your own certificates rather than relying on a summary.",
  syllabus:
    "Paper I: Child Development and Pedagogy (30 questions, covering child development, inclusive education, learning and pedagogy), Language I (30), Language II (30), Mathematics (30) and Environmental Studies (30). Paper II: Child Development and Pedagogy (30), Language I (30), Language II (30), and a 60 question elective in either Mathematics and Science or Social Studies and Social Science, chosen according to the subject the candidate intends to teach. Language sections test the pedagogy of language teaching alongside comprehension, not conversational fluency.",
  exam_pattern: {
    mode: "Offline, multiple choice",
    duration: "2.5 hours (150 minutes) per paper",
    questions: "150 questions, 150 marks, each question carrying one mark",
    negativeMarking: "NONE. Nothing is deducted for a wrong answer, so every question is worth attempting and a blank is a pure loss. This reverses the strategy used in SSC and banking exams.",
    qualifying: "60 per cent, meaning 90 out of 150, for general category candidates, with relaxation for reserved categories as specified by CBSE and the recruiting bodies. CTET is a qualifying exam, not a ranked one: there is no competitive cutoff that moves with the candidate pool.",
    certificateValidity: "Lifetime. CBSE removed the earlier seven year validity, and the change applied to previously issued certificates as well.",
    papers: [
      { paper: "Paper I", level: "Classes 1 to 5, primary", marks: 150 },
      { paper: "Paper II", level: "Classes 6 to 8, upper primary", marks: 150 },
    ],
  },
  admit_card_link: "https://ctet.nic.in",
  result_link: "https://ctet.nic.in",
  official_link: "https://ctet.nic.in",
  category: "teaching",
  state: "all-india",
  description:
    "CTET September 2026 exam is on 6 September 2026. Applications closed 10 June. 150 marks, no negative marking, and the certificate is now valid for life.",
  content,
  reading_time: "12 min read",
});
