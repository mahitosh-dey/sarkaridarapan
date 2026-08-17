// UPSC CSE 2026 — thin-page fix + repositioning + metadata violations
//
// Verified 2026-08-15.
//
// FIXES THREE THINGS AT ONCE
//   1. Thin: 1128w -> 3000w+
//   2. Metadata (hard rule 7): title was 42c (need 50-65), description was
//      254c (need 150-160). Both now in range.
//   3. Stale intent: page was a general "complete guide" framed around the
//      notification. Applications closed 27 Feb, prelims was 24 May, the
//      prelims result came 15 Jun, and the MAINS COMMENCES 21 AUGUST 2026,
//      six days after this rewrite. The live intent is Mains, not notification.
//
// Also removes the em dash in the H1 and converts Title Case headings to
// sentence case.
//
// FACTS VERIFIED (UPSC notification 4 Feb 2026; corroborated across Drishti
// IAS, Vajiram & Ravi, Testbook, PW, Prepp, CareerLauncher on 2026-08-15):
//   - 933 vacancies, including 33 reserved for Persons with Benchmark Disability
//   - Notification 4 February 2026, applications closed 27 February 2026
//   - Prelims 24 May 2026; prelims result declared 15 June 2026
//   - Mains commences 21 August 2026 and runs 5 days
//   - Three stages: Prelims, Mains, Personality Test
//   - Eligibility 21 to 32 years, graduate, with category relaxation
//
// Mains paper structure (Papers A/B qualifying, I to VII counting for the
// 1750 merit total, Personality Test 275, grand total 2025) is UPSC's long
// established pattern and is stated as such, with the notification flagged as
// the authority.
//
// NOT ASSERTED: prelims cutoff for this cycle (UPSC publishes cutoffs only
// after the final result), Mains result date, and the service-wise vacancy
// split within the 933.
//
// UNBLOCKS two redirects held back because this destination was thin:
//   /blog/upsc-cse-2026-notification-dates-eligibility-apply-online  1693w
//   /blog/upsc-eligibility-2026-age-limit-qualification-attempts     1742w

import { createExam } from "./lib/create-exam.mjs";

