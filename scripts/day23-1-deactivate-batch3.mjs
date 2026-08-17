// Deactivate 3 thin blogs 301'd in batch 3 (2026-08-15).
//
// Each source was competing with a canonical page that is already far stronger,
// so no deepening was needed before redirecting:
//
//   ssc-cgl-syllabus-2026-complete-topic-wise-breakdown           1778w
//     -> /blog/ssc-cgl-2026-syllabus-preparation-guide            5111w
//   rrb-ntpc-2026-posts-eligibility-exam-pattern-preparation...   1800w
//     -> /sarkari-naukri/rrb-ntpc-2026                            3001w
//   railway-group-d-2026-notification-dates-apply-online          1647w
//     -> /entrance-exams/rrb-group-d-2026                         4825w
//
// The SSC CGL pair is the clearest case on the site: two blogs targeting
// "SSC CGL syllabus", where the thin one was competing directly with our
// single strongest asset.
//
// Paired with redirects in next.config.js. Reversible: set is_active=true and
// drop the redirect.

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

const SLUGS = [
  "ssc-cgl-syllabus-2026-complete-topic-wise-breakdown",
  "rrb-ntpc-2026-posts-eligibility-exam-pattern-preparation-guide",
  "railway-group-d-2026-notification-dates-apply-online",
];

for (const slug of SLUGS) {
  const { data: before } = await supabase
    .from("blog_posts").select("slug,is_active").eq("slug", slug).maybeSingle();
  if (!before) { console.log(`  SKIP ${slug} (not found)`); continue; }
  if (!before.is_active) { console.log(`  SKIP ${slug} (already inactive)`); continue; }

  if (process.env.DRY_RUN === "1") { console.log(`  DRY_RUN would deactivate ${slug}`); continue; }

  const { error } = await supabase
    .from("blog_posts")
    .update({ is_active: false, updated_at: new Date().toISOString() })
    .eq("slug", slug);
  if (error) { console.error(`  FAIL ${slug}:`, error.message); continue; }
  console.log(`  deactivated ${slug}`);
  await fetch(`${SITE_URL}/api/revalidate?tag=blog-post-${slug}`);
}

if (process.env.DRY_RUN !== "1") {
  const t = await fetch(`${SITE_URL}/api/revalidate?tag=blog-posts`);
  const b = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/blog")}`);
  console.log(`\nblog-posts tag: HTTP ${t.status} | /blog path: HTTP ${b.status}`);
}
