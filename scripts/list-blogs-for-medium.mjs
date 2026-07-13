import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const reposted = new Set([
  "agniveer-army-cee-result-2026-how-to-check",
  "best-books-for-ssc-cgl-2026-tier-1-and-tier-2",
  "punjab-pcs-sdm-recruitment-2026",
  "government-jobs-vs-private-jobs-india-2026",
]);

const { data } = await supabase.from("blog_posts").select("slug, title, description, content").eq("is_active", true);
const enriched = (data || []).map(b => ({ ...b, words: (b.content || "").split(/\s+/).length }));
enriched.sort((a, b) => b.words - a.words);

console.log("=== TOP 15 BLOGS BY WORD COUNT (not yet Medium-reposted) ===\n");
let n = 0;
for (const b of enriched) {
  if (reposted.has(b.slug)) continue;
  if (++n > 15) break;
  console.log(`${b.words.toString().padStart(5)} words | ${b.slug}`);
  console.log(`         TITLE: ${b.title}`);
  console.log(`         DESC:  ${(b.description || "").slice(0, 120)}\n`);
}
