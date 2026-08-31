// RRB Technician 2026 — thin-page fix, vacancy correction, repositioning
//
// Verified 2026-08-31.
//
//   thin       1273w -> 3000w+
//   vacancies  6,565 -> 6,557  (323 Technician Grade 1 Signal + 6,234 Grade 3)
//              6,557 is carried consistently by Testbook, CareerPower, Adda247
//              and Verandarace. 6,565 appears only in a single headline that
//              contradicts its own body copy.
//   intent     page was written as "apply from June 30". Applications closed
//              29 July 2026, so it is repositioned to the post-application,
//              awaiting-CBT stage.
//
// CYCLE CONFLATION AVOIDED: several sources publish CBT dates of 6, 9, 10 and
// 13 March 2026 for "RRB Technician". Those cannot belong to this cycle, whose
// applications ran 30 June to 29 July 2026; an exam cannot precede its own
// application window by four months. They belong to the previous CEN 02/2025
// cycle, and one source labels them as such. This page therefore does NOT
// assert an exam date, because RRB had not announced one for CEN 02/2026.
//
// NOT ASSERTED: CBT date, zone-wise vacancy split, cutoffs, normalisation
// details for this cycle.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "RRB Technician 2026: 6,557 Posts, CEN 02/2026 Exam Guide";

const description =
  "RRB Technician 2026 has 6,557 posts under CEN 02/2026. Applications closed on 29 July 2026. Check the CBT pattern, Grade 1 and Grade 3 split, and the pay.";

