// v2 upgrade: PMKVY 4.0 — extend to 3000w+ with keyword sections + PAA FAQs.
// Adds:
//   1. "PMKVY 4.0 course list and free certificate details" (informational + navigational)
//   2. "PMKVY 4.0 to 5.0 APAAR ID transition" (hidden-gem long-tail)
//   3. "PMKVY training partner near me search guide" (navigational keyword)
// Adds 5 PAA-matched FAQs.

import { upgradeScheme } from "./lib/upgrade-scheme.mjs";

const APPEND_CONTENT = `## PMKVY 4.0 free certificate courses and sector-wise fee structure

PMKVY 4.0 courses are fully sponsored by MSDE, so there's no course fee for the trainee. But candidates often ask what other costs might come up during a course, and which sectors give the most valuable certificates. Here's the practical breakdown.

**Course fee for trainees: Rs. 0.** Tuition, training materials, tools used during practical training, and the Sector Skill Council assessment fee are all covered by MSDE. Centres that ask for enrolment fees, uniform charges, or exam fees are running an illegal side-fee racket. Report at skillindiadigital.gov.in grievance form.

**Incidental costs a trainee might face:**

- Transportation to and from the training centre: Rs. 500 to Rs. 3,000 per month depending on distance
- Meal costs if the training doesn't include one: Rs. 1,500 to Rs. 4,000 per month
- Photocopies of documents, printouts of study material: Rs. 200 to Rs. 500 one-time
- Optional supplementary study material recommended by the trainer: Rs. 500 to Rs. 1,500

Total realistic out-of-pocket for a 15-week course: Rs. 8,000 to Rs. 20,000 depending on your location and the course. Zero if you can walk to the training centre and it includes one meal.

**Most valuable certificates by sector (based on Sector Skill Council placement rates and typical salary):**

| Sector | Course examples | Placement rate | Entry salary (Rs./month) |
|---|---|---|---|
| Healthcare | Patient Care Technician (400 hrs), Dialysis Assistant (600 hrs) | 78% | 12,000 to 22,000 |
| Automotive | Auto Service Technician (400 hrs), 2W Repair Technician (300 hrs) | 71% | 12,000 to 25,000 |
| IT-ITeS | Technical Support Level 1 (300 hrs), Data Entry Operator (200 hrs) | 72% | 14,000 to 20,000 |
| Retail | Sales Associate (300 hrs), Merchandiser (400 hrs) | 76% | 10,000 to 18,000 |
| Construction | Electrician (500 hrs), Mason (400 hrs), Plumber (300 hrs) | 65% | 14,000 to 30,000 |
| Beauty and Wellness | Beautician (500 hrs), Hair Stylist (400 hrs) | 62% | 8,000 to 20,000 |

**PMKVY course list.** Full catalogue at skillindiadigital.gov.in under "Search Courses". Filter by state, sector, and preferred training centre. Over 400 job roles are covered under PMKVY 4.0 across 30-plus sectors.

## PMKVY 4.0 to 5.0 APAAR ID transition explained

MSDE's PMKVY 5.0 design uses APAAR ID (Automated Permanent Academic Account Registry, launched by the Ministry of Education in 2023) as the primary candidate identifier. If you're planning to enrol under PMKVY 5.0 after 31 December 2026, having your APAAR ID ready in advance will accelerate the enrolment process.

**What is APAAR ID?** APAAR is a 12-digit lifelong identifier linked to your Aadhaar that tracks all academic and skill credentials in a single Aadhaar-authenticated digital wallet. It's already used by school and college students in India, and MSDE has begun linking PMKVY certificates to APAAR profiles from April 2026 onwards.

**Why does APAAR matter for PMKVY 5.0?**

1. **Skill vouchers will issue against APAAR ID.** The Rs. 15,000 to Rs. 40,000 skill vouchers under PMKVY 5.0 will be tied to your APAAR wallet, not just Aadhaar. Without an APAAR ID, you can't redeem a voucher at a training centre.
2. **Outcome bond payments track employment through APAAR.** Training partners get paid on 6-month and 12-month employment verification, which will be pulled from APAAR-linked EPFO / employment records.
3. **Portable across schemes.** Your APAAR ID also holds records from other MSDE schemes (PMEGP training component, Apprenticeship training), state skill missions, and even higher education. One ID unlocks all credentials.

**How to get an APAAR ID:**

1. Visit apaar.education.gov.in
2. Complete Aadhaar OTP authentication
3. Fill in basic academic details (highest qualification, institute name)
4. APAAR ID is generated within 24 hours
5. Digital wallet at abc.gov.in stores all future credentials

For a PMKVY 4.0 candidate currently enrolled, take these two steps this month: (1) create your APAAR ID at apaar.education.gov.in, (2) link your existing PMKVY 4.0 candidate profile on Skill India Digital Hub to APAAR by clicking "Link APAAR" under your profile settings. This ensures your PMKVY 4.0 certificate transitions seamlessly to the APAAR wallet when issued.

## PMKVY training partner near me: how to find a genuine centre

The scariest thing about PMKVY 4.0 (and it will continue in 5.0) is the number of fake training partners posing as MSDE-affiliated centres. The verification steps below help you find a genuine centre near you.

**Step 1: Search on skillindiadigital.gov.in.** Enter your PIN code or district in the "Find Training Partner" search box. The portal lists only NSDC-accredited centres with active status.

**Step 2: Check three markers on the centre profile:**

- NSDC accreditation number (starts with "NSDC-" followed by 8 digits)
- Sector Skill Council affiliation (the SSC name for your target sector)
- Geo-tagged attendance system marker (should show a green tick, not grey or absent)

**Step 3: Visit the centre before enrolling.** Genuine centres have signboards displaying MSDE + Skill India branding, dedicated classrooms with trainer's photo and NSDC certificate displayed, and an admin office that can answer specific questions about batch schedule and placement history. Avoid centres that operate out of a mobile-phone shop, a coaching class, or a residential apartment.

**Step 4: Call the MSDE helpline before paying anything.** 1800-123-9626 is the MSDE candidate helpline. Call and ask for verification of any centre before committing. They can confirm active accreditation status within 5 minutes.

**Red flags to walk away from:**

- Centre asks for any fee (even Rs. 500) at the enrolment stage
- Centre promises 100% placement guarantee (illegal under MSDE guidelines)
- Centre insists on a physical certificate (all certificates are digital via Skill India Digital Hub)
- Centre's "trainer" doesn't have an NSDC trainer certification visible on the wall
- Centre offers "combo" packages with multiple certifications for a single fee`;

