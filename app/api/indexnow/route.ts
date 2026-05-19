import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "your-indexnow-key-here";

/**
 * POST /api/indexnow
 * Submits URLs to IndexNow (Bing, Yandex, etc.) for instant indexing.
 * Call this whenever new content is published.
 *
 * Body: { urls: string[] }
 */
export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "urls array required" }, { status: 400 });
    }

    const fullUrls = urls.map((url: string) =>
      url.startsWith("http") ? url : `${SITE_URL}${url}`
    );

    const payload = {
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: fullUrls,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: fullUrls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/indexnow
 * Returns the IndexNow key for verification.
 */
export async function GET() {
  return new NextResponse(INDEXNOW_KEY, {
    headers: { "Content-Type": "text/plain" },
  });
}
