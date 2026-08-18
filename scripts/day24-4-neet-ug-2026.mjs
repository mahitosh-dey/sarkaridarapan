// NEET UG 2026 — thin-page fix + repositioning + metadata + dash cleanup
//
// Verified 2026-08-18.
//
// FIXES FOUR THINGS
//   thin    1231w -> 3000w+
//   title   68c -> in range (hard rule 7 needs 50-65)
//   desc    175c -> in range (needs 150-160)
//   dashes  18 em/en dashes across the row, plus Title Case headings and a
//           Title Case "## Frequently Asked Questions" which is the exact
//           pattern that was suppressing FAQPage schema on CTET.
//
// REPOSITIONED: the page was written at the "results awaited" stage. The
// re-exam was held 21 June 2026 and counselling is underway, so the live
// intent is counselling, choice filling and seat allotment.
//
// FACT-CHECKED THE CANCELLATION CLAIM (it is a serious assertion and the page
// already carried it). CONFIRMED: the NEET UG 2026 exam originally scheduled
// for 3 May 2026 was cancelled by NTA over question paper leak allegations,
// and a re-exam was held on 21 June 2026, 2:00 PM to 5:00 PM. Corroborated by
// Outlook India, Vedantu, DBUU and FindUrCollege on 2026-08-18.
//   - Registered candidates did NOT need to re-register for the re-exam
//   - NTA confirmed application fees already paid would be refunded
//   - Admit card for the re-exam released around 14 June 2026
//   - Result followed in July 2026; MCC and state counselling reported underway
//
// NOT ASSERTED: specific cutoff scores for this cycle, counselling round dates
// (MCC publishes its own schedule), seat matrix figures, and any claim about
// the outcome of the paper leak investigation.

import { createExam } from "./lib/create-exam.mjs";

