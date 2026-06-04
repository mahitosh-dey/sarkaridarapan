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

const TODAY = new Date("2026-06-04");

const { data: jobs, error } = await supabase
  .from("jobs")
  .select("slug, title, organization, last_date, important_dates, vacancies, application_fee, salary, eligibility, qualification, category, state, is_active, description, content, reading_time, post_name, employment_type, official_link")
  .eq("is_active", true)
  .order("created_at", { ascending: true });

if (error) { console.error("DB error:", error.message); process.exit(1); }

console.log(`\n${"=".repeat(70)}`);
console.log(`FULL AUDIT — ${jobs.length} active jobs — ${TODAY.toDateString()}`);
console.log(`${"=".repeat(70)}\n`);

const issues = [];

for (const job of jobs) {
  const jobIssues = [];
  const slug = job.slug;

  // ── 1. Date checks ──────────────────────────────────────────────────────
  const lastDate = job.last_date ? new Date(job.last_date) : null;
  const startDate = job.important_dates?.startDate ? new Date(job.important_dates.startDate) : null;
  const examDate = job.important_dates?.examDate ? new Date(job.important_dates.examDate) : null;

  if (!lastDate) {
    jobIssues.push("❌ CRITICAL: last_date is NULL");
  } else {
    const daysAgo = Math.floor((TODAY - lastDate) / (1000 * 60 * 60 * 24));
    if (daysAgo > 365) {
      jobIssues.push(`❌ CRITICAL: last_date is ${job.last_date} — over 1 year ago (${daysAgo} days)`);
    } else if (daysAgo > 90) {
      jobIssues.push(`⚠️  last_date is ${job.last_date} — ${daysAgo} days ago (application closed long back)`);
    } else if (daysAgo > 0) {
      jobIssues.push(`ℹ️  last_date is ${job.last_date} — closed ${daysAgo} days ago`);
    } else {
      jobIssues.push(`✅ last_date: ${job.last_date} — ${Math.abs(daysAgo)} days remaining`);
    }
  }

  if (examDate && lastDate && examDate < lastDate) {
    jobIssues.push(`❌ CRITICAL: examDate (${job.important_dates.examDate}) is BEFORE lastDate (${job.last_date}) — logically impossible`);
  }

  if (startDate && lastDate && startDate > lastDate) {
    jobIssues.push(`❌ CRITICAL: startDate (${job.important_dates.startDate}) is AFTER lastDate (${job.last_date})`);
  }

  // ── 2. Organization / title checks ──────────────────────────────────────
  if (!job.organization || job.organization === job.title) {
    jobIssues.push(`❌ CRITICAL: organization = title (not fixed)`);
  }
  if (!job.title || job.title.length < 20) {
    jobIssues.push(`❌ title too short: "${job.title}"`);
  }
  if (!job.post_name) {
    jobIssues.push("⚠️  post_name is NULL");
  }

  // ── 3. Description quality ───────────────────────────────────────────────
  if (!job.description) {
    jobIssues.push("❌ CRITICAL: description is NULL");
  } else if (job.description.length < 80) {
    jobIssues.push(`❌ description too short (${job.description.length} chars): "${job.description.substring(0, 60)}..."`);
  } else if (job.description.includes("//") || job.description.includes("<div") || job.description.includes("html")) {
    jobIssues.push("❌ CRITICAL: description looks like code/HTML garbage");
  }

  // ── 4. Content quality ──────────────────────────────────────────────────
  if (!job.content) {
    jobIssues.push("❌ CRITICAL: content is NULL — no article body");
  } else if (job.content.length < 500) {
    jobIssues.push(`⚠️  content very short (${job.content.length} chars) — thin content risk`);
  } else if (job.content.includes("your html") || job.content.includes("// ")) {
    jobIssues.push("❌ CRITICAL: content contains developer code/comments");
  }

  // ── 5. Vacancies ────────────────────────────────────────────────────────
  if (job.vacancies === null || job.vacancies === undefined) {
    jobIssues.push("⚠️  vacancies = NULL");
  } else if (job.vacancies === 0) {
    jobIssues.push("⚠️  vacancies = 0 (no official count — verify)");
  }

  // ── 6. Salary ───────────────────────────────────────────────────────────
  if (!job.salary) {
    jobIssues.push("⚠️  salary is NULL");
  }

  // ── 7. Eligibility ──────────────────────────────────────────────────────
  if (!job.eligibility || (!job.eligibility.age && !job.eligibility.education)) {
    jobIssues.push("⚠️  eligibility is NULL or empty");
  }

  // ── 8. Application fee ──────────────────────────────────────────────────
  if (!job.application_fee || !job.application_fee.general) {
    jobIssues.push("⚠️  application_fee is NULL or missing general fee");
  }

  // ── 9. Qualification ────────────────────────────────────────────────────
  if (!job.qualification) {
    jobIssues.push("⚠️  qualification is NULL");
  }

  // ── 10. Category & state ────────────────────────────────────────────────
  const validCategories = ["ssc", "banking", "railway", "state-psc", "teaching", "upsc", "defence"];
  const validStates = ["all-india", "uttar-pradesh", "rajasthan", "west-bengal", "kerala", "delhi",
    "madhya-pradesh", "jammu-kashmir", "bihar", "maharashtra", "karnataka", "andhra-pradesh",
    "telangana", "gujarat", "haryana", "jharkhand", "uttarakhand", "himachal-pradesh",
    "assam", "punjab", "chhattisgarh", "odisha", "tamil-nadu"];
  if (!validCategories.includes(job.category)) {
    jobIssues.push(`⚠️  unknown category: "${job.category}"`);
  }
  if (!validStates.includes(job.state)) {
    jobIssues.push(`⚠️  unknown state: "${job.state}"`);
  }

  // ── 11. Official link ───────────────────────────────────────────────────
  if (!job.official_link) {
    jobIssues.push("⚠️  official_link is NULL");
  }

  // ── 12. Reading time ────────────────────────────────────────────────────
  if (!job.reading_time) {
    jobIssues.push("⚠️  reading_time is NULL");
  }

  // ── 13. Employment type ─────────────────────────────────────────────────
  if (job.employment_type !== "FULL_TIME" && job.employment_type !== "PART_TIME" && job.employment_type !== "CONTRACT") {
    jobIssues.push(`⚠️  employment_type: "${job.employment_type}"`);
  }

  // ── Classify severity ────────────────────────────────────────────────────
  const criticals = jobIssues.filter(i => i.startsWith("❌ CRITICAL"));
  const warnings = jobIssues.filter(i => i.startsWith("⚠️"));
  const info = jobIssues.filter(i => i.startsWith("ℹ️") || i.startsWith("✅"));

  if (criticals.length > 0 || warnings.length > 0) {
    issues.push({ slug, title: job.title, criticals, warnings, info });
  }
}

