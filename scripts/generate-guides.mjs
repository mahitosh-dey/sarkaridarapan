#!/usr/bin/env node
/**
 * Guide Generator — SarkariDarapan
 * Run: node scripts/generate-guides.mjs [--dry-run] [--limit N]
 *
 * Prereqs:
 *   export SUPABASE_SERVICE_KEY="your-service-role-key"
 *   export GROQ_API_KEY="your-groq-api-key"
 *
 * guide_topics table (create once in Supabase):
 *   CREATE TABLE guide_topics (
 *     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     topic TEXT NOT NULL,
 *     category TEXT NOT NULL,
 *     target_keyword TEXT NOT NULL,
 *     related_job_slug TEXT DEFAULT NULL,
 *     created_at TIMESTAMPTZ NOT NULL DEFAULT now()
 *   );
 */

import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const DRY_RUN = process.argv.includes("--dry-run");
const LIMIT = (() => {
  const i = process.argv.indexOf("--limit");
  return i !== -1 ? Math.max(1, parseInt(process.argv[i + 1], 10)) : Infinity;
})();

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const RATE_LIMIT_MS = 1200; // stay inside Groq free-tier TPM limits

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
if (!SUPABASE_SERVICE_KEY) {
  console.error("ERROR: SUPABASE_SERVICE_KEY env var is not set.");
  process.exit(1);
}
if (!GROQ_API_KEY) {
  console.error("ERROR: GROQ_API_KEY env var is not set.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .slice(0, 80);
}

function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function wordCount(content) {
  return content.trim().split(/\s+/).length;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------------------
// Groq API call
// ---------------------------------------------------------------------------
async function generateContent(topic) {
  const systemPrompt = `You are a content writer for SarkariDarapan, an Indian government jobs and schemes portal. Write clear, practical guides for government job aspirants.

Rules you must follow:
- Never write dates, exam schedules, or official URLs you are not certain about
- Use the placeholder [OFFICIAL_SITE] wherever an official URL belongs
- Use Indian government context throughout (UPSC, SSC, Railways, State PSC, banking, defence, etc.)
- Tone: direct, helpful, plain language — no fluff, no filler phrases
- No em dashes. No "delve", "crucial", "vibrant", "tapestry", "underscore", "pivotal"
- Output valid JSON only — no extra text before or after`;

  const userPrompt = `Write a 600–900 word guide on the topic below for Indian government job aspirants.

Topic: "${topic.topic}"
Target keyword: ${topic.target_keyword}
Category: ${topic.category}${topic.related_job_slug ? `\nRelated job: ${topic.related_job_slug}` : ""}

Required sections (use ## headings in the content):
1. Introduction — 1–2 paragraphs, state what problem this solves
2. Step-by-step process — numbered list, minimum 5 steps
3. Important tips — bullet list, minimum 4 tips
4. FAQ — exactly 3 questions with concise, direct answers

Return a JSON object with exactly these keys:
{
  "title": "SEO title, max 65 characters, include target keyword",
  "description": "Meta description, 120–155 characters, include target keyword naturally",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "content": "Full markdown article with ## headings"
}`;

  const res = await fetch(GROQ_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.65,
      max_tokens: 2048,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Groq ${res.status}: ${body.slice(0, 200)}`);
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content;
  if (!raw) throw new Error("Empty response from Groq");

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`Groq returned invalid JSON: ${raw.slice(0, 100)}`);
  }

  // Validate required keys
  const missing = ["title", "description", "tags", "content"].filter(
    (k) => !parsed[k]
  );
  if (missing.length) throw new Error(`Missing keys in response: ${missing.join(", ")}`);

  return parsed;
}

// ---------------------------------------------------------------------------
// Supabase insert
// ---------------------------------------------------------------------------
async function saveDraft(topic, generated, slug) {
  const post = {
    slug,
    title: generated.title.slice(0, 200),
    description: generated.description.slice(0, 300),
    category: topic.category,
    author: "SarkariDarapan Team",
    tags: Array.isArray(generated.tags) ? generated.tags.slice(0, 8) : [],
    content: generated.content,
    reading_time: estimateReadingTime(generated.content),
    is_active: false,
    published_at: null,
  };

  const { error } = await supabase.from("blog_posts").insert(post);
  if (error) throw new Error(`Supabase: ${error.message}`);
  return post;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log("\n=== SarkariDarapan Guide Generator ===");
  if (DRY_RUN) console.log("MODE: DRY RUN — nothing will be written to Supabase\n");
  else console.log("MODE: LIVE — drafts will be saved to blog_posts\n");

  // Fetch topics
  const { data: topics, error: topicsErr } = await supabase
    .from("guide_topics")
    .select("*")
    .order("created_at", { ascending: true });

  if (topicsErr) {
    console.error("Failed to read guide_topics:", topicsErr.message);
    process.exit(1);
  }
  if (!topics?.length) {
    console.log("No rows found in guide_topics. Add topics and re-run.");
    return;
  }

  // Fetch existing blog slugs so we can skip already-generated ones
  const { data: existing } = await supabase.from("blog_posts").select("slug");
  const existingSlugs = new Set((existing || []).map((r) => r.slug));

  const toProcess = topics
    .filter((t) => !existingSlugs.has(toSlug(t.topic)))
    .slice(0, LIMIT === Infinity ? topics.length : LIMIT);

  const alreadyDone = topics.length - toProcess.length;
  console.log(`Topics total:    ${topics.length}`);
  console.log(`Already saved:   ${alreadyDone}`);
  console.log(`To process now:  ${toProcess.length}\n`);

  if (!toProcess.length) {
    console.log("Nothing to do — all topics already have drafts.");
    return;
  }

  let processed = 0;
  let failed = 0;
  const errors = [];

  for (let i = 0; i < toProcess.length; i++) {
    const topic = toProcess[i];
    const slug = toSlug(topic.topic);
    const prefix = `[${i + 1}/${toProcess.length}]`;

    process.stdout.write(`${prefix} "${topic.topic}" ... `);

    try {
      const generated = await generateContent(topic);
      const words = wordCount(generated.content);

      if (DRY_RUN) {
        console.log("OK (dry run)");
        console.log(`         title:  ${generated.title}`);
        console.log(`         slug:   ${slug}`);
        console.log(`         words:  ${words}`);
        console.log(`         tags:   ${generated.tags?.join(", ")}`);
      } else {
        await saveDraft(topic, generated, slug);
        console.log(`SAVED — ${words} words (slug: ${slug})`);
      }

      processed++;
    } catch (err) {
      console.log("FAILED");
      console.error(`         ${err.message}`);
      errors.push({ topic: topic.topic, error: err.message });
      failed++;
    }

    // Rate-limit between requests (skip after last item)
    if (i < toProcess.length - 1) await sleep(RATE_LIMIT_MS);
  }

  // Summary
  console.log("\n--- Summary ---");
  console.log(`Processed:  ${processed}`);
  console.log(`Skipped:    ${alreadyDone}`);
  console.log(`Failed:     ${failed}`);

  if (errors.length) {
    console.log("\nFailed topics:");
    errors.forEach((e) => console.log(`  - "${e.topic}": ${e.error}`));
  }

  if (!DRY_RUN && processed > 0) {
    console.log(
      "\nDrafts saved. Review at /admin/posts (is_active = false) before publishing."
    );
  }
}

main().catch((err) => {
  console.error("\nFatal error:", err.message);
  process.exit(1);
});
