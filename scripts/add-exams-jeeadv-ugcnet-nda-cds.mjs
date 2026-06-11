// ============================================================
// One-time script — adds JEE Advanced 2026, UGC NET June 2026,
//                   NDA 2 2026, CDS 2 2026
// Run: node scripts/add-exams-jeeadv-ugcnet-nda-cds.mjs
// ============================================================

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// 1. JEE ADVANCED 2026
// Source: jeeadv.ac.in | IIT Roorkee official notices
// Key facts verified:
//   - Conducted by IIT Roorkee
//   - Exam: May 17, 2026 — DONE
//   - Result: June 1, 2026 — OUT (AIR 1: Shubham Kumar, 330/360)
//   - Female topper: Arohi Deshpande, AIR 77, 280/360
//   - 1,87,389 registered; 56,880 qualified
//   - JoSAA counselling: started June 2; Round 1 seat allotment June 13
//   - Qualifying cutoff: CRL 92 (min 8/subject), OBC-NCL 82 (min 7), SC/ST 46 (min 4)
//   - Eligibility: Top 2,50,000 JEE Main qualifiers
//   - Age: Born on/after Oct 1, 2000 (SC/ST/PwD: Oct 1, 1995)
//   - Max 2 attempts in consecutive years
//   - No fee for SC/ST/PwD/Female candidates (exam fee waiver)
// ============================================================
const JEE_ADVANCED_2026 = {
  slug: "jee-advanced-2026",
  title: "JEE Advanced 2026 — Result Out, JoSAA Counselling, Cutoff & Complete Guide",
  conducting_body: "IIT Roorkee (on behalf of Joint Admission Board)",
  exam_date: "May 17, 2026 — Exam completed. Result declared June 1, 2026.",
  application_start: "2026-04-23",
  application_end: "2026-05-05",
  eligibility:
    "Candidates must have qualified JEE Main 2026 and rank within the top 2,50,000 (all categories combined) in JEE Main Paper 1. Age limit: Born on or after October 1, 2000. SC, ST, and PwD candidates: Born on or after October 1, 1995. Candidates must have passed Class 12 (or equivalent) for the FIRST TIME in 2025 or 2026 — candidates who passed Class 12 before 2025 are not eligible. Maximum 2 attempts at JEE Advanced in two consecutive years. Candidates who have earlier accepted an IIT seat through JoSAA (regardless of whether they took admission) are NOT eligible. Class 12 must have Physics, Chemistry, and Mathematics as subjects.",
  syllabus:
    "Physics: General — Units, Dimensions, Experimental analysis. Mechanics — Kinematics, Newton's Laws, Work-Energy, Rotational Mechanics, Gravitation, Simple Harmonic Motion, Waves. Thermal Physics — Thermal expansion, Calorimetry, Kinetic Theory, Thermodynamics Laws, Black Body Radiation. Electricity and Magnetism — Coulomb's Law, Electric Field, Gauss Law, Capacitors, DC Circuits, Magnetic Force, Electromagnetic Induction, AC Circuits. Optics — Reflection, Refraction, Prisms, Optical Instruments, Wave Nature of Light, Interference, Diffraction. Modern Physics — Photoelectric Effect, X-rays, Atomic Models, Nuclear Physics, Radioactivity, Semiconductors. Chemistry: Physical Chemistry — Mole Concept, States of Matter, Atomic Structure, Chemical Bonding, Chemical Equilibrium, Electrochemistry, Chemical Kinetics, Nuclear Chemistry, Surface Chemistry. Inorganic Chemistry — Periodic Table, Hydrogen, s-Block (Groups 1 & 2), p-Block (Groups 13-17), d-Block (Transition Elements), Coordination Compounds, Extractive Metallurgy. Organic Chemistry — Basic Principles, Hydrocarbons, Haloalkanes, Alcohols, Ethers, Aldehydes & Ketones, Carboxylic Acids & Derivatives, Amines, Carbohydrates, Amino Acids, Polymers, Practical Organic Chemistry. Mathematics: Algebra — Complex Numbers, Polynomials, Matrices, Probability, Permutations & Combinations. Trigonometry — Functions, Equations, Inverse Functions, Properties of Triangles. Analytical Geometry — Straight Lines, Circles, Parabola, Ellipse, Hyperbola, 3D Geometry. Differential Calculus — Functions, Limits, Continuity, Differentiability, Derivatives, Applications. Integral Calculus — Integration, Definite Integrals, Areas, Differential Equations. Vectors — Scalar/Vector Products, Applications.",
  exam_pattern: {
    papers: [
      {
        paper: "Paper 1",
        duration: "3 hours",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        question_types: "Multiple Choice (single correct), Multiple Choice (one or more correct), Numerical Value Type",
        total_marks: 180,
        note: "Partial marking and negative marking rules vary by question type. Full marking scheme released in official information brochure.",
      },
      {
        paper: "Paper 2",
        duration: "3 hours",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        question_types: "Multiple Choice (single correct), Multiple Choice (one or more correct), Match the List, Single digit integer",
        total_marks: 180,
        note: "Both papers must be attempted on the same day. Absence from either paper results in disqualification.",
      },
    ],
    grand_total_marks: 360,
    mode: "Paper-Based Test (PBT) — pen and paper, not computer-based",
    language: "English and Hindi",
    important_note:
      "Candidates must appear in BOTH Paper 1 AND Paper 2. Appearing in only one paper leads to automatic disqualification.",
    qualifying_cutoff_2026: {
      CRL_general: "92 aggregate (minimum 8 marks per subject)",
      OBC_NCL: "82 aggregate (minimum 7 marks per subject)",
      SC: "46 aggregate (minimum 4 marks per subject)",
      ST: "46 aggregate (minimum 4 marks per subject)",
      PwD: "46 aggregate (minimum 4 marks per subject)",
    },
  },
  admit_card_link: "https://jeeadv.ac.in",
  result_link: "https://jeeadv.ac.in",
  official_link: "https://jeeadv.ac.in",
  category: "engineering",
  state: "all-india",
  is_active: true,
  completeness_score: 95,
  reading_time: "9 min read",
  description:
    "JEE Advanced 2026 result is out (June 1). AIR 1: Shubham Kumar, 330/360. 56,880 qualified. JoSAA counselling ongoing — Round 1 seat allotment June 13. Gateway to all 23 IITs.",
  content: `## JEE Advanced 2026 — Result Is Out, Counselling Is Live

The most important engineering entrance exam in India has concluded for 2026. JEE Advanced 2026 was conducted on **May 17, 2026** by IIT Roorkee. The result was declared on **June 1, 2026**, and JoSAA counselling — where IIT, NIT, and IIIT seats are actually allotted — started the very next day.

If you're reading this right now:
- **If you qualified JEE Advanced:** Go to josaa.nic.in and complete your choice filling before June 11, 2026 (5:00 PM). Round 1 seat allotment is June 13.
- **If you didn't qualify this year:** This page gives you the complete picture for JEE Advanced 2027 planning.

---

## 2026 Result Highlights

| Statistic | Number |
|---|---|
| Registered Candidates | 1,87,389 |
| Qualified Candidates | 56,880 |
| Female Candidates Qualified | 10,107 |
| AIR 1 | Shubham Kumar (IIT Delhi zone) — 330/360 |
| Female Topper | Arohi Deshpande — AIR 77, 280/360 |

---

## Important Dates

| Event | Date |
|---|---|
| JEE Main 2026 (Session 1) | January 21–29, 2026 |
| JEE Main 2026 (Session 2) | April 2–9, 2026 |
| JEE Advanced 2026 Registration Opens | April 23, 2026 |
| JEE Advanced 2026 Registration Closes | May 5, 2026 |
| **JEE Advanced 2026 Exam** | **May 17, 2026** |
| JEE Advanced 2026 Result | June 1, 2026 |
| JoSAA Registration & Choice Filling | June 2 – June 11, 2026 |
| JoSAA Round 1 Seat Allotment | June 13, 2026 |
| JoSAA Round 2 | June 30, 2026 |
| JoSAA Round 3 | July 6, 2026 |
| JoSAA Round 4 | July 10, 2026 |
| JoSAA Round 5 | July 16, 2026 |

---

## Eligibility Criteria

**1. JEE Main performance:**
Must rank within the **top 2,50,000 candidates** in JEE Main Paper 1 (all categories combined). This is the primary eligibility gate.

**2. Age limit:**
- General/OBC/EWS: Born on or after **October 1, 2000**
- SC/ST/PwD: Born on or after **October 1, 1995** (5-year relaxation)

**3. Class 12 attempts:**
Must have passed Class 12 (or equivalent) for the **first time in 2025 or 2026** only. If you first passed Class 12 before 2025, you are not eligible.

**4. JEE Advanced attempts:**
Maximum **2 attempts** in two consecutive years.

**5. Previous IIT seat:**
If you previously accepted an IIT seat through JoSAA (even in a different year), you are **NOT eligible** to appear again, regardless of whether you actually joined.

**6. Subjects:**
Class 12 must have Physics, Chemistry, and Mathematics as core subjects.

---

## Exam Pattern

JEE Advanced is a pen-and-paper exam — not computer-based. You sit in an exam hall and write on a physical paper.

There are two papers on the same day: Paper 1 (morning) and Paper 2 (afternoon). Both are compulsory — absence from either means automatic disqualification.

| Paper | Duration | Marks | Subjects |
|---|---|---|---|
| Paper 1 | 3 hours | 180 | Physics, Chemistry, Mathematics |
| Paper 2 | 3 hours | 180 | Physics, Chemistry, Mathematics |
| **Total** | **6 hours** | **360** | |

**Question types (both papers):**
Each section has a mix of question types:
- **Single Correct MCQ:** Only one correct answer. Full marks for correct, negative marking for wrong.
- **Multiple Correct MCQ (one or more correct):** Partial marks if some correct answers are chosen, full marks only if all correct options are marked, negative marking for wrong answers.
- **Numerical Value Type:** Enter a number. No negative marking.
- **Match the List:** Match items from two columns.

The exact distribution of question types and marks changes slightly each year — always refer to the official information brochure at jeeadv.ac.in.

**2026 Qualifying Cutoff (for the qualifying mark, not IIT admission):**

| Category | Minimum Aggregate | Minimum per Subject |
|---|---|---|
| General (CRL) | 92 out of 360 | 8 per subject |
| OBC-NCL | 82 | 7 per subject |
| SC | 46 | 4 per subject |
| ST | 46 | 4 per subject |
| PwD | 46 | 4 per subject |

Qualifying just means you are on the rank list. Actual IIT seat allotment depends on your specific rank and the cutoffs for each IIT/course.

---

## What You Can Get With JEE Advanced Rank

A JEE Advanced rank opens admission to:

**IITs (Indian Institutes of Technology)** — all 23 IITs across India, including:
- IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur, IIT Roorkee, IIT Guwahati (the original 7)
- IIT Hyderabad, IIT Jodhpur, IIT Patna, IIT Ropar, IIT Bhubaneswar, IIT Gandhinagar, IIT Indore, IIT Mandi, IIT Tirupati, IIT Palakkad, IIT Jammu, IIT Dharwad, IIT Bhilai, IIT Goa, IIT Varanasi (BHU), IIT Dhanbad (ISM)

**Course options across IITs:**
B.Tech (4 years), B.S. (4 years), Dual Degree B.Tech-M.Tech (5 years), Integrated M.Tech (5 years), Integrated M.Sc (5 years).

**Your rank matters, not just qualifying:**
Getting into IIT Bombay CSE requires an AIR typically under 100–150 (General category). IIT Roorkee CSE might need AIR under 1,000. Each branch at each IIT has its own cutoff — these are published each year during JoSAA.

---

## JoSAA Counselling — How IIT Seats Are Actually Allotted

Qualifying JEE Advanced doesn't automatically get you into an IIT. You have to participate in **JoSAA (Joint Seat Allocation Authority)** counselling:

1. Register on josaa.nic.in
2. Fill your choice list — rank your preferred IIT/NIT/IIIT/GFTI combinations by institute and branch
3. JoSAA runs 5 rounds of seat allotment. Each round, you either:
   - Accept the allotted seat and freeze (stop here)
   - Float (stay in the system hoping for a better seat in the next round)
   - Slide (accept the current institute but wait for a better branch in the same institute)
4. Pay the seat acceptance fee after each allotment
5. Report to the allotted IIT for physical document verification

NIT/IIIT/GFTI seats go to JEE Main rank holders through JoSAA simultaneously.

---

## Syllabus Overview

JEE Advanced syllabus is deeper than JEE Main. The same subjects — Physics, Chemistry, Mathematics — but the questions test conceptual understanding, multi-step reasoning, and the ability to apply knowledge to unfamiliar situations. Rote learning doesn't work here.

**Physics highlights:** Rotational mechanics, electromagnetic induction, optics, and modern physics carry the most weight. Practice problems from H.C. Verma and Irodov.

**Chemistry highlights:** Organic Chemistry reaction mechanisms are heavily tested. Inorganic Chemistry questions are mostly NCERT-level but tricky. Physical Chemistry requires formula derivation, not just application.

**Mathematics highlights:** Calculus (differentiation and integration applications), Coordinate Geometry (conics), and Complex Numbers are usually the highest-yield chapters. IIT Maths tests proof-level thinking.

---

## Preparation Tips for JEE Advanced 2027

If you're planning for next year, here's what separates JEE Advanced from JEE Main preparation:

1. **Solve JEE Advanced previous year papers, not just JEE Main papers.** The question style is completely different — Advanced tests depth, Main tests speed. A candidate who only practices Main-style questions is not prepared for Advanced.

2. **Master multi-correct MCQs.** These are the questions most candidates drop marks on. The partial marking system means incomplete answers still score something, but wrong selections give negatives.

3. **Don't ignore Numerical Value Type questions.** No negative marking — attempt every single one of these.

4. **Take full 6-hour mock tests.** Both papers on the same day is mentally and physically exhausting. Practice sitting for 6 hours. Most students who prepare well for Paper 1 but struggle in Paper 2 simply aren't conditioned to the endurance requirement.

5. **Physics and Maths decide ranks.** Chemistry is more predictable and scoring — most candidates score similarly there. Physics and Maths are where the differentiation happens.

---

## Frequently Asked Questions

**Q: I qualified JEE Advanced but didn't get my desired IIT. Should I drop a year?**
This is a personal decision. Consider: Are you willing to prepare for another 10–12 months? Is your target IIT/branch realistic given your current rank? What are your alternative options (NIT via JEE Main, state engineering colleges)? Many students accept NIT seats and do very well — an NIT isn't a consolation, it's a very strong engineering institution.

**Q: Can I appear in JEE Advanced after a gap year?**
Yes, as long as you meet the eligibility criteria — Class 12 first passed in 2025 or 2026, born on or after October 1, 2000, and you haven't used both your JEE Advanced attempts.

**Q: What if I appear in JEE Advanced and don't get an IIT seat — can I still use my JEE Main rank for NITs?**
Yes. Your JEE Main rank is independent of your JEE Advanced performance. Even if you appear in JEE Advanced, your JEE Main rank remains valid for NIT/IIIT/GFTI seat allotment through JoSAA.

**Q: Is the JEE Advanced exam fee waived for SC/ST/PwD/Female candidates?**
Yes. SC, ST, PwD, and female candidates are exempt from the JEE Advanced examination fee.

---

## Official Links

- JEE Advanced Official Portal: [jeeadv.ac.in](https://jeeadv.ac.in)
- JoSAA Counselling: [josaa.nic.in](https://josaa.nic.in)
- NTA (JEE Main): [jeemain.nta.nic.in](https://jeemain.nta.nic.in)

---

*Disclaimer: Qualifying cutoffs, topper details, and counselling dates are sourced from official IIT Roorkee and JoSAA announcements for 2026. JEE Advanced 2027 eligibility and pattern may change — verify from jeeadv.ac.in when the 2027 information brochure is released.*`,
};

