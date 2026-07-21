// Verify each Day 4 scheme has exactly one "## Frequently asked questions" marker.
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

const slugs = [
  "pm-surya-ghar-muft-bijli-yojana-rooftop-solar-2026",
  "pm-garib-kalyan-anna-yojana",
  "pm-jeevan-jyoti-bima-yojana",
  "pm-kusum-yojana-solar-pump-for-farmers-2026",
  "pmegp-prime-ministers-employment-generation-2026",
];

for (const slug of slugs) {
  const { data } = await supabase.from("schemes").select("content,faqs").eq("slug", slug).single();
  const marker = "## Frequently asked questions";
  const count = (data.content.match(new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
  const altMarkers = ["## FAQ", "## FAQs", "## Frequently Asked Questions", "## frequently asked questions"];
  const alts = altMarkers.map((m) => [m, (data.content.match(new RegExp(m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length]).filter(([, n]) => n > 0);
  const status = count === 1 ? "OK  " : "FAIL";
  console.log(`${status} ${slug}  markers=${count}  faqs=${(data.faqs || []).length}  alts=${JSON.stringify(alts)}`);
}
