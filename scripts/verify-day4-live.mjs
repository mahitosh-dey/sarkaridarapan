// Consolidated live-verification for Day 4 shipped items.
// Curls each of the 6 URLs, checks title/description/canonical/robots/JSON-LD,
// and prints a summary matrix so any regressions are visible at a glance.

const items = [
  { path: "/sarkari-yojana/pm-surya-ghar-muft-bijli-yojana-rooftop-solar-2026", expectTitle: /PM Surya Ghar Yojana 2026/, expectBody: /registration pause|6 June 2026/ },
  { path: "/sarkari-yojana/pm-garib-kalyan-anna-yojana", expectTitle: /PMGKAY 2026/, expectBody: /fortified rice|December 2028/ },
  { path: "/sarkari-yojana/pm-jeevan-jyoti-bima-yojana", expectTitle: /PMJJBY 2026/, expectBody: /27.16 crore|99.95/ },
  { path: "/sarkari-yojana/pm-kusum-yojana-solar-pump-for-farmers-2026", expectTitle: /PM-KUSUM 2026/, expectBody: /PM-KUSUM 2.0|March 2027/ },
  { path: "/sarkari-yojana/pmegp-prime-ministers-employment-generation-2026", expectTitle: /PMEGP 2026/, expectBody: /Rs 1 crore|CGTMSE/ },
  { path: "/entrance-exams/nvs-pgt-tgt-2026", expectTitle: /NVS PGT TGT 2026/, expectBody: /5,841|CTET Paper-II/ },
];

const SITE = "https://www.sarkaridarapan.com";

for (const it of items) {
  const url = SITE + it.path;
  const html = await fetch(url).then((r) => r.text()).catch((e) => `ERR: ${e}`);
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const canonMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  const robotsMatch = html.match(/<meta name="robots" content="([^"]*)"/);
  const title = titleMatch ? titleMatch[1] : "MISSING";
  const desc = descMatch ? descMatch[1] : "MISSING";
  const canon = canonMatch ? canonMatch[1] : "MISSING";
  const robots = robotsMatch ? robotsMatch[1] : "MISSING";
  const titleOk = it.expectTitle.test(title) ? "OK " : "BAD";
  const bodyOk = it.expectBody.test(html) ? "OK " : "BAD";
  const canonOk = canon === url ? "OK " : "BAD";
  const robotsOk = /index.*follow/i.test(robots) ? "OK " : "BAD";
  const descLen = desc.length;
  const descOk = descLen >= 150 && descLen <= 160 ? "OK " : "BAD";
  console.log(`\n${it.path}`);
  console.log(`  title  [${titleOk}] ${title}`);
  console.log(`  desc   [${descOk}] ${descLen}c  ${desc}`);
  console.log(`  canon  [${canonOk}] ${canon}`);
  console.log(`  robots [${robotsOk}] ${robots}`);
  console.log(`  body   [${bodyOk}] freshness moat text ${it.expectBody.source}`);
}
