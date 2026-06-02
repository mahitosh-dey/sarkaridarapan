// =============================================================================
// Content Utilities - SarkariDarapan
// Reads content from Supabase PostgreSQL
// =============================================================================

import { unstable_cache } from "next/cache";
import { supabaseContent as supabase } from "./supabase-content";
import { REVALIDATE_INTERVAL } from "./constants";
import type { JobPost, SchemePost, EntranceExamPost } from "./types";

// =============================================================================
// Row → Interface mappers (snake_case DB → camelCase TypeScript)
// =============================================================================

/* eslint-disable */

function mapJobRow(row: any): JobPost {
  return {
    slug: row.slug,
    title: row.title,
    organization: row.organization || "",
    postName: row.post_name || "",
    vacancies: row.vacancies || 0,
    eligibility: row.eligibility || {},
    salary: row.salary || "",
    applicationFee: row.application_fee ?? "",
    importantDates: row.important_dates || {},
    howToApply: row.how_to_apply || "",
    selectionProcess: row.selection_process ?? "",
    officialLink: row.official_link || "",
    notificationLink: row.notification_link || "",
    applyLink: row.apply_link || "",
    category: row.category || "",
    state: row.state || "",
    isActive: row.is_active ?? true,
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at || "",
    description: row.description || "",
    content: row.content || "",
    readingTime: row.reading_time || "",
    image: row.image || undefined,
    lastDate: row.last_date || undefined,
    qualification: row.qualification || undefined,
    employmentType: row.employment_type || undefined,
    qualityFlag: row.quality_flag || null,
    reviewedAt: row.reviewed_at || null,
  };
}

function mapSchemeRow(row: any): SchemePost {
  return {
    slug: row.slug,
    title: row.title,
    ministry: row.ministry || "",
    launchedBy: row.launched_by || "",
    objective: row.objective || "",
    eligibility: row.eligibility || [],
    benefits: row.benefits || [],
    documents: row.documents || [],
    howToApply: row.how_to_apply || "",
    officialPortal: row.official_portal || "",
    helplineNumber: row.helpline_number || "",
    category: row.category || "",
    state: row.state || "",
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at || "",
    description: row.description || "",
    content: row.content || "",
    readingTime: row.reading_time || "",
    image: row.image || undefined,
    faqs: row.faqs || undefined,
  };
}

function mapEntranceExamRow(row: any): EntranceExamPost {
  return {
    slug: row.slug,
    title: row.title,
    conductingBody: row.conducting_body || "",
    examDate: row.exam_date || "",
    applicationStart: row.application_start || "",
    applicationEnd: row.application_end || "",
    eligibility: row.eligibility || "",
    syllabus: row.syllabus || "",
    examPattern: row.exam_pattern || null,
    admitCardLink: row.admit_card_link || "",
    resultLink: row.result_link || "",
    officialLink: row.official_link || "",
    category: row.category || "",
    state: row.state || "",
    content: row.content || "",
    description: row.description || "",
    isActive: row.is_active ?? true,
    publishedAt: row.published_at || "",
    updatedAt: row.updated_at || "",
    readingTime: row.reading_time || "",
    image: row.image || undefined,
    qualityFlag: row.quality_flag || null,
    reviewedAt: row.reviewed_at || null,
  };
}

/* eslint-enable */

// =============================================================================
// Job Posts — filtered by is_active=true (column exists on jobs table)
// =============================================================================

export const getJobPosts = unstable_cache(
  async (): Promise<JobPost[]> => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("is_active", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching jobs:", error.message);
      return [];
    }

    return (data || []).map(mapJobRow);
  },
  ["all-jobs"],
  { revalidate: REVALIDATE_INTERVAL, tags: ["jobs"] }
);

