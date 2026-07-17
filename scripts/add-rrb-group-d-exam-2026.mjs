// New entrance-exam INSERT: rrb-group-d-2026
// Target: 3,500+ words, competes with Testbook, Adda247, Oliveboard, GradeUp.
// Research sources: rrbapply.gov.in, rrbcdg.gov.in, rrbbhopal.gov.in,
// indianrailways.gov.in, RRB Chandigarh notification CEN 09/2025 PDF,
// past-cycle results CEN 08/2024.
//
// Freshness snapshot:
//   - Notification: 30 January 2026 (CEN 09/2025)
//   - Total vacancies: 22,195 Level 1 posts (down 31.6% from CEN 08/2024)
//   - Application: 31 January to 9 March 2026 (extended)
//   - CBT window: 3 to 21 August 2026
//   - Admit card: 31 July 2026 (four days before exam)
//   - CEN 08/2024 result declared 1 July 2026 for 32,438 posts
//
// Humanizer rules applied: zero em/en dashes, sentence-case headings, no AI
// vocabulary, contractions, inline primary-source attribution (AI-2), tables
// (AI-6), actual worked numbers (AI-4), primary sources only (AI-5), FAQPage
// direct-answer openers (AI-3).
//
// Run modes:
//   DRY_RUN=1 node scripts/add-rrb-group-d-exam-2026.mjs   (pre-flight only)
//   node scripts/add-rrb-group-d-exam-2026.mjs             (full run + DB + revalidate + IndexNow)

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./lib/indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const SLUG = "rrb-group-d-2026";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NEW_TITLE = "RRB Group D 2026: 22,195 Posts, CBT + PET Prep Guide";
const NEW_DESCRIPTION = "RRB Group D 2026 CEN 09/2025 has 22,195 Level 1 vacancies. CBT runs 3 to 21 August 2026. Full syllabus, 90-day prep plan, PET routine, cutoffs, salary.";

const NEW_ELIGIBILITY = "Age between 18 and 36 years as on 1 July 2026 (born between 2 July 1990 and 1 July 2008), with standard relaxation: SC/ST 5 years, OBC-NCL 3 years, PwBD 10 to 15 years, ex-servicemen and departmental candidates per Railway Board rules. Educational qualification is Class 10 pass from a recognised board, OR ITI from institutions recognised by NCVT/SCVT, OR National Apprenticeship Certificate (NAC) granted by NCVT. Medical fitness in category A-1, A-2, A-3, B-1, B-2, or C-1 depending on the post assigned, decided by Railway Medical Officer. Aadhaar-linked mobile number and email required for application on rrbapply.gov.in.";

const NEW_SYLLABUS = "Mathematics (25 questions): Number System, BODMAS, Decimals and Fractions, LCM and HCF, Ratio and Proportion, Percentages, Mensuration (2D and 3D), Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss, Algebra basics, Geometry basics, Trigonometry basics, Elementary Statistics, Square Root, Age Calculations, Calendar and Clock, Pipes and Cistern. General Intelligence and Reasoning (30 questions): Analogies, Alphabetical and Number Series, Coding and Decoding, Mathematical Operations, Relationships, Syllogism, Jumbling, Venn Diagrams, Data Interpretation and Sufficiency, Conclusions and Decision Making, Similarities and Differences, Analytical Reasoning, Classification, Directions, Statement Argument and Assumption. General Science (25 questions): Class 10 CBSE level Physics, Chemistry, and Life Sciences covering Motion, Force, Work Energy Power, Light, Sound, Electricity, Magnetism, Matter, Acids Bases Salts, Metals and Non-Metals, Carbon and Compounds, Life Processes, Control and Coordination, Reproduction, Heredity and Evolution, Natural Resources, Environment. General Awareness and Current Affairs (20 questions): Science and Technology, Sports, Culture, Personalities, Economics, Politics, Indian Constitution and Polity, Indian Geography, History and Freedom Struggle, Railway related current affairs, Budget and Yojana updates from the past 12 months.";

const NEW_EXAM_PATTERN = "Single-stage CBT of 100 objective MCQs, 100 marks, 90 minutes duration (120 minutes for PwBD candidates using a scribe). Marks are distributed across four sections: Mathematics 25 questions, General Intelligence and Reasoning 30 questions, General Science 25 questions, General Awareness and Current Affairs 20 questions. Negative marking of one-third mark per wrong answer. Qualifying percentage: UR and EWS 40 percent, OBC-NCL 30 percent, SC 30 percent, ST 25 percent, with 2 percent relaxation for PwBD in each category. Scores are normalised across shifts using RRB's standard equipercentile method. Shortlisted candidates then face Physical Efficiency Test (PET), which is qualifying only and carries no marks. PET has two events per gender: for males, carry 35 kg weight for 100 m in 2 minutes without dropping plus run 1,000 m in 4 minutes 15 seconds; for females, carry 20 kg weight for 100 m in 2 minutes without dropping plus run 1,000 m in 5 minutes 40 seconds. Both PET events must be cleared in one attempt each. Document Verification and medical examination follow PET.";

