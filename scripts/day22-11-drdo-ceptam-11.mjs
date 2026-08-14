// DRDO CEPTAM 11 — thin-page fix + stale countdown removal + dash cleanup
//
// Verified 2026-08-14.
//
// DEFECT CLASS: HARDCODED RELATIVE TIME
// This page is a different failure from the fabricated deadlines fixed earlier
// today. Nothing here was invented. The facts were correct ON THE DAY THEY WERE
// WRITTEN, around 11 June 2026, and were then frozen into the content:
//   description  "TIER 2 EXAM: JUNE 15, 2026: 4 days away"
//   H1           "Tier 2 Exam is June 15, 2026"
//   important_dates  tier2Exam: "June 15, 2026 - UPCOMING (4 days away)"
//                    tier2AdmitCard: "Expect..."
// Today is 14 August 2026. Tier 2 was held two months ago. The page tells
// visitors an exam is four days away when it is two months behind them.
//
// A relative time reference in static content is guaranteed to become wrong.
// Rewritten with absolute dates and an explicit status column instead, so the
// page degrades gracefully instead of lying.
//
// FACTS VERIFIED (corroborated across Testbook, CareerPower, Adda247, JobYaari,
// Sakshi Education on 2026-08-14):
//   - CEPTAM-11, 764 vacancies total: STA-B 561, Technician A 203
//   - Applications opened 11 December 2025, extended to 11 January 2026
//   - Tier 1 CBT held 23 March 2026
//   - Tier 2 held 15 June 2026
//   - Remaining stages: skill/trade test (Technician A), document verification,
//     medical examination
//   - Portal: drdo.gov.in
//
// NOT ASSERTED: Tier 2 result date (DRDO had not announced it), cutoffs (DRDO
// does not publish them in the manner SSC/UPSC do), and the lab-wise posting
// split. Technician A pay level is stated as the standard Level 2 with an
// explicit instruction to confirm against the notification, since our prior
// row carried a confident STA-B figure but nothing verified for Tech-A.
//
// Also removes em/en dashes from title, description, eligibility, salary,
// important_dates, selection_process and content.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "DRDO CEPTAM 11: 764 Posts, Tier 2 Done, Result Awaited";

const description =
  "DRDO CEPTAM 11 has 764 posts: 561 STA-B and 203 Technician A. Tier 2 was held on 15 June 2026 and the result is awaited. Check remaining stages and pay.";

