// One-off: inventory schemes/jobs/exams/blogs to align execution plan with actual DB state.
// Reports slug, title, is_active, word count (from body/content field where available).
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY",
);

function stripHtml(s) {
  if (!s) return "";
  return String(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function wc(s) {
  const t = stripHtml(s);
  if (!t) return 0;
  return t.split(/\s+/).length;
}

async function inspectTable(name, bodyFields) {
  const { data, error } = await supabase.from(name).select("*").order("created_at", { ascending: true });
  if (error) {
    console.log(`\n=== ${name}: ERROR ===`);
    console.log(error.message);
    return;
  }
  const rows = data || [];
  const active = rows.filter((r) => r.is_active !== false);
  console.log(`\n=== ${name}: ${rows.length} total, ${active.length} active ===`);

  // detect which body field exists
  const sample = rows[0] || {};
  const availableBodyField = bodyFields.find((f) => f in sample);
  const bodyFieldNote = availableBodyField ? `word count from "${availableBodyField}"` : "no body field found";
  console.log(`(${bodyFieldNote})`);

  // Sort by word count ascending so thin content bubbles up
  const withWc = rows.map((r) => ({
    slug: r.slug,
    title: r.title || r.name,
    is_active: r.is_active !== false,
    words: availableBodyField ? wc(r[availableBodyField]) : null,
  }));
  withWc.sort((a, b) => (a.words ?? 0) - (b.words ?? 0));

  for (const r of withWc) {
    const flag = r.is_active ? "[LIVE]  " : "[HIDDEN]";
    const w = r.words == null ? "  n/a" : String(r.words).padStart(5);
    console.log(`  ${flag} ${w}w  ${r.slug}`);
  }
}

await inspectTable("schemes", ["content", "body", "description_full", "full_content"]);
await inspectTable("entrance_exams", ["content", "body", "description_full", "full_content"]);
await inspectTable("blog_posts", ["content", "body"]);
await inspectTable("jobs", ["description", "full_description", "content", "body"]);
