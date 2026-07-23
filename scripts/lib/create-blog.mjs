// Helper for creating a NEW blog_posts row with humanizer preflight.
// Mirrors create-exam.mjs. FAQs are embedded inline in content under
// "## Frequently asked questions" as bold-Q + paragraph-A pairs.
//
// Reads Supabase creds from .env.local.

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

function preflight(row, minWords, minFaqs) {
  const errs = [];
  if (!row.title || row.title.length < 50 || row.title.length > 65) {
    errs.push(`title length ${row.title?.length ?? 0}c (need 50-65)`);
  }
  if (!row.description || row.description.length < 150 || row.description.length > 160) {
    errs.push(`description length ${row.description?.length ?? 0}c (need 150-160)`);
  }
  const contentWords = row.content.trim().split(/\s+/).filter(Boolean).length;
  if (contentWords < minWords) {
    errs.push(`content ${contentWords} words (need ${minWords}+)`);
  }
  const bundle = `${row.title}\n${row.description}\n${row.content}`;
  if (/[—–]/.test(bundle)) errs.push("em/en dash found");
  if (/[“”‘’]/.test(bundle)) errs.push("smart quotes found");
  const banHits = BANNED_WORDS.filter((w) => bundle.toLowerCase().includes(w));
  if (banHits.length) errs.push(`banned words: ${banHits.join(", ")}`);
  const faqMarkerCount = (row.content.match(/## Frequently asked questions/g) || []).length;
  if (faqMarkerCount !== 1) {
    errs.push(`FAQ marker "## Frequently asked questions" appears ${faqMarkerCount} times (need exactly 1)`);
  }
  const faqCount = countInlineFaqs(row.content);
  if (faqCount < minFaqs) {
    errs.push(`only ${faqCount} inline FAQ questions found (need ${minFaqs}+)`);
  }
  return { errs, contentWords, faqCount };
}

export async function createBlog(row, minWords = 3000, minFaqs = 8) {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log(`\n=== Creating /blog/${row.slug} ===`);

  const { errs, contentWords, faqCount } = preflight(row, minWords, minFaqs);
  if (errs.length) {
    console.error("ABORT preflight failures:");
    for (const e of errs) console.error("  - " + e);
    process.exit(1);
  }
  console.log(`  Preflight OK: title=${row.title.length}c desc=${row.description.length}c content=${contentWords}w faqs=${faqCount}`);

  if (process.env.DRY_RUN === "1") {
    console.log("  DRY_RUN=1: stopping before DB write");
    return;
  }

  const now = new Date().toISOString();
  const insertRow = {
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: row.category,
    author: row.author || "SarkariDarapan Team",
    tags: row.tags || [],
    content: row.content,
    image: row.image ?? null,
    reading_time: row.reading_time || "12 min read",
    is_active: true,
    published_at: now,
    updated_at: now,
  };

  const { data: existing } = await supabase.from("blog_posts").select("id").eq("slug", row.slug).maybeSingle();
  if (existing) {
    const { error } = await supabase.from("blog_posts").update(insertRow).eq("slug", row.slug);
    if (error) { console.error("  FAIL (update):", error.message); process.exit(1); }
    console.log(`  OK blog_posts/${row.slug} (updated existing row)`);
  } else {
    const { error } = await supabase.from("blog_posts").insert(insertRow);
    if (error) { console.error("  FAIL (insert):", error.message); process.exit(1); }
    console.log(`  OK blog_posts/${row.slug} (inserted new row)`);
  }

  const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/blog/" + row.slug)}`);
  console.log(`  Path revalidate: HTTP ${rev.status}`);
  const tag = await fetch(`${SITE_URL}/api/revalidate?tag=blog_posts`);
  console.log(`  Blog tag revalidate: HTTP ${tag.status}`);

  await pingIndexNow(row.slug, "/blog");
  console.log(`  Verify: ${SITE_URL}/blog/${row.slug}`);
}
