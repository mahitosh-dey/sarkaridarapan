// JEE Main 2026 — thin-page fix + metadata + repositioning + dash cleanup
//
// Verified 2026-08-18.
//
//   thin    1204w -> 3000w+
//   desc    246c -> in range (hard rule 7 needs 150-160)
//   dashes  40 in the row, plus Title Case headings and a Title Case
//           "## Frequently Asked Questions" which suppresses FAQPage schema
//           (confirmed on CTET and NEET: question count jumped after fixing)
//   intent  page was a general "complete guide" framed around session dates.
//           Both sessions are done, so the live stage is results, percentile
//           interpretation and JoSAA counselling.
//
// FACTS carried from the existing row and consistent with NTA's established
// pattern: Session 1 held 21 to 29 January 2026, Session 2 held 2 to 9 April
// 2026, applications 31 October 2025 to 25 February 2026, Paper 1 for B.E./
// B.Tech, Paper 2A for B.Arch and Paper 2B for B.Planning, counselling through
// JoSAA.
//
// NOT ASSERTED: cutoff percentiles for this cycle, JoSAA round dates, seat
// matrix figures, and the JEE Advanced qualifying rank for this year. Those
// change annually and are published by the authorities.

import { createExam } from "./lib/create-exam.mjs";

const content = `JEE Main 2026 ran in two sessions: Session 1 from 21 to 29 January and Session 2 from 2 to 9 April. Both are complete, results are out, and admission now runs through JoSAA counselling.

The part candidates most often misunderstand sits between those two facts: how two sessions combine into one score, and what a percentile actually means.

## Where this cycle stands

| Stage | Detail |
|---|---|
| Application window | 31 October 2025 to 25 February 2026 |
| Session 1 | 21 to 29 January 2026 |
| Session 2 | 2 to 9 April 2026 |
| Result | Declared after each session |
| Counselling | Through JoSAA |
| Portal | jeemain.nta.nic.in |

## How two sessions become one score

Candidates may sit one session or both. Where a candidate sits both, the better of the two NTA scores is taken. The two are not averaged and they are not added.

That design has a specific consequence worth stating plainly: sitting Session 2 cannot lower a result achieved in Session 1. The downside of a second attempt is the preparation time and the stress, not the score.

Because of this, a candidate who underperformed in January had a genuine second chance in April, and one who did well in January could attempt to improve without risk. Candidates who skipped Session 2 to protect a January result misunderstood the rule.

For anyone planning a future cycle, this is the single most useful thing to know in advance, because it changes how you plan the year rather than how you sit a paper.

## Percentile is not percentage

This causes more confusion than anything else in JEE Main, and the difference is not cosmetic.

A percentage is the proportion of marks you scored. A percentile is the proportion of candidates who scored at or below you. A 99 percentile does not mean you got 99 per cent of the marks. It means roughly one per cent of candidates scored above you.

NTA reports normalised percentile scores because the examination runs across multiple shifts over several days, and shifts differ in difficulty. Normalisation converts raw marks into a position within each shift, then maps those positions onto a common scale, so that a candidate who sat a harder shift is not penalised for it.

Two consequences follow, and both surprise candidates every year.

Your percentile can differ from what your raw marks would suggest, in either direction, because it depends on how everyone else in your shift performed.

And comparing raw marks with a friend who sat a different shift is meaningless. The comparison that matters is percentile, which is precisely what normalisation exists to make comparable.

Normalisation cannot rescue a weak performance. It adjusts for shift difficulty, not for preparation.

## Normalisation worked through with numbers

Normalisation generates more complaint than any other part of JEE Main scoring, and most of the complaint comes from not seeing how it works. A concrete example helps.

Suppose Physics is examined across several shifts. One shift gets a paper most candidates find manageable and the average lands well above the overall mean. Another gets a noticeably harder paper and its average lands well below.

Without adjustment, a candidate scoring 70 in the harder shift would rank below one scoring 75 in the easier shift, even though the first candidate performed further above the standard of everyone sitting alongside them. That would penalise people for the shift they were assigned, which nobody chooses.

Normalisation fixes this by asking a different question. Instead of what did you score, it asks what proportion of candidates in your shift you finished ahead of. That proportion is comparable across shifts in a way raw marks are not, and it is what gets mapped onto the reported percentile.

The result is that your percentile answers "where did you stand" rather than "what did you get". Those are different questions and they can give different-looking answers.

Two practical points follow. Do not attempt to reverse-engineer your rank from raw marks using last year's figures, because the mapping depends on this year's candidate pool. And do not treat a lower-than-expected percentile as an error: it usually means the shift you sat performed better than you assumed.

## Preparing for JEE Advanced alongside Main

Candidates targeting the IITs are preparing for two examinations with overlapping syllabus and quite different demands, and the relationship between them is worth understanding.

JEE Main tests the standard curriculum with an emphasis on speed and accuracy across a large number of questions. JEE Advanced tests deeper conceptual understanding, with multi-step problems that reward analysis over recall and pattern recognition.

The syllabi overlap substantially but not completely, and Advanced has historically included topics and depths beyond Main.

The important asymmetry is that preparing seriously for Advanced covers Main comfortably, while preparing only for Main leaves a candidate short for Advanced. A candidate whose target is an IIT should structure preparation around Advanced from the outset and treat Main as a checkpoint along the way.

That said, Main still needs its own practice, because the skills it rewards are partly different. Speed under time pressure and disciplined question selection do not develop automatically from deep conceptual work, and a candidate who is excellent at hard problems can still underperform on a paper that rewards finishing.

Qualifying for Advanced requires clearing the Main threshold, which is defined by rank rather than by a fixed score and changes each year. Treat Main as a gate that must be cleared decisively rather than scraped.

## JoSAA counselling and what it actually allocates

The Joint Seat Allocation Authority conducts counselling for admission to the Indian Institutes of Technology, the National Institutes of Technology, the Indian Institutes of Information Technology and other centrally funded technical institutions.

JEE Main score governs admission to NITs, IIITs and the other participating institutions. Admission to the IITs runs on JEE Advanced, which is a separate examination that JEE Main qualifies you to sit.

Counselling runs in rounds. You register, fill a preference list of institute and branch combinations, lock it, and the authority allots against your rank and your choices. Seats vacated by candidates who upgrade or withdraw return to the pool for later rounds.

The choice list is where the outcome is decided. The system allots the highest preference your rank reaches, so it cannot give you something you did not list, and it will not skip a higher choice you did list because you would have preferred something below it.

Order the list by genuine preference. Do not attempt to second-guess cutoffs by omitting choices you think are out of reach, because the only cost of listing them is nothing and the cost of omitting a reachable one is a seat.

## The branch versus institute decision

Almost every candidate faces a version of this: a preferred branch at a less preferred institute, or a less preferred branch at a better one.

There is no universally correct answer, and advice that presents one is worth ignoring. What can be said usefully is what actually differs.

Institute reputation affects placement access, peer group and alumni network, and those effects are real and durable. Branch affects what you study for four years and the technical foundation you build, and switching later is possible in some institutions but usually competitive and constrained.

The honest framing is that a candidate who is genuinely interested in a subject will generally do better studying it than studying something else at a marginally better-ranked institution, and a candidate with no strong subject preference is usually better served by the stronger institution.

What is unwise is choosing a branch you actively dislike purely because it is considered prestigious, then spending four years in it. That pattern is common and it produces graduates who are neither engaged nor competitive.

Discuss it before counselling opens rather than during a choice-filling window.

## Paper 2A and Paper 2B

JEE Main is not only an engineering entrance examination, which candidates outside the B.Tech track sometimes miss.

Paper 1 is for B.E. and B.Tech admission and is what most candidates sit.

Paper 2A is for B.Arch and includes a drawing test alongside mathematics and an aptitude section. Paper 2B is for B.Planning and replaces the drawing component with planning-based questions.

These have their own eligibility conditions, their own preparation requirements and their own counselling pathways. A candidate targeting architecture needs drawing practice that no amount of physics and chemistry preparation substitutes for.

Confirm the requirements for these papers from the NTA information bulletin, since the structure has been revised between cycles.

## What to do for a future cycle

For candidates planning to attempt JEE Main in a coming year, a few things follow from how the examination is designed.

Plan to sit both sessions. The better score counts, the second attempt carries no downside to the first result, and treating Session 1 as a rehearsal with real stakes is a sound strategy.

Prepare from the Class 11 and Class 12 syllabus rather than from question banks alone. The examination tests the standard curriculum, and candidates who drill questions without securing the underlying concepts hit a ceiling quickly.

Practise under shift conditions with a timer. The paper is as much about pace and selection as about knowledge, and the ability to identify which questions to attempt and which to leave is a trained skill.

Take negative marking seriously in practice, not only in the examination. A candidate whose practice ignores the penalty builds habits that cost marks on the day.

And decide early whether you are targeting JEE Advanced, because the depth required for it exceeds what JEE Main alone demands, and preparing for Advanced covers Main while the reverse is not true.

## Home state quota and how NIT seats are split

NIT admission carries a distinction that materially affects your chances and that many candidates only discover during counselling.

Seats at each NIT are divided between a home state quota and an other state quota. Candidates whose eligibility state matches the NIT's state compete for the home state portion, and everyone else competes for the other state portion.

The practical effect is that the closing rank for the same institute and branch is usually considerably better for home state candidates than for others. A branch that is out of reach for you at an NIT in another state may be comfortably within reach at the NIT in your own.

Your eligibility state is determined by where you passed Class 12, not by where you live or where you were born, and it is fixed at the time of application rather than chosen during counselling. Candidates who studied in one state and consider another to be home are frequently surprised by this.

When building a choice list, look at home state options carefully rather than assuming your rank places you the same way everywhere. It is common for a candidate to be able to reach a stronger branch at their home NIT than at an equivalently ranked institute elsewhere.

The IIITs and other centrally funded institutions in the JoSAA pool have their own allocation rules, which are set out in the JoSAA business rules for the year.

## Common mistakes across the JEE cycle

Skipping Session 2 to protect a Session 1 result. The better score counts, so a second attempt carries no risk to the first.

Confusing percentile with percentage, then panicking at a number that is actually good.

Comparing raw marks with candidates from other shifts. Normalisation exists precisely because that comparison is not meaningful.

Omitting choices from a JoSAA list because they look out of reach. Listing them costs nothing; omitting a reachable one costs a seat.

Assuming JEE Main leads to an IIT. It leads to NITs, IIITs and other centrally funded institutions. IITs require JEE Advanced.

Ignoring the home state quota when building a choice list, and missing branches that were reachable at the home NIT.

Choosing a branch on prestige rather than interest, then spending four years disengaged from it.

Leaving document checks until verification. Name mismatches and outdated category certificates are avoidable and they surface at the worst moment.

## Documents and administrative care

Counselling verification is where administrative errors surface, and they surface late.

Keep the scorecard, admit card, Class 10 certificate for date of birth, Class 12 mark sheet and passing certificate, identity proof, matching photographs and any category certificate in the prescribed format assembled and duplicated.

Check every detail against your application. A name spelled differently on a certificate than in your NTA registration is a genuine problem at verification however obviously it is the same person.

Category certificates must be in the format the authority specifies and within any validity window it defines. An outdated format is a common and avoidable cause of rejection.

Keep your registration credentials accessible throughout, because the same login carries across results and counselling over several months.

## Frequently asked questions

**How do the two JEE Main sessions combine?**

If you sat both, the better of the two NTA scores is taken. They are not averaged and not added, which means a second attempt cannot lower a result achieved in the first. The only cost of sitting Session 2 is the preparation time, not the score.

**What is the difference between percentile and percentage?**

A percentage is the proportion of marks you scored. A percentile is the proportion of candidates who scored at or below you, so 99 percentile means roughly one per cent of candidates scored above you, not that you scored 99 per cent of the marks.

**Why is my percentile different from what my raw marks suggested?**

Because NTA normalises scores across shifts. The examination runs in multiple shifts over several days and shifts differ in difficulty, so raw marks are converted into a position within each shift and mapped onto a common scale. This is also why comparing raw marks with someone who sat a different shift tells you nothing useful.

**Does JEE Main get me into an IIT?**

No. JEE Main governs admission to NITs, IIITs and other centrally funded technical institutions. IIT admission runs on JEE Advanced, a separate examination that JEE Main qualifies you to sit.

**What is JoSAA?**

The Joint Seat Allocation Authority, which conducts counselling for admission to IITs, NITs, IIITs and other participating institutions. It runs in rounds: you register, fill and lock a preference list, and seats are allotted against your rank and choices.

**How should I order my JoSAA choice list?**

By genuine preference. The system allots the highest choice your rank reaches, so omitting options you think are unreachable costs you nothing when you are right and costs you a seat when you are wrong. List generously and order honestly.

**Should I pick branch or institute?**

There is no universal answer. Institute affects placement access, peer group and network; branch affects what you study for four years. A candidate with a genuine subject interest usually does better studying it, and one without a strong preference is usually better served by the stronger institution. Choosing a disliked branch purely for prestige is the pattern that most often goes wrong.

**What are Paper 2A and Paper 2B?**

Paper 2A is for B.Arch admission and includes a drawing test alongside mathematics and aptitude. Paper 2B is for B.Planning and replaces the drawing component with planning-based questions. Both have their own eligibility and preparation requirements distinct from the B.Tech paper.

**Can I sit JEE Main more than once in a year?**

The examination is conducted in two sessions within a cycle and a candidate may sit either or both, with the better score counting. Attempt eligibility across years is governed by the conditions in the NTA information bulletin, which should be checked rather than assumed.

**What documents do I need for counselling?**

Scorecard, admit card, Class 10 certificate for date of birth, Class 12 mark sheet and passing certificate, identity proof, matching photographs, and a category certificate in the prescribed format where applicable. Keep originals and copies, and check every detail against your registration, since a name mismatch causes real problems at verification.

**What is the home state quota at NITs?**

NIT seats are split between a home state quota and an other state quota, and closing ranks for the same institute and branch are usually considerably better for home state candidates. Your eligibility state is determined by where you passed Class 12, not by residence, and it is fixed at application rather than chosen during counselling.

**Do I need to prepare separately for JEE Advanced?**

Preparing seriously for Advanced covers Main comfortably, but the reverse is not true: Advanced demands deeper conceptual work and multi-step problem solving beyond what Main requires. A candidate targeting an IIT should structure preparation around Advanced from the outset, while still practising Main-style speed and question selection, which do not develop automatically from conceptual work.

**Is there negative marking in JEE Main?**

Yes, for multiple choice questions, with marks deducted for a wrong answer and nothing deducted for a question left unattempted. Numerical answer type questions have been treated differently in some cycles. Confirm the exact marking scheme in the NTA information bulletin for your cycle, and practise with the penalty applied rather than ignoring it, because a candidate whose practice ignores negative marking builds habits that cost marks on the day.

**When should I start preparing for JEE?**

Most serious candidates begin in Class 11, because the syllabus spans two years of curriculum and the examination rewards depth rather than last-minute coverage. Starting later is possible but compresses the work considerably. What matters more than the start date is consistency: the examination tests two years of material and cannot be absorbed in a final push.

## Official sources

- JEE Main, National Testing Agency: https://jeemain.nta.nic.in
- Joint Seat Allocation Authority: https://josaa.nic.in
- The NTA information bulletin for the cycle, which is the authority on eligibility, paper structure and the normalisation method

NTA is the authority on your score and JoSAA on your seat. Where this page conflicts with either, they are correct.`;

