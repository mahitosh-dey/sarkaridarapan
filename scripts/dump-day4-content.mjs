// Dump full content of PM Surya Ghar to see current structure.
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

const slug = process.argv[2] || "pm-surya-ghar-muft-bijli-yojana-rooftop-solar-2026";
const { data } = await supabase.from("schemes").select("*").eq("slug", slug).single();
console.log("=== TITLE ===");
console.log(data.title);
console.log("\n=== DESCRIPTION ===");
console.log(data.description);
console.log("\n=== COLUMNS PRESENT ===");
console.log(Object.keys(data).join(", "));
console.log("\n=== CONTENT ===");
console.log(data.content);
console.log("\n=== FAQS ===");
console.log(JSON.stringify(data.faqs, null, 2));