// ── Print report ─────────────────────────────────────────────────────────────
let totalCritical = 0;
let totalWarnings = 0;

for (const job of issues) {
  if (job.criticals.length === 0 && job.warnings.length === 0) continue;
  console.log(`\n📋 ${job.slug}`);
  console.log(`   "${job.title.substring(0, 65)}"`);
  for (const c of job.criticals) console.log(`   ${c}`);
  for (const w of job.warnings) console.log(`   ${w}`);
  for (const i of job.info) console.log(`   ${i}`);
  totalCritical += job.criticals.length;
  totalWarnings += job.warnings.length;
}

console.log(`\n${"=".repeat(70)}`);
console.log(`SUMMARY`);
console.log(`${"=".repeat(70)}`);
console.log(`Total jobs audited: ${jobs.length}`);
console.log(`❌ CRITICAL issues: ${totalCritical}`);
console.log(`⚠️  Warnings: ${totalWarnings}`);
console.log(`\nJobs with no issues: ${jobs.length - issues.filter(j => j.criticals.length > 0 || j.warnings.length > 0).length}`);

// ── Print jobs closing soon or past 30 days (attention list) ─────────────────
console.log(`\n${"=".repeat(70)}`);
console.log(`DATE STATUS — ALL 50 JOBS`);
console.log(`${"=".repeat(70)}`);
for (const job of jobs) {
  const ld = job.last_date ? new Date(job.last_date) : null;
  if (!ld) { console.log(`  ❓ ${job.slug} — no last_date`); continue; }
  const days = Math.floor((ld - TODAY) / (1000 * 60 * 60 * 24));
  const symbol = days > 30 ? "✅" : days > 0 ? "🟡" : days > -60 ? "🟠" : "🔴";
  const status = days > 0 ? `closes in ${days} days (${job.last_date})` : `closed ${Math.abs(days)} days ago (${job.last_date})`;
  console.log(`  ${symbol} ${job.slug.substring(0, 45).padEnd(45)} ${status}`);
}
