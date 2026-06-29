import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1)];
    })
);

const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

// ─── JOB ENTRY ───────────────────────────────────────────────────────────────

const job = {
  slug: "wb-gram-panchayat-recruitment-2026",
  title:
    "WB Gram Panchayat Recruitment 2026: 11,000 Vacancies for DEO, Executive Assistant, Karmee and Other Posts | Apply at wbprms.in",
  organization: "West Bengal Panchayats & Rural Development Department",
  post_name:
    "Executive Assistant, Data Entry Operator, Nirman Sahayak, Gram Panchayat Karmee, Clerk",
  vacancies: 11000,
  description:
    "West Bengal Gram Panchayat Recruitment 2026: 11,000 vacancies for DEO, Executive Assistant, Nirman Sahayak, and GP Karmee. Apply online at wbprms.in.",
  eligibility:
    "Nationality: Indian national with Bengali language proficiency (reading, writing, speaking). Candidates from Darjeeling, Kalimpong, and Kurseong hill subdivisions may substitute Nepali for Bengali. Age limit: up to 45 years for all posts, per the West Bengal Government revised age ceiling for Group C and Group D posts. Age relaxation for SC/ST and OBC candidates applies as per West Bengal state government rules. Educational qualification varies by post. Executive Assistant: Graduation from a recognized university plus a computer certificate or diploma from a recognized institution. Data Entry Operator: Class 12 pass plus a computer certificate or diploma. Nirman Sahayak: Class 10 pass from a recognized board. Gram Panchayat Karmee: Class 8 pass from a recognized school. Clerk: Class 12 pass from a recognized board.",
  salary:
    "Pay is structured under the West Bengal State Pay Matrix. Entry-level salary depends on the post. Higher-grade posts such as Executive Assistant are placed at pay levels where the maximum basic pay reaches up to Rs. 92,100 per month. In addition to basic pay, employees receive state Dearness Allowance (DA), House Rent Allowance (HRA), and other admissible state government allowances. The exact pay matrix levels for each post will be confirmed in the official notification at wbprms.in.",
  application_fee: {
    general_obc_ews: "Not yet confirmed — check wbprms.in for official fee details",
    sc_st_pwbd: "Expected to be exempt based on WB state government norms",
    payment_mode: "Online at wbprms.in",
  },
  important_dates: {
    startDate: "2026-06-10",
    lastDate: "To be announced — check wbprms.in",
    notificationDate: "2026-06-10",
    examDate: "To be announced",
    admitCard: "To be announced",
  },
  how_to_apply:
    "1. Go to the official portal at wbprms.in. 2. Click on the WB Gram Panchayat Recruitment 2026 registration link. 3. Register with a valid email ID and mobile number. 4. Fill in the application form with your personal, educational, and district details. 5. Upload a scanned photograph and signature in the specified format. 6. Pay the application fee if applicable and submit the form. 7. Save your application confirmation number. Keep checking wbprms.in for the last date announcement.",
  selection_process:
    "The entire selection process is managed by the District Level Selection Committee (DLSC) through wbprms.in. There are three stages. Stage 1 is a written test: objective-type MCQ examination of 85 marks. Questions cover English, Bengali, Arithmetic, and General Knowledge with a focus on rural life and rural development. Stage 2 is a personal interview for candidates shortlisted from the written test. Stage 3 is document verification, where educational certificates, age proof, domicile certificate, and caste documents are checked. Final selection is based on merit in the written test, subject to clearing the interview and document verification.",
  official_link: "https://wbprms.in",
  notification_link: "https://wbprms.in",
  apply_link: "https://wbprms.in",
  category: "state-psc",
  state: "west-bengal",
  is_active: true,
  last_date: null,
  qualification:
    "Executive Assistant: Graduation + computer certificate. Data Entry Operator: Class 12 + computer certificate or diploma. Nirman Sahayak: Class 10 pass. Gram Panchayat Karmee: Class 8 pass. Clerk: Class 12 pass.",
  employment_type: "FULL_TIME",
  reading_time: "5 min read",
  content: `## WB Gram Panchayat Recruitment 2026

The West Bengal Panchayats & Rural Development Department has opened registration for 11,000+ posts across Gram Panchayats in West Bengal. Registration started on June 10, 2026 at wbprms.in. The last date to apply has not been announced yet.

Posts on offer: Executive Assistant, Data Entry Operator (DEO), Nirman Sahayak, Gram Panchayat Karmee, and Clerk.

---

## Important dates

| Event | Date |
|---|---|
| Registration opens | 10 June 2026 |
| Last date to apply | To be announced at wbprms.in |
| Exam date | To be announced |
| Admit card | To be announced |

---

## Vacancy details

The initial sanction was 6,500 posts. The state government increased this to 11,000+ to fill accumulated vacancies across all districts.

| Post | Minimum qualification |
|---|---|
| Executive Assistant | Graduation + computer certificate |
| Data Entry Operator (DEO) | Class 12 + computer certificate or diploma |
| Nirman Sahayak | Class 10 pass |
| Gram Panchayat Karmee | Class 8 pass |
| Clerk | Class 12 pass |

District-wise vacancy distribution will be available on wbprms.in once the detailed notification is published.

---

## Eligibility

Age limit: up to 45 years for all posts, per the West Bengal Government's revised ceiling for Group C and Group D posts. Standard age relaxation applies for SC/ST and OBC candidates under WB state rules.

Language: Bengali proficiency (reading, writing, speaking) is required for all posts. Candidates from Darjeeling, Kalimpong, and Kurseong hill subdivisions may apply with Nepali language proficiency instead.

Computer requirement: DEO and Executive Assistant posts require a computer certificate or diploma from a recognized institution.

---

## Salary

Pay follows the West Bengal State Pay Matrix. The maximum basic pay for higher-grade posts such as Executive Assistant goes up to Rs. 92,100 per month, per WB state pay norms. Employees also receive state DA, HRA, and other admissible allowances. Post-wise pay matrix levels will be confirmed in the official notification.

---

## Application fee

The fee structure has not been officially confirmed for 2026. Based on WB government norms, SC/ST/OBC/PwD candidates are expected to be exempt. Check the official notification at wbprms.in for exact fee details before applying.

---

## Selection process

Selection is managed by the District Level Selection Committee (DLSC) through wbprms.in.

Written test: Objective MCQ examination of 85 marks. Subjects covered are English, Bengali, Arithmetic, and General Knowledge with a rural development focus.

Interview: Candidates shortlisted from the written test appear for a personal interview conducted by the DLSC.

Document verification: Final check of educational certificates, age proof, domicile certificate, and caste documents.

---

## How to apply

1. Go to wbprms.in.
2. Click on the WB Gram Panchayat Recruitment 2026 registration link.
3. Register with your email ID and mobile number.
4. Fill in the application form with personal, educational, and district details.
5. Upload your photo and signature in the specified format.
6. Pay the fee if applicable and submit.
7. Save your confirmation number and monitor wbprms.in for the last date announcement.

Join our [Telegram channel](https://t.me/sarkaridarapaninfo) for alerts when the last date is announced.`,
};

