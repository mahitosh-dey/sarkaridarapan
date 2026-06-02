import type { Metadata } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { NewPostForm, PostRowActions } from "./BlogAdminClient";

export const metadata: Metadata = {
  title: "Blog / Guides Admin | SarkariDarapan",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  is_active: boolean;
  published_at: string | null;
  updated_at: string;
  reading_time: string;
}

export default async function BlogAdminPage() {
  const { data: posts, error } = await supabaseAdmin
    .from("blog_posts")
    .select("id, slug, title, category, author, is_active, published_at, updated_at, reading_time")
    .order("updated_at", { ascending: false });

  const allPosts: BlogPost[] = (posts as BlogPost[]) || [];
  const published = allPosts.filter((p) => p.is_active);
  const drafts = allPosts.filter((p) => !p.is_active);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Blog / Guides</h1>
            <p className="mt-1 text-gray-600 text-sm">
              {published.length} published &middot; {drafts.length} draft{drafts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/admin/quality-check"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Quality Check
            </a>
            <a
              href="/admin/posts"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              All Posts
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
            Error loading posts: {error.message}
          </div>
        )}

        {/* Write New Post */}
        <section className="mb-10">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Write New Post</h2>
              <p className="mt-0.5 text-sm text-gray-500">
                Write your content in Markdown. Use ## headings, **bold**, tables, and lists.
              </p>
            </div>
            <div className="px-6 py-5">
              <NewPostForm />
            </div>
          </div>
        </section>

        {/* Existing Posts */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Posts</h2>

          {allPosts.length === 0 ? (
            <div className="bg-white rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <p className="text-gray-500">No posts yet. Write your first post above.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {allPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          post.is_active
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {post.is_active ? "Published" : "Draft"}
                      </span>
                      <span className="text-xs text-indigo-600 font-medium">{post.category}</span>
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-gray-900 truncate">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {post.author} &middot; {post.reading_time} &middot; /blog/{post.slug} &middot; Updated{" "}
                      {new Date(post.updated_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <PostRowActions post={post} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
