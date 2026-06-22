import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  if (req.headers.get("x-cron-secret") !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sitemapUrl = `${SITE_URL}/sitemap.xml`;

  try {
    const res = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { cache: "no-store" }
    );

    console.log(`[ping-bing] status=${res.status}`);

    return NextResponse.json({ success: res.ok, status: res.status });
  } catch (err) {
    console.error("[ping-bing] fetch failed:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
