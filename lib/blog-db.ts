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
  // Optional: list queries project this away, only getDbPostBySlug selects it.
  content?: string;
  image: string | null;
  reading_time: string;
  is_active: boolean;
  published_at: string | null;
  updated_at: string;
  created_at: string;
}

export function dbPostToGuide(post: DbBlogPost): Guide {
  // List queries project `content` away (see BLOG_LIST_COLUMNS), so this runs
  // with content undefined on the list path. Guard both reads.
  const faqs = post.content ? parseFaqsFromMarkdown(post.content) : undefined;
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    author: post.author,
    publishedAt: post.published_at || post.created_at,
    updatedAt: post.updated_at,
    image: post.image || undefined,
    content: post.content ?? "",
    tags: post.tags || [],
    ...(faqs ? { faqs } : {}),
  };
}

// Blog list queries render cards: title, slug, description, category, date.
// They never render the article body. Selecting "*" pulled all ~32 full posts
// on a 300 second TTL, which was the single largest contributor to the
// Supabase egress quota exhaustion on 2026-09-01. getDbPostBySlug still
// selects "*", which is where the body is actually read.
//
// TTL raised from 300s to 1 hour to match the rest of the site. Publishing
// scripts invalidate the "blog-posts" tag directly, so the TTL is only a
// backstop and a longer one does not delay published changes.
const BLOG_LIST_COLUMNS =
  "slug, title, description, category, author, tags, image, published_at, " +
  "updated_at, created_at";

const BLOG_LIST_TTL = 3600;

export const getPublishedDbPosts = unstable_cache(
  async (): Promise<Guide[]> => {
    try {
      const { data, error } = await supabaseContent
        .from("blog_posts")
        .select(BLOG_LIST_COLUMNS)
        .eq("is_active", true)
        .order("published_at", { ascending: false });

      if (error || !data) return [];
      return (data as unknown as DbBlogPost[]).map(dbPostToGuide);
    } catch {
      return [];
    }
  },
  ["all-blog-posts"],
  { revalidate: BLOG_LIST_TTL, tags: ["blog-posts"] }
);

export async function getPostsByAuthor(author: string): Promise<Guide[]> {
  return unstable_cache(
    async () => {
      try {
        const { data, error } = await supabaseContent
          .from("blog_posts")
          .select(BLOG_LIST_COLUMNS)
          .eq("is_active", true)
          .eq("author", author)
          .order("published_at", { ascending: false });

        if (error || !data) return [];
        return (data as unknown as DbBlogPost[]).map(dbPostToGuide);
      } catch {
        return [];
      }
    },
    [`blog-posts-author-${author}`],
    { revalidate: BLOG_LIST_TTL, tags: ["blog-posts"] }
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