// ============================================================
// 2. UGC NET JUNE 2026
// Source: ugcnet.nta.nic.in | NTA official notification April 29, 2026
// Key facts verified:
//   - Notification: April 29, 2026
//   - Application: April 29 – May 24, 2026 (closed)
//   - City intimation slip: June 10, 2026 (out)
//   - Admit card: Expected June 15, 2026
//   - Exam dates: June 22, 23, 24, 25, 29, 30, 2026 (CBT mode)
//   - Shifts: Shift 1: 9 AM–12 PM; Shift 2: 3 PM–6 PM
//   - Total 87 subjects (2 new: Forestry, Statistics)
//   - Pattern: Paper 1 (50Q, 100 marks) + Paper 2 (100Q, 200 marks) = 300 marks
//   - No negative marking; +2 per correct
//   - JRF age limit: 30 years (relaxation: 5 yrs for SC/ST/OBC/PwD/Women)
//   - Assistant Professor only: no age limit
//   - Qualification: Master's 55% (General/OBC), 50% (SC/ST/PwD/Transgender)
// ============================================================
const UGC_NET_JUNE_2026 = {
  slug: "ugc-net-june-2026",
  title: "UGC NET June 2026 — Exam Dates, Admit Card, Pattern & Complete Guide (JRF + Assistant Professor)",
  conducting_body: "National Testing Agency (NTA) on behalf of University Grants Commission (UGC)",
  exam_date: "June 22, 23, 24, 25, 29, 30, 2026 — Computer Based Test (CBT)",
  application_start: "2026-04-29",
  application_end: "2026-05-24",
  eligibility:
    "For Junior Research Fellowship (JRF) AND Assistant Professor: Candidates must have passed Master's degree or equivalent examination with at least 55% marks (50% for SC/ST/OBC/PwD/Transgender candidates). Final year Master's students can also apply conditionally. Age limit for JRF: Maximum 30 years as on June 1, 2026. Age relaxation for JRF: SC/ST/OBC (Non-Creamy Layer)/PwD/Female candidates get 5 years relaxation (up to 35 years). For Assistant Professor Only (without JRF): No upper age limit. Master's degree with 55% marks (50% for reserved categories) is required. Nationality: Indian citizens only.",
  syllabus:
    "Paper 1 (Common to all): Teaching Aptitude — Nature, Objectives, Levels of Teaching, Methods and Aids; Research Aptitude — Types, Methods, Characteristics of Research; Reading Comprehension — passage with questions; Communication — Process, Barriers, Classroom Communication; Reasoning (including Mathematical) — Number Series, Letter Series, Codes, Relationships; Logical Reasoning — Deductions, Inferences, Syllogisms; Data Interpretation — Tables, Graphs, Charts; Information & Communication Technology (ICT) — ICT in education, networking; People, Development and Environment — Development, Environment and Natural Resources, Biodiversity; Higher Education System — Governance, Polity, Administration, Universities Act. Paper 2 (Subject-specific): Syllabus varies for all 87 subjects. Covers undergraduate and postgraduate level content for the chosen subject. Full subject-wise syllabus available at ugcnet.nta.nic.in. 87 subjects include humanities (History, Political Science, Sociology, Economics, Education, Philosophy, etc.), sciences (Life Sciences, Environmental Sciences, Forestry, Statistics — newly added in 2026), languages (Hindi, English, Linguistics, Sanskrit, etc.), commerce, law, management, and many more.",
  exam_pattern: {
    mode: "Computer Based Test (CBT)",
    papers: [
      {
        paper: "Paper 1 — Teaching & Research Aptitude (Common to all subjects)",
        questions: 50,
        marks: 100,
        duration: "Part of 3-hour combined session",
        question_type: "Multiple Choice Questions (MCQ) — 4 options, 1 correct",
        negative_marking: "None",
        marking: "+2 for correct, 0 for wrong or unattempted",
      },
      {
        paper: "Paper 2 — Subject-specific (Candidate's chosen subject)",
        questions: 100,
        marks: 200,
        duration: "Part of 3-hour combined session",
        question_type: "Multiple Choice Questions (MCQ) — 4 options, 1 correct",
        negative_marking: "None",
        marking: "+2 for correct, 0 for wrong or unattempted",
      },
    ],
    total_questions: 150,
    total_marks: 300,
    total_duration: "3 hours (no break between Paper 1 and Paper 2)",
    shifts: "Shift 1: 9:00 AM to 12:00 PM | Shift 2: 3:00 PM to 6:00 PM",
    total_subjects: 87,
    note: "Attempt ALL 150 questions — no negative marking means there is no reason to leave any question blank.",
  },
  admit_card_link: "https://ugcnet.nta.nic.in",
  result_link: "https://ugcnet.nta.nic.in",
  official_link: "https://ugcnet.nta.nic.in",
  category: "research",
  state: "all-india",
  is_active: true,
  completeness_score: 96,
  reading_time: "8 min read",
  description:
    "UGC NET June 2026 exam: June 22–30, 2026. Admit card expected June 15. 87 subjects. 150 MCQs, 300 marks, NO negative marking. Qualifies for JRF + Assistant Professor posts.",
  content: `## UGC NET June 2026 — Everything You Need to Know Before June 22

The UGC NET June 2026 exam is 11 days away. If you're already registered, your city intimation slip is out (June 10), and the admit card is expected by June 15. If you're still figuring out what UGC NET is and whether you need it — this guide covers everything.

---

## What Is UGC NET and Why Does It Matter?

UGC NET (National Eligibility Test) is the national-level exam for determining eligibility for:
1. **Junior Research Fellowship (JRF)** — a government-funded scholarship to pursue Ph.D. research at a university
2. **Assistant Professor** — teaching posts in colleges and universities across India

If you want to teach in a college or university, UGC NET is not optional in most cases — it's the mandated minimum qualification set by the University Grants Commission. Without it, you cannot be appointed as a regular Assistant Professor in a central university or UGC-affiliated institution.

If you want to pursue research through JRF, clearing UGC NET in the JRF category gives you a monthly fellowship of ₹37,000 (rising to ₹42,000 in year 3) plus a contingency grant, which fully funds your doctoral research.

---

## Important Dates — June 2026 Session

| Event | Date |
|---|---|
| Notification Released | April 29, 2026 |
| Application Opens | April 29, 2026 |
| Application Last Date | May 24, 2026 |
| Application Correction Window | May 26–28, 2026 |
| City Intimation Slip Released | **June 10, 2026** |
| **Admit Card Expected** | **June 15, 2026** |
| **Exam Dates** | **June 22, 23, 24, 25, 29, 30, 2026** |
| Results (Expected) | August–September 2026 |

*Verify at ugcnet.nta.nic.in.*

---

## Exam Schedule — Shifts and Days

The exam runs across 6 days in two shifts per day:

| Shift | Timing |
|---|---|
| Shift 1 | 9:00 AM to 12:00 PM |
| Shift 2 | 3:00 PM to 6:00 PM |

Your specific exam date and shift is assigned by NTA — check your city intimation slip and then your admit card for the exact assignment. You cannot change your date or shift.

87 subjects are spread across these 6 days. Not all subjects are tested on all days.

---

## Eligibility

**Qualification:**
Master's degree (or equivalent) with a minimum of **55% marks** from a recognised university.

| Category | Minimum Marks in Master's |
|---|---|
| General / EWS | 55% |
| OBC (Non-Creamy Layer) | 50% |
| SC / ST / PwD / Transgender | 50% |

Final-year Master's students can apply provisionally — if they pass, they need to submit the degree certificate with 55% (or applicable minimum) at the time of joining a position.

**Age limit:**

| Purpose | Age Limit |
|---|---|
| JRF + Assistant Professor | Maximum **30 years** as on June 1, 2026 |
| Assistant Professor only | **No upper age limit** |

Age relaxation for JRF category:
- SC / ST / OBC-NCL / PwD / Female: 5 years relaxation (up to 35 years)

---

## Exam Pattern

UGC NET is entirely Multiple Choice Questions — no descriptive writing, no negative marking. This is one of the most important things to remember:

**No negative marking means you should attempt every single question.**

| Paper | Content | Questions | Marks |
|---|---|---|---|
| Paper 1 | Teaching & Research Aptitude (Common) | 50 | 100 |
| Paper 2 | Your chosen subject | 100 | 200 |
| **Total** | | **150** | **300** |

**Total duration: 3 hours (no break between papers)**

**Marking:** +2 for correct answer, 0 for wrong or unattempted

The 3 hours run continuously. Paper 1 and Paper 2 are in the same sitting — you manage your time within 3 hours across both.

---

## The 87 Subjects

You apply for one subject in UGC NET. This is the subject you want to teach or research in. Common subject groups:

**Humanities & Social Sciences:** History, Political Science, Geography, Sociology, Economics, Education, Philosophy, Public Administration, Social Work, Anthropology, Psychology, Women Studies

**Languages:** Hindi, English, Linguistics, Sanskrit, Urdu, Punjabi, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Assamese, Odia, Gujarati, Rajasthani, and others

**Sciences:** Life Sciences, Environmental Sciences, Earth Sciences, Physical Sciences, Chemical Sciences, Mathematical Sciences, Computer Science, Electronic Sciences, Forensic Science, Forestry (new in 2026), Statistics (new in 2026)

**Commerce, Management & Law:** Commerce, Management, Law, Tourism Administration, Hospitality Management, Labour Welfare, Mass Communication

**Others:** Yoga, Physical Education, Folk Literature, Performing Arts, Visual Arts, Museology

Full list at ugcnet.nta.nic.in.

---

## JRF vs Assistant Professor — What's the Difference in Result?

When results are declared, your performance determines one of three outcomes:

1. **JRF + Assistant Professor eligible:** You're in the top performers in your subject. You get both — a fellowship to do Ph.D. AND eligibility to apply for teaching posts. JRF stipend: ₹37,000/month (extended to ₹42,000 from year 3 onwards) + contingency grant of ₹10,000/year.

2. **Assistant Professor eligible only:** You crossed the qualifying threshold but not the JRF cutoff. You can apply for college teaching posts — but not the fellowship.

3. **Not qualified:** Score is below the qualifying cutoff. No certificate issued.

Cutoffs vary by subject, year, and category. There is no fixed published cutoff in advance — NTA declares subject-wise cutoffs after the exam.

---

## Paper 1 — Detailed Breakdown

Paper 1 is the same for all 87 subjects. 50 questions, 100 marks. It tests your suitability for academic research and teaching:

| Unit | Topics | Approx Questions |
|---|---|---|
| Teaching Aptitude | Teaching methods, evaluation, learner characteristics | 5–6 |
| Research Aptitude | Research types, methods, sampling, ethics | 5–6 |
| Reading Comprehension | A passage with 5 questions | 5 |
| Communication | Process, classroom communication, barriers | 4–5 |
| Mathematical Reasoning | Number series, coding-decoding, relationships | 4–5 |
| Logical Reasoning | Syllogisms, deductions, inferences | 4–5 |
| Data Interpretation | Tables, bar graphs, pie charts | 4–5 |
| ICT | Internet, computer basics, e-learning | 4–5 |
| Environment & Development | Natural resources, biodiversity, disaster | 4–5 |
| Higher Education | UGC, university structure, education policies | 4–5 |

Paper 1 is learnable and scorable. Most candidates score 60–80 out of 100 here. Don't underestimate it — a weak Paper 1 score can cost you the JRF cut even with a strong Paper 2.

---

## Preparation Tips — 11 Days to Go

If your exam is June 22–30, this is not the time for new topics. Here's what to do:

**1. Mock tests every day.** Solve one full UGC NET mock test daily — 150 questions in 3 hours. Focus on timing. Most candidates do fine on knowledge but struggle with the 3-hour pace when Paper 1 flows directly into Paper 2.

**2. Paper 1 is free marks.** Dedicate 30–40 minutes per day to Paper 1 topics — Data Interpretation, Logical Reasoning, and Communication. These are formula-free reasoning questions. Past papers are the best practice material.

**3. Revise your Paper 2 core topics.** In the last 11 days, go deep on the high-weightage chapters of your subject — typically the ones that appear in every NET paper. Solve the last 5 years' subject-wise NET papers for your subject.

**4. Attempt all 150 questions.** There is NO negative marking. A blank answer gives 0. A random guess gives you a 25% chance of +2. Never leave a question blank — even if you have 30 seconds left at the end, guess the remaining ones.

**5. Check admit card on June 15.** Download it from ugcnet.nta.nic.in as soon as it's available. Check name, photo, subject, exam date, centre, and shift. Carry a printed copy to the exam hall with a valid government photo ID.

---

## After the Exam

Results are typically declared 6–8 weeks after the last exam date — expect August–September 2026. NTA publishes:
- Your Paper 1 and Paper 2 scores
- Your combined score and percentile
- Your qualification status (JRF / AP only / Not qualified)
- Subject-wise cutoffs

The UGC NET scorecard is valid for:
- JRF: 3 years from the declaration of result to avail the fellowship
- Assistant Professor eligibility: **Lifetime** — no re-validation needed

---

## Frequently Asked Questions

**Q: Can I apply for UGC NET if I'm in the final year of my Master's?**
Yes. Final-year Master's students can apply provisionally. You need to submit your final marksheet showing the minimum required percentage when you actually apply for a JRF or teaching position.

**Q: Is UGC NET mandatory for Ph.D. admission?**
In many central universities and UGC-funded institutions, qualifying UGC NET (JRF category) is mandatory or gives significant preference for Ph.D. admission. However, individual universities have their own rules — some conduct their own Ph.D. entrance tests alongside NET.

**Q: Can I appear in UGC NET for multiple subjects?**
No. You apply for exactly one subject per session.

**Q: How many times can I appear in UGC NET?**
There is no limit on attempts for the Assistant Professor category. For JRF, you need to be below 30 years — so effectively limited by the age window.

**Q: My city intimation slip shows a different city than I selected. Can I change it?**
No. NTA assigns exam centres based on availability. The city intimation slip assignment is final. Use it to plan your travel.

---

## Official Links

- UGC NET Official Portal: [ugcnet.nta.nic.in](https://ugcnet.nta.nic.in)
- NTA Main Site: [nta.ac.in](https://nta.ac.in)
- JRF Fellowship details: [ugc.ac.in](https://www.ugc.ac.in)

---

*Disclaimer: All dates and details are based on the official UGC NET June 2026 notification released by NTA on April 29, 2026. Results and cutoffs are declared after the exam — verify the latest updates at ugcnet.nta.nic.in.*`,
};

