// Deactivate the 2 blogs held back from the first consolidation pass
// (2026-08-14, second batch).
//
// These two were deliberately NOT redirected earlier because their only
// sensible destinations were still thin, and redirecting a thin page into
// another thin page moves the problem rather than fixing it. Both
// destinations were deepened the same day and now clear 3000w:
//
//   /blog/ssc-chsl-2026-admit-card-download-hall-ticket  1007w
//     -> /sarkari-naukri/ssc-chsl-2026   1102w -> 3016w, now covers the
//        city intimation slip and admit card in depth
//   /blog/ibps-po-vs-sbi-po-2026-comparison              1016w
//     -> /sarkari-naukri/ibps-po-2026    1234w -> 3008w, now carries the
//        IBPS PO / IBPS Clerk / SBI PO comparison table the blog served
//
// Paired with the redirects in next.config.js. Reversible: set is_active=true
// and drop the redirect to restore.

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
  "ssc-chsl-2026-admit-card-download-hall-ticket",
  "ibps-po-vs-sbi-po-2026-comparison",
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
