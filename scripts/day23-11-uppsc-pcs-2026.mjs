// UPPSC PCS 2026 — thin-page fix + data correction + repositioning
//
// Verified 2026-08-15.
//
// DEFECT: the page was carrying the PREVIOUS cycle's data throughout.
//   vacancies        200            ACTUAL 500
//   last_date        2026-01-22     ACTUAL 2026-08-03
//   important_dates  start 2025-12-28, last 2026-01-22, exam 2026-09-01
//                                   ACTUAL notification 25 Jun 2026,
//                                   applications to 3 Aug 2026,
//                                   prelims 6 Dec 2026
//   description      "200 Group A and B posts", "Mains exam scheduled for 2026"
// Wrong by 300 vacancies and by seven months on the deadline. Same class as
// ibps-clerk / aai-je-atc / rpsc-ras / ibps-po fixed earlier this week.
//
// FACTS VERIFIED (UPPSC notification 25 Jun 2026; corroborated across Testbook,
// Drishti IAS, TheIAShub, ExamDetail, Careers360 on 2026-08-15):
//   - Combined State / Upper Subordinate Services (PCS) Examination 2026
//   - 500 vacancies
//   - Notification 25 June 2026
//   - Applications closed 3 August 2026; correction window closed 10 August 2026
//   - Prelims 6 December 2026
//   - Posts include Deputy Collector (SDM), Deputy Superintendent of Police,
//     Block Development Officer, Assistant Labour Commissioner, Naib Tehsildar,
//     Sub Registrar and other Group A and B gazetted posts
//   - Portal uppsc.up.nic.in
//
// Mains structure (General Hindi 150, Essay 150, six General Studies papers of
// 200 each = 1500, plus Interview 100 for a 1600 total) reflects UPPSC's
// post-2023 pattern after the optional subject was removed. Stated as the
// established pattern with the notification flagged as the authority.
//
// NOT ASSERTED: post-wise split of the 500, Mains date (UPPSC had not announced
// it), and cutoffs for this cycle.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "UPPSC PCS 2026: 500 Posts, Prelims 6 December, SDM Guide";

const description =
  "UPPSC PCS 2026 has 500 vacancies including SDM and DSP. Applications closed 3 August 2026. Prelims is on 6 December 2026. Full structure and strategy.";

