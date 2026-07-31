// Day 11 (Fri 2026-07-31) — MP Police Constable 2026 deepening (617w -> 3000w+).
// Verified 2026-07-31. CORRECTS two errors in the old DB row: (a) it claimed 1/4 negative
// marking (MPESB confirms NO negative marking), (b) it claimed CBT on 6 Apr 2026 (actual
// written exam 30 Oct - 15 Dec 2025, result 25 Jan 2026, PET/PMT 23 Feb - 13 Mar 2026).
// 7,500 GD posts notified 13 Sep 2025 (SAF 700 + DEF 6,800). Separate Band recruitment
// 679 posts, applications 5-19 Apr 2026, male only. No new GD notification as of 31 Jul 2026.
// Height figures conflict across sources -> flagged honestly rather than asserted.
// FAQ in bold format. Links to bihar/up police pages added later in Day 12.
import { replaceJob } from "./lib/replace-job.mjs";

const title = "MP Police Constable 2026: PET Standards, Exam, Salary";

const description =
  "MP Police Constable 2026: the 7,500-post cycle is through final result. Check PET standards, the 800m timing, exam pattern with no negative marking and salary.";

const content = `## MP Police Constable 2026: where the recruitment stands

MP Police Constable recruitment is run by the Madhya Pradesh Employee Selection Board (MPESB, formerly MP Vyapam) through esb.mp.gov.in, and the big 7,500-post cycle notified in September 2025 has now run its full course. The written exam was held from 30 October to 15 December 2025, results came on 25 January 2026, and the physical tests ran from 23 February to 13 March 2026 across ten districts.

As of 31 July 2026, MPESB has not issued a fresh Constable (General Duty) notification. So if you are searching for this recruitment now, you are either tracking the closing stages of the last cycle or preparing for the next one, and this page covers both.

One thing to fix straight away, because it changes how you attempt the paper: the MP Police Constable written exam carries no negative marking. Pages that tell you a quarter mark is deducted for a wrong answer are wrong, and candidates who believe them leave questions blank for no reason.

## Timeline of the last cycle

The dates from the completed cycle are the most useful planning tool available, because MPESB tends to follow a similar rhythm.

| Stage | Date |
|---|---|
| Notification released | 13 September 2025 |
| Applications open | 15 September 2025 |
| Last date to apply | 29 September 2025 |
| Correction window closed | 4 October 2025 |
| Written exam (CBT) | 30 October to 15 December 2025 |
| Written result | 25 January 2026 |
| Physical test (PET and PMT) | 23 February to 13 March 2026 |

Read across that table and the shape of the process is clear. Roughly two weeks to apply, five weeks from the close of applications to the first exam date, six weeks from the last exam date to the result, and a month from result to physical tests. From notification to physical test took about six months.

The practical lesson: the application window is short and the gap between notification and exam is about six weeks, which is not enough time to build fitness from scratch. Candidates who start running only after a notification appears reach the PET underprepared.

## Two different recruitments people confuse

Searches for MP Police Constable in 2026 return two separate recruitments, and they are not the same job.

| | Constable (General Duty) | Constable (Band) |
|---|---|---|
| Posts in the recent cycle | 7,500 | 679 |
| Notified | September 2025 | April 2026 |
| Open to | Male and female | Male only |
| Education | Class 10 (Class 8 for ST) | Class 10 (Class 8 for ST) plus proficiency in a musical instrument |
| Written exam | Yes, CBT of 100 marks | No written exam |
| Selection | CBT, then PET and PMT, then documents and medical | Skill and band performance test, physical measurement, documents |

The Band recruitment is for the police band and tests whether you can play an instrument such as the clarinet, trumpet, saxophone, flute, keyboard, guitar, sitar, tabla, or harmonium. Its applications ran from 5 to 19 April 2026 and are closed. If you are preparing for a written exam, the General Duty recruitment is the one you want, and the rest of this page covers it.

## Vacancy breakdown

The 7,500 posts in the last General Duty cycle split across two wings of the force.

| Wing | Posts | Open to |
|---|---|---|
| District Force (DEF) | 6,800 | Male and female |
| Special Armed Force (SAF) | 700 | Male only |
| Total | 7,500 | |

Category-wise, the reported split was 2,025 unreserved, 2,025 EWS, 1,500 ST, 1,200 SC, and 975 OBC. Madhya Pradesh reserves a significant share of posts for women in the District Force, and horizontal reservation for home guards, ex-servicemen, and sportspersons applies on top of the category split. The exact numbers are set in each notification.

## Eligibility for MP Police Constable

On domicile, this is a state recruitment. Candidates from outside Madhya Pradesh can apply, but the fee concession and the age relaxation apply only to MP residents, and reservation benefits are available only to candidates holding an MP category certificate. Candidates from other states are treated as unreserved regardless of their home-state category.

On age, the band is 18 to 33 years for general male candidates. Reserved category candidates who are MP residents, women, and ex-servicemen get relaxation up to 38 years, subject to the notification.

On education, Class 10 pass from a recognised board is the requirement for General Duty, with Class 8 accepted for Scheduled Tribe candidates. Constable Radio and other technical posts, when advertised, need Class 12 with Physics, Chemistry, and Mathematics along with an ITI certificate in the relevant trade.

## Physical measurement standards

The Physical Measurement Test (PMT) checks height and chest, and it is where a large share of candidates exit.

| Category | Male height | Male chest (unexpanded to expanded) |
|---|---|---|
| General and OBC | 168 cm | 81 cm to 86 cm |
| Scheduled Tribe | 160 cm | 76 cm to 81 cm |

For female candidates, no chest measurement applies, and the minimum height requirement is in the 155 cm region.

An honest caveat, since this is the number candidates most want certainty on: published figures for female height differ across recruitment sites, with 152 cm, 155 cm, and 158 cm all appearing, and sites also disagree on whether Scheduled Caste candidates fall under the 168 cm or the 160 cm standard. The figure that governs you is the one in the MPESB rule book and the notification for your cycle, and given that a centimetre decides selection here, that is the only document worth trusting. Do not plan around a number from an aggregator page, including this one, without checking it there.

Chest expansion of at least 5 cm is required where chest is measured, so a candidate who meets the unexpanded figure but cannot expand by 5 cm fails.

## Physical efficiency test

The PET has three events, and all of them are qualifying rather than merit-adding.

| Candidate group | 800 m run | Long jump | Shot put |
|---|---|---|---|
| Male (GD) | 2 minutes 45 seconds | 13 feet | 19 feet with a 7.26 kg shot |
| Female (GD) | 4 minutes | 10 feet | 15 feet with a 4 kg shot |
| Home Guard soldier | 3 minutes 15 seconds | 12 feet | 17 feet with a 7.26 kg shot |
| Ex-serviceman | 3 minutes 15 seconds | 10 feet | 15 feet with a 7.26 kg shot |

The 800 metre standard deserves attention. 2 minutes 45 seconds for men is a pace of about 3 minutes 26 seconds per kilometre, sustained for two laps of a standard track. That is a genuinely demanding middle-distance standard, well beyond casual jogging fitness, and it is the single most common reason candidates who clear the written exam are eliminated. Four minutes for women works out to about 5 minutes per kilometre over the same distance.

Training for that means interval work rather than slow long runs. Repeated 400 metre efforts at target pace with short recoveries, twice or three times a week over several months, is what builds the specific capacity the event needs. Shot put and long jump reward technique as much as strength, and a few coaching sessions on technique often add more feet than months of gym work.

## Selection process

Selection runs in four stages.

1. Computer Based Test (CBT). 100 marks, and the only stage that decides merit.
2. Physical Measurement Test and Physical Efficiency Test. Qualifying.
3. Document verification, including domicile and category certificates.
4. Medical examination as per MP Police standards.

Final merit is prepared from the written exam score, so a candidate who scrapes past the physical standards but scores well in the CBT ranks above a strong athlete with a weaker paper. The physicals decide whether you stay in the process; the CBT decides where you finish.

## Exam pattern

The written exam is a single computer based paper.

| Element | Detail |
|---|---|
| Total questions | 100 |
| Total marks | 100 |
| Marks per correct answer | 1 |
| Negative marking | None |
| Duration | 120 minutes |
| Medium | Hindi and English |
| Mode | Computer Based Test |

The reported subject split for the last cycle was General Knowledge and current affairs for 40 marks, reasoning and mental ability for 30 marks, and science and basic mathematics for 30 marks. Some sources describe the split differently, with a separate Hindi component, so treat the weightage as indicative and confirm it in the rule book for your cycle.

Because there is no negative marking, the correct strategy is to attempt all 100 questions. Every blank answer is a guaranteed zero where a guess carries a one-in-four chance of a mark and no downside. Candidates carrying habits from exams like SSC or the police recruitments of other states, where wrong answers cost a quarter mark, routinely leave 10 to 20 questions blank here and lose marks they had no reason to lose. Reserve the last five minutes of the paper purely for filling in every unattempted question.

MPESB also applies a minimum qualifying threshold, commonly reported at around 30 to 33 per cent for unreserved candidates with a lower bar for reserved categories. Check the exact figure in your notification.

## Syllabus

The paper stays at Class 10 level and rewards breadth over depth.

General knowledge and current affairs covers Indian history, geography, polity and the Constitution, economy, and general science, with a heavy weight on Madhya Pradesh: the state's districts, rivers, national parks, tribes, festivals, history, and current state schemes and appointments. MP-specific questions are the section where local candidates gain most and where outside candidates lose ground, so this is worth targeted study.

Reasoning and mental ability covers series, analogy, coding and decoding, blood relations, direction sense, ranking, syllogism, and basic non-verbal reasoning.

Science and mathematics covers general science at Class 10 level along with arithmetic: percentages, ratio and proportion, average, profit and loss, simple and compound interest, time and work, time and distance, and basic data interpretation.

Computer knowledge and basic Hindi and English language questions appear as well, at an elementary level.

## Salary of an MP Police Constable

The post sits in the Madhya Pradesh state pay structure with a pay range of Rs 19,500 to Rs 62,000 a month.

At entry, basic pay of Rs 19,500 is topped up by dearness allowance at MP government rates, house rent allowance depending on posting city, and police allowances including uniform and kit. Accommodation in police lines is available at most postings, which materially reduces living costs where it is provided. In-hand pay for a new recruit typically works out in the region of Rs 28,000 to Rs 35,000 a month depending on the posting and current DA rate, and the figure rises with each DA revision and increment.

Beyond pay, the post carries state medical facilities, leave entitlement, and pension benefits as per the state rules in force for new recruits.

## Career progression

A constable in Madhya Pradesh Police can move up through departmental examinations and promotion.

| Rank | Route |
|---|---|
| Constable | Direct entry |
| Head Constable | Departmental promotion, with a departmental exam route |
| Assistant Sub-Inspector | Promotion on seniority and departmental exam |
| Sub-Inspector | Promotion, alongside direct recruitment through the MPESB Sub-Inspector exam |
| Inspector and above | Promotion on seniority and service record |

Two paths exist, and it is worth knowing both. A constable can rise through departmental promotion, which is seniority-driven and slow, or can appear for the direct Sub-Inspector recruitment while serving, provided the age and education criteria are met. Constables who hold a graduate degree often take the second route, since direct entry as Sub-Inspector jumps several rungs at once.

## Application fee and how to apply

Applications are filed only on esb.mp.gov.in when a notification is live.

| Category | Fee |
|---|---|
| General and candidates from outside MP | Rs 500 |
| SC, ST, OBC and EWS resident in MP | Rs 250 |
| Portal charge (registered citizen) | Rs 20 |
| Portal charge (through a kiosk or MP Online centre) | Rs 60 |

The steps, when the window opens, are straightforward.

1. Register on esb.mp.gov.in and complete the profile, which MPESB reuses across its recruitments.
2. Fill the application with details exactly as on your Class 10 certificate, since that document also proves date of birth.
3. Enter domicile and category details accurately, since the fee concession, age relaxation, and reservation all depend on them.
4. Upload photograph and signature in the specified format.
5. Pay the fee and the portal charge online.
6. Submit and save the application number, then use the correction window if you spot an error.
7. Download the admit card when MPESB releases it, and note that exam dates are spread over several weeks with candidates assigned different shifts.

## Documents you will need

1. Class 10 mark sheet and certificate, which also serves as proof of date of birth.
2. Madhya Pradesh domicile or permanent residence certificate.
3. Caste or category certificate in the MP format for SC, ST, and OBC candidates, and an EWS certificate where applicable.
4. Non-creamy layer certificate for OBC candidates, current as per the notification.
5. Home guard, ex-serviceman, or sports certificates for horizontal reservation claims.
6. Photograph, signature, and a photo identity document.

## How to prepare

The written exam and the physical test need parallel preparation, and the mistake most candidates make is treating them in sequence.

For the written paper, build the Madhya Pradesh general knowledge section first, since it is the highest-yield and most predictable portion. Work through MP geography, history, tribes, parks, and state schemes, then add national general knowledge and current affairs of the last 12 months. Reasoning and arithmetic at Class 10 level respond well to daily practice sets rather than theory reading. Take full 100-question mock tests under the 120-minute clock and train yourself to attempt every question, because that habit alone is worth several marks in a no-negative-marking paper.

For the physical test, start now rather than after the notification. Six weeks between notification and exam, and roughly four months to the PET, is not enough to build 800 metre speed from a low base. Run intervals three times a week, work on shot put and long jump technique at a local ground, and measure your height against the standard early so you know where you stand before investing a year.

Candidates comparing state police options should also look at neighbouring recruitments, since preparation overlaps heavily on reasoning, arithmetic, and general science, and only the state-specific general knowledge changes.

## Frequently asked questions

**Is there negative marking in the MP Police Constable exam?**
No. The MP Police Constable computer based test carries 100 questions for 100 marks with 1 mark per correct answer and no deduction for a wrong answer. Pages claiming a quarter-mark penalty are incorrect. Attempt all 100 questions, since a blank answer scores zero while a guess carries no downside.

**What is the MP Police Constable 2026 vacancy?**
The most recent General Duty cycle was notified in September 2025 for 7,500 posts, split as 6,800 in the District Force and 700 in the Special Armed Force. A separate Band Constable recruitment for 679 posts ran in April 2026. As of 31 July 2026 no fresh General Duty notification has been issued.

**What is the height requirement for MP Police Constable?**
The commonly published standard is 168 cm for general and OBC male candidates with a chest of 81 cm to 86 cm, and 160 cm for Scheduled Tribe male candidates with a chest of 76 cm to 81 cm. For female candidates the requirement is in the 155 cm region with no chest measurement. Published figures for female height and for the Scheduled Caste classification differ across sites, so confirm the exact standard in the MPESB rule book for your cycle.

**What is the 800 metre timing for MP Police Constable?**
Male General Duty candidates must complete 800 metres in 2 minutes 45 seconds. Female candidates get 4 minutes. Home guard soldiers and ex-servicemen are allowed 3 minutes 15 seconds. The male standard works out to roughly a 3 minute 26 second per kilometre pace and needs interval training rather than steady jogging.

**What is the salary of an MP Police Constable?**
The pay range is Rs 19,500 to Rs 62,000 a month in the Madhya Pradesh state pay structure. With dearness allowance, house rent allowance, and police allowances, in-hand pay for a new recruit is roughly Rs 28,000 to Rs 35,000 a month depending on posting city and the current DA rate, with police line accommodation available at most postings.

**What is the age limit for MP Police Constable?**
The age band is 18 to 33 years for general male candidates. Relaxation up to 38 years applies to women, ex-servicemen, and reserved category candidates who are residents of Madhya Pradesh. The exact reckoning date is set in each notification.

**What is the educational qualification for MP Police Constable?**
Class 10 pass from a recognised board is required for the General Duty post, with Class 8 accepted for Scheduled Tribe candidates. Technical posts such as Constable Radio need Class 12 with Physics, Chemistry, and Mathematics plus an ITI certificate in the relevant trade.

**Can candidates from other states apply for MP Police Constable?**
Yes, candidates from outside Madhya Pradesh can apply, but they pay the full Rs 500 fee, receive no age relaxation, and are treated as unreserved regardless of their home-state category certificate. Reservation and fee concessions require an MP domicile and an MP category certificate.

**When is the next MP Police Constable notification?**
MPESB has not announced a fresh General Duty notification as of 31 July 2026. The last cycle was notified on 13 September 2025 with applications open for two weeks, so watching esb.mp.gov.in directly is the only reliable way to catch the window, which is short.

**What is the selection process for MP Police Constable?**
Selection runs through four stages: the computer based test, then the Physical Measurement Test and Physical Efficiency Test, then document verification, then the medical examination. Only the written exam counts towards merit. The physical stages, document check, and medical are qualifying.

**How many attempts can you take at the MP Police Constable exam?**
There is no cap on the number of attempts. The limit is the age band, so a general male candidate can appear until 33 years and a relaxed-category candidate until 38 years, subject to the notification. In practice the number of attempts depends on how often MPESB issues a notification, which has been irregular.

**Which is the MP Police Constable official website?**
Applications, admit cards, results, and rule books are published on esb.mp.gov.in, the Madhya Pradesh Employee Selection Board portal. MPESB was earlier known as MP Vyapam and the Professional Examination Board. Treat that site as the only authoritative source for dates and standards.`;

