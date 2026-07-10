// Refresh /sarkari-naukri/upsc-epfo-2026 content after post-launch humanizer audit.
// Two edits: (a) Education section prose-ified two "For **X**:" inline-header-style
// labels, (b) Focus areas for high scores section converted 4 bulleted **bold**
// labels into real prose paragraphs. Zero em/en dashes, zero banned vocab,
// zero bulleted-bold-label style survives.

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const SLUG = "upsc-epfo-2026";
const content = fs.readFileSync("blog-drafts/upsc-epfo-2026.md", "utf8");

// Validation
const badChars = /[—–“”‘’]/;
if (badChars.test(content)) { console.error("FAIL: bad chars"); process.exit(1); }
const banned = ["actually","delve","crucial","pivotal","tapestry","testament","align with","underscore","garner","showcase","landscape of","interplay","intricate","vibrant","enduring","additionally","fostering","foster"];
const hits = banned.filter((w) => content.toLowerCase().includes(w));
if (hits.length) { console.error("FAIL banned:", hits); process.exit(1); }
const inlineHits = content.match(/^\s*-?\s*\*\*[^*\n]+:\s*\*\*/gm) || [];
if (inlineHits.length) { console.error("FAIL inline-header:", inlineHits); process.exit(1); }
const bulletedBold = content.match(/^\s*-\s*\*\*[^*\n]+\*\*/gm) || [];
if (bulletedBold.length) { console.error("FAIL bulleted-bold-label:", bulletedBold); process.exit(1); }

console.log(`words: ${content.trim().split(/\s+/).length}`);
console.log("validation passed.");

const { data, error } = await supabase
  .from("jobs")
  .update({ content, updated_at: new Date().toISOString() })
  .eq("slug", SLUG)
  .select("slug, id")
  .single();
if (error) { console.error("Update failed:", error); process.exit(1); }
console.log(`Updated. id=${data.id} slug=${data.slug}`);
