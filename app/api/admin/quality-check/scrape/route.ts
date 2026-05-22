import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

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

    const jobRecord = {
      slug,
      title: title.trim(),
      organization: organization.trim(),
      category,
      state: state || "all-india",
      official_link: url.trim(),
      notification_link: url.trim(),
      description: title.trim().slice(0, 200),
      content: "",
      is_active: false,
      completeness_score: 0,
      quality_flag: ["manual_draft"],
      vacancies: 0,
    };

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
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
