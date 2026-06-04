import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const envFile = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const env = Object.fromEntries(
  envFile.split("\n").filter(l => l.includes("=") && !l.startsWith("#"))
    .map(l => { const [k, ...v] = l.split("="); return [k.trim(), v.join("=").trim()]; })
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

const job = {
  slug: "ssc-cpo-si-2026",
  title: "SSC CPO SI 2026 — Sub-Inspector Delhi Police & CAPF",
  organization: "Staff Selection Commission (SSC)",
  post_name: "Sub-Inspector (Delhi Police), Sub-Inspector (CAPFs), Assistant Sub-Inspector (CISF)",
  vacancies: 4187,
  eligibility: {
    age: "20–25 years as on June 30, 2026 (OBC: +3 yrs, SC/ST: +5 yrs, Ex-Servicemen: as per rules)",
    education: "Bachelor's Degree in any discipline from a recognised university"
  },
  salary: "Pay Level 6 — ₹35,400 to ₹1,12,400/month + DA + HRA + TA + Medical (CGHS)",
  application_fee: {
    general: "₹100",
    obc: "₹100",
    ews: "₹100",
    sc_st: "Nil",
    women: "Nil",
    ph: "Nil"
  },
  important_dates: {
    startDate: "2026-05-31",
    lastDate: "2026-06-30",
    examDate: "2026-10-01"
  },
  how_to_apply: `1. Visit the official SSC website: https://ssc.gov.in/
2. Click on "Apply" → "SSC CPO 2026"
3. Register (one-time) using Aadhaar / valid ID if not already registered
4. Log in with your Registration Number and Date of Birth
5. Fill in personal details, educational qualification, and contact information
6. Upload scanned photo (passport size, white background) and signature
7. Pay application fee of ₹100 (online via Net Banking / UPI / Debit/Credit Card)
8. SC/ST/Female/Ex-Servicemen candidates: fee is Nil (select exemption during payment step)
9. Review all filled details carefully before final submission
10. Submit the form and download/print the confirmation page for your records
11. Admit Card will be available on ssc.gov.in before the Paper I exam`,
  selection_process: `The selection process for SSC CPO SI 2026 consists of four stages:

**Stage 1 — Paper I (Computer Based Examination)**
Objective type, multiple choice questions:
- General Intelligence & Reasoning: 50 questions, 50 marks
- General Knowledge & General Awareness: 50 questions, 50 marks
- Quantitative Aptitude: 50 questions, 50 marks
- English Comprehension: 50 questions, 50 marks
- Total: 200 questions, 200 marks, 2 hours
- Negative Marking: 0.25 marks per wrong answer

**Stage 2 — Physical Endurance Test (PET) & Physical Standard Test (PST)**
Candidates shortlisted from Paper I appear for PET/PST.

Physical Standards:
| | Male | Female |
|---|---|---|
| Height | 170 cm (165 cm for Hill/SC/ST) | 157 cm (152 cm for Hill/SC/ST) |
| Chest | 80–85 cm (unexpanded–expanded) | N/A |
| Weight | Proportionate to height | Proportionate to height |

Physical Endurance Test:
| Event | Male | Female |
|---|---|---|
| Race | 5 km in 24 minutes | 1.6 km in 8.5 minutes |
| Long Jump | 3.65 m (3 chances) | 2.7 m (3 chances) |
| High Jump | 1.2 m (3 chances) | 0.9 m (3 chances) |
| Shot Put (7.26 kg) | 4.5 m | N/A |

**Stage 3 — Paper II (Computer Based Examination)**
- English Language & Comprehension: 200 questions, 200 marks, 2 hours
- Negative Marking: 0.25 marks per wrong answer

**Stage 4 — Medical Examination**
Final medical standards as per MHA guidelines. Eye standards, colour blindness check, etc.`,
  official_link: "https://ssc.gov.in/",
  notification_link: "https://ssc.gov.in/",
  apply_link: "https://ssc.gov.in/",
  category: "ssc",
  state: "all-india",
  is_active: true,
  description: "SSC CPO SI 2026 notification released for 4187 Sub-Inspector vacancies in Delhi Police, BSF, CRPF, CISF, ITBP, SSB, and NIA. Apply online at ssc.gov.in before June 30, 2026. Graduate candidates aged 20–25 years are eligible.",
  reading_time: "9 min read",
  image: "",
  last_date: "2026-06-30",
  qualification: "Bachelor's Degree in any discipline from a recognised university",
  employment_type: "FULL_TIME",
  content: `## What is SSC CPO?

SSC CPO (Central Police Organisations) is one of the most sought-after exams conducted by the Staff Selection Commission. It recruits Sub-Inspectors for Delhi Police and Central Armed Police Forces (CAPFs) — BSF, CRPF, CISF, ITBP, SSB — and also Assistant Sub-Inspectors for CISF.

A career through SSC CPO means a uniformed central government job with real responsibility, structured career growth, and a salary that puts you in the top tier of government employment at the graduate level.

---

## Posts and Organizations

| Post | Organization |
|---|---|
| Sub-Inspector (GD) | BSF, CRPF, ITBP, SSB |
| Sub-Inspector (Executive) | Delhi Police |
| Sub-Inspector (GD) | NIA (National Investigation Agency) |
| Sub-Inspector | CISF (with ASI-level entry) |
| Assistant Sub-Inspector (Executive) | CISF |

Each organization has its own posting patterns, promotional channels, and working conditions. Delhi Police SI is a popular choice as it is mostly city-based posting. BSF/CRPF/ITBP/SSB involve border and conflict-zone deployments.

---

## Vacancy Details 2026

| Organization | Male | Female | Total |
|---|---|---|---|
| Delhi Police SI | To be notified | To be notified | — |
| BSF SI | To be notified | To be notified | — |
| CRPF SI | To be notified | To be notified | — |
| CISF SI / ASI | To be notified | To be notified | — |
| ITBP SI | To be notified | To be notified | — |
| SSB SI | To be notified | To be notified | — |
| NIA SI | To be notified | To be notified | — |
| **Total** | | | **~4,187** |

*Exact category-wise vacancy will be published in the official notification.*

---

## Eligibility Criteria

### Age Limit
- **Minimum:** 20 years
- **Maximum:** 25 years (as on June 30, 2026)

**Age Relaxation:**

| Category | Relaxation |
|---|---|
| OBC (Non-Creamy Layer) | 3 years (max 28 years) |
| SC / ST | 5 years (max 30 years) |
| Ex-Servicemen | As per central govt rules |
| Central Govt Employees | 5 years (for certain posts) |

### Educational Qualification
- Bachelor's Degree in **any discipline** from a recognised university
- Final year students who will complete degree before the cut-off date may also apply (subject to notification confirmation)

### Physical Standards

**For Male Candidates:**
- Height: 170 cm (165 cm for candidates from hilly areas, SC/ST)
- Chest: 80 cm (unexpanded) — 85 cm (expanded), minimum expansion 5 cm

**For Female Candidates:**
- Height: 157 cm (152 cm for candidates from hilly areas, SC/ST)
- Weight: Proportionate to height as per medical standards

### Special Requirements for Delhi Police SI (Male)
- Must possess a valid motor driving licence for Light Motor Vehicle at the time of document verification

---

## Salary and Pay Scale

| Level | Pay Scale | Basic Pay |
|---|---|---|
| Pay Level 6 | ₹35,400 – ₹1,12,400 | ₹35,400/month |

**Monthly Take-Home (approximate):**

| Component | Amount |
|---|---|
| Basic Pay | ₹35,400 |
| DA (Dearness Allowance) | ~₹15,000+ (revised quarterly) |
| HRA (House Rent Allowance) | ₹5,664 – ₹8,496 (city-based) |
| Transport Allowance | ₹3,600 – ₹7,200 |
| **Gross Monthly** | **~₹65,000 – ₹80,000** |

Additional perks: CGHS medical facility, NPS pension, leave encashment, uniform allowance (for uniformed posts), free rail pass, and canteen facility.

---

## Application Fee

| Category | Fee |
|---|---|
| General / OBC / EWS | ₹100 |
| SC / ST | Nil |
| Female (all categories) | Nil |
| PwBD / Ex-Servicemen | Nil |

Fee payment accepted online through the SSC portal (UPI, Net Banking, Debit/Credit Card).

---

## Selection Process

### Stage 1 — Paper I (Computer Based Test)

| Subject | Questions | Marks |
|---|---|---|
| General Intelligence & Reasoning | 50 | 50 |
| General Knowledge & General Awareness | 50 | 50 |
| Quantitative Aptitude | 50 | 50 |
| English Comprehension | 50 | 50 |
| **Total** | **200** | **200** |

- Duration: 2 hours (2 hours 40 minutes for PwBD)
- Negative Marking: 0.25 marks per wrong answer

### Stage 2 — PET & PST

Physical Endurance Test (qualifying):

| Event | Male | Female |
|---|---|---|
| Race | 5 km in 24 minutes | 1.6 km in 8.5 minutes |
| Long Jump | 3.65 m (3 chances) | 2.7 m (3 chances) |
| High Jump | 1.2 m (3 chances) | 0.9 m (3 chances) |
| Shot Put (7.26 kg) | 4.5 m | — |

Physical Standard Test: Height, Chest measurement, and Weight check.

### Stage 3 — Paper II (Computer Based Test)

| Subject | Questions | Marks |
|---|---|---|
| English Language & Comprehension | 200 | 200 |

- Duration: 2 hours
- Negative Marking: 0.25 marks per wrong answer
- Focus areas: Reading Comprehension, Grammar, Vocabulary, Error Spotting, Para Jumbles

### Stage 4 — Medical Examination

Final medical check covering:
- Vision standards (near and distant)
- Colour blindness test
- Overall physical fitness as per MHA standards

---

## Exam Pattern & Syllabus

### Paper I Syllabus

**General Intelligence & Reasoning:**
Analogies, Similarities & Differences, Space Visualization, Spatial Orientation, Problem Solving, Analysis, Judgment, Decision Making, Visual Memory, Discrimination, Observation, Relationship Concepts, Arithmetical Reasoning, Figural Classification, Arithmetic Number Series, Non-Verbal Series, Coding and Decoding, Statement Conclusion, Syllogistic Reasoning

**General Knowledge & General Awareness:**
Questions on India and its neighbouring countries, Sports, History, Culture, Geography, Economic Scene, General Polity, Indian Constitution, Scientific Research, Current Events (last 6 months)

**Quantitative Aptitude:**
Number Systems, Computation of Whole Numbers, Decimals and Fractions, Percentages, Ratio & Proportion, Square Roots, Averages, Interest (Simple & Compound), Profit & Loss, Discount, Partnership, Mixture and Alligation, Time and Distance, Time & Work, Basic Algebra, Geometry (Triangles, Circles), Mensuration, Trigonometry, Statistical Charts

**English Comprehension:**
English Language basics, Vocabulary, Grammar, Sentence Structure, Synonyms/Antonyms, Fill in the Blanks, Error Spotting, Reading Comprehension

### Paper II Syllabus (English)
- Reading Comprehension (passages)
- Cloze Test
- Grammar rules — Tenses, Voice, Narration, Prepositions, Articles
- Vocabulary — Synonyms, Antonyms, One-word Substitution, Idioms & Phrases
- Sentence Rearrangement (Para Jumbles)
- Error Identification / Sentence Improvement
- Fill in the Blanks

---

## Important Dates 2026

| Event | Date |
|---|---|
| Notification Release | May 31, 2026 |
| Online Application Start | May 31, 2026 |
| **Last Date to Apply** | **June 30, 2026** |
| Fee Payment Last Date | June 30, 2026 |
| Admit Card (Paper I) | Before October 2026 |
| Paper I (CBE) | October–November 2026 |
| PET / PST | After Paper I result |
| Paper II (CBE) | After PET/PST |
| Medical Examination | After Paper II |

---

## How to Apply Online

1. Visit **[ssc.gov.in](https://ssc.gov.in/)**
2. Click on **Apply → SSC CPO 2026**
3. Complete one-time registration if new user (Aadhaar-based OTP verification)
4. Log in with Registration Number and Date of Birth
5. Fill personal details, educational qualifications, and post preferences
6. Upload photo (passport size, white background, recent) and signature
7. Pay ₹100 fee online (UPI/Debit Card/Credit Card/Net Banking)
8. SC/ST/Female/Ex-Servicemen: select fee exemption — no payment required
9. Review all details before final submission
10. Download and print the Confirmation Page — keep it safe

---

## Preparation Strategy

**For Paper I (2 months):**
- Reasoning: 30 minutes daily — SSC CPO previous year papers (2018–2025). Focus on: Direction, Blood Relations, Coding-Decoding, Series. These are repetitive and scoreable.
- Quantitative Aptitude: Maths is lighter in CPO vs CGL — focus on Percentage, Profit & Loss, Speed-Distance-Time, SI/CI. Avoid getting stuck on advanced geometry.
- GK: 15 minutes daily — current affairs for past 6 months + static GK (Polity, History, Science). SSC CPO GK leans toward defence/police/security-related current affairs.
- English: Grammar rules + 200-word reading comprehension daily. Paper I English is moderate — Paper II English is the real challenge.

**For Paper II (6 weeks):**
- Pure English paper. Practice reading comprehension (4–5 passages daily), cloze tests (2–3 daily), and 20 error-spotting questions daily.
- Read 1 English newspaper editorial daily — it directly improves reading speed and comprehension score.
- Use previous year SSC CPO Paper II papers (2018–2025). The question pattern is very stable.

**For PET:**
- Start running 5 km daily 2 months before the PET date. Build stamina gradually — do not skip this regardless of your Paper I score.
- Long Jump and High Jump can be practiced at a local athletics track or open ground.

---

## Official Links

| Resource | Link |
|---|---|
| SSC Official Website | [ssc.gov.in](https://ssc.gov.in/) |
| Apply Online | [ssc.gov.in → Apply](https://ssc.gov.in/) |
| Official Notification | [Download from ssc.gov.in](https://ssc.gov.in/) |
| SSC Results | [ssc.gov.in → Result](https://ssc.gov.in/) |
`
};

const { data, error } = await supabase
  .from("jobs")
  .insert([job])
  .select("id, slug, title")
  .single();

if (error) {
  console.error("❌ Error inserting job:", error.message);
  process.exit(1);
}

console.log("✅ SSC CPO SI 2026 job post created successfully!");
console.log("   ID:   ", data.id);
console.log("   Slug: ", data.slug);
console.log("   Title:", data.title);
console.log("\n🔗 Preview: http://localhost:3000/sarkari-naukri/" + data.slug);
