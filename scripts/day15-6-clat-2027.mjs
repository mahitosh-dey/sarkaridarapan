// Day 15 (Wed 2026-08-05) — CLAT 2027 deepening (487w -> 3000w+).
// Verified 2026-08-05. Consortium of National Law Universities.
// Registration OPENED 3 Aug 2026. Exam 6 December 2026. 26 NLUs participating.
// Pattern retained for 2027: 120 MCQs, 120 minutes, offline OMR, five sections.
// English Language 22-26 (~20%), Current Affairs incl GK 28-32 (~25%),
// Legal Reasoning 28-32 (~25%), Logical Reasoning 22-26 (~20%), Quantitative 10-14 (~10%).
// Marking +1 / -0.25.
// MOAT: every CLAT section is passage-based, so it is fundamentally a reading-speed exam
// rather than a knowledge exam, and the Legal Reasoning section requires NO prior legal
// knowledge - the principle is supplied in the passage. Both points are widely misunderstood.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## CLAT 2027: registration is open, exam on 6 December

CLAT 2027, the Common Law Admission Test conducted by the Consortium of National Law Universities, is on 6 December 2026. Registration opened on 3 August 2026 on the Consortium's official portal.

Twenty-six National Law Universities use CLAT for admission to their undergraduate BA LLB and postgraduate LLM programmes. The one significant exception is National Law University Delhi, which runs its own test, AILET, a week later on 13 December 2026.

Two things about CLAT are widely misunderstood, and both change how you should prepare.

Every section is passage-based. CLAT is not a test of five separate subjects; it is a reading comprehension examination wearing five different hats. You are given a passage and asked questions arising from it, whether the passage concerns a legal principle, a news development, a logical argument or a set of figures.

And the Legal Reasoning section requires no prior knowledge of law. The legal principle you need is supplied in the passage itself. What is being tested is whether you can apply a rule you have just read to a set of facts, which is a reasoning skill rather than a knowledge one.

Candidates who begin by memorising bare acts and legal definitions are preparing for an exam that does not exist.

## Important dates

| Event | Date |
|---|---|
| Registration opens | 3 August 2026 |
| Examination | 6 December 2026 |

That gives roughly four months from the opening of registration to the examination, which is a workable window for a serious start and comfortable for a candidate already preparing.

## Exam pattern

CLAT UG is an offline, OMR-based paper of 120 multiple choice questions in 120 minutes.

| Section | Questions | Approximate weight |
|---|---|---|
| English Language | 22 to 26 | 20 per cent |
| Current Affairs including General Knowledge | 28 to 32 | 25 per cent |
| Legal Reasoning | 28 to 32 | 25 per cent |
| Logical Reasoning | 22 to 26 | 20 per cent |
| Quantitative Techniques | 10 to 14 | 10 per cent |
| Total | 120 | 100 per cent |

Each correct answer carries 1 mark and each wrong answer costs 0.25 marks. Unattempted questions score nothing and carry no penalty.

The Consortium has confirmed that the pattern is retained for 2027, with changes expected in the qualitative character of the questions rather than in the structure. So a candidate preparing on the current format is preparing correctly.

One minute per question with no sectional time limits means the whole paper is yours to manage, and reading speed is the binding constraint rather than subject knowledge.

## Why CLAT is really a reading exam

It is worth being concrete about what passage-based means, because it determines where preparation time should go.

In Legal Reasoning, you are given a passage setting out a legal principle or a rule, followed by fact situations. You apply the stated principle to the facts. Prior legal knowledge is not required and can actively mislead, because the passage's version of the rule governs even where it differs from the real law.

In Current Affairs, you are given a passage drawn from news or a report, followed by questions. Some are answerable from the passage and some require the surrounding awareness that a person following the news would have.

In Logical Reasoning, you are given a short argument or a piece of reasoning, followed by questions about assumptions, inferences, conclusions and flaws.

In English Language, you are given a passage and asked comprehension, inference and vocabulary-in-context questions.

