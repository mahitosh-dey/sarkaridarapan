import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const { data, error } = await supabase
  .from("entrance_exams")
  .select("*")
  .eq("slug", "mh-set-2026")
  .single();

if (error) { console.error(error); process.exit(1); }
console.log("ALL COLUMNS:", Object.keys(data));
console.log("\n--- TITLE ---");
console.log(data.title, `(${data.title.length})`);
console.log("--- DESCRIPTION ---");
console.log(data.description, `(${data.description?.length || 0})`);
console.log("--- CONTENT ---");
console.log(data.content);
