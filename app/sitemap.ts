import type { MetadataRoute } from "next";
import { getJobPosts, getSchemePosts, getEntranceExamPosts } from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { getAllGuides } from "@/lib/guides";
import {
  SITE_URL,
  STATES,
  JOB_CATEGORIES,
} from "@/lib/constants";

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
    jobPages = rawJobs.map((job) => ({
      url: `${SITE_URL}/sarkari-naukri/${job.slug}`,
      lastModified: new Date(job.updatedAt || job.publishedAt),
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));
  } catch { /* skip on error */ }

  // Scheme post pages
  let rawSchemes: import("@/lib/types").SchemePost[] = [];
  let schemePages: MetadataRoute.Sitemap = [];
  try {
    rawSchemes = await getSchemePosts();
    schemePages = rawSchemes.map((scheme) => ({
      url: `${SITE_URL}/sarkari-yojana/${scheme.slug}`,
      lastModified: new Date(scheme.updatedAt || scheme.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch { /* skip on error */ }

  // Entrance exam pages
  let examPages: MetadataRoute.Sitemap = [];
  try {
    const exams = await getEntranceExamPosts();
    examPages = exams.map((exam) => ({
      url: `${SITE_URL}/entrance-exams/${exam.slug}`,
      lastModified: new Date(exam.updatedAt || exam.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch { /* skip on error */ }

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
  } catch { /* skip on error */ }

  // Threshold must match the noindex threshold in
  // app/state/[state]/page.tsx and app/category/[category]/page.tsx —
  // otherwise the sitemap advertises noindexed pages, which trips
  // "Noindex page in sitemap" audit warnings and wastes crawl budget.
  // Category pages count jobs only. State pages count jobs + schemes since
  // the state view renders both.
  const INDEX_THRESHOLD = 3;

  const jobCountByCategory = new Map<string, number>();
  const contentCountByState = new Map<string, number>();
  for (const job of rawJobs) {
    if (job.category) {
      jobCountByCategory.set(job.category, (jobCountByCategory.get(job.category) ?? 0) + 1);
    }
    if (job.state) {
      contentCountByState.set(job.state, (contentCountByState.get(job.state) ?? 0) + 1);
    }
  }
  for (const scheme of rawSchemes) {
    if (scheme.state) {
      contentCountByState.set(scheme.state, (contentCountByState.get(scheme.state) ?? 0) + 1);
    }
  }

  const categoryPages: MetadataRoute.Sitemap = JOB_CATEGORIES
    .filter((cat) => (jobCountByCategory.get(cat.slug) ?? 0) >= INDEX_THRESHOLD)
    .map((cat) => ({
      url: `${SITE_URL}/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  const statePages: MetadataRoute.Sitemap = STATES
    .filter((state) => (contentCountByState.get(state.slug) ?? 0) >= INDEX_THRESHOLD)
    .map((state) => ({
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
