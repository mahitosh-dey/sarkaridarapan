import { createClient } from "@supabase/supabase-js";
import fs from "fs";
const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);
const table = process.argv[2]; // jobs, schemes, entrance_exams, blog_posts
const slug = process.argv[3];
const { data, error } = await supabase.from(table).select("*").eq("slug", slug).single();
if (error) { console.error(error); process.exit(1); }
console.log("=== METADATA ===");
for (const [k, v] of Object.entries(data)) {
  if (k === "content") continue;
  console.log(`${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`);
}
console.log("\n=== CONTENT ===");
console.log(data.content || "");
console.log(`\n=== WORDS: ${(data.content||"").split(/\s+/).length} ===`);
