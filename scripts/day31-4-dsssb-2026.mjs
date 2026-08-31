// DSSSB Advertisement 03/2026 — thin-page fix, vacancy correction, de-conflation
//
// Verified 2026-08-31.
//
//   thin       1300w -> 3000w+
//   vacancies  171 -> 1,979   (wrong by an order of magnitude)
//   exam date  "2026-06-01 to 2026-06-30" REMOVED. That window belongs to a
//              DIFFERENT advertisement: post code 801/25 (Court Attendant,
//              Room Attendant, Security Attendant) under advertisement 03/25
//              sits at 01 to 30 June 2026. Our page had picked up 03/25's exam
//              window and attached it to 03/2026 on the strength of the
//              similar advertisement number.
//   ordering   that same stored examDate PRECEDED the stored lastDate of
//              15 July 2026, so the page published an exam that finished before
//              its own application window closed.
//   intent     page read "the online application closes on 15 July 2026".
//              It closed. Repositioned to post-application, awaiting-CBT.
//
// FABRICATED POST TABLE REPLACED. The page listed "common post categories in
// this range" as Assistant Teacher (Primary/Nursery), Junior Engineer, Pharmacist,
// Lab Technician, Stenographer, Junior Secretariat Assistant and Patwari, hedged
// with the word "typically". NONE of those posts are in advertisement 03/2026.
// The real posts are Forensic Science Laboratory Junior Scientific Assistants,
// Delhi Archives staff, IT Assistants, NDMC technical trades, Directorate of
// Education teaching posts and one Labour Department post. The pay, age and
// qualification tables built on that fabricated list were wrong in the same way
// and are replaced with post-code-level figures.
//
// SOURCING: post-code-level breakdown from FreeJobAlert, block-level totals from
// IndGovtJobs. The two agree and both sum to exactly 1,979, which is the check
// that gives confidence here. Advertisement number, post code range, closing
// date and 01-06-2026 publication date confirmed against the official board
// listing at dsssb.delhi.gov.in/dsssb-vacancies.
//
// NOT ASSERTED: CBT date, admit card date, shift timings, category-wise
// vacancy split within post codes, cutoffs, answer key dates.

import { replaceJob } from "./lib/replace-job.mjs";

const title = "DSSSB Recruitment 2026: 1,979 Posts, Advertisement 03/2026";

const description =
  "DSSSB Advertisement 03/2026 has 1,979 posts across post codes 21/26 to 45/26. Applications closed 15 July 2026. Check the post-wise split, pay and CBT pattern.";

