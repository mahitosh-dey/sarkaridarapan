// =============================================================================
// Content Utilities - SarkariDarapan
// Reads content from Supabase PostgreSQL
// =============================================================================

import { unstable_cache } from "next/cache";
import { supabase } from "./supabase";
import { REVALIDATE_INTERVAL } from "./constants";
import type { JobPost, SchemePost } from "./types";

// =============================================================================
// Row → Interface mappers (snake_case DB → camelCase TypeScript)
// =============================================================================

/* eslint-disable @typescript-eslint/no-explicit-any */

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

/* eslint-enable @typescript-eslint/no-explicit-any */

// =============================================================================
// Job Posts
// =============================================================================

export const getJobPosts = unstable_cache(
  async (): Promise<JobPost[]> => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching jobs:", error.message);
      return [];
    }

    return (data || []).map(mapJobRow);
  },
  ["all-jobs"],
  { revalidate: REVALIDATE_INTERVAL }
);

export async function getJobBySlug(slug: string): Promise<JobPost | null> {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;

  return mapJobRow(data);
}

// =============================================================================
// Scheme Posts
// =============================================================================

export const getSchemePosts = unstable_cache(
  async (): Promise<SchemePost[]> => {
    const { data, error } = await supabase
      .from("schemes")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching schemes:", error.message);
      return [];
    }

    return (data || []).map(mapSchemeRow);
  },
  ["all-schemes"],
  { revalidate: REVALIDATE_INTERVAL }
);

export async function getSchemeBySlug(
  slug: string
): Promise<SchemePost | null> {
  const { data, error } = await supabase
    .from("schemes")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;

  return mapSchemeRow(data);
}

// =============================================================================
// Filtering
// =============================================================================

export async function getJobsByCategory(category: string): Promise<JobPost[]> {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .ilike("category", category)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching jobs by category:", error.message);
    return [];
  }

  return (data || []).map(mapJobRow);
}

export async function getJobsByState(state: string): Promise<JobPost[]> {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .ilike("state", state)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching jobs by state:", error.message);
    return [];
  }

  return (data || []).map(mapJobRow);
}

export async function getSchemesByCategory(
  category: string
): Promise<SchemePost[]> {
  const { data, error } = await supabase
    .from("schemes")
    .select("*")
    .ilike("category", category)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching schemes by category:", error.message);
    return [];
  }

  return (data || []).map(mapSchemeRow);
}

export async function getSchemesByState(
  state: string
): Promise<SchemePost[]> {
  const { data, error } = await supabase
    .from("schemes")
    .select("*")
    .ilike("state", state)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching schemes by state:", error.message);
    return [];
  }

  return (data || []).map(mapSchemeRow);
}

// =============================================================================
// Aggregation
// =============================================================================

export async function getAllCategories(): Promise<{
  jobs: string[];
  schemes: string[];
}> {
  const [jobsRes, schemesRes] = await Promise.all([
    supabase.from("jobs").select("category").order("category"),
    supabase.from("schemes").select("category").order("category"),
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
    supabase.from("jobs").select("state"),
    supabase.from("schemes").select("state"),
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

  // Try full-text search via RPC first
  const { data: rpcData, error: rpcError } = await supabase.rpc(
    "search_content",
    { search_query: trimmed }
  );

  if (!rpcError && rpcData && rpcData.length > 0) {
    return rpcData.map(
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
      .or(
        `title.ilike.${pattern},description.ilike.${pattern},organization.ilike.${pattern},post_name.ilike.${pattern}`
      )
      .order("published_at", { ascending: false }),
    supabase
      .from("schemes")
      .select("slug, title, description, category, state, published_at")
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