const content = `NEET UG 2026 has had an unusual cycle. The examination originally scheduled for 3 May 2026 was cancelled by the National Testing Agency following question paper leak allegations, and a re-examination was held on 21 June 2026 from 2:00 PM to 5:00 PM. The result followed, and counselling is now underway.

If you sat the re-exam, the part that decides where you study is happening now, and it is administratively demanding in a way the examination itself is not.

## Where this cycle stands

| Stage | Status |
|---|---|
| Original exam, 3 May 2026 | Cancelled by NTA |
| Re-examination | Held 21 June 2026, 2:00 PM to 5:00 PM |
| Re-registration | Not required for already-registered candidates |
| Fees already paid | Confirmed for refund by NTA |
| Result | Declared following the re-exam |
| Counselling | Underway through MCC and state authorities |

Candidates who had registered for the May examination were carried forward automatically. NTA did not require a fresh application, and confirmed that fees already paid would be refunded.

## Counselling is two separate processes, not one

This is the single thing candidates most often misunderstand, and getting it wrong costs seats.

The Medical Counselling Committee conducts counselling for the All India Quota, which is 15 per cent of state government medical college seats, together with deemed universities, central universities, and institutions such as AIIMS and JIPMER.

State counselling authorities separately conduct counselling for the remaining 85 per cent of state government college seats, plus private colleges within that state.

These run on different portals, with different registration, different schedules and different fee structures. Registering with MCC does not register you for state counselling, and registering with your state does not register you for the All India Quota.

Candidates who want to be considered for both, which is most candidates, must register separately for both and track both schedules independently. Missing a state registration window while focused on MCC is a common and entirely avoidable loss.

If you are willing to study outside your home state, the All India Quota widens your options considerably. If you are not, state counselling is where nearly all your realistic seats sit.

## How seat allotment actually works

Counselling runs in rounds. In each round you fill and lock a list of choices in order of preference, the authority runs an allotment against your rank and your choices, and seats are allocated to whoever ranks highest among those who chose them.

Your choice list is the decision that matters. The allotment cannot give you something you did not list, and it will give you the highest thing on your list that your rank reaches. That means two errors are possible and they cut in opposite directions.

List too few choices and you may be allotted nothing in a round where a lower preference was available to you. List them in the wrong order and you may be allotted a college you would have ranked below another one you also qualified for.

Order the list by genuine preference, not by predicted cutoff. The system already handles the cutoff question by only reaching what your rank allows. Your job is to state what you actually want first.

Understand the rules on accepting, declining and upgrading before a round rather than during it. Free exit, seat forfeiture and security deposit rules vary between MCC and individual states, and the consequences of declining a seat in a later round are different from the consequences in an earlier one. This is where candidates lose money and options through decisions taken under time pressure without reading the rules.

## What the qualifying percentile means

NEET qualification is set by percentile, not by a fixed mark. The qualifying percentile is defined against the performance of everyone who sat the examination, which is why the corresponding raw mark moves every year.

Qualifying is a threshold for eligibility, and it is not the same as being competitive for a seat. A candidate who qualifies at the threshold percentile is eligible to participate in counselling but will find that very few seats are reachable at that rank. The gap between qualifying and securing a government college seat is wide.

That distinction is worth being clear-eyed about when planning. Private and deemed institutions have fees that differ by an order of magnitude from government colleges, and a candidate whose rank reaches only those options is facing a financial decision rather than an academic one.

Category-wise qualifying percentiles differ, with reserved categories and candidates with benchmark disabilities qualifying at lower thresholds as specified by the authorities.

## Exam pattern, for candidates planning a future attempt

NEET UG is a single paper covering Physics, Chemistry and Biology, the last split into Botany and Zoology.

The paper carries 180 questions to be answered for 720 marks. Marking is four marks for a correct answer and minus one for an incorrect one, with nothing deducted for a question left unattempted.

That negative marking shapes strategy directly. With a four-to-one ratio, an educated guess between two remaining options has positive expected value, while a blind guess across four does not. Blanket guessing to fill the sheet is a losing approach, and so is excessive caution that leaves marks on the table where you had genuinely narrowed the options.

Biology carries the largest share of questions, which is why it disproportionately determines outcomes, and it is also the section where accuracy is most achievable because the content rewards recall over derivation.

The syllabus follows the standard Class 11 and Class 12 science curriculum. Confirm the syllabus and pattern for your cycle from the NTA information bulletin, since NTA has revised both between cycles.

## What the cancellation means for candidates

A cancelled and re-held examination is disruptive in ways that go beyond the calendar, and it is worth naming them honestly.

The gap between 3 May and 21 June forced candidates to hold preparation at peak for an additional seven weeks, which is difficult and which affects people unevenly. Candidates with stable study conditions absorbed it better than those without.

The re-examination was a fresh paper. Candidates who had walked out of the May examination with a sense of how they had done had that reset entirely.

The compressed timeline afterwards, with result and counselling following in sequence, left less room than usual between stages.

None of that changes what you can do now, which is to focus on counselling, because that is the part still within your control. But candidates who found the cycle harder than expected should understand that the disruption was real and shared rather than a personal failure of preparation.

## Round strategy, and the mistakes that cost seats

Counselling runs across several rounds, and each has different rules about what happens if you accept, decline or do nothing. Understanding the sequence before it starts is worth more than any amount of cutoff prediction.

In early rounds the risk of holding out is lower, because further rounds remain and vacated seats return to the pool. In later rounds the same decision becomes irreversible, and a candidate who declines a seat expecting another round may find there is not one, or that the deposit is forfeited.

Free exit provisions, security deposit rules and seat forfeiture penalties differ between MCC and individual state authorities, and they differ between rounds within the same process. Read the information brochure for the specific round you are in rather than relying on how it worked last year or in another state.

Upgrading deserves particular care. Accepting a seat while remaining in the running for a better one is possible in defined circumstances, and the conditions attached vary. Candidates who assume upgrading is automatic, or that it carries no risk to the seat already held, sometimes lose both.

The mop-up and stray vacancy rounds at the end operate under tighter rules and shorter notice. Candidates still unplaced at that stage should be watching daily rather than weekly, because the windows are short and missing one ends the cycle.

## Government, private and deemed institutions

The financial difference between these is large enough that it should shape your choice list rather than being discovered afterwards.

Government medical colleges charge fees that are modest by any comparison, which is why competition for them is intense and why the ranks that reach them are far better than the ranks that merely qualify.

Private colleges charge substantially more, with the exact figure varying by state and institution, and state counselling authorities generally publish the fee structure for private colleges within their process.

Deemed universities, which come under MCC, are typically the most expensive option, and candidates sometimes reach them in later rounds without having considered the cost.

The practical advice is to work out what you can actually afford before you fill a choice list, not after an allotment. An allotment you cannot take up wastes a round and, depending on the rules in force, may cost a deposit as well. Discussing the financial position with family before counselling starts is a more useful preparation than refreshing cutoff predictions.

## If this cycle did not go the way you hoped

Some candidates in every cycle finish counselling without a seat they want, and this cycle's disruption will have made that harder for some.

The options are narrower than internet advice suggests. Repeating the year and attempting NEET again is the main route, and it is a serious commitment: a full year with an uncertain outcome, at an age where peers are progressing.

Allied health sciences, biotechnology, pharmacy, nursing, veterinary science and other biology-based degrees are real careers rather than consolation prizes, and some accept NEET scores while others have their own admission routes. Candidates who dismiss them in June sometimes find them appealing in September.

Studying medicine abroad is heavily marketed and deserves scrutiny rather than enthusiasm. The relevant questions are recognition of the qualification in India, the screening examination required to practise here, and the actual pass rates of graduates from the specific institution being sold to you.

Whatever the decision, make it deliberately rather than by drifting into a repeat year because it felt like the default. A year is a real cost and it should be spent on a plan rather than on momentum.

## Documents to have ready for counselling

Counselling verification is where administrative problems surface, and they surface at a point where there is no time to fix them.

Assemble the full set before your first round: the NEET scorecard and rank letter, admit card, Class 10 certificate for date of birth, Class 12 mark sheet and passing certificate, identity proof, passport photographs matching the one used in the application, and a category certificate in the prescribed format where applicable.

Candidates claiming benefits under any reserved category need that certificate in the exact format the authority specifies, issued within any validity window it defines. An outdated format is a common cause of rejection at verification, and it is not something the authority will waive.

Keep several photocopies alongside the originals. Verification processes ask for both, and the queue is not the place to discover you have one set.

Check every document against your application details. A name spelled differently on a certificate than in your NEET registration is a real problem at verification, however obviously it is the same person.

## How the reservation and quota structure fits together

Counselling allocates seats through several overlapping categories, and candidates frequently misread which ones they can benefit from.

The All India Quota is 15 per cent of seats in state government medical colleges, pooled nationally and administered by MCC. Any qualified candidate can compete for it regardless of home state, which is what makes it the route to studying outside your own state.

The state quota is the remaining 85 per cent of state government college seats, administered by each state. Eligibility for it generally depends on domicile or schooling within that state, and the rules differ between states in ways that matter: some require years of residence, some require Class 10 and 12 within the state, and some recognise other conditions.

Category reservation applies within both, at the percentages defined by the relevant authority, and reserved category candidates compete both in their category and in the open pool, taking whichever gives the better outcome.

There are further categories in some processes, including seats for candidates with benchmark disabilities, and institutional or management quotas in private and deemed institutions with their own rules.

The practical implication is that your eligibility for state counselling is a question of fact about your domicile and schooling that you should settle definitively before counselling begins. Candidates occasionally assume eligibility in a state they no longer qualify for, or fail to realise they qualify in one they left years ago.

## What to do while counselling runs

Counselling is administratively demanding and it rewards organisation more than anything else at this stage.

Track both processes on a calendar with every registration deadline, choice-filling window, locking deadline, allotment date and reporting deadline written down. Missing a locking deadline means your choices are not considered in that round, and no authority will make an exception.

Check the official portals rather than social media for schedule changes. Counselling dates shift, and they shift with short notice.

Keep your documents assembled and your fees ready, because reporting deadlines after an allotment are short and a candidate scrambling for a demand draft or a certificate can lose a seat they were allotted.

Decide your preference order calmly, in advance, with the people whose views matter to you. Filling a choice list under time pressure on the final evening is how candidates end up with orders they did not intend.

And keep a written record of what you did in each round. Across several rounds and two processes, it is genuinely easy to lose track of what you have accepted, declined or are still waiting on.

## Frequently asked questions

**Was the NEET UG 2026 exam cancelled?**

Yes. The examination originally scheduled for 3 May 2026 was cancelled by the National Testing Agency following question paper leak allegations. A re-examination was conducted on 21 June 2026 from 2:00 PM to 5:00 PM.

**Did candidates have to re-register for the NEET re-exam?**

No. Candidates who had already registered for the May examination were carried forward automatically, and NTA confirmed that application fees already paid would be refunded. Admit cards for the re-examination were released around 14 June 2026.

**When was the NEET UG 2026 result declared?**

The result followed the 21 June re-examination, and counselling through the Medical Counselling Committee and state authorities is underway. Scorecards are downloaded from the NTA portal at neet.nta.nic.in.

**What is the difference between MCC and state counselling?**

MCC conducts counselling for the 15 per cent All India Quota, deemed universities, central universities and institutions such as AIIMS and JIPMER. State authorities separately conduct counselling for the remaining 85 per cent of state government college seats and private colleges in that state. They are different portals with different registrations and schedules, and registering for one does not register you for the other.

**Do I need to register separately for both?**

Yes, if you want to be considered for both. Most candidates do. Missing a state registration window while focused on MCC is a common and avoidable loss, so track both schedules independently.

**How does seat allotment work?**

Counselling runs in rounds. You fill and lock a preference list, and the authority allots the highest choice on your list that your rank reaches. The system cannot allot something you did not list, so order the list by genuine preference rather than by predicted cutoff, and list enough choices to avoid going unallotted in a round.

**What is the NEET UG exam pattern?**

A single paper of 180 questions for 720 marks, covering Physics, Chemistry and Biology, with Biology split into Botany and Zoology. Four marks are awarded for a correct answer and one is deducted for an incorrect one, with no penalty for an unattempted question.

**Does qualifying NEET guarantee a medical seat?**

No. The qualifying percentile is an eligibility threshold, not a competitive position. A candidate qualifying at the threshold is eligible to participate in counselling but will find very few seats reachable at that rank, and the gap between qualifying and securing a government college seat is wide.

**Why does the NEET qualifying mark change every year?**

Because qualification is set by percentile rather than by a fixed score. The percentile is defined against the performance of everyone who sat the examination that year, so the raw mark corresponding to it moves with the difficulty of the paper and the candidate pool.

**What documents do I need for NEET counselling?**

The scorecard and rank letter, admit card, Class 10 certificate for date of birth, Class 12 mark sheet and passing certificate, identity proof, matching passport photographs, and a category certificate in the prescribed format where applicable. Keep originals and photocopies, and check every detail against your NEET registration, since a name mismatch is a genuine problem at verification.

**Can I appear for NEET again next year?**

Yes. There is no cap on the number of attempts, and eligibility is governed by the qualifying conditions rather than by an attempt limit. Candidates repeating should treat it as a deliberate year-long commitment with a plan rather than as the default response to a disappointing result.

**Is the All India Quota open to candidates from any state?**

Yes. The 15 per cent All India Quota is pooled nationally and administered by MCC, and any qualified candidate can compete for it regardless of home state. It is the route to studying outside your own state. The remaining 85 per cent state quota generally depends on domicile or schooling conditions that differ between states.

**What happens if I do not report after being allotted a seat?**

The seat is released back into the pool and, depending on the round and the authority's rules, you may forfeit a security deposit or lose eligibility for subsequent rounds. Reporting deadlines after an allotment are short, which is why documents and fees should be ready before the allotment rather than after it.

## Official sources

- National Testing Agency NEET portal: https://neet.nta.nic.in
- Medical Counselling Committee: https://mcc.nic.in
- Your state counselling authority, which is the authority on the 85 per cent state quota and private colleges within the state

NTA is the authority on your score. MCC and your state authority are the authorities on your seat. Where this page conflicts with any of them, they are correct.`;