// ============================================================
// 3. NDA 2 2026 (National Defence Academy and Naval Academy Examination II)
// Source: upsc.gov.in | Official notification May 20, 2026
// Key facts verified:
//   - Notification: May 20, 2026
//   - Application window: May 20 – June 9, 2026 (closed)
//   - Exam date: September 13, 2026
//   - Vacancies: 394 (Army, Navy, Air Force + Naval Academy)
//   - Eligibility: Unmarried male AND female Indian citizens
//   - Age: Born between January 1, 2008 and January 1, 2011 (16.5–19.5 years)
//   - Qualification: 12th pass or appearing
//   - Fee: ₹100 (SC/ST and sons of JCOs/NCOs/ORs exempt)
//   - Exam: Mathematics (300 marks) + GAT (600 marks) = 900 marks
//   - Negative marking: 1/3 per wrong answer
//   - SSB: 900 marks
//   - Grand total: 1800 marks
// ============================================================
const NDA_2_2026 = {
  slug: "nda-2-2026",
  title: "NDA 2 2026 — Exam Date September 13, Eligibility, Pattern & Complete Preparation Guide",
  conducting_body: "Union Public Service Commission (UPSC)",
  exam_date: "September 13, 2026 (Sunday)",
  application_start: "2026-05-20",
  application_end: "2026-06-09",
  eligibility:
    "Nationality: Indian citizen. For Army Wing: Unmarried male candidates. For Navy and Air Force Wings, and Naval Academy: Unmarried male and female candidates. Age: Born between January 1, 2008 and January 1, 2011 (i.e., 16.5 to 19.5 years of age). Educational Qualification: Class 12 pass or appearing in Class 12 from any recognised Board. For Air Force and Naval Academy (B.Tech) entry: Must have Physics and Mathematics in Class 12. For Army: Any stream in Class 12 is acceptable. Physical and Medical Standards: Candidates must meet specific physical and medical standards set by the Ministry of Defence. Height minimums: Army and Navy — 157 cm for males, 152 cm for females; Air Force — 162.5 cm for males, 152 cm for females. Eyesight requirements are strictest for Air Force (vision must be correctable to 6/6). Complete medical standards are detailed in the official notification at upsc.gov.in.",
  syllabus:
    "Mathematics (300 marks): Algebra — Sets, Complex Numbers, Quadratic Equations, Matrices, Determinants, Binomial Theorem, Logarithms, Permutations & Combinations. Matrices and Determinants — Properties, Inverse, Linear equations. Trigonometry — Angles, Identities, Inverse Trigonometric Functions, Properties of Triangles. Analytical Geometry 2D — Rectangular Cartesian Coordinate System, Distance, Section Formula, Lines, Circles, Conic Sections. Analytical Geometry 3D — Lines and Planes in 3D, Angle between lines. Differential Calculus — Concept of Limit, Continuity, Derivatives, Application to maxima/minima. Integral Calculus and Differential Equations — Definite and Indefinite Integration, Integration by substitution, Differential equations of first order. Vector Algebra — Vectors, Scalar product, Vector product. Statistics and Probability — Classification of Data, Frequency distribution, Mean, Median, Mode, Variance, Standard Deviation, Probability. General Ability Test (600 marks) — Part A (English, 200 marks): Grammar and Usage, Vocabulary, Comprehension, Spotting Errors, Fill in the Blanks, Sentence Ordering; Part B (General Knowledge, 400 marks): Physics (Sound, Light, Heat, Electricity, Magnetism, Nuclear Physics — Class 9/10 level), Chemistry (Physical and Chemical Changes, Atomic Structure, Oxidation-Reduction, Acids, Bases, Salts, Fuels — Class 9/10), General Science (Common diseases, Food and Health, Solar System, Earth basics), History (Freedom Struggle, Constitution, Five Year Plans, National Integration), Geography (Earth, Atmosphere, Ocean, Climate, India's geography, Human geography), Current Events (National and International).",
  exam_pattern: {
    papers: [
      {
        paper: "Mathematics",
        questions: 120,
        marks: 300,
        duration: "2.5 hours",
        negative_marking: "0.83 marks deducted per wrong answer (1/3 of 2.5 marks)",
        marks_per_question: 2.5,
      },
      {
        paper: "General Ability Test (GAT)",
        questions: 150,
        marks: 600,
        duration: "2.5 hours",
        negative_marking: "1.33 marks deducted per wrong answer (1/3 of 4 marks)",
        marks_per_question: 4,
        sections: [
          { section: "Part A — English", questions: 50, marks: 200 },
          { section: "Part B — General Knowledge", questions: 100, marks: 400 },
        ],
      },
    ],
    written_total_marks: 900,
    ssb_interview_marks: 900,
    grand_total: 1800,
    negative_marking: "1/3 of allocated marks deducted for each wrong answer",
    mode: "Offline — pen and paper (OMR sheet)",
    stage_2_ssb:
      "SSB (Service Selection Board) Interview — 5-day psychological and physical assessment at designated SSB centres. Tests Officer Like Qualities (OLQs): Effective Intelligence, Reasoning Ability, Organising Ability, Power of Expression, Social Adaptability, Cooperation, Sense of Responsibility, Initiative, Self-Confidence, Ability to Influence the Group, Stamina, Courage, and Speed of Decision.",
  },
  admit_card_link: "https://upsc.gov.in",
  result_link: "https://upsc.gov.in",
  official_link: "https://upsc.gov.in",
  category: "defence",
  state: "all-india",
  is_active: true,
  completeness_score: 95,
  reading_time: "9 min read",
  description:
    "NDA 2 2026 exam on September 13, 2026. 394 vacancies — Army, Navy, Air Force. Open to males and females (17-19 years, 12th pass). Mathematics + GAT = 900 marks. SSB interview: 900 marks.",
  content: `## NDA 2 2026 — The Path to India's Military Academies

The National Defence Academy is India's tri-services premier training institution. Officers who graduate from NDA go on to command ships, fly fighter jets, and lead infantry. It is one of the most respected career paths an 18-year-old can take. NDA 2 2026 gives you that chance — 394 seats across the Army, Navy, and Air Force wings.

Application for NDA 2 2026 has closed. The written examination is on **September 13, 2026**. If you applied, this guide is your preparation roadmap. If you missed this cycle, the next NDA (NDA 1 2027) notification will be released around November–December 2026.

---

## Important Dates — NDA 2 2026

| Event | Date |
|---|---|
| Notification Released | May 20, 2026 |
| Application Opens | May 20, 2026 |
| Application Last Date | June 9, 2026 |
| Application Fee | ₹100 (SC/ST and sons of JCOs/NCOs/ORs: Exempt) |
| **Written Exam** | **September 13, 2026 (Sunday)** |
| SSB Interviews | After written result (typically October 2026 onwards) |
| Training Commencement (Expected) | January 2027 |

---

## Vacancies

A total of **394 vacancies** are available across:
- Indian Army Wing of NDA
- Indian Navy Wing of NDA
- Air Force Wing (Flying Branch) of NDA
- Indian Naval Academy (10+2 Cadet Entry — B.Tech)

The exact wing-wise breakup is published in the official notification at upsc.gov.in.

---

## Eligibility

**Nationality:** Indian citizen

**Gender and Marital Status:**
- Army Wing: Unmarried male candidates only
- Navy Wing, Air Force Wing, Naval Academy: Unmarried male AND female candidates

**Age (for NDA 2 2026):**
Born between **January 1, 2008 and January 1, 2011**
(16.5 to 19.5 years of age)

**Educational Qualification:**
- Army Wing: Class 12 (or appearing) from any recognised Board — any stream
- Navy Wing and Naval Academy (B.Tech): Class 12 or appearing with **Physics and Mathematics** as subjects
- Air Force Wing (Flying Branch): Class 12 or appearing with **Physics and Mathematics** as subjects

**Physical Standards (males):**
| Service Wing | Minimum Height | Weight (proportionate) |
|---|---|---|
| Army and Navy | 157 cm | As per age-height chart |
| Air Force | 162.5 cm | As per age-height chart |

**Physical Standards (females):** Minimum height 152 cm for all wings.

**Eyesight:** Specific vision standards apply for each wing. Air Force has the strictest requirements — distant vision must be 6/6 in each eye for Flying Branch. Check the complete medical standards in the official notification.

---

## Exam Pattern

The written exam has two papers, both conducted offline (OMR sheets):

| Paper | Questions | Marks | Duration |
|---|---|---|---|
| Mathematics | 120 | 300 | 2.5 hours |
| General Ability Test (GAT) | 150 | 600 | 2.5 hours |
| **Total Written** | **270** | **900** | |
| SSB Interview | — | 900 | 5 days |
| **Grand Total** | | **1800** | |

**Negative Marking: 1/3 of marks per wrong answer**
- Mathematics: Each question = 2.5 marks; wrong answer = –0.83 marks
- GAT: Each question = 4 marks; wrong answer = –1.33 marks

Don't guess randomly. If you can eliminate 2 options, attempt it. If you have no idea, leave it.

**GAT breakdown:**
- Part A — English: 50 questions, 200 marks
- Part B — General Knowledge: 100 questions, 400 marks

---

## Mathematics Syllabus

NDA Maths is Class 11–12 level, but the questions are not trivial. Common high-weightage areas:

- **Algebra:** Matrices, Determinants, Complex Numbers, Quadratic Equations, Binomial Theorem — these appear every year
- **Trigonometry:** Identities, inverse functions, triangle properties — multiple questions guaranteed
- **Calculus:** Limits, continuity, derivatives, integration — high weightage
- **Coordinate Geometry:** Lines, circles, conics (parabola, ellipse, hyperbola) — standard questions
- **Vector Algebra:** Scalar and vector products — direct formula application
- **Probability and Statistics:** Mean, variance, probability theorems — relatively easy marks

Study from NCERT Class 11 and 12 Maths textbooks first. Then solve previous NDA Maths papers.

---

## GAT — General Ability Test

**Part A — English (50Q, 200 marks):**
Grammar (tenses, prepositions, articles, voice, narration), vocabulary (synonyms, antonyms, one-word substitution), comprehension passages, sentence completion.

Most candidates who have studied in English-medium schools score 130–160 here. Hindi-medium candidates need to deliberately practise English grammar patterns.

**Part B — General Knowledge (100Q, 400 marks):**

| Section | Approximate Questions | Level |
|---|---|---|
| Physics | 20–25 | Class 9–10 |
| Chemistry | 15–20 | Class 9–10 |
| General Science | 10–15 | Class 8–10 |
| History & Freedom Struggle | 15–20 | Class 10 level |
| Geography | 15–20 | Class 9–10 |
| Current Affairs | 10–15 | Last 6 months |

NCERT Class 9 and 10 Science, Social Studies, and Geography books are the foundation for GK. Current affairs: read any standard monthly booklet or newspaper for the last 6 months before the exam.

---

## The SSB Interview — What It Actually Is

The written exam filters candidates. The real selection happens at the SSB (Service Selection Board) — a 5-day residential selection process conducted at defence SSB centres.

Stage 1 (Day 1–2): Screening — Intelligence Test (verbal and non-verbal) and Picture Perception and Discussion Test (PPDT). Roughly 30–40% of candidates are screened in.

Stage 2 (Day 2–5, for those who clear Stage 1):
- **Psychology Tests:** Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), Self Description Test (SD)
- **Group Testing:** Group Discussions, Group Planning Exercises, Progressive Group Task, Half Group Task, Command Task, Lecturette, Final Group Task
- **Personal Interview:** 30–45 minutes with an Interviewing Officer

The SSB is 900 marks — equal to the written exam. The assessors are looking for Officer Like Qualities (OLQs): effective intelligence, self-confidence, leadership ability, social adaptability, decisiveness, and integrity. These cannot be faked over 5 days.

**Written exam + SSB = your final merit rank = which wing and academy you get.**

---

## Training at NDA

Selected candidates report to the **National Defence Academy, Khadakwasla, Pune** for a 3-year residential training programme. The NDA campus is jointly managed by all three services.

During 3 years at NDA:
- Academic education (B.Sc. or B.Tech equivalent)
- Military, naval, and air training
- Sports, adventure activities, leadership development

After NDA, cadets go to their respective service academies for pre-commissioning training (typically 1 year):
- Army: Indian Military Academy (IMA), Dehradun
- Navy: Indian Naval Academy (INA), Ezhimala, Kerala
- Air Force: Air Force Academy (AFA), Dundigal, Hyderabad

After completing service academy training, you are commissioned as:
- **Lieutenant** (Army)
- **Sub-Lieutenant** (Navy)
- **Flying Officer** (Air Force)

Starting salary as a newly commissioned officer (Pay Level 10): ₹56,100 basic + ₹15,500 Military Service Pay + allowances = approximately ₹80,000–1,00,000 per month depending on posting.

---

## Preparation Strategy

**Mathematics:**
- Start with NCERT Class 11 and 12 textbooks — do every exercise
- NDA Maths is slightly easier than JEE but has negative marking — accuracy matters
- Solve previous 5 years' NDA Maths papers under timed conditions
- Weak area: Most candidates struggle with Integration, 3D Geometry, and Probability — target these first

**General Ability Test:**
- English: Solve previous NDA English sections. Focus on grammar rules and vocabulary.
- GK: NCERT Class 9 and 10 Science + Social Studies are the foundation. Don't go beyond this for GK.
- Current Affairs: Read any monthly current affairs PDF for April–September 2026 period.

**Physical preparation:**
Even though the physical test is at SSB (not the written exam stage), start running and fitness training now. SSB candidates who show up physically unfit get a negative impression — officers need to be physically sharp.

---

## Frequently Asked Questions

**Q: Can girls appear for NDA 2 2026?**
Yes. Since September 2022, female candidates can appear for NDA. They are eligible for Navy, Air Force, and Naval Academy wings. Army wing is still only open to male candidates.

**Q: I'm in Class 12 appearing. Can I apply?**
Yes. Candidates appearing in Class 12 final exams are eligible to apply. However, you must pass the Class 12 exam before joining NDA. If you don't pass, your selection is cancelled.

**Q: What happens if I fail the medical test at SSB?**
Candidates who are declared medically unfit at SSB are given information about the specific deficiency. You can appeal to the Special Medical Board (SMB) and the Review Medical Board (RMB) if you believe the findings are incorrect. Some conditions that are temporarily disqualifying can be corrected and re-evaluated.

**Q: How does NDA rank compare to CDS?**
NDA is for candidates who are Class 12 or below (age 16.5–19.5). CDS is for graduates (age 19–24+). NDA gives 3 more years of training before commissioning — NDA officers graduate at age ~21–22. Both are excellent career paths; NDA officers typically have a longer active service period.

---

## Official Links

- UPSC Official Site: [upsc.gov.in](https://upsc.gov.in)
- Apply Online (when open): [upsconline.nic.in](https://upsconline.nic.in)

---

*Disclaimer: All information is based on the official NDA 2 2026 notification released by UPSC on May 20, 2026. Physical and medical standards must be verified from the complete official notification at upsc.gov.in before appearing.*`,
};

