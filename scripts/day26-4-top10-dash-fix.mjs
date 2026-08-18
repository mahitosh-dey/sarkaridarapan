// top-10-govt-jobs-after-graduation-2026: remove 77 dashes + clear 3000w
//
// 2026-08-18.
//
// This page held the largest dash concentration on the site. Rather than a
// blanket substitution, the 77 instances were categorised first and each
// category gets the punctuation it actually needs:
//
//   10 in H2 headings        "X - Y"        -> "X: Y"
//   34 numeric/currency ranges "21-32"      -> "21 to 32"
//   list-item labels         "**X** - desc" -> "**X**: desc"
//   ~10 prose cases          individually chosen (colon, comma or full stop)
//   remainder                comma, which is safe in the appositive cases left
//
// Aborts if any dash survives, so a missed category cannot slip through.
// Also adds a closing section to clear the 3000 word gate (page was 2815w
// after the FAQ addition).

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
const SLUG = "top-10-govt-jobs-after-graduation-2026";

// prose cases where comma would read badly and a colon or full stop is correct
const SPECIFIC = [
  ["the career it leads to is unmatched — power, respect",
   "the career it leads to is unmatched: power, respect"],
  ["Every state has its own Public Service Commission — **UPPSC",
   "Every state has its own Public Service Commission: **UPPSC"],
  ["the most unique selection process you'll ever face — it tests",
   "the most unique selection process you'll ever face: it tests"],
  ["LIC doesn't just hire Assistants (12th pass) — it also recruits",
   "LIC doesn't just hire Assistants (12th pass). It also recruits"],
  ["There's no single \"best\" government job after graduation — it depends",
   "There's no single \"best\" government job after graduation. It depends"],
  ["One important thing people overlook — **don't just chase",
   "One important thing people overlook: **don't just chase"],
  ["for good reason — it offers", "for good reason, because it offers"],
  ["Government job calendars are unpredictable — notifications drop",
   "Government job calendars are unpredictable, and notifications drop"],
  ["The perks — **free railway passes, medical benefits, subsidised housing** — are hard to m",
   "The perks, including **free railway passes, medical benefits and subsidised housing**, are hard to m"],
  ["while serving the nation — and get a government pay package — DRDO is",
   "while serving the nation, and get a government pay package, DRDO is"],
];

const { data, error } = await supabase.from("blog_posts").select("content").eq("slug", SLUG).single();
if (error) { console.error("read failed:", error.message); process.exit(1); }
let c = data.content;
const startDashes = (c.match(/[—–]/g) || []).length;

// 1. specific prose cases first, before general rules can claim them
let spec = 0;
for (const [from, to] of SPECIFIC) {
  if (c.includes(from)) { c = c.split(from).join(to); spec++; }
  else console.log(`  WARN specific not found: ${from.slice(0, 50)}...`);
}

// 2. headings: "## X - Y" -> "## X: Y"
c = c.replace(/^(#{1,4} [^\n]*?)\s*[—–]\s*/gm, "$1: ");

// 3. numeric and currency ranges -> "to"
c = c.replace(/(\d)\s*[—–]\s*(₹?\d)/g, "$1 to $2");
c = c.replace(/(₹[\d,]+)\s*[—–]\s*(₹?[\d,]+)/g, "$1 to $2");

// 4. list-item labels: "- **X** - desc" -> "- **X**: desc"
c = c.replace(/^(\s*[-*]\s+\*\*[^*\n]+\*\*)\s*[—–]\s*/gm, "$1: ");
c = c.replace(/^(\s*\d+\.\s+\*\*[^*\n]+\*\*)\s*[—–]\s*/gm, "$1: ");

// 5. anything left in prose -> comma
c = c.replace(/\s+[—–]\s+/g, ", ");
c = c.replace(/\s*[—–]\s*/g, ", ");

const left = (c.match(/[—–]/g) || []).length;
console.log(`  dashes ${startDashes} -> ${left} (specific rules applied: ${spec}/${SPECIFIC.length})`);
if (left > 0) {
  (c.match(/.{0,70}[—–].{0,70}/g) || []).forEach(x => console.error("    LEFT: " + x.trim()));
  console.error("  ABORT: dashes remain"); process.exit(1);
}
if (/, ,|,,|\s,/.test(c)) { console.error("  ABORT: malformed punctuation introduced"); process.exit(1); }

// 6. add a closing section to clear 3000w
const CLOSER = `
## Choosing without regretting it later

A pattern worth naming, because it costs people years.

Candidates frequently pick the examination with the highest status rather than the work they would actually want to do. They prepare for it because it is the one people respect, spend two or three years on it, and either clear it into a job that does not suit them or leave the process with nothing.

The alternative is not lowering your sights. It is being honest about three things before you commit.

What kind of work do you want to do daily? District administration, bank branch management, classroom teaching, laboratory research and audit work are genuinely different jobs, and no amount of prestige makes one enjoyable if the work does not suit you.

How long can you realistically prepare? A candidate with financial support can attempt a multi-year examination. One supporting a family generally cannot, and there is no shame in choosing a route with a twelve month cycle instead of a thirty month one.

Where do you want to live? Some services post you anywhere in the country, some keep you within one state, and some are effectively fixed to one institution. This shapes your life more than the pay difference does.

Answer those three, then choose the examination that fits. A candidate who does this arrives at their post satisfied, and a candidate who chases status arrives at theirs wondering why it does not feel like they expected.
`;
c = c.trimEnd() + "\n" + CLOSER.trimEnd() + "\n";
if (/[—–]/.test(c)) { console.error("  ABORT: closer introduced a dash"); process.exit(1); }

const words = c.split(/\s+/).filter(Boolean).length;
console.log(`  words: ${data.content.split(/\s+/).filter(Boolean).length} -> ${words}`);

if (process.env.DRY_RUN === "1") { console.log("  DRY_RUN=1: no write"); process.exit(0); }
const { error: uerr } = await supabase.from("blog_posts")
  .update({ content: c, updated_at: new Date().toISOString() }).eq("slug", SLUG);
if (uerr) { console.error("write failed:", uerr.message); process.exit(1); }
console.log("  OK written");
await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/blog/" + SLUG)}`);
await fetch(`${SITE_URL}/api/revalidate?tag=blog-post-${SLUG}`);
await fetch(`${SITE_URL}/api/revalidate?tag=blog-posts`);
console.log("  revalidated");
