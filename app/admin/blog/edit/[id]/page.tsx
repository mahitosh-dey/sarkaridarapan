import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { supabaseAdmin } from "@/lib/supabase-admin";
import EditBlogForm from "./EditBlogForm";

export const metadata: Metadata = {
  title: "Edit Post | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface PageProps {
  params: { id: string };
}

export default async function EditBlogPage({ params }: PageProps) {
  const { data: post, error } = await supabaseAdmin
    .from("blog_posts")
    .select("id, slug, title, description, category, author, tags, content, image")
    .eq("id", params.id)
    .single();

  if (error || !post) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Post</h1>
            <p className="mt-1 text-sm text-gray-500">/blog/{post.slug}</p>
          </div>
          <a
            href="/admin/posts?type=blog"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            ← All Blog Posts
          </a>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-6 py-6">
          <EditBlogForm post={post} />
        </div>
      </div>
    </div>
  );
}
