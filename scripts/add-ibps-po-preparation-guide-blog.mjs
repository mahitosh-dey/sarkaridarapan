import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const post = {
  slug: 'ibps-po-2026-preparation-guide',
  title: 'IBPS PO 2026 preparation guide: Prelims, Mains, and interview',
  description: 'IBPS PO selects through three stages: Prelims, Mains, and an interview. Each stage tests different things and needs a different approach. This guide covers what to focus on at each stage, how Banking Awareness fits in, and a month-by-month preparation sequence.',
  category: 'Exam Preparation',
  author: 'SarkariDarapan Team',
  tags: [
    'IBPS PO',
    'Bank PO preparation',
    'IBPS PO 2026',
    'Banking exams',
    'Government Exams',
    'Exam Preparation',
  ],
  image: null,
  reading_time: '9 min read',
  is_active: true,
  published_at: new Date().toISOString(),
  content: `## How IBPS PO selects candidates

IBPS PO fills Probationary Officer vacancies across 11 public sector banks through a three-stage process: Prelims, Mains, and an interview. Each stage serves a different purpose.

Prelims is a qualifying filter. Mains produces the merit score. The interview contributes 20% of the final merit, with Mains carrying the remaining 80%, per IBPS's official selection process on ibps.in.

Getting this sequence wrong is the most common preparation mistake. Candidates who study Mains-level content before clearing Prelims waste weeks. Candidates who study only Prelims content and then scramble for Mains lose even more.

---

## Prelims exam structure

Prelims has 100 questions across three sections, each with its own time limit.

| Section | Questions | Marks | Time |
|---|---|---|---|
| English Language | 30 | 30 | 20 minutes |
| Quantitative Aptitude | 35 | 35 | 20 minutes |
| Reasoning Ability | 35 | 35 | 20 minutes |
| Total | 100 | 100 | 60 minutes |

Negative marking is 0.25 marks per wrong answer. The sectional time limit is what catches most candidates off guard: you can't skip a weak section and return to it later. If Quantitative Aptitude is your weakest section, you still have exactly 20 minutes to clear the sectional cutoff in it.

IBPS sets both overall and sectional cutoffs for Prelims. Failing the sectional cutoff in any one section eliminates you regardless of your total score.

---

## Mains exam structure

Mains has an objective section (155 questions, 200 marks) and a descriptive paper.

| Section | Questions | Marks | Time |
|---|---|---|---|
| Reasoning and Computer Aptitude | 45 | 60 | 60 minutes |
| Data Analysis and Interpretation | 35 | 60 | 45 minutes |
| General Economy and Banking Awareness | 40 | 40 | 35 minutes |
| English Language | 35 | 40 | 40 minutes |
| Descriptive: Letter and Essay | 2 | 25 | 30 minutes |

Negative marking in the objective section is 0.25 marks per wrong answer. The Descriptive paper runs after the objective section and is evaluated only for candidates who clear the objective cutoff.

The final merit is calculated as 80% Mains score (objective plus Descriptive) and 20% interview score, per ibps.in. Prelims marks are not counted.

---

## What changes between Prelims and Mains

Prelims and Mains test the same broad subjects but at different depths and under different constraints.

| Prelims approach | Mains approach |
|---|---|
| Clear sectional and overall cutoff | Every mark shapes final merit and rank |
| English: grammar, vocabulary, basic comprehension | English: longer passages, cloze tests, Descriptive writing |
| Quantitative Aptitude: arithmetic focus | Data Analysis and Interpretation: DI sets, caselet DI |
| Reasoning: basic puzzles, coding-decoding, syllogism | Reasoning and Computer Aptitude: multi-variable complex puzzles |
| No Banking Awareness | General Economy and Banking Awareness: 40 questions |
| No Descriptive paper | Formal letter plus essay in 30 minutes |
| 1 mock per week sufficient | 3 to 4 mocks per week, plus daily Descriptive practice |

---

## Reasoning: where Mains separates candidates

Reasoning in Prelims covers coding-decoding, blood relations, direction sense, syllogism, and basic seating arrangements. Most candidates handle this section adequately with 4 to 5 weeks of focused practice.

Mains Reasoning is a different level. Puzzles are multi-variable: a single question set might ask you to arrange 8 people across two floors with constraints on their professions, ages, and directions simultaneously. These sets take 7 to 10 minutes each. With 45 questions in 60 minutes, you can't attempt everything.

The practical approach: scan the Mains Reasoning section before starting. Spend 2 minutes identifying which sets look solvable, tackle those first, and leave the hardest sets for last. Candidates who score well in Mains Reasoning typically attempt 30 to 35 of the 45 questions and score around 38 to 45 marks, not by rushing through everything.

---

## Quantitative Aptitude vs Data Analysis and Interpretation

Prelims Quant is arithmetic-heavy: percentages, profit and loss, time and work, ratios, averages, number series. These topics are solvable with formula knowledge and timed practice.

Mains replaces Quant with Data Analysis and Interpretation. DI sets dominate: bar graphs, pie charts, line graphs, and caselet DI (paragraph-based data that requires reading and extracting numbers before calculating). A single DI set can have 5 questions requiring 4 to 5 separate calculations each.

The difficulty jump is real if you haven't practiced DI. The fix is simple: from the third week of Mains preparation onward, solve two DI sets per day. Include caselet DI specifically, since those appear in every IBPS PO Mains cycle and take the most time per mark earned.

---

## Banking Awareness: the section that trips unprepared candidates

Banking Awareness carries 40 questions and 40 marks in Mains, with no equivalent in Prelims. It's the section most candidates underestimate.

The syllabus splits into two parts. Static Banking Awareness covers: Reserve Bank of India's structure and functions, monetary policy tools (repo rate, reverse repo rate, CRR, SLR), types of bank accounts, NEFT and RTGS and IMPS basics, priority sector lending norms, NPA classifications, and banking regulators. Dynamic Banking Awareness covers: RBI policy announcements from the last 6 months, major bank mergers, government financial schemes, and Union Budget highlights relevant to banking.

Start static Banking Awareness in Month 1, not Month 3. It takes longer to retain than current affairs because the concepts are unfamiliar to candidates without a banking or finance background. Two weeks of Banking Awareness prep before Mains is not enough to retain the static portion. Three months of 30 minutes daily is.

---

## The Descriptive paper: 25 marks most candidates leave behind

The Descriptive paper in IBPS PO Mains asks candidates to write one formal letter (150 to 200 words) and one essay (200 to 250 words) in 30 minutes. Most candidates prepare for it last, or skip it entirely, and leave 10 to 15 marks on the table.

What the Descriptive paper tests: formal writing structure, appropriate vocabulary, and the ability to develop an argument within a word limit. Topics in past IBPS PO Mains cycles have included "Role of technology in the banking sector," "Financial inclusion in rural India," and "Benefits of digital payments." These topics repeat in format even when the exact subject changes.

The preparation approach: learn 8 to 10 formal letter formats (complaint, request, feedback, editor letters). For essays, practice writing 200 words on a topic in 10 minutes, twice per week. After 3 weeks of this routine, the pace becomes manageable. There are no shortcuts here, only repetition.

---

## The interview: 20% of your final score

20% of the final IBPS PO merit comes from the interview stage, per ibps.in. Most candidates treat interview preparation as an afterthought after Mains. For anyone whose Mains score puts them near the cutoff, that 20% is not optional.

Interview panels typically ask: current RBI repo rate and recent monetary policy decisions, why you want to join banking (specific reasons, not generic ones), about the specific bank you're interviewing at (its recent performance, CEO, headquarters, tagline), and standard questions about your education and background.

The prep is targeted. Read the specific bank's most recent annual report highlights and press releases. Know the current RBI Governor and the repo rate as of the interview date. Prepare a structured 90-second "tell me about yourself" that includes a genuine reason for choosing banking. Two weeks of focused preparation is enough.

---

## A practical preparation sequence

IBPS PO preparation works best in three phases aligned to the exam stages.

In Month 1, focus on Prelims fundamentals across all three sections: one full mock per week and 30 minutes of static Banking Awareness daily. Don't wait to start Banking Awareness. It's tempting to save it for later, but the retention curve doesn't work that way.

In Month 2, shift Prelims practice to mock-test pace while introducing DI sets and complex Reasoning puzzles as a warm-up for Mains. Take two Prelims mocks per week. Banking Awareness continues daily.

After Prelims results are out, switch entirely to Mains: three to four full Mains mocks per week, daily Descriptive writing practice, and dynamic Banking Awareness (last 6 months). Start two weeks of interview preparation in the final stretch before the Mains date.

Starting Banking Awareness in Month 1 instead of Month 3 is one of the few things that makes a measurable difference in how Mains goes.

---

## Frequently asked questions

**Is IBPS PO harder than SSC CGL?**
They test different things. IBPS PO has Banking Awareness and a Descriptive paper that SSC CGL doesn't. SSC CGL Mains has a broader subject spread. IBPS PO also adds an interview stage worth 20% of the final score. Candidates from non-banking backgrounds typically find Banking Awareness the hardest adjustment when switching from SSC preparation to IBPS PO.

**What is the final merit formula for IBPS PO?**
The final merit is 80% of the Mains score (objective plus Descriptive) and 20% of the interview score, per IBPS's official CRP PO notification on ibps.in. Prelims marks are not counted in the final selection.

**When does the IBPS PO 2026 notification come out?**
IBPS PO notifications typically release in August, with Prelims in October and Mains in November. Check ibps.in for the official 2026 calendar once it is published.

**What is the age limit for IBPS PO?**
General and EWS candidates must be between 20 and 30 years of age. OBC candidates get a 3-year relaxation (up to 33 years). SC and ST candidates get a 5-year relaxation (up to 35 years), per IBPS's official eligibility criteria on ibps.in. Age is calculated as of the notification date.

**Is Banking Awareness tested in Prelims?**
No. Banking Awareness and General Economy appear only in the Mains examination under the "General Economy and Banking Awareness" section (40 questions, 40 marks). Prelims tests only English Language, Quantitative Aptitude, and Reasoning Ability.

**How long does IBPS PO preparation take from scratch?**
6 months is a reasonable timeline for most candidates starting from zero, at 4 to 5 hours of daily study. Candidates with prior SSC or similar exam preparation often clear Prelims faster but still need the full 6 months to be competitive in Mains, mainly because of Banking Awareness and the Descriptive paper.`,
};

const { error } = await supabase.from('blog_posts').insert([post]);

if (error) {
  console.error('Insert failed:', error);
  process.exit(1);
}

console.log('Done. Blog post inserted successfully.');
console.log('Slug:', post.slug);