const content = `Railway Recruitment Board notified 6,557 Technician posts under CEN 02/2026, and applications ran from 30 June to 29 July 2026. That window has closed. Candidates who applied are now waiting on the computer based test.

The recruitment splits into two grades that differ more than the shared job title suggests, and the difference decides both what you will do and what you will be paid.

## Where this recruitment stands

| Item | Detail |
|---|---|
| Notification | CEN 02/2026 |
| Total posts | 6,557 |
| Technician Grade 1 Signal | 323 |
| Technician Grade 3 | 6,234 |
| Applications | 30 June to 29 July 2026, closed |
| CBT date | Not announced |
| Portal | rrbapply.gov.in |

If you have seen CBT dates of 6, 9, 10 and 13 March 2026 quoted for RRB Technician, those belong to the previous CEN 02/2025 cycle. They cannot apply to this one, because an examination cannot precede its own application window by four months. RRB had not published a CBT date for CEN 02/2026 at the time of writing.

## Grade 1 Signal and Grade 3 are different jobs

Grade 1 Signal accounts for 323 of the 6,557 posts. It is the technically demanding half of the recruitment, working on railway signalling systems, and it carries a higher pay level and a stiffer qualification bar.

Grade 3 accounts for the remaining 6,234, which is where almost every candidate will actually land. The work covers maintenance and technical support across railway departments, and the entry qualification is an ITI trade certificate rather than a diploma or degree.

Because Grade 3 is more than 95 per cent of the vacancies, a candidate planning around Grade 1 is competing for a small slice of the recruitment. That is worth being clear-eyed about when you look at cutoffs later.

## Eligibility

Technician Grade 1 Signal requires a three year engineering diploma in a relevant branch, or a degree in engineering, in the disciplines named in the notification. The branch list is specific rather than general, and a differently titled qualification may need equivalence established.

Technician Grade 3 requires a Class 10 pass together with an ITI certificate in the relevant trade from an institution recognised by NCVT or SCVT. Some trades additionally accept an equivalent qualification, again as named in the notification.

Age limits differ between the two grades and carry standard relaxation: five years for Scheduled Castes and Scheduled Tribes, three years for Other Backward Classes in the non-creamy layer, and further relaxation for candidates with benchmark disabilities and for ex-servicemen.

Check the trade name on your ITI certificate against the notification wording exactly. Trade nomenclature varies between institutes, and it is verified at document verification rather than filtered at application, which means a mismatch surfaces after you have already cleared the CBT.

## Selection is one exam

The selection rests on a single computer based test. There is no second stage that can rescue a weak paper, and no interview.

Document verification and a medical examination follow, but neither is a further competition. They confirm that you are who your application said and that you meet the fitness standard for the post.

That structure concentrates everything into one sitting, which is unusual among large recruitments and changes how you should prepare. In a two-tier examination you can afford a moderate first paper. Here you cannot.

The medical standard deserves attention. Railway technical posts carry vision requirements that vary by post, and candidates occasionally clear the CBT and then fail the medical on a standard they never checked. The requirements are in the notification and they are worth reading before the result rather than after.

## What the CBT covers

The paper is objective and covers mathematics, general intelligence and reasoning, general science, and general awareness including current affairs, with the technical component weighted according to the grade applied for.

Negative marking applies, with one third of a mark deducted for a wrong answer. Over a full paper that penalty makes blind guessing a losing approach, while an educated guess between two remaining options still carries positive expected value.

Scores are normalised because the examination runs across multiple shifts and days. Normalisation adjusts for differences in shift difficulty so that a candidate who sat a harder paper is not penalised for it, which is why the score you calculate from a memory-based answer key rarely matches your published result, and why comparing raw marks with a friend from another shift tells you nothing.

Confirm the section-wise question count and marks in the notification rather than from a summary table. RRB has varied the structure between CENs.

## Pay and what the job involves

Technician Grade 3 enters at Pay Level 2 on the 7th Pay Commission matrix, with an entry basic pay of Rs 19,900. Technician Grade 1 Signal enters higher, reflecting the diploma-level qualification and the signalling responsibility.

Gross monthly pay is meaningfully above basic once dearness allowance, house rent allowance and transport allowance are added, and house rent allowance is banded by city classification, so the same post pays noticeably more in a metro than in a smaller town.

Railway employment carries a set of benefits that do not appear on the pay slip and that candidates routinely undervalue. Free or concessional travel passes for the employee and family, railway medical facilities, and in many locations subsidised railway quarters. Over a career these are worth a substantial amount.

The work is shift-based in most technical posts, because railway operations do not stop. That is a permanent feature rather than an early-career phase, and it is the thing most often cited by people who leave railway technical roles.

Promotion runs through the technical grades and, for those who pursue departmental examinations, into supervisory positions. The internal route rewards candidates who sit those examinations rather than waiting for time-bound progression.

## Preparing for a single-shot examination

The absence of a second stage should change how you prepare, and most candidates carry habits from two-tier examinations that do not serve them here.

In SSC CGL or a banking recruitment, the first paper screens and the second decides. A candidate can treat the screening stage as a gate to clear comfortably and save their depth for later. RRB Technician gives you one paper, and everything rests on it.

That has three practical consequences.

Accuracy matters more than coverage. A candidate who knows 70 per cent of the syllabus thoroughly outperforms one who knows 90 per cent shakily, because the second candidate will attempt more questions at lower confidence and the negative marking will take the difference back.

Timing has to be rehearsed rather than calculated. Work out your realistic attempt count in full-length mocks and build the paper plan around it. Deciding on the day how many questions to attempt is how candidates end up guessing in the final ten minutes.

The technical section carries disproportionate weight for your outcome even where it does not carry disproportionate marks, because it is where the field actually separates. Everyone sitting this paper has done some reasoning and general awareness preparation. Far fewer have worked systematically through their trade or branch syllabus at the level the paper asks.

## Why railway recruitment attracts the volume it does

It is worth understanding the competition you are in, because it explains the cutoffs.

Railway recruitment draws applicant numbers that exceed almost any other employer in India. A recruitment of 6,557 posts routinely attracts applications in the millions, which produces a selection ratio that looks discouraging on paper.

Three things drive that volume. The qualification bar for Grade 3 is a Class 10 pass plus an ITI certificate, which is the widest eligibility of any large technical recruitment. The benefits package, particularly travel passes and medical facilities, is unusually strong relative to the pay level. And railway employment carries a security and social standing that candidates weigh heavily.

The practical implication is not to be discouraged but to be realistic about what clears. A cutoff shaped by millions of applicants rewards accuracy and speed rather than breadth, and candidates who prepare for the paper that is actually set do considerably better than those who prepare for the syllabus in the abstract.

It also argues for sitting every railway and technical recruitment you are eligible for rather than holding out for one. The preparation transfers almost entirely between RRB Technician, RRB Group D, RRB NTPC and comparable state technical recruitments, and the marginal cost of an additional application is a fee and a day.

## Zone allocation

RRB recruits through regional boards, and the zone you are allotted determines where you work, often for many years.

Vacancies are distributed across zones and the allocation follows from your rank and the preferences submitted during the application. Candidates expecting to serve near home should understand that this is a preference expressed within a national process rather than a guarantee, and that popular zones fill at better ranks.

The zone-wise split for CEN 02/2026 is published in the notification annexure rather than in summary coverage, so check that document rather than an aggregator table.

## What to do while the CBT date is pending

RRB had not announced a date at the time of writing, which makes this a preparation window rather than a countdown.

Work the technical component for your grade first. It is the part where candidates separate, because the general sections overlap heavily with other railway and SSC examinations and most candidates arrive with some baseline in them.

Run general awareness daily rather than in a block. It rewards steady accumulation and punishes compression more than any other section.

Practise full papers under timed conditions with the negative marking applied honestly. The purpose is to find your realistic attempt count, not to maximise attempts.

Keep your registration credentials accessible. E-call letters are released a few days before the examination on rrbapply.gov.in, and this process will run for months.

Check the portal on a fixed schedule. RRB publishes and does not individually notify.

## What the technical section actually asks

Since the technical component is where the field separates, it is worth being concrete about its scope.

For Technician Grade 3, the technical questions follow the ITI trade syllabus for the trade you applied under. Electrician, Fitter, Machinist, Welder, Electronics Mechanic and the other notified trades each carry their own content, and the paper you sit is matched to your trade rather than being common across all of them.

For Technician Grade 1 Signal, the technical content sits at diploma level in the relevant engineering branch and leans toward electronics, telecommunications and signalling fundamentals.

Two habits help more than extra reading. Work through your own trade or branch syllabus systematically rather than relying on a general railway preparation book, because those books necessarily cover many trades shallowly. And work previous years' RRB papers for your trade, since the question level is stable enough across CENs that past papers are a reliable guide to depth.

Where a topic appears in both your trade syllabus and the general science section, treat it once and treat it properly. The overlap between basic electrical concepts in the trade paper and general science is substantial for several trades.

## Documents to have ready

Document verification comes after the result, and the gap is short enough that assembling paperwork afterwards causes problems.

Keep the set current: matriculation certificate for date of birth, the ITI certificate or engineering diploma with mark sheets, a category certificate in the prescribed format with a valid issue date, identity proof, and photographs matching the one used in the application.

Two items cause most of the trouble. Category certificates in an outdated format are rejected, and the format changes periodically, so a certificate issued years ago may no longer be accepted. And name mismatches between certificates, where a middle name appears on one document and not another, need resolving with an affidavit rather than an explanation at the counter.

Check every detail against what you entered in the application. The verification compares the two, and a discrepancy you introduced by rounding a percentage or abbreviating a trade name is your problem to resolve at that stage.

Candidates who assemble this set while waiting for the CBT date, rather than after the result, remove an entire category of avoidable failure.

## Frequently asked questions

**How many vacancies are there in RRB Technician 2026?**

6,557 under CEN 02/2026: 323 Technician Grade 1 Signal posts and 6,234 Technician Grade 3 posts. Grade 3 is more than 95 per cent of the recruitment, so that is where almost all selections will happen.

**Can I still apply for RRB Technician 2026?**

No. Applications ran from 30 June to 29 July 2026 at rrbapply.gov.in and the window has closed. There is no late route.

**When is the RRB Technician 2026 CBT?**

RRB had not announced a date for CEN 02/2026 as of 31 August 2026. If you have seen 6, 9, 10 and 13 March 2026 quoted, those dates belong to the previous CEN 02/2025 cycle and cannot apply here, since an examination cannot precede its own application window.

**What is the difference between Technician Grade 1 and Grade 3?**

Grade 1 Signal works on railway signalling systems, requires an engineering diploma or degree, and carries a higher pay level. Grade 3 covers maintenance and technical support, requires a Class 10 pass plus an ITI certificate, and accounts for 6,234 of the 6,557 posts.

**What qualification do I need for Technician Grade 3?**

A Class 10 pass together with an ITI certificate in the relevant trade from an NCVT or SCVT recognised institution. Check your trade name against the notification wording exactly, since nomenclature varies between institutes and it is verified at document verification rather than at application.

**Is there an interview in RRB Technician selection?**

No. Selection rests on a single computer based test, followed by document verification and a medical examination, neither of which is a further competition. There is no second written stage to recover a weak paper.

**Is there negative marking?**

Yes, one third of a mark for each wrong answer. Across a full paper that makes blind guessing a losing approach, though an educated guess between two remaining options still carries positive expected value.

**Why does my calculated score differ from my result?**

Because RRB normalises scores across shifts. The examination runs over multiple shifts and days, and normalisation adjusts for differences in paper difficulty so a candidate who sat a harder shift is not penalised. It also means comparing raw marks with someone from a different shift is not meaningful.

**What is the RRB Technician salary?**

Technician Grade 3 enters at Pay Level 2 with a basic of Rs 19,900, and Grade 1 Signal enters higher. Gross pay is meaningfully above basic once dearness allowance, house rent allowance and transport allowance are added, and railway employment adds travel passes, medical facilities and in many locations subsidised quarters.

**Can I choose my zone?**

You express preferences during the application, but allocation follows from your rank within a national process. Popular zones fill at better ranks, so a preference is not a guarantee. The zone-wise vacancy split is in the notification annexure.

**Does the medical examination matter?**

Yes. Railway technical posts carry vision and fitness standards that vary by post, and candidates occasionally clear the CBT and then fail the medical on a standard they never checked. Read the requirements in the notification before the result rather than after.

**Which RRB zone should I have chosen?**

Zone preference is expressed during the application and cannot be changed afterwards. Allocation follows from rank within a national process, so popular zones fill at better ranks and a preference is not a guarantee. Candidates who need to work near home should understand that railway employment involves postings across a zone's territory rather than a fixed location, so even a home-zone allotment does not mean a home-town posting.

**Can I apply for both Grade 1 and Grade 3?**

Eligibility differs: Grade 1 Signal needs an engineering diploma or degree, Grade 3 needs Class 10 plus an ITI certificate. A candidate holding a diploma may be eligible for both, and the notification states whether applications can be made to both within one cycle. Read that provision rather than assuming, since RRB has handled it differently across CENs.

**How long does the full RRB Technician process take?**

From the CEN 02/2026 notification in May 2026 through applications closing in July, a CBT still unscheduled, then result, document verification and medical, the cycle runs well over a year to appointment. Plan on that timeline and keep applying to other recruitments in the interim rather than pausing to wait.

**Is RRB Technician better than RRB Group D?**

They sit at different levels. Technician Grade 3 enters at Pay Level 2 and requires an ITI certificate; Group D posts are Level 1 and require Class 10 with an ITI or equivalent for some posts. Technician carries a higher entry grade and a technical career track. The preparation overlaps enough that sitting both is the sensible approach for anyone eligible.

**Does the trade I applied under affect my question paper?**

Yes, for Grade 3. The technical section follows the ITI trade syllabus for the trade you applied under rather than being common across all trades, which is why a general railway preparation book covering many trades shallowly is a weaker choice than working your own trade syllabus systematically.

## Official sources

- RRB application portal: https://www.rrbapply.gov.in
- Your regional Railway Recruitment Board website
- The CEN 02/2026 notification PDF, which is the authority on the zone-wise vacancy split, trade-wise eligibility, the section-wise CBT structure and the medical standards

Where a figure on this page conflicts with the notification, the notification is correct. RRB issues corrigenda mid-cycle and publishes them without separate announcement, which is also why vacancy counts quoted on aggregator sites drift apart from each other over a cycle. Check the count in the notification and its corrigenda before treating any figure, including the one on this page, as final.`;

