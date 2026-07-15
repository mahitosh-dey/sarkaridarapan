import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

// Hardcoded fallback matches /public/7bb5c385693a45bf923313146b6cf086.txt so
// IndexNow verification works even when INDEXNOW_KEY env var is missing. Prior
// fallback of "your-indexnow-key-here" pointed at a 404 keyLocation and the
// IndexNow API silently rejected every submission with HTTP 422.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "7bb5c385693a45bf923313146b6cf086";

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

    const body = response.ok ? null : await response.text().catch(() => "");

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: fullUrls.length,
      keyLocation: payload.keyLocation,
      error: body || undefined,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow", detail: String(error) },
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
