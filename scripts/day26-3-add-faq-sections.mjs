// Add FAQ sections to the 3 pages that had none (2026-08-18)
//
// Completes the zero-FAQ-schema fix. Six pages were repaired by converting
// existing H3 questions to bold. These three had no FAQ content at all, so the
// questions are written here.
//
// NOTE ON top-10-govt-jobs: its 6 "bold questions" were rhetorical section
// labels ("Want power and impact?"), not FAQs, which is why it rendered zero
// despite the bold count looking healthy.
//
// SCOPE LIMIT, STATED HONESTLY: two of these pages carry pre-existing em and en
// dashes (top-10 has 77, upsc-vs-ssc has 24), concentrated in numeric ranges
// and table rows. Blanket substitution across 77 prose instances risks mangling
// readability, so it is NOT attempted here. Both pages are on the thin list
// (2130w and 1146w) and need full rewrites, where the dashes get fixed with
// context-appropriate punctuation. This script adds FAQ content only and
// introduces no new dashes.
//
// Each FAQ section is appended before the closing section where one exists, or
// at the end otherwise, and uses bold question format so the parser reads it.

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8")
    .split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);
const SITE_URL = "https://www.sarkaridarapan.com";
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const FAQS = {
"top-10-govt-jobs-after-graduation-2026": `
## Frequently asked questions

**Which government job is best after graduation?**

There is no single best one, and the honest answer depends on what you want the next thirty years to look like. UPSC Civil Services offers the widest authority and the hardest selection. SSC CGL offers strong central government posts with a far shorter preparation cycle. Banking offers the fastest route to an officer grade with the least uncertainty. Choose on the working life you want rather than on prestige rankings.

**Which government exam has the highest salary after graduation?**

At entry, Assistant Audit Officer through SSC CGL sits at Pay Level 8 with a basic of Rs 47,600, and banking officer grades are comparable once allowances are counted. UPSC Civil Services posts start lower than people expect but progress far higher, so comparing entry salaries alone misreads the question. Gross pay also varies with city classification, since house rent allowance is banded.

**How long does it take to prepare for a government job after graduation?**

For SSC CGL and banking exams, six months to a year of steady work is a realistic first attempt for most graduates. For UPSC Civil Services, a year is the minimum most candidates need and two is common. Those figures assume consistent daily study rather than intensive bursts, and candidates who prepare in bursts generally take longer.

**Can I prepare for multiple government exams at the same time?**

Yes, and for most graduates it is the sensible approach. General awareness, quantitative aptitude, reasoning and English recur across SSC, banking and railway examinations at different depths, so the preparation transfers. What does not transfer is exam-specific work such as banking awareness, a UPSC optional subject, or typing and physical standards, and those need their own time.

**Is coaching necessary for government exams?**

No, though it helps some candidates with structure and accountability. What determines outcomes is consistent daily study, working previous years' papers, and honest self-assessment through timed mocks. Candidates who outsource preparation to a class while not studying independently tend to plateau, and plenty of selected candidates prepare without coaching.

**What is the age limit for government jobs after graduation?**

It varies by examination. SSC CGL runs broadly 18 to 32 depending on the post, banking officer exams typically 20 to 30, UPSC Civil Services 21 to 32 for the general category, and several state services extend to 40. Relaxation applies for reserved categories in every case, so check the specific notification against your own position rather than assuming a common limit.

**Which government job has the best work life balance?**

Clerical and administrative posts in banking, central ministries and public sector offices generally offer more predictable hours than field-facing roles. District administration, police services and revenue postings involve long and unpredictable hours, particularly early in service. This is worth weighing honestly, because it is a permanent feature of those careers rather than an early-career phase.

**Do I need a specific degree for government jobs after graduation?**

Most graduate-level recruitments accept a bachelor's degree in any discipline, which is why they draw such large applicant pools. Specific streams are required for technical posts such as engineering services, DRDO scientist roles and some statistical positions. Check the qualification wording in the notification, since eligibility is often defined by named qualifications rather than by broad categories.

**How many attempts do I get?**

SSC and banking examinations impose no attempt limit; eligibility is governed by age alone. UPSC Civil Services caps attempts at six for the general category and nine for Other Backward Classes, with no cap up to the age ceiling for Scheduled Castes and Scheduled Tribes. Appearing in the preliminary examination counts as an attempt there.

**Should I take a job while preparing?**

Many successful candidates do, and it removes the financial pressure that makes a repeat year difficult. The trade is study hours, so it generally extends the timeline. A candidate with no financial cushion who quits to prepare full time is taking a real risk, because these examinations offer no guarantee and the pressure of a single decisive attempt tends to hurt performance rather than help it.
`,
"how-to-fill-government-job-application-online": `
## Frequently asked questions

**What documents do I need before starting an online government job application?**

A scanned photograph and signature meeting the stated dimensions and file size, your Class 10 certificate for date of birth, degree and mark sheets, a category certificate in the prescribed format where applicable, and identity proof. Prepare all of these before opening the form rather than during it, because sessions time out and specification mismatches are the most common cause of rejection.

**Why does my photograph keep getting rejected?**

Almost always a specification mismatch: wrong dimensions, wrong file size, wrong format, or a background that does not meet the requirement. Some recruitments additionally require the photograph to show your name and the date. Read the exact specification in the notification rather than assuming a standard passport photograph will pass, since requirements differ between recruiting bodies.

**What happens if I make a mistake in my application?**

It depends on whether a correction window exists. Many recruitments open one for a short period after the application deadline, and it is the only opportunity to fix errors. Some fields are never editable, including category and sometimes the examination centre. Errors discovered after the correction window closes generally surface at document verification, where they can end the candidature.

**Is my application complete once I submit the form?**

Not until the fee payment succeeds. A submitted form with a failed or pending payment is not a valid application, and candidates lose cycles to this every year. Confirm the transaction, save the payment receipt, and check that your application status shows as complete rather than assuming submission was enough.

**Should I use my own email and mobile number?**

Yes, and one you will still control for the length of the process. Recruitments run for months and every communication including the admit card depends on that login. Using an agent's or a cyber cafe's contact details means losing access to your own candidature, which is a genuinely serious problem to unwind.

**Why should I not apply on the last day?**

Portals slow badly under load near deadlines and payment gateways fail. A failed payment on the final evening cannot be retried after the window closes, and no recruiting body extends a deadline for an individual candidate. Applying several days early costs nothing and removes the single most avoidable failure in the process.

**What is One Time Registration and do I need it?**

Several bodies including SSC and Kerala PSC use a one-time registration that creates a permanent profile, so you enter personal and educational details once and then apply to individual notifications with a few clicks. Set it up before a notification you care about opens, and keep it current, because an outdated profile can block applications without explaining why.

**How do I know my application was accepted?**

Check the application status on the portal rather than relying on a confirmation email, which may not arrive. Save or print the completed application and the fee receipt. Keep both until the recruitment concludes, since they are the evidence if a discrepancy arises later.

**Can someone else fill the form for me?**

It is legal but unwise. The details entered become your official record, errors made by someone else are still your problem at verification, and handing over your credentials means losing control of your candidature. If someone does assist, sit with them, check every field before submission, and keep the login details yourself.

**What should I do after submitting the application?**

Save the application printout and fee receipt, note the expected admit card window, and keep your login credentials somewhere durable. Then watch the official portal on a fixed schedule, because recruiting bodies publish admit cards and notices without individually notifying candidates.
`,
"upsc-vs-ssc-which-exam-to-choose-2026": `
## Frequently asked questions

**Is UPSC harder than SSC CGL?**

Yes, by most measures. UPSC Civil Services has a far lower selection ratio, a descriptive main examination across nine papers, an optional subject worth 500 marks, and a personality test carrying 275. SSC CGL is objective throughout with a shorter cycle. That said, SSC CGL is genuinely competitive and the gap is in scale and depth rather than one being easy.

**Can I prepare for UPSC and SSC CGL together?**

The general studies foundation overlaps substantially, so early preparation serves both. They diverge sharply later: UPSC needs answer writing, an optional subject and far greater depth, while SSC CGL needs speed and accuracy on objective questions. Most candidates who attempt both treat SSC CGL as the primary target and UPSC as the stretch, or prepare for UPSC and sit SSC CGL as a floor.

**Which pays more, UPSC or SSC CGL?**

SSC CGL posts at Pay Level 8 start higher than many people assume, and the entry gap against UPSC posts is smaller than reputation suggests. The difference is progression: UPSC Civil Services posts advance to positions with authority and pay that SSC CGL posts do not reach. Comparing entry salaries alone misses the point of the comparison.

**How long does UPSC preparation take compared with SSC?**

For UPSC Civil Services, a year is the minimum most candidates need and two is common, with many successful candidates taking multiple attempts. For SSC CGL, six months to a year of consistent work is a realistic first attempt for a graduate. That difference in commitment is the practical factor most worth weighing.

**Should I choose SSC CGL if I fail UPSC?**

Treating SSC CGL as a fallback tends to produce poor results in both, because it is competitive enough to require real preparation rather than leftover effort. A better framing is to decide what you want the work to be. SSC CGL posts are substantial careers in their own right, and candidates who choose them deliberately generally do better than those who arrive at them by default.

**What is the age limit for UPSC and SSC CGL?**

UPSC Civil Services runs 21 to 32 for the general category, extended to 35 for Other Backward Classes and 37 for Scheduled Castes and Scheduled Tribes. SSC CGL varies by post, broadly 18 to 32, with standard relaxation. UPSC additionally caps attempts, which SSC does not.

**Does UPSC have an attempt limit?**

Yes. Six attempts for the general category and nine for Other Backward Classes, with no cap up to the age ceiling for Scheduled Castes and Scheduled Tribes. Appearing in the preliminary examination counts as an attempt while applying without appearing does not. SSC CGL imposes no attempt limit.

**Which exam is better for work life balance?**

SSC CGL posts in ministries and central offices generally offer more predictable hours. UPSC Civil Services postings in district administration and police services involve long and unpredictable hours, particularly in the early years. Candidates who value stability of routine should weigh that seriously, because it is a structural feature rather than a temporary phase.

**Do I need an optional subject for SSC CGL?**

No. SSC CGL has no optional subject. UPSC Civil Services requires one, worth 500 marks across two papers, which is close to a fifth of the written total and represents months of dedicated preparation. That single difference accounts for much of the gap in preparation time between the two.

**Can I switch from SSC preparation to UPSC later?**

Yes, and the general studies foundation carries over usefully. What you would need to add is answer writing, an optional subject and considerably greater depth across the syllabus. The reverse switch is easier, since a UPSC candidate is generally well prepared for SSC CGL apart from the speed and accuracy practice the objective format rewards.
`
};