const content = `DRDO's CEPTAM-11 recruitment covers 764 posts, split as 561 Senior Technical Assistant Grade B and 203 Technician A. Tier 2 was held on 15 June 2026. The result had not been announced as of 14 August 2026.

If you sat Tier 2, the written stages are behind you and what remains is administrative plus, for Technician A candidates, a trade skill test. This page covers where the process stands and what each remaining stage checks.

## Where CEPTAM-11 stands

| Stage | Date | Status |
|---|---|---|
| Applications opened | 11 December 2025 | Closed |
| Applications closed | 11 January 2026 | Extended from the original date |
| Tier 1 CBT | 23 March 2026 | Held |
| Tier 1 result | Declared | Qualified candidates notified |
| Tier 2 | 15 June 2026 | Held |
| Tier 2 result | Not announced | Awaited |
| Skill or trade test | After Tier 2 result | Technician A |
| Document verification | After the above | Pending |
| Medical examination | Final stage | Pending |

DRDO does not publish a fixed result calendar in the way commissions such as SSC do, and it does not announce result dates in advance. The result appears on drdo.gov.in when it is ready. Treat any specific date you see quoted elsewhere as speculation.

## The two posts

Senior Technical Assistant Grade B accounts for 561 of the 764 posts. STA-B is a technical support role in DRDO laboratories and establishments, working alongside scientists on experimental work, instrumentation, testing, fabrication and documentation. The work varies enormously by lab, because DRDO's establishments span aeronautics, armaments, electronics, materials, naval systems, missiles, life sciences and computing.

Technician A accounts for the remaining 203 posts. This is a trade role requiring a specific ITI qualification, covering hands-on technical work in workshops and laboratories. The trade you applied under determines both the skill test you face and the work you do.

The distinction matters for the stages ahead. STA-B selection rests on the written performance plus verification. Technician A adds a trade skill test that is practical rather than written.

## What each remaining stage actually checks

The trade or skill test applies to Technician A candidates and assesses practical competence in the trade you applied under. It is conducted against the trade standard rather than graded competitively in the way a written paper is, so the objective is to demonstrate working proficiency. Candidates who qualified on the CBT and then treated the skill test as a formality have lost posts on it.

Document verification checks your qualification, trade certificate where applicable, age, category and identity against the originals. The specific risk here is qualification nomenclature. DRDO defines eligibility by named qualifications and trades, and a certificate whose title differs from the notification wording can require equivalence to be established. If your degree, diploma or NTC is titled differently from the standard form, gather supporting documentation before the verification rather than after being questioned at it.

The medical examination applies a fitness standard for the role. For most posts this is a straightforward check rather than a demanding physical standard.

None of these three stages is a further competition in the way the written stages were. They are gates. Your position was largely determined by Tier 2, and what remains is confirming that you are who and what your application said.

## Exam pattern, for reference and for future cycles

Tier 1 is a computer based screening test. It combines a general component covering quantitative ability, general intelligence and reasoning, general awareness and English with a subject or trade component at the level of the qualification required for the post. It screens the field down to a multiple of the vacancy count and does not itself decide the outcome.

Tier 2 is the deciding written stage. It weights the subject or trade knowledge far more heavily than Tier 1 does, which is why candidates who cleared Tier 1 on general aptitude alone often found Tier 2 much harder. For STA-B the subject depth is at degree or diploma level in the discipline applied for.

Technician A then adds the practical skill test described above, while STA-B proceeds directly to verification.

Confirm the current pattern in the notification for any future cycle. DRDO has varied the structure and the weighting between CEPTAM cycles, and CEPTAM cycles are not annual, so a pattern from an earlier round is not a safe guide.

## Eligibility

Senior Technical Assistant Grade B requires a bachelor's degree in science or engineering, or a three year engineering diploma, from a recognised institution, in the discipline applied for.

Technician A requires a Class 10 pass together with an ITI certificate, the National Trade Certificate, in the relevant trade.

Both are subject to age limits stated in the notification, with standard relaxation for reserved categories, ex-servicemen and other notified groups. Because CEPTAM cycles run irregularly rather than annually, candidates should check the age limit against the specific notification rather than assuming continuity from a previous round.

The discipline and trade requirements are strict. DRDO recruits into named technical disciplines and trades, and eligibility is defined by that list rather than by general technical competence.

## Pay and what DRDO offers

Senior Technical Assistant Grade B sits at Pay Level 6 on the 7th Pay Commission matrix, with a pay range of Rs 35,400 to Rs 1,12,400. Gross monthly pay is considerably higher than the entry basic once dearness allowance, house rent allowance and transport allowance are added, and house rent allowance is banded by city classification.

Technician A sits at the standard technician entry level, Pay Level 2, with an entry basic of Rs 19,900 on the same matrix. Confirm this against the notification for your cycle, since DRDO states the applicable level per post and it has not been uniform across all technician recruitments.

Beyond pay, DRDO posts carry pension under the National Pension System, medical benefits, leave entitlements on the central government pattern, and in many establishments access to campus facilities and residential accommodation.

The genuine attraction of DRDO for technical candidates is the work rather than the pay scale, which is comparable to other central government technical posts at the same level. STA-B roles place you inside active defence research programmes, and the exposure to instrumentation, testing and experimental work is not readily available in equivalent administrative posts.

Career progression for STA-B runs through Technical Officer grades. DRDO also runs departmental routes and encourages further qualification, and candidates who pursue those move considerably faster than those who wait for time-bound progression.

## Where you might be posted

DRDO operates laboratories and establishments across India, concentrated around Bengaluru, Hyderabad, Pune, Delhi, Chandigarh, Dehradun, Jodhpur, Visakhapatnam, Kochi and several other centres, with each lab specialising in a domain.

Allocation follows organisational requirement rather than candidate preference, so you should not apply expecting a specific city. The lab you are allotted also shapes the technical work you will do for years, since a materials laboratory and a naval systems establishment offer very different careers under the same job title.

Candidates with a strong preference for a particular technical domain should understand that CEPTAM does not let you choose it directly. The discipline you applied under narrows the field, but the specific lab does not follow from your choice.

## What to do while the result is pending

Keep your document set assembled and complete rather than waiting for a call. Original qualification certificates, trade certificate where applicable, Class 10 certificate for date of birth, category certificate in the current prescribed format with a valid date, identity proof and photographs. Category certificates in an outdated format are a recurring cause of avoidable problems at verification.

If you applied for Technician A, keep practising your trade. The skill test is practical and hands-on ability degrades without use, and the gap between Tier 2 and the skill test can run to months.

Check drdo.gov.in directly rather than relying on notifications from aggregator sites. DRDO publishes results and call letters on its own portal and does not always announce them widely.

Keep the credentials you created during registration accessible. This process began in December 2025 and is still running, and the same login carries through every remaining stage.

## How CEPTAM compares with other technical entry routes

Candidates eligible for CEPTAM are usually eligible for several other central technical recruitments, and the comparison is worth making because the roles diverge more than the pay levels suggest.

| | DRDO CEPTAM STA-B | SSC JE | RRB Technician | ISRO Technical Assistant |
|---|---|---|---|---|
| Employer | DRDO laboratories | Central engineering departments | Indian Railways | ISRO centres |
| Typical qualification | Degree or 3 year diploma | Degree or diploma | ITI or diploma | Diploma |
| Nature of work | Research and experimental support | Site and project engineering | Maintenance and operations | Research and experimental support |
| Cycle frequency | Irregular | Broadly annual | Periodic | Irregular |
| Pay level at entry | Level 6 | Level 6 | Level 2 to 5 | Level 7 in some grades |

The two research organisations, DRDO and ISRO, offer a different kind of technical career from the engineering and operations departments. The work is experimental rather than executional, the technical exposure is deeper in a narrow domain, and progression rewards further qualification more directly.

The cost is frequency. SSC JE runs broadly annually. CEPTAM does not, and neither does ISRO recruitment at this level. A candidate who wants a research organisation should apply to the operations and engineering routes as well rather than waiting for an irregular cycle, since a CEPTAM gap can run to several years.

## Preparing for a future CEPTAM cycle

CEPTAM-12 had not been announced as of 14 August 2026, and DRDO does not publish a recruitment calendar, so the practical advice is to keep the qualification requirements in view rather than to wait for a date.

The single most useful preparation is depth in your own discipline at degree or diploma level. Tier 2 weights subject knowledge heavily, and the candidates who struggle are consistently those who prepared general aptitude thoroughly and treated the subject portion as revision. Your engineering or science syllabus is the syllabus.

The general component covering quantitative ability, reasoning, general awareness and English overlaps substantially with SSC and railway recruitment preparation, so work done for those transfers directly. That overlap is the argument for sitting several technical recruitments in the same period rather than preparing narrowly for one irregular cycle.

For Technician A aspirants, keep the trade skills current. The selection includes a practical test and trade proficiency is not something that can be revised from a book in the weeks before it.

Register on the DRDO portal and keep the profile current, so that a notification does not catch you assembling documents. CEPTAM application windows have historically been short relative to the size of the recruitment.

Watch drdo.gov.in directly. DRDO does not advertise its recruitment as widely as the commissions do, and candidates have missed cycles because they were waiting for the notification to appear in the places SSC notifications appear.

## Why the work differs by laboratory

DRDO is not a single workplace. It is a network of laboratories, each specialising in a domain, and the establishment you are allotted determines your technical career far more than the job title does.

An establishment working on aeronautical systems, one working on armaments, one on electronics and radar, one on naval systems, one on missiles, one on materials and one on life sciences all recruit STA-B under the same designation. The instrumentation you work with, the experimental methods you learn and the specialisation you build differ completely between them.

This has a practical implication candidates rarely consider before joining. Technical depth in a DRDO domain is valuable and specific, which strengthens your position within that domain and narrows lateral movement out of it. A decade in a materials laboratory builds expertise that does not transfer cleanly to naval systems work.

Since allocation follows organisational requirement rather than preference, this is not something you control at application. It is something worth understanding before you accept a posting, and worth asking about when the allotment is communicated.

## Frequently asked questions

**Has the DRDO CEPTAM 11 Tier 2 result been declared?**

Not as of 14 August 2026. Tier 2 was held on 15 June 2026 and the result had not been announced. DRDO does not publish a result calendar in advance or announce dates ahead of release, so the result appears on drdo.gov.in when it is ready. Any specific date quoted elsewhere is speculation.

**How many vacancies are there in CEPTAM 11?**

764 in total: 561 Senior Technical Assistant Grade B posts and 203 Technician A posts.

**When was the CEPTAM 11 Tier 2 exam?**

15 June 2026. Tier 1 was held earlier, on 23 March 2026. Applications ran from 11 December 2025 and closed on 11 January 2026 after an extension.

**Can I still apply for DRDO CEPTAM 11?**

No. Applications closed on 11 January 2026 and both written stages have been conducted. CEPTAM cycles are not annual, so there is no fixed date for the next one. Watch drdo.gov.in for a CEPTAM-12 notification.

**What stages remain after Tier 2?**

For Technician A candidates, a trade or skill test assessing practical competence in the applied trade. For both posts, document verification and a medical examination. None of these is a further competition in the way the written stages were: they are gates confirming eligibility and fitness.

**What is the DRDO STA-B salary?**

Senior Technical Assistant Grade B sits at Pay Level 6 on the 7th Pay Commission matrix, Rs 35,400 to Rs 1,12,400. Gross monthly pay is considerably higher than the entry basic once dearness allowance, house rent allowance and transport allowance are added, with house rent allowance banded by city classification.

**What qualification is needed for STA-B and Technician A?**

STA-B requires a bachelor's degree in science or engineering, or a three year engineering diploma, from a recognised institution in the discipline applied for. Technician A requires a Class 10 pass plus an ITI National Trade Certificate in the relevant trade. Both requirements are defined by a named list rather than by general technical competence.

**Can I choose which DRDO lab I am posted to?**

No. Allocation follows organisational requirement rather than candidate preference. The discipline you applied under narrows the field, but the specific laboratory does not follow from your choice, and the lab you are allotted shapes your technical work substantially.

**Does DRDO publish cutoff marks?**

DRDO does not publish cutoffs in the manner SSC and UPSC do. Figures circulating on coaching sites are reconstructions from candidate reports rather than official releases, so treat them as rough indications only.

**Is the Technician A skill test difficult?**

It assesses practical competence against the trade standard rather than grading competitively like a written paper, so the objective is demonstrating working proficiency in your trade. Candidates who clear the written stages and then treat it as a formality have lost posts on it, and practical ability degrades without use across a months-long gap.

**How long does the CEPTAM process take end to end?**

CEPTAM-11 opened applications on 11 December 2025, held Tier 1 on 23 March 2026 and Tier 2 on 15 June 2026, and the result was still pending two months later. Counting the remaining skill test, verification and medical stages, the full cycle runs well over a year from application to joining. Candidates should plan on that timeline rather than expecting a resolution within months, and should continue applying to other recruitments in the interim.

**Should I keep applying elsewhere while waiting?**

Yes. The process is long, the result is not guaranteed, and nothing about holding a pending CEPTAM candidature restricts you from applying to SSC, railway or other recruitments. Candidates who pause their applications while waiting for a DRDO result lose a year of other opportunities for no benefit.

**Is DRDO a government department or a PSU?**

DRDO is a government organisation under the Ministry of Defence, not a public sector undertaking. That distinction matters for pay, because DRDO employees are on the 7th Pay Commission matrix rather than on the IDA scales that PSUs such as BHEL and BSNL use. Comparing a DRDO pay level against a PSU basic compares two different systems that diverge over time.

**Does DRDO recruit scientists through CEPTAM?**

No. CEPTAM recruits technical and administrative cadre posts such as STA-B and Technician A. Scientist entry at DRDO runs through a separate route with its own eligibility and selection, so a candidate targeting a scientist post should not be watching CEPTAM notifications for it.

**When will CEPTAM 12 be announced?**

DRDO had not announced CEPTAM-12 as of 14 August 2026 and does not publish a recruitment calendar. CEPTAM cycles are irregular rather than annual and the gap between them has run to several years. Watch drdo.gov.in directly, since DRDO does not advertise its recruitment as widely as the commissions do.

## Official sources

- Defence Research and Development Organisation: https://www.drdo.gov.in
- The CEPTAM-11 notification PDF, which is the authority on discipline and trade eligibility, pay level per post and the applicable age limits

DRDO publishes results and call letters on its own portal without always announcing them widely. Check it directly rather than relying on any aggregator, this page included.

One last note on dates. This page states absolute dates and an explicit status for each stage rather than counting down to anything, because a countdown written into a static page is wrong the moment it goes stale. If you find a page telling you a DRDO exam is a few days away, check the actual date against the calendar before you believe it, whoever published it. Stale countdowns are common across recruitment sites and they are one of the easier errors to spot once you know to look for them.`;

