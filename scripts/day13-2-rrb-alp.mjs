// Day 13 (Mon 2026-08-03) — RRB ALP deepening (786w -> 3000w+) AND ACTIVATION.
// Fixes a live problem: rrb-alp-2026 (correct CEN 01/2026 content) was is_active=0 while
// rrb-alp-railway-recruitment-board-assistant-loco-pilot-2026 (STALE CEN 01/2024, 18,799
// vacancies) was the page serving publicly in Aug 2026. The stale one gets 301'd in
// next.config.js in the companion change. Old title also carried an em dash (humanizer).
// Verified 2026-08-03. CEN 01/2026 notified 14 May 2026, 11,127 vacancies, applications
// 15 May to 14 Jun 2026 (closed), 8,40,944 applicants. CBT 1 date awaited.
// MOAT 1: 2026 weightage change -> final merit is 50% CBT-2 Part A + 50% CBAT (was 70/30).
// CBAT now carries equal weight and cannot be crammed. Strategy-changing.
// MOAT 2: A-1 medical, 6/6 vision WITHOUT glasses, no lens power allowed. Disqualifies late.
// Also: General Awareness removed from CBT 1 in 2026; CBT 2 Part B qualifying at 35%.
import { replaceJob } from "./lib/replace-job.mjs";

const title = "RRB ALP 2026: 11,127 Posts, CBAT Weightage, Medical";

const description =
  "RRB ALP 2026 has 11,127 posts and a changed merit rule: CBAT now counts for half. Check the CBT pattern, the A-1 vision standard and who gets ruled out.";

