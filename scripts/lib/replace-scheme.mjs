// Full-replacement helper for thin scheme upgrades to 3000w+ from scratch.
//
// Use when current content is too thin / stylistically inconsistent to append
// via upgrade-scheme.mjs. Rewrites content, title, description, faqs in one shot.
// Runs the same humanizer preflight (no em/en dashes, no smart quotes, no
// banned words, title 50-65c, description 150-160c, content >= minWords).
//
// Reads Supabase creds from .env.local (no hardcoded keys in NEW files).

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
  "what really matters", "crucial", "meticulously",
];

function preflight({ title, description, content, faqs, minWords }) {
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
  const fullText = `${title}\n${description}\n${content}\n${JSON.stringify(faqs)}`;
  if (/[—–]/.test(fullText)) errs.push("em/en dash found");
  if (/[“”‘’]/.test(fullText)) errs.push("smart quotes found");
  const banHits = BANNED_WORDS.filter((w) => fullText.toLowerCase().includes(w));
  if (banHits.length) errs.push(`banned words: ${banHits.join(", ")}`);
  const faqMarkerCount = (content.match(/## Frequently asked questions/g) || []).length;
  if (faqMarkerCount !== 1) {
    errs.push(`FAQ marker "## Frequently asked questions" appears ${faqMarkerCount} times (need exactly 1)`);
  }
  return { errs, contentWords };
}

export async function replaceScheme({ slug, title, description, content, faqs, minWords = 3000 }) {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log(`\n=== Replacing /sarkari-yojana/${slug} ===`);

  const { errs, contentWords } = preflight({ title, description, content, faqs, minWords });
  if (errs.length) {
    console.error("ABORT preflight failures:");
    for (const e of errs) console.error("  - " + e);
    process.exit(1);
  }
  console.log(`  Preflight OK: title=${title.length}c desc=${description.length}c content=${contentWords}w faqs=${faqs.length}`);

  if (process.env.DRY_RUN === "1") {
    console.log("  DRY_RUN=1: stopping before DB write");
    return;
  }

  const { error } = await supabase
    .from("schemes")
    .update({
      title,
      description,
      content,
      faqs,
      updated_at: new Date().toISOString(),
    })
    .eq("slug", slug);
  if (error) {
    console.error("  FAIL (update):", error.message);
    process.exit(1);
  }
  console.log(`  OK schemes/${slug}`);

  const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-yojana/" + slug)}`);
  console.log(`  Path revalidate: HTTP ${rev.status}`);
  const tag = await fetch(`${SITE_URL}/api/revalidate?tag=schemes`);
  console.log(`  Schemes tag revalidate: HTTP ${tag.status}`);

  await pingIndexNow(slug, "/sarkari-yojana");
  console.log(`  Verify: ${SITE_URL}/sarkari-yojana/${slug}`);
}
