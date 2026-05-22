import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { scrapeHtmlPage } from "@/lib/scrape-html";

function generateSlug(title: string): string {
  let text = title.toLowerCase().trim();
  text = text.replace(/[^a-z0-9\s-]/g, "");
  text = text.replace(/[\s-]+/g, "-").replace(/^-|-$/g, "");
  const year = new Date().getFullYear().toString();
  if (!text.endsWith(year)) {
    text = `${text}-${year}`;
  }
  return text;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, title, organization, category, state } = body;

    if (!url || !title || !organization || !category) {
      return NextResponse.json(
        { error: "url, title, organization, and category are required" },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);

    // Check for duplicate slug
    const { data: existing } = await supabaseAdmin
      .from("jobs")
      .select("slug")
      .eq("slug", slug)
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: `A job with slug '${slug}' already exists` },
        { status: 409 }
      );
    }

    // Attempt to scrape structured data from the URL
    const scraped = await scrapeHtmlPage(url.trim());

    // Build job record — merge scraped data if available
    const jobRecord: Record<string, unknown> = {
      slug,
      title: title.trim(),
      organization: organization.trim(),
      category,
      state: state || "all-india",
      official_link: url.trim(),
      notification_link: url.trim(),
      description: scraped?.description || title.trim().slice(0, 200),
      content: "",
      is_active: false,
      quality_flag: ["manual_draft"],
      vacancies: scraped?.vacancies || 0,
      last_date: scraped?.last_date || "",
      salary: scraped?.salary || "",
      post_name: scraped?.post_name || "",
      qualification: scraped?.qualification || "",
      completeness_score: scraped?.completeness_score || 0,
    };

    // Only set JSONB fields if they have data (avoid empty objects in DB)
    if (scraped) {
      if (Object.keys(scraped.eligibility).length > 0) {
        jobRecord.eligibility = scraped.eligibility;
      }
      if (Object.keys(scraped.application_fee).length > 0) {
        jobRecord.application_fee = scraped.application_fee;
      }
      if (Object.keys(scraped.important_dates).length > 0) {
        jobRecord.important_dates = scraped.important_dates;
      }
      if (scraped.selection_process.length > 0) {
        jobRecord.selection_process = scraped.selection_process;
      }
      if (scraped.how_to_apply) {
        jobRecord.how_to_apply = scraped.how_to_apply;
      }
    }

    const { data, error } = await supabaseAdmin
      .from("jobs")
      .insert(jobRecord)
      .select("id")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      jobId: data.id,
      slug,
      completeness_score: jobRecord.completeness_score,
      scraped: scraped !== null,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
