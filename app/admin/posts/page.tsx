import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Metadata } from "next";
import PostActions from "./PostActions";

export const metadata: Metadata = {
  title: "All Posts | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type ContentType = "job" | "scheme" | "entrance-exam";

interface PostItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  is_active: boolean;
  published_at: string | null;
  updated_at: string;
  category: string | null;
  contentType: ContentType;
}

export default async function AllPostsPage() {
  const [jobsRes, schemesRes, examsRes] = await Promise.all([
    supabaseAdmin
      .from("jobs")
      .select(
        "id, slug, title, organization, is_active, published_at, updated_at, category"
      )
      .order("updated_at", { ascending: false }),
    supabaseAdmin
      .from("schemes")
      .select(
        "id, slug, title, ministry, is_active, published_at, updated_at, category"
      )
      .order("updated_at", { ascending: false }),
    supabaseAdmin
      .from("entrance_exams")
      .select(
        "id, slug, title, conducting_body, is_active, published_at, updated_at, category"
      )
      .order("updated_at", { ascending: false }),
  ]);

  const error = jobsRes.error || schemesRes.error || examsRes.error;

  type DbRow = Record<string, string | boolean | null>;

  const jobs: PostItem[] = (jobsRes.data || []).map((r: DbRow) => ({
    id: r.id as string,
    slug: r.slug as string,
    title: r.title as string,
    subtitle: (r.organization as string) || "No organization",
    is_active: r.is_active as boolean,
    published_at: r.published_at as string | null,
    updated_at: r.updated_at as string,
    category: r.category as string | null,
    contentType: "job" as ContentType,
  }));

  const schemes: PostItem[] = (schemesRes.data || []).map((r: DbRow) => ({
    id: r.id as string,
    slug: r.slug as string,
    title: r.title as string,
    subtitle: (r.ministry as string) || "No ministry",
    is_active: r.is_active as boolean,
    published_at: r.published_at as string | null,
    updated_at: r.updated_at as string,
    category: r.category as string | null,
    contentType: "scheme" as ContentType,
  }));

  const exams: PostItem[] = (examsRes.data || []).map((r: DbRow) => ({
    id: r.id as string,
    slug: r.slug as string,
    title: r.title as string,
    subtitle: (r.conducting_body as string) || "No conducting body",
    is_active: r.is_active as boolean,
    published_at: r.published_at as string | null,
    updated_at: r.updated_at as string,
    category: r.category as string | null,
    contentType: "entrance-exam" as ContentType,
  }));

  const allPosts = [...jobs, ...schemes, ...exams].sort(
    (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  const publishedCount = allPosts.filter((p) => p.is_active).length;
  const draftCount = allPosts.filter((p) => !p.is_active).length;

  const typeBadge: Record<ContentType, { label: string; className: string }> = {
    job: {
      label: "Job",
      className: "bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20",
    },
    scheme: {
      label: "Scheme",
      className: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20",
    },
    "entrance-exam": {
      label: "Exam",
      className: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20",
    },
  };

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
              {allPosts.length} total &middot;{" "}
              <span className="text-green-700">{publishedCount} published</span>{" "}
              &middot;{" "}
              <span className="text-yellow-700">{draftCount} drafts</span>
            </p>
          </div>
          <a
            href="/admin/quality-check"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Quality Check Dashboard
          </a>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Type
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
                {allPosts.map((post) => (
                  <tr key={`${post.contentType}-${post.id}`} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                        {post.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 truncate">
                        {post.subtitle}
                      </div>
                      {/* Type badge on mobile */}
                      <span className={`mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium lg:hidden ${typeBadge[post.contentType].className}`}>
                        {typeBadge[post.contentType].label}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeBadge[post.contentType].className}`}>
                        {typeBadge[post.contentType].label}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-600">
                        {post.category || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.is_active ? (
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
                      {new Date(post.updated_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <PostActions
                        itemId={post.id}
                        slug={post.slug}
                        isActive={post.is_active}
                        contentType={post.contentType}
                      />
                    </td>
                  </tr>
                ))}
                {allPosts.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
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
