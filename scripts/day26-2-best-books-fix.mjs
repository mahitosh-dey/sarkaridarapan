// best-books-for-ssc-cgl-2026: remove em dashes, then convert FAQ to bold
//
// 2026-08-18.
//
// This page was skipped by the bulk FAQ conversion because it contained 7 em
// dashes. Writing it back unchanged would have preserved a hard-rule-14
// violation, so the guard was correct to refuse. Fixing the dashes first with
// context-appropriate punctuation, then converting the FAQ questions.
//
// Each replacement chooses the punctuation the sentence actually needs (period,
// comma, colon or a rewritten clause) rather than a blanket substitution.

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
const SLUG = "best-books-for-ssc-cgl-2026-tier-1-and-tier-2";

const DASH_FIXES = [
  ["that many candidates make — I bought too many books",
   "that many candidates make. I bought too many books"],
  ["Does not teach concepts — assumes you already know the basics",
   "Does not teach concepts, so it assumes you already know the basics"],
  ["Does not cover current affairs — you need a separate source",
   "Does not cover current affairs, so you need a separate source"],
  ["exactly what to expect — the difficulty level",
   "exactly what to expect: the difficulty level"],
  ["There is no specific book needed — practice 2-3 essays per week",
   "There is no specific book needed, so practise 2 to 3 essays per week"],
  ["| Computer Knowledge | Arihant Computer Awareness | — |",
   "| Computer Knowledge | Arihant Computer Awareness | Not applicable |"],
  ["prioritise previous year papers first — they are the closest",
   "prioritise previous year papers first, because they are the closest"],
];

const { data, error } = await supabase.from("blog_posts").select("content").eq("slug", SLUG).single();
if (error) { console.error("read failed:", error.message); process.exit(1); }

let content = data.content;
let applied = 0;
for (const [from, to] of DASH_FIXES) {
  if (!content.includes(from)) { console.log(`  WARN not found: ${from.slice(0, 60)}...`); continue; }
  content = content.split(from).join(to);
  applied++;
}
console.log(`  dash fixes applied: ${applied}/${DASH_FIXES.length}`);

const remaining = (content.match(/[—–]/g) || []).length;
if (remaining > 0) {
  console.error(`  ABORT: ${remaining} em/en dashes still present`);
  (content.match(/.{0,70}[—–].{0,70}/g) || []).forEach(x => console.error("    ..." + x.trim()));
  process.exit(1);
}

// now convert the FAQ section
const FAQ_HEADING = /^## Frequently [Aa]sked [Qq]uestions\s*$/m;
const m = content.match(FAQ_HEADING);
if (!m) { console.error("  ABORT: no FAQ heading"); process.exit(1); }
const start = m.index;
const after = content.slice(start + m[0].length);
const nextH2 = after.search(/\n## /);
const endRel = nextH2 === -1 ? after.length : nextH2;
let section = m[0] + after.slice(0, endRel);
section = section.replace(FAQ_HEADING, "## Frequently asked questions");
section = section.replace(/^###\s+(.+\?)\s*$/gm, (_x, q) => `**${q.trim()}**`);
const boldCount = (section.match(/\*\*[^*\n]{8,300}\?\*\*/g) || []).length;
if (boldCount === 0) { console.error("  ABORT: 0 bold questions after conversion"); process.exit(1); }
content = content.slice(0, start) + section + after.slice(endRel);
console.log(`  bold questions: 0 -> ${boldCount}`);

if (process.env.DRY_RUN === "1") { console.log("  DRY_RUN=1: no write"); process.exit(0); }

const { error: uerr } = await supabase.from("blog_posts")
  .update({ content, updated_at: new Date().toISOString() }).eq("slug", SLUG);
if (uerr) { console.error("write failed:", uerr.message); process.exit(1); }
console.log(`  OK blog_posts/${SLUG}`);
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/blog/" + SLUG)}`);
await fetch(`${SITE_URL}/api/revalidate?tag=blog-post-${SLUG}`);
await fetch(`${SITE_URL}/api/revalidate?tag=blog-posts`);
console.log("  revalidated");
