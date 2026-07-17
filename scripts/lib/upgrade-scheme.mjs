// Shared helper for scheme content upgrades (v2 pass with keywords + PAA).
//
// Pattern:
//   1. Fetch current content + faqs from DB
//   2. Append new sections at the "-- APPEND --" placeholder (before the last "## Frequently asked questions")
//   3. Prepend new PAA FAQs to the existing FAQ array (Google shows PAA at top)
//   4. Run humanizer checks on the combined result
//   5. Update DB, revalidate, IndexNow

import { createClient } from "@supabase/supabase-js";
import { pingIndexNow } from "./indexnow.mjs";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";

export async function upgradeScheme({ slug, appendContent, newFaqs, minWords = 3000 }) {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  console.log(`\n=== Upgrading /sarkari-yojana/${slug} ===`);

  // Fetch current row
  const { data: current, error: fetchErr } = await supabase
    .from("schemes")
    .select("content, faqs, title, description")
    .eq("slug", slug)
    .single();
  if (fetchErr) {
    console.error("FAIL (fetch):", fetchErr.message);
    process.exit(1);
  }

  // Compose new content: insert appendContent BEFORE "## Frequently asked questions" marker
  const faqMarker = "## Frequently asked questions";
  const parts = current.content.split(faqMarker);
  if (parts.length !== 2) {
    console.error(`FAIL: expected exactly 1 occurrence of "${faqMarker}" in content, found ${parts.length - 1}`);
    process.exit(1);
  }
  const newContent = parts[0].trimEnd() + "\n\n" + appendContent.trim() + "\n\n---\n\n" + faqMarker + parts[1];

  // Compose merged FAQs: new PAA FAQs first (Google prioritises early FAQs), then existing
  const existingFaqs = Array.isArray(current.faqs) ? current.faqs : [];
  const mergedFaqs = [...newFaqs, ...existingFaqs];

  // Pre-flight humanizer check on the new content + faqs (not the old, which already passed)
  const fullText = `${appendContent}\n${JSON.stringify(newFaqs)}`;

  if (/[—–]/.test(fullText)) {
    console.error("ABORT: em/en dash detected in new content");
    process.exit(1);
  }
  if (/[“”‘’]/.test(fullText)) {
    console.error("ABORT: smart quotes detected in new content");
    process.exit(1);
  }

  const bannedWords = [
    "delve", "delving", "delves", "pivotal", "underscore", "underscores",
    "tapestry", "landscape of", "vibrant", "boasts", "boast", "showcase",
    "showcases", "testament", "interplay", "intricate", "enduring", "foster",
    "fostering", "garner", "garnered", "actually,", "in the realm of",
    "in today's world", "at its core", "the real question is",
    "what really matters", "crucial", "meticulously",
  ];
  const banHits = bannedWords.filter((w) => fullText.toLowerCase().includes(w));
  if (banHits.length) {
    console.error("ABORT: banned words in new content:", banHits);
    process.exit(1);
  }

  const contentWords = newContent.trim().split(/\s+/).filter(Boolean).length;
  if (contentWords < minWords) {
    console.error(`ABORT: combined content ${contentWords} words, below ${minWords} target`);
    process.exit(1);
  }

  console.log(`  New content: ${contentWords} words (target ${minWords}+): OK`);
  console.log(`  FAQs: ${existingFaqs.length} existing + ${newFaqs.length} new = ${mergedFaqs.length}`);

  if (process.env.DRY_RUN === "1") {
    console.log("  DRY_RUN=1: stopping before DB write");
    return;
  }

  // DB update
  const { error: updateErr } = await supabase
    .from("schemes")
    .update({
      content: newContent,
      faqs: mergedFaqs,
      updated_at: new Date().toISOString(),
    })
    .eq("slug", slug);
  if (updateErr) {
    console.error("  FAIL (update):", updateErr.message);
    process.exit(1);
  }
  console.log(`  OK schemes/${slug}`);

  // Revalidate
  const rev = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-yojana/" + slug)}`);
  console.log(`  Path revalidate: HTTP ${rev.status}`);
  const tag = await fetch(`${SITE_URL}/api/revalidate?tag=schemes`);
  console.log(`  Schemes tag revalidate: HTTP ${tag.status}`);

  // IndexNow
  await pingIndexNow(slug, "/sarkari-yojana");
  console.log(`  Verify: ${SITE_URL}/sarkari-yojana/${slug}`);
}
