// Static content source.
//
// The site used to read every page from Supabase at request and revalidation
// time. On 2026-09-01 that account exceeded its free egress allowance,
// Supabase restricted the project, and the whole site went blank: listing
// pages served zero items, detail pages served "Coming Soon" with a noindex,
// and the sitemap shrank from 216 URLs to 12.
//
// The content itself does not justify that risk. A job page does not change
// between two visitors, so asking a database for it on every render buys
// nothing and costs an egress allowance the project cannot afford.
//
// So the content now lives in data/*.json, committed to the repository and
// bundled at build time. Rendering touches no network at all. Supabase is
// still the authoring database, written through the admin panel; publishing
// means re-exporting to these files and rebuilding.
//
// Rows keep their ORIGINAL snake_case column names so the mappers in
// content.ts and blog-db.ts consume them unchanged.
//
// Regenerate with:  python3 scripts/csv-to-static-json.py

import jobsJson from "@/data/jobs.json";
import schemesJson from "@/data/schemes.json";
import examsJson from "@/data/entrance_exams.json";
import blogJson from "@/data/blog_posts.json";

/* eslint-disable */
export type Row = Record<string, any>;

// Cast away the literal types TypeScript infers from the JSON files. Without
// this every property would be narrowed to its exact value in the data, which
// is both wrong for a data source and very slow to typecheck.
const jobs = jobsJson as unknown as Row[];
const schemes = schemesJson as unknown as Row[];
const exams = examsJson as unknown as Row[];
const blogPosts = blogJson as unknown as Row[];
/* eslint-enable */

// Newest first, matching the previous `.order("published_at", desc)`.
function byPublishedDesc(a: Row, b: Row): number {
  const av = a.published_at || a.created_at || "";
  const bv = b.published_at || b.created_at || "";
  if (av === bv) return 0;
  return av > bv ? -1 : 1;
}

function activeSorted(rows: Row[]): Row[] {
  return rows.filter((r) => r.is_active === true).sort(byPublishedDesc);
}

// Each call returns a fresh array so a caller sorting or splicing the result
// cannot mutate the shared module-level data.
export const activeJobs = (): Row[] => activeSorted(jobs);
export const activeSchemes = (): Row[] => activeSorted(schemes);
export const activeExams = (): Row[] => activeSorted(exams);
export const activeBlogPosts = (): Row[] => activeSorted(blogPosts);

export function findActive(rows: Row[], slug: string): Row | null {
  return rows.find((r) => r.slug === slug && r.is_active === true) ?? null;
}

export const jobBySlug = (slug: string) => findActive(jobs, slug);
export const schemeBySlug = (slug: string) => findActive(schemes, slug);
export const examBySlug = (slug: string) => findActive(exams, slug);
export const blogPostBySlug = (slug: string) => findActive(blogPosts, slug);

// Case-insensitive exact match, replacing PostgREST's .ilike() with no
// wildcard, which is what the previous queries used.
export const eqi = (value: unknown, target: string): boolean =>
  typeof value === "string" && value.toLowerCase() === target.toLowerCase();

// Row counts, used by the build-time guard in app/sitemap.ts. If the data
// files are ever emptied or lost, that guard fails the build instead of
// publishing a site with no content.
export const rowCounts = () => ({
  jobs: jobs.length,
  schemes: schemes.length,
  exams: exams.length,
  blogPosts: blogPosts.length,
});
