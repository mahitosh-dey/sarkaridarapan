import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xtjbijvxxeoopcqxycpz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY'
);

const post = {
  slug: 'ssc-cgl-tier-1-vs-tier-2-strategy',
  title: 'SSC CGL Tier 1 vs Tier 2: strategy for each stage',
  description: 'Most SSC CGL aspirants prepare the same way for both tiers. Tier 1 only requires clearing the cutoff. Tier 2 decides your rank and post. Here is what actually changes and how to adjust your preparation after clearing Tier 1.',
  category: 'Exam Preparation',
  author: 'SarkariDarapan Team',
  tags: [
    'SSC CGL',
    'SSC CGL Tier 1',
    'SSC CGL Tier 2',
    'SSC CGL strategy',
    'Government Exams',
    'Exam Preparation',
  ],
  image: null,
  reading_time: '8 min read',
  is_active: true,
  published_at: new Date().toISOString(),
  content: `## Tier 1 and Tier 2 are not the same exam

Tier 1 is a qualifying filter. Whether you score 162 or 185 doesn't matter as long as you're above the cutoff. The General category Tier 1 cutoff for SSC CGL 2023 was approximately 160 marks out of 200, per SSC's official result published on ssc.gov.in. Getting past that number is the only goal at this stage.

Tier 2 is different. Every mark you score goes directly toward your final rank and determines which post you're allocated. An Inspector in CBIC and a Tax Assistant in Income Tax can both clear Tier 1 with 163 marks. What separates them is Tier 2 performance.

That distinction changes how you should prepare for each stage.

---

## Tier 1 exam structure

Tier 1 has 100 questions across four sections, answered in 60 minutes.

| Section | Questions | Marks |
|---|---|---|
| General Intelligence and Reasoning | 25 | 50 |
| General Awareness | 25 | 50 |
| Quantitative Aptitude | 25 | 50 |
| English Comprehension | 25 | 50 |
| Total | 100 | 200 |

Negative marking is 0.5 marks per wrong answer. 60 minutes for 100 questions is 36 seconds per question. At that pace, you can't work things out from scratch. Speed comes from pattern recognition built through repeated practice.

---

## Tier 2 exam structure

The Tier 2 structure changed significantly in 2022. Paper 1 is now compulsory for all candidates, with three sections in a module-based format.

| Module | Subject | Questions | Marks each |
|---|---|---|---|
| Section 1, Module 1 | Mathematical Abilities | 30 | 3 |
| Section 1, Module 1 | Reasoning and General Intelligence | 30 | 3 |
| Section 1, Module 2 | English Language and Comprehension | 45 | 3 |
| Section 1, Module 2 | General Awareness | 25 | 3 |
| Section 2, Module 1 | Computer Knowledge | 20 | 3 |

Paper 1 total: 450 marks. Negative marking is 1 mark per wrong answer, up from 0.5 in Tier 1.

Candidates who applied for Junior Statistical Officer (JSO) sit an additional Paper 2 (Statistics, 200 marks). Candidates who applied for Assistant Audit Officer (AAO) sit Paper 3 (General Studies: Finance and Economics, 200 marks). Both are restricted to candidates who opted for these posts during the initial application.

---

## What changes in Tier 2 Maths

In Tier 1, the 25 Maths questions are heavily arithmetic-weighted: percentages, profit and loss, time and work, simple and compound interest. Candidates who are solid on arithmetic can clear the Tier 1 cutoff without much work in geometry or trigonometry.

Tier 2 Maths is a different distribution. The 30 questions include a heavier mix of geometry (circle theorems, triangle properties), trigonometric identities, and Data Interpretation sets. DI questions in Tier 2 often require reading two related tables or charts at once before answering. A candidate who only drilled arithmetic for Tier 1 will find Tier 2 Maths slow.

The practical fix: spend two weeks after your Tier 1 result specifically on circle theorems, triangle properties, trigonometric identities, and multi-source DI sets. Those are the gaps Tier 2 exposes most.

---

## What changes in Tier 2 English

English expands from 25 questions in Tier 1 to 45 questions in Tier 2, and the nature of the questions shifts.

Tier 1 English is mostly rule-based: spotting grammar errors, filling blanks, synonyms, antonyms. If you know the rules, you can score well without much reading practice.

Tier 2 English adds longer comprehension passages and para-jumbles that test reading speed and understanding, not just grammar. A candidate who hasn't read regularly will find this section slow.

One fix that works: read one editorial from The Hindu every day for 30 days before Tier 2. Time yourself. Aim to read 450 words and answer 4 questions on the passage in under 3 minutes. That's roughly the pace the exam requires.

---

## General Awareness: same syllabus, higher stakes

The GA syllabus doesn't change between Tier 1 and Tier 2. Static GK, current affairs, economy, government schemes. The questions feel similar in both stages.

What changes is the cost of a weak score. In Tier 1, GA is one of four sections, and it's the one where you either know the answer or you don't. In Tier 2, GA carries 25 questions and 75 marks in a 450-mark paper. A difference of 5 correct answers (15 marks) can shift your rank enough to affect which post you're allocated.

Don't assume GA will take care of itself. In the month before Tier 2, revise static GK daily and cover current affairs from the last 6 months without gaps.

---

## Computer Knowledge: 60 marks, low preparation cost

60 marks come from Computer Knowledge in Tier 2, with no equivalent in Tier 1. Most candidates underestimate how quickly this section can be covered.

The syllabus includes MS Office shortcuts (Word, Excel, PowerPoint), operating system basics, internet fundamentals, binary and decimal number conversion, and database concepts. Of the 20 questions, roughly 14 to 15 are straightforward for anyone with regular computer experience. The remaining 5 tend to focus on specific Excel formulas or binary-decimal conversions.

Targeted preparation of 6 to 8 hours covers most of it: one afternoon on MS Office shortcuts, a few hours on number systems. Score 14 to 16 out of 20 and move on.

---

## How the strategy shifts

Tier 1 and Tier 2 call for different daily routines, different mock test frequencies, and different depth in each subject.

| Tier 1 focus | Tier 2 focus |
|---|---|
| Clear the cutoff. Rank doesn't matter. | Every mark affects post allocation. |
| Broad coverage across all 4 subjects | Deeper work in Maths and English specifically |
| 36 seconds per question, prioritise speed | Longer per-section time, but 45 English questions demand reading pace |
| Skip uncertain answers (0.5 mark penalty) | Still skip uncertain answers (1 mark penalty) |
| 1 full mock per week | 3 to 4 full mocks per week |
| Light daily GA revision | Daily GA revision plus 6-month current affairs |

---

## The two weeks after Tier 1 results

After Tier 1 results are out, most candidates do one thing wrong: they continue preparing exactly as they did for Tier 1.

Once results are published, you know your score and where it sits relative to the cutoff. Check the official Tier 1 merit list on ssc.gov.in and compare your marks to the expected Tier 2 cutoff for the post you want. Someone targeting Inspector in CBIC is facing a different competitive range from someone aiming for Tax Assistant or Auditor.

Use the first two weeks to:
- Take one full Tier 2 mock test to see where you currently lose marks
- Identify the gap between your current Tier 2 score and the cutoff for your target post
- Build a 6 to 8 week preparation plan around closing that specific gap

If your target post's cutoff is 20 marks above your current Tier 2 mock score, that's what the next 8 weeks need to close. Everything else is secondary.

---

## Frequently asked questions

**Is Tier 2 harder than Tier 1?**
Tier 2 is longer and carries higher stakes, but the individual questions aren't dramatically harder. The Maths section has more geometry and DI than Tier 1, and the English section has longer passages. Negative marking increases to 1 mark per wrong answer. Most candidates who clear Tier 1 with a comfortable margin can handle Tier 2 with 6 to 8 weeks of focused preparation.

**Does Tier 1 score count in the final merit list?**
No. As of the revised SSC CGL exam pattern effective from 2022, confirmed in the official SSC notification on ssc.gov.in, the final merit list is based entirely on Tier 2 marks. Tier 1 is a qualifying stage only.

**Can I prepare for Tier 1 and Tier 2 simultaneously?**
You can, but only once you're genuinely solid on Tier 1 basics. Splitting attention before that weakens your performance at the qualifying stage. A candidate who fails Tier 1 while preparing for Tier 2 has wasted months of preparation.

**How many mock tests should I attempt before Tier 2?**
At least 10 full-length Tier 2 mocks, with a minimum gap of 2 days between each to allow for proper analysis. The analysis matters as much as the test itself. A mock you don't review is wasted practice time.

**Which posts need Paper 2 or Paper 3 in Tier 2?**
Paper 2 (Statistics, 200 marks) is for candidates who applied for the Junior Statistical Officer (JSO) post under the Ministry of Statistics and Programme Implementation. Paper 3 (Finance and Economics, 200 marks) is for the Assistant Audit Officer (AAO) post under the office of the Comptroller and Auditor General of India. Both posts require specific educational qualifications listed in the official SSC CGL notification on ssc.gov.in.`,
};

const { error } = await supabase.from('blog_posts').insert([post]);

if (error) {
  console.error('Insert failed:', error);
  process.exit(1);
}

console.log('Done. Blog post inserted successfully.');
console.log('Slug:', post.slug);
