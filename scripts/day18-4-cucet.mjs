// Day 18 (Tue 2026-08-11) — CUCET 2026 (Chandigarh University) 800w -> 3000w+.
// Verified 2026-08-11. NOT a duplicate of cuet-ug-2026: that is NTA's national Common
// University Entrance Test for central universities; this is Chandigarh University's own
// private entrance-cum-scholarship test. Confirmed by reading both DB rows.
// Facts: conducted by Chandigarh University for UG and PG admission plus scholarship of up to
// 100 per cent; online CBT; run TWICE a year as Phase I and Phase II; syllabus covers English,
// Quantitative Aptitude, Logical Reasoning and General Awareness, varying by stream;
// application fee Rs 1,000; portal cucet.cuchd.in; eligibility per university policy.
// MOAT: the CUCET vs CUET confusion is the single most useful thing to clear up, since the
// acronyms are near-identical and the exams are completely different. Also handled honestly:
// "up to 100 per cent scholarship" is a tiered structure where the headline tier reaches few,
// and this is a private university cost decision rather than a government exam.
import { createExam } from "./lib/create-exam.mjs";

const CONTENT = `## CUCET is not CUET, and the difference matters

CUCET 2026 is the Chandigarh University Common Entrance Test, an entrance-cum-scholarship examination conducted by Chandigarh University for admission to its own undergraduate and postgraduate programmes.

The first thing to establish is that this is a different examination from CUET, despite the acronyms being one letter apart. Candidates conflate them constantly, and the consequences of doing so are real.

| | CUCET | [CUET UG](/entrance-exams/cuet-ug-2026) |
|---|---|---|
| Full name | Chandigarh University Common Entrance Test | Common University Entrance Test |
| Conducted by | Chandigarh University | National Testing Agency |
| Type of institution | A single private university | Central and participating state universities |
| Admits to | Chandigarh University campuses only | Delhi University, JNU, BHU, Jamia and many others |
| Purpose | Admission plus scholarship determination | Admission |
| Fee | Rs 1,000 | NTA fee, varies by subject count and category |

If your goal is admission to a central university such as Delhi University or BHU, CUCET does nothing for you and CUET is the examination you need. If your goal is Chandigarh University specifically, CUCET is the route and it also determines what scholarship you receive.

A candidate who sits CUCET believing it opens central universities has spent Rs 1,000 and a day on the wrong examination. That is the confusion worth clearing before anything else.

## What CUCET is for

CUCET serves two purposes at once, and the second is the more consequential.

It is an admission test for Chandigarh University's undergraduate and postgraduate programmes, spanning engineering, management, pharmacy, and a range of other disciplines across the university's campuses.

It is also a scholarship test. Performance in CUCET determines the scholarship a candidate receives, advertised as up to 100 per cent on tuition for different academic programmes.

That dual function is why the examination matters even to a candidate who is confident of admission. The score does not only decide whether you get in; it decides what you pay, and across a four-year engineering degree or a two-year postgraduate programme, that difference runs into lakhs.

## How the scholarship structure actually works

This deserves plain treatment, because "up to 100 per cent scholarship" is a phrase that does more work in marketing than in most students' fee receipts.

Scholarship schemes of this kind are tiered by score. The top band, carrying the full or near-full waiver, is available to a small number of very high scorers. Below it sit progressively smaller waivers across broader score bands, and below those, no waiver at all.

So the honest way to read the headline is as the ceiling rather than the expectation. A strong but not exceptional score typically produces a partial waiver, which is genuinely valuable but is not the advertised figure.

Two practical implications follow.

First, the examination is worth preparing for properly even if admission is not in doubt, because the marginal return on a higher score is measured in fee reduction rather than in access.

Second, before committing, establish the actual number. Ask the university, in writing, what waiver your score band attracts, on which components of the fee, for how many years, and under what conditions it continues. Scholarships are frequently conditional on maintaining a minimum grade point average during the course, and a waiver withdrawn in second year because a condition was missed is a serious financial problem mid-degree.

Ask specifically whether the waiver applies to tuition only or also to hostel, mess and other charges, since those are a substantial share of the total and are commonly excluded.

## Exam pattern

CUCET is an online computer-based test, and its structure varies by the stream you are applying to.

The common ground across streams is a general aptitude component covering English Language, Quantitative Aptitude, Logical Reasoning and General Awareness. Stream-specific sections are added on top: engineering applicants face Physics, Chemistry and Mathematics content, management applicants a business and aptitude emphasis, and pharmacy and other professional programmes their relevant subject areas.

Because the composition differs by programme, the correct source for your paper's exact structure is the syllabus page for your specific programme on cucet.cuchd.in rather than a general description. Check it before you build a preparation plan.

The examination is conducted twice a year, in Phase I and Phase II. That two-phase structure is useful: a candidate who is not ready for the first phase, or who is dissatisfied with their result, has a second opportunity within the same admission cycle rather than waiting a full year.

## Syllabus

The general sections draw on standard aptitude material.

English Language covers reading comprehension, grammar and usage, vocabulary, sentence correction and para completion.

Quantitative Aptitude covers arithmetic including percentages, ratio and proportion, averages, profit and loss, time and work, and time and distance, along with basic algebra, geometry and data interpretation, generally at Class 10 to 12 level.

Logical Reasoning covers series, analogies, coding and decoding, blood relations, directions, arrangements, syllogisms and puzzles.

General Awareness covers current affairs, general science, basic economics and polity, sports and awards.

For engineering applicants, the stream sections track the Class 11 and 12 Physics, Chemistry and Mathematics curriculum, which means preparation overlaps substantially with [JEE Main](/entrance-exams/jee-main-2027). A candidate preparing for JEE Main needs relatively little additional work for CUCET's engineering paper, which is worth knowing when planning the year.

## Eligibility

Eligibility is set by Chandigarh University policy rather than by a central regulator, and it varies by programme.

Broadly, undergraduate programmes require Class 12 completion with the subject combination relevant to the programme, and engineering programmes require Physics and Mathematics with Chemistry or an accepted alternative. Postgraduate programmes require a relevant bachelor's degree.

Minimum percentage requirements differ by programme, and because they are set by the university rather than by statute they can be revised between cycles.

The practical instruction is to read the eligibility conditions for your specific programme on the official portal rather than relying on a general statement, since a candidate who applies to a programme they do not qualify for loses the application fee.

## Application and fee

Applications are accepted online and offline, with the online route on cucet.cuchd.in. The application fee is Rs 1,000.

The process runs as follows.

1. Register on cucet.cuchd.in with a valid email address and mobile number.
2. Select the programme and campus you are applying to, checking the eligibility conditions for that specific programme first.
3. Complete the application with academic details exactly as on your certificates.
4. Upload photograph, signature and the required documents in the specified format.
5. Pay the Rs 1,000 fee.
6. Select your test phase and slot where the process allows.
7. Submit and retain the application number and confirmation.
8. Download the admit card when released and sit the examination.

## Thinking clearly about a private university entrance test

Since this site covers government recruitment and government-funded education, it is worth being straightforward about where an examination like this fits.

Chandigarh University is a private institution, and its programmes are priced accordingly. The scholarship structure reduces that cost for higher scorers but does not eliminate the fundamental difference between private fees and those at a government-funded institution.

For a candidate weighing options, the honest comparison is against the alternatives for the same qualification.

For engineering, [JEE Main](/entrance-exams/jee-main-2027) leads to the NITs, IIITs, centrally funded institutions and state government engineering colleges, where fees are a fraction of private levels, and onward to JEE Advanced and the IITs. State engineering entrance examinations lead to state government colleges on similar terms.

For management, [CAT](/entrance-exams/cat-2026) leads to the IIMs and several hundred other institutions, and [MAT](/entrance-exams/mat-september-2026), [XAT](/entrance-exams/xat-2027), [SNAP](/entrance-exams/snap-2026) and [NMAT](/entrance-exams/nmat-2026) cover a wide range of business schools at varying cost levels.

For undergraduate degrees generally, [CUET UG](/entrance-exams/cuet-ug-2026) leads to central universities where fees are very substantially lower than private equivalents.

None of that makes a private university the wrong choice. Placement outcomes, campus facilities, programme availability and admission certainty all legitimately enter the decision, and a candidate who does not secure a government college seat has to go somewhere. The point is simply that the decision should be made with the full cost of the degree in view, against the alternatives, rather than on the strength of a scholarship headline.

Work out the total: tuition across all years after the waiver you will actually receive, plus hostel, mess and other charges, plus the years of foregone earnings. Then compare that against what the same qualification costs elsewhere. That arithmetic, done honestly before applying, is worth more than any amount of preparation advice.

## Questions worth asking before you commit

Because this is a fee-paying decision rather than only an examination, a short list of questions saves a great deal of later difficulty. Ask them of the admissions office and get the answers in writing rather than verbally.

On the scholarship: what waiver does my score band attract, on which fee components, for how many years, and what academic performance must I maintain to keep it? What happens if I fall below that in one semester?

On the total cost: what is the full fee for all years of the programme, including tuition, hostel, mess, examination fees, and any one-time charges? What has the annual increase been over the past three years, since fees typically rise during a degree?

On placements: what proportion of the previous graduating batch in my specific programme was placed, at what median salary rather than the highest package, and with which employers? Headline figures usually reflect the best outcomes in the strongest programme rather than the typical outcome in yours.

On accreditation and recognition: is the programme approved by the relevant regulator for my field, such as AICTE for engineering or PCI for pharmacy? This matters a great deal, because eligibility for government recruitment and for further study frequently depends on the degree coming from a recognised programme, and a qualification that fails that test closes doors years later.

On refunds: what is the refund policy if I withdraw after paying but before classes start, or in the first weeks? Candidates holding a private seat as insurance while awaiting a government college allotment need to know exactly what withdrawal costs, in rupees, before they pay anything.

An institution confident in its offering answers these readily. Reluctance to put answers in writing is itself informative.

## How to prepare

Establish your paper's exact composition first, from the syllabus page for your specific programme. Preparing for a general aptitude test when your paper is two-thirds Physics, Chemistry and Mathematics is wasted effort, and the reverse is equally wasteful.

For engineering applicants already preparing for JEE Main, the stream sections need little extra work; concentrate the additional effort on the general aptitude components, particularly General Awareness, which JEE preparation does not touch at all.

For the general sections, work timed practice sets rather than reading theory. Aptitude tests reward speed and pattern recognition, both of which come from volume.

Give General Awareness deliberate attention. It is the section candidates most often skip entirely and the one that responds most directly to a few weeks of current affairs reading, which makes it cheap marks.

Use the two-phase structure. Sitting Phase I gives you a real result to work with and a genuine second opportunity in Phase II if the scholarship band you reached is not the one you wanted.

## Timing CUCET against the government exam calendar

The sequencing matters, because a private university offer and a government college allotment arrive at different points in the year and a candidate needs a plan for the gap.

Private university admissions, including Chandigarh University's, generally open early and confirm seats well before government counselling concludes. Government processes run later: JEE Main results and JoSAA counselling for engineering, CUET results and central university admissions for general degrees, and state counselling later still, sometimes stretching into the autumn.

That creates a familiar dilemma. A candidate holding a confirmed private offer in, say, May faces the choice of paying a fee to secure it while waiting on a government allotment that may or may not come in July or August.

Three practical approaches.

Establish the refund policy before paying anything, as noted above. The cost of holding a private seat as insurance is whatever you forfeit on withdrawal, and that number should be known rather than assumed.

Sit the government examinations regardless. A candidate who has accepted a private offer and stops preparing for JEE Main or CUET has closed a door that was still open, and the marginal cost of continuing preparation is low.

Do not let a deadline drive a decision you have not costed. Admissions offices apply time pressure, sometimes considerable, and a fee decision worth several lakhs across a degree deserves more than the two days a deadline allows. If the offer is genuine it will generally survive a request for more time; if it will not, that is information too.

Use the two-phase CUCET structure to your advantage here. Sitting Phase I early gives you a known scholarship band to weigh against your government options, rather than an unknown, and Phase II remains available if you want to improve on it after government results are clearer.

## Frequently asked questions

**What is the difference between CUCET and CUET?**
They are entirely different examinations despite near-identical acronyms. CUCET is the Chandigarh University Common Entrance Test, conducted by one private university for admission and scholarship determination at its own campuses. CUET is the Common University Entrance Test conducted by the National Testing Agency for admission to central universities such as Delhi University, JNU and BHU. If you want a central university, CUCET does nothing for you.

**What is CUCET 2026 used for?**
Two things. It is the admission test for Chandigarh University's undergraduate and postgraduate programmes across engineering, management, pharmacy and other disciplines, and it is also a scholarship test, with performance determining the fee waiver a candidate receives, advertised as up to 100 per cent.

**How does the CUCET scholarship actually work?**
It is tiered by score. The top band carrying a full or near-full waiver reaches a small number of very high scorers, with progressively smaller waivers across broader bands below it and no waiver at the bottom. The advertised figure is the ceiling rather than the expectation. Before committing, ask the university in writing what waiver your score band attracts, whether it covers tuition only or also hostel and mess charges, for how many years, and what conditions must be maintained to keep it.

**How many times a year is CUCET conducted?**
Twice, as Phase I and Phase II. That structure means a candidate who is not ready for the first phase, or who is dissatisfied with the scholarship band their score reached, has a genuine second opportunity within the same admission cycle rather than waiting a full year.

**What is the CUCET exam pattern?**
An online computer-based test whose composition varies by stream. All streams include a general aptitude component covering English Language, Quantitative Aptitude, Logical Reasoning and General Awareness, with stream-specific sections added: Physics, Chemistry and Mathematics for engineering, a business and aptitude emphasis for management, and relevant subjects for pharmacy and other professional programmes. Check the syllabus page for your specific programme on cucet.cuchd.in, since a general description will not tell you your paper's structure.

**What is the CUCET application fee?**
Rs 1,000, paid during the application on cucet.cuchd.in. Applications are accepted online and offline.

**What is the eligibility for CUCET 2026?**
Set by Chandigarh University policy rather than a central regulator, and varying by programme. Broadly, undergraduate programmes require Class 12 with the relevant subject combination, with engineering requiring Physics and Mathematics plus Chemistry or an accepted alternative, and postgraduate programmes require a relevant bachelor's degree. Minimum percentage requirements differ by programme and can be revised between cycles, so read the conditions for your specific programme before paying the fee.

**Is CUCET preparation the same as JEE Main preparation?**
For the engineering stream sections, substantially yes: they track the Class 11 and 12 Physics, Chemistry and Mathematics curriculum, so a JEE Main aspirant needs little additional subject work. The gap is the general aptitude component, particularly General Awareness, which JEE preparation does not cover at all and which is where the extra effort should go.

**Is Chandigarh University a government university?**
No, it is a private institution and its programmes are priced accordingly. The scholarship structure reduces the cost for higher scorers but does not close the gap with government-funded institutions. That is worth understanding when comparing options rather than discovering after admission.

**What are the alternatives to CUCET for the same qualifications?**
For engineering, JEE Main leads to the NITs, IIITs, centrally funded institutions and state government colleges at a fraction of private fees, and onward to JEE Advanced and the IITs, with state engineering entrances covering state government colleges. For management, CAT leads to the IIMs and hundreds of other institutes, with MAT, XAT, SNAP and NMAT covering a wide range at varying cost. For undergraduate degrees generally, CUET UG leads to central universities where fees are substantially lower.

**How should I decide whether a private university is worth it?**
Do the arithmetic before applying. Total the tuition across all years after the waiver you will actually receive, add hostel, mess and other charges, and compare that against what the same qualification costs at a government-funded institution. Placement outcomes, facilities, programme availability and admission certainty all legitimately count in the decision, but they should be weighed against the real total cost rather than against a scholarship headline.

**Where do I apply for CUCET 2026?**
On cucet.cuchd.in, the official Chandigarh University admission portal, with an offline route also available. Register with a valid email and mobile number, select your programme and campus after checking that programme's eligibility conditions, complete the application with details exactly as on your certificates, upload documents in the specified format, pay the Rs 1,000 fee, select your test phase and slot where offered, and retain the application number.`;