Only Quantitative Techniques departs slightly, presenting data in a passage, table or graph followed by arithmetic questions, and even there the data is supplied rather than recalled.

The consequence is unavoidable: a candidate who reads slowly will not finish, however well they know the material. Building reading speed on dense, unfamiliar prose is the single highest-return activity in CLAT preparation, and it is also the slowest to develop, which is why it should start first.

## Section by section

English Language tests comprehension, inference, the author's argument and tone, and vocabulary as used in context rather than in isolation. Passages are drawn from a wide range of non-fiction. Regular reading of quality long-form journalism does more here than any vocabulary list.

Current Affairs including General Knowledge is the section that rewards habit over cramming. It covers national and international news of roughly the preceding year, along with arts, culture, historical events of continuing significance, and matters of legal and constitutional importance. A daily newspaper habit maintained over months produces far better results than a compilation read in November.

Legal Reasoning presents principles and asks you to apply them. The skill is precision: identifying exactly what the stated rule requires, noticing conditions and exceptions, and resisting the pull of what you assume the law says. Practice on past papers builds this quickly, and it is one of the more trainable sections.

Logical Reasoning covers argument analysis, assumptions, inferences, conclusions, flaws, analogies and relationships. It overlaps substantially with the critical reasoning found in other aptitude tests.

Quantitative Techniques is the smallest section at around 10 per cent, drawn from Class 10 level mathematics: ratio and proportion, percentages, averages, mensuration, statistical estimation and data interpretation. Because it is small, it is often the section candidates neglect entirely, which is defensible only if the time is genuinely going somewhere more productive.

## Marking strategy

At +1 and −0.25, the ratio is 4 to 1.

Guessing blindly among four options gives on average one correct at plus 1 and three wrong at minus 0.75, netting plus 0.25. So a blind guess carries a small positive expected value, and eliminating even one option makes attempting clearly worthwhile.

That said, CLAT rewards accuracy more than volume because the competition is dense at the top. On a 120-mark paper where the difference between a rank that gets you into a top NLU and one that does not can be a handful of marks, a candidate attempting 110 questions with 75 per cent accuracy will usually beat one attempting all 120 at 65 per cent.

The sensible approach is to attempt everything you can reason about, guess where you can eliminate, and use the final minutes to fill genuine blanks rather than leaving them.

## Eligibility

For the undergraduate programme, candidates must have passed Class 12 or an equivalent examination with a minimum of 45 per cent marks, relaxed to 40 per cent for SC and ST candidates.

Candidates appearing in Class 12 in the current academic year may apply, subject to producing proof of passing at the time of admission.

There is no upper age limit for CLAT.

For the postgraduate LLM programme, an LLB degree or equivalent with the prescribed minimum marks is required.

## The 26 NLUs, and how allocation works

Twenty-six National Law Universities participate, spanning NLSIU Bengaluru, NALSAR Hyderabad, WBNUJS Kolkata, NLU Jodhpur, GNLU Gandhinagar, NLIU Bhopal, HNLU Raipur, and a wide range of others across the country.

Admission works through a centralised counselling process. You submit a preference order of universities during the application, and seats are allotted on the basis of your CLAT rank, your stated preferences, category, and the reservation policies of each university, which include state domicile quotas at several NLUs.

That domicile element matters and is often overlooked. Several NLUs reserve a substantial share of seats for candidates domiciled in their home state, which means the effective cutoff for a home-state candidate can be markedly lower than for an out-of-state candidate at the same university. Understanding your own position on that before setting preferences is worth doing properly.

Counselling runs in rounds, with candidates able to accept a seat, freeze it, or float for a better allocation in later rounds. Reading the counselling rules before results are declared avoids costly mistakes made under time pressure.

## CLAT compared with AILET

The two law entrance examinations of December are more different than most candidates expect.