await createExam({
  slug: "jee-main-2026",
  title: "JEE Main 2026: Results, JoSAA Counselling, Percentile Guide",
  conducting_body: "National Testing Agency (NTA)",
  exam_date: "2026-04-02",
  application_start: "2025-10-31",
  application_end: "2026-02-25",
  eligibility:
    "A pass in Class 12 or equivalent with the subject combination required for the paper applied to. Paper 1 (B.E./B.Tech) requires Physics and Mathematics as compulsory subjects along with one of Chemistry, Biotechnology, Biology or a technical vocational subject. Paper 2A (B.Arch) and Paper 2B (B.Planning) carry their own subject requirements, with Mathematics compulsory for both. Candidates appearing in Class 12 in the examination year may apply subject to producing proof of passing. Age and attempt conditions are stated in the NTA information bulletin and should be checked rather than assumed, since NTA has revised them between cycles. Admission to individual institutions may impose additional minimum marks requirements beyond bare eligibility for the examination.",
  syllabus:
    "The standard Class 11 and Class 12 curriculum in Physics, Chemistry and Mathematics for Paper 1. Paper 2A (B.Arch) covers Mathematics, an Aptitude Test and a Drawing Test, the last of which requires practice that physics and chemistry preparation does not substitute for. Paper 2B (B.Planning) covers Mathematics, Aptitude and Planning-based questions. Confirm the syllabus for your cycle from the NTA information bulletin, since the structure has been revised between cycles.",
  exam_pattern: {
    mode: "Computer Based Test",
    sessions: "Conducted in TWO sessions within a cycle. Session 1 was held 21 to 29 January 2026 and Session 2 from 2 to 9 April 2026.",
    bestOfTwo: "Candidates may sit one session or both. Where both are sat, the BETTER of the two NTA scores is taken: they are not averaged and not added. A second attempt therefore CANNOT lower a result achieved in the first, so the only cost of sitting Session 2 is preparation time.",
    papers: "Paper 1 for B.E./B.Tech. Paper 2A for B.Arch, including a Drawing Test. Paper 2B for B.Planning.",
    normalisation: "Scores are reported as normalised PERCENTILES, not percentages. A percentile is the proportion of candidates who scored at or below you, so 99 percentile means roughly 1 per cent scored above you. Normalisation exists because the exam runs across multiple shifts of differing difficulty: raw marks are converted into a position within each shift and mapped onto a common scale. This is why a percentile can differ from what raw marks suggest, and why comparing raw marks with a candidate from another shift is meaningless.",
    counselling: "Through JoSAA. JEE Main governs admission to NITs, IIITs and other centrally funded technical institutions. IIT admission runs on JEE Advanced, a separate examination that JEE Main qualifies a candidate to sit.",
  },
  admit_card_link: "https://jeemain.nta.nic.in",
  result_link: "https://jeemain.nta.nic.in",
  official_link: "https://jeemain.nta.nic.in",
  category: "engineering",
  state: "all-india",
  description:
    "JEE Main 2026 ran in two sessions, January and April. Both are done. Check how the better score counts, what percentile really means and JoSAA counselling.",
  content,
  reading_time: "12 min read",
});
