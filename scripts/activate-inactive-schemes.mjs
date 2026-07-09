// Activate 8 schemes that were added but left is_active = false
// Run: node scripts/activate-inactive-schemes.mjs

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xtjbijvxxeoopcqxycpz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0amJpanZ4eGVvb3BjcXh5Y3B6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTE2Mjc0NCwiZXhwIjoyMDk0NzM4NzQ0fQ.yvsWDo7mEzOPLGeR9ZLjoUVXJN3qGGiPoCdb5RzmgxY"
);

const slugsToActivate = [
  "mgnrega-2026",
  "pm-ujjwala-yojana-2026",
  "sukanya-samriddhi-yojana-2026",
  "mukhyamantri-ladli-behna-yojana-mp-2026",
  "pm-fasal-bima-yojana-2026",
  "pmegp-2026",
  "jal-jeevan-mission-2026",
  "pm-kaushal-vikas-yojana-4-0-2026",
];

async function main() {
  console.log("Activating 8 inactive schemes...\n");

  for (const slug of slugsToActivate) {
    const { data, error } = await supabase
      .from("schemes")
      .update({ is_active: true })
      .eq("slug", slug)
      .select("slug, title");

    if (error) {
      console.error(`❌ ${slug}: ${error.message}`);
    } else if (!data || data.length === 0) {
      console.warn(`⚠️  ${slug}: not found in DB`);
    } else {
      console.log(`✅ Activated: ${data[0].title}`);
    }
  }

  console.log("\nDone.");
}

main();
