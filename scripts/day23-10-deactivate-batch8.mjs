// Deactivate the 9 blogs 301'd in batch 8 (2026-08-15).
//
// Each duplicated intent a canonical page now covers past 3000w. Pairs were
// chosen BY HAND: an automated slug-overlap pass produced false matches (it
// paired an IBPS PO guide with an SSC CGL page purely on the shared words
// "preparation guide", and a govt-vs-private comparison with a jobs-after-12th
// listicle), so acting on it unreviewed would have created bad redirects.
//
//   IBPS PO cluster -> /sarkari-naukri/ibps-po-2026 (3012w)
//     how-to-apply-for-ibps-po-2026            1842w
//     ibps-po-2026-preparation-guide           1729w
//     how-to-download-ibps-po-admit-card-2026  1873w
//   how-to-clear-ibps-clerk-2026-first-attempt 1192w -> ibps-clerk-2026 3123w
//   how-to-apply-for-ssc-cgl-2026              2270w -> ssc-cgl-2026 3334w
//   ssc-cgl-tier-2-score-card-...              1023w -> ssc-cgl-2026 3334w
//   how-to-apply-pm-mudra-loan-...             1918w -> pm-mudra 3143w
//   upsc-prelims-result-2026-cutoff-...        1263w -> upsc-cse-2026 3026w
//   upsc-mains-...-9-week-plan                 1731w -> upsc-cse-2026 3026w
//
// Two were stale as well as thin: the 9 week Mains plan is useless for an exam
// starting in 6 days, and the Tier 2 score-card page gives score-check steps
// for a December 2026 exam that has not been held.
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
  "how-to-apply-for-ibps-po-2026",
  "ibps-po-2026-preparation-guide",
  "how-to-download-ibps-po-admit-card-2026",
  "how-to-clear-ibps-clerk-2026-first-attempt",
  "how-to-apply-for-ssc-cgl-2026",
  "ssc-cgl-tier-2-score-card-2026-how-to-check-marks",
  "how-to-apply-pm-mudra-loan-2026-step-by-step-guide",
  "upsc-prelims-result-2026-cutoff-paper-analysis",
  "upsc-mains-2026-preparation-strategy-9-week-plan",
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