| | CLAT 2027 | [AILET 2027](/entrance-exams/ailet-2027) |
|---|---|---|
| Conducted by | Consortium of NLUs | NLU Delhi |
| Exam date | 6 December 2026 | 13 December 2026 |
| Questions and time | 120 in 120 minutes | 150 in 120 minutes |
| Sections | Five | Three |
| Legal Reasoning | Yes, around 25 per cent | Not a separate section |
| Quantitative | Yes, around 10 per cent | Not a separate section |
| Admits to | 26 NLUs | NLU Delhi only |

AILET drops legal reasoning and mathematics entirely and weights logical reasoning far more heavily, which means preparing for one does not fully prepare you for the other. The dates being a week apart makes sitting both entirely practical, and most serious candidates do, but the additional preparation for AILET is real rather than nominal.

## Preparing for CLAT

Start with reading speed and start now. It is the constraint that binds every section and the slowest capability to build. Read dense non-fiction daily, editorials and long-form journalism rather than exam passages alone, and track how long a 500-word passage takes you.

Build the current affairs habit immediately. Four months of daily newspaper reading produces a level of awareness that no compilation can replicate in the final weeks, and this section carries a quarter of the paper.

Work legal reasoning on past papers rather than on legal textbooks. The skill is applying a supplied rule with precision, and it improves quickly with volume.

Do not over-invest in quantitative techniques. At around 10 per cent it deserves proportionate attention, which for most candidates means keeping Class 10 arithmetic fresh rather than deep preparation.

Take full 120-question mocks under the two-hour clock from October, and spend as long analysing each as you spent writing it. Track not just your score but your time per section, because time management is what most commonly separates a good mock from a poor one.

## What a law degree from an NLU leads to

Worth knowing before you commit four months to the preparation, because the destination shapes whether the effort is worth it for you.

The BA LLB at an NLU is a five-year integrated programme taken directly after Class 12, rather than a three-year LLB taken after graduation. That is a significant commitment made at eighteen.

Graduates move into litigation, joining chambers and appearing in courts; into corporate law firms working on transactions, disputes and advisory work; into in-house legal teams at companies and banks; into judicial services through state judiciary examinations; into public sector legal roles and regulatory bodies; and into policy, academia and the growing legal technology sector. A law degree is also a recognised qualification for several civil services roles and is a common route into the UPSC examination.

The judicial services route deserves a mention for readers of this site, since it is a government career path. State public service commissions and high courts recruit Civil Judges through judicial services examinations, for which an LLB is the qualifying degree. Those examinations have their own age bands and, in many states, require a period of practice or allow fresh graduates depending on the state's rules.

None of that requires an NLU specifically. What the NLUs offer is a competitive peer group, structured recruitment access, and a brand that opens the first job more easily. The gap narrows considerably after the first few years of practice.

## Common mistakes CLAT candidates make

Memorising legal provisions. The Legal Reasoning section supplies its principle in the passage, so bare acts and statutory definitions are wasted study, and prior assumptions about the law can actively cause wrong answers.

Leaving current affairs to the last month. At a quarter of the paper it is the section that most rewards a sustained habit, and no compilation substitutes for ten months of reading.

Practising only on exam-style passages. Reading speed builds on varied, dense, unfamiliar prose, and a diet consisting solely of coaching material develops a narrower capability than the paper actually tests.

Filling the NLU preference order casually. It directly governs where you are allotted in counselling, and a careless ranking can place you at a university you would not have chosen over one you ranked lower.

Ignoring domicile quotas. Several NLUs reserve a large share of seats for home-state candidates, which materially changes your realistic target list in either direction.

Taking mocks without analysing time per section. Most poor mock scores come from time mismanagement rather than knowledge gaps, and the fix is only visible if you track where the two hours went.

## How to apply

Applications are filed on the Consortium of NLUs official portal.