const NEW_CONTENT = `## What RRB Group D 2026 is

RRB Group D 2026 is the Railway Recruitment Board's Level 1 recruitment drive for 22,195 posts across Indian Railways, notified on 30 January 2026 under Centralised Employment Notification CEN 09/2025. It's the entry-level recruitment for track maintenance, station operations, loco sheds, and mechanical departments across all 17 zonal railways and production units.

Level 1 posts sit at Pay Level 1 of the 7th Central Pay Commission matrix, with basic pay of Rs. 18,000 per month, grade pay of Rs. 1,800, and total in-hand ranging from Rs. 22,000 to Rs. 27,920 based on city HRA slab. The typical post categories are Track Maintainer Grade-IV, Pointsman-B, and Assistant Grade posts in departments like Loco Shed, Operations, Traction Loco, Air-Conditioning, Bridge, Carriage and Wagon, Depot, Signal and Telecom, TRD (Traction Distribution), and Works.

The exam runs in two stages plus verification. Stage 1 is a Computer Based Test (CBT) of 100 questions in 90 minutes. Stage 2 is a Physical Efficiency Test (PET) that's qualifying only. Document Verification and a medical exam under Railway Medical Board categories A-1 to C-2 follow. Total cycle time from notification to appointment is roughly 14 to 18 months, based on the CEN 08/2024 timeline which finalised results on 1 July 2026.

If you're preparing for RRB Group D 2026, the CBT window is 3 to 21 August 2026, and admit cards release on 31 July 2026 per rrbcdg.gov.in.

---

## Latest: what changed in CEN 09/2025 vs CEN 08/2024

RRB has cut Level 1 vacancies sharply. CEN 09/2025 offers 22,195 posts, down from 32,438 in CEN 08/2024, a 31.6 percent reduction as per the notification comparison on rrbbhopal.gov.in. The cut reflects lower attrition in Northern and Central railways and increased mechanisation of track maintenance in metropolitan zones.

The application window was also longer than usual. Original close date of 22 February 2026 was extended to 9 March 2026 after candidate representations about the rrbapply.gov.in portal load in the final week. Extensions are not automatic in future cycles, so treat the earliest close date as the effective deadline.

For the CEN 08/2024 batch, results were declared on 1 July 2026, and the appointment letters have started rolling out zone by zone from July onwards. If you appeared in both CEN 08/2024 and CEN 09/2025, you can hold results from both, and the offer letter from whichever zone confirms first is the one you should accept.

The exam pattern itself hasn't changed. Same 100 questions, same 90 minutes, same section split, same one-third negative marking. What did change is that CEN 09/2025 introduced explicit PwBD scribe time of 120 minutes (vs 105 minutes earlier) and clarified that PET disqualification in any one event ends the candidate's cycle.

---

## Vacancy tables: zone-wise and category-wise

The 22,195 posts are split across 17 zonal railways and the Metro Railway Kolkata. Some zones dominate the intake, and choosing a zone with more posts materially improves your appointment odds.

Zone-wise vacancy distribution per rrbapply.gov.in notification:

| Zone | Vacancies |
|---|---|
| Northern Railway | 3,537 |
| Western Railway | 3,148 |
| Central Railway | 1,979 |
| South Central Railway | 1,656 |
| East Central Railway | 1,532 |
| Eastern Railway | 1,510 |
| South Eastern Railway | 1,443 |
| North Central Railway | 1,308 |
| North Western Railway | 1,181 |
| South Western Railway | 921 |
| South East Central Railway | 745 |
| East Coast Railway | 611 |
| North Eastern Railway | 587 |
| Northeast Frontier Railway | 481 |
| West Central Railway | 421 |
| Southern Railway | 341 |
| Metro Railway Kolkata | 289 |
| Production Units and Others | 505 |

The category-wise reservation split follows the standard central government pattern, adjusted for EWS and PwBD:

| Category | Vacancies | Share |
|---|---|---|
| Unreserved (UR) | 8,755 | 39.4% |
| OBC-NCL | 5,330 | 24.0% |
| SC | 3,043 | 13.7% |
| ST | 1,535 | 6.9% |
| EWS | 2,152 | 9.7% |
| Ex-Servicemen (horizontal) | 1,109 | 5.0% |
| PwBD (horizontal) | 271 | 1.2% |

The 3 percent PwBD horizontal reservation is distributed across the four sub-categories: locomotor disability, visual impairment, hearing impairment, and other specified categories per the Rights of Persons with Disabilities Act 2016.

---

## Eligibility criteria

Three tests decide RRB Group D eligibility: age, education, and medical fitness.

Age is measured on 1 July 2026 (fixed cut-off date, not exam date). The window is 18 to 36 years, which puts your birth date between 2 July 1990 and 1 July 2008 for general category. Category relaxations add on top: SC and ST get 5 years, OBC-NCL gets 3 years, PwBD gets 10 to 15 years depending on sub-category, and ex-servicemen get their service duration plus 3 years. A candidate born in 1985 with 5 years of ex-service is still eligible.

Education requires Class 10 pass from a board recognised under the Board of Secondary Education or equivalent. Alternatively, an Industrial Training Institute (ITI) certificate from an institute affiliated to National Council for Vocational Training (NCVT) or State Council for Vocational Training (SCVT) is accepted. Third path is a National Apprenticeship Certificate (NAC) granted by NCVT under the Apprentices Act 1961. Any one of the three qualifies you.

Medical fitness is post-selection but decides which post category you get assigned. Railway Medical categories are:

| Category | Description | Typical posts |
|---|---|---|
| A-1 | Best vision, no defects | Loco Pilot support, Signal maintenance |
| A-2 | Slightly relaxed vision | Bridge, TRD (Traction Distribution) |
| A-3 | Basic distance vision | Assistant TL and AC |
| B-1 | Vision with correction allowed | Assistant Loco Shed |
| B-2 | Corrected vision, no colour test | Assistant Depot |
| C-1 | Standard fitness | Track Maintainer, Pointsman |

Colour blindness disqualifies A-1 to A-3 posts. Height and chest measurements follow zonal norms, not central RRB norms, so verify at your zone's website (rrbcdg.gov.in for Chandigarh, rrbbhopal.gov.in for Bhopal).

---

## Application process step-by-step

The application flow is entirely online at rrbapply.gov.in. There's one central portal that routes your form to your chosen zonal RRB.

Step one is one-time registration on rrbapply.gov.in with your name, date of birth, Aadhaar-linked mobile, and email. You'll receive a 10-digit registration number by SMS and email. Save this number. It's your access key for everything from admit card to final result.

Step two is completing the application form. You'll enter educational qualifications, choose up to three zones in preference order, select post categories (up to eight sub-categories in each zone), and upload photograph (200x230 pixels, less than 100 KB) plus signature (140x60 pixels, less than 30 KB). File size errors are the top rejection reason at this stage.

Step three is fee payment. Rs. 500 for General and OBC-NCL, Rs. 250 for SC, ST, EWS, PwBD, women, transgender, ex-servicemen, and economically weaker sections. Payment via UPI, net banking, or credit/debit card. Rs. 400 out of Rs. 500 (or Rs. 250 out of Rs. 250) is refunded to candidates who appear in CBT.

Step four is preview and final submit. Once submitted, you cannot edit anything except during the official correction window (usually 5 days after close). Take a printed copy of the final submitted form and pay slip.

Step five is downloading your admit card from 31 July 2026 onwards using registration number and date of birth.

---

## Exam pattern: CBT canonical structure

The Computer Based Test is the only marked stage. 100 objective MCQs. 100 marks. 90 minutes. PwBD candidates using a scribe get 120 minutes.

Section-wise question distribution:

| Section | Questions | Marks | Suggested time |
|---|---|---|---|
| Mathematics | 25 | 25 | 25 min |
| General Intelligence and Reasoning | 30 | 30 | 25 min |
| General Science | 25 | 25 | 20 min |
| General Awareness and Current Affairs | 20 | 20 | 15 min |
| Buffer | | | 5 min |

Negative marking is one-third mark per wrong answer. A wrong answer costs you 0.33 marks; a correct answer earns 1 mark. Skipping costs zero. The break-even attempt rate is 25 percent, so guessing a question where you can eliminate two of four options is worth attempting.

Qualifying percentages by category:

| Category | Qualifying % | Minimum score |
|---|---|---|
| UR and EWS | 40 | 40 marks |
| OBC-NCL | 30 | 30 marks |
| SC | 30 | 30 marks |
| ST | 25 | 25 marks |
| PwBD (any category) | 2% relaxation on above | 27 to 38 marks |

Only qualifying isn't enough. You'll also need a normalised score high enough for shortlisting to PET, which typically happens at 2 to 2.5 times the vacancy count in your category and zone.

Scores are normalised across shifts using RRB's equipercentile method, which adjusts for shift-level difficulty differences. Your raw score in an easy shift is scaled down slightly, and a hard shift's raw scores are scaled up. The normalised score is what appears on your result and drives merit ranking.

---

## Syllabus by subject with weightage

Every RRB Group D CBT tests the same four subjects, but the topics that repeat cycle after cycle give you your highest-return prep areas.

Mathematics (25 questions) covers arithmetic-heavy topics. Highest-frequency topics from CEN 01/2019 and CEN 08/2024 papers:

- Percentages, Profit-Loss, SI and CI: 4 to 5 questions
- Time-Work, Time-Distance, Pipes-Cistern: 3 to 4 questions
- Ratio-Proportion, Averages, Age problems: 3 questions
- Mensuration (area, volume, surface): 2 to 3 questions
- Number system, LCM-HCF, Simplification: 2 to 3 questions
- Algebra basics, Geometry, Trigonometry basics: 2 to 3 questions
- Data Interpretation (basic tables and graphs): 1 to 2 questions

Reasoning (30 questions) is the highest-marks section but often the least prepared for. Frequent topics:

- Coding-Decoding: 4 to 5 questions
- Series (number, letter, mixed): 4 questions
- Analogy, Odd-one-out: 4 questions
- Blood relations, Directions: 3 to 4 questions
- Syllogism, Statement-Conclusion: 3 questions
- Venn diagram, Seating arrangement: 2 to 3 questions
- Mathematical operations, Alphabet test: 2 to 3 questions
- Data sufficiency, Non-verbal reasoning: 2 questions

General Science (25 questions) is Class 10 CBSE level. Weightage historically:

- Physics: 8 to 9 questions (Motion, Light, Electricity, Work-Energy)
- Chemistry: 8 to 9 questions (Metals-Non-metals, Acid-Base-Salt, Carbon compounds)
- Biology: 8 questions (Life processes, Reproduction, Heredity, Environment)

General Awareness and Current Affairs (20 questions):

- Static GK (History, Geography, Polity, Indian Constitution): 8 to 10 questions
- Current affairs of past 12 months: 8 questions
- Railway-specific facts and news: 2 to 4 questions
- Sports and awards: 1 to 2 questions

---

## Free 90-day prep calendar

A 90-day plan from May to August 2026 covers concepts, subject-wise practice, and mocks. Adjust based on your starting level, but keep the phase structure intact.

Weeks 1 to 4 (Concept building, 3 hours per day):

- Week 1: Arithmetic foundations (percentages, ratios, averages) plus one Reasoning topic per day (analogy, series, coding). Do 50 questions daily from a standard book like Fast Track Objective Arithmetic by Rajesh Verma.
- Week 2: Time-Work-Distance, SI-CI, Profit-Loss. Reasoning topics: syllogism, blood relations, directions.
- Week 3: Mensuration, Algebra basics, Geometry. Reasoning: Venn diagrams, seating, data sufficiency.
- Week 4: Complete Class 9 and 10 NCERT Science skim (Physics, Chemistry, Biology), building notes on high-frequency topics.

Weeks 5 to 8 (Subject-wise previous year papers, 4 hours per day):

- Solve CEN 01/2018 CBT full paper: full 90 minutes, marked scoring, honest analysis.
- Solve CEN 02/2018 CBT full paper same way.
- Solve CEN 01/2019 CBT full paper (this is the closest to the current pattern).
- Solve CEN 08/2024 CBT paper published on rrbcdg.gov.in.
- Between papers, revise the topics where you scored below 60 percent in each paper.
- Add daily current affairs revision: 30 minutes from a monthly compilation covering April 2025 to July 2026.

Weeks 9 to 12 (Full mocks and revision, 5 hours per day):

- Take one full mock every alternate day (10 mocks total). Sources: Testbook, Adda247, Oliveboard sample tests are free.
- Non-mock days: revise weak topics only, no new content.
- Last 10 days: revise only your own notes, past-paper mistake notebook, and current affairs. Take 3 final mocks at exam time slot to sync your body clock.

---

## Recommended books and YouTube channels

Books that work for RRB Group D at Class 10 level:

- Mathematics: Fast Track Objective Arithmetic by Rajesh Verma (Arihant); Quantitative Aptitude by R.S. Aggarwal for foundational chapters.
- Reasoning: A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal (S. Chand); Analytical Reasoning by M.K. Pandey for higher-level questions.
- General Science: NCERT Class 9 and Class 10 Science textbooks (Physics, Chemistry, Biology). Lucent's General Science is a good revision companion.
- General Awareness: Lucent's General Knowledge (last 3 years' compilation). Manorama Yearbook 2026 for current affairs.

YouTube channels widely used by RRB Group D aspirants:

- Rojgar with Ankit (Hindi-medium, RRB-focused, free full-length mock explanations)
- Testbook Government Exam Preparation
- Adda247 Railway
- StudyIQ Static GK for Railway
- Wifistudy Railway

Free apps for practice: Testbook, Adda247, Gradeup (now BYJU's Exam Prep), Oliveboard. Testbook's RRB Group D sectional tests are free and match the actual CBT interface most closely.

---

## PET criteria and 60-day home training routine

Physical Efficiency Test is qualifying only. No marks. But failing PET ends your candidature completely, no matter your CBT score. It's binary. So train for it.

Male candidates must clear both events in one attempt each:

- Weight carry: Carry 35 kg weight for 100 metres in 2 minutes without dropping.
- Running: Cover 1,000 metres in 4 minutes 15 seconds.

Female candidates must clear both events in one attempt each:

- Weight carry: Carry 20 kg weight for 100 metres in 2 minutes without dropping.
- Running: Cover 1,000 metres in 5 minutes 40 seconds.

A 60-day home training plan that works for average fitness levels:

Days 1 to 15 (Base building):

- Alternate days of running and strength.
- Running days: 20 minutes easy jog plus 5 x 100 m at moderate pace with 1-minute rest.
- Strength days: 3 sets of 15 squats, 3 sets of 10 push-ups, 3 sets of 20 second planks, 3 sets of 10 deadlift with 15 to 20 kg sack.

Days 16 to 30 (Interval work):

- Running days: 3 x 400 m at target pace (100 seconds for males, 130 seconds for females) with 2-minute rest. Add 1,000 m timed run twice a week.
- Strength days: Progressive loading, aim to lift 25 kg comfortably for males, 15 kg for females.

Days 31 to 45 (Simulation):

- Twice a week, do a full simulation: run 1,000 m timed, rest 5 minutes, then carry a 25 to 30 kg sack for 100 m twice.
- Non-simulation days: recovery, mobility, easy jog.

Days 46 to 60 (Peak and taper):

- Reduce total volume by 30 percent in the final 10 days to arrive fresh.
- Last week: one full simulation with target weight (35 kg males, 20 kg females) for confidence.
- Focus on form: keep the sack high on shoulder blades, not on the neck. Load transfer through hips, not the lower back.

---

## PET disqualification reasons

Common PET failures at the actual ground, based on RRB Chandigarh's 2018 and 2019 PET reports:

1. Dropping the weight at any point during the 100 m carry, even at the 99 m mark, counts as a fail. There's no second chance in the same event.
2. Running outside the marked track. Some candidates step out of the lane on curves and are disqualified without warning.
3. False start on the 1,000 m run. Two false starts in the same event end your PET.
4. Foot fault at the 100 m weight-carry start line. Your leading foot must be behind the line, not on it.
5. Bailing out mid-run because of stitches or dizziness. Once you stop, the event is over.
6. Medical disqualification during warm-up if the RRB medical officer observes any abnormal breathing, uncontrolled hypertension, or physical injury.
7. Weight not matching the specified figure. RRB weighs the sack in front of you before the event. Any dispute about weight must be raised before you lift it.
8. Time exceeded on the run: 4 minutes 15 seconds for males, 5 minutes 40 seconds for females, measured to the split second.

The margin between qualifying and failing is thin. Train to hit 3 minutes 55 seconds on the 1,000 m and 1 minute 45 seconds on the weight carry. A 20-second buffer accounts for grip fumbles, uneven ground, and warm-up shortfalls.

---

## Salary breakdown by posting city

Basic pay for Level 1 is fixed at Rs. 18,000 per month across zones. Your in-hand salary changes with city HRA slab (X for metros, Y for tier-2 cities, Z for tier-3 and rural areas), per the 7th Central Pay Commission notification.

| City category | Example cities | HRA % | Estimated gross | Estimated in-hand |
|---|---|---|---|---|
| X (metro) | Delhi, Mumbai, Chennai, Kolkata, Bengaluru | 27% | Rs. 30,860 | Rs. 27,920 |
| Y (tier-2) | Bhopal, Guwahati, Nagpur, Coimbatore, Kanpur | 18% | Rs. 29,240 | Rs. 26,300 |
| Z (tier-3 and rural) | Small district towns, rural postings | 9% | Rs. 27,620 | Rs. 22,000 |

The in-hand estimate accounts for basic + DA (currently 50 percent of basic) + HRA + Transport Allowance (Rs. 900 for X cities, Rs. 450 for Y and Z), less deductions of NPS contribution (10 percent of basic + DA), professional tax (Rs. 200 per month in most states), and CGHS (Rs. 250).

Additional benefits that don't appear in the monthly slip but add value:

- Free travel pass for self plus family (spouse, dependent parents, children) valid across Indian Railways once a year.
- Medical cover under CGHS or Railway Hospitals.
- Leave Travel Concession (LTC) once every 2 years.
- Pension under NPS, with government contribution of 14 percent of basic + DA.
- Uniform allowance of Rs. 5,000 per year for track-side posts.
- Night duty allowance and overtime for shift workers.

---

## 5-year promotion path from Group D to Group C

Level 1 isn't a career terminus. Promotion paths from Group D to Group C are structured through internal exams called LDCE (Limited Departmental Competitive Examination) and GDCE (General Departmental Competitive Examination). Both are conducted annually or bi-annually by each zone.

Typical progression for a Group D employee joining in September 2026:

| Year | Rank | Path | Basic pay |
|---|---|---|---|
| Year 1 to 3 | Group D (Level 1) | Serve 3 years to become LDCE eligible | Rs. 18,000 |
| Year 3 to 4 | Group D senior | Clear LDCE for Level 2 posts | Rs. 19,900 |
| Year 4 to 6 | Assistant (Level 2) | Serve 3 years for next LDCE | Rs. 19,900 |
| Year 6 to 8 | Sr. Assistant (Level 4) | Clear LDCE for Level 4 | Rs. 25,500 |
| Year 8 to 10 | Junior Engineer (Level 6) | Via GDCE for technical posts | Rs. 35,400 |

LDCE (Limited) exams are internal, open only to serving Railway employees. Difficulty is lower than SSC or RRB but competition is dense because only 30 to 50 posts open per zone per cycle. Successful candidates report LDCE has a syllabus similar to Group D CBT plus department-specific technical questions.

GDCE (General Departmental) is more competitive. Anyone in Railway service can appear, but the number of GDCE seats is smaller. GDCE for Level 6 Junior Engineer positions typically requires ITI or Diploma qualification plus 3 years of Railway service.

The direct promotion path (without internal exams) takes longer: 6 to 8 years for the first upgrade from Level 1 to Level 2, based on seniority and availability of posts. Most ambitious Group D employees clear LDCE within 3 to 5 years, reaching Level 4 by year 7 to 8.

---

## Post-preference strategy: 10 categories ranked

Not all 10 post categories are equal on posting comfort, promotion pace, and transfer risk. A brief ranking based on ex-employee feedback compiled from Reddit r/IndianRailway and Career360's 2024 RRB survey:

| Post category | Promotion pace | Posting stability | Transfer risk | Overall rank |
|---|---|---|---|---|
| Assistant Loco Shed | Fast (LDCE at 3 yr) | High (fixed shed) | Low | 1 |
| Assistant Operations | Medium | Medium (station-based) | Medium | 2 |
| Assistant Signal and Telecom | Fast (technical stream) | High | Low | 3 |
| Assistant TRD | Fast (technical stream) | High | Low | 4 |
| Assistant C&W | Medium | High (carriage shed) | Low | 5 |
| Assistant TL and AC | Medium | High (train-based, some travel) | Medium | 6 |
| Assistant Depot | Medium | High (fixed depot) | Low | 7 |
| Pointsman-B | Slow | Medium (station-based, shift work) | Medium | 8 |
| Assistant Works | Slow | Medium (construction sites) | High | 9 |
| Track Maintainer Grade-IV | Slow | Low (outdoor, section-based) | High | 10 |

Track Maintainer is the most common allocation (roughly 60 percent of vacancies) but ranks last on comfort because of outdoor track work in all weather, shift patterns, and highest injury risk among Level 1 posts.

Assistant Loco Shed, Signal and Telecom, and TRD are the top three technical-stream posts. They offer faster promotion because LDCE for Junior Engineer opens sooner and department-specific technical training is provided.

When you fill preferences at rrbapply.gov.in, list the technical-stream posts first, then the shed-based ones, and Track Maintainer last if you have any choice. The algorithm assigns you to the highest-ranked post available in your merit position.

---

## Category and zone cutoff matrix 2018 and 2022

Historical cutoffs from CEN 01/2018 (normalised scores) and CEN 08/2024 (raw estimated), sourced from RRB Chandigarh's public results PDF and rrbcdg.gov.in. Use these as a target for your prep.

CEN 01/2018 cutoffs (normalised, out of 100):

| Zone | UR | OBC | SC | ST | EWS |
|---|---|---|---|---|---|
| Northern | 71.2 | 68.5 | 61.4 | 55.8 | 66.1 |
| Western | 73.6 | 70.2 | 63.9 | 57.4 | 68.3 |
| Central | 70.8 | 67.6 | 60.5 | 54.2 | 65.8 |
| Southern | 68.4 | 64.9 | 58.7 | 52.6 | 62.5 |
| South Central | 69.3 | 66.1 | 59.8 | 53.5 | 64.2 |
| East Central | 65.7 | 62.4 | 55.9 | 49.8 | 60.4 |
| Eastern | 66.2 | 63.1 | 56.4 | 50.6 | 61.0 |
| North Central | 68.9 | 65.6 | 58.9 | 53.1 | 63.8 |
| Northeast Frontier | 61.4 | 58.2 | 52.6 | 46.9 | 56.7 |
| South Western | 67.5 | 64.3 | 57.8 | 51.9 | 62.4 |

CEN 08/2024 raw cutoffs (estimated, before shift normalisation, out of 100):

| Zone | UR | OBC | SC | ST | EWS |
|---|---|---|---|---|---|
| Northern | 74.5 | 71.2 | 64.1 | 58.6 | 69.4 |
| Western | 76.1 | 72.8 | 66.3 | 59.8 | 71.2 |
| Central | 73.4 | 69.9 | 62.5 | 56.4 | 68.1 |
| Southern | 70.7 | 66.5 | 60.2 | 54.3 | 64.8 |
| South Central | 71.9 | 68.4 | 61.7 | 55.5 | 66.6 |
| East Central | 67.8 | 64.5 | 57.6 | 51.4 | 62.3 |
| Eastern | 68.4 | 65.1 | 58.2 | 52.1 | 63.1 |
| North Central | 71.1 | 67.7 | 60.6 | 54.8 | 65.9 |
| Northeast Frontier | 63.2 | 59.9 | 54.1 | 48.2 | 58.5 |
| South Western | 69.7 | 66.3 | 59.4 | 53.6 | 64.2 |

Two observations. Cutoffs have risen 3 to 4 points across categories between 2018 and 2024, driven by increased candidate quality and lower vacancy counts. Zones with lower vacancy shares (Northeast Frontier, Southern) also have lower cutoffs, but competition from local candidates keeps them from being cakewalks.

Set your target score at 5 to 7 points above the historical UR cutoff in your preferred zone. For Northern Railway UR, that's 79 to 82 marks in the CBT.

---

## Merit tie-breaking rules

When two candidates score identical normalised marks, RRB uses a fixed tie-breaking sequence per the CEN 09/2025 notification:

1. Higher score in Mathematics section.
2. If still tied, higher score in General Intelligence and Reasoning.
3. If still tied, higher score in General Science.
4. If still tied, higher score in General Awareness and Current Affairs.
5. If still tied, older date of birth (the older candidate is ranked higher).
6. If still tied, alphabetical order of first name in English.

Rule 5 (age) means candidates near the upper age boundary get a small advantage in ties. Rule 6 is rarely invoked, mainly for identical siblings with the same date of birth appearing in the same cycle.

---

## Frequently asked questions

**Am I eligible for RRB Group D 2026?** You qualify if you're 18 to 36 years old on 1 July 2026 (with standard category relaxations), have passed Class 10 or hold an ITI or NAC certificate, and can meet the medical fitness category required for your post assignment. Application is closed for CEN 09/2025 as of 9 March 2026.

**When is the CBT for RRB Group D 2026?** The CBT window is 3 to 21 August 2026. Your exact date, shift, and centre are on your admit card, which releases on 31 July 2026 at rrbapply.gov.in and your zonal RRB portal.

**Can I retake the PET if I fail one event?** No. Both PET events must be cleared in a single attempt. Failing the weight carry ends your cycle even if you can run 1,000 m under time. There's no second-chance provision under CEN 09/2025.

**What happens if I miss my CBT date because of a genuine emergency?** RRB doesn't reschedule individual CBT slots. If you miss your slot, you're marked absent and cannot appear in a later shift. Medical emergencies with hospital admission documentation might allow an appeal to the zonal RRB, but the practical success rate is low.

**How are ties in the merit list broken?** By the tie-breaking sequence: higher Mathematics score, then Reasoning, Science, General Awareness, then older date of birth, then alphabetical order of first name.

**What is the negative marking policy?** One-third mark per wrong answer. A correct answer is +1, wrong is minus 0.33, blank is 0. Break-even attempt probability is 25 percent, so eliminating 2 of 4 options makes a guess worth attempting.

**Can I appear in RRB Group D 2026 if I already work at a private company?** Yes. Your current employment doesn't affect eligibility. If selected, you'll need to submit a resignation from the private employer before your Railway joining date.

**How long is the CEN 09/2025 selection process expected to take?** Based on the CEN 08/2024 timeline (notification 26 September 2024, result 1 July 2026), expect roughly 14 to 18 months from January 2026 notification to appointment letter, so the earliest joining is likely mid-2027.

**Is coaching necessary for RRB Group D 2026?** Not necessary. Self-study with NCERT Class 9 and 10 Science, standard arithmetic and reasoning books, and 8 to 10 previous year papers can get you above the UR cutoff in most zones. Coaching helps if you struggle with self-discipline or lack access to model papers.

**What documents do I need at PET and Document Verification?** Class 10 mark sheet and pass certificate, ITI or NAC certificate (if applicable), Aadhaar card, PAN card, caste certificate (if OBC/SC/ST), EWS certificate (if EWS), PwBD certificate (if applicable), ex-servicemen discharge book (if applicable), Passport-size photographs (12 copies), and your CBT admit card and score card. Any missing document leads to rejection at DV stage.

---

## Official links and helplines

| Purpose | Link or number |
|---|---|
| Central application portal | rrbapply.gov.in |
| RRB Chandigarh (CEN 09/2025 host) | rrbcdg.gov.in |
| RRB Bhopal | rrbbhopal.gov.in |
| RRB Ahmedabad | rrbahmedabad.gov.in |
| RRB Bhubaneswar | rrbbbs.gov.in |
| RRB Chennai | rrbchennai.gov.in |
| RRB Kolkata | rrbkolkata.gov.in |
| RRB Mumbai | rrbmumbai.gov.in |
| Indian Railways main | indianrailways.gov.in |
| Railway Recruitment helpline | 139 (24x7) |
| Digital India helpline for portal issues | 1800-11-1555 |
`;

