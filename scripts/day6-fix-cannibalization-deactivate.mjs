// Cannibalization cleanup (2026-07-23): deactivate 2 duplicate blog rows
// after the 301 redirects in next.config.js land on production.
// Canonical remains: /blog/top-10-government-jobs-after-12th-india-2026

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

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const SITE = "https://www.sarkaridarapan.com";

const OLD_SLUGS = [
  "top-10-govt-jobs-after-12th-2026",
  "government-jobs-after-12th-in-india-2026",
];

for (const slug of OLD_SLUGS) {
  const { data, error } = await supabase
    .from("blog_posts")
    .update({ is_active: false, updated_at: new Date().toISOString() })
    .eq("slug", slug)
    .select("slug, is_active");
  if (error) { console.error(`FAIL ${slug}:`, error.message); process.exit(1); }
  console.log(`  Deactivated: ${JSON.stringify(data)}`);
}

const tag = await fetch(`${SITE}/api/revalidate?tag=blog_posts`);
console.log(`  Blog tag revalidate: HTTP ${tag.status}`);
const sm = await fetch(`${SITE}/api/revalidate?path=/sitemap.xml`);
console.log(`  Sitemap revalidate: HTTP ${sm.status}`);
