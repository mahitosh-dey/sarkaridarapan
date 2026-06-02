import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Metadata } from "next";
import PostActions from "./PostActions";

export const metadata: Metadata = {
  title: "All Posts | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;

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

export default async function AllPostsPage({
  searchParams,
}: {
  searchParams: { page?: string; q?: string; status?: string; type?: string };
}) {
  const query = (searchParams.q || "").trim().toLowerCase();
  const status = searchParams.status === "published" ? "published"
    : searchParams.status === "draft" ? "draft"
    : "all";
  const typeFilter = searchParams.type === "job" ? "job"
    : searchParams.type === "scheme" ? "scheme"
    : searchParams.type === "entrance-exam" ? "entrance-exam"
    : "all";
  const page = Math.max(1, parseInt(searchParams.page || "1", 10));

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

  const filteredPosts = allPosts.filter((p) => {
    if (status === "published" && !p.is_active) return false;
    if (status === "draft" && p.is_active) return false;
    if (typeFilter !== "all" && p.contentType !== typeFilter) return false;
    if (query) {
      return (
        p.title.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        (p.category || "").toLowerCase().includes(query) ||
        p.slug.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const publishedCount = allPosts.filter((p) => p.is_active).length;
  const draftCount = allPosts.filter((p) => !p.is_active).length;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Build href preserving search query and status filter
  const pageHref = (p: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (status !== "all") params.set("status", status);
    if (typeFilter !== "all") params.set("type", typeFilter);
    params.set("page", String(p));
    return `?${params.toString()}`;
  };

  const statusHref = (s: string) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (s !== "all") params.set("status", s);
    if (typeFilter !== "all") params.set("type", typeFilter);
    return `?${params.toString()}`;
  };

  const typeHref = (t: string) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (status !== "all") params.set("status", status);
    if (t !== "all") params.set("type", t);
    return `?${params.toString()}`;
  };

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

        {/* Search */}
        <form method="GET" action="/admin/posts" className="mb-4">
          <div className="relative max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search by title, category, or slug…"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
        </form>

        {/* Status filter */}
        <div className="mb-4 flex items-center gap-2">
          {(["all", "published", "draft"] as const).map((s) => {
            const count =
              s === "all"
                ? allPosts.length
                : allPosts.filter((p) =>
                    s === "published" ? p.is_active : !p.is_active
                  ).length;
            const active = status === s;
            const colors: Record<string, string> = {
              all: active
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50",
              published: active
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-green-700 border-green-300 hover:bg-green-50",
              draft: active
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-white text-yellow-700 border-yellow-300 hover:bg-yellow-50",
            };
            return (
              <a
                key={s}
                href={statusHref(s)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border font-medium transition-colors ${colors[s]}`}
              >
                {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? "bg-white/20" : "bg-gray-100 text-gray-500"}`}>
                  {count}
                </span>
              </a>
            );
          })}
        </div>

        {/* Type filter */}
        <div className="mb-4 flex items-center gap-2">
          {([
            { value: "all", label: "All Types" },
            { value: "job", label: "Jobs" },
            { value: "scheme", label: "Schemes" },
            { value: "entrance-exam", label: "Exams" },
          ] as const).map(({ value, label }) => {
            const count =
              value === "all"
                ? allPosts.length
                : allPosts.filter((p) => p.contentType === value).length;
            const active = typeFilter === value;
            const colors: Record<string, string> = {
              all: active
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50",
              job: active
                ? "bg-primary-700 text-white border-primary-700"
                : "bg-white text-primary-700 border-primary-300 hover:bg-primary-50",
              scheme: active
                ? "bg-emerald-700 text-white border-emerald-700"
                : "bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50",
              "entrance-exam": active
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50",
            };
            return (
              <a
                key={value}
                href={typeHref(value)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border font-medium transition-colors ${colors[value]}`}
              >
                {label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? "bg-white/20" : "bg-gray-100 text-gray-500"}`}>
                  {count}
                </span>
              </a>
            );
          })}
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
                {paginatedPosts.map((post) => (
                  <tr key={`${post.contentType}-${post.id}`} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                        {post.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 truncate">
                        {post.subtitle}
                      </div>
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
                {filteredPosts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      {query ? `No posts match "${query}".` : "No posts found."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between flex-wrap gap-3">
              <p className="text-sm text-gray-600">
                Showing {(currentPage - 1) * PAGE_SIZE + 1}–
                {Math.min(currentPage * PAGE_SIZE, filteredPosts.length)} of{" "}
                {filteredPosts.length}{query ? " results" : " posts"}
              </p>
              <div className="flex items-center gap-1">
                <a
                  href={pageHref(currentPage - 1)}
                  aria-disabled={currentPage === 1}
                  className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                    currentPage === 1
                      ? "border-gray-200 text-gray-300 pointer-events-none"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  ← Prev
                </a>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(
                    (p) =>
                      p === 1 ||
                      p === totalPages ||
                      Math.abs(p - currentPage) <= 1
                  )
                  .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                    if (idx > 0 && (arr[idx - 1] as number) < p - 1)
                      acc.push("…");
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((p, idx) =>
                    p === "…" ? (
                      <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 text-sm">
                        …
                      </span>
                    ) : (
                      <a
                        key={p}
                        href={pageHref(p as number)}
                        className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                          p === currentPage
                            ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {p}
                      </a>
                    )
                  )}
                <a
                  href={pageHref(currentPage + 1)}
                  aria-disabled={currentPage === totalPages}
                  className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                    currentPage === totalPages
                      ? "border-gray-200 text-gray-300 pointer-events-none"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Next →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