const fields = {
  vacancies: 764,
  last_date: "2026-01-11",
  post_name:
    "Senior Technical Assistant Grade B (STA-B), 561 posts, and Technician A (Tech-A), 203 posts, across DRDO laboratories and establishments nationwide.",
  eligibility: {
    education:
      "STA-B: a bachelor's degree in science or engineering, or a three year engineering diploma, from a recognised institution, in the discipline applied for. Technician A: a Class 10 pass together with an ITI certificate (National Trade Certificate) in the relevant trade. Both requirements are defined by a named list of disciplines and trades rather than by general technical competence, and qualification nomenclature is checked at document verification: a certificate titled differently from the notification wording can require equivalence to be established.",
    age: "As stated in the CEPTAM-11 notification, with standard relaxation for reserved categories, ex-servicemen and other notified groups. Because CEPTAM cycles run irregularly rather than annually, check the age limit against the specific notification rather than assuming continuity from a previous round.",
  },
  salary:
    "Senior Technical Assistant Grade B sits at Pay Level 6 on the 7th Pay Commission matrix, Rs 35,400 to Rs 1,12,400. Technician A sits at the standard technician entry level, Pay Level 2, with an entry basic of Rs 19,900: confirm this against the notification for your cycle, since DRDO states the applicable level per post and it has not been uniform across all technician recruitments. Gross monthly pay is considerably higher than entry basic once dearness allowance, house rent allowance and transport allowance are added, with house rent allowance banded by city classification. Posts carry pension under the National Pension System, medical benefits, central government leave entitlements, and in many establishments access to campus facilities and residential accommodation. Progression for STA-B runs through the Technical Officer grades, and DRDO runs departmental routes and encourages further qualification, which move candidates considerably faster than time-bound progression alone.",
  application_fee: {
    general_obc_ews: "Rs 100",
    sc_st_exserviceman_pwbd_female: "Nil",
    note: "Paid online at drdo.gov.in. The application window closed on 11 January 2026.",
  },
  important_dates: {
    startDate: "2025-12-11",
    lastDate: "2026-01-11",
    tier1Exam: "23 March 2026, held",
    tier1Result: "Declared, qualified candidates notified",
    tier2Exam: "15 June 2026, held",
    tier2Result: "Not announced as of 14 August 2026",
    note: "DRDO does not publish a result calendar in advance and does not announce result dates ahead of release. Results and call letters appear on drdo.gov.in without always being announced widely, so check the portal directly. Remaining stages after the Tier 2 result: skill or trade test for Technician A, then document verification and medical examination for both posts.",
  },
  how_to_apply:
    "Applications for CEPTAM-11 opened on 11 December 2025 and closed on 11 January 2026 after an extension from the original deadline. Both written stages have been conducted: Tier 1 on 23 March 2026 and Tier 2 on 15 June 2026. There is no route to apply now. Candidates already in the process should keep the credentials created during registration accessible, since the same login carries through every remaining stage, and should check drdo.gov.in directly for the Tier 2 result rather than relying on aggregator notifications. CEPTAM cycles are NOT annual, so there is no fixed date for the next one: watch drdo.gov.in for a CEPTAM-12 notification.",
  selection_process:
    "**Stage 1: Tier 1 computer based test** Held 23 March 2026. A screening test combining a general component (quantitative ability, general intelligence and reasoning, general awareness, English) with a subject or trade component at the level of the qualification required for the post. Screens the field to a multiple of the vacancy count and does NOT itself decide the outcome.\n\n**Stage 2: Tier 2** Held 15 June 2026. The deciding written stage, weighting subject or trade knowledge far more heavily than Tier 1, which is why candidates who cleared Tier 1 on general aptitude alone found Tier 2 considerably harder. For STA-B the subject depth is at degree or diploma level in the discipline applied for. RESULT NOT ANNOUNCED as of 14 August 2026.\n\n**Stage 3: Skill or trade test** Applies to Technician A candidates only. Assesses practical competence in the trade applied under, against the trade standard rather than graded competitively like a written paper. Candidates who clear the written stages and treat this as a formality have lost posts on it, and practical ability degrades across the months-long gap after Tier 2.\n\n**Stage 4: Document verification** Checks qualification, trade certificate where applicable, age, category and identity against originals. The specific risk is qualification nomenclature: DRDO defines eligibility by named qualifications and trades, so a certificate titled differently from the notification wording can require equivalence to be established. Category certificates in an outdated format are a recurring cause of avoidable problems here.\n\n**Stage 5: Medical examination** Applies a fitness standard for the role, a straightforward check for most posts.\n\nStages 3 to 5 are gates rather than further competition. Position is largely determined by Tier 2.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "drdo-ceptam-11-2026", title, description, content, fields });
