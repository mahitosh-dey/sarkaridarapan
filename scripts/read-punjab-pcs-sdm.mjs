import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const { data, error } = await supabase
  .from("blog_posts")
  .select("*")
  .eq("slug", "punjab-pcs-sdm-recruitment-2026")
  .single();

if (error) { console.error(error); process.exit(1); }

console.log("--- TITLE ---");
console.log(data.title, `(${data.title.length} chars)`);
console.log("--- DESCRIPTION ---");
console.log(data.description);
console.log("--- WORDS ---", data.content.trim().split(/\s+/).length);
console.log("--- TAGS ---", data.tags);
console.log("--- CATEGORY ---", data.category);
console.log("--- CONTENT ---");
console.log(data.content);
