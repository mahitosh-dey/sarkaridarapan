import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { SITE_URL } from "@/lib/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Bing and Google both deprecated their sitemap-ping endpoints (Bing HTTP 410
// since May 2022, Google HTTP 404 since June 2023). This route now fires
// IndexNow for URLs updated in the last 24 hours instead. IndexNow notifies
// Bing, Yandex, Naver, Seznam, and Yep in one call. Google indexing must be
// requested manually via GSC Sitemaps and URL Inspection.
export async function GET(req: NextRequest) {
  // Accept both custom x-cron-secret header (for manual/curl invocation) and
  // Vercel Cron's standard Authorization: Bearer <CRON_SECRET> header. Vercel
  // Cron automatically injects the bearer token when CRON_SECRET env var is
  // set on the project.
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return NextResponse.json({ error: "CRON_SECRET env var not set" }, { status: 500 });
  }
  const customHeader = req.headers.get("x-cron-secret");
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (customHeader !== cronSecret && bearer !== cronSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase env missing" }, { status: 500 });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const [jobsRes, schemesRes, examsRes, blogsRes] = await Promise.all([
    supabase.from("jobs").select("slug").eq("is_active", true).gte("updated_at", since),
    supabase.from("schemes").select("slug").eq("is_active", true).gte("updated_at", since),
    supabase.from("entrance_exams").select("slug").eq("is_active", true).gte("updated_at", since),
    supabase.from("blog_posts").select("slug").eq("is_active", true).gte("updated_at", since),
  ]);

  const urls: string[] = [];
  for (const s of jobsRes.data ?? []) urls.push(`${SITE_URL}/sarkari-naukri/${s.slug}`);
  for (const s of schemesRes.data ?? []) urls.push(`${SITE_URL}/sarkari-yojana/${s.slug}`);
  for (const s of examsRes.data ?? []) urls.push(`${SITE_URL}/entrance-exams/${s.slug}`);
  for (const s of blogsRes.data ?? []) urls.push(`${SITE_URL}/blog/${s.slug}`);

  if (urls.length === 0) {
    return NextResponse.json({ success: true, submitted: 0, note: "No content updated in last 24h" });
  }

  const key = (process.env.INDEXNOW_KEY || "7bb5c385693a45bf923313146b6cf086").trim();
  const payload = {
    host: new URL(SITE_URL).hostname,
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const body = res.ok ? null : await res.text().catch(() => "");
  return NextResponse.json({
    success: res.ok,
    status: res.status,
    submitted: urls.length,
    error: body || undefined,
  });
}
