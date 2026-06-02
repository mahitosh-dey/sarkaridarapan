import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId, title, description, category, author, tags, content, image } = body;

    if (!postId) {
      return NextResponse.json({ error: "postId is required" }, { status: 400 });
    }

    const tagsArray = Array.isArray(tags)
      ? tags
      : (tags || "").split(",").map((t: string) => t.trim()).filter(Boolean);

    const updates: Record<string, unknown> = {};
    if (title !== undefined) updates.title = title.trim();
    if (description !== undefined) updates.description = description.trim();
    if (category !== undefined) updates.category = category;
    if (author !== undefined) updates.author = author.trim();
    if (tags !== undefined) updates.tags = tagsArray;
    if (content !== undefined) {
      updates.content = content.trim();
      updates.reading_time = estimateReadingTime(content);
    }
    if (image !== undefined) updates.image = image || null;

    const { error } = await supabaseAdmin
      .from("blog_posts")
      .update(updates)
      .eq("id", postId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
