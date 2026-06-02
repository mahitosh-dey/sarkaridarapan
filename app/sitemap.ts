import type { MetadataRoute } from "next";
import { getJobPosts, getSchemePosts, getEntranceExamPosts } from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import {
  SITE_URL,
  STATES,
  JOB_CATEGORIES,
  SCHEME_CATEGORIES,
  ENTRANCE_EXAM_CATEGORIES,
} from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                           lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${SITE_URL}/sarkari-naukri`,       lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/sarkari-yojana`,       lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${SITE_URL}/entrance-exams`,       lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
    { url: `${SITE_URL}/blog`,                 lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE_URL}/admit-card`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/results`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/search`,               lastModified: new Date(), changeFrequency: "weekly",  priority: 0.4 },
    { url: `${SITE_URL}/about`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/contact`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/terms-of-service`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

  // Job post pages — fetched fresh from Supabase on every request
  let jobPages: MetadataRoute.Sitemap = [];
  try {
    const jobs = await getJobPosts();
    jobPages = jobs.map((job) => ({
      url: `${SITE_URL}/sarkari-naukri/${job.slug}`,
      lastModified: new Date(job.updatedAt || job.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch { /* skip on error */ }

  // Scheme post pages
  let schemePages: MetadataRoute.Sitemap = [];
  try {
    const schemes = await getSchemePosts();
    schemePages = schemes.map((scheme) => ({
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

  // Blog/Guide pages
  let blogPostPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedDbPosts();
    blogPostPages = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch { /* skip on error */ }

  // Job category pages  (/category/ssc, /category/upsc, …)
  const categoryPages: MetadataRoute.Sitemap = JOB_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Scheme category filter pages  (/sarkari-yojana?category=agriculture, …)
  const schemeCategoryPages: MetadataRoute.Sitemap = SCHEME_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/sarkari-yojana?category=${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // Entrance exam category filter pages  (/entrance-exams?category=engineering, …)
  const examCategoryPages: MetadataRoute.Sitemap = ENTRANCE_EXAM_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/entrance-exams?category=${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // State pages  (/state/uttar-pradesh, …)
  const statePages: MetadataRoute.Sitemap = STATES.map((state) => ({
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
    ...blogPostPages,
    ...categoryPages,
    ...schemeCategoryPages,
    ...examCategoryPages,
    ...statePages,
  ];
}
