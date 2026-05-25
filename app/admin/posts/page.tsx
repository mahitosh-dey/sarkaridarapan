import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Metadata } from "next";
import PostActions from "./PostActions";

export const metadata: Metadata = {
  title: "All Posts | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface PostJob {
  id: string;
  slug: string;
  title: string;
  organization: string;
  is_active: boolean;
  published_at: string | null;
  updated_at: string;
  category: string | null;
}

export default async function AllPostsPage() {
  const { data: jobs, error } = await supabaseAdmin
    .from("jobs")
    .select(
      "id, slug, title, organization, is_active, published_at, updated_at, category"
    )
    .order("updated_at", { ascending: false });

  const allJobs: PostJob[] = (jobs as PostJob[]) || [];
  const publishedCount = allJobs.filter((j) => j.is_active).length;
  const draftCount = allJobs.filter((j) => !j.is_active).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              All Posts
            </h1>
            <p className="mt-1 text-gray-600">
              {allJobs.length} total &middot;{" "}
              <span className="text-green-700">{publishedCount} published</span>{" "}
              &middot;{" "}
              <span className="text-yellow-700">{draftCount} drafts</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/admin/posts/new"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Write New Post
            </a>
            <a
              href="/admin/quality-check"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Quality Check Dashboard
            </a>
          </div>
        </div>

        {error && (
          <p className="mb-4 text-red-600 text-sm">
            Error loading posts: {error.message}
          </p>
        )}

        {/* Posts Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                        {job.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 truncate">
                        {job.organization || "No organization"}
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-600">
                        {job.category || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {job.is_active ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                      {new Date(job.updated_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <PostActions
                        jobId={job.id}
                        slug={job.slug}
                        isActive={job.is_active}
                      />
                    </td>
                  </tr>
                ))}
                {allJobs.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No posts found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
