// Consolidated live-verification for Day 5 shipped items.
const items = [
  { path: "/sarkari-yojana/national-scholarship-portal-nsp-2026-27-2026", expectTitle: /NSP 2026-27/, expectBody: /31 August 2026|face authentication|NSP 3\.0/ },
  { path: "/sarkari-yojana/pm-kisan-samman-nidhi-yojana-2026", expectTitle: /PM Kisan 2026/, expectBody: /23rd instalment|Farmer ID|Rs 4\.46 lakh crore/ },
  { path: "/sarkari-yojana/jal-jeevan-mission-har-ghar-jal-2026", expectTitle: /Jal Jeevan Mission 2026/, expectBody: /JJM 2\.0|Nal Jal Mitra|Dec 2028/ },
  { path: "/sarkari-yojana/pm-internship-scheme-2026-round-3-2026", expectTitle: /PM Internship 2026/, expectBody: /Round 3|Rs 9,000|MSME/ },
  { path: "/sarkari-yojana/pm-matsya-sampada-yojana", expectTitle: /PMMSY 2026/, expectBody: /Rs 2,500 cr|PM-MKSSY|aquaculture insurance/ },
  { path: "/entrance-exams/reet-2026", expectTitle: /REET 2026/, expectBody: /BSER|RSSB|5-option/ },
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
