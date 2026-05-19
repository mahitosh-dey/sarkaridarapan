import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

/**
 * GET /api/ping
 * Pings Google and Bing with the sitemap URL to trigger crawling.
 * Call this after publishing new content or on a cron schedule.
 */
export async function GET() {
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  const results: Record<string, string> = {};

  // Ping Google
  try {
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );
    results.google = googleRes.ok ? "success" : `failed (${googleRes.status})`;
  } catch {
    results.google = "error";
  }

  // Ping Bing
  try {
    const bingRes = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );
    results.bing = bingRes.ok ? "success" : `failed (${bingRes.status})`;
  } catch {
    results.bing = "error";
  }

  return NextResponse.json({
    message: "Sitemap ping sent",
    sitemap: sitemapUrl,
    results,
  });
}