const content = `The UPSC Civil Services Main Examination 2026 commences on 21 August 2026 and runs for five days. Candidates who cleared the preliminary examination held on 24 May, whose result was declared on 15 June, are in the final stretch.

This cycle is recruiting 933 posts, including 33 reserved for Persons with Benchmark Disability, across the Indian Administrative Service, Indian Police Service, Indian Foreign Service and more than twenty other Group A and Group B central services.

## Where CSE 2026 stands

| Stage | Date | Status |
|---|---|---|
| Notification | 4 February 2026 | Released |
| Applications closed | 27 February 2026 | Closed |
| Preliminary examination | 24 May 2026 | Held |
| Prelims result | 15 June 2026 | Declared |
| Main examination | Commences 21 August 2026 | Five days |
| Personality Test | After the Mains result | Pending |

If you are searching for how to apply, this cycle closed in February. The next notification is usually issued early in the calendar year.

## The Mains paper structure and where marks actually come from

Seven papers count towards your merit and two do not. Candidates lose ground every year by misreading which is which.

| Paper | Subject | Marks | Counts? |
|---|---|---|---|
| Paper A | Indian Language | 300 | Qualifying only |
| Paper B | English | 300 | Qualifying only |
| Paper I | Essay | 250 | Yes |
| Paper II | General Studies I | 250 | Yes |
| Paper III | General Studies II | 250 | Yes |
| Paper IV | General Studies III | 250 | Yes |
| Paper V | General Studies IV | 250 | Yes |
| Paper VI | Optional Paper 1 | 250 | Yes |
| Paper VII | Optional Paper 2 | 250 | Yes |
| | Written total | 1750 | |
| | Personality Test | 275 | Yes |
| | Grand total | 2025 | |

Papers A and B are qualifying. You must pass them, and your marks in them are never added to your total. But failing either one means the rest of your papers are not evaluated at all, which is why a candidate who prepared brilliantly for General Studies can be eliminated by a language paper they dismissed.

Nothing from the preliminary examination carries into this total. Prelims decided only who sits the Mains.

The optional subject is worth 500 marks across two papers, which is more than any single General Studies paper and close to a fifth of the written total. Candidates who treat the optional as secondary to General Studies have the weighting backwards.

## The final week before 21 August

With the examination commencing on 21 August, the useful work in the closing days is narrow.

Do not start new topics. Anything learned now will not consolidate in time, and the hours cost you revision of material you already know, which is where marks actually sit.

Revise your own notes rather than reading fresh sources. The purpose of the final week is retrieval speed, not coverage. You want facts and frameworks to surface without effort in the hall.

Write at least a few full-length answers under strict time. The Mains is a writing examination conducted across five days, and hand stamina is a real constraint that candidates underestimate. If you have not written for three hours continuously in recent weeks, your speed on day one will not match your practice.

Revise the essay structure you intend to use, and re-read a few of your own past essays. The Essay paper carries 250 marks, the same as any General Studies paper, and it rewards structure and clarity far more than obscure content.

Confirm the logistics. Centre address, reporting time, admit card printed, identity document ready. The examination runs across five days, so plan travel and accommodation for the full period rather than for a single day.

Protect sleep. Five consecutive days of three-hour papers is an endurance event, and a candidate who arrives on day one under-slept will fade by day three when the General Studies papers are still ahead.

## What each General Studies paper covers

General Studies I covers Indian heritage and culture, history and geography of the world and society. The Indian art and culture portion is the part candidates most often under-prepare, and it produces questions that reward specific knowledge rather than general reasoning.

General Studies II covers governance, constitution, polity, social justice and international relations. This paper rewards current affairs integration more than any other, because questions are typically framed against contemporary developments rather than as static constitutional recall.

General Studies III covers technology, economic development, biodiversity, environment, security and disaster management. Its breadth is the difficulty. Candidates who prepared economics thoroughly and treated internal security as an afterthought find the paper unbalanced against them.

General Studies IV covers ethics, integrity and aptitude, including case studies. It is the paper where preparation converts most directly into marks, because the case studies reward a consistent, defensible framework rather than accumulated facts, and a candidate who has practised applying one framework consistently outperforms one who improvises.

## Answer writing is the whole examination

The Mains is not testing whether you know things. It is testing whether you can produce a structured, relevant, legible answer inside a word limit under time pressure.

That distinction matters because it changes what preparation looks like. Reading more material improves your ceiling slightly. Writing answers and having them evaluated improves your actual score substantially, and the gap between candidates with similar knowledge is almost entirely writing skill.

Three habits separate strong answer writers. They address the exact directive in the question, distinguishing between discuss, examine, critically analyse and comment rather than treating all of them as write everything you know. They structure with a clear introduction, a body organised into visible parts, and a conclusion that answers the question asked. And they finish. An incomplete answer scores as an incomplete answer regardless of how good the first half was.

Time allocation is the binding constraint. Twenty questions in three hours is roughly nine minutes each including thinking time, and candidates who spend fifteen minutes producing an excellent first answer have guaranteed themselves a weak paper.

## Eligibility

A candidate must be a citizen of India for the Indian Administrative Service and the Indian Police Service. Certain other services admit candidates from a wider set of categories defined in the notification.

The age band is 21 to 32 years, calculated against the cutoff date stated in the notification. Relaxation extends the upper limit to 35 years for Other Backward Classes in the non-creamy layer, 37 years for Scheduled Castes and Scheduled Tribes, and further for Persons with Benchmark Disability and defined categories of ex-servicemen.

The academic requirement is a degree from a recognised university. Candidates awaiting final year results may apply for the preliminary examination, subject to producing proof of passing before the Mains.

Attempt limits apply and differ by category: six attempts for the general category, nine for Other Backward Classes, and no limit up to the age ceiling for Scheduled Castes and Scheduled Tribes. Appearing in the preliminary examination counts as an attempt. Applying without appearing does not.

## What the 933 posts actually are

The 933 vacancies span the All India Services and the Central Services. The Indian Administrative Service, Indian Police Service and Indian Forest Service are the All India Services, and the Indian Foreign Service sits alongside them as the most sought central service.

Beyond those, the list includes the Indian Revenue Service in both its Income Tax and Customs and Indirect Taxes branches, the Indian Audit and Accounts Service, the Indian Defence Accounts Service, the Indian Railway services, the Indian Information Service, the Indian Postal Service, the Indian Trade Service, the Indian Corporate Law Service and several Group B services including the Delhi Andaman and Nicobar Islands Civil Service and Police Service.

Service allocation follows from your final rank applied against the preference order you submit, together with category and cadre considerations. The preference order is a genuine decision rather than a formality, because a candidate who ranks a service they do not want above one they do can be allocated the former with no recourse.

## The Personality Test

The interview carries 275 marks against a written total of 1750, which is roughly 13 per cent of the final score and enough to move a candidate several hundred ranks.

It is not a knowledge test. The board assesses judgement, clarity of thought, balance, and the coherence of your stated interests and background. Your Detailed Application Form becomes the primary source of questions, which is why what you wrote about your hometown, your degree, your hobbies and your work history months earlier matters at this stage.

Candidates who prepare only after the Mains result lose an opportunity. The gap is usable, and the material is largely your own background plus current affairs, both of which reward steady work.

## The preliminary examination, and why the CSAT trips people

The prelims held on 24 May 2026 had two papers. General Studies Paper I, carrying 200 marks, decides the cutoff. Paper II, the Civil Services Aptitude Test, also carries 200 marks but is purely qualifying at 33 per cent.

That 33 per cent bar is where a steady number of otherwise strong candidates fail every year. Because CSAT marks do not count towards anything, candidates from humanities backgrounds sometimes skip preparing it entirely, then miss the qualifying threshold on comprehension and basic numeracy and are eliminated despite a high General Studies score.

The lesson generalises across this examination. UPSC has several qualifying-only components, and every one of them is a pass or fail gate rather than a scoring opportunity. Ignoring a component because it earns no marks confuses the scoring rule with the elimination rule.

For candidates planning a future attempt, the practical implication is to secure every qualifying paper early and cheaply, then put the remaining effort into the papers that actually accumulate marks.

## Choosing an optional subject

The optional carries 500 marks and is the single largest choice a candidate makes in this examination, yet it is often decided on hearsay about which subject scores well.

The considerations that actually matter are whether you can sustain interest in the subject across a preparation cycle that may run years, whether the syllabus overlaps usefully with General Studies, whether good material and guidance are available to you, and whether you have prior academic grounding in it.

Overlap deserves more weight than it usually gets. Subjects such as political science, geography, sociology, public administration and history share substantial ground with the General Studies papers, which means preparation compounds instead of competing for hours. A subject with no overlap has to justify itself on your affinity for it alone.

Scoring trends are the weakest basis for the decision. They shift between cycles, they reflect the pool of candidates who chose that subject rather than the subject's inherent generosity, and a candidate who picks a subject they dislike because of a trend will underperform someone who picked a subject they can think in.

Switching optionals mid-preparation is expensive and should be a last resort. Most candidates who consider it would be better served by improving their answer writing in the subject they have.

## What preparation actually looks like across a cycle

The examination runs across roughly a year from notification to final result, and the preparation that precedes it typically runs longer. Understanding the shape of it prevents the common failure of preparing intensely for the wrong stage at the wrong time.

Foundation work covers the standard sources for polity, history, geography, economy, environment and the optional, and it is where most first-time candidates spend most of their time. It is necessary and it is not sufficient, because it builds knowledge rather than the ability to deploy it.

Answer writing should start far earlier than most candidates begin it. Writing is a skill built by repetition and feedback, and candidates who postpone it until the prelims result have roughly ten weeks to acquire something that takes far longer.

Current affairs runs continuously rather than in a block. General Studies II in particular frames questions against contemporary developments, and a candidate who compiles current affairs across the year has material that a last-minute compilation cannot replicate.

Revision needs to be planned rather than assumed. The volume of material is large enough that anything read once and not revisited is effectively lost, which is why candidates who read fewer sources repeatedly outperform those who read more sources once.

Test series serve two purposes: they force writing under time, and they expose gaps you would not have found by reading. Both matter more than the score you get on any individual test.

## Frequently asked questions

**When does the UPSC CSE 2026 Mains exam start?**

The Main Examination commences on 21 August 2026 and runs for five days. Candidates who cleared the preliminary examination held on 24 May 2026, whose result was declared on 15 June 2026, are eligible to sit it.

**How many vacancies are there in UPSC CSE 2026?**

933 posts, including 33 reserved for Persons with Benchmark Disability, spanning the Indian Administrative Service, Indian Police Service, Indian Foreign Service and more than twenty other Group A and Group B central services.

**Can I still apply for UPSC CSE 2026?**

No. The notification was released on 4 February 2026 and applications closed on 27 February 2026. Both the preliminary examination and the Mains schedule are past the application stage. The next notification is usually issued early in the calendar year.

**Do prelims marks count towards the final UPSC merit list?**

No. The preliminary examination decides only who sits the Mains. The final merit is built from the Mains written total of 1750 marks and the Personality Test worth 275, giving a grand total of 2025.

**Which UPSC Mains papers are qualifying only?**

Paper A, the Indian Language paper, and Paper B, English, each carrying 300 marks. You must pass both, but neither contributes to your merit total. Failing either means your remaining papers are not evaluated at all, which is why dismissing them is dangerous.

**How much is the optional subject worth?**

500 marks across two papers of 250 each, which is more than any single General Studies paper and close to a fifth of the 1750 written total. Candidates who treat the optional as secondary to General Studies have the weighting backwards.

**What is the age limit and attempt limit for UPSC CSE?**

21 to 32 years against the notification cutoff date, extended to 35 for Other Backward Classes in the non-creamy layer and 37 for Scheduled Castes and Scheduled Tribes. Attempts are capped at six for the general category and nine for Other Backward Classes, with no cap up to the age ceiling for SC and ST. Appearing in the preliminary examination counts as an attempt; applying without appearing does not.

**How many marks is the UPSC interview?**

275 marks, against a written total of 1750, so roughly 13 per cent of the 2025 grand total. That is enough to move a candidate several hundred ranks. The board assesses judgement and clarity rather than knowledge, and draws heavily on your Detailed Application Form.

**What should I do in the last week before the Mains?**

Revise your own notes rather than reading new sources, write a few full-length answers under strict time to build hand stamina, re-read your past essays, and confirm centre logistics for all five days. Do not start new topics: they will not consolidate and the hours cost you revision of material you already know.

**Does UPSC publish cutoff marks?**

Yes, but only after the final result of the cycle concludes, alongside the marks of recommended candidates. Cutoffs circulating before that point are estimates, and they shift each year with paper difficulty and the vacancy count.

**Is the UPSC Mains held over five consecutive days?**

The Main Examination commences on 21 August 2026 and runs for five days, with two three-hour papers on most days. Plan travel and accommodation for the full period rather than for a single date, and treat it as an endurance event: candidates who arrive under-slept on day one commonly fade by day three when General Studies papers are still ahead.

**How is the final UPSC rank calculated?**

From the Mains written total of 1750 marks plus the Personality Test worth 275, giving 2025. Nothing from the preliminary examination is included, and the two qualifying language papers contribute nothing even though they must be passed.

**What happens if I fail Paper A or Paper B?**

Your remaining papers are not evaluated. Both qualifying papers must be passed for the Commission to assess the seven papers that count, so a candidate can write excellent General Studies papers and never have them marked. This is the most avoidable elimination in the examination.

**Can I choose which service I get?**

Not directly. Service allocation follows from your final rank applied against the preference order you submit, together with category and cadre considerations. The preference order is a real decision rather than a formality, because ranking a service you do not want above one you do can result in being allocated the former with no recourse.

**Does the interview really change ranks?**

Yes. At 275 marks against a 1750 written total, the Personality Test is roughly 13 per cent of the final score, which is enough to move a candidate several hundred ranks in either direction. It is not a knowledge test: the board assesses judgement, clarity and balance, and draws heavily on the Detailed Application Form you submitted months earlier.

## Official sources

- Union Public Service Commission: https://upsc.gov.in
- The CSE 2026 notification PDF, which is the authority on the service-wise vacancy split, eligibility wording, attempt rules and the detailed syllabus

Where anything on this page conflicts with UPSC, UPSC is correct. Your admit card is the authority on your centre, date and reporting time.`;

