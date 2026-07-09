// Push humanized SEBI Grade A content to DB.
// Fixes 7 AI-tell patterns: superficial -ing analysis, inline-header bold labels
// (6 instances), Additional-perks bold header, career-progression fragmented
// header, prep-strategy inline-header bolds (3 instances), and the weak "significantly
// better" hedge in FAQ.

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const content = fs.readFileSync("blog-drafts/sebi-grade-a-2026.md", "utf8");

// Validation
const badChars = /[—–“”‘’]/;
if (badChars.test(content)) {
  console.error("FAIL: bad chars in content");
  process.exit(1);
}
const banned = ["actually","delve","crucial","pivotal","tapestry","testament","align with","underscore","garner","showcase","landscape of","interplay","intricate","vibrant","enduring","additionally","fostering","foster"];
const hits = banned.filter((w) => content.toLowerCase().includes(w));
if (hits.length) {
  console.error("FAIL: banned:", hits.join(", "));
  process.exit(1);
}
console.log(`Words: ${content.trim().split(/\s+/).length}`);

const { data: before } = await supabase
  .from("jobs")
  .select("content")
  .eq("slug", "sebi-grade-a-2026")
  .single();
console.log(`Before words: ${before.content.trim().split(/\s+/).length}`);

const { error } = await supabase
  .from("jobs")
  .update({ content, updated_at: new Date().toISOString() })
  .eq("slug", "sebi-grade-a-2026");
if (error) {
  console.error("Update failed:", error);
  process.exit(1);
}

const { data: after } = await supabase
  .from("jobs")
  .select("content")
  .eq("slug", "sebi-grade-a-2026")
  .single();
console.log(`After words: ${after.content.trim().split(/\s+/).length}`);
console.log("Done.");
