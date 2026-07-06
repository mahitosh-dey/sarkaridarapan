// ============================================================
// Indian Navy SSC Officer 2026 — June 2027 (AT 27) Course
// Source: joinindiannavy.gov.in notification; verified July 6, 2026
// Vacancies: 275 tentative | Apply: June 25 – July 27, 2026
// ============================================================

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const NAVY_SSC_OFFICER_2026 = {
  slug: "indian-navy-ssc-officer-2026",
  title: "Indian Navy SSC Officer 2026 — 275 Vacancies | Apply by 27 Jul",
  organization: "Indian Navy",
  post_name: "Short Service Commission Officer (June 2027 / AT 27 Course) across 12 branches including Executive, Pilot, ATC, Engineering, Electrical, Logistics, Education, Naval Armament Inspectorate, and Naval Constructor",
  vacancies: 275,
  qualification:
    "Executive / Pilot / Naval Air Operations Officer / Air Traffic Controller: BE/B.Tech in any discipline with minimum 60 percent aggregate. Pilot, NAOO, and ATC candidates additionally need 60 percent in Class 10 and 12, plus 60 percent English marks. Logistics: BE/B.Tech First Class, or MBA First Class, or B.Sc/B.Com/B.Sc(IT) First Class plus PG Diploma in Finance/Logistics/Supply Chain, or MCA/M.Sc(IT) First Class. Naval Armament Inspectorate: BE/B.Tech with 60 percent in Mechanical, Aeronautical, Electrical, Electronics, IT, Chemical, Metallurgy, or related streams; or PG degree in Electronics/Physics. Education: MSc/MA in Mathematics, Physics, History, Oceanography, etc.; or BE/B.Tech in Mechanical, Electrical, Electronics; or ME/M.Tech. Engineering (GS): BE/B.Tech with 60 percent in Marine, Instrumentation, Production, Aerospace, Mechanical, Metallurgy, Mechatronics, or Aeronautical. Electrical (GS): BE/B.Tech with 60 percent in Electrical, Electronics, or related. Naval Constructor: BE/B.Tech with 60 percent in Mechanical, Civil, Aeronautical, Marine, Naval Architecture, or Metallurgy. Degrees must be from UGC-recognised Indian universities (foreign degrees need an equivalence certificate).",
  eligibility:
    "Nationality: Indian citizen. Marital status: Must be unmarried at the time of application and remain unmarried through training. Gender: Both men and women eligible for most branches (some branches have a cap on women vacancies; Submarine Tech Electrical is men only). Age: Date of birth between 2 July 2002 and 1 January 2008 for most branches. Pilot/NAOO/Observer: born between 2 July 2003 and 1 July 2008. Air Traffic Controller and Education: born between 2 July 2002 and 1 July 2006. Physical standards: Height, weight, chest, vision as per Indian Navy medical standards; corrective surgeries such as LASIK are permitted for some branches under conditions specified in the official notification. Final-year students may apply provided they complete their degree before training begins in June 2027.",
  salary:
    "Sub Lieutenant starting gross salary is approximately ₹1,20,000 per month, including Basic Pay (Level 10 of 7th CPC, ₹56,100 minimum), Military Service Pay, Dearness Allowance, and other applicable allowances. Post-training, Pilot / Naval Air Operations Officer / Submarine officers receive an additional flying or submarine allowance of ₹31,250 per month. Officers also receive Field Area Allowance, Hard Area Allowance, and Kit Maintenance Allowance based on posting. Non-monetary benefits: rent-free furnished accommodation or House Rent Allowance, comprehensive medical cover for self and family through Armed Forces Medical Services, subsidised messing at officers messes, canteen (CSD) privileges, group insurance, family pension, and Leave Travel Concession. Career progression is time-scale: Lieutenant → Lieutenant Commander → Commander over the SSC tenure of 10 years, extendable to 14 years based on service requirements.",
  application_fee: {
    note: "No application fee. Indian Navy SSC Officer applications through joinindiannavy.gov.in are free of cost.",
    payment_mode: "N/A",
  },
  important_dates: {
    notificationDate: "2026-06-25",
    startDate: "2026-06-25",
    lastDate: "2026-07-27",
    lastDateFeePayment: "2026-07-27",
    ssbInterview: "Announced individually via email after shortlisting (Bangalore / Bhopal / Coimbatore / Visakhapatnam / Kolkata)",
    trainingStart: "June 2027",
    trainingLocation: "Indian Naval Academy (INA), Ezhimala, Kerala",
  },
  how_to_apply:
    "1. Go to joinindiannavy.gov.in and click on Officer Entry. 2. Select the AT 27 (June 2027) course notification. 3. Register with a valid email ID and mobile number. Both must remain active through the selection process — all SSB call letters go to email. 4. Fill the online application with your personal, educational, and branch preference details. You can list up to two preferences. 5. Upload scanned photograph, signature, and left-hand thumb impression in the specified format. 6. Preview the application, correct any errors, and submit. 7. Download and keep a printed copy of the acknowledgement. Last date to submit: 27 July 2026. No corrections are permitted after submission, so verify every field before hitting submit.",
  selection_process:
    "**Stage 1 — Application Shortlisting**\nApplications are screened against branch-wise cut-off marks. Only candidates who meet the cut-off get an SSB interview call. Cut-offs vary each cycle depending on the number and quality of applicants.\n\n**Stage 2 — SSB Interview (5 Days)**\nThe Services Selection Board interview runs over five days at one of five centres: Bangalore, Bhopal, Coimbatore, Visakhapatnam, or Kolkata.\n\nDay 1 (Screening): Officer Intelligence Rating tests and Picture Perception & Discussion Test. Roughly half the candidates get screened out on Day 1.\n\nDay 2: Psychological tests — Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self-Description Test (SDT).\n\nDay 3 and 4: Group Testing Officer tasks — Group Discussion, Group Planning Exercise, Progressive Group Task, Half Group Task, Command Task, Individual Obstacles, Snake Race, Final Group Task, and Lecturette. Personal Interview with the Interviewing Officer.\n\nDay 5: Conference — all assessors meet and take the final call. Result declared the same day.\n\n**Stage 3 — Medical Examination**\nCandidates recommended by the SSB go through a detailed medical exam at a Military Hospital over three to five days. Standards vary slightly by branch — Pilots and Submariners face the strictest medicals.\n\n**Stage 4 — Merit List and Joining**\nA final merit is drawn up combining SSB marks and medical fitness. Selected candidates receive joining instructions for Indian Naval Academy, Ezhimala, with training starting in June 2027.",
  official_link: "https://www.joinindiannavy.gov.in",
  notification_link: "https://www.joinindiannavy.gov.in/en/page/notifications.html",
  apply_link: "https://www.joinindiannavy.gov.in",
  category: "defence",
  state: "all-india",
  is_active: true,
  last_date: "2026-07-27",
  employment_type: "FULL_TIME",
  completeness_score: 90,
  reading_time: "8 min read",
  description:
    "Indian Navy SSC Officer 2026 (AT 27 Course): 275 vacancies across 12 branches. Apply 25 Jun to 27 Jul at joinindiannavy.gov.in. Sub Lt salary ₹1.2L/month.",
  content: `## Indian Navy SSC Officer 2026 — 275 officer posts, apply by 27 July

Indian Navy has opened applications for the June 2027 (AT 27) Short Service Commission Officer course. Total 275 tentative vacancies across 12 branches. Applications are live at joinindiannavy.gov.in and close on **27 July 2026**.

You're eligible if you hold a BE/B.Tech (or the specific PG qualification for Education, Logistics, and Naval Armament branches), are unmarried, and were born between the dates specified for your branch. Selection is through SSB Interview and medical, with training at Indian Naval Academy, Ezhimala from June 2027.

There is no application fee, and both men and women can apply for most branches.

---

## Important dates

| Event | Date |
|---|---|
| Notification released | 25 June 2026 |
| **Online application opens** | **25 June 2026** |
| **Last date to apply** | **27 July 2026** |
| SSB interview call-up | Announced individually after shortlisting |
| Training commences | June 2027 (INA Ezhimala) |

Applications close at midnight on 27 July. No extensions have been announced in recent SSC Officer cycles, so treat this deadline as final.

---

## Vacancy breakdown — 275 posts across 12 branches

The Navy has published a tentative branch-wise split. Vacancies may adjust based on training slot availability at INA.

| Branch | Posts | Open to |
|---|---|---|
| Executive (GS(X) / Hydro) | 90 (incl. 10 Hydro) | Men & Women |
| Electrical (GS) | 40 (8 + 32) | Men (8) / Men & Women (32) |
| Pilot | 25 | Men & Women |
| Engineering (GS) | 24 | Men & Women |
| Naval Air Operations Officer | 18 | Men & Women |
| Naval Constructor | 18 | Men & Women |
| Air Traffic Controller | 15 | Men & Women |
| Naval Armament Inspectorate | 14 | Men & Women |
| Education | 13 (5 + 8) | Men & Women |
| Logistics | 10 | Men & Women |
| Submarine Tech Electrical | 8 | Men only |
| Submarine Tech Engineering | Vacancies to be notified | Men & Women |

Executive branch has the largest share at 90 posts. Pilot and NAOO are the most competitive because of the strict medical and higher-education standards, plus a hard cap on women intake per branch.

---

## Who can apply?

### Age limits (date-of-birth ranges)

| Branch | Born between |
|---|---|
| Most branches | 2 July 2002 to 1 January 2008 |
| Pilot / NAOO / Observer | 2 July 2003 to 1 July 2008 |
| Air Traffic Controller | 2 July 2002 to 1 July 2006 |
| Education | 2 July 2002 to 1 July 2006 |

Your date of birth on your 10th class certificate is what the Navy accepts. Any mismatch means rejection at document verification.

### Educational qualifications by branch

**Executive, Pilot, NAOO, Air Traffic Controller**
BE/B.Tech in any discipline, minimum 60 percent aggregate. Pilot, NAOO, and ATC candidates also need 60 percent in Class 10 and 12, and 60 percent in English marks in either 10th or 12th.

**Engineering (GS)**
BE/B.Tech with 60 percent in Marine, Instrumentation, Production, Aerospace, Mechanical, Metallurgy, Mechatronics, or Aeronautical Engineering.

**Electrical (GS) and Submarine Tech Electrical**
BE/B.Tech with 60 percent in Electrical, Electronics, or related disciplines.

**Naval Constructor**
BE/B.Tech with 60 percent in Mechanical, Civil, Aeronautical, Marine, Naval Architecture, or Metallurgy.

**Naval Armament Inspectorate**
BE/B.Tech with 60 percent in Mechanical, Aeronautical, Electrical, Electronics, IT, Chemical, Metallurgy, and related streams; or a PG degree in Electronics/Physics. Class 10/12 aggregate 60 percent with 60 percent English.

**Education Branch**
MSc/MA in Mathematics, Physics, History, Oceanography, and related subjects; or BE/B.Tech (Mechanical, Electrical, Electronics); or ME/M.Tech. Class 10/12: 60 percent with 60 percent English.

**Logistics**
BE/B.Tech First Class; or MBA First Class; or B.Sc/B.Com/B.Sc(IT) First Class plus PG Diploma in Finance, Logistics, or Supply Chain; or MCA/M.Sc(IT) First Class.

Final-year students may apply, but you must have your provisional or final degree in hand before training starts in June 2027.

### Physical standards

Height, weight, vision, and chest measurements follow Navy medical standards, which differ slightly by branch. Corrective eye surgery (LASIK) is permitted for some branches under conditions listed in the official notification. Read your branch section carefully before applying — a medical rejection late in the process is a wasted year.

---

## What is the salary of a Navy SSC Officer?

Your gross monthly pay at commissioning as Sub Lieutenant is approximately **₹1,20,000**. The break-up:

| Component | Approximate Amount |
|---|---|
| Basic Pay (Level 10, 7th CPC) | ₹56,100+ |
| Military Service Pay | ₹15,500 |
| Dearness Allowance | On basic + MSP |
| Kit Maintenance / other allowances | Variable |

Post-training, if you're commissioned as a Pilot, Naval Air Operations Officer, or Submariner, you get an additional **flying / submarine allowance of ₹31,250 per month**. Officers posted in field areas or hard areas get further allowances.

Non-monetary benefits are substantial:

- Rent-free furnished accommodation (or HRA if quarters unavailable)
- Comprehensive medical care through Armed Forces Medical Services for you and dependents
- Subsidised meals at officers messes
- Canteen (CSD) privileges — significant savings on white goods and staples
- Group insurance cover of ₹75+ lakh
- Leave Travel Concession — free travel to home town every year
- Family pension after commissioning

SSC tenure is 10 years, extendable to 14 years. Progression from Sub Lt → Lt → Lt Cdr → Cdr is time-scale, so promotions don't depend on interviews.

---

## How to apply — step by step

1. Open **joinindiannavy.gov.in** and click on **Officer Entry**
2. Select the **June 2027 (AT 27)** course notification
3. Register with a valid email ID and mobile number. Both should remain active until your SSB call-up — the Navy sends everything to email
4. Fill in personal, educational, and branch preference details. You may list up to two branches
5. Upload photograph, signature, and left thumb impression in the sizes specified on the form
6. Preview the application, fix any errors, and submit
7. Print the acknowledgement page and keep it safe

No corrections are allowed after submission. Take an hour on Sunday, sit down with your certificates, and fill it in one clean sitting.

---

## Selection process

There is no written exam. The Navy screens applications and calls shortlisted candidates directly for SSB Interview.

### Application shortlisting

The Navy applies a branch-wise cut-off based on your normalised percentage across 10th, 12th, and graduation marks. Cut-offs are announced only after applications close. Historical cut-offs for Executive have hovered near 70 percent; Pilot and NAOO have been closer to 75 percent.

### SSB Interview (5 days)

Reporting centres: Bangalore, Bhopal, Coimbatore, Visakhapatnam, or Kolkata. The Navy assigns your centre.

**Day 1 — Screening**
Officer Intelligence Rating tests and Picture Perception & Discussion Test. Around 50 percent of candidates get eliminated on Day 1.

**Day 2 — Psychology tests**
Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self-Description Test (SDT). You write under time pressure — practise TAT stories in advance.

**Day 3 and 4 — Group tasks and interview**
Group Discussion, Group Planning Exercise, Progressive Group Task, Half Group Task, Command Task, Individual Obstacles, Snake Race, Final Group Task, Lecturette. Plus a one-on-one Personal Interview with the IO. The Navy is checking leadership, decision-making under pressure, and how you behave in a group.

**Day 5 — Conference**
All assessors meet and finalise the recommendation. Results are declared the same day. Recommended candidates move to medicals; non-recommended candidates go home.

### Medical examination

Recommended candidates go through a detailed medical at the nearest Military Hospital, usually over three to five days. Pilots and Submariners have the strictest standards. Common medical rejections are eyesight below the branch cut-off, high or low blood pressure, and undeclared past surgeries.

### Merit list and joining

Final merit combines SSB marks and medical fitness. Provisional selection letters and joining instructions for INA Ezhimala go out roughly two to three months before the training start date in June 2027.

---

## Should you apply?

If you're a BE/B.Tech student or graduate, unmarried, and under the branch age limit — apply. There is no fee, and even if you don't make it, an SSB call-up is invaluable interview practice for future attempts (CDS, AFCAT, other SSC cycles).

**Why the Navy appeals:**

- Officer rank from day one, unlike JCO or PBOR entries
- ₹1.2 lakh gross at 22 or 23 years old is competitive with tier-1 private companies
- Free medical, quarters, canteen access, and pension add real value on top of pay
- SSC gives you 10 to 14 years of service — long enough to build a career, short enough to shift to civilian life afterward
- Postings across coastal cities and ships — you actually see the country

**Points to weigh:**

- Selection is genuinely hard. Recommendation rates from SSB rarely cross 5 percent
- Postings can be at sea for months at a stretch — not ideal if you value routine
- Medical standards are strict; even one bad marker like colour vision deficiency can disqualify you from Pilot or ATC
- SSC officers don't get a pension unless they complete 20+ years, though gratuity and severance are paid

---

## Frequently asked questions

**When does the Indian Navy SSC Officer 2026 application close?**
27 July 2026. Applications submitted after midnight of this date will not be accepted.

**What is the age limit for Navy SSC Officer 2026?**
Most branches require date of birth between 2 July 2002 and 1 January 2008. Pilot/NAOO/Observer needs DOB between 2 July 2003 and 1 July 2008. ATC and Education need DOB between 2 July 2002 and 1 July 2006.

**What is the salary of a Sub Lieutenant in the Indian Navy?**
Approximately ₹1,20,000 per month gross at commissioning, including Basic Pay (₹56,100 minimum at Level 10 of 7th CPC), Military Service Pay, and Dearness Allowance. Pilot / NAOO / Submarine officers get an additional ₹31,250 per month post-training.

**Is there an application fee for Navy SSC Officer?**
No. There is no application fee for Indian Navy SSC Officer entries.

**Can women apply for Navy SSC Officer 2026?**
Yes. Women can apply for 11 of the 12 branches. Only Submarine Tech Electrical is restricted to men. Some branches have a hard cap on women intake per cycle.

**Is there a written exam for Navy SSC Officer?**
No. The Navy screens applications against branch cut-offs and calls shortlisted candidates directly for SSB Interview. Selection is SSB Interview + Medical only.

**Where is the training for Navy SSC Officer conducted?**
Indian Naval Academy (INA), Ezhimala, Kerala. Training for the AT 27 course starts in June 2027.

**Can final-year students apply?**
Yes. You may apply while in your final year, but you must complete your degree and produce the certificate before training commences in June 2027.

---

## Quick links

- **Apply online**: [joinindiannavy.gov.in](https://www.joinindiannavy.gov.in)
- **Notifications page**: [joinindiannavy.gov.in/notifications](https://www.joinindiannavy.gov.in/en/page/notifications.html)
- **Indian Navy official**: [indiannavy.nic.in](https://www.indiannavy.nic.in)
`,
};

async function main() {
  console.log("Adding Indian Navy SSC Officer 2026...");
  console.log("Title length:", NAVY_SSC_OFFICER_2026.title.length);
  console.log("Description length:", NAVY_SSC_OFFICER_2026.description.length);

  const { data, error } = await supabase
    .from("jobs")
    .upsert([NAVY_SSC_OFFICER_2026], { onConflict: "slug" })
    .select("id, slug, title");

  if (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }

  console.log("Done:", data[0].slug);
  console.log("   Title:", data[0].title);
}

main();