await createExam({
  slug: "upsc-cse-2026",
  title: "UPSC CSE 2026 Mains: Starts 21 August, 933 Vacancies",
  conducting_body: "Union Public Service Commission (UPSC)",
  exam_date: "2026-08-21",
  application_start: "2026-02-04",
  application_end: "2026-02-27",
  eligibility:
    "A degree from a recognised university. Candidates awaiting final year results may apply for the preliminary examination subject to producing proof of passing before the Mains. Age 21 to 32 years against the cutoff date stated in the notification, relaxed to 35 for Other Backward Classes in the non-creamy layer, 37 for Scheduled Castes and Scheduled Tribes, and further for Persons with Benchmark Disability and defined categories of ex-servicemen. Citizenship of India is required for the Indian Administrative Service and Indian Police Service; certain other services admit a wider set of categories defined in the notification. Attempts are capped at six for the general category and nine for Other Backward Classes, with no cap up to the age ceiling for SC and ST. Appearing in the preliminary examination counts as an attempt; applying without appearing does not.",
  syllabus:
    "Prelims GS Paper I: current affairs, history of India and the freedom struggle, Indian and world geography, Indian polity and governance, economic and social development, environment and ecology, general science. Prelims Paper II (CSAT): comprehension, interpersonal and communication skills, logical reasoning, decision making, basic numeracy, qualifying at 33 per cent. Mains General Studies I: Indian heritage and culture, history and geography of the world and society. General Studies II: governance, constitution, polity, social justice, international relations. General Studies III: technology, economic development, biodiversity, environment, security, disaster management. General Studies IV: ethics, integrity and aptitude, including case studies. Plus an Essay paper and two optional subject papers.",
  exam_pattern: {
    stages: "Preliminary Examination, Main Examination, Personality Test",
    prelims: {
      date: "24 May 2026, held. Result declared 15 June 2026.",
      papers: "GS Paper I (200 marks, decides the cutoff) and Paper II CSAT (200 marks, qualifying at 33 per cent)",
      note: "Prelims marks do NOT carry into the final merit list. It decides only who sits the Mains.",
    },
    mains: {
      date: "Commences 21 August 2026, runs five days",
      qualifying: "Paper A Indian Language (300 marks) and Paper B English (300 marks). Must be passed; marks never added to the total. Failing either means the remaining papers are NOT evaluated.",
      counting: "Paper I Essay (250), Papers II to V General Studies I to IV (250 each), Papers VI and VII Optional Subject (250 each). Written total 1750.",
      note: "The optional subject is worth 500 marks across two papers, more than any single General Studies paper and close to a fifth of the written total.",
    },
    personalityTest: "275 marks. Roughly 13 per cent of the 2025 grand total, enough to move a candidate several hundred ranks. Draws heavily on the Detailed Application Form.",
    grandTotal: "2025 marks (1750 written plus 275 Personality Test)",
  },
  official_link: "https://upsc.gov.in",
  category: "civil-services",
  state: "all-india",
  description:
    "UPSC CSE 2026 Mains commences 21 August 2026 for five days, with 933 vacancies. Check the paper structure, marks weighting, eligibility and interview.",
  content,
  reading_time: "12 min read",
});
