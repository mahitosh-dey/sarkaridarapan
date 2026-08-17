// Deactivate the 3 PM-KISAN blogs 301'd in batch 5 (2026-08-15).
//
// All three duplicated intent the scheme page already covers in more depth and
// keeps current (instalment history, eKYC, status check, and the eight reasons
// a payment is withheld). Held back until the scheme cleared 3000w:
//
//   complete-guide-to-pm-kisan-yojana                   1214w
//   pm-kisan-samman-nidhi-2026-status-check             1592w
//   pm-kisan-samman-nidhi-apply-check-status-fix-errors 1619w
//     all -> /sarkari-yojana/pm-kisan-samman-nidhi-pm-kisan-2026  3122w
//
// Three blogs competing on 'PM Kisan status check' was the largest remaining
// cannibalisation cluster on the site.
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
  "complete-guide-to-pm-kisan-yojana",
  "pm-kisan-samman-nidhi-2026-status-check",
  "pm-kisan-samman-nidhi-apply-check-status-fix-errors",
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
