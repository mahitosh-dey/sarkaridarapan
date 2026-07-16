// Bust per-path Vercel cache for every active scheme so the em-dash
// fixes propagate immediately to live HTML. The /api/revalidate?tag=
// call at framework level did not fully purge edge cache in the
// 2026-07-16 sweep.

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xtjbijvxxeoopcqxycpz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY";
const SITE_URL = "https://www.sarkaridarapan.com";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const { data } = await supabase.from("schemes").select("slug").eq("is_active", true);
console.log(`Revalidating ${data.length} scheme paths...`);
let ok = 0, fail = 0;
for (const row of data) {
  const res = await fetch(`${SITE_URL}/api/revalidate?path=${encodeURIComponent("/sarkari-yojana/" + row.slug)}`);
  if (res.ok) ok++; else fail++;
}
console.log(`  ${ok} ok / ${fail} fail`);
