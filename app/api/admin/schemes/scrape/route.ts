import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { generateSlug } from "@/lib/admin-utils";
import { scrapeHtmlPage } from "@/lib/scrape-html";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, title, ministry, category, state } = body;

    if (!url || !title || !ministry || !category) {
      return NextResponse.json(
        { error: "url, title, ministry, and category are required" },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);

    // Check for duplicate slug
    const { data: existing } = await supabaseAdmin
      .from("schemes")
      .select("slug")
      .eq("slug", slug)
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: `A scheme with slug '${slug}' already exists` },
        { status: 409 }
      );
    }

    // Attempt to scrape data from the URL
    const scraped = await scrapeHtmlPage(url.trim());

    const schemeRecord: Record<string, unknown> = {
      slug,
      title: title.trim(),
      ministry: ministry.trim(),
      category,
      state: state || "all-india",
      official_portal: url.trim(),
      description: scraped?.description || title.trim().slice(0, 200),
      content: "",
      is_active: false,
      quality_flag: ["manual_draft"],
      completeness_score: scraped?.completeness_score || 0,
    };

    const { data, error } = await supabaseAdmin
      .from("schemes")
      .insert(schemeRecord)
      .select("id")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      schemeId: data.id,
      slug,
      completeness_score: schemeRecord.completeness_score,
      scraped: scraped !== null,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