// ─── BLOG POST ───────────────────────────────────────────────────────────────

const blog = {
  slug: "wb-gram-panchayat-recruitment-2026-complete-guide",
  title: "WB Gram Panchayat Recruitment 2026: complete guide to 11,000 posts",
  description:
    "Complete guide to WB Gram Panchayat Recruitment 2026: post-wise eligibility, selection process, salary details, and how to apply at wbprms.in.",
  category: "state-govt",
  author: "SarkariDarapan",
  tags: [
    "WB Gram Panchayat",
    "West Bengal",
    "Sarkari Naukri",
    "State Govt Jobs",
    "wbprms",
  ],
  reading_time: "7 min read",
  is_active: true,
  content: `## 11,000 government jobs in West Bengal's Gram Panchayats, and registration is already open

West Bengal opened registration for the Gram Panchayat Recruitment 2026 on June 10, 2026 at wbprms.in. The state government originally approved 6,500 posts. That count was then raised to 11,000+ to clear the backlog of vacancies across Gram Panchayats in all districts.

If you're in West Bengal and looking for a government job, this is one of the largest state recruitment drives this year.

---

## What posts are on offer

Five post types are included in this recruitment. The qualification requirements go from Class 8 to a graduate degree, which means people at very different education levels can apply.

| Post | Minimum qualification | Computer required |
|---|---|---|
| Executive Assistant | Graduation from a recognized university | Yes |
| Data Entry Operator (DEO) | Class 12 pass | Yes (certificate or diploma) |
| Nirman Sahayak | Class 10 pass | No |
| Gram Panchayat Karmee | Class 8 pass | No |
| Clerk | Class 12 pass | No |

The DEO and Executive Assistant posts specifically require a computer certificate or diploma from a recognized institution. If you're applying for those, make sure your certificate is from an institution the state government recognizes.

---

## Who can apply

The state government raised the upper age limit for Group C and Group D posts to 45 years. All Gram Panchayat posts fall in that classification, so the 45-year ceiling applies here.

Age relaxation for SC/ST and OBC candidates follows standard West Bengal state government rules.

There's one non-negotiable language requirement: you need to be able to read, write, and speak Bengali. Candidates from the hill subdivisions (Darjeeling, Kalimpong, Kurseong) can apply with Nepali proficiency instead of Bengali. Everyone else needs Bengali.

---

## How to apply at wbprms.in

The official portal for this recruitment is wbprms.in. The West Bengal Panchayat Recruitment Management System handles everything: registration, application, fee payment, and eventually admit cards and results.

Here's what the registration process looks like:

1. Go to wbprms.in and open the WB Gram Panchayat Recruitment 2026 section.
2. Register with your email ID and mobile number. You'll get your login credentials on that number.
3. Log in and fill in the application form. You'll need your personal details, educational qualifications, district preference, and category information.
4. Upload a recent photo and signature in the format the portal specifies.
5. Pay the application fee if it applies to you. SC/ST/OBC/PwD candidates are expected to be exempt, though the official fee structure hasn't been confirmed yet.
6. Submit and save the confirmation number.

The last date to apply hasn't been announced. Keep checking wbprms.in or follow our [Telegram channel](https://t.me/sarkaridarapaninfo) for the update.

---

## What the written test looks like

The written examination is managed by the District Level Selection Committee (DLSC). It's objective MCQ, 85 marks total.

Four subjects are tested: English, Bengali, Arithmetic, and General Knowledge. The GK section has a specific rural development angle, which makes sense given the role. Questions tend to cover Panchayati Raj, rural schemes, and WB state governance rather than just standard current affairs.

Candidates who clear the written test go to an interview, and then document verification.

There's no detailed syllabus document released yet. In past WB Panchayat recruitments, the arithmetic section covered Class 8 to Class 10 level maths. The GK section covered state government schemes, Panchayati Raj Act provisions, and basic rural administration. That's a reasonable starting point for preparation.

---

## Salary you can expect

Pay is under the West Bengal State Pay Matrix. The exact pay matrix levels for each post will be in the official notification.

For reference: the maximum basic pay for higher-grade posts goes up to Rs. 92,100 per month, per WB state pay norms. In practice, entry-level posts like GP Karmee will be placed at a lower level with a corresponding lower starting basic pay. Add state DA, HRA, and other admissible allowances on top.

This is a permanent state government job with job security, pension under NPS, and annual increments.

---

## Why this recruitment matters for WB job seekers

11,000 vacancies in a single drive is unusual. The state has had a large backlog of unfilled Gram Panchayat posts for several years, partly due to legal challenges and delayed schedules. This recruitment is an attempt to fill that backlog in one go.

The posts are spread across all districts, which means most candidates can find something close to home. Executive Assistant and DEO roles require graduation or Class 12 with computer skills. But GP Karmee requires only a Class 8 pass, which opens this up to a much wider pool than most government jobs.

If you're in that category, don't sleep on the last date announcement. These drives can close quickly once a date is set.

---

## Frequently asked questions

**How many vacancies are there in WB Gram Panchayat Recruitment 2026?**
11,000+ vacancies across posts including Executive Assistant, DEO, Nirman Sahayak, GP Karmee, and Clerk. The original sanction was 6,500, increased by 4,500 additional posts, per state government orders.

**Where do I apply for WB Gram Panchayat Recruitment 2026?**
All applications go through the official portal at wbprms.in. There is no offline or postal application route.

**What is the age limit for WB Gram Panchayat Recruitment 2026?**
The upper age limit is 45 years for all posts. Standard age relaxation applies for SC/ST and OBC candidates under WB state government rules.

**Is Bengali language compulsory for these posts?**
Yes. Bengali proficiency (reading, writing, speaking) is a mandatory requirement for all posts. Candidates from Darjeeling, Kalimpong, and Kurseong subdivisions can apply with Nepali instead.

**What is the minimum qualification for Gram Panchayat Karmee?**
Class 8 pass from a recognized school. This is the lowest qualification requirement among all posts in this recruitment.

**When is the last date to apply?**
The last date has not been announced as of June 2026. Check wbprms.in for the official update.

---

## Sources

- Official portal: [wbprms.in](https://wbprms.in)
- Karmasandhan report on 11,000 vacancy increase: [karmasandhan.com](https://www.karmasandhan.com/wb-gram-panchayat-recruitment-2026/)
`,
};

// ─── INSERT ──────────────────────────────────────────────────────────────────

console.log("Inserting job...");
const { data: jobData, error: jobError } = await sb
  .from("jobs")
  .upsert(job, { onConflict: "slug" })
  .select("slug");

if (jobError) {
  console.error("Job insert failed:", jobError.message);
} else {
  console.log("Job inserted:", jobData[0].slug);
}

console.log("Inserting blog post...");
const { data: blogData, error: blogError } = await sb
  .from("blog_posts")
  .upsert(blog, { onConflict: "slug" })
  .select("slug");

if (blogError) {
  console.error("Blog insert failed:", blogError.message);
} else {
  console.log("Blog post inserted:", blogData[0].slug);
}
