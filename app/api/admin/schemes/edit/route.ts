import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    const { schemeId, content } = await request.json();

    if (!schemeId || typeof schemeId !== "string") {
      return NextResponse.json({ error: "schemeId is required" }, { status: 400 });
    }

    if (typeof content !== "string") {
      return NextResponse.json({ error: "content is required" }, { status: 400 });
    }

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    const { error } = await supabaseAdmin
      .from("schemes")
      .update({
        content,
        reading_time: readingTime,
      })
      .eq("id", schemeId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, wordCount, readingTime });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
