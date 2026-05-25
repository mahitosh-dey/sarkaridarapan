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
    const { title, organization, category, state, content, publish } = body;

    if (!title || !organization || !category || !content) {
      return NextResponse.json(
        { error: "title, organization, category, and content are required" },
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
        { error: `A post with slug '${slug}' already exists` },
        { status: 409 }
      );
    }

    // Calculate reading time from word count (~200 wpm)
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const now = new Date().toISOString();

    const jobRecord: Record<string, unknown> = {
      slug,
      title: title.trim(),
      organization: organization.trim(),
      category,
      state: state || "all-india",
      description: title.trim().slice(0, 200),
      content,
      reading_time: readingTime,
      is_active: !!publish,
      published_at: publish ? now : null,
      quality_flag: ["manual_post"],
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