const fields = {
  vacancies: 7500,
  post_name: "Constable (General Duty) in District Force and Special Armed Force. Separate Band Constable recruitment of 679 posts ran in April 2026.",
  eligibility: {
    domicile:
      "Candidates from outside Madhya Pradesh may apply but pay the full fee, get no age relaxation, and are treated as unreserved. Reservation and fee concession need MP domicile plus an MP category certificate.",
    age: "18 to 33 years for general male candidates. Relaxation up to 38 years for women, ex-servicemen and reserved category candidates resident in MP, as per the notification.",
    education:
      "Constable (General Duty): Class 10 pass from a recognised board; Class 8 accepted for Scheduled Tribe candidates. Constable Radio and technical posts: Class 12 with Physics, Chemistry and Mathematics plus an ITI certificate in the relevant trade.",
    physical_standards:
      "Male General and OBC: height 168 cm, chest 81 cm to 86 cm. Male Scheduled Tribe: height 160 cm, chest 76 cm to 81 cm. Female: about 155 cm, no chest measurement. Published figures for female height and for the SC classification vary across sources; confirm in the MPESB rule book for your cycle.",
    physical_efficiency:
      "Male GD: 800 m in 2 min 45 sec, long jump 13 ft, shot put 19 ft (7.26 kg). Female GD: 800 m in 4 min, long jump 10 ft, shot put 15 ft (4 kg). Home guard and ex-servicemen: 800 m in 3 min 15 sec.",
  },
  salary:
    "Madhya Pradesh state pay structure, Rs 19,500 to Rs 62,000 per month. With dearness allowance, HRA and police allowances, in-hand pay at entry is about Rs 28,000 to Rs 35,000 depending on posting city and current DA. Police line accommodation available at most postings.",
  application_fee: {
    general_and_other_states: "Rs 500",
    sc_st_obc_ews_mp_resident: "Rs 250",
    portal_charge_registered_citizen: "Rs 20",
    portal_charge_kiosk: "Rs 60",
    payment_mode: "Online at esb.mp.gov.in",
  },
  important_dates: {
    notificationDate: "2025-09-13",
    startDate: "2025-09-15",
    lastDate: "2025-09-29",
    correctionWindow: "Closed 4 October 2025",
    examDate: "Written CBT held 30 October to 15 December 2025",
    result: "Written result declared 25 January 2026",
    physicalTest: "PET and PMT held 23 February to 13 March 2026 across 10 districts",
    nextCycle: "No fresh General Duty notification as of 31 July 2026. Watch esb.mp.gov.in",
  },
  how_to_apply:
    "Applications are filed only on esb.mp.gov.in when a notification is live. Register and complete the MPESB profile, fill the form with details exactly as on your Class 10 certificate, enter domicile and category details accurately since fee concession and age relaxation depend on them, upload photograph and signature in the specified format, pay the fee (Rs 500 general and other states, Rs 250 for SC, ST, OBC and EWS resident in MP) plus the portal charge, submit and save the application number, use the correction window if needed, then download the admit card when released. The application window in the last cycle was two weeks.",
  selection_process:
    "**Stage 1: Computer Based Test (CBT)** 100 questions, 100 marks, 120 minutes, Hindi and English, 1 mark per correct answer and NO negative marking. Reported split: General Knowledge and current affairs 40, reasoning and mental ability 30, science and basic mathematics 30. This is the only stage counting towards merit.\n\n**Stage 2: Physical Measurement Test (PMT) and Physical Efficiency Test (PET)** Height and chest measurement, then 800 m run, long jump and shot put. Qualifying.\n\n**Stage 3: Document Verification** Domicile, category, education and date of birth documents.\n\n**Stage 4: Medical Examination** As per Madhya Pradesh Police standards.\n\nFinal merit is prepared from the CBT score alone, subject to clearing every other stage.",
  reading_time: "13 min read",
};

await replaceJob({ slug: "mp-police-constable-2026", title, description, content, fields });