const content = `## RRB ALP 2026: what changed, and why it matters

RRB ALP 2026, advertised as CEN 01/2026, is the Railway Recruitment Board's Assistant Loco Pilot recruitment for 11,127 posts. It was notified on 14 May 2026, applications ran from 15 May to 14 June 2026, and 8,40,944 candidates applied. The CBT 1 date has not been announced yet.

Two things about this cycle change how you should prepare, and both get buried in most coverage.

The merit rule changed. Final selection is now weighted 50 per cent on CBT 2 Part A and 50 per cent on the Computer Based Aptitude Test, replacing the earlier 70 to 30 split. The aptitude test is no longer a secondary hurdle. It carries the same weight as the technical paper.

And the medical standard is A-1, the strictest railway category, requiring 6/6 distance vision in both eyes without glasses. Candidates who wear any corrective lenses are not eligible, and a great many people discover this at the medical stage after clearing three exams.

## Important dates

| Event | Date |
|---|---|
| Notification released | 14 May 2026 |
| Applications opened | 15 May 2026 |
| Last date to apply | 14 June 2026 |
| Candidates applied | 8,40,944 |
| CBT 1 | To be announced |

At 8,40,944 applicants for 11,127 posts, roughly 76 candidates compete for each vacancy. That is a demanding ratio, though notably better than the Group D recruitment running alongside it, because the ITI and diploma requirement narrows the field.

## The weightage change, and what to do about it

Under the old rule, CBT 2 Part A carried 70 per cent of the final merit and the CBAT 30 per cent. Under the 2026 rule they are equal at 50 per cent each.

Think about what that means. A candidate who is strong on technical questions and average on aptitude used to be able to carry a mediocre CBAT score on the strength of Part A. That no longer works. Half your final position now rests on a test of memory, concentration, perceptual speed, depth perception and direction sense.

The awkward part is that the CBAT is the hardest stage to improve quickly. Technical and mathematical content responds to study: you learn a formula, you gain marks. Aptitude of this kind responds to repeated practice over time rather than to reading, and there is no syllabus to finish. Candidates who leave the CBAT until after CBT 2 are preparing the half of their merit score that most needs lead time in the least time available.

Start CBAT practice now, well before CBT 1, in short and frequent sessions rather than long blocks. That is the single most useful consequence of the rule change.

## Selection process

| Stage | Role in selection |
|---|---|
| CBT 1 | Screening only, marks do not carry to final merit |
| CBT 2 Part A | 50 per cent of final merit |
| CBT 2 Part B | Qualifying only, minimum 35 per cent |
| CBAT | 50 per cent of final merit |
| Document Verification | Eligibility check |
| Medical Examination | A-1 standard, pass or fail |

Read that table carefully, because three of the six stages do not add to your rank and candidates routinely misallocate effort across them. CBT 1 only gets you through the door. CBT 2 Part B only has to be passed. The medical only has to be cleared. Your actual rank is built from exactly two things: CBT 2 Part A and the CBAT, in equal measure.

## CBT 1 pattern

| Element | Detail |
|---|---|
| Questions | 75 |
| Marks | 75 |
| Duration | 60 minutes |
| Sections | Mathematics, General Intelligence and Reasoning, General Science |
| Negative marking | One third of a mark per wrong answer |

Note a change for 2026: General Awareness and Current Affairs has been removed from the CBT 1 syllabus. Candidates preparing from older material are studying a section that is no longer examined, which is wasted effort at a stage that is already only a screening test.

75 questions in 60 minutes gives you 48 seconds each, so CBT 1 is a speed test as much as a knowledge test.

## CBT 2 pattern

CBT 2 has two parts written on the same day, and only one of them counts towards your rank.

| Part | Content | Questions | Duration | Role |
|---|---|---|---|---|
| Part A | Mathematics, General Intelligence and Reasoning, Basic Science and Engineering | 100 | 90 minutes | 50 per cent of final merit |
| Part B | Trade-specific knowledge for your ITI or engineering trade | 75 | 60 minutes | Qualifying, minimum 35 per cent |

Part B being qualifying at 35 per cent is a relief for most candidates, since it tests the trade you already trained in. Clear it and move on. Effort beyond the pass mark there adds nothing to your position, while the same hours spent on Part A or the CBAT add directly to your rank.

## The CBAT, explained properly

The Computer Based Aptitude Test is mandatory for Assistant Loco Pilot and it now carries half your merit, so it deserves more than a passing mention.

It assesses the qualities a locomotive driver actually needs: memory, concentration, perceptual speed, depth perception, direction sense, and the ability to sustain attention on repetitive tasks without error. These are tested through timed on-screen batteries rather than through knowledge questions.

There is no negative marking in the CBAT.

You must secure the minimum qualifying standard in each individual test within the battery, not merely a good aggregate. A candidate who scores strongly on memory and poorly on perceptual speed can fail despite a high total, so weak areas have to be trained rather than compensated for.

Preparation that works is regular practice on aptitude test batteries, done in short sessions several times a week over months. What does not work is reading about the CBAT, or attempting a few practice sets in the fortnight before the test. Sleep, reaction time and sustained concentration all affect performance materially on the day.

## The A-1 medical standard

This is the requirement that ends the most attempts, and it should be checked before you invest a year.

Assistant Loco Pilot is a safety category post, classified A-1, the strictest medical standard in Indian Railways. The requirements include distance vision of 6/6 in both eyes without glasses, near vision of Sn 0.6 in both eyes without glasses, and normal colour vision, binocular vision and night vision. Corrective lenses are not permitted, so a candidate whose vision requires any lens power does not meet the standard.

The reason is straightforward: a loco pilot has to read signals accurately at distance, in varying light, at speed, and railway safety rules do not allow that to depend on spectacles staying in place.

If you wear glasses or contact lenses for distance, you are not eligible for A-1 posts. That is worth knowing before CBT 1 rather than after CBAT. Candidates in that position should redirect to posts with less stringent medical classifications, including several Level 1 categories in the [RRB Group D](/sarkari-naukri/rrb-group-d-2026) recruitment and technical posts in other departments, where the vision standard permits correction.

## Syllabus

The technical and quantitative content is common across the two Computer Based Tests, with CBT 2 going deeper.

Mathematics covers number systems, BODMAS, decimals and fractions, LCM and HCF, ratio and proportion, percentages, mensuration, time and work, time and distance, simple and compound interest, profit and loss, algebra, geometry and trigonometry, elementary statistics, and square roots. The level is Class 10, and the reward is speed rather than sophistication.

General Intelligence and Reasoning covers analogies, alphabetical and number series, coding and decoding, mathematical operations, relationships, syllogism, Venn diagrams, data interpretation and sufficiency, conclusions and decision making, similarities and differences, analytical reasoning, classification, directions and statement and argument questions.

Basic Science and Engineering, which appears in CBT 2 Part A, is the section that separates this exam from a general aptitude paper. It covers engineering drawing including projections, views and drawing instruments, units and measurements, mass, weight and density, work, power and energy, speed and velocity, heat and temperature, basic electricity, levers and simple machines, occupational safety and health, environment education, and IT literacy. Trade-trained candidates hold a real advantage here, and general aspirants should treat it as the priority section.

General Science in CBT 1 covers physics, chemistry and life sciences at Class 10 level, with physics and chemistry carrying more weight than biology in recent papers.

Part B of CBT 2 follows the syllabus of your own ITI or engineering trade as notified by the Directorate General of Training, so your trade coursework is the correct source to revise from.

## Eligibility

On age, the bands for CEN 01/2026 were set by date of birth: unreserved and EWS candidates born between 2 July 1996 and 1 July 2008, OBC non-creamy layer candidates born between 2 July 1993 and 1 July 2008, and SC and ST candidates born between 2 July 1991 and 1 July 2008.

On education, you need one of the following: Class 10 pass plus an ITI in a relevant trade from an institution recognised by NCVT or SCVT, or Class 10 plus a completed apprenticeship, or Class 10 plus a three-year engineering diploma, or an engineering degree.

The accepted ITI trades include Electrician, Fitter, Wireman, Mechanic Diesel, Turner, Machinist, Refrigeration and Air Conditioning Mechanic, Electronics Mechanic and Motor Vehicle Mechanic. A trade outside the notified list does not qualify however relevant it seems, so check the CEN against your certificate.

The application fee was Rs 500 for general candidates and Rs 250 for SC, ST, ex-servicemen, female, transgender, minority and economically backward class candidates. Railways refunds part of the fee to candidates who appear in CBT 1, which is a detail many applicants miss.

## Salary of an Assistant Loco Pilot

The post sits at Level 2 of the 7th Pay Commission matrix with a basic pay of Rs 19,900 a month.

Basic pay understates this job considerably, because the running allowance is substantial. A loco pilot is paid a kilometre-based running allowance on top of the fixed components, and for staff in running duty this can add a large proportion to monthly earnings. Alongside it come dearness allowance, house rent allowance by city class, and transport allowance.

The other entitlements follow railway service: railway quarters where available, the travel pass entitlement for the employee and family, railway medical facilities, and pension under the National Pension System for current recruits.

Against that, the working conditions are demanding and worth being clear-eyed about. Running duty means irregular hours, nights away from home, long spells of concentration in the cab, and a safety responsibility that does not relax. The pay reflects that.

## Career progression

Assistant Loco Pilot is the entry point of the running cadre, and progression is well defined.

| Stage | Route |
|---|---|
| Assistant Loco Pilot | Direct recruitment |
| Loco Pilot (Goods) | Promotion after prescribed service and departmental requirements |
| Loco Pilot (Passenger) | Promotion on seniority and suitability |
| Loco Pilot (Mail and Express) | Promotion |
| Loco Inspector and supervisory grades | Selection through departmental process |

Progression through the running cadre is largely seniority-driven with departmental tests and safety clearances at each stage, and both pay and the running allowance rise as you move from goods to passenger to mail and express services.

## What to do while the CBT 1 date is awaited

The exam date has not been announced, and that waiting period is the most valuable time available in this recruitment.

Confirm your medical eligibility first. Get your uncorrected distance vision checked by an optometrist. If you need lens power, this recruitment is not open to you and it is far better to know now.

Begin CBAT practice immediately, in short frequent sessions. Half your merit depends on it and it is the slowest thing to improve.

Work CBT 2 Part A alongside, since it carries the other half. Basic Science and Engineering in particular rewards steady work and is where trade-trained candidates have an edge over general aspirants.

Treat CBT 1 as a speed drill rather than a knowledge project, and drop General Awareness from your CBT 1 preparation, since it has been removed from the 2026 syllabus.

Keep Part B revision light until closer to CBT 2, since it needs only 35 per cent and covers your own trade.

One more thing worth doing in this window: check that the ITI trade named on your certificate matches one of the trades notified in the CEN, exactly as written. Candidates are rejected at document verification over trade names that are similar but not identical to the notified list, and that is a check worth making now rather than discovering it after three exams.

## Frequently asked questions

**How many vacancies are in RRB ALP 2026?**
There are 11,127 Assistant Loco Pilot vacancies under CEN 01/2026, notified on 14 May 2026. Applications ran from 15 May to 14 June 2026 and 8,40,944 candidates applied, which works out to roughly 76 applicants per vacancy. The CBT 1 date has not yet been announced.

**How is the RRB ALP 2026 final merit calculated?**
Final merit is weighted 50 per cent on CBT 2 Part A and 50 per cent on the Computer Based Aptitude Test, replacing the earlier 70 to 30 split. CBT 1 is only a screening stage and its marks do not carry forward, CBT 2 Part B is qualifying at 35 per cent, and the medical is pass or fail. So only two stages actually build your rank.

**What is the CBAT in RRB ALP?**
The Computer Based Aptitude Test is a mandatory test of memory, concentration, perceptual speed, depth perception and direction sense, delivered as timed on-screen batteries rather than knowledge questions. It has no negative marking, and you must meet the minimum standard in each individual test within the battery rather than just achieving a good aggregate. Since 2026 it carries 50 per cent of final merit.

**What is the medical standard for RRB ALP?**
Assistant Loco Pilot is an A-1 safety category post, the strictest railway medical standard. It requires distance vision of 6/6 in both eyes without glasses, near vision of Sn 0.6 without glasses, and normal colour vision, binocular vision and night vision. Corrective lenses are not permitted, so candidates who need any lens power for distance are not eligible.

**Can I become a loco pilot if I wear glasses?**
No. The A-1 medical standard for Assistant Loco Pilot requires 6/6 distance vision in both eyes without glasses, and lens power is not allowed. Candidates who wear glasses or contact lenses for distance should check their uncorrected vision before investing in preparation, and consider posts with less stringent medical classifications such as several RRB Group D Level 1 categories.

**What is the RRB ALP CBT 1 exam pattern?**
CBT 1 has 75 objective questions for 75 marks in 60 minutes, covering Mathematics, General Intelligence and Reasoning, and General Science, with one third of a mark deducted per wrong answer. General Awareness and Current Affairs was removed from the CBT 1 syllabus for 2026, so material covering it is out of date. CBT 1 is a screening stage and its marks do not count towards final merit.

**What is the RRB ALP CBT 2 exam pattern?**
CBT 2 has two parts on the same day. Part A carries 100 questions in 90 minutes on Mathematics, General Intelligence and Reasoning, and Basic Science and Engineering, and counts for 50 per cent of final merit. Part B carries 75 questions in 60 minutes on your trade, is qualifying only, and needs a minimum of 35 per cent.

**What is the salary of an RRB Assistant Loco Pilot?**
The post is at Level 2 of the 7th CPC matrix with a basic pay of Rs 19,900 a month. The running allowance, paid on a kilometre basis for running duty staff, adds substantially to monthly earnings, alongside dearness allowance, house rent allowance by city class and transport allowance. Railway quarters where available, the travel pass entitlement and railway medical facilities add further value.

**What qualification is needed for RRB ALP 2026?**
Class 10 pass plus an ITI in a relevant trade recognised by NCVT or SCVT, or Class 10 plus a completed apprenticeship, or Class 10 plus a three-year engineering diploma, or an engineering degree. Accepted ITI trades include Electrician, Fitter, Wireman, Mechanic Diesel, Turner, Machinist, Refrigeration and Air Conditioning Mechanic, Electronics Mechanic and Motor Vehicle Mechanic. A trade outside the notified list does not qualify.

**Is there negative marking in RRB ALP?**
Yes in the Computer Based Tests, where one third of a mark is deducted for each wrong answer. There is no negative marking in the Computer Based Aptitude Test. Since the CBAT has no penalty, every item there should be attempted, while the CBTs reward answering only where you know the answer or can narrow the options.

**What is the career path after Assistant Loco Pilot?**
Progression runs through the running cadre: Assistant Loco Pilot, then Loco Pilot Goods, then Loco Pilot Passenger, then Loco Pilot Mail and Express, and onward to Loco Inspector and supervisory grades. Movement is largely seniority-driven with departmental tests and safety clearances at each stage, and both pay and the running allowance increase as you move up the service types.

**Which is better, RRB ALP or RRB Group D?**
They suit different candidates. ALP needs an ITI, diploma or engineering qualification, has a four-stage selection process and demands the A-1 medical with 6/6 uncorrected vision, but pays at Level 2 with a substantial running allowance. Group D needs only Class 10, has a shorter process and less strict medical standards for most posts, and pays at Level 1. A candidate with a relevant ITI and unaided 6/6 vision is better served by ALP; anyone needing glasses should look at Group D.`;

