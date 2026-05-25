import { supabaseAdmin } from "@/lib/supabase-admin";
import type { Metadata } from "next";
import { Suspense } from "react";
import type { ContentType } from "@/lib/admin-utils";
import AdminActions from "./AdminActions";
import ManualJobForm from "./ManualJobForm";
import ManualSchemeForm from "./ManualSchemeForm";
import ManualExamForm from "./ManualExamForm";
import TabNav from "./TabNav";

export const metadata: Metadata = {
  title: "Quality Check Dashboard | SarkariDarapan Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface DashboardItem {
  id: string;
  slug: string;
  title: string;
  organization?: string;
  ministry?: string;
  conducting_body?: string;
  quality_flag: string[] | null;
  updated_at: string;
  completeness_score: number | null;
  content: string | null;
}

function FlagBadges({ flags }: { flags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {flags.map((flag, i) => {
        let color = "bg-yellow-100 text-yellow-800";
        if (flag === "no_issues") {
          color = "bg-green-100 text-green-800";
        } else if (flag.includes("hallucinated") || flag.includes("salary_mismatch")) {
          color = "bg-red-100 text-red-800";
        } else if (flag.includes("word_count")) {
          color = "bg-orange-100 text-orange-800";
        } else if (flag.includes("official_link")) {
          color = "bg-blue-100 text-blue-800";
        } else if (flag === "manual_draft") {
          color = "bg-purple-100 text-purple-800";
        }
        return (
          <span
            key={i}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}

function getSubtitle(item: DashboardItem, tab: string): string {
  const label =
    tab === "jobs"
      ? item.organization || "No organization"
      : tab === "schemes"
        ? item.ministry || "No ministry"
        : item.conducting_body || "No conducting body";

  const date = new Date(item.updated_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return `${label} \u00B7 Score: ${item.completeness_score ?? "N/A"} \u00B7 Updated: ${date}`;
}

function ItemCard({
  item,
  showGenerate,
  contentType,
  tab,
}: {
  item: DashboardItem;
  showGenerate: boolean;
  contentType: ContentType;
  tab: string;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {getSubtitle(item, tab)}
          </p>
          {item.quality_flag && item.quality_flag.length > 0 && (
            <FlagBadges flags={item.quality_flag} />
          )}
        </div>
        <AdminActions
          itemId={item.id}
          slug={item.slug}
          hasContent={!showGenerate}
          contentType={contentType}
        />
      </div>
    </div>
  );
}

const TAB_CONFIG: Record<string, { table: string; contentType: ContentType; selectCols: string; typeLabel: string }> = {
  jobs: {
    table: "jobs",
    contentType: "job",
    selectCols: "id, slug, title, organization, quality_flag, updated_at, completeness_score, content",
    typeLabel: "job",
  },
  schemes: {
    table: "schemes",
    contentType: "scheme",
    selectCols: "id, slug, title, ministry, quality_flag, updated_at, completeness_score, content",
    typeLabel: "scheme",
  },
  exams: {
    table: "entrance_exams",
    contentType: "entrance-exam",
    selectCols: "id, slug, title, conducting_body, quality_flag, updated_at, completeness_score, content",
    typeLabel: "exam",
  },
};

interface PageProps {
  searchParams: { tab?: string };
}

export default async function QualityCheckPage({ searchParams }: PageProps) {
  const tab = searchParams.tab || "jobs";
  const config = TAB_CONFIG[tab] || TAB_CONFIG.jobs;

  const { data: items, error } = await supabaseAdmin
    .from(config.table)
    .select(config.selectCols)
    .eq("is_active", false)
    .is("reviewed_at", null)
    .not("quality_flag", "is", null)
    .order("updated_at", { ascending: false });

  const allItems: DashboardItem[] = (items as unknown as DashboardItem[]) || [];

  const draftItems = allItems.filter(
    (j) => !j.content || j.content.trim() === ""
  );
  const flaggedItems = allItems.filter(
    (j) => j.content && j.content.trim() !== ""
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Quality Check Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              {draftItems.length} draft{draftItems.length !== 1 ? "s" : ""} pending
              content &middot; {flaggedItems.length} flagged {config.typeLabel}
              {flaggedItems.length !== 1 ? "s" : ""} pending review
            </p>
          </div>
          <a
            href="/admin/posts"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            All Posts
          </a>
        </div>

        {error && (
          <p className="mb-4 text-red-600 text-sm">
            Error loading data: {error.message}
          </p>
        )}

        {/* Tab Navigation */}
        <Suspense fallback={null}>
          <TabNav />
        </Suspense>

        {/* Quick Entry Form */}
        {tab === "jobs" && <ManualJobForm />}
        {tab === "schemes" && <ManualSchemeForm />}
        {tab === "exams" && <ManualExamForm />}

        {/* Section 1: Drafts needing content generation */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Drafts Pending Content
            </h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              {draftItems.length}
            </span>
          </div>
          {draftItems.length === 0 ? (
            <div className="bg-white rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <p className="text-gray-500">
                No drafts pending. Use the form above to add a new {config.typeLabel}, then
                click &quot;Generate Content&quot; to create the article.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {draftItems.map((item) => (
                <ItemCard key={item.id} item={item} showGenerate contentType={config.contentType} tab={tab} />
              ))}
            </div>
          )}
        </section>

        {/* Section 2: Flagged items needing review */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Flagged {config.typeLabel.charAt(0).toUpperCase() + config.typeLabel.slice(1)}s Pending Review
            </h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              {flaggedItems.length}
            </span>
          </div>
          {flaggedItems.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <p className="text-gray-500">
                No flagged {config.typeLabel}s pending review.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {flaggedItems.map((item) => (
                <ItemCard key={item.id} item={item} showGenerate={false} contentType={config.contentType} tab={tab} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
