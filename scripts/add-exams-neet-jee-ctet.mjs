// ============================================================
// One-time script — adds NEET UG 2026, JEE Main 2026, CTET Sep 2026
// Run: node scripts/add-exams-neet-jee-ctet.mjs
// ============================================================

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// 1. NEET UG 2026
// Source: neet.nta.nic.in | Official notification + NTA notices
// Key facts verified:
//   - Original exam May 3, 2026 CANCELLED (paper leak)
//   - Re-exam confirmed June 21, 2026 by Govt of India
//   - Registration: Feb 8 – March 11, 2026
//   - No fresh registration for re-exam; existing candidates auto-carried
//   - Admit card: on/before June 14, 2026
//   - Mode: Offline pen-and-paper
//   - 200 questions total; candidates attempt 180 (internal choice in Sec B)
//   - +4 correct, -1 wrong, 0 unattempted
//   - Total marks: 720
// ============================================================
const NEET_UG_2026 = {
  slug: "neet-ug-2026",
  title: "NEET UG 2026 — Complete Guide (Re-Exam June 21)",
  conducting_body: "National Testing Agency (NTA)",
  exam_date: "June 21, 2026 (Re-Exam) — Original May 3 exam was cancelled",
  application_start: "2026-02-08",
  application_end: "2026-03-11",
  eligibility:
    "Minimum age 17 years as on December 31, 2026. No upper age limit (NMC ruling, 2022). Must have passed or be appearing in Class 12 (or equivalent) with Physics, Chemistry, Biology/Biotechnology, and English as core subjects. Minimum 50% aggregate marks in Physics, Chemistry, and Biology for General and OBC candidates; 45% for Persons with Disability (PwD); 40% for SC/ST candidates. Indian nationals, NRIs, OCIs, PIOs, and foreign nationals are eligible. Students appearing in Class 12 final exams can also apply provisionally.",
  syllabus:
    "Physics (Class 11): Physical World and Measurement, Kinematics, Laws of Motion, Work, Energy and Power, Motion of System of Particles and Rigid Body, Gravitation, Properties of Bulk Matter, Thermodynamics, Behaviour of Perfect Gas and Kinetic Theory, Oscillations and Waves. Physics (Class 12): Electrostatics, Current Electricity, Magnetic Effects of Current and Magnetism, Electromagnetic Induction and Alternating Currents, Electromagnetic Waves, Optics, Dual Nature of Matter and Radiation, Atoms and Nuclei, Electronic Devices. Chemistry (Class 11): Some Basic Concepts of Chemistry, Structure of Atom, Classification of Elements and Periodicity in Properties, Chemical Bonding and Molecular Structure, States of Matter, Thermodynamics, Equilibrium, Redox Reactions, Hydrogen, s-Block Elements, Some p-Block Elements, Organic Chemistry, Hydrocarbons, Environmental Chemistry. Chemistry (Class 12): Solid State, Solutions, Electrochemistry, Chemical Kinetics, Surface Chemistry, General Principles of Isolation of Elements, p-Block Elements, d-and f-Block Elements, Coordination Compounds, Haloalkanes and Haloarenes, Alcohols, Phenols, Ethers, Aldehydes, Ketones and Carboxylic Acids, Amines, Biomolecules, Polymers, Chemistry in Everyday Life. Biology — Botany and Zoology (Class 11): Diversity of Living Organisms, Structural Organisation in Plants and Animals, Cell Structure and Function, Plant Physiology, Human Physiology. Biology — Botany and Zoology (Class 12): Reproduction, Genetics and Evolution, Biology and Human Welfare, Biotechnology and Its Applications, Ecology and Environment. Note: NTA released an updated NEET UG 2026 syllabus in January 2026 aligned with new NCERT textbooks. Candidates must refer to the official updated syllabus PDF at neet.nta.nic.in.",
  exam_pattern: {
    mode: "Offline — Pen and Paper (OMR sheet)",
    duration: "3 hours 20 minutes",
    total_questions_in_paper: 200,
    questions_to_attempt: 180,
    total_marks: 720,
    marking_scheme: "+4 for correct answer, -1 for incorrect answer, 0 for unattempted",
    sections: [
      {
        subject: "Physics",
        section_a: "35 MCQs (all compulsory)",
        section_b: "15 MCQs (attempt any 10)",
        total_to_attempt: 45,
        marks: 180,
      },
      {
        subject: "Chemistry",
        section_a: "35 MCQs (all compulsory)",
        section_b: "15 MCQs (attempt any 10)",
        total_to_attempt: 45,
        marks: 180,
      },
      {
        subject: "Botany (Biology)",
        section_a: "35 MCQs (all compulsory)",
        section_b: "15 MCQs (attempt any 10)",
        total_to_attempt: 45,
        marks: 180,
      },
      {
        subject: "Zoology (Biology)",
        section_a: "35 MCQs (all compulsory)",
        section_b: "15 MCQs (attempt any 10)",
        total_to_attempt: 45,
        marks: 180,
      },
    ],
    note: "Section B has internal choice — 15 questions given, attempt only 10. Wrong answers in unattempted Section B carry no penalty.",
  },
  admit_card_link: "https://neet.nta.nic.in",
  result_link: "https://neet.nta.nic.in",
  official_link: "https://neet.nta.nic.in",
  category: "medical",
  state: "all-india",
  is_active: true,
  completeness_score: 94,
  reading_time: "8 min read",
  description:
    "NEET UG 2026 re-exam is scheduled for June 21, 2026, after the original May 3 exam was cancelled due to a paper leak. Admit card out by June 14. 720 marks, 180 questions, pen-and-paper mode. Apply at neet.nta.nic.in.",
  content: `## NEET UG 2026 — What You Need to Know Right Now

NEET UG 2026 has had a turbulent journey. The original exam, scheduled for May 3, 2026, was cancelled by NTA with Government of India approval after serious allegations of a question paper leak surfaced. This was a hard call, but the right one — over 24 lakh students had registered and deserved a fair shot.

The re-examination is officially confirmed for **June 21, 2026**. If you registered for the original exam, you do not need to register again. Your candidature, registration details, and exam centre preferences are automatically carried forward. No extra fee will be charged, and the original fee has been refunded.

This is one of India's most important medical entrance exams — the only gateway to MBBS, BDS, AYUSH (BAMS, BHMS, BUMS), Veterinary (BVSc), and BPharma seats across government and private medical colleges in India.

---

## Important Dates

| Event | Date |
|---|---|
| Application Opens | February 8, 2026 |
| Application Closes | March 11, 2026 (9:00 PM) |
| Original Exam (Cancelled) | May 3, 2026 |
| **Re-Exam Date** | **June 21, 2026** |
| Admit Card for Re-Exam | On or before June 14, 2026 |
| Results (Expected) | Early to Mid July 2026 |
| MCC Counselling Begins (Expected) | July 21, 2026 |

*Verify all dates at neet.nta.nic.in before acting on them.*

---

## Eligibility

**Age:**
- Minimum **17 years** as on December 31, 2026
- **No upper age limit** — the Supreme Court and NMC removed the upper age cap in 2022
- Students appearing in Class 12 final exams can apply provisionally

**Educational Qualification:**
You must have passed or be appearing in Class 10+2 (or equivalent) with **Physics, Chemistry, Biology/Biotechnology, and English** as core subjects.

**Minimum Marks in Class 12:**

| Category | Minimum PCB Marks |
|---|---|
| General | 50% |
| OBC / EWS | 50% |
| SC / ST | 40% |
| Persons with Disability (PwD) | 45% |

**Nationality:** Indian nationals, NRIs, OCIs, PIOs, and foreign nationals can appear.

---

## Application Fee (Already Closed — For Reference)

| Category | Fee |
|---|---|
| General | ₹1,700 |
| OBC / EWS | ₹1,600 |
| SC / ST / PwD | ₹1,000 |
| Candidates Abroad | ₹9,500 |

Payment was accepted via credit/debit card, net banking, or UPI on neet.nta.nic.in. Since the re-exam requires no fresh registration, no new payment is needed.

---

## Exam Pattern

NEET UG is a **pen-and-paper (OMR-based)** exam. The paper has 200 questions but you only attempt **180** — each subject has a Section B with internal choice.

| Subject | Section A (Compulsory) | Section B (Attempt any 10 of 15) | Total Questions to Attempt | Marks |
|---|---|---|---|---|
| Physics | 35 MCQs | 15 MCQs → attempt 10 | 45 | 180 |
| Chemistry | 35 MCQs | 15 MCQs → attempt 10 | 45 | 180 |
| Botany | 35 MCQs | 15 MCQs → attempt 10 | 45 | 180 |
| Zoology | 35 MCQs | 15 MCQs → attempt 10 | 45 | 180 |
| **Total** | | | **180** | **720** |

**Marking Scheme:**
- Correct answer: **+4 marks**
- Wrong answer: **–1 mark**
- Unattempted: **0 marks**
- Section B unattempted: **0 penalty** (only the 10 you attempt are scored)

**Duration:** 3 hours 20 minutes

**Mode:** Offline — pen on OMR sheet (not computer-based)

---

## Syllabus Overview

NEET UG 2026 tests you on Class 11 and Class 12 NCERT-level content across three subjects. NTA released an **updated syllabus for 2026** in January 2026, aligned with revised NCERT textbooks. Download it from neet.nta.nic.in before you finalize your preparation plan.

**Physics:** Physical World, Kinematics, Laws of Motion, Work & Energy, Gravitation, Thermodynamics, Oscillations, Waves, Electrostatics, Current Electricity, Magnetism, EM Induction, Optics, Modern Physics

**Chemistry:** Basic Concepts, Atomic Structure, Periodic Table, Chemical Bonding, Thermodynamics, Equilibrium, Organic Chemistry basics, Hydrocarbons, Solid State, Solutions, Electrochemistry, Coordination Compounds, Biomolecules

**Biology (Botany + Zoology):** Diversity of Life, Cell Biology, Plant Physiology, Human Physiology, Reproduction, Genetics, Evolution, Ecology, Biotechnology

---

## Admit Card

Admit cards for the re-exam will be released **on or before June 14, 2026** on neet.nta.nic.in. Download it using your application number and date of birth. Check all details — name, photo, signature, exam centre — immediately after download. Carry a printed copy to the exam hall along with a valid photo ID.

Note: Since this is a re-exam, fresh admit cards will be issued even for candidates who downloaded the original admit card. The original admit card is not valid for June 21.

---

## Results

Results are expected in **early to mid July 2026** — exact date will be announced on neet.nta.nic.in. Your result will include your subject-wise scores, total score, percentile, and All India Rank (AIR). MCC counselling for AIIMS, JIPMER, and All India Quota seats is expected to begin around July 21, 2026 at mcc.nic.in.

---

## Preparation Tips (If You're Appearing June 21)

With the exam 11 days away, this is not the time for new topics. Focus on:

1. **Revise NCERT thoroughly** — NEET questions are deeply NCERT-based. Biology in particular is almost line-for-line from NCERT. Read the textbook diagrams too.
2. **Solve previous year papers** — NEET repeats concepts across years. Solve at least 5 years of previous papers under timed conditions.
3. **Focus on high-weightage chapters** — In Physics: Mechanics, Optics, Modern Physics. In Chemistry: Organic Chemistry, Equilibrium. In Biology: Genetics, Human Physiology, Ecology.
4. **Do not start anything new** — If you haven't covered a topic properly yet, don't start it now. Strengthen what you already know.
5. **Attempt mock tests on Section B** — Practice which 10 questions to pick in Section B. Don't waste time on all 15.
6. **Stay calm on exam day** — The exam centre security will be higher than usual given the re-exam situation. Reach early.

---

## Frequently Asked Questions

**Q: Do I need to re-register for the June 21 re-exam?**
No. All candidates who registered for the original May 3 exam are automatically registered for the re-exam. No new registration or fee is required.

**Q: Will my exam centre change?**
NTA will issue a fresh admit card with your exam centre details. Your previously selected city preference will be honoured as far as possible. Check the new admit card carefully.

**Q: Is there an upper age limit for NEET UG 2026?**
No. The Supreme Court and the National Medical Commission (NMC) removed the upper age limit in 2022. Any candidate meeting the minimum age (17 years) and educational criteria can appear.

**Q: Can a student who failed Class 12 appear for NEET UG?**
No. You must have passed (or be appearing in) Class 12 with PCB as core subjects. Candidates who have failed Class 12 are not eligible.

**Q: What happens to state quota seats?**
The 85% state quota seats are filled through separate state counselling — each state has its own counselling authority. MCC only handles 15% All India Quota + AIIMS + JIPMER + ESIC seats.

---

## Official Links

- Official NEET Portal: [neet.nta.nic.in](https://neet.nta.nic.in)
- NTA Main Site: [nta.ac.in](https://nta.ac.in)
- MCC Counselling: [mcc.nic.in](https://mcc.nic.in)

---

*Disclaimer: All information is based on official NTA notices and the NEET UG 2026 information bulletin. Dates and processes are subject to change — always verify from neet.nta.nic.in before taking any action.*`,
};

