import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
}

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug: customSlug, description, category, author, tags, content, image, publish } = body;

    if (!title || !description || !category || !content) {
      return NextResponse.json(
        { error: "title, description, category, and content are required" },
        { status: 400 }
      );
    }

    const slug = (customSlug || generateSlug(title)).trim();

    const { data: existing } = await supabaseAdmin
      .from("blog_posts")
      .select("slug")
      .eq("slug", slug)
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: `A blog post with slug '${slug}' already exists` },
        { status: 409 }
      );
    }

    const tagsArray = Array.isArray(tags)
      ? tags
      : (tags || "").split(",").map((t: string) => t.trim()).filter(Boolean);

    const now = new Date().toISOString();

    const record = {
      slug,
      title: title.trim(),
      description: description.trim(),
      category,
      author: (author || "SarkariDarapan Team").trim(),
      tags: tagsArray,
      content: content.trim(),
      image: image || null,
      reading_time: estimateReadingTime(content),
      is_active: !!publish,
      published_at: publish ? now : null,
    };

    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .insert(record)
      .select("id, slug")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, postId: data.id, slug: data.slug });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
