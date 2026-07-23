// Consolidated live-verification for Day 6 shipped items.
const items = [
  { path: "/sarkari-yojana/pm-yashasvi-scholarship-2026", expectTitle: /PM YASASVI|PM-YASASVI/, expectBody: /Rs 2,042|105\.8|YET/ },
  { path: "/sarkari-yojana/pm-scholarship-scheme-pmss-2026-27-2026", expectTitle: /PMSS/, expectBody: /Rs 2,500|Rs 3,000|KSB|Assam Rifles/ },
  { path: "/sarkari-yojana/up-pre-post-matric-scholarships-2026", expectTitle: /UP Scholarship/, expectBody: /NPCI|B08|Suspect Data|Saksham/ },
  { path: "/sarkari-yojana/mukhyamantri-kanya-sumangala-yojana-uttar-pradesh-2026", expectTitle: /Kanya Sumangala/, expectBody: /Rs 25,000|Rs 5,000|Category 2|1 April 2019/ },
  { path: "/sarkari-yojana/ladli-behna-yojana-mp-2026", expectTitle: /Ladli Behna/, expectBody: /Rs 1,500|38th|Lahar|Bhind|Rs 23,882|Maharashtra/ },
  { path: "/entrance-exams/uptet-2026", expectTitle: /UPTET 2026/, expectBody: /UPESSC|19\.94 lakh|Devesh Sharma|8 July|B\.Ed/ },
];
const SITE = "https://www.sarkaridarapan.com";
for (const it of items) {
  const url = SITE + it.path;
  const html = await fetch(url).then((r) => r.text()).catch((e) => `ERR: ${e}`);
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const canonMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  const robotsMatch = html.match(/<meta name="robots" content="([^"]*)"/);
  const jsonLdCount = (html.match(/<script type="application\/ld\+json"/g) || []).length;
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
  const jldOk = jsonLdCount >= 3 ? "OK " : "BAD";
  console.log(`\n${it.path}`);
  console.log(`  title  [${titleOk}] ${title}`);
  console.log(`  desc   [${descOk}] ${descLen}c  ${desc}`);
  console.log(`  canon  [${canonOk}] ${canon}`);
  console.log(`  robots [${robotsOk}] ${robots}`);
  console.log(`  jsonld [${jldOk}] ${jsonLdCount} script blocks`);
  console.log(`  body   [${bodyOk}] freshness moat pattern ${it.expectBody.source}`);
}