// ============================================================
// 2. JEE MAIN 2026
// Source: jeemain.nta.nic.in | NTA official notices
// Key facts verified:
//   - Session 1: January 21–29, 2026 (B.Tech: Jan 21-24, 28; B.Arch/B.Plan: Jan 29)
//   - Session 2: April 2–9, 2026
//   - Both sessions completed; results declared
//   - Session 1 registration: Oct 31, 2025 onwards
//   - Session 2 registration: Feb 1–25, 2026 (reopened March 12-13, 2026)
//   - Paper 1: 75 questions, 300 marks, 3 hours
//   - No age limit (NTA removed it)
//   - No minimum % in 12th for JEE Main; 75% needed for NIT/IIIT admission
// ============================================================
const JEE_MAIN_2026 = {
  slug: "jee-main-2026",
  title: "JEE Main 2026 — Complete Guide (Session 1 & Session 2)",
  conducting_body: "National Testing Agency (NTA)",
  exam_date: "Session 1: January 21–29, 2026 | Session 2: April 2–9, 2026",
  application_start: "2025-10-31",
  application_end: "2026-02-25",
  eligibility:
    "Passed or appearing in Class 12 (or equivalent) with Physics, Chemistry, and Mathematics as core subjects from any recognised board. No age limit — NTA removed the age restriction. No minimum percentage required in Class 12 to appear in JEE Main. However, for admission to NITs, IIITs, and GFTIs through JoSAA counselling, candidates must have secured at least 75% marks in Class 12 (or be in the top 20 percentile of their board) — 65% for SC/ST. Diploma holders in Engineering/Technology are also eligible for JEE Main Paper 1 (B.E./B.Tech).",
  syllabus:
    "Mathematics: Sets, Relations and Functions, Complex Numbers, Quadratic Equations, Matrices and Determinants, Permutations and Combinations, Binomial Theorem, Sequences and Series, Limits, Continuity and Differentiability, Integral Calculus, Differential Equations, Coordinate Geometry (Straight Lines, Circles, Conic Sections), Three Dimensional Geometry, Vector Algebra, Statistics and Probability, Trigonometry, Mathematical Reasoning. Physics: Units and Dimensions, Kinematics, Laws of Motion, Work Energy Power, Rotational Motion, Gravitation, Properties of Solids and Liquids, Thermodynamics, Kinetic Theory of Gases, Oscillations and Waves, Electrostatics, Current Electricity, Magnetic Effects of Current and Magnetism, Electromagnetic Induction, Optics, Dual Nature of Matter and Radiation, Atoms and Nuclei, Electronic Devices, Communication Systems. Chemistry: Physical Chemistry — Basic Concepts, Atomic Structure, Chemical Bonding, States of Matter, Thermodynamics, Equilibrium, Electrochemistry, Chemical Kinetics, Surface Chemistry; Organic Chemistry — Purification, Basic Principles, Hydrocarbons, Haloalkanes, Alcohols, Carbonyl Compounds, Amines, Polymers, Biomolecules, Chemistry in Everyday Life; Inorganic Chemistry — Classification, s/p/d/f Block Elements, Coordination Compounds, Environmental Chemistry.",
  exam_pattern: {
    paper: "Paper 1 (B.E. / B.Tech)",
    mode: "Computer Based Test (CBT)",
    duration: "3 hours",
    total_questions: 75,
    total_marks: 300,
    marking_mcq: "+4 correct, -1 wrong",
    marking_nvt: "+4 correct, 0 wrong (no negative marking for Numerical Value Type)",
    sections: [
      {
        subject: "Mathematics",
        section_a_mcq: 20,
        section_b_nvt: "10 questions given, attempt any 5",
        total_to_attempt: 25,
        marks: 100,
      },
      {
        subject: "Physics",
        section_a_mcq: 20,
        section_b_nvt: "10 questions given, attempt any 5",
        total_to_attempt: 25,
        marks: 100,
      },
      {
        subject: "Chemistry",
        section_a_mcq: 20,
        section_b_nvt: "10 questions given, attempt any 5",
        total_to_attempt: 25,
        marks: 100,
      },
    ],
    paper_2a_note: "B.Arch — 77 questions, 400 marks (Mathematics + Aptitude + Drawing)",
    paper_2b_note: "B.Planning — 100 questions, 400 marks (Mathematics + Aptitude + Planning)",
  },
  admit_card_link: "https://jeemain.nta.nic.in",
  result_link: "https://jeemain.nta.nic.in",
  official_link: "https://jeemain.nta.nic.in",
  category: "engineering",
  state: "all-india",
  is_active: true,
  completeness_score: 93,
  reading_time: "9 min read",
  description:
    "JEE Main 2026 was conducted in two sessions — Session 1 (January 21–29) and Session 2 (April 2–9). Both sessions are complete and results have been declared. 75 questions, 300 marks, computer-based. Gateway to NITs, IIITs, GFTIs, and JEE Advanced.",
  content: `## JEE Main 2026 — Everything You Need to Know

JEE Main is the national-level engineering entrance exam that opens the door to NITs, IIITs, and Government Funded Technical Institutes (GFTIs) across India. It also acts as the qualifying exam for JEE Advanced — the route to IITs.

JEE Main 2026 was held in two sessions:
- **Session 1:** January 21–29, 2026
- **Session 2:** April 2–9, 2026

Both sessions are now complete and results have been declared on jeemain.nta.nic.in. If you appeared in both sessions, NTA considers your **better score** from the two for the final merit list.

---

## Session Dates at a Glance

| Session | Exam Dates | Paper |
|---|---|---|
| Session 1 | January 21–24 & 28, 2026 | Paper 1 (B.E./B.Tech) |
| Session 1 | January 29, 2026 | Paper 2A (B.Arch) & 2B (B.Planning) |
| Session 2 | April 2–9, 2026 | Paper 1 (B.E./B.Tech) |
| Session 2 | April 2026 | Paper 2A & 2B |

## Application Dates

| Event | Date |
|---|---|
| Session 1 Registration Opens | October 31, 2025 |
| Session 2 Registration Opens | February 1, 2026 |
| Session 2 Registration Closes | February 25, 2026 |
| Session 2 Registration Reopened | March 12–13, 2026 |
| Session 1 Exam | January 21–29, 2026 |
| Session 2 Exam | April 2–9, 2026 |
| Results | Declared (check jeemain.nta.nic.in) |
| JoSAA Counselling | Typically June–July after results |

---

## Application Fee

| Category | Single Paper | Both Papers (2A & 1, or 2B & 1) |
|---|---|---|
| General (Male) | ₹1,000 | ₹2,000 |
| General (Female) / OBC | ₹800 | ₹1,600 |
| SC / ST / PwD / Transgender | ₹500 | ₹1,000 |

Payment via credit/debit card, net banking, or UPI on jeemain.nta.nic.in.

---

## Eligibility

**Educational Qualification:**
- Passed or appearing in Class 12 (or equivalent) with **Physics, Chemistry, and Mathematics** as core subjects
- Diploma holders in Engineering/Technology are also eligible for Paper 1

**Age Limit:** No age limit. NTA removed the upper age restriction — any student who meets the academic criteria can appear.

**Minimum Marks in Class 12:**
- No minimum percentage required to *appear* in JEE Main
- For *admission* to NITs, IIITs, and GFTIs through JoSAA: you need **75% aggregate in Class 12** (or top 20 percentile of your board) — SC/ST need 65%

**Number of Attempts:** You can appear in JEE Main for up to **3 consecutive years** after passing Class 12.

---

## Exam Pattern — Paper 1 (B.E. / B.Tech)

Paper 1 is a Computer Based Test (CBT). Each subject has two sections — Section A (MCQ) and Section B (Numerical Value Type with internal choice).

| Subject | Section A (MCQ) | Section B (NVT — attempt 5 of 10) | Total Questions | Marks |
|---|---|---|---|---|
| Mathematics | 20 | 5 (from 10 given) | 25 | 100 |
| Physics | 20 | 5 (from 10 given) | 25 | 100 |
| Chemistry | 20 | 5 (from 10 given) | 25 | 100 |
| **Total** | **60** | **15** | **75** | **300** |

**Marking Scheme:**
- MCQ (Section A): **+4 correct, –1 wrong**
- NVT (Section B): **+4 correct, 0 wrong** — no negative marking for numerical questions

**Duration:** 3 hours

**Mode:** Computer Based Test (online, no pen and paper for Paper 1)

**Language:** Available in 13 languages — English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu

---

## Paper 2A — B.Arch and Paper 2B — B.Planning

If you want to pursue Architecture or Urban Planning, you appear in Paper 2:

| Paper | For | Questions | Total Marks |
|---|---|---|---|
| Paper 2A | B.Arch | 77 (Maths + Aptitude + Drawing) | 400 |
| Paper 2B | B.Planning | 100 (Maths + Aptitude + Planning) | 400 |

Drawing section in B.Arch is pen-and-paper even though the rest is CBT.

---

## What JEE Main Score Gets You

**Score in JEE Main → Admission to:**
- NITs (National Institutes of Technology) — 31 NITs across India
- IIITs (Indian Institutes of Information Technology) — 25 IIITs
- GFTIs (Government Funded Technical Institutes)
- State government engineering colleges that accept JEE Main scores

**Score in JEE Main → Eligibility for:**
- JEE Advanced (only top 2.5 lakh Paper 1 candidates qualify each year)
- JEE Advanced → IIT admissions

---

## Counselling — JoSAA

After results, seat allotment for NITs, IIITs, and GFTIs happens through **JoSAA (Joint Seat Allocation Authority)** at josaa.nic.in. The process typically runs June–July. You fill your college and branch preferences, and seats are allotted based on your JEE Main rank, category, and preference order.

IIT seats are filled in parallel through JoSAA using JEE Advanced ranks.

---

## Preparation Strategy

JEE Main tests conceptual clarity, not rote memory. Here's what works:

**Mathematics:**
- Master calculus, coordinate geometry, and algebra — these carry the most weight
- Practice Numerical Value Type (NVT) questions — no negative marking means you should attempt all of them

**Physics:**
- Mechanics (Chapters 1–9 from Class 11) is the backbone — get it right
- Modern Physics and Optics are high-reward chapters — scoring for prepared students
- Use HC Verma for concepts, then solve previous year JEE Main papers

**Chemistry:**
- Organic Chemistry takes time to build — start early in the next cycle
- NCERT is gold for Inorganic Chemistry — chapters on p-block and coordination compounds are directly tested
- Physical Chemistry needs formula practice — electrochemistry, kinetics, equilibrium

**Best Books:**
- Mathematics: RD Sharma + Cengage or Arihant's JEE Maths
- Physics: HC Verma (Concepts of Physics) + DC Pandey
- Chemistry: NCERT (Inorganic) + OP Tandon (Physical) + Morrison Boyd (Organic basics)

---

## Frequently Asked Questions

**Q: Can I appear in both sessions of JEE Main in the same year?**
Yes. You can appear in Session 1 (January) and Session 2 (April) in the same year. NTA considers your better score from the two sessions.

**Q: Is there an age limit for JEE Main?**
No. NTA removed the age limit — any student who has passed or is appearing in Class 12 with Physics, Chemistry, and Mathematics is eligible.

**Q: How many times can I appear in JEE Main in total?**
You can appear in JEE Main for up to 3 consecutive years after passing Class 12. Since there are 2 sessions per year, that is a maximum of 6 attempts across 3 years.

**Q: Does Class 12 percentage matter for JEE Main eligibility?**
No minimum percentage is required to *sit* the exam. But for *admission* to NITs and IIITs through JoSAA, you need 75% in Class 12 (65% for SC/ST).

---

## Official Links

- JEE Main Official Portal: [jeemain.nta.nic.in](https://jeemain.nta.nic.in)
- NTA Main Site: [nta.ac.in](https://nta.ac.in)
- JoSAA Counselling: [josaa.nic.in](https://josaa.nic.in)

---

*Disclaimer: All information is sourced from official NTA notices and the JEE Main 2026 information bulletin. Since both sessions of JEE Main 2026 are complete, this page serves as a reference for students planning for JEE Main 2027. Always verify information at jeemain.nta.nic.in.*`,
};