export async function getJobBySlug(slug: string): Promise<JobPost | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (error || !data) return null;

      return mapJobRow(data);
    },
    [`job-${slug}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

// =============================================================================
// Scheme Posts — filtered by is_active=true
// =============================================================================

export const getSchemePosts = unstable_cache(
  async (): Promise<SchemePost[]> => {
    const { data, error } = await supabase
      .from("schemes")
      .select("*")
      .eq("is_active", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching schemes:", error.message);
      return [];
    }

    return (data || []).map(mapSchemeRow);
  },
  ["all-schemes"],
  { revalidate: REVALIDATE_INTERVAL, tags: ["schemes"] }
);

export async function getSchemeBySlug(
  slug: string
): Promise<SchemePost | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("schemes")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (error || !data) return null;

      return mapSchemeRow(data);
    },
    [`scheme-${slug}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

// =============================================================================
// Filtering
// =============================================================================

export async function getJobsByCategory(category: string): Promise<JobPost[]> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("is_active", true)
        .ilike("category", category)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching jobs by category:", error.message);
        return [];
      }

      return (data || []).map(mapJobRow);
    },
    [`jobs-category-${category}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

export async function getJobsByState(state: string): Promise<JobPost[]> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("is_active", true)
        .ilike("state", state)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching jobs by state:", error.message);
        return [];
      }

      return (data || []).map(mapJobRow);
    },
    [`jobs-state-${state}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

export async function getSchemesByCategory(
  category: string
): Promise<SchemePost[]> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("schemes")
        .select("*")
        .eq("is_active", true)
        .ilike("category", category)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching schemes by category:", error.message);
        return [];
      }

      return (data || []).map(mapSchemeRow);
    },
    [`schemes-category-${category}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

export async function getSchemesByState(
  state: string
): Promise<SchemePost[]> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("schemes")
        .select("*")
        .eq("is_active", true)
        .ilike("state", state)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching schemes by state:", error.message);
        return [];
      }

      return (data || []).map(mapSchemeRow);
    },
    [`schemes-state-${state}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

// =============================================================================
// Entrance Exam Posts — filtered by is_active=true
// =============================================================================

export const getEntranceExamPosts = unstable_cache(
  async (): Promise<EntranceExamPost[]> => {
    const { data, error } = await supabase
      .from("entrance_exams")
      .select("*")
      .eq("is_active", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching entrance exams:", error.message);
      return [];
    }

    return (data || []).map(mapEntranceExamRow);
  },
  ["all-entrance-exams"],
  { revalidate: REVALIDATE_INTERVAL, tags: ["entrance-exams"] }
);

export async function getEntranceExamBySlug(
  slug: string
): Promise<EntranceExamPost | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("entrance_exams")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

      if (error || !data) return null;

      return mapEntranceExamRow(data);
    },
    [`exam-${slug}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

export async function getEntranceExamsByCategory(
  category: string
): Promise<EntranceExamPost[]> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("entrance_exams")
        .select("*")
        .eq("is_active", true)
        .ilike("category", category)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching exams by category:", error.message);
        return [];
      }

      return (data || []).map(mapEntranceExamRow);
    },
    [`exams-category-${category}`],
    { revalidate: REVALIDATE_INTERVAL }
  )();
}

// =============================================================================
// Aggregation
// =============================================================================

export async function getAllCategories(): Promise<{
  jobs: string[];
  schemes: string[];
}> {
  const [jobsRes, schemesRes] = await Promise.all([
    supabase.from("jobs").select("category").eq("is_active", true).order("category"),
    supabase.from("schemes").select("category").eq("is_active", true).order("category"),
  ]);

  const jobCategories = [
    ...new Set(
      (jobsRes.data || []).map((r: { category: string }) => r.category)
    ),
  ].sort();

  const schemeCategories = [
    ...new Set(
      (schemesRes.data || []).map((r: { category: string }) => r.category)
    ),
  ].sort();

  return { jobs: jobCategories, schemes: schemeCategories };
}

export async function getActiveStates(): Promise<string[]> {
  const [jobsRes, schemesRes] = await Promise.all([
    supabase.from("jobs").select("state").eq("is_active", true),
    supabase.from("schemes").select("state").eq("is_active", true),
  ]);

  const states = new Set<string>();
  (jobsRes.data || []).forEach((r: { state: string }) => states.add(r.state));
  (schemesRes.data || []).forEach((r: { state: string }) =>
    states.add(r.state)
  );

  return [...states].sort();
}

// =============================================================================
// Search
// =============================================================================

export async function searchContent(query: string): Promise<
  Array<{
    type: "job" | "scheme";
    slug: string;
    title: string;
    description: string;
    category: string;
    state: string;
    publishedAt: string;
  }>
> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  // Try full-text search via RPC first.
  // The RPC may not filter by is_active internally, so we filter client-side
  // as a safety net to prevent draft content from leaking into results.
  const { data: rpcData, error: rpcError } = await supabase.rpc(
    "search_content",
    { search_query: trimmed }
  );

  if (!rpcError && rpcData && rpcData.length > 0) {
    return rpcData
      .filter((r: { is_active?: boolean }) => r.is_active !== false)
      .map(
        (r: {
          type: string;
          slug: string;
          title: string;
          description: string;
          category: string;
          state: string;
          published_at: string;
        }) => ({
          type: r.type as "job" | "scheme",
          slug: r.slug,
          title: r.title,
          description: r.description,
          category: r.category,
          state: r.state,
          publishedAt: r.published_at,
        })
      );
  }

  // Fallback: ILIKE search for partial word matches
  const pattern = `%${trimmed}%`;

  const [jobsRes, schemesRes] = await Promise.all([
    supabase
      .from("jobs")
      .select("slug, title, description, category, state, published_at")
      .eq("is_active", true)
      .or(
        `title.ilike.${pattern},description.ilike.${pattern},organization.ilike.${pattern},post_name.ilike.${pattern}`
      )
      .order("published_at", { ascending: false }),
    supabase
      .from("schemes")
      .select("slug, title, description, category, state, published_at")
      .eq("is_active", true)
      .or(
        `title.ilike.${pattern},description.ilike.${pattern},ministry.ilike.${pattern}`
      )
      .order("published_at", { ascending: false }),
  ]);

  const jobResults = (jobsRes.data || []).map(
    (r: {
      slug: string;
      title: string;
      description: string;
      category: string;
      state: string;
      published_at: string;
    }) => ({
      type: "job" as const,
      slug: r.slug,
      title: r.title,
      description: r.description,
      category: r.category,
      state: r.state,
      publishedAt: r.published_at,
    })
  );

  const schemeResults = (schemesRes.data || []).map(
    (r: {
      slug: string;
      title: string;
      description: string;
      category: string;
      state: string;
      published_at: string;
    }) => ({
      type: "scheme" as const,
      slug: r.slug,
      title: r.title,
      description: r.description,
      category: r.category,
      state: r.state,
      publishedAt: r.published_at,
    })
  );

  return [...jobResults, ...schemeResults].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
