#!/usr/bin/env node
/**
 * GSC CTR Opportunity Finder — SarkariDarapan
 * Finds pages with impressions > 10 but CTR < 2% (ranking but not clicked).
 *
 * Run: node scripts/gsc-ctr-opportunities.mjs [--days 28]
 *
 * ── SETUP ──────────────────────────────────────────────────────────────────
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a project (or select existing one)
 * 3. Enable "Google Search Console API"
 * 4. Go to APIs & Services → Credentials → Create Credentials → OAuth client ID
 *    - Application type: Desktop app
 *    - Download the JSON → save as scripts/gsc-credentials.json
 * 5. npm install googleapis   (or: npm i googleapis)
 * 6. Run the script once — it will open a browser for Google login
 *    and save a token to scripts/gsc-token.json for future runs
 * ───────────────────────────────────────────────────────────────────────────
 */

import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";
import { google } from "googleapis";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const SITE_URL       = "https://www.sarkaridarapan.com/";   // must match GSC property exactly
const CREDENTIALS    = path.join(__dirname, "gsc-credentials.json");
const TOKEN_PATH     = path.join(__dirname, "gsc-token.json");
const SCOPES         = ["https://www.googleapis.com/auth/webmasters.readonly"];

const DAYS           = (() => {
  const i = process.argv.indexOf("--days");
  return i !== -1 ? parseInt(process.argv[i + 1], 10) : 28;
})();
const MIN_IMPRESSIONS = 10;
const MAX_CTR         = 0.02;   // 2%
const ROW_LIMIT       = 1000;   // GSC API max per request

// ---------------------------------------------------------------------------
// Auth helpers
// ---------------------------------------------------------------------------
function getOAuthClient(credentials) {
  const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web;
  return new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
}

async function authorise(credentials) {
  const auth = getOAuthClient(credentials);

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
    auth.setCredentials(token);

    // Refresh if expired
    if (token.expiry_date && token.expiry_date < Date.now()) {
      console.log("Token expired — refreshing...");
      const { credentials: fresh } = await auth.refreshAccessToken();
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(fresh, null, 2));
      auth.setCredentials(fresh);
    }
    return auth;
  }

  // First run — generate auth URL and prompt user to paste code
  const authUrl = auth.generateAuthUrl({ access_type: "offline", scope: SCOPES });
  console.log("\nOpen this URL in your browser and authorise access:\n");
  console.log(authUrl);
  console.log();

  const code = await new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question("Paste the authorisation code here: ", (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });

  const { tokens } = await auth.getToken(code);
  auth.setCredentials(tokens);
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
  console.log(`Token saved to ${TOKEN_PATH}\n`);
  return auth;
}

// ---------------------------------------------------------------------------
// Date helpers
// ---------------------------------------------------------------------------
function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function dateRange() {
  const end   = new Date();
  end.setDate(end.getDate() - 3);              // GSC has ~3 day lag
  const start = new Date(end);
  start.setDate(start.getDate() - DAYS + 1);
  return { startDate: isoDate(start), endDate: isoDate(end) };
}

// ---------------------------------------------------------------------------
// GSC fetch — paginated
// ---------------------------------------------------------------------------
async function fetchAllRows(auth) {
  const sc = google.searchconsole({ version: "v1", auth });
  const { startDate, endDate } = dateRange();

  console.log(`Fetching GSC data for ${SITE_URL}`);
  console.log(`Date range: ${startDate} → ${endDate} (${DAYS} days)\n`);

  let allRows = [];
  let startRow = 0;

  while (true) {
    const { data } = await sc.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["query", "page"],
        rowLimit: ROW_LIMIT,
        startRow,
        dataState: "all",                      // include fresh data
      },
    });

    const rows = data.rows || [];
    allRows = allRows.concat(rows);
    if (rows.length < ROW_LIMIT) break;        // last page
    startRow += ROW_LIMIT;
    process.stdout.write(`  fetched ${allRows.length} rows...\r`);
  }

  console.log(`  total rows fetched: ${allRows.length}`);
  return allRows;
}

