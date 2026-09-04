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
  // Static pages — /search is excluded (has noindex meta)
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                           lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${SITE_URL}/sarkari-naukri`,       lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/sarkari-yojana`,       lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/entrance-exams`,       lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
    { url: `${SITE_URL}/blog`,                 lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE_URL}/admit-card`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/results`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/about`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/contact`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/terms-of-service`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

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
  let examPages: MetadataRoute.Sitemap = [];
  try {
    const exams = await getEntranceExamPosts();
    examPages = exams.filter((exam) => isIndexable(exam, "exam")).map((exam) => ({
      url: `${SITE_URL}/entrance-exams/${exam.slug}`,
      lastModified: new Date(exam.updatedAt || exam.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (e) { rethrowIfUnavailable(e); }

  // Blog/Guide pages — hardcoded guides from guides.ts
  const hardcodedGuidePages: MetadataRoute.Sitemap = getAllGuides().map((guide) => ({
    url: `${SITE_URL}/blog/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Blog/Guide pages — DB posts from Supabase
  let blogPostPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedDbPosts();
    blogPostPages = posts.map((post) => ({
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
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const statePages: MetadataRoute.Sitemap = indexableStates(rawJobs, rawSchemes).map((state) => ({
    url: `${SITE_URL}/state/${state.slug}`,
    lastModified: new Date(),
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
