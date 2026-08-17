// Deactivate the 2 UPSC-cluster blogs 301'd in batch 4 (2026-08-15).
//
// Held back from earlier batches because their only sensible destination,
// /entrance-exams/upsc-cse-2026, was itself thin at 1128w. That page was
// deepened to 3026w in the same session, so the redirects no longer move the
// problem into a weak page:
//
//   upsc-cse-2026-notification-dates-eligibility-apply-online  1693w
//   upsc-eligibility-2026-age-limit-qualification-attempts     1742w
//     both -> /entrance-exams/upsc-cse-2026                    3026w
//
// Both blogs duplicated notification and eligibility content the exam page now
// covers in more depth and keeps current.
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
  "upsc-cse-2026-notification-dates-eligibility-apply-online",
  "upsc-eligibility-2026-age-limit-qualification-attempts",
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