await createExam({
  slug: "neet-ug-2026",
  title: "NEET UG 2026 Counselling: Result, MCC Rounds, Cutoff Guide",
  conducting_body: "National Testing Agency (NTA)",
  exam_date: "2026-06-21",
  application_start: "2026-02-08",
  application_end: "2026-03-11",
  eligibility:
    "A pass in Class 12 or equivalent with Physics, Chemistry, Biology or Biotechnology and English as core subjects, meeting the minimum aggregate in those subjects specified for the candidate's category. Candidates appearing in Class 12 in the examination year may apply subject to producing proof of passing. A minimum age of 17 years applies, calculated as specified by the authorities. Qualifying percentiles differ by category, with reserved categories and candidates with benchmark disabilities qualifying at lower thresholds. Confirm all conditions in the NTA information bulletin for the cycle, since eligibility wording has been revised between cycles.",
  syllabus:
    "The standard Class 11 and Class 12 science curriculum across Physics, Chemistry and Biology, with Biology split into Botany and Zoology. Biology carries the largest share of questions and disproportionately determines outcomes, and it is the section where accuracy is most achievable because the content rewards recall over derivation. Confirm the syllabus for your cycle from the NTA information bulletin, since NTA has revised it between cycles.",
  exam_pattern: {
    mode: "Offline, pen and paper, multiple choice",
    duration: "As specified in the information bulletin. The 21 June 2026 re-examination ran 2:00 PM to 5:00 PM.",
    questions: "180 questions to be answered, for 720 marks",
    subjects: "Physics, Chemistry, Botany, Zoology",
    marking: "Plus 4 for a correct answer, minus 1 for an incorrect answer, nothing deducted for an unattempted question. The four-to-one ratio means an educated guess between two remaining options has positive expected value while a blind guess across four does not.",
    qualifying: "Set by PERCENTILE, not by a fixed mark, so the corresponding raw score moves every year with paper difficulty and the candidate pool. Qualifying is an eligibility threshold and not a competitive position: the gap between qualifying and securing a government college seat is wide.",
    cycleNote: "The examination originally scheduled for 3 May 2026 was CANCELLED by NTA following question paper leak allegations. A re-examination was held on 21 June 2026. Registered candidates were carried forward without re-registering, and NTA confirmed fees already paid would be refunded.",
  },
  admit_card_link: "https://neet.nta.nic.in",
  result_link: "https://neet.nta.nic.in",
  official_link: "https://neet.nta.nic.in",
  category: "medical",
  state: "all-india",
  description:
    "NEET UG 2026 re-exam was held 21 June after the May exam was cancelled. Counselling is underway. Check MCC vs state rounds, choice filling and documents.",
  content,
  reading_time: "12 min read",
});
