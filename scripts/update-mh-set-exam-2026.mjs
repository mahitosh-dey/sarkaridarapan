// Expand /entrance-exams/mh-set-2026 from 1,326 -> 2,357 words.
// Also updates title to include "MH SET Exam 2026" phrasing so the near-miss
// query "mh set exam 2026" (Bing pos 7.1, 159 impressions) starts ranking on this page.
// Reads Supabase creds from .env.local.

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "mh-set-2026";

const title = "MH SET Exam 2026: Dates, Registration, Syllabus, Eligibility";
const description =
  "MH SET Exam 2026: registration closes June 16, exam on July 26 (SPPU). Syllabus, eligibility, exam pattern, exam day guide, and Assistant Prof career path.";

const content = fs.readFileSync("blog-drafts/mh-set-exam-2026-expanded.md", "utf8");

// ---------- validation ----------
console.log("\n=== VALIDATION ===");

if (title.length < 50 || title.length > 65) {
  console.error(`FAIL: title length ${title.length} outside 50-65.`);
  process.exit(1);
}
if (description.length < 150 || description.length > 160) {
  console.error(`FAIL: description length ${description.length} outside 150-160.`);
  process.exit(1);
}

const dashCheck = (s, name) => {
  if (s.includes("—")) return name + " contains em dash";
  if (s.includes("–")) return name + " contains en dash";
  if (/[“”‘’]/.test(s)) return name + " contains smart quotes";
  return null;
};
for (const [s, name] of [
  [title, "title"],
  [description, "description"],
  [content, "content"],
]) {
  const err = dashCheck(s, name);
  if (err) {
    console.error("FAIL: " + err);
    process.exit(1);
  }
}

const banned = [
  "actually",
  "delve",
  "crucial",
  "pivotal",
  "tapestry",
  "testament",
  "align with",
  "underscore",
  "garner",
  "showcase",
  "landscape of",
  "interplay",
  "intricate",
  "vibrant",
  "enduring",
  "additionally",
  "fostering",
  "foster",
];
const bodyLower = content.toLowerCase();
const hits = banned.filter((w) => bodyLower.includes(w));
if (hits.length > 0) {
  console.error("FAIL: content contains banned AI vocabulary: " + hits.join(", "));
  process.exit(1);
}

console.log(`title: ${title.length} chars OK`);
console.log(`description: ${description.length} chars OK`);
console.log(`content: ${content.trim().split(/\s+/).length} words OK`);
console.log("no em/en dashes, no smart quotes, no banned vocab.");

// ---------- read before ----------
console.log("\n=== READ BEFORE ===");
const { data: before, error: bErr } = await supabase
  .from("entrance_exams")
  .select("slug, title, description, content")
  .eq("slug", SLUG)
  .single();
if (bErr) {
  console.error("Read-before failed:", bErr);
  process.exit(1);
}
console.log(`before words: ${before.content.trim().split(/\s+/).length}`);
console.log(`before title (${before.title.length}): ${before.title}`);

// ---------- update ----------
console.log("\n=== UPDATE ===");
const { error: uErr } = await supabase
  .from("entrance_exams")
  .update({
    title,
    description,
    content,
    updated_at: new Date().toISOString(),
  })
  .eq("slug", SLUG);
if (uErr) {
  console.error("Update failed:", uErr);
  process.exit(1);
}
console.log("Update OK.");

// ---------- read after ----------
console.log("\n=== READ AFTER ===");
const { data: after, error: aErr } = await supabase
  .from("entrance_exams")
  .select("slug, title, description, content")
  .eq("slug", SLUG)
  .single();
if (aErr) {
  console.error("Read-after failed:", aErr);
  process.exit(1);
}
console.log(`after words: ${after.content.trim().split(/\s+/).length}`);
console.log(`after title (${after.title.length}): ${after.title}`);
console.log(`after description (${after.description.length}): ${after.description}`);

console.log("\nDone.");
