// Deactivate 3 thin blogs that are now 301'd to stronger pages (2026-08-14).
//
// Paired with the redirects added to next.config.js in the same commit. The
// redirect handles the URL; this removes the row from the sitemap and from
// listing pages so we stop advertising a URL that only bounces.
//
//   /blog/how-to-prepare-for-ssc-cgl                        1016w
//     -> /blog/ssc-cgl-2026-syllabus-preparation-guide      5111w
//   /blog/sbi-po-2026-preparation-guide                     1054w
//     -> /sarkari-naukri/sbi-po-2026                        3003w
//   /blog/wb-gram-panchayat-recruitment-2026-complete-guide 1016w
//     -> /sarkari-naukri/wb-gram-panchayat-recruitment-2026 3029w
//
// Each source was competing with our own much stronger page on the same query.
// Reversible: set is_active=true and drop the redirect to restore.

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
  "how-to-prepare-for-ssc-cgl",
  "sbi-po-2026-preparation-guide",
  "wb-gram-panchayat-recruitment-2026-complete-guide",
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
