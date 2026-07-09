import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const { data, error } = await supabase
  .from("entrance_exams")
  .select("slug, title, description, content, is_active")
  .ilike("slug", "%mh-set%");

if (error) { console.error(error); process.exit(1); }

console.log(`Found ${data.length} MH SET pages:`);
data.forEach((p) => {
  console.log(`\n=== ${p.slug} (active: ${p.is_active}) ===`);
  console.log(`Title (${p.title.length}): ${p.title}`);
  console.log(`Description (${p.description?.length || 0}): ${p.description}`);
  console.log(`Words: ${p.content.trim().split(/\s+/).length}`);
});