const content = `Delhi Subordinate Services Selection Board advertised 1,979 posts under Advertisement No. 03/2026, covering post codes 21/26 to 45/26. Applications ran from 16 June 2026 to 15 July 2026 and that window has closed. Candidates who applied are waiting on a computer based test that the board had not scheduled at the time of writing.

Two thirds of this recruitment is teaching posts at the Directorate of Education. Most of the rest is forensic science. If you are picturing a general Delhi government clerical drive, this advertisement is not that.

## Where this recruitment stands

| Item | Detail |
|---|---|
| Advertisement | No. 03/2026 |
| Post codes | 21/26 to 45/26, twenty five codes |
| Total posts | 1,979 |
| Published | 1 June 2026 |
| Applications | 16 June 2026, 12:00 noon, to 15 July 2026, 23:59. Closed |
| Eligibility cut-off date | 15 July 2026 |
| Exam | Computer based test, one tier, date not announced |
| Interview | None for any post |
| Portal | dsssbonline.nic.in |

## Why the DSSSB exam dates in circulation do not apply here

DSSSB published a batch of 2026 exam dates, and those dates get quoted under headlines that simply say "DSSSB exam date out". Read the post codes before you plan around any of them.

The scheduled dates belong to advertisements 01/26, 02/26, 03/25 and 07/25. They cover post code 801/25 for Court Attendant, Room Attendant and Security Attendant on 1 to 30 June 2026, post code 32/25 for Assistant Superintendent and Junior Environmental Engineer on 1 to 6 July 2026, post code 41/25 for Forest Guard on 7 to 14 July 2026, post code 803/25 for Multi Tasking Staff from 25 July to 1 September 2026, post code 802/26 for Assistant Engineer and Junior Engineer Civil on 8 to 17 September 2026, and post code 804/26 for Assistant Section Officer on 21 to 27 September 2026.

Not one of those is a post code in the 21/26 to 45/26 range. Advertisement 03/2026 is absent from that schedule entirely.

The trap is the numbering. Advertisement 03/25 and Advertisement 03/2026 differ by two characters, and DSSSB runs both naming series at once. A June 2026 exam window that belongs to 03/25 reads as though it belongs to 03/2026 unless you check the post code. It cannot belong to 03/2026 in any case, because an examination finishing on 30 June 2026 would have concluded before this advertisement stopped accepting applications on 15 July 2026.

## All 1,979 posts, by post code

| Post code | Post | Department | Posts |
|---|---|---|---|
| 21/26 | Junior Scientific Assistant (Biology) | Forensic Science Laboratory | 44 |
| 22/26 | Junior Scientific Assistant (Ballistics) | Forensic Science Laboratory | 18 |
| 23/26 | Junior Scientific Assistant (Chemistry) | Forensic Science Laboratory | 37 |
| 24/26 | Junior Scientific Assistant (Lie Detection) | Forensic Science Laboratory | 12 |
| 25/26 | Junior Scientific Assistant (Documents) | Forensic Science Laboratory | 15 |
| 26/26 | Junior Scientific Assistant (HRD and QC) | Forensic Science Laboratory | 5 |
| 27/26 | Junior Scientific Assistant (Photo) | Forensic Science Laboratory | 14 |
| 28/26 | Junior Scientific Assistant (Cyber Forensic) | Forensic Science Laboratory | 81 |
| 29/26 | Junior Scientific Assistant (Crime Scene, DMFU) | Forensic Science Laboratory | 46 |
| 30/26 | Junior Scientific Assistant (Finger Print) | Forensic Science Laboratory | 1 |
| 31/26 | Junior Scientific Assistant (Physics) | Forensic Science Laboratory | 16 |
| 32/26 | Technical Assistant (Hindi) | Delhi Archives | 1 |
| 33/26 | Assistant Archivist Grade I | Delhi Archives | 4 |
| 34/26 | I.T. Assistant Grade A | Information Technology | 125 |
| 35/26 | Fitter Grade II | New Delhi Municipal Council | 36 |
| 36/26 | Lift Operator | New Delhi Municipal Council | 13 |
| 37/26 | Assistant Operator cum Mechanic (A/C) | New Delhi Municipal Council | 15 |
| 38/26 | Sub Station Apprentice | New Delhi Municipal Council | 37 |
| 39/26 | Data Processing Assistant Grade A | New Delhi Municipal Council | 21 |
| 40/26 | Data Entry Operator Grade B | New Delhi Municipal Council | 2 |
| 41/26 | Trained Graduate Teacher (Computer Science) | Directorate of Education | 675 |
| 42/26 | Domestic Science Teacher | Directorate of Education | 129 |
| 43/26 | Trained Graduate Teacher (Special Education) | Directorate of Education | 163 |
| 44/26 | Special Educator (Primary) | Directorate of Education | 450 |
| 45/26 | Electrical Overseer and Sub Inspector | Labour Department | 19 |
| **Total** | | | **1,979** |

If you have seen a much smaller figure quoted for this advertisement, the twenty five post codes above sum to 1,979, and that arithmetic is the check worth running on any number you are given.

## The advertisement is four hiring drives sharing one number

Reading 03/2026 as a single recruitment leads candidates to prepare for the wrong paper. The post codes group into four blocks with different qualifications, different pay and different exam schemes.

Teaching, post codes 41/26 to 44/26, is 1,417 posts, which is 71 per cent of the advertisement. Trained Graduate Teacher (Computer Science) alone is 675 posts, the largest single line in the advertisement. Special Educator (Primary) is another 450. Anyone who reads "DSSSB 1,979 posts" and does not hold a B.Ed with the required registration is looking at a recruitment where seven posts in ten are closed to them.

Forensic science, post codes 21/26 to 31/26, is 289 posts at the Forensic Science Laboratory. These are postgraduate science roles, not general Group C work. Cyber Forensic at 81 posts and Crime Scene at 46 are the two largest. Finger Print is a single post, so treat that one as a lottery rather than a plan.

NDMC technical trades, post codes 35/26 to 40/26, is 124 posts covering Fitter, Lift Operator, air conditioning mechanic, sub station apprentice and data roles. Entry is at Matric with an ITI certificate for most of these, which makes them the most accessible block in the advertisement.

The remainder is 125 I.T. Assistant Grade A posts, 5 posts at Delhi Archives, and 19 Electrical Overseer posts with the Labour Department.

## The 675 computer science teacher posts are the story here

One post code, 41/26, carries 675 of the 1,979 posts. Trained Graduate Teacher (Computer Science) is more than a third of this advertisement on its own, and it is paid at Level 7, the top of the pay range on offer.

That concentration tells you where Delhi government hiring is going. Add the 450 Special Educator (Primary) posts at code 44/26 and the 163 special education teaching posts at 43/26, and the Directorate of Education accounts for 1,417 of the total. Special education alone is 613 posts, which is a larger commitment than the entire forensic science block.

For a candidate, the practical reading is straightforward. If you hold a B.Ed in computer science, this is the widest opening DSSSB has offered in that subject, and the competition ratio on 675 posts is more favourable than on the single Finger Print post at code 30/26 or the four Delhi Archives posts at 33/26. If you do not hold a B.Ed, roughly seven posts in ten here were never available to you, and the honest comparison for your prospects is against the 289 forensic posts, the 125 I.T. Assistant posts or the 124 NDMC trade posts, not against the headline figure of 1,979.

That gap between the headline number and the number actually open to any one candidate is why the post-wise table above matters more than the total.

## Age limits differ by post code

There is no single age limit for this advertisement. The limit attaches to the post code, and it is reckoned as on the closing date of 15 July 2026.

| Post codes | Age limit |
|---|---|
| 21/26 to 31/26, 45/26 | 18 to 27 years |
| 32/26, 33/26 | Not exceeding 30 years |
| 34/26 | Below 27 years |
| 35/26 | 20 to 32 years |
| 36/26 | 18 to 37 years |
| 37/26, 38/26 | 18 to 32 years |
| 39/26, 40/26 | Below 30 years |
| 41/26 to 44/26 | Not exceeding 30 years |

Relaxation follows the standard pattern: five years for Scheduled Castes and Scheduled Tribes, three years for Other Backward Classes, ten years for candidates with benchmark disabilities, and service period plus three years for ex-servicemen. Departmental candidates get further relaxation as stated in the notification.

Note the spread. A candidate aged 30 is eligible for Lift Operator at post code 36/26 and ineligible for every forensic science post in the advertisement. The teaching posts at "not exceeding 30" cut off at a different point from the forensic posts at 27, so a single application decision can turn entirely on which block you looked at first.

## Qualifications by block

Forensic Science Laboratory posts, 21/26 to 31/26, ask for a master's degree in the named science, Biology, Chemistry, Physics, Psychology and so on according to the post code, or a relevant B.Tech or B.E. for some. The discipline is named specifically in the notification rather than described in general terms, so a degree with a differently worded title may need equivalence established.

Delhi Archives posts, 32/26 and 33/26, ask for a master's in Hindi or in History together with the specified diploma or certification.

I.T. Assistant Grade A, post code 34/26, asks for a Class 12 pass plus a typing speed of 8,000 key depressions per hour. This is the one large block in the advertisement open at school-leaving level, which is why 125 posts here attract a very different volume of applications from the 289 forensic posts.

NDMC posts, 35/26 to 40/26, ask for Matric or Secondary with an ITI certificate or the specified diploma, and 8,000 key depressions per hour for the data roles. Check the trade name printed on your ITI certificate against the notification wording. Nomenclature varies between institutes, and the trade is verified at document verification rather than filtered at the application stage, so a mismatch surfaces after you have already sat the exam.

Teaching posts, 41/26 to 44/26, ask for graduation or BCA with B.Ed, together with CTET, and RCI registration for the special education posts. RCI registration is the one that catches people out: it is a separate registration with the Rehabilitation Council of India, not something a B.Ed in special education confers automatically.

Electrical Overseer, 45/26, asks for a diploma or degree in Electrical Engineering plus one year of experience.

## Pay

| Post codes | Pay scale | Level | Group |
|---|---|---|---|
| 41/26, 42/26, 43/26 | ₹44,900 to ₹1,42,400 | 7 | B |
| 32/26, 33/26, 39/26, 44/26 | ₹35,400 to ₹1,12,400 | 6 | B or C |
| 21/26 to 31/26, 40/26, 45/26 | ₹29,200 to ₹92,300 | 5 | C |
| 34/26 | ₹25,500 to ₹81,100 | 4 | C |
| 36/26, 37/26, 38/26 | ₹19,900 to ₹63,200 | 2 | C |
| 35/26 | ₹5,200 to ₹20,200 plus grade pay ₹1,900 | | C |

The teaching posts at Level 7 are the best paid in the advertisement and also the most numerous, which is an unusual combination. Delhi government staff draw Delhi Allowance in addition to the standard dearness, house rent and transport allowances, so gross pay runs above the basic figures above.

Post code 35/26 for Fitter Grade II is quoted on the older pay band and grade pay structure rather than a pay matrix level. Confirm the current entry pay for that post from the notification before you rely on a comparison with the other rows.

## Application fee

The fee is ₹100. It is fully waived for women of all categories, for Scheduled Caste and Scheduled Tribe candidates, for candidates with benchmark disabilities, and for ex-servicemen. In practice the fee falls only on male General, OBC and EWS candidates. Payment was through the DSSSB portal during the application window, which has closed.

## Selection runs three different exam schemes

Every post in this advertisement is decided by a single computer based test. There is no tier two and no interview anywhere in 03/2026, so the paper you sit is the whole selection. A moderate performance cannot be recovered at a later stage.

Which paper you sit depends on your post code.

**One Tier General** applies to post codes 34/26, 39/26 and 40/26. Two hours, 200 multiple choice questions, 200 marks, in five sections of 40 marks each: General Awareness, General Intelligence and Reasoning, Arithmetical and Numerical Ability, Hindi Language and Comprehension, and English Language and Comprehension. Merit rests on the written paper alone.

**One Tier Technical** applies to post codes 21/26 to 33/26, 35/26 to 38/26 and 45/26. Two hours, 200 questions, 200 marks, split into Section A worth 100 marks across the five general subjects at 20 marks each, and Section B worth 100 marks on the subject of the post.

**One Tier Technical for teaching posts** applies to post codes 41/26 to 44/26. The same 100 plus 100 structure, with Section B covering the teaching subject and methodology.

The consequence of that split matters more than the labels. In both technical schemes, the minimum qualifying marks apply to Section B only. General awareness and reasoning contribute to your total but cannot rescue you if the domain half falls short, which is the opposite of how candidates usually allocate preparation time.

## Exam pattern and qualifying marks

| Item | Detail |
|---|---|
| Mode | Computer based test |
| Duration | 2 hours |
| Questions | 200 multiple choice |
| Marks | 200 |
| Negative marking | 0.25 per wrong answer |
| Qualifying, General and EWS | 40 per cent |
| Qualifying, OBC | 35 per cent |
| Qualifying, SC, ST and PwBD | 30 per cent |

Negative marking of 0.25 on a 200 question paper means four wrong answers cancel one correct answer. Skill and trade tests apply where the post prescribes them, and those are qualifying rather than scoring.

## What applicants should do now

The application window closed on 15 July 2026 and there is no late route. DSSSB publishes admit cards on its portal a short period before the examination and does not notify candidates individually, so the practical step is to check dsssb.delhi.gov.in on a fixed schedule rather than waiting for a message.

Keep your registration number and password accessible. Candidates lose admit cards to forgotten credentials more often than to any problem with the recruitment itself.

For preparation, work out which of the three exam schemes covers your post code, then weight Section B accordingly if you are in a technical or teaching post. The qualifying threshold sits on that section alone.

## Frequently asked questions

**How many posts are there in DSSSB Advertisement 03/2026?**

There are 1,979 posts across twenty five post codes running from 21/26 to 45/26. The largest single line is Trained Graduate Teacher (Computer Science) at 675 posts, followed by Special Educator (Primary) at 450 and Trained Graduate Teacher (Special Education) at 163.

**Is the DSSSB 03/2026 application still open?**

No. Applications opened on 16 June 2026 at 12:00 noon and closed on 15 July 2026 at 23:59. DSSSB did not extend the window, and there is no late application route.

**When is the DSSSB 03/2026 exam date?**

DSSSB had not announced an exam date for Advertisement 03/2026 at the time of writing. The 2026 exam dates published by the board cover post codes 801/25, 32/25, 41/25, 803/25, 802/26 and 804/26 under advertisements 01/26, 02/26, 03/25 and 07/25. None of those post codes fall in the 21/26 to 45/26 range, so those dates do not apply to this advertisement.

**Is there an interview in DSSSB 03/2026?**

No. Every post in this advertisement is decided by a single computer based test, with a skill or trade test where the post prescribes one, and that skill test is qualifying rather than scoring. There is no second written tier and no interview.

**What is the negative marking in the DSSSB CBT?**

0.25 marks are deducted for each wrong answer on a 200 question, 200 mark paper. Four wrong answers cancel out one correct answer.

**What are the minimum qualifying marks?**

40 per cent for General and EWS candidates, 35 per cent for Other Backward Classes, and 30 per cent for Scheduled Castes, Scheduled Tribes and candidates with benchmark disabilities. For the technical and teaching schemes, the qualifying mark applies to Section B alone rather than to the paper as a whole.

**Which DSSSB 03/2026 posts can a 12th pass candidate apply for?**

I.T. Assistant Grade A at post code 34/26, which has 125 posts, asks for a Class 12 pass plus a typing speed of 8,000 key depressions per hour. Most NDMC posts at codes 35/26 to 40/26 ask for Matric or Secondary with an ITI certificate. The forensic science and teaching posts require postgraduate or professional qualifications.

**Which post code has the most vacancies?**

Post code 41/26, Trained Graduate Teacher (Computer Science) at the Directorate of Education, with 675 posts. That is over a third of the advertisement in a single post code. Special Educator (Primary) at post code 44/26 is second with 450 posts.

**Why do the vacancy figures for DSSSB 03/2026 differ between websites?**

The advertisement covers twenty five separate post codes, and some sites report a single block or a single department rather than the full advertisement. The check that settles it is arithmetic: the twenty five post codes sum to 1,979, so a figure that does not reconcile with the post-wise table is either a partial count or an error.

**Do I need RCI registration for the special education posts?**

Yes, for post codes 43/26 and 44/26. Registration with the Rehabilitation Council of India is a separate requirement from your B.Ed and is checked at document verification.

## Official sources

Advertisement and admit cards: dsssb.delhi.gov.in
Application portal: dsssbonline.nic.in

Confirm every figure on this page against the official advertisement PDF before acting on it. DSSSB issues corrigenda mid-cycle that revise vacancy counts and eligibility, and it publishes them on the board site without separate announcement.`;

