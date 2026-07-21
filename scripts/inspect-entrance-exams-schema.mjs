// Inspect entrance_exams columns + a recent Wk 1 exam row for template.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8")
    .split("\n").filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; }),
);
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

// Show columns via a recent row
const { data } = await supabase.from("entrance_exams").select("*").eq("slug", "rrb-group-d-2026").maybeSingle();
if (!data) {
  console.log("No rrb-group-d-2026 row; showing first exam row instead");
  const { data: any } = await supabase.from("entrance_exams").select("*").limit(1).single();
  console.log("Columns:", Object.keys(any).join(", "));
  console.log("Sample row:", JSON.stringify(any, null, 2).slice(0, 2000));
} else {
  console.log("Columns:", Object.keys(data).join(", "));
  console.log("Non-content fields for rrb-group-d-2026:");
  const nonContent = { ...data };
  delete nonContent.content;
  console.log(JSON.stringify(nonContent, null, 2));
}