// ============================================================
// 3. CTET SEPTEMBER 2026
// Source: ctet.nic.in | Official notification May 11, 2026
// Key facts verified:
//   - Notification released: May 11, 2026
//   - Application window: May 11 – June 10, 2026
//   - Correction window: June 15–18, 2026
//   - Exam date: September 6, 2026 (September 5 if high candidate count)
//   - Fee: Gen/OBC ₹1,200 (both papers) | SC/ST/PwD ₹600 (both papers)
//   - Paper I: Classes 1–5 teachers | Paper II: Classes 6–8 teachers
//   - Each paper: 150 MCQs, 150 marks, 2.5 hours, NO negative marking
//   - Qualifying: 60% (90/150 marks); SC/ST: 55% (82.5/150)
//   - CTET certificate: Lifetime valid (2021 onwards)
// ============================================================
const CTET_SEP_2026 = {
  slug: "ctet-september-2026",
  title: "CTET September 2026 — Exam Date, Eligibility, Syllabus & Application Guide",
  conducting_body: "Central Board of Secondary Education (CBSE)",
  exam_date: "September 6, 2026 (September 5, 2026 if candidate count is high)",
  application_start: "2026-05-11",
  application_end: "2026-06-10",
  eligibility:
    "Paper I (Classes 1–5 Teacher): Passed Senior Secondary (Class 12 or equivalent) with at least 50% marks, AND passed or appearing in final year of 2-year Diploma in Elementary Education (D.El.Ed) or 4-year B.El.Ed or 2-year Diploma in Education (Special Education). Alternatively, Graduation with at least 50% marks and passed or appearing in final year B.Ed. Paper II (Classes 6–8 Teacher): Bachelor's degree with at least 50% marks AND passed or appearing in final year of B.Ed or equivalent. Alternatively, Senior Secondary with 50% marks and 4-year B.El.Ed or 4-year B.A./B.Sc.Ed or B.Ed (Special Education). For SC/ST/OBC/Differently-Abled: minimum marks in all qualifications reduced by 5% (i.e., 45% instead of 50%). No age limit.",
  syllabus:
    "Paper I Syllabus: (1) Child Development and Pedagogy — 30 questions covering child development, inclusive education, learning and pedagogy; (2) Language I (Hindi/chosen language) — 30 questions on language comprehension, grammar, pedagogy; (3) Language II (English or other chosen language) — 30 questions; (4) Mathematics — 30 questions on content (Number System, Geometry, Shapes, Data Handling, Measurement, Time, Patterns) and pedagogical issues; (5) Environmental Studies — 30 questions on content (Family, Food, Shelter, Water, Travel, Things We Make and Do) and pedagogical issues. Paper II Syllabus: (1) Child Development and Pedagogy — 30 questions (same as Paper I); (2) Language I — 30 questions; (3) Language II — 30 questions; (4) Subject-specific paper — 60 questions — Mathematics and Science OR Social Studies/Social Science (candidate chooses one based on teaching subject). Mathematics & Science covers Algebra, Geometry, Mensuration, Data Handling, Science (Food, Materials, World of Living, Moving Things, Natural Phenomena, Natural Resources). Social Studies covers History, Geography, Social and Political Life.",
  exam_pattern: {
    papers: [
      {
        paper: "Paper I (For Classes 1–5 / Primary Level)",
        questions: 150,
        marks: 150,
        duration: "2.5 hours (150 minutes)",
        question_type: "Multiple Choice Questions (MCQ) — 4 options, 1 correct",
        negative_marking: "None",
        sections: [
          { section: "Child Development and Pedagogy", questions: 30, marks: 30 },
          { section: "Language I (compulsory)", questions: 30, marks: 30 },
          { section: "Language II (compulsory)", questions: 30, marks: 30 },
          { section: "Mathematics", questions: 30, marks: 30 },
          { section: "Environmental Studies", questions: 30, marks: 30 },
        ],
      },
      {
        paper: "Paper II (For Classes 6–8 / Upper Primary Level)",
        questions: 150,
        marks: 150,
        duration: "2.5 hours (150 minutes)",
        question_type: "Multiple Choice Questions (MCQ) — 4 options, 1 correct",
        negative_marking: "None",
        sections: [
          { section: "Child Development and Pedagogy", questions: 30, marks: 30 },
          { section: "Language I (compulsory)", questions: 30, marks: 30 },
          { section: "Language II (compulsory)", questions: 30, marks: 30 },
          {
            section: "Subject Paper — Mathematics & Science OR Social Studies (choose one)",
            questions: 60,
            marks: 60,
          },
        ],
      },
    ],
    qualifying_marks: "60% — 90 out of 150 marks (General). SC/ST/OBC/PwD: 55% — 82.5 marks (rounded to 83).",
    certificate_validity: "Lifetime (CBSE changed this from 7 years to lifetime in 2021)",
  },
  admit_card_link: "https://ctet.nic.in",
  result_link: "https://ctet.nic.in",
  official_link: "https://ctet.nic.in",
  category: "teaching",
  state: "all-india",
  is_active: true,
  completeness_score: 96,
  reading_time: "9 min read",
  description:
    "CTET September 2026 exam is scheduled for September 6, 2026. Application window: May 11 – June 10, 2026. 150 MCQs, 150 marks, no negative marking. Paper I for primary teachers (Classes 1–5), Paper II for upper primary (Classes 6–8). Apply at ctet.nic.in.",
  content: `## CTET September 2026 — Complete Guide for Aspiring Teachers

If you want to teach in a Central Government school — KVS, NVS, Army Schools, or schools run by any central body — you need a CTET certificate. No CTET, no central government teaching job. That's the rule, and it hasn't changed since 2011.

CTET September 2026 is the second CTET exam this year (February 2026 session has already concluded with results out). The September session gives you another shot if you missed February, or a chance to improve your score.

**Application closes June 10, 2026 — today is the last day to apply.** If you haven't applied yet, go to ctet.nic.in right now.

---

## Important Dates

| Event | Date |
|---|---|
| Notification Released | May 11, 2026 |
| Application Opens | May 11, 2026 |
| **Application Last Date** | **June 10, 2026** |
| Application Correction Window | June 15–18, 2026 |
| Admit Card (Expected) | August 2026 (2–3 weeks before exam) |
| **Exam Date** | **September 6, 2026** |
| Possible Alternate Date | September 5, 2026 (if candidate count is very high) |
| Result (Expected) | October/November 2026 |

*Verify at ctet.nic.in.*

---

## Which Paper Should You Apply For?

CTET has two papers. You apply based on the level you want to teach:

| Paper | For | Classes |
|---|---|---|
| **Paper I** | Primary teacher | Classes 1 to 5 |
| **Paper II** | Upper Primary teacher | Classes 6 to 8 |

You can apply for **both papers** if you want to be eligible to teach Classes 1–8. Applying for both is common and recommended if you're aiming for broader job eligibility.

---

## Eligibility

**Paper I — Primary Level (Classes 1–5):**
- Passed Senior Secondary (Class 12 or equivalent) with at least **50% marks**, AND
- Passed or appearing in final year of **D.El.Ed** (2-year Diploma in Elementary Education) or **B.El.Ed** (4-year Bachelor of Elementary Education), OR
- Graduation with 50% marks + B.Ed (for candidates trained under the NCTE 2011 norms for Paper I eligibility)

**Paper II — Upper Primary Level (Classes 6–8):**
- **Bachelor's degree** with at least **50% marks**, AND
- Passed or appearing in final year of **B.Ed** or equivalent, OR
- Senior Secondary with 50% + 4-year **B.El.Ed** / **B.A./B.Sc.Ed** / **B.Ed (Special Education)**

**Relaxation:** SC, ST, OBC, and Differently-Abled candidates: minimum qualifying marks relaxed by 5% (45% instead of 50%) across all qualifications.

**Age limit:** None.

---

## Application Fee

| Category | One Paper | Both Papers |
|---|---|---|
| General / OBC | ₹1,000 | ₹1,200 |
| SC / ST / Differently-Abled | ₹500 | ₹600 |

Payment at ctet.nic.in via credit/debit card, net banking, or UPI.

---

## Exam Pattern

Both papers are fully MCQ-based with **no negative marking** — attempt every question.

### Paper I — Primary Level

| Section | Questions | Marks |
|---|---|---|
| Child Development and Pedagogy | 30 | 30 |
| Language I (Hindi or chosen language) | 30 | 30 |
| Language II (English or chosen language) | 30 | 30 |
| Mathematics | 30 | 30 |
| Environmental Studies | 30 | 30 |
| **Total** | **150** | **150** |

**Duration:** 2.5 hours (150 minutes) | **No negative marking**

### Paper II — Upper Primary Level

| Section | Questions | Marks |
|---|---|---|
| Child Development and Pedagogy | 30 | 30 |
| Language I | 30 | 30 |
| Language II | 30 | 30 |
| Subject Paper (choose one: Maths & Science OR Social Studies) | 60 | 60 |
| **Total** | **150** | **150** |

**Duration:** 2.5 hours (150 minutes) | **No negative marking**

For Paper II, you choose between **Mathematics & Science** or **Social Studies/Social Science** depending on the subject you intend to teach. You cannot switch this choice after submission.

---

## Qualifying Marks

To pass CTET, you need to score at least **60% marks** — that is **90 out of 150** for the General category.

| Category | Minimum Qualifying Marks |
|---|---|
| General | 60% — 90 out of 150 |
| SC / ST / OBC / PwD | 55% — approximately 83 out of 150 |

CTET is not a rank-based exam — everyone who crosses the qualifying threshold gets the certificate. There is no merit list or seat limit.

---

## Syllabus Breakdown

**Child Development and Pedagogy (Common to both papers):**
This section covers child psychology, how children learn, inclusive education, and classroom teaching methods. Focus on NCF 2005, RTE Act 2009, and learning theories (Piaget, Vygotsky, Kohlberg). This is one section where reading NCERT Education textbooks and standard pedagogy notes pays off.

**Language I and Language II:**
Both are about language comprehension and grammar, with a pedagogy component. Language I is typically Hindi; Language II is typically English for most candidates, but you can choose from a list of scheduled languages.

**Paper I — Environmental Studies (EVS):**
Based on Class 3–5 NCERT EVS textbooks. Topics: Food, Water, Shelter, Family, Plants, Animals, Travel, Things Around Us. The pedagogy part asks how to teach EVS concepts to young children. Read the actual NCERT textbooks, not just notes.

**Paper II — Mathematics & Science:**
Mathematics covers Number System, Algebra, Geometry, Measurement, Data Handling and Pedagogy. Science covers Food, Materials, World of Living, Moving Things, Natural Phenomena, Natural Resources, and Science pedagogy.

**Paper II — Social Studies:**
History (from ancient to modern India), Geography (Earth, Environment, Resources), and Social and Political Life (governance, democracy, judiciary). Pedagogy component covers how to teach Social Studies effectively.

---

## Admit Card

Expect the admit card in **August 2026**, roughly 2–3 weeks before the September 6 exam. Download it from ctet.nic.in using your application number and date of birth. Check your name, photo, signature, exam centre, and paper (I or II or both) carefully. Carry a printed copy + original ID to the exam hall.

---

## CTET Certificate Validity — Lifetime

This is a big one: since 2021, CTET certificates are **valid for a lifetime**. Earlier they expired after 7 years, which forced teachers to re-appear. That rule is gone. A certificate earned in CTET September 2026 will remain valid forever.

---

## Preparation Tips

CTET rewards consistent study over last-minute cramming. Here's a practical plan:

1. **Start with Child Development and Pedagogy** — it carries 30 marks in both papers and is the most predictable section. Use NCERT textbooks on Childhood and Growing Up, and standard CTET pedagogy books.

2. **Read NCERT textbooks for your subject** — For Paper II Maths & Science, read Class 6–8 Science and Maths NCERT. For Social Studies, read Class 6–8 History/Geography/Political Science NCERT cover to cover.

3. **No negative marking — attempt all 150** — This is critical. Never leave a question blank. With 4 options and no penalty, even a blind guess gives you a 25% chance.

4. **Previous year papers are gold** — CTET repeats question types, child development theories, and even specific scenarios. Solve at least CTET Dec 2024 and CTET Feb 2026 papers.

5. **Language sections are easy marks** — Passages, grammar, and pedagogy questions are straightforward. Don't skip preparing for these thinking they'll come naturally — they need practice too.

6. **Time yourself** — 150 questions in 150 minutes = 1 minute per question. Some questions take 30 seconds, others 90 seconds. Practice timed mock tests so you aren't surprised on exam day.

---

## Frequently Asked Questions

**Q: I already have a CTET certificate. Should I appear again?**
Only if you want to improve your score for competitive purposes. CTET qualifying means you've crossed the threshold — there's no ranking. But some state recruitments give preference to higher scores, so appearing again to score higher can help.

**Q: Can a B.Ed student in their final year apply for CTET?**
Yes. Final-year B.Ed students can apply for Paper II. You will need to produce your degree certificate at the time of recruitment, not at the application stage.

**Q: Does CTET certification guarantee a government teaching job?**
No. CTET makes you *eligible* for central government school teaching jobs — it is one of the eligibility criteria, not a direct appointment. You still need to apply and clear the respective recruitment process (KVS, NVS, etc.).

**Q: Is CTET valid for state government school jobs?**
CTET is mandatory for central government school jobs. For state government schools, states either accept CTET or conduct their own TET (STET). Many states accept both.

**Q: How many times can I appear in CTET?**
There is no restriction on the number of attempts. You can appear as many times as you like.

---

## Official Links

- CTET Official Portal: [ctet.nic.in](https://ctet.nic.in)
- CBSE Main Site: [cbse.gov.in](https://www.cbse.gov.in)

---

*Disclaimer: All information is based on the official CTET September 2026 notification released by CBSE on May 11, 2026 at ctet.nic.in. Dates are subject to change — always verify from the official site before applying or appearing.*`,
};

// ============================================================
// INSERT ALL THREE
// ============================================================
async function insertExam(exam) {
  const { slug, title } = exam;

  // Check if already exists
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

const exams = [NEET_UG_2026, JEE_MAIN_2026, CTET_SEP_2026];

console.log("=== Inserting 3 entrance exams ===\n");
for (const exam of exams) {
  await insertExam(exam);
}
console.log("\n=== Done ===");