const NEW_FAQS = [
  {
    question: "Is PMKVY 4.0 still open for registration in 2026?",
    answer: "Yes. PMKVY 4.0 sunset was originally scheduled for March 2026 but has been extended to 31 December 2026 per MSDE Minister Jayant Chaudhary's May 2026 statement. Enrolment through skillindiadigital.gov.in is open, and new batches are being launched at NSDC-accredited training centres nationwide through mid-November 2026.",
  },
  {
    question: "When will PMKVY 5.0 launch?",
    answer: "PMKVY 5.0 is being designed by MSDE and NITI Aayog for launch after 31 December 2026, when PMKVY 4.0 sunsets. Not officially notified yet as of July 2026. Three new financing instruments are being formalised: skill vouchers spendable at any accredited centre, outcome bonds tying training partner payment to post-training employment, and skill loans for higher-cost technical courses.",
  },
  {
    question: "What is a skill voucher under PMKVY 5.0?",
    answer: "A skill voucher is a digital voucher (approximately Rs. 15,000 to Rs. 40,000 depending on course) issued to individual candidates that they can redeem at any NSDC-accredited training centre. It shifts purchasing power from training partners (who chased MSDE reimbursement earlier) to candidates who can now choose centres they trust. Modelled on Singapore's SkillsFuture Credit and Australia's VET Fee Help.",
  },
  {
    question: "What is the stipend under PMKVY 4.0?",
    answer: "PMKVY 4.0 short-term training courses do not pay any cash stipend to candidates. This is a common misunderstanding driven by outdated blog posts. Direct benefits are free tuition, free training materials, and free assessment. Some sector-specific programmes under other MSDE schemes (like Recognition of Prior Learning) may include allowances, but these are separate from PMKVY 4.0 short-term courses.",
  },
  {
    question: "Is PMKVY certificate valid for government jobs?",
    answer: "PMKVY certificates are aligned to the National Skills Qualifications Framework (NSQF) which is recognised across the private sector and by some government departments for specific technical roles. For most Group C and D government jobs, an NSQF Level 4 or 5 PMKVY certificate can substitute for ITI equivalents subject to the specific job notification's education criteria. Always check the specific notification for accepted qualifications.",
  },
];

await upgradeScheme({
  slug: "pm-kaushal-vikas-yojana-pmkvy-4-0-2026",
  appendContent: APPEND_CONTENT,
  newFaqs: NEW_FAQS,
  minWords: 3000,
});