// ============================================================
// 4. CDS 2 2026 (Combined Defence Services Examination II)
// Source: upsc.gov.in | Official notification May 20, 2026
// Key facts verified:
//   - Notification: May 20, 2026
//   - Application: May 20 – June 9, 2026 (closed)
//   - Exam date: September 13, 2026
//   - Vacancies: 451 (IMA, INA, AFA, OTA)
//   - IMA/INA/AFA: Unmarried male graduates only
//   - OTA: Male (unmarried/widower/divorced) + Female (unmarried/widow/divorcee)
//   - Age: 19–24 (IMA, INA, AFA); 19–25 (OTA)
//   - Fee: ₹200 (Female and SC/ST: Exempt)
//   - CDS 1 2026 was also on April 12, 2026 (result awaited)
// ============================================================
const CDS_2_2026 = {
  slug: "cds-2-2026",
  title: "CDS 2 2026 — Exam Date September 13, Eligibility, Pattern & Officer Career Guide",
  conducting_body: "Union Public Service Commission (UPSC)",
  exam_date: "September 13, 2026 (Sunday)",
  application_start: "2026-05-20",
  application_end: "2026-06-09",
  eligibility:
    "Nationality: Indian citizen (or subject of Nepal/Bhutan, or Tibetan refugee settled in India before January 1, 1962). Educational Qualification and Gender: IMA (Indian Military Academy) — Unmarried male candidates, Bachelor's degree from any recognised university (any stream). INA (Indian Naval Academy) — Unmarried male candidates, Engineering degree (B.E./B.Tech or equivalent) from a recognised institution. AFA (Air Force Academy) — Unmarried male candidates, Bachelor's degree with Physics and Mathematics at 10+2 level, OR B.E./B.Tech degree. OTA (Officers Training Academy) — Male candidates (married, unmarried, widower, or divorced) and Female candidates (unmarried, widow, or divorcee), Bachelor's degree from any recognised university (any stream). Age Limits (as on January 1, 2027): IMA — Born January 2, 2003 to January 1, 2008 (19–24 years). INA — Born January 2, 2003 to January 1, 2008 (19–24 years). AFA — Born January 2, 2003 to January 1, 2008 (19–24 years). OTA — Born January 2, 2002 to January 1, 2008 (19–25 years). Physical: Must meet height, weight, and medical fitness standards — detailed in the UPSC official notification. Minimum height: 157.5 cm (Army), 157 cm (Navy), 162.5 cm (Air Force) for male candidates. 152 cm for female candidates.",
  syllabus:
    "For IMA, INA, AFA (3 papers): English — Comprehension, Error Correction, Fill in the blanks, Sentence Improvement, Synonyms, Antonyms, Reading passages, Grammar (Tenses, Articles, Prepositions, Voice, Narration); General Knowledge — Current Events (national and international), Indian History (especially Modern India and Freedom Struggle), Indian Constitution and Governance, Geography (Physical, Indian, World), Economy (basic concepts), General Science (Physics, Chemistry, Biology at Class 10 level), Defence-related current affairs; Elementary Mathematics — Arithmetic (HCF/LCM, Fractions, Decimals, Percentages, Ratio-Proportion, Average, Simple and Compound Interest, Profit-Loss, Time-Work, Time-Distance), Algebra (Basic operations, Factorisation, Linear equations, Quadratic equations, Logarithms), Geometry (Angles, Lines, Triangles, Quadrilaterals, Circles, Theorems), Mensuration (Areas and volumes of standard shapes), Statistics (Frequency distribution, Mean, Median, Mode). For OTA (2 papers): English and General Knowledge only (same syllabus as above). Elementary Mathematics is NOT required for OTA.",
  exam_pattern: {
    for_IMA_INA_AFA: {
      papers: [
        { paper: "English", questions: 120, marks: 100, duration: "2 hours" },
        { paper: "General Knowledge", questions: 120, marks: 100, duration: "2 hours" },
        { paper: "Elementary Mathematics", questions: 100, marks: 100, duration: "2 hours" },
      ],
      total_written_marks: 300,
      ssb_marks: 300,
      grand_total: 600,
    },
    for_OTA: {
      papers: [
        { paper: "English", questions: 120, marks: 100, duration: "2 hours" },
        { paper: "General Knowledge", questions: 120, marks: 100, duration: "2 hours" },
      ],
      total_written_marks: 200,
      ssb_marks: 200,
      grand_total: 400,
      note: "OTA does NOT have the Elementary Mathematics paper.",
    },
    negative_marking: "1/3 of marks per wrong answer across all papers",
    mode: "Offline — pen and paper (OMR sheet)",
    ssb_description:
      "SSB (Service Selection Board) Interview — 5-day residential assessment at designated SSB centres. Tests Officer Like Qualities through psychological tests (TAT, WAT, SRT, SD), group tasks (GD, GPE, PGT, HGT, Command Task), and personal interview.",
  },
  admit_card_link: "https://upsc.gov.in",
  result_link: "https://upsc.gov.in",
  official_link: "https://upsc.gov.in",
  category: "defence",
  state: "all-india",
  is_active: true,
  completeness_score: 95,
  reading_time: "9 min read",
  description:
    "CDS 2 2026 exam on September 13, 2026. 451 vacancies — IMA, INA, AFA, OTA. Graduate-level defence exam. English + GK + Maths (IMA/INA/AFA) or English + GK (OTA). SSB interview follows.",
  content: `## CDS 2 2026 — Become an Officer in the Indian Army, Navy, or Air Force

The Combined Defence Services (CDS) exam is the civilian route into the Indian Armed Forces as a commissioned officer. You don't need to have been in NCC or studied at military school. A graduation degree and the right preparation is all it takes to get into the IMA, INA, AFA, or OTA.

CDS 2 2026 has **451 vacancies**. The exam is September 13, 2026. Application closed June 9.

---

## CDS 1 vs CDS 2 — What Happened This Year

UPSC conducts CDS twice a year. Both cycles in 2026:

| Exam | Date | Status |
|---|---|---|
| CDS 1 2026 | April 12, 2026 | Conducted — result awaited |
| **CDS 2 2026** | **September 13, 2026** | **Upcoming — your current cycle** |

CDS 2 2026 notification was released on May 20, 2026. Application window was May 20 to June 9, 2026.

---

## Vacancies — 451 Posts Across 4 Academies

| Academy | Course | Duration |
|---|---|---|
| Indian Military Academy (IMA), Dehradun | 147th Course | 18 months |
| Indian Naval Academy (INA), Ezhimala | B.Tech (Naval Architecture) + Executive | 4 years (B.Tech) |
| Air Force Academy (AFA), Dundigal | No. 219 F(P) Course + Ground Duty | 74 weeks (Flying) |
| Officers Training Academy (OTA), Chennai | 124th SSC (Men) + 34th SSC (Women) | 49 weeks |

Total vacancies across these 4 academies: **451**. Academy-wise breakup is published in the official notification at upsc.gov.in.

---

## Eligibility — Academy by Academy

### IMA — Indian Military Academy (Army)
- **Gender:** Unmarried male only
- **Age:** Born January 2, 2003 to January 1, 2008 (19–24 years as on January 1, 2027)
- **Qualification:** Graduation from any recognised university — any stream (BA, BSc, BCom, B.Tech, all eligible)
- **Outcome:** Permanent Commission in the Indian Army as a Lieutenant

### INA — Indian Naval Academy (Navy)
- **Gender:** Unmarried male only
- **Age:** Born January 2, 2003 to January 1, 2008 (19–24 years)
- **Qualification:** Engineering degree (B.E. / B.Tech or equivalent) — any engineering branch
- **Outcome:** Permanent Commission in the Indian Navy as a Sub-Lieutenant

### AFA — Air Force Academy (Air Force)
- **Gender:** Unmarried male only
- **Age:** Born January 2, 2003 to January 1, 2008 (19–24 years)
- **Qualification:** Graduation with **Physics AND Mathematics in Class 12**, OR B.E./B.Tech degree
- **Outcome:** Permanent Commission in the Indian Air Force as a Flying Officer (Flying Branch) or Group A Officer (Ground Duty)
- **Note:** Flying Branch candidates undergo additional AFCAT/PABT at AFB Dehradun and must meet strict medical standards for flying duties

### OTA — Officers Training Academy (Army Short Service Commission)
- **Gender:** Male (married/unmarried/widower/divorced) and Female (unmarried/widow/divorcee)
- **Age:** Born January 2, 2002 to January 1, 2008 (19–25 years — slightly wider range)
- **Qualification:** Graduation from any recognised university — any stream
- **Outcome:** Short Service Commission (SSC) in the Indian Army — initial 14-year service, extendable to permanent commission based on performance
- **Important:** OTA does NOT require the Elementary Mathematics paper — only English and GK

---

## Exam Pattern

### For IMA, INA, AFA (3 Papers)

| Paper | Questions | Marks | Duration |
|---|---|---|---|
| English | 120 | 100 | 2 hours |
| General Knowledge | 120 | 100 | 2 hours |
| Elementary Mathematics | 100 | 100 | 2 hours |
| **Total Written** | | **300** | |
| SSB Interview | | **300** | 5 days |
| **Grand Total** | | **600** | |

### For OTA (2 Papers Only — No Maths)

| Paper | Questions | Marks | Duration |
|---|---|---|---|
| English | 120 | 100 | 2 hours |
| General Knowledge | 120 | 100 | 2 hours |
| **Total Written** | | **200** | |
| SSB Interview | | **200** | 5 days |
| **Grand Total** | | **400** | |

**Negative Marking: 1/3 of marks per wrong answer in all papers.**

This is important for OTA aspirants — if you're only applying for OTA and have weak Maths, you have a significant advantage because you avoid the Maths paper entirely.

---

## Exam Syllabus

### English
Grammar: Tenses, articles, prepositions, conjunctions, voice (active/passive), narration (direct/indirect), sentence completion, error correction.
Vocabulary: Synonyms, antonyms, one-word substitution, idioms and phrases.
Comprehension: Reading passages with 5–10 questions per passage.

Most candidates score 60–80 out of 100 in English. It's manageable with 30–45 days of dedicated practice on previous CDS English papers.

### General Knowledge
- Current events (national and international) — last 6–8 months
- Indian history — especially Freedom Struggle (1857–1947) and Constitution
- Indian geography and world geography
- General science — Physics, Chemistry, Biology (Class 10 NCERT level)
- Defence news and Indian military history

NCERT Class 9–10 textbooks are the GK backbone. For current affairs, use any standard monthly booklet.

### Elementary Mathematics (IMA/INA/AFA only)
- Arithmetic: Percentage, ratio, profit-loss, simple and compound interest, time-work, time-distance
- Algebra: Linear equations, quadratic equations, logarithms
- Geometry: Triangle theorems, circle properties, parallel lines
- Mensuration: Areas and volumes of standard shapes
- Statistics: Mean, median, mode, basic frequency distribution

CDS Maths is Class 10 level — not JEE, not even NDA level. But the negative marking means you must be accurate, not just fast.

---

## The SSB Interview — Equal to Written Marks

The SSB carries the same marks as the written exam. For IMA/INA/AFA, 300 marks written + 300 marks SSB = 600 total. For OTA, 200 + 200 = 400 total.

The SSB process unfolds over 5 days at SSB centres across India (Allahabad, Bhopal, Bangalore, Mysore, Kapurthala, Coimbatore, and others assigned based on your chosen academy):

**Day 1 — Screening:**
- Officer Intelligence Rating (OIR) test — verbal and non-verbal reasoning
- Picture Perception and Discussion Test (PPDT) — you describe a picture, write a story, and discuss it in a group

About 30–40% of candidates are screened in after Day 1. The rest are sent back the same day.

**Days 2–4 — Psychological and Group Testing (for those who clear screening):**
- **TAT (Thematic Apperception Test):** You see 11 pictures + 1 blank slide, write a story for each in 4 minutes
- **WAT (Word Association Test):** 60 words flashed at 15 seconds each — write the first sentence that comes to mind
- **SRT (Situation Reaction Test):** 60 situations in 30 minutes — how do you respond?
- **SD (Self Description):** What does your family/friends/teachers say about you? What do you think of yourself?
- **Group Discussions:** 5–10 candidates, 2 rounds, defence and civilian topics
- **Group Planning Exercise:** Group solves a situation on a map
- **Progressive Group Task / Half Group Task:** Outdoor problem-solving activities with obstacles
- **Command Task:** You command your group to complete a task
- **Lecturette:** 3-minute talk on a chosen topic

**Day 5 — Conference:**
All SSB officers discuss each candidate collectively. Final recommendation.

---

## Salary and Career After Commissioning

After completing training and commissioning:

| Rank | Pay Level | Basic Pay | MSP | Approximate Total |
|---|---|---|---|---|
| Lieutenant (Army) | Level 10 | ₹56,100 | ₹15,500 | ~₹80,000–1,00,000/month |
| Sub-Lieutenant (Navy) | Level 10 | ₹56,100 | ₹15,500 | ~₹80,000–1,00,000/month |
| Flying Officer (Air Force) | Level 10 | ₹56,100 | ₹15,500 | ~₹80,000–1,00,000/month |

In addition to salary: free accommodation, food allowance, medical benefits for family, Canteen Stores Department (CSD) facilities, and Group Insurance.

**IMA/INA/AFA → Permanent Commission:** Long-term career up to Colonel/Commodore/Group Captain or higher based on merit.

**OTA → Short Service Commission:** Initial 10 + 4 years (extendable). Option to apply for Permanent Commission after 5 years based on vacancies and performance. Many SSC officers transition to civil service or defence PSUs after service.

---

## Preparation Plan — September 13 is 94 Days Away

**Days 1–30: Foundation**
- English: Solve previous 5 years' CDS English papers. Note every grammar rule you missed. Use Wren & Martin for grammar reference.
- GK: Read NCERT Class 9–10 History, Geography, Science. Make short notes on each chapter.
- Maths (if applying for IMA/INA/AFA): Revise Class 9–10 NCERT Maths thoroughly. Solve R.S. Aggarwal or similar for practice.

**Days 31–60: Practice and Mock Tests**
- Solve 2–3 full CDS mock tests per week under timed conditions (2 hours per paper)
- Current affairs: Read monthly current affairs booklet for April–September 2026
- Focus on accuracy — CDS negative marking punishes random guessing

**Days 61–94: Revision and Accuracy Drills**
- Revise weak chapters identified from mock tests
- Focus on eliminating avoidable errors in English grammar and Maths calculations
- Physical fitness: Start running and basic fitness training if you haven't — SSB involves outdoor physical tasks

---

## Frequently Asked Questions

**Q: I'm a Commerce graduate. Can I apply for IMA?**
Yes. IMA requires any graduation — BA, BCom, BSc, B.Tech, LLB are all eligible. The CDS written exam tests English, GK, and Elementary Maths — none of which require a specific academic stream.

**Q: I want to be a pilot. Is CDS the right path?**
For Air Force pilots: AFA through CDS is one path. AFCAT (Air Force Common Admission Test) is another. Both lead to the Air Force Academy. Check AFCAT if you don't meet CDS age requirements or want a direct Air Force-specific route.

**Q: Can I apply for both IMA and OTA in the same application?**
No. You apply for specific academy/course choices in your preference order. You can indicate multiple preferences within one application, but your exam papers depend on which academies you've opted for (if OTA only = 2 papers; if IMA/INA/AFA = 3 papers).

**Q: What is the difference between Permanent Commission and Short Service Commission?**
Permanent Commission (IMA/INA/AFA) offers a full military career until retirement age (typically 54–60 years depending on rank). Short Service Commission (OTA) is a contractual term of service — 10 years initially, extendable by 4 more years (total 14 years). After 14 years you exit, or apply for PC conversion. Both are commissioned officer roles — the difference is career length.

**Q: I failed SSB once. Can I apply again?**
Yes. There is no restriction on the number of CDS/SSB attempts, as long as you meet the age and qualification criteria at the time of application.

---

## Official Links

- UPSC Official Site: [upsc.gov.in](https://upsc.gov.in)
- Apply Online (when open): [upsconline.nic.in](https://upsconline.nic.in)

---

*Disclaimer: All information is based on the official CDS 2 2026 notification released by UPSC on May 20, 2026. Academy-wise vacancy numbers and complete physical/medical standards must be verified from the official notification at upsc.gov.in.*`,
};

// ============================================================
// INSERT ALL FOUR
// ============================================================
async function insertExam(exam) {
  const { slug, title } = exam;

  const { data: existing } = await supabase
    .from("entrance_exams")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (existing) {
    console.log(`⚠️  SKIP — ${slug} already exists`);
    return;
  }

  const payload = {
    ...exam,
    published_at: new Date().toISOString(),
    reviewed_at: new Date().toISOString(),
    quality_flag: null,
  };

  const { error } = await supabase.from("entrance_exams").insert([payload]);

  if (error) {
    console.error(`❌  FAILED — ${title}`);
    console.error(error.message);
  } else {
    console.log(`✅  INSERTED — ${title} (${slug})`);
  }
}

const exams = [JEE_ADVANCED_2026, UGC_NET_JUNE_2026, NDA_2_2026, CDS_2_2026];

console.log("=== Inserting 4 entrance exams ===\n");
for (const exam of exams) {
  await insertExam(exam);
}
console.log("\n=== Done ===");