// ---------------------------------------------------------------------------
// Analysis
// ---------------------------------------------------------------------------
function analyse(rows) {
  const opportunities = [];
  const zeroClickHighRank = [];

  for (const row of rows) {
    const [query, page] = row.keys;
    const { impressions, clicks, ctr, position } = row;

    // CTR opportunity: visible but not clicked
    if (impressions > MIN_IMPRESSIONS && ctr < MAX_CTR) {
      opportunities.push({ query, page, impressions, clicks, ctr, position });
    }

    // Zero-click flag: in top 10 but nobody clicked
    if (position < 10 && clicks === 0 && impressions >= 5) {
      zeroClickHighRank.push({ query, page, impressions, clicks, ctr, position });
    }
  }

  // Sort by impressions desc (biggest missed opportunity first)
  opportunities.sort((a, b) => b.impressions - a.impressions);
  zeroClickHighRank.sort((a, b) => a.position - b.position);

  return { opportunities: opportunities.slice(0, 50), zeroClickHighRank };
}

// ---------------------------------------------------------------------------
// CSV helpers
// ---------------------------------------------------------------------------
function escapeCell(value) {
  const str = String(value ?? "");
  return str.includes(",") || str.includes('"') || str.includes("\n")
    ? `"${str.replace(/"/g, '""')}"`
    : str;
}

function toCsv(rows) {
  const header = "Query,Page URL,Impressions,Clicks,CTR (%),Avg Position";
  const body = rows.map((r) =>
    [
      escapeCell(r.query),
      escapeCell(r.page),
      r.impressions,
      r.clicks,
      (r.ctr * 100).toFixed(2),
      r.position.toFixed(1),
    ].join(",")
  );
  return [header, ...body].join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log("=== GSC CTR Opportunity Finder ===\n");

  // Load credentials
  if (!fs.existsSync(CREDENTIALS)) {
    console.error(`ERROR: ${CREDENTIALS} not found.`);
    console.error("Download your OAuth credentials JSON from Google Cloud Console");
    console.error("and save it as scripts/gsc-credentials.json");
    process.exit(1);
  }
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS, "utf-8"));

  // Auth
  const auth = await authorise(credentials);

  // Fetch
  const rows = await fetchAllRows(auth);
  if (!rows.length) {
    console.log("No data returned. Check that the site URL matches your GSC property exactly.");
    return;
  }

  // Analyse
  const { opportunities, zeroClickHighRank } = analyse(rows);

  // ── CTR Opportunities CSV ─────────────────────────────────────────────────
  const date      = isoDate(new Date());
  const csvFile   = path.join(__dirname, `gsc-ctr-opportunities-${date}.csv`);
  fs.writeFileSync(csvFile, toCsv(opportunities), "utf-8");

  console.log(`\n── Top ${opportunities.length} CTR Opportunities (impressions > ${MIN_IMPRESSIONS}, CTR < 2%) ──`);
  console.log(`Saved → ${csvFile}\n`);

  // Print top 10 to terminal
  const preview = opportunities.slice(0, 10);
  const qWidth  = Math.min(45, Math.max(...preview.map((r) => r.query.length)));
  console.log(
    "Query".padEnd(qWidth) +
    "  Impr".padStart(6) +
    "  Clicks".padStart(7) +
    "  CTR".padStart(7) +
    "  Pos".padStart(6)
  );
  console.log("─".repeat(qWidth + 28));
  for (const r of preview) {
    console.log(
      r.query.slice(0, qWidth).padEnd(qWidth) +
      String(r.impressions).padStart(6) +
      String(r.clicks).padStart(7) +
      `${(r.ctr * 100).toFixed(1)}%`.padStart(7) +
      r.position.toFixed(1).padStart(6)
    );
  }

  // ── Zero-Click High-Rank Flags ────────────────────────────────────────────
  if (zeroClickHighRank.length > 0) {
    const flagFile = path.join(__dirname, `gsc-zero-click-top10-${date}.csv`);
    fs.writeFileSync(flagFile, toCsv(zeroClickHighRank), "utf-8");

    console.log(`\n── ⚠  ${zeroClickHighRank.length} pages: position < 10 but 0 clicks (title/meta issue?) ──`);
    console.log(`Saved → ${flagFile}\n`);

    for (const r of zeroClickHighRank.slice(0, 5)) {
      console.log(`  Pos ${r.position.toFixed(1).padStart(4)}  ${r.impressions} impr  ${r.query}`);
      console.log(`         ${r.page}`);
    }
    if (zeroClickHighRank.length > 5) {
      console.log(`  … and ${zeroClickHighRank.length - 5} more in the CSV`);
    }
  } else {
    console.log("\n✓ No zero-click top-10 pages found.");
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("\nFatal:", err.message);
  if (err.message.includes("invalid_grant")) {
    console.error("Token is invalid. Delete scripts/gsc-token.json and re-run.");
  }
  process.exit(1);
});
