import type { MetadataRoute } from "next";
import {
  getJobPosts,
  getSchemePosts,
  getEntranceExamPosts,
  rethrowIfUnavailable,
  raiseUnavailable,
} from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { getAllGuides } from "@/lib/guides";
import { isIndexable } from "@/lib/notification-status";
import { indexableCategories, indexableStates } from "@/lib/facet-index";
import { SITE_URL } from "@/lib/constants";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // lastmod is a claim Google checks. Every one of these URLs used to carry
  // `new Date()`, so the sitemap asserted that 28 pages changed TODAY, and did
  // so every day forever. Google measures whether lastmod claims match what it
  // finds; a site that cries wolf teaches it to discount the field, including
  // on the 196 content pages where the date is real. At 10 indexed out of 289
  // there is no crawl signal to spare.
  //
  // Listing pages now inherit the freshest updated_at of the content they list,
  // which is the truth: /sarkari-naukri does change when a job changes.
  // Genuinely static pages carry a fixed date, updated by hand when the page is
  // actually edited.
  const STATIC_PAGE_REVISED = new Date("2026-07-16");

  const freshest = (rows: { updatedAt?: string; publishedAt?: string }[]): Date => {
    let newest = 0;
    for (const r of rows) {
      const t = Date.parse(r.updatedAt || r.publishedAt || "");
      if (!Number.isNaN(t) && t > newest) newest = t;
    }
    return newest ? new Date(newest) : STATIC_PAGE_REVISED;
  };

  // Job post pages — fetched fresh from Supabase on every request
  let rawJobs: import("@/lib/types").JobPost[] = [];
  let jobPages: MetadataRoute.Sitemap = [];
  try {
    rawJobs = await getJobPosts();
    // Never submit a noindex URL. Pre-notification jobs are excluded until the
    // notification lands, then reappear automatically.
    jobPages = rawJobs.filter((job) => isIndexable(job, "job")).map((job) => ({
      url: `${SITE_URL}/sarkari-naukri/${job.slug}`,
      lastModified: new Date(job.updatedAt || job.publishedAt),
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));
  } catch (e) { rethrowIfUnavailable(e); }

  // Scheme post pages
  let rawSchemes: import("@/lib/types").SchemePost[] = [];
  let schemePages: MetadataRoute.Sitemap = [];
  try {
    rawSchemes = await getSchemePosts();
    schemePages = rawSchemes.filter((scheme) => isIndexable(scheme, "scheme")).map((scheme) => ({
      url: `${SITE_URL}/sarkari-yojana/${scheme.slug}`,
      lastModified: new Date(scheme.updatedAt || scheme.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (e) { rethrowIfUnavailable(e); }

  // Entrance exam pages
  let rawExams: import("@/lib/types").EntranceExamPost[] = [];
  let examPages: MetadataRoute.Sitemap = [];
  try {
    rawExams = await getEntranceExamPosts();
    examPages = rawExams.filter((exam) => isIndexable(exam, "exam")).map((exam) => ({
      url: `${SITE_URL}/entrance-exams/${exam.slug}`,
      lastModified: new Date(exam.updatedAt || exam.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (e) { rethrowIfUnavailable(e); }

  // Blog/Guide pages — hardcoded guides from guides.ts
  const hardcodedGuidePages: MetadataRoute.Sitemap = getAllGuides().map((guide) => ({
    url: `${SITE_URL}/blog/${guide.slug}`,
    lastModified: STATIC_PAGE_REVISED,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Blog/Guide pages — DB posts from Supabase
  let rawBlogPosts: Awaited<ReturnType<typeof getPublishedDbPosts>> = [];
  let blogPostPages: MetadataRoute.Sitemap = [];
  try {
    rawBlogPosts = await getPublishedDbPosts();
    blogPostPages = rawBlogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (e) { rethrowIfUnavailable(e); }

  // Threshold must match the noindex threshold in
  // app/state/[state]/page.tsx and app/category/[category]/page.tsx —
  // otherwise the sitemap advertises noindexed pages, which trips
  // "Noindex page in sitemap" audit warnings and wastes crawl budget.
  // Category pages count jobs only. State pages count jobs + schemes since
  // the state view renders both.
  // Built here, after the content fetches, so listing pages can inherit real
  // dates from the content they list.
  const jobsFresh = freshest(rawJobs);
  const schemesFresh = freshest(rawSchemes);
  const examsFresh = freshest(rawExams);
  const blogFresh = freshest(rawBlogPosts);
  const siteFresh = new Date(Math.max(
    jobsFresh.getTime(), schemesFresh.getTime(), examsFresh.getTime(), blogFresh.getTime()
  ));

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                       lastModified: siteFresh,           changeFrequency: "daily",   priority: 1.0 },
    { url: `${SITE_URL}/sarkari-naukri`,   lastModified: jobsFresh,           changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/sarkari-yojana`,   lastModified: schemesFresh,        changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/entrance-exams`,   lastModified: examsFresh,          changeFrequency: "daily",   priority: 0.8 },
    { url: `${SITE_URL}/blog`,             lastModified: blogFresh,           changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE_URL}/admit-card`,       lastModified: jobsFresh,           changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/results`,          lastModified: jobsFresh,           changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/about`,            lastModified: STATIC_PAGE_REVISED, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/contact`,          lastModified: STATIC_PAGE_REVISED, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy`,   lastModified: STATIC_PAGE_REVISED, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`,       lastModified: STATIC_PAGE_REVISED, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/terms-of-service`, lastModified: STATIC_PAGE_REVISED, changeFrequency: "yearly",  priority: 0.2 },
  ];

  // Guard against publishing a gutted sitemap.
  //
  // On 2026-09-01 a build ran while Supabase was cut off, every content fetch
  // came back empty, and the sitemap deployed with 12 static URLs instead of
  // 216. Google was handed a sitemap that had silently dropped every job,
  // scheme, exam and blog URL. Failing here instead means the build fails and
  // the previous deployment, with its intact sitemap, stays live.
  const contentUrlCount =
    jobPages.length + schemePages.length + examPages.length + blogPostPages.length;
  if (contentUrlCount === 0) {
    raiseUnavailable(
      "sitemap",
      "no job, scheme, exam or blog URLs resolved; refusing to publish a static-only sitemap"
    );
  }

  // Threshold lives in lib/facet-index.ts so the sitemap, the pages' own
  // robots policies and the homepage's internal links cannot drift apart.
  const categoryPages: MetadataRoute.Sitemap = indexableCategories(rawJobs).map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    lastModified: freshest(rawJobs.filter((j) => j.category === cat.slug)),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const statePages: MetadataRoute.Sitemap = indexableStates(rawJobs, rawSchemes).map((state) => ({
    url: `${SITE_URL}/state/${state.slug}`,
    lastModified: freshest([
      ...rawJobs.filter((j) => j.state === state.slug),
      ...rawSchemes.filter((sc) => sc.state === state.slug),
    ]),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...jobPages,
    ...schemePages,
    ...examPages,
    ...hardcodedGuidePages,
    ...blogPostPages,
    ...categoryPages,
    ...statePages,
  ];
}