const fields = {
  vacancies: 1979,
  last_date: "2026-07-15",
  post_name:
    "Trained Graduate Teacher, Special Educator, Junior Scientific Assistant, I.T. Assistant and NDMC technical posts",
  eligibility: {
    education:
      "Requirements attach to the post code, not to the advertisement. Post codes 21/26 to 31/26, Forensic Science Laboratory Junior Scientific Assistant, require a master's degree in the named science or a relevant B.Tech or B.E. Post codes 32/26 and 33/26, Delhi Archives, require a master's in Hindi or History with the specified diploma. Post code 34/26, I.T. Assistant Grade A, requires a Class 12 pass with a typing speed of 8,000 key depressions per hour. Post codes 35/26 to 40/26, New Delhi Municipal Council, require Matric or Secondary with an ITI certificate or the specified diploma. Post codes 41/26 to 44/26, Directorate of Education, require graduation or BCA with B.Ed and CTET, plus Rehabilitation Council of India registration for the special education posts at 43/26 and 44/26. Post code 45/26 requires a diploma or degree in Electrical Engineering with one year of experience. Check the trade name on an ITI certificate against the notification wording, since it is verified at document verification rather than filtered at application.",
    age:
      "Reckoned as on the closing date of 15 July 2026 and set per post code: 18 to 27 years for post codes 21/26 to 31/26 and 45/26; not exceeding 30 years for 32/26, 33/26 and 41/26 to 44/26; below 27 years for 34/26; 20 to 32 years for 35/26; 18 to 37 years for 36/26; 18 to 32 years for 37/26 and 38/26; below 30 years for 39/26 and 40/26. Relaxation of five years for Scheduled Castes and Scheduled Tribes, three years for Other Backward Classes, ten years for candidates with benchmark disabilities, and service period plus three years for ex-servicemen.",
  },
  important_dates: {
    notificationDate: "2026-06-01",
    startDate: "2026-06-16",
    lastDate: "2026-07-15",
    examDate: "Not announced for Advertisement 03/2026 as of 31 August 2026",
    note:
      "DSSSB exam dates published for 2026 cover post codes 801/25, 32/25, 41/25, 803/25, 802/26 and 804/26 under advertisements 01/26, 02/26, 03/25 and 07/25. None of those fall in the 21/26 to 45/26 range covered by Advertisement 03/2026, so none of those dates apply here. An exam window of 1 to 30 June 2026 in particular belongs to post code 801/25 under advertisement 03/25, whose number resembles this one. Admit cards are published on dsssb.delhi.gov.in a short period before the examination and candidates are not notified individually.",
  },
  application_fee:
    "₹100, payable online through the DSSSB portal during the application window, which closed on 15 July 2026. Fully waived for women of all categories, Scheduled Caste and Scheduled Tribe candidates, candidates with benchmark disabilities, and ex-servicemen, so the fee applied only to male General, OBC and EWS candidates.",
  how_to_apply:
    "Applications ran from 16 June 2026 at 12:00 noon to 15 July 2026 at 23:59 through dsssbonline.nic.in and the window is closed. There is no late route and DSSSB did not extend it. Candidates who applied should keep their registration number and password accessible and check dsssb.delhi.gov.in on a fixed schedule, since admit cards appear on the portal a short period before the examination without individual notification. For a future cycle: register on the DSSSB portal, confirm which post code you are eligible for before paying, since age limits and qualifications differ between codes within the same advertisement, and check that the trade or discipline named on your certificate matches the notification wording exactly.",
  selection_process:
    "**A single computer based test decides every post.** There is no second written tier and no interview anywhere in Advertisement 03/2026, so a moderate paper cannot be recovered at a later stage. The test runs two hours, 200 multiple choice questions, 200 marks, with 0.25 deducted per wrong answer.\n\n**Three schemes apply, by post code.** One Tier General covers post codes 34/26, 39/26 and 40/26, in five sections of 40 marks each: General Awareness, General Intelligence and Reasoning, Arithmetical and Numerical Ability, Hindi Language and Comprehension, and English Language and Comprehension. One Tier Technical covers post codes 21/26 to 33/26, 35/26 to 38/26 and 45/26, split into Section A of 100 marks across the five general subjects and Section B of 100 marks on the subject of the post. One Tier Technical for teaching posts covers 41/26 to 44/26 with the same structure, Section B covering teaching subject and methodology.\n\n**Minimum qualifying marks apply to Section B alone** in both technical schemes, at 40 per cent for General and EWS, 35 per cent for Other Backward Classes, and 30 per cent for Scheduled Castes, Scheduled Tribes and candidates with benchmark disabilities. A strong general section does not compensate for a short domain section.\n\n**Skill and trade tests** apply where the post prescribes them, including typing at 8,000 key depressions per hour for the data and IT posts. These are qualifying rather than scoring.\n\n**Document verification** checks the discipline, trade name, age, category and registration, including Rehabilitation Council of India registration for post codes 43/26 and 44/26.",
  reading_time: "13 min read",
};

await replaceJob({ slug: "dsssb-recruitment-2026", title, description, content, fields });
