import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

const { data, error } = await supabase
  .from("jobs")
  .select("*")
  .eq("slug", "rbi-grade-b-2026")
  .single();

if (error) { console.error(error); process.exit(1); }
console.log("ALL COLUMNS:", Object.keys(data));
console.log("\n--- FIELD VALUES ---");
for (const [k, v] of Object.entries(data)) {
  if (k === "content") {
    console.log(`${k}: ${(v || "").split(/\s+/).length} words`);
  } else if (typeof v === "string" && v.length > 200) {
    console.log(`${k} (${v.length} chars): ${v.substring(0, 200)}...`);
  } else {
    console.log(`${k}: ${JSON.stringify(v)?.substring(0, 200)}`);
  }
}