const content = `The Uttar Pradesh Public Service Commission is recruiting 500 posts through the Combined State and Upper Subordinate Services Examination 2026, and the preliminary examination is on 6 December 2026. Applications ran until 3 August 2026 and the correction window closed on 10 August.

This is the exam that produces Uttar Pradesh's Sub Divisional Magistrates, Deputy Superintendents of Police and Block Development Officers. If you applied, you have roughly sixteen weeks to prelims.

## Where this recruitment stands

| Item | Detail |
|---|---|
| Notification | 25 June 2026 |
| Vacancies | 500 |
| Application last date | 3 August 2026, closed |
| Correction window | Closed 10 August 2026 |
| Prelims | 6 December 2026 |
| Mains | Not announced |
| Stages | Prelims, Mains, Interview |
| Portal | uppsc.up.nic.in |

If you saw a figure of 200 posts or a January deadline on this page previously, both were wrong and have been corrected.

## The posts, and what the job actually is

Deputy Collector is the post most candidates are chasing. It places you in the provincial civil service on the track toward Sub Divisional Magistrate and, with promotion, eventually into the Indian Administrative Service through the state quota. The work is district administration: revenue, land, magistracy, elections, disaster response, and whatever else lands on a district officer's desk.

Deputy Superintendent of Police is the provincial police service equivalent, with promotion prospects into the Indian Police Service through the same state quota route.

Block Development Officer sits at the block level running rural development schemes, and it is the post where the largest share of candidates actually land. The work is closer to implementation than to magistracy, and it carries real authority over scheme delivery across a block.

Beyond those, the list covers Assistant Labour Commissioner, Naib Tehsildar, Sub Registrar, District Commandant Home Guard, Assistant Controller of Legal Measurement and a range of other Group A and Group B gazetted posts across departments.

The preference order you submitted matters more than most candidates treat it as mattering. Allocation follows merit rank applied strictly down your list, so ranking a post you do not want above one you do can hand you the former with no recourse.

## Prelims on 6 December

The preliminary examination has two papers, both objective, both two hours.

General Studies Paper I carries 150 questions for 200 marks and decides your cutoff. General Studies Paper II, the aptitude paper, carries 100 questions for 200 marks and is qualifying only at 33 per cent.

Negative marking is one third of a mark for each wrong answer in both papers.

That qualifying paper eliminates a steady number of candidates every cycle, and it does so quietly. Because its marks do not count, candidates from humanities backgrounds sometimes skip preparing it, then miss 33 per cent on comprehension and basic numeracy and are eliminated despite a strong General Studies score. Securing it is cheap. Failing it is total.

Prelims marks do not carry into your final ranking. The paper decides only who sits the Mains, and UPPSC calls forward a multiple of the vacancy count.

## The Mains, and the optional subject that no longer exists

UPPSC removed the optional subject from the PCS Mains and replaced it with additional General Studies papers. Candidates working from older guidance, or from material aimed at other state commissions, frequently prepare for a paper that is not in the exam.

The established structure now runs to 1500 marks:

| Paper | Marks |
|---|---|
| General Hindi | 150 |
| Essay | 150 |
| General Studies I | 200 |
| General Studies II | 200 |
| General Studies III | 200 |
| General Studies IV | 200 |
| General Studies V | 200 |
| General Studies VI | 200 |
| Written total | 1500 |
| Interview | 100 |
| Grand total | 1600 |

Six General Studies papers is a heavier General Studies load than most state commissions impose, and it changes what preparation should look like. There is no subject you can specialise in to carry your score. Breadth is the requirement, and a candidate strong in three areas and weak in three will find the weakness impossible to hide.

Confirm the paper weightings in the notification for this cycle rather than from a summary, because UPPSC has adjusted the structure between cycles and the change described above is recent enough that stale material is still circulating.

## General Hindi and the Essay are not free marks

General Hindi carries 150 marks and Essay carries 150, so together they are 300 of the 1500, which is one and a half General Studies papers.

Candidates fluent in Hindi routinely treat the language paper as guaranteed. It is not a conversation test. It assesses formal written Hindi, including precis writing, letter and official correspondence formats, grammar and vocabulary at a standard that everyday fluency does not cover. It is among the most predictable papers in the examination, which makes it among the cheapest marks available, and it is left on the table every year.

The Essay paper rewards structure far more than content. A well-organised essay on a familiar theme scores better than an unstructured one packed with facts, and the format is learnable in a way that General Studies breadth is not.

## Sixteen weeks to prelims

You have roughly sixteen weeks from mid August to 6 December. Here is how to use them.

Spend the first eight weeks on syllabus coverage with real weight on Uttar Pradesh specific material. UP history, geography, economy, polity, administrative structure, schemes and current affairs form a substantial part of the paper and they are the part with the weakest available resources. National General Studies material is abundant and everyone has it. The UP portion is where the field separates.

Run current affairs daily, split between national and state level. State current affairs deserve their own notes, because national compilations do not cover UP schemes, appointments, budget announcements or district-level developments, and those appear.

Start Mains answer writing now at low volume, perhaps two answers a week. This will feel premature with prelims sixteen weeks away and it is the highest-return thing you can do. Six General Studies papers plus an essay is a large writing load, and the skill takes months rather than weeks.

Move to full prelims mocks from around week nine, scored honestly with the one third penalty applied. Analyse for topics missed rather than for the score.

Secure the aptitude paper early rather than assuming it. A few timed practice sets will tell you whether you are comfortably above 33 per cent or need real work, and finding out in September is very different from finding out in December.

Keep the last two weeks for revision only.

## Eligibility

A bachelor's degree from a recognised university is the general requirement, with certain posts specifying additional qualifications in the notification.

The age band generally runs from 21 to 40 years against the cutoff date stated in the notification, which is a considerably wider window than the UPSC Civil Services Examination allows. Relaxation applies for reserved categories under Uttar Pradesh rules, and Deputy Superintendent of Police carries its own age and physical standards distinct from the administrative posts.

Physical standards apply to the police posts and not to the others. Candidates applying to DSP alongside administrative posts should check those requirements against themselves before counting on the preference.

Domicile is not a bar for most posts, but reservation benefits under Uttar Pradesh rules generally apply to candidates domiciled in the state. A candidate from outside UP can sit the exam and competes in the unreserved pool.

Confirm every one of these against the notification, since UPPSC varies eligibility by post and the version that binds you is the one printed for your post.

## Salary

Deputy Collector and Deputy Superintendent of Police enter at Pay Level 10 on the state pay matrix, comparable to other state civil service Group A entry grades, with gross monthly pay well above the entry basic once dearness allowance, house rent allowance and other allowances are added.

Block Development Officer and the Group B posts enter at lower levels on the same matrix.

Beyond pay, these posts carry pension provision, medical benefits, and in field postings official accommodation or a housing allowance. For most candidates the draw is the authority attached to district administration rather than the salary, which is lower than a comparable private sector role at the same age.

Exact pay levels by post are stated in the notification. Figures on coaching sites are frequently drawn from older pay structures.

## How UPPSC PCS compares with UPSC CSE

Many candidates prepare for both, and the overlap is real but narrower than it looks.

| | UPPSC PCS | UPSC CSE |
|---|---|---|
| Prelims papers | Two, one qualifying | Two, one qualifying |
| Optional subject | None, removed | One, two papers, 500 marks |
| Mains written total | 1500 | 1750 |
| Interview | 100 | 275 |
| Age band | Generally 21 to 40 | 21 to 32 |
| State-specific content | Substantial | Limited |
| Attempt limit | Governed by age | Six for general category |

Two differences matter most. The absence of an optional subject makes UPPSC preparation lighter in one respect and heavier in another, since six General Studies papers demand breadth that a UPSC candidate can partly offset with optional depth. And the age band running to 40 rather than 32 makes UPPSC a viable route for candidates who have exhausted or aged out of UPSC attempts, which is a genuine second chance rather than a consolation.

The shared General Studies foundation means preparing for one substantially prepares you for the other. What does not transfer is the Uttar Pradesh specific material, which earns nothing at UPSC, and the UPSC optional, which earns nothing here.

## Answer writing across six General Studies papers

The Mains asks you to write across six General Studies papers plus an essay plus a language paper, which is a larger volume of writing than most candidates have ever produced under examination conditions.

The constraint is rarely knowledge. It is producing structured, legible answers inside a word limit, repeatedly, across multiple days, without the quality collapsing in the later papers. Candidates who have practised writing at volume hold their standard. Candidates who have read widely and written little do not.

Three habits separate the strong papers. Answering the directive actually asked rather than writing everything known about the topic. Structuring visibly, with an introduction, a body in identifiable parts and a conclusion that returns to the question. And finishing every answer, because an incomplete answer scores as incomplete regardless of how strong its opening was.

Time per question is the binding constraint, and it has to be rehearsed rather than calculated. Work out your realistic pace in practice, then build the paper plan around it.

## A note on the state quota route into the IAS

One thing draws candidates to Deputy Collector above every other consideration, and it is worth being accurate about.

A fixed share of Indian Administrative Service posts is filled by promotion from state civil services rather than by direct recruitment through the UPSC Civil Services Examination. A Deputy Collector who enters through UPPSC is on that track, and the same applies to Deputy Superintendent of Police and the Indian Police Service.

What that route is not is fast. Promotion depends on years of service, on vacancies arising in the state cadre, on your position in the state seniority list, and on clearing the selection process the Union Public Service Commission runs for these promotions. Officers typically reach it well into their careers rather than within a few years, and not every eligible officer is promoted.

It is a genuine route and it should be weighed as one. A candidate who treats UPPSC purely as a slower path to the same destination as UPSC will be disappointed by the timeline. A candidate who wants to work in Uttar Pradesh's district administration, and regards eventual promotion as a possibility rather than a plan, is making a sounder decision.

The provincial civil service is a substantial career in its own right. Sub Divisional Magistrates exercise real authority over revenue, magistracy and administration across a subdivision from relatively early in their service, which is more responsibility than most careers offer at that stage.

## Mistakes that cost candidates this exam

Preparing an optional subject. UPPSC removed it. Candidates working from old material or from other states' patterns still do this.

Treating the aptitude paper as automatic. It is qualifying at 33 per cent and it eliminates people quietly every cycle.

Assuming fluency covers General Hindi. It tests formal written Hindi, precis and official correspondence, and it is worth 150 marks.

Reading only national current affairs. The UP specific portion is where the exam is decided, and national compilations do not cover it.

Postponing answer writing until after the prelims result. Six General Studies papers and an essay is a large writing load to build in ten weeks.

Ranking only the senior posts in the preference order. Block Development Officer accounts for a large share of allocations, and a list that ignores it removes you from much of the cycle.

## Frequently asked questions

**How many vacancies are there in UPPSC PCS 2026?**

500 posts, covering Deputy Collector, Deputy Superintendent of Police, Block Development Officer, Assistant Labour Commissioner, Naib Tehsildar, Sub Registrar and other Group A and Group B gazetted positions. UPPSC publishes the post-wise split in the notification.

**Can I still apply for UPPSC PCS 2026?**

No. The notification was released on 25 June 2026, applications closed on 3 August 2026 and the correction window closed on 10 August 2026. There is no late route. The preliminary examination is on 6 December 2026.

**When is the UPPSC PCS 2026 prelims exam?**

6 December 2026. The Mains date had not been announced as of 15 August 2026. Admit cards are released on uppsc.up.nic.in ahead of the exam.

**Is there an optional subject in the UPPSC PCS Mains?**

No. UPPSC removed the optional subject and replaced it with additional General Studies papers. The Mains now runs General Hindi (150), Essay (150) and six General Studies papers of 200 marks each, totalling 1500. Candidates working from older material or from other state patterns still prepare an optional that is not in the exam.

**Do prelims marks count towards the final merit list?**

No. The preliminary examination decides only who sits the Mains. Final merit comes from the Mains written total of 1500 and the interview worth 100, giving 1600.

**What is the UPPSC PCS prelims exam pattern?**

Two objective papers of two hours each. General Studies Paper I has 150 questions for 200 marks and decides the cutoff. General Studies Paper II has 100 questions for 200 marks and is qualifying only at 33 per cent. Negative marking is one third of a mark per wrong answer in both.

**What is the age limit for UPPSC PCS?**

Generally 21 to 40 years against the notification cutoff date, a wider window than the UPSC Civil Services Examination allows, with relaxation for reserved categories under Uttar Pradesh rules. Deputy Superintendent of Police carries its own age and physical standards distinct from the administrative posts.

**Can candidates from outside Uttar Pradesh apply?**

Yes. Domicile is not a bar for most posts, and a candidate from outside UP competes in the unreserved pool. Reservation benefits under Uttar Pradesh rules generally apply to candidates domiciled in the state.

**How much is General Hindi worth?**

150 marks, with the Essay carrying another 150, so together they are 300 of the 1500 written total. General Hindi tests formal written Hindi including precis, letter and official correspondence formats and grammar, at a standard everyday fluency does not cover, which is why fluent speakers lose marks in it.

**What should I focus on in the months before prelims?**

Uttar Pradesh specific material, which is where the field separates and where resources are weakest. Run state-level current affairs separately from national. Secure the qualifying aptitude paper early rather than assuming it. And start Mains answer writing now at low volume, because six General Studies papers plus an essay is a writing load that takes months to build.

**Is UPPSC PCS easier than UPSC CSE?**

The competition ratio is lower and the age band is wider, running generally to 40 rather than 32, which makes UPPSC a viable route for candidates who have exhausted UPSC attempts or aged out. The Mains is not obviously easier: six General Studies papers demand breadth with no optional subject to offset a weak area, and the Uttar Pradesh specific content is material a UPSC candidate has not prepared.

**Does UPPSC publish previous year cutoffs?**

UPPSC publishes cutoffs after a cycle concludes, varying by category and by post. They move with paper difficulty, applicant volume and the vacancy count, so the 500 vacancies in this cycle are the relevant denominator rather than an earlier year's figure. Treat historical cutoffs as orientation for mock scores, not as targets.

**Can I write the UPPSC Mains in English?**

The Mains may be written in Hindi or English for the General Studies papers and the Essay. General Hindi is a separate compulsory language paper regardless of the medium you choose for the rest. Pick the medium you write faster and more precisely in, then practise consistently in it rather than switching.

**What is the difference between Deputy Collector and BDO?**

Deputy Collector places you in the provincial civil service on the Sub Divisional Magistrate track, doing revenue, magistracy, land and election work, with eventual promotion prospects into the IAS through the state quota. Block Development Officer works at block level running rural development schemes, closer to implementation than magistracy. BDO accounts for a larger share of actual allocations, which is why a preference list ignoring it removes you from much of the cycle.

**How long is the full UPPSC PCS process?**

From the 25 June 2026 notification through prelims on 6 December, a Mains some months later, an interview and final results, the cycle runs well over a year. Candidates should plan on that timeline and continue applying to other recruitments in the interim rather than pausing to wait on a result.

## Official sources

- Uttar Pradesh Public Service Commission: https://uppsc.up.nic.in
- The PCS 2026 notification PDF, which is the authority on the post-wise vacancy table, age limits by post, physical standards for police posts and paper weightings

Where a figure on this page conflicts with the notification, the notification is correct. UPPSC issues corrigenda mid-cycle.`;