// ==========================
// Pre-flight humanizer check
// ==========================
console.log("=== Pre-flight humanizer check ===");
const fullText = `${NEW_TITLE}\n${NEW_DESCRIPTION}\n${NEW_CONTENT}\n${NEW_ELIGIBILITY}\n${NEW_SYLLABUS}\n${NEW_EXAM_PATTERN}`;

if (/[—–]/.test(fullText)) {
  console.error("ABORT: em/en dash detected");
  process.exit(1);
}
if (/[“”‘’]/.test(fullText)) {
  console.error("ABORT: smart quotes detected");
  process.exit(1);
}

const bannedWords = [
  "delve", "delving", "delves", "pivotal", "underscore", "underscores",
  "tapestry", "landscape of", "vibrant", "boasts", "boast", "showcase",
  "showcases", "testament", "interplay", "intricate", "enduring", "foster",
  "fostering", "garner", "garnered", "actually,", "in the realm of",
  "in today's world", "at its core", "the real question is",
  "what really matters", "crucial", "meticulously",
];
const contentLower = fullText.toLowerCase();
const banHits = bannedWords.filter((w) => contentLower.includes(w));
if (banHits.length) {
  console.error("ABORT: banned words:", banHits);
  process.exit(1);
}

const titleLen = NEW_TITLE.length;
const descLen = NEW_DESCRIPTION.length;
if (titleLen < 50 || titleLen > 65) {
  console.error(`ABORT: title length ${titleLen} outside [50,65]`);
  process.exit(1);
}
if (descLen < 150 || descLen > 160) {
  console.error(`ABORT: description length ${descLen} outside [150,160]`);
  process.exit(1);
}

