// =============================================================================
// Migration Script: MDX files → Supabase
// Run with: npx tsx scripts/migrate-mdx-to-supabase.ts
// Requires .env.local with NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
// =============================================================================

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { createClient } from "@supabase/supabase-js";

// Load .env.local
const envPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const CONTENT_DIR = path.join(process.cwd(), "content");
const JOBS_DIR = path.join(CONTENT_DIR, "jobs");
const SCHEMES_DIR = path.join(CONTENT_DIR, "schemes");

function readMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f));
}

// ---------------------------------------------------------------------------
// Migrate Jobs
// ---------------------------------------------------------------------------
async function migrateJobs() {
  const files = readMdxFiles(JOBS_DIR);
  console.log(`Found ${files.length} job files`);

  const rows = [];

  for (const file of files) {
    const filePath = path.join(JOBS_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    const slug = data.slug || file.replace(/\.mdx?$/, "");

    rows.push({
      slug,
      title: data.title || "",
      organization: data.organization || "",
      post_name: data.postName || "",
      vacancies: data.vacancies || 0,
      eligibility: data.eligibility || {},
      salary: data.salary || "",
      application_fee:
        typeof data.applicationFee === "object"
          ? data.applicationFee
          : data.applicationFee || "",
      important_dates: data.importantDates || {},
      how_to_apply: data.howToApply || "",
      selection_process:
        typeof data.selectionProcess === "object"
          ? data.selectionProcess
          : data.selectionProcess || "",
      official_link: data.officialLink || "",
      notification_link: data.notificationLink || "",
      apply_link: data.applyLink || "",
      category: data.category || "",
      state: data.state || "",
      is_active: data.isActive !== false,
      published_at: data.publishedAt
        ? new Date(data.publishedAt).toISOString()
        : new Date().toISOString(),
      updated_at: data.updatedAt
        ? new Date(data.updatedAt).toISOString()
        : new Date().toISOString(),
      description: data.description || "",
      content,
      reading_time: stats.text,
      image: data.image || "",
      last_date: data.lastDate || "",
      qualification: data.qualification || "",
      employment_type: data.employmentType || "",
    });
  }

  if (rows.length === 0) {
    console.log("No job files to migrate");
    return;
  }

  const { error } = await supabase.from("jobs").upsert(rows, {
    onConflict: "slug",
  });

  if (error) {
    console.error("Error upserting jobs:", error.message);
  } else {
    console.log(`Successfully upserted ${rows.length} jobs`);
  }
}

// ---------------------------------------------------------------------------
// Migrate Schemes
// ---------------------------------------------------------------------------
async function migrateSchemes() {
  const files = readMdxFiles(SCHEMES_DIR);
  console.log(`Found ${files.length} scheme files`);

  const rows = [];

  for (const file of files) {
    const filePath = path.join(SCHEMES_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    const slug = data.slug || file.replace(/\.mdx?$/, "");

    rows.push({
      slug,
      title: data.title || "",
      ministry: data.ministry || "",
      launched_by: data.launchedBy || "",
      objective: data.objective || "",
      eligibility: Array.isArray(data.eligibility)
        ? data.eligibility
        : data.eligibility
          ? [data.eligibility]
          : [],
      benefits: Array.isArray(data.benefits) ? data.benefits : [],
      documents: Array.isArray(data.documents) ? data.documents : [],
      how_to_apply: data.howToApply || "",
      official_portal: data.officialPortal || "",
      helpline_number: data.helplineNumber || "",
      category: data.category || "",
      state: data.state || "",
      published_at: data.publishedAt
        ? new Date(data.publishedAt).toISOString()
        : new Date().toISOString(),
      updated_at: data.updatedAt
        ? new Date(data.updatedAt).toISOString()
        : new Date().toISOString(),
      description: data.description || "",
      content,
      reading_time: stats.text,
      image: data.image || "",
      faqs: data.faqs || [],
    });
  }

  if (rows.length === 0) {
    console.log("No scheme files to migrate");
    return;
  }

  const { error } = await supabase.from("schemes").upsert(rows, {
    onConflict: "slug",
  });

  if (error) {
    console.error("Error upserting schemes:", error.message);
  } else {
    console.log(`Successfully upserted ${rows.length} schemes`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log("Starting MDX → Supabase migration...\n");
  await migrateJobs();
  await migrateSchemes();
  console.log("\nMigration complete!");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