const fields = {
  vacancies: 6557,
  post_name: "Technician Grade 1 Signal (323 posts) and Technician Grade 3 (6,234 posts)",
  eligibility: {
    education:
      "Technician Grade 1 Signal: a three year engineering diploma in a relevant branch, or an engineering degree, in the disciplines named in the notification. The branch list is specific rather than general and a differently titled qualification may need equivalence established. Technician Grade 3: a Class 10 pass together with an ITI certificate in the relevant trade from an NCVT or SCVT recognised institution, with some trades additionally accepting a named equivalent. Check the trade name on your certificate against the notification wording exactly: nomenclature varies between institutes and it is verified at document verification rather than filtered at application, so a mismatch surfaces after the CBT has been cleared.",
    age: "Limits differ between the two grades and are stated in the notification, with standard relaxation of five years for Scheduled Castes and Scheduled Tribes, three years for Other Backward Classes in the non-creamy layer, and further relaxation for candidates with benchmark disabilities and for ex-servicemen.",
  },
  important_dates: {
    notificationDate: "2026-05-18",
    startDate: "2026-06-30",
    lastDate: "2026-07-29",
    examDate: "Not announced for CEN 02/2026 as of 31 August 2026",
    note: "CBT dates of 6, 9, 10 and 13 March 2026 circulating for RRB Technician belong to the PREVIOUS CEN 02/2025 cycle. They cannot apply to CEN 02/2026, whose applications ran 30 June to 29 July 2026, because an examination cannot precede its own application window. E-call letters are released a few days before the examination on rrbapply.gov.in.",
  },
  how_to_apply:
    "Applications for CEN 02/2026 ran from 30 June to 29 July 2026 at rrbapply.gov.in and the window is closed. There is no late route. Candidates who applied should keep their registration credentials accessible and watch rrbapply.gov.in on a fixed schedule, since RRB publishes e-call letters a few days before the examination and does not individually notify. For a future cycle: register on the RRB portal, apply within the window, express zone preferences understanding that allocation follows from rank within a national process rather than guaranteeing a posting near home, and check the trade name on your ITI certificate against the notification before submitting.",
  selection_process:
    "**Stage 1: Computer Based Test.** A single objective paper covering mathematics, general intelligence and reasoning, general science, and general awareness including current affairs, with the technical component weighted according to the grade applied for. Negative marking of one third of a mark per wrong answer. Scores are NORMALISED across shifts, because the examination runs over multiple shifts and days, so a score calculated from a memory-based answer key rarely matches the published result and comparing raw marks across shifts is not meaningful. Confirm the section-wise question count in the notification, since RRB has varied the structure between CENs.\n\n**This single test decides the outcome.** There is no second written stage and no interview, so a moderate paper cannot be recovered later. That concentrates everything into one sitting, which is unusual among large recruitments.\n\n**Stage 2: Document verification.** Qualifying. Checks the ITI trade name or diploma branch against the notification, plus age, category and identity.\n\n**Stage 3: Medical examination.** Qualifying, but not a formality. Railway technical posts carry vision and fitness standards that vary by post, and candidates occasionally clear the CBT and then fail here on a standard they never checked. The requirements are in the notification.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "rrb-technician-2026", title, description, content, fields });
