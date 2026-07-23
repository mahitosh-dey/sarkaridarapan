// Full-replacement helper for thin blog upgrades to 3000w+ with humanizer preflight.
// FAQs live INLINE in content under "## Frequently asked questions" as bold-Q +
// paragraph-A pairs (parsed by lib/faq-parser.ts at render time). No separate
// faqs column needed for blogs.
//
// Reads Supabase creds from .env.local. Mirrors replace-scheme.mjs conventions.

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pingIndexNow } from "./indexnow.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", "..", ".env.local"), "utf8")
    .split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
const SITE_URL = "https://www.sarkaridarapan.com";

const BANNED_WORDS = [
  "delve", "delving", "delves", "pivotal", "underscore", "underscores",
  "tapestry", "landscape of", "vibrant", "boasts", "boast", "showcase",
  "showcases", "testament", "interplay", "intricate", "enduring", "foster",
  "fostering", "garner", "garnered", "actually,", "in the realm of",
  "in today's world", "at its core", "the real question is",
  "what really matters", "crucial", "meticulously", "consistently",
];

function countInlineFaqs(content) {
  const lines = content.split(/\r?\n/);
  let inFaq = false;
  let faqCount = 0;
  for (const line of lines) {
    const h2 = /^##\s+(.+?)\s*$/.exec(line);
    if (h2) {
      const heading = h2[1].toLowerCase();
      if (/^(frequently asked|faqs?\b)/.test(heading)) { inFaq = true; continue; }
      if (inFaq) break;
    }
    if (inFaq && /^\*\*(.+?)\*\*\s*$/.test(line.trim())) faqCount++;
  }
  return faqCount;
}

function preflight({ title, description, content, minWords, minFaqs = 8 }) {
  const errs = [];
  if (!title || title.length < 50 || title.length > 65) {
    errs.push(`title length ${title?.length ?? 0}c (need 50-65)`);
  }
  if (!description || description.length < 150 || description.length > 160) {
    errs.push(`description length ${description?.length ?? 0}c (need 150-160)`);
  }
  const contentWords = content.trim().split(/\s+/).filter(Boolean).length;
  if (contentWords < minWords) {
    errs.push(`content ${contentWords} words (need ${minWords}+)`);
  }
  const bundle = `${title}\n${description}\n${content}`;
  if (/[—–]/.test(bundle)) errs.push("em/en dash found");
  if (/[“”‘’]/.test(bundle)) errs.push("smart quotes found");
  const banHits = BANNED_WORDS.filter((w) => bundle.toLowerCase().includes(w));
  if (banHits.length) errs.push(`banned words: ${banHits.join(", ")}`);
  const faqMarkerCount = (content.match(/## Frequently asked questions/g) || []).length;
  if (faqMarkerCount !== 1) {
    errs.push(`FAQ marker "## Frequently asked questions" appears ${faqMarkerCount} times (need exactly 1)`);
  }
  const faqCount = countInlineFaqs(content);
  if (faqCount < minFaqs) {
    errs.push(`only ${faqCount} inline FAQ questions found (need ${minFaqs}+ bold Q / paragraph A pairs under the FAQ H2)`);
  }
  return { errs, contentWords, faqCount };
}

export async function replaceBlog({ slug, title, description, category, tags, content, image = null, readingTime, minWords = 3000, minFaqs = 8 }) {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log(`\n=== Replacing /blog/${slug} ===`);

  const { errs, contentWords, faqCount } = preflight({ title, description, content, minWords, minFaqs });
  if (errs.length) {
    console.error("ABORT preflight failures:");
    for (const e of errs) console.error("  - " + e);
    process.exit(1);
  }
  console.log(`  Preflight OK: title=${title.length}c desc=${description.length}c content=${contentWords}w faqs=${faqCount}`);

  if (process.env.DRY_RUN === "1") {
    console.log("  DRY_RUN=1: stopping before DB write");
    return;
  }

  const update = {
    title,
    description,
    content,
    updated_at: new Date().toISOString(),
  };
  if (category) update.category = category;
  if (Array.isArray(tags) && tags.length) update.tags = tags;
  if (image !== undefined) update.image = image;
  if (readingTime) update.reading_time = readingTime;

  const { error } = await supabase
    .from("blog_posts")
    .update(update)
    .eq("slug", slug);
  if (error) {
    console.error("  FAIL (update):", error.message);
    process.exit(1);
  }
  console.log(`  OK blog_posts/${slug}`);

  const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/blog/" + slug)}`);
  console.log(`  Path revalidate: HTTP ${rev.status}`);
  const tag = await fetch(`${SITE_URL}/api/revalidate?tag=blog_posts`);
  console.log(`  Blog tag revalidate: HTTP ${tag.status}`);

  await pingIndexNow(slug, "/blog");
  console.log(`  Verify: ${SITE_URL}/blog/${slug}`);
}
