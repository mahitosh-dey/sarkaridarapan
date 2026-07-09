// Patch SEBI Grade A row: shorten post_name (drives <title>) and salary
// (drives meta description) so the auto-generated SEO tags fit cleanly
// within 60/155 char budgets. Preserves full content body.

import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim();
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim();
const supabase = createClient(url, key);

// New concise values.
const newPostName = "SEBI Grade A";
const newSalary = "Rs. 44,500 basic. Gross Rs. 1.35 to Rs. 1.45 lakh/month at Mumbai including DA, HRA, and allowances. Net in-hand Rs. 1.05 to Rs. 1.15 lakh after NPS and tax.";

// Preview computed title format from generateMetadata:
//   `${postName} ${year}: ${N} Vacancies | Apply by ${DD MMM}`
const previewTitle = `${newPostName} 2026: 100 Vacancies | Apply by 15 Sep`;
console.log(`Preview <title>: "${previewTitle}" (${previewTitle.length} chars)`);
if (previewTitle.length > 60) {
  console.log("WARN: preview over 60 chars");
}

// Preview description format:
//   "Apply for ${postName} ${year}: ${vacancies}, last date ${date}. Check eligibility, salary ${salary}, exam pattern and direct apply link."
const previewDesc = `Apply for ${newPostName} 2026: 100 vacancies, last date 15 September 2026. Check eligibility, salary ${newSalary}, exam pattern and direct apply link.`;
console.log(`Preview description: "${previewDesc}" (${previewDesc.length} chars, will truncate at 155 if longer)`);

console.log(`\nUpdating slug sebi-grade-a-2026...`);
const { error } = await supabase
  .from("jobs")
  .update({
    post_name: newPostName,
    salary: newSalary,
    updated_at: new Date().toISOString(),
  })
  .eq("slug", "sebi-grade-a-2026");

if (error) {
  console.error("Update failed:", error);
  process.exit(1);
}
console.log("Update OK.");