const fields = {
  vacancies: 500,
  last_date: "2026-08-03",
  post_name:
    "500 Group A and Group B gazetted posts under the Combined State / Upper Subordinate Services Examination 2026, including Deputy Collector (SDM track), Deputy Superintendent of Police, Block Development Officer, Assistant Labour Commissioner, Naib Tehsildar, Sub Registrar, District Commandant Home Guard and Assistant Controller of Legal Measurement.",
  eligibility: {
    education:
      "A bachelor's degree from a recognised university for the general requirement, with certain posts specifying additional qualifications in the notification. Domicile is NOT a bar for most posts and candidates from outside Uttar Pradesh may sit the exam, competing in the unreserved pool, though reservation benefits under UP rules generally apply only to candidates domiciled in the state.",
    age: "Generally 21 to 40 years against the cutoff date stated in the notification, a considerably wider window than the UPSC Civil Services Examination allows, with relaxation for reserved categories under Uttar Pradesh rules. Deputy Superintendent of Police carries its own age limits and PHYSICAL STANDARDS distinct from the administrative posts, so candidates ranking DSP alongside administrative posts should check those requirements against themselves before counting on the preference.",
  },
  salary:
    "Deputy Collector and Deputy Superintendent of Police enter at Pay Level 10 on the state pay matrix, comparable to other state civil service Group A entry grades. Block Development Officer and the Group B posts enter at lower levels on the same matrix. Gross monthly pay is well above the entry basic once dearness allowance, house rent allowance and other allowances are added. The posts carry pension provision, medical benefits, and in field postings official accommodation or a housing allowance. Exact pay levels by post are stated in the notification: figures on coaching sites are frequently drawn from older pay structures. Deputy Collector runs on the track toward Sub Divisional Magistrate and, with promotion, into the Indian Administrative Service through the state quota; DSP has the equivalent route into the Indian Police Service.",
  important_dates: {
    notificationDate: "2026-06-25",
    lastDate: "2026-08-03",
    examDate: "Preliminary examination on 6 December 2026. Mains date not announced as of 15 August 2026.",
    note: "Applications closed 3 August 2026 and the correction window closed 10 August 2026. This recruitment is in the preparation phase ahead of the 6 December prelims. Admit cards are released on uppsc.up.nic.in.",
  },
  how_to_apply:
    "Applications for UPPSC PCS 2026 closed on 3 August 2026 and the correction window closed on 10 August 2026. There is no late route. Candidates who applied should watch uppsc.up.nic.in for the preliminary examination admit card ahead of the 6 December 2026 exam. For a future cycle: register on the UPPSC portal, wait for the PCS notification, apply within the window, and rank post preferences carefully since allocation follows merit rank strictly down the list and Block Development Officer accounts for a large share of allocations. A preference list containing only the senior posts removes you from much of the cycle. Candidates ranking Deputy Superintendent of Police should confirm the physical standards apply to them before doing so.",
  selection_process:
    "**Stage 1: Preliminary examination** on 6 December 2026. Two objective papers of two hours each. General Studies Paper I: 150 questions, 200 marks, DECIDES THE CUTOFF. General Studies Paper II (aptitude): 100 questions, 200 marks, QUALIFYING ONLY at 33 per cent. Negative marking of one third of a mark per wrong answer in both papers. Prelims marks do NOT carry into the final ranking: the paper decides only who sits the Mains, and UPPSC calls forward a multiple of the vacancy count. The qualifying aptitude paper eliminates a steady number of candidates every cycle because its marks do not count, so candidates skip preparing it and then miss 33 per cent.\n\n**Stage 2: Main examination** Descriptive, 1500 marks. NOTE: UPPSC REMOVED THE OPTIONAL SUBJECT and replaced it with additional General Studies papers, so candidates working from older material or from other state commissions' patterns often prepare a paper that is not in the exam. The established structure is General Hindi (150), Essay (150) and six General Studies papers of 200 marks each. Six General Studies papers is a heavier load than most state commissions impose and it removes any option to specialise: breadth is the requirement. General Hindi tests formal written Hindi including precis and official correspondence at a standard everyday fluency does not cover, and together with the Essay accounts for 300 of the 1500. Confirm weightings in the notification, since UPPSC has adjusted the structure between cycles.\n\n**Stage 3: Interview** 100 marks.\n\n**Final merit** is the Mains written total of 1500 plus the interview at 100, giving 1600. Nothing from the preliminary examination carries forward. Post allocation follows merit rank applied strictly against the submitted preference order.",
  reading_time: "12 min read",
};

await replaceJob({ slug: "uppsc-pcs-2026", title, description, content, fields });
