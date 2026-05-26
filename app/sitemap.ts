import type { MetadataRoute } from "next";
import { getJobPosts, getSchemePosts, getEntranceExamPosts } from "@/lib/content";
import { getAllGuides } from "@/lib/guides";
import { SITE_URL, STATES, JOB_CATEGORIES } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/sarkari-naukri`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/sarkari-yojana`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/entrance-exams`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];

  // Job post pages
  let jobPages: MetadataRoute.Sitemap = [];
  try {
    const jobs = await getJobPosts();
    jobPages = jobs.map((job) => ({
      url: `${SITE_URL}/sarkari-naukri/${job.slug}`,
      lastModified: new Date(job.updatedAt || job.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    jobPages = [];
  }

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
  } catch {
    schemePages = [];
  }

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
  } catch {
    examPages = [];
  }

  // Blog/Guide pages
  const guides = getAllGuides();
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...guides.map((guide) => ({
      url: `${SITE_URL}/blog/${guide.slug}`,
      lastModified: new Date(guide.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  // State pages
  const statePages: MetadataRoute.Sitemap = STATES.map((state) => ({
    url: `${SITE_URL}/state/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = JOB_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...jobPages,
    ...schemePages,
    ...examPages,
    ...blogPages,
    ...statePages,
    ...categoryPages,
  ];
}