const FAQS = [];

const ROW = {
  slug: "cucet-2026",
  title: "CUCET 2026: Chandigarh University Test and Scholarship",
  conducting_body: "Chandigarh University",
  exam_date:
    "Conducted TWICE a year as Phase I and Phase II, online computer-based. Specific phase dates and slots are published on cucet.cuchd.in. The two-phase structure gives a candidate a genuine second opportunity within the same admission cycle.",
  application_start: null,
  application_end: null,
  eligibility:
    "Set by Chandigarh University policy rather than a central regulator, and varying by programme. Broadly: undergraduate programmes require Class 12 with the subject combination relevant to the programme, with engineering requiring Physics and Mathematics plus Chemistry or an accepted alternative; postgraduate programmes require a relevant bachelor's degree. Minimum percentage requirements differ by programme and can be revised between cycles, so read the conditions for your specific programme on the official portal before paying the fee.",
  syllabus:
    "Composition varies by stream. Common general aptitude component: English Language (reading comprehension, grammar and usage, vocabulary, sentence correction, para completion); Quantitative Aptitude (arithmetic including percentages, ratio and proportion, averages, profit and loss, time and work, time and distance, plus basic algebra, geometry and data interpretation at Class 10 to 12 level); Logical Reasoning (series, analogies, coding and decoding, blood relations, directions, arrangements, syllogisms, puzzles); General Awareness (current affairs, general science, basic economics and polity, sports and awards). Stream-specific sections are added on top: Physics, Chemistry and Mathematics tracking the Class 11 and 12 curriculum for engineering, a business and aptitude emphasis for management, and relevant subjects for pharmacy and other professional programmes. Engineering preparation overlaps substantially with JEE Main, so the additional effort belongs in General Awareness, which JEE preparation does not cover.",
  exam_pattern:
    "Online computer-based test, conducted twice yearly as Phase I and Phase II, with composition varying by stream. IMPORTANT: this is NOT the same examination as CUET. CUCET is Chandigarh University's own entrance-cum-scholarship test admitting only to its campuses; CUET is the National Testing Agency's Common University Entrance Test for central universities such as Delhi University, JNU and BHU. Candidates conflate them and sit the wrong exam. CUCET serves two purposes: admission to Chandigarh University programmes, and determination of a fee waiver advertised as up to 100 per cent. That scholarship is TIERED by score, with the top band reaching few candidates and progressively smaller waivers below, so the headline figure is a ceiling rather than an expectation. Before committing, establish in writing what waiver your score band attracts, whether it covers tuition only or also hostel and mess charges, for how many years, and what academic conditions must be maintained to retain it. Application fee Rs 1,000, online and offline routes, portal cucet.cuchd.in.",
  admit_card_link: "https://cucet.cuchd.in/",
  result_link: "https://cucet.cuchd.in/",
  official_link: "https://cucet.cuchd.in/",
  category: "management",
  state: "all-india",
  reading_time: "11 min read",
  description:
    "CUCET 2026 is Chandigarh University's own entrance and scholarship test, not NTA's CUET. Check the pattern, how the tiered scholarship works and the fee.",
  content: CONTENT,
};

const FAQ_BLOCK = FAQS.map((f) => `\n\n**${f.question}**\n\n${f.answer}`).join("");
ROW.content = ROW.content + FAQ_BLOCK + "\n";

await createExam(ROW, 3000);
