import type { Metadata } from "next";
import { NewPostForm } from "./BlogAdminClient";

export const metadata: Metadata = {
  title: "Blog / Guides Admin | SarkariDarapan",
  robots: { index: false, follow: false },
};

export default function BlogAdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Write New Post</h1>
            <p className="mt-1 text-gray-600 text-sm">
              Write your content in Markdown. Use ## headings, **bold**, tables, and lists.
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
              href="/admin/posts?type=blog"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              All Blog Posts
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-6 py-6">
          <NewPostForm />
        </div>
      </div>
    </div>
  );
}