1. Register with a valid email address and mobile number, both used for the admit card and all further communication.
2. Complete the application with personal and academic details exactly as on your certificates.
3. Set your preference order across the participating NLUs carefully, since counselling allotment follows it directly.
4. Select your test city preferences.
5. Upload photograph, signature and the required documents in the specified format.
6. Pay the application fee, noting the concession available to reserved category candidates.
7. Submit and save the confirmation, then download the admit card ahead of the 6 December examination.

The preference order at step 3 is worth genuine thought rather than a quick ranking. It governs where you are allotted, and candidates who fill it casually sometimes find themselves allotted a university they would not have chosen over one placed lower in their list.

## Documents you will need

1. Class 10 certificate as proof of date of birth.
2. Class 12 mark sheet and certificate, or evidence of appearing in the current year.
3. Category certificate in the prescribed format for SC, ST, OBC and EWS claims.
4. Domicile certificate where you intend to claim a state quota at an NLU.
5. PwD certificate where applicable.
6. Photograph, signature and a photo identity document matching the application.

## Frequently asked questions

**When is CLAT 2027 and when did registration open?**
CLAT 2027 is on 6 December 2026, and registration opened on 3 August 2026 on the Consortium of National Law Universities portal. Twenty-six NLUs participate, with the notable exception of NLU Delhi, which conducts its own test, AILET, on 13 December 2026.

**What is the CLAT 2027 exam pattern?**
An offline OMR-based paper of 120 multiple choice questions in 120 minutes across five sections: English Language (22 to 26 questions), Current Affairs including General Knowledge (28 to 32), Legal Reasoning (28 to 32), Logical Reasoning (22 to 26) and Quantitative Techniques (10 to 14). Marking is +1 for a correct answer and −0.25 for a wrong one. The Consortium has confirmed the pattern is retained for 2027.

**Do I need to know law before taking CLAT?**
No. The Legal Reasoning section supplies the legal principle within the passage and asks you to apply it to a set of facts. Prior legal knowledge is not required and can mislead, since the passage's version of the rule governs even where it differs from the actual law. What is tested is precise reasoning rather than legal knowledge, which is why memorising bare acts is wasted preparation.

**Is there negative marking in CLAT?**
Yes, 0.25 marks are deducted for each wrong answer against 1 mark for a correct one. That 4 to 1 ratio means a blind guess carries a small positive expected value, but because competition at the top is dense, accuracy generally beats volume: attempting 110 questions at 75 per cent accuracy usually outperforms attempting all 120 at 65 per cent.

**What is the eligibility for CLAT 2027?**
For the undergraduate programme, Class 12 or equivalent with a minimum of 45 per cent marks, relaxed to 40 per cent for SC and ST candidates. Candidates appearing in Class 12 in the current year may apply subject to producing proof of passing at admission. There is no upper age limit. The postgraduate LLM programme requires an LLB or equivalent with the prescribed minimum marks.

**How many NLUs accept CLAT?**
Twenty-six National Law Universities participate in CLAT for admission to their BA LLB and LLM programmes, including NLSIU Bengaluru, NALSAR Hyderabad, WBNUJS Kolkata, NLU Jodhpur, GNLU Gandhinagar, NLIU Bhopal and HNLU Raipur among others. NLU Delhi is the exception and admits through its own AILET examination.

**Why is CLAT described as a reading comprehension exam?**
Because every section is passage-based. Legal Reasoning supplies a principle in a passage, Current Affairs draws on a news passage, Logical Reasoning presents an argument to analyse, English Language gives a comprehension passage, and even Quantitative Techniques supplies its data in a passage, table or graph. Reading speed on dense unfamiliar prose is therefore the constraint that binds every section, and it is the slowest capability to build.

**How does CLAT counselling and seat allotment work?**
Through a centralised process run by the Consortium. You submit a preference order of universities during the application, and seats are allotted on the basis of your rank, those preferences, category, and each university's reservation policy, including state domicile quotas at several NLUs. Counselling runs in rounds, with the option to accept, freeze or float for a better allocation later.

