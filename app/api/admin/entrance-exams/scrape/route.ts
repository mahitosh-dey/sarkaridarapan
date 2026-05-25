import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { generateSlug } from "@/lib/admin-utils";
import { scrapeHtmlPage } from "@/lib/scrape-html";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, title, conductingBody, category, state } = body;

    if (!url || !title || !conductingBody || !category) {
      return NextResponse.json(
        { error: "url, title, conductingBody, and category are required" },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);

    // Check for duplicate slug
    const { data: existing } = await supabaseAdmin
      .from("entrance_exams")
      .select("slug")
      .eq("slug", slug)
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: `An exam with slug '${slug}' already exists` },
        { status: 409 }
      );
    }

    // Attempt to scrape data from the URL
    const scraped = await scrapeHtmlPage(url.trim());

    const examRecord: Record<string, unknown> = {
      slug,
      title: title.trim(),
      conducting_body: conductingBody.trim(),
      category,
      state: state || "all-india",
      official_link: url.trim(),
      description: scraped?.description || title.trim().slice(0, 200),
      content: "",
      is_active: false,
      quality_flag: ["manual_draft"],
      completeness_score: scraped?.completeness_score || 0,
    };

    const { data, error } = await supabaseAdmin
      .from("entrance_exams")
      .insert(examRecord)
      .select("id")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      examId: data.id,
      slug,
      completeness_score: examRecord.completeness_score,
      scraped: scraped !== null,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