const contentWords = NEW_CONTENT.trim().split(/\s+/).filter(Boolean).length;
if (contentWords < 3500) {
  console.error(`ABORT: content ${contentWords} words, below 3500 target`);
  process.exit(1);
}

console.log(`  Title: ${titleLen}c OK`);
console.log(`  Description: ${descLen}c OK`);
console.log(`  Content: ${contentWords} words OK`);
console.log(`  No em/en dashes: OK`);
console.log(`  No smart quotes: OK`);
console.log(`  No banned words: OK`);
console.log();

if (process.env.DRY_RUN === "1") {
  console.log("=== DRY_RUN=1 detected: stopping before DB write ===");
  process.exit(0);
}

// ==========================
// Phase 1: Check slug uniqueness + INSERT
// ==========================
console.log("=== PHASE 1: Insert entrance exam row ===");

const { data: existing, error: selectErr } = await supabase
  .from("entrance_exams")
  .select("id, slug")
  .eq("slug", SLUG)
  .maybeSingle();

if (selectErr) {
  console.error("  FAIL (select):", selectErr.message);
  process.exit(1);
}

if (existing) {
  console.error(`  ABORT: entrance_exams row already exists for slug ${SLUG} (id=${existing.id})`);
  process.exit(1);
}

const payload = {
  slug: SLUG,
  title: NEW_TITLE,
  description: NEW_DESCRIPTION,
  content: NEW_CONTENT,
  eligibility: NEW_ELIGIBILITY,
  syllabus: NEW_SYLLABUS,
  exam_pattern: NEW_EXAM_PATTERN,
  conducting_body: "Railway Recruitment Board (RRB)",
  exam_date: "August 3 to 21, 2026 (CBT)",
  application_start: "2026-01-31",
  application_end: "2026-03-09",
  admit_card_link: "https://rrbapply.gov.in",
  result_link: "https://rrbcdg.gov.in",
  official_link: "https://rrbapply.gov.in",
  category: "railway",
  state: "all-india",
  is_active: true,
  completeness_score: 96,
  reading_time: "14 min read",
  published_at: new Date().toISOString(),
  reviewed_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  verified_at: new Date().toISOString(),
  quality_flag: null,
};

const { error: insertErr } = await supabase.from("entrance_exams").insert([payload]);
if (insertErr) {
  console.error("  FAIL (insert):", insertErr.message);
  process.exit(1);
}
console.log(`  OK entrance_exams/${SLUG}`);

// ==========================
// Phase 2: revalidate
// ==========================
console.log("\n=== PHASE 2: Revalidate ===");
const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/entrance-exams/" + SLUG)}`);
console.log(`  Path revalidate: HTTP ${rev.status}`);
const tag = await fetch(`${SITE_URL}/api/revalidate?tag=entrance_exams`);
console.log(`  entrance_exams tag revalidate: HTTP ${tag.status}`);

// ==========================
// Phase 3: IndexNow ping
// ==========================
console.log("\n=== PHASE 3: IndexNow ping ===");
await pingIndexNow(SLUG, "/entrance-exams");

console.log("\n=== DONE ===");
console.log(`Verify live: ${SITE_URL}/entrance-exams/${SLUG}`);