**Do NLUs have state domicile quotas?**
Several do, reserving a substantial share of seats for candidates domiciled in the home state. This means the effective cutoff for a home-state candidate can be markedly lower than for an out-of-state candidate at the same university, which is worth understanding before setting your preference order rather than after results.

**What is the difference between CLAT and AILET?**
CLAT admits to 26 NLUs and has 120 questions in 120 minutes across five sections including Legal Reasoning and Quantitative Techniques. AILET admits only to NLU Delhi and has 150 questions in 120 minutes across three sections, with no separate legal reasoning or mathematics section and logical reasoning carrying the heaviest weight. The exams fall a week apart, on 6 and 13 December 2026, so sitting both is practical, but the preparation does not fully transfer.

**How should I prepare for CLAT current affairs?**
Through a daily newspaper habit maintained over months rather than a compilation read in the final weeks. The section carries around 25 per cent of the paper and covers national and international news of roughly the preceding year alongside arts, culture, historically significant events and matters of legal and constitutional importance. Habit produces awareness that cramming cannot replicate.

**Should I skip the Quantitative Techniques section in CLAT?**
It carries only about 10 per cent of the paper, so proportionate attention is reasonable, and for most candidates that means keeping Class 10 arithmetic fresh rather than deep preparation. Skipping it entirely is defensible only if that time genuinely goes to a higher-weighted section, since at 10 to 14 questions it still represents marks that competitors are collecting.`;

const FAQS = [];

const ROW = {
  slug: "clat-2027",
  title: "CLAT 2027: Exam 6 Dec, 120 Questions, 26 NLUs, Pattern",
  conducting_body: "Consortium of National Law Universities",
  exam_date: "6 December 2026. Offline OMR-based paper, 120 minutes.",
  application_start: "2026-08-03",
  application_end: null,
  eligibility:
    "Undergraduate (BA LLB): Class 12 or equivalent with a minimum of 45 per cent marks, relaxed to 40 per cent for SC and ST candidates. Candidates appearing in Class 12 in the current academic year may apply subject to producing proof of passing at admission. NO upper age limit. Postgraduate (LLM): an LLB degree or equivalent with the prescribed minimum marks.",
  syllabus:
    "All five sections are PASSAGE-BASED. English Language: comprehension, inference, author's argument and tone, and vocabulary in context. Current Affairs including General Knowledge: national and international news of roughly the preceding year, arts, culture, historically significant events, and matters of legal and constitutional importance. Legal Reasoning: a legal principle is SUPPLIED in the passage and applied to fact situations, so NO prior legal knowledge is required and memorising bare acts is wasted effort. Logical Reasoning: argument analysis, assumptions, inferences, conclusions, flaws, analogies and relationships. Quantitative Techniques: Class 10 level ratio and proportion, percentages, averages, mensuration, statistical estimation and data interpretation, with data supplied rather than recalled.",
  exam_pattern:
    "Offline OMR-based, 120 multiple choice questions in 120 minutes (one minute per question), with NO sectional time limits. Section weights: English Language 22-26 questions (~20 per cent), Current Affairs including GK 28-32 (~25 per cent), Legal Reasoning 28-32 (~25 per cent), Logical Reasoning 22-26 (~20 per cent), Quantitative Techniques 10-14 (~10 per cent). Marking: +1 for a correct answer, -0.25 for a wrong one, 0 for unattempted. The Consortium has confirmed the pattern is retained for 2027 with changes expected in the qualitative character of questions rather than the structure. Because every section is passage-based, reading speed is the binding constraint across the whole paper.",
  admit_card_link: "https://consortiumofnlus.ac.in/",
  result_link: "https://consortiumofnlus.ac.in/",
  official_link: "https://consortiumofnlus.ac.in/",
  category: "law",
  state: "all-india",
  reading_time: "12 min read",
  description:
    "CLAT 2027 is on 6 December and registration opened 3 August. Check the 120-question pattern, why no prior law knowledge is needed and how NLU counselling works.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