const fields = {
  is_active: true,
  vacancies: 11127,
  post_name: "Assistant Loco Pilot (ALP), CEN 01/2026",
  eligibility: {
    age: "Set by date of birth in CEN 01/2026. Unreserved and EWS: born between 2 July 1996 and 1 July 2008. OBC non-creamy layer: born between 2 July 1993 and 1 July 2008. SC and ST: born between 2 July 1991 and 1 July 2008.",
    education:
      "Class 10 pass plus an ITI in a relevant trade recognised by NCVT or SCVT, OR Class 10 plus a completed apprenticeship, OR Class 10 plus a three-year engineering diploma, OR an engineering degree. Accepted ITI trades include Electrician, Fitter, Wireman, Mechanic Diesel, Turner, Machinist, Refrigeration and Air Conditioning Mechanic, Electronics Mechanic and Motor Vehicle Mechanic.",
    medical:
      "A-1 safety category, the strictest railway medical standard. Distance vision 6/6 in both eyes WITHOUT glasses, near vision Sn 0.6 without glasses, plus normal colour vision, binocular vision and night vision. Corrective lenses are NOT permitted, so candidates needing any lens power for distance are not eligible.",
  },
  salary:
    "Level 2 of the 7th CPC pay matrix, basic pay Rs 19,900 per month, plus a kilometre-based running allowance for running duty staff that adds substantially to monthly earnings, along with dearness allowance, house rent allowance by city class and transport allowance. Railway quarters where available, the travel pass entitlement for employee and family, railway medical facilities, and NPS pension for current recruits. Working conditions involve irregular hours, nights away from home and sustained safety responsibility.",
  application_fee: {
    general: "Rs 500",
    sc_st_exsm_female_transgender_minority_ebc: "Rs 250",
    note: "Railways refunds part of the fee to candidates who appear in CBT 1",
    payment_mode: "Online at rrbapply.gov.in",
  },
  important_dates: {
    notificationDate: "2026-05-14",
    startDate: "2026-05-15",
    lastDate: "2026-06-14",
    applicantsReceived: "8,40,944 candidates applied for 11,127 posts, about 76 per vacancy",
    examDate: "CBT 1 date not yet announced. Watch rrbapply.gov.in and the regional RRB websites",
  },
  how_to_apply:
    "Applications for CEN 01/2026 closed on 14 June 2026. For a future cycle: watch rrbapply.gov.in and the regional Railway Recruitment Board websites for the CEN, register on the RRB Apply portal, complete the application with details exactly as on your Class 10 certificate, check that your ITI trade appears in the notified list before applying, set your zone and post preferences carefully since allocation follows merit and vacancy position, upload photograph and signature in the specified format, pay the fee online (Rs 500 general, Rs 250 for SC, ST, ex-servicemen, female, transgender, minority and EBC candidates, part-refundable on appearing in CBT 1), and save the registration number. Confirm your uncorrected distance vision meets 6/6 before applying, since the A-1 medical does not permit lenses.",
  selection_process:
    "**Stage 1: CBT 1** 75 questions, 75 marks, 60 minutes. Mathematics, General Intelligence and Reasoning, General Science. Negative marking one third per wrong answer. General Awareness was REMOVED from the 2026 syllabus. SCREENING ONLY: marks do not carry to final merit.\n\n**Stage 2: CBT 2** Two parts on the same day. Part A: 100 questions, 90 minutes, Mathematics, General Intelligence and Reasoning, Basic Science and Engineering. Counts for 50 PER CENT OF FINAL MERIT. Part B: 75 questions, 60 minutes, trade-specific. QUALIFYING ONLY, minimum 35 per cent.\n\n**Stage 3: CBAT (Computer Based Aptitude Test)** Mandatory. Tests memory, concentration, perceptual speed, depth perception and direction sense. No negative marking. Minimum standard required in EACH individual test within the battery, not just the aggregate. Counts for 50 PER CENT OF FINAL MERIT (raised from 30 per cent under the old 70:30 rule).\n\n**Stage 4: Document Verification**\n\n**Stage 5: Medical Examination** A-1 standard, 6/6 distance vision without glasses. Pass or fail.\n\nFinal merit = 50 per cent CBT 2 Part A + 50 per cent CBAT.",
  reading_time: "13 min read",
};

await replaceJob({ slug: "rrb-alp-2026", title, description, content, fields });
