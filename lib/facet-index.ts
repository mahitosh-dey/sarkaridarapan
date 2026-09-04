// Which /category/* and /state/* facet pages are worth showing to a crawler.
//
// These pages are generated from fixed lists in constants.ts: 12 job
// categories and 36 states. They exist whether or not any content has landed
// in them, so a large share of them are empty or nearly empty at any time.
//
// Three places have to agree on which ones count:
//
//   1. the page's own robots policy   app/category/[category]/page.tsx
//                                     app/state/[state]/page.tsx
//   2. the sitemap                    app/sitemap.ts
//   3. INTERNAL LINKS                 app/page.tsx
//
// Points 1 and 2 already agreed. Point 3 did not: the homepage linked all 48
// facet pages unconditionally, so the highest-authority page on the site spent
// its internal links pointing at pages it had itself marked noindex.
//
// That has a direct cost. Google discovers those URLs, queues them, and then
// declines to spend crawl budget fetching them. On 2026-09-04 GSC reported 112
// URLs as "discovered, currently not indexed" against 10 indexed. Links from
// the homepage are also how internal PageRank is distributed, so 48 links to
// dead ends dilute the pages that should be receiving it.
//
// Keeping the threshold in one place means a change to it cannot leave the
// sitemap advertising a page the robots policy blocks, or the homepage linking
// a page the sitemap omits.

import { JOB_CATEGORIES, STATES } from "./constants";

// Below this many items a facet page is too thin to be worth indexing.
export const INDEX_THRESHOLD = 3;

type HasCategory = { category?: string | null };
type HasState = { state?: string | null };

// Category pages list jobs only.
export function countJobsByCategory(jobs: HasCategory[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const job of jobs) {
    if (job.category) counts.set(job.category, (counts.get(job.category) ?? 0) + 1);
  }
  return counts;
}

// State pages render jobs AND schemes, so both count toward the threshold.
export function countContentByState(
  jobs: HasState[],
  schemes: HasState[]
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const job of jobs) {
    if (job.state) counts.set(job.state, (counts.get(job.state) ?? 0) + 1);
  }
  for (const scheme of schemes) {
    if (scheme.state) counts.set(scheme.state, (counts.get(scheme.state) ?? 0) + 1);
  }
  return counts;
}

export type FacetLink = {
  slug: string;
  name: string;
  /** Present for categories, which render an emoji on the homepage grid. */
  icon?: string;
  /** Jobs in this facet. What the ordering and the badge use. */
  jobCount: number;
  /** Jobs plus schemes, for states. What the index threshold uses, because a
   *  state page renders both. Equals jobCount for categories. */
  totalCount: number;
};

// Ordered by job count, highest first, so the facets with the most to offer
// lead. Ties fall back to alphabetical for a stable order between builds.
function byJobsDesc(a: FacetLink, b: FacetLink): number {
  return b.jobCount - a.jobCount || a.name.localeCompare(b.name);
}

export function indexableCategories(jobs: HasCategory[]): FacetLink[] {
  const counts = countJobsByCategory(jobs);
  return JOB_CATEGORIES.map((cat) => {
    const n = counts.get(cat.slug) ?? 0;
    return {
      slug: cat.slug,
      name: cat.name,
      icon: (cat as { icon?: string }).icon,
      jobCount: n,
      totalCount: n,
    };
  })
    .filter((c) => c.totalCount >= INDEX_THRESHOLD)
    .sort(byJobsDesc);
}

export function indexableStates(
  jobs: (HasState & HasCategory)[],
  schemes: HasState[]
): FacetLink[] {
  // Threshold counts jobs AND schemes, unchanged: a state page renders both,
  // so a state carried by schemes alone is still a worthwhile page.
  const total = countContentByState(jobs, schemes);

  const jobsOnly = new Map<string, number>();
  for (const job of jobs) {
    if (job.state) jobsOnly.set(job.state, (jobsOnly.get(job.state) ?? 0) + 1);
  }

  return STATES.map((st) => ({
    slug: st.slug,
    name: st.name,
    jobCount: jobsOnly.get(st.slug) ?? 0,
    totalCount: total.get(st.slug) ?? 0,
  }))
    .filter((st) => st.totalCount >= INDEX_THRESHOLD)
    .sort(byJobsDesc);
}