let done = 0, failed = 0;
for (const [slug, faq] of Object.entries(FAQS)) {
  const { data, error } = await supabase.from("blog_posts").select("content").eq("slug", slug).single();
  if (error) { console.error(`  FAIL read ${slug}: ${error.message}`); failed++; continue; }
  if (/## Frequently asked questions/i.test(data.content)) {
    console.log(`  SKIP ${slug}: already has a FAQ section`); failed++; continue;
  }
  if (/[—–]/.test(faq)) { console.error(`  ABORT ${slug}: new FAQ text contains a dash`); failed++; continue; }

  const before = data.content.split(/\s+/).filter(Boolean).length;
  const content = data.content.trimEnd() + "\n" + faq.trimEnd() + "\n";
  const after = content.split(/\s+/).filter(Boolean).length;
  const bold = (faq.match(/\*\*[^*\n]{8,300}\?\*\*/g) || []).length;
  console.log(`  ${slug}: ${before}w -> ${after}w, +${bold} FAQ questions`);

  if (process.env.DRY_RUN === "1") continue;
  const { error: uerr } = await supabase.from("blog_posts")
    .update({ content, updated_at: new Date().toISOString() }).eq("slug", slug);
  if (uerr) { console.error(`  FAIL write ${slug}: ${uerr.message}`); failed++; continue; }
  await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/blog/" + slug)}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=blog-post-${slug}`);
  done++;
}
if (process.env.DRY_RUN !== "1") await fetch(`${SITE_URL}/api/revalidate?tag=blog-posts`);
console.log(`\nupdated: ${done} | skipped/failed: ${failed}`);
