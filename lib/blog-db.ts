import type { Guide, FAQItem } from "@/lib/guides";
import { activeBlogPosts, blogPostBySlug, eqi } from "@/lib/static-data";

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
  // Guarded because a row can carry an empty or missing body.
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

// Content now ships in data/blog_posts.json, bundled at build time rather than
// fetched per render. See lib/static-data.ts for why.
export async function getPublishedDbPosts(): Promise<Guide[]> {
  return activeBlogPosts().map((r) => dbPostToGuide(r as unknown as DbBlogPost));
}

export async function getPostsByAuthor(author: string): Promise<Guide[]> {
  return activeBlogPosts()
    .filter((r) => eqi(r.author, author))
    .map((r) => dbPostToGuide(r as unknown as DbBlogPost));
}

export async function getDbPostBySlug(slug: string): Promise<Guide | null> {
  const row = blogPostBySlug(slug);
  return row ? dbPostToGuide(row as unknown as DbBlogPost) : null;
}
