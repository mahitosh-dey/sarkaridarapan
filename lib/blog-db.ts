import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Guide } from "@/lib/guides";

export interface DbBlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  tags: string[];
  content: string;
  image: string | null;
  reading_time: string;
  is_active: boolean;
  published_at: string | null;
  updated_at: string;
  created_at: string;
}

export function dbPostToGuide(post: DbBlogPost): Guide {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    author: post.author,
    publishedAt: post.published_at || post.created_at,
    updatedAt: post.updated_at,
    image: post.image || undefined,
    content: post.content,
    tags: post.tags || [],
  };
}

export async function getPublishedDbPosts(): Promise<Guide[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .eq("is_active", true)
      .order("published_at", { ascending: false });

    if (error || !data) return [];
    return (data as DbBlogPost[]).map(dbPostToGuide);
  } catch {
    return [];
  }
}

export async function getPostsByAuthor(author: string): Promise<Guide[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .eq("is_active", true)
      .eq("author", author)
      .order("published_at", { ascending: false });

    if (error || !data) return [];
    return (data as DbBlogPost[]).map(dbPostToGuide);
  } catch {
    return [];
  }
}

export async function getDbPostBySlug(slug: string): Promise<Guide | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_active", true)
      .single();

    if (error || !data) return null;
    return dbPostToGuide(data as DbBlogPost);
  } catch {
    return null;
  }
}
