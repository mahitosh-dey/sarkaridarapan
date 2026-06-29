import { unstable_cache } from "next/cache";
import { supabaseContent } from "@/lib/supabase-content";
import type { Guide, FAQItem } from "@/lib/guides";

function parseFaqsFromMarkdown(content: string): FAQItem[] | undefined {
  const sectionMatch = content.match(
    /##\s*frequently asked questions\s*\n+([\s\S]*?)(?:\n---|\n##\s|$)/i
  );
  if (!sectionMatch) return undefined;

  const section = sectionMatch[1];
  const faqs: FAQItem[] = [];
  const regex = /\*\*([^*]+?\?)\*\*\n([\s\S]+?)(?=\n\n\*\*|\n\*\*|$)/g;

  let m: RegExpExecArray | null;
  while ((m = regex.exec(section)) !== null) {
    const question = m[1].trim();
    const answer = m[2].trim().replace(/\n+/g, " ");
    if (question && answer) faqs.push({ question, answer });
  }

  return faqs.length > 0 ? faqs : undefined;
}

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
  const faqs = parseFaqsFromMarkdown(post.content);
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
    ...(faqs ? { faqs } : {}),
  };
}

export const getPublishedDbPosts = unstable_cache(
  async (): Promise<Guide[]> => {
    try {
      const { data, error } = await supabaseContent
        .from("blog_posts")
        .select("*")
        .eq("is_active", true)
        .order("published_at", { ascending: false });

      if (error || !data) return [];
      return (data as DbBlogPost[]).map(dbPostToGuide);
    } catch {
      return [];
    }
  },
  ["all-blog-posts"],
  { revalidate: 300, tags: ["blog-posts"] }
);

export async function getPostsByAuthor(author: string): Promise<Guide[]> {
  return unstable_cache(
    async () => {
      try {
        const { data, error } = await supabaseContent
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
    },
    [`blog-posts-author-${author}`],
    { revalidate: 300, tags: ["blog-posts"] }
  )();
}

export async function getDbPostBySlug(slug: string): Promise<Guide | null> {
  return unstable_cache(
    async () => {
      try {
        const { data, error } = await supabaseContent
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
    },
    [`blog-post-${slug}`],
    { revalidate: 300, tags: ["blog-posts", `blog-post-${slug}`] }
  )();
}
