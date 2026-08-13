// Day 21 (Thu 2026-08-13) — government-job-salary-comparison-2026 blog (909w -> 3000w+).
// NON-DUPLICATIVE ANGLE: this is the cross-cutting synthesis of pay data verified across ~30
// job pages deepened in this project, organised around the four pay MECHANISMS that make
// headline comparisons wrong: CDA (7th CPC matrix), IDA (PSU), MSP (armed forces), and
// engagement-based pay that is not employment at all (TRCA for GDS, apprentice stipends).
// Every figure below is one already verified and published on a page in this project, so no
// new sourcing risk is introduced. Figures are entry-level and stated as such.
// Blog preflight: 8+ inline FAQs, title 50-65, desc 150-160, 3000w+, "consistently" banned.
import { replaceBlog } from "./lib/replace-blog.mjs";

const TITLE = "Government Job Salary Comparison 2026: Level by Level";

const DESCRIPTION =
  "Government salaries in 2026 compared across police, railways, banking, defence and PSUs, and the four pay mechanisms that make headline figures misleading.";

const CONTENT = `## Why most salary comparisons mislead

Put two government jobs side by side on their advertised pay and you will usually reach the wrong conclusion, because Indian government employment does not run on one pay system. It runs on at least four, and they are not comparable without translation.

A central government clerk is on the 7th Pay Commission matrix with dearness allowance revised half-yearly. A public sector undertaking engineer is on an Industrial Dearness Allowance scale revised quarterly on a different index. An armed forces officer draws Military Service Pay that no civilian post receives. And a Gramin Dak Sevak or a bank apprentice is not on a pay scale at all, because those engagements are not employment in the ordinary sense.

Comparing the headline numbers across those four without knowing which is which produces nonsense. This page sets out the mechanisms first, then the numbers, then the parts of the package that never appear in a salary table and often matter more than the ones that do.

Every figure here is an entry-level figure. Nothing below is a mid-career salary, and the growth trajectories differ as much as the starting points.

## The four pay mechanisms

**CDA, the central government matrix.** Most central and state government posts sit on the 7th Pay Commission pay matrix, expressed as a Level from 1 upward with a basic pay for each. Dearness allowance is revised half-yearly, house rent allowance depends on the classification of the posting city, and revisions come through Pay Commissions applying across the service. This is what people usually mean by a government pay scale.

**IDA, the public sector scale.** Public sector undertakings pay on Industrial Dearness Allowance scales, expressed as grades such as E-1 upward. Dearness allowance is revised quarterly on an industrial index, and pay revision happens through periodic wage negotiation specific to the enterprise rather than through Pay Commissions. A PSU employee is not a civil servant.

**MSP, the armed forces addition.** Commissioned officers and personnel of the armed forces draw Military Service Pay on top of basic pay and dearness allowance, at a flat rate for officers regardless of rank up to a point. No civilian post has an equivalent, which is why an armed forces officer at the same pay level as a civil servant takes home materially more.

**Engagement-based pay that is not a scale.** Some large recruitments do not create employment. Gramin Dak Sevaks are paid Time Related Continuity Allowance, not a pay matrix level. Bank apprentices receive a fixed stipend under the Apprentices Act. In both cases there is no increment structure, no allowance package and no permanency, and comparing the monthly figure against a pay scale post is comparing different things.

## Entry-level comparison: what these posts actually pay

The table below uses entry figures. In-hand ranges are approximate and vary with posting city, dearness allowance rate at the time, and whether accommodation and transport are provided in kind rather than as cash.

| Post | Mechanism | Entry basic | Approximate in-hand |
|---|---|---|---|
| Armed forces officer via NDA or CDS | CDA plus MSP | Rs 56,100 plus MSP Rs 15,500 | Rs 1,00,000 to Rs 1,25,000 |
| IAS and allied services via UPSC CSE | CDA Level 10 | Rs 56,100 | Around Rs 1,00,000 in a metro |
| State PCS, SDM or DSP | CDA Level 10 | Rs 56,100 | Rs 80,000 to Rs 95,000 |
| Assistant Professor via state PSC | Academic Level 10 | Rs 57,700 | Well above basic with allowances |
| BSNL Junior Telecom Officer | IDA E-1 | Rs 16,400 | Rs 45,000 to Rs 55,000 |
| CISF ASI Paramedical | CDA Level 5 | Rs 29,200 | Rs 38,000 to Rs 45,000 |
| SSC GD Constable in CAPF | CDA Level 3 | Rs 21,700 | Rs 43,000 to Rs 51,000 |
| State police constable | CDA Level 3 | Rs 21,700 | Rs 30,000 to Rs 38,000 |
| RRB Assistant Loco Pilot | CDA Level 2 plus running allowance | Rs 19,900 | Substantially above basic with running allowance |
| RRB Group D Level 1 | CDA Level 1 | Rs 18,000 | Rs 22,500 to Rs 25,380 |
| India Post Branch Postmaster | TRCA, not a pay level | Rs 12,000 to Rs 29,380 range | Within that range plus DA |
| India Post ABPM or Dak Sevak | TRCA, not a pay level | Rs 10,000 to Rs 24,470 range | Within that range plus DA |
| SBI Apprentice | Fixed stipend, not employment | Rs 15,000 fixed | Rs 15,000, no allowances |

## What that table actually shows

Four things worth pulling out, because they are not obvious from the numbers alone.

**The armed forces officer entry is the highest civilian-comparable package at entry**, and Military Service Pay is why. At the same Level 10 basic as an IAS officer, the MSP addition of Rs 15,500 a month plus dearness allowance on it produces a higher figure. That is a deliberate policy choice reflecting service conditions rather than an anomaly.

**SSC GD Constable takes home substantially more than a state police constable at the same pay level.** Both sit at Level 3 with Rs 21,700 basic, yet the CAPF figure runs Rs 43,000 to Rs 51,000 against Rs 30,000 to Rs 38,000 for a state constable. The difference is CAPF-specific allowances: ration money and the risk and hardship allowance that applies in operational areas. Same level, different allowance regime, roughly Rs 12,000 a month apart.

**BSNL JTO looks poorly paid on basic and is not.** An IDA E-1 basic of Rs 16,400 is below an RRB Group D basic of Rs 18,000, yet the in-hand figure is roughly double. IDA scales carry a much larger dearness allowance component proportionally, so comparing PSU basic pay against government basic pay directly is meaningless.

**The bottom two rows are not jobs in the way the others are.** A Gramin Dak Sevak on TRCA and an SBI apprentice on a fixed stipend have no increment structure, no allowance package and, for the apprentice, no permanency at all. An apprentice stipend of Rs 15,000 sits numerically near an RRB Group D in-hand of Rs 22,500, but one is a career with a pension and the other is a fixed-term training engagement that ends.

## The parts that never appear in a salary table

At every level, a meaningful share of government remuneration arrives as facilities rather than money, and the posts with the lowest cash figures are often the ones receiving most in kind.

**Accommodation.** Government quarters, police lines, railway colonies and officer accommodation remove the largest household expense. An officer in government accommodation does not draw house rent allowance, so the cash salary falls while the real position improves. This single factor makes cash comparisons across postings close to useless.

**The railway travel pass.** Railway employees and their families receive travel passes, which for a family that travels is worth a substantial amount annually and appears in no salary figure.

**Rations and canteen.** CAPF and armed forces personnel receive ration entitlements. Many services have subsidised canteen access.

**Medical cover.** Central Government Health Scheme, railway hospitals, CAPF medical facilities, ECHS for armed forces veterans. The value of comprehensive family medical cover without insurance premiums is significant and rises with age.

**Pension.** Current recruits across almost all these services come under the National Pension System rather than the older defined-benefit pension, which is a material difference from what long-serving employees receive and worth understanding rather than assuming.

**Job security.** Difficult to price and real. Permanent government employment carries protections that neither private employment nor an apprenticeship provides.

## Growth trajectories differ more than starting points

A comparison at entry is the least useful comparison, because these posts diverge sharply over a career.

An officer entering at Level 10 through UPSC CSE or a state PCS progresses through Levels 11, 12, 13 and upward, with the ceiling for the most senior central posts at Level 18 and a basic of Rs 2,50,000. That is a very long ladder.

A Level 3 constable progresses to Head Constable, Assistant Sub-Inspector and Sub-Inspector through departmental promotion, which is seniority-driven and slower, though a serving constable holding a degree can sit direct Sub-Inspector recruitment and jump several rungs.

A Level 1 railway entrant progresses through departmental examinations and internal promotion, and Indian Railways runs a substantial internal promotion system with a defined quota of higher posts filled from serving employees.

A BSNL JTO at E-1 progresses to E-2 as Sub Divisional Engineer and E-3 as Divisional Engineer, within an enterprise whose pay revision depends partly on its own financial position.

An Assistant Professor progresses through the Career Advancement Scheme, where movement depends substantially on publications and qualifications rather than only on seniority, which puts more of the trajectory in the individual's hands than most government careers do.

The practical implication is that a candidate choosing between two posts should compare the ladder, not the first rung. A Level 3 post with a fast promotion route can overtake a Level 5 post with a blocked one.

## How to compare two specific posts properly

A method, since the general point is easy to agree with and hard to apply.

Identify the mechanism for each. CDA, IDA, CDA plus MSP, or engagement-based. If they differ, the basic pay figures are not comparable and you must work from in-hand.

Fix the posting city, or compare a realistic posting for each. House rent allowance at 27, 18 or 9 per cent of basic changes the answer, and an all-India service and a state service have very different posting distributions.

Decide whether accommodation is cash or facility in each case, and value the facility at local rent rather than at the allowance rate.

Note the dearness allowance rate and date. Figures from different years are not comparable, and IDA and CDA move differently.

Then look at the ladder: the next two promotions, how they are earned, and roughly how long they take.

Finally, count the non-cash items that actually apply to your life. A travel pass matters if you travel. Family medical cover matters more with dependants. Accommodation matters most where rents are high.

Do that and most comparisons resolve clearly, often differently from the headline figures.

## Qualification versus pay: what the ladder costs to enter

A comparison of pay is incomplete without the entry cost, because the posts paying most demand most to reach.

At the top of the table, an armed forces officer entry and an IAS or state PCS entry both require clearing examinations with very low selection ratios. UPSC Civil Services fills a few hundred posts from lakhs of applicants across three stages spanning a year. A state PCS is easier but not easy. These are multi-year preparation commitments for most successful candidates, and many never convert.

In the middle, CAPF and state police constable posts need Class 10 or 12 and a physical standard, and the preparation is measured in months rather than years. BSNL JTO needs an engineering degree, which is a four-year investment made before the recruitment exists. CISF ASI Paramedical needs a specific diploma plus, for pharmacists, statutory registration.

At the accessible end, RRB Group D and India Post GDS need Class 10, and GDS needs no examination at all, being decided on Class 10 marks alone.

Set that against the pay and a pattern emerges that is worth naming plainly. The relationship between entry difficulty and pay is real but not linear, and there are better and worse trades within it.

SSC GD Constable is arguably the best-value trade in the table: Class 10 or 12 eligibility, months of preparation plus a hard physical standard, and an in-hand figure of Rs 43,000 to Rs 51,000 that exceeds what many graduate-entry posts pay. The cost is field posting, transfer liability and genuinely demanding service conditions.

BSNL JTO is a weaker trade on paper: a four-year engineering degree for Rs 45,000 to Rs 55,000, which an SSC GD constable reaches without one. It is better on working conditions and on the executive-grade ladder above it.

RRB Group D is the most accessible permanent post here and pays accordingly, but the railway internal promotion system means the entry figure understates a career.

India Post GDS pays least and asks least, and suits a candidate who wants a stable government-linked income in their own village alongside farming or a small business, which is what the engagement is designed for.

## What changes with a new Pay Commission

Worth understanding, since it affects every CDA figure on this page.

Central government pay is revised periodically through Pay Commissions, which recommend a new pay structure applying across the service. When a new structure takes effect, basic pay is revised upward by a fitment factor, dearness allowance resets to zero against the new basic, and it then accumulates again over the following years.

Two implications follow for anyone reading a salary comparison.

Figures quoted late in a Pay Commission cycle, when dearness allowance has accumulated to 50 per cent or more of basic, look very different from figures quoted just after a revision, when dearness allowance is near zero but basic pay has jumped. The in-hand total moves much less than either number suggests.

And PSU IDA scales are revised on their own timetable through enterprise wage settlements, so a Pay Commission that lifts government pay does not automatically lift PSU pay. The relative position between a CDA post and an IDA post can therefore shift without either employer doing anything unusual.

The practical instruction is to treat every figure on this page as a snapshot at a point in a cycle rather than a permanent relationship, and to check current dearness allowance rates when making a decision that turns on a few thousand rupees.

## Frequently asked questions

**Which government job has the highest starting salary in 2026?**
Among the posts compared here, an armed forces officer commissioned through NDA or CDS has the highest entry package, at Rs 56,100 basic plus Military Service Pay of Rs 15,500 and dearness allowance on both, giving roughly Rs 1,00,000 to Rs 1,25,000 in hand. Military Service Pay has no civilian equivalent, which is why the same Level 10 basic produces more than an IAS entry package.

**Why does an SSC GD Constable earn more than a state police constable at the same level?**
Both sit at Pay Level 3 with Rs 21,700 basic, but CAPF personnel receive ration money allowance and the risk and hardship allowance applicable in operational areas, which state police constables generally do not. The result is roughly Rs 43,000 to Rs 51,000 in hand for CAPF against Rs 30,000 to Rs 38,000 for a state constable: same pay level, different allowance regime, about Rs 12,000 a month apart.

**What is the difference between IDA and CDA pay scales?**
CDA is the central government system, the 7th Pay Commission matrix expressed as Levels, with dearness allowance revised half-yearly and revisions through Pay Commissions applying across the service. IDA is the public sector system, expressed as grades such as E-1, with dearness allowance revised quarterly on an industrial index and pay revised through enterprise-specific wage negotiation. A PSU employee is not a civil servant, and PSU basic pay cannot be compared directly with government basic pay.

**Why does BSNL JTO basic pay look lower than an RRB Group D basic?**
Because they are different systems. BSNL JTO is IDA E-1 with a basic of Rs 16,400, while RRB Group D is CDA Level 1 with Rs 18,000. Yet the JTO in-hand figure of roughly Rs 45,000 to Rs 55,000 is around double the Group D figure of Rs 22,500 to Rs 25,380, because IDA scales carry a proportionally much larger dearness allowance component. Comparing basic pay across the two systems tells you nothing.

**Is India Post GDS a government job with a government salary?**
Not in the ordinary sense. Gramin Dak Sevaks are paid Time Related Continuity Allowance rather than on a pay matrix level, with Branch Postmasters in a range of Rs 12,000 to Rs 29,380 and Assistant Branch Postmasters and Dak Sevaks in a range of Rs 10,000 to Rs 24,470, plus dearness allowance. The engagement carries its own service conditions and benefits structure rather than those of regular central employment.

**How does an apprentice stipend compare with a real salary?**
It does not compare, because an apprenticeship is not employment. An SBI apprentice receives a fixed Rs 15,000 a month with no dearness allowance, no house rent allowance, no increment and no permanency, and the engagement ends at the end of its term. That figure sits numerically near an RRB Group D in-hand of about Rs 22,500, but one is a career with pension provision and the other is fixed-term training.

**Why is cash salary a poor way to compare postings?**
Because a large part of government remuneration arrives as facilities. An officer in government accommodation does not draw house rent allowance, so their cash salary is lower while their real position is better, particularly where local rents are high. Add ration entitlements, railway travel passes, subsidised canteens and family medical cover, and the post with the lowest cash figure is often receiving the most in kind.

**Should I choose a job based on entry salary?**
No, because the trajectories diverge far more than the starting points. A Level 10 officer entry progresses through Levels 11, 12, 13 and upward with the most senior central posts at Level 18 and Rs 2,50,000 basic. A Level 3 constable progresses more slowly through departmental promotion. A Level 3 post with a fast promotion route can overtake a Level 5 post with a blocked one, so compare the ladder rather than the first rung.

**Do all these posts have the same pension?**
Current recruits across almost all of these services come under the National Pension System rather than the older defined-benefit pension. That is a material difference from what long-serving employees in the same posts receive, and it is worth understanding rather than assuming when comparing a government career against private employment on the strength of pension security.

**What is Military Service Pay?**
A payment made to armed forces personnel on top of basic pay and dearness allowance, at a flat rate of Rs 15,500 a month for officers across ranks up to a point, with dearness allowance applied on it. No civilian post receives an equivalent. It reflects service conditions rather than rank, and it is the main reason an armed forces officer at the same pay level as a civil servant takes home more at entry.

**Which is better, a central government job or a PSU job?**
They differ in mechanism rather than one being uniformly better. A central government post gives you the 7th CPC matrix with half-yearly dearness allowance and Pay Commission revisions applying across the service. A PSU gives you IDA scales with quarterly dearness allowance and revisions negotiated at enterprise level, which means pay depends partly on the enterprise's own position. Compare in-hand figures, the promotion ladder and the organisation's financial standing rather than basic pay.

**How do I compare two specific government posts properly?**
Identify the pay mechanism for each, since different mechanisms make basic pay incomparable. Fix a realistic posting for each and apply the correct house rent allowance rate. Decide whether accommodation is cash or facility and value the facility at local rent. Check that both figures use the same dearness allowance rate and date. Then compare the next two promotions and how long they take. Finally count only the non-cash benefits that apply to your own circumstances.`;

await replaceBlog({
  slug: "government-job-salary-comparison-2026",
  title: TITLE,
  description: DESCRIPTION,
  category: "Salary and Pay",
  tags: [
    "Government Salary",
    "Salary Comparison",
    "7th Pay Commission",
    "Pay Matrix",
    "IDA Pay Scale",
    "Military Service Pay",
    "Government Jobs",
    "Sarkari Naukri",
  ],
  content: CONTENT,
});
