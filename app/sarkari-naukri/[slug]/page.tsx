import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import JobDetail from "@/components/content/JobDetail";
import MarkdownContent from "@/components/content/MarkdownContent";
import JobCard from "@/components/ui/JobCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Sidebar from "@/components/layout/Sidebar";
import InArticleAd from "@/components/ads/InArticleAd";
import JsonLd from "@/components/seo/JsonLd";
import GuideCard from "@/components/GuideCard";
import { getJobPosts, getJobBySlug } from "@/lib/content";
import { getRelatedGuidesForJob } from "@/lib/guides";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { jobToBlogs } from "@/lib/related-links";
import { SITE_NAME, SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";

// Converts any stored date string to YYYY-MM-DD for schema.org.
// Handles ISO timestamps, YYYY-MM-DD, DD/MM/YYYY, DD.MM.YYYY.
function toIsoDate(raw: string | null | undefined): string | undefined {
  if (!raw?.trim()) return undefined;
  const s = raw.trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const slash = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
  if (slash) return `${slash[3]}-${slash[2].padStart(2, "0")}-${slash[1].padStart(2, "0")}`;
  const dot = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s);
  if (dot) return `${dot[3]}-${dot[2].padStart(2, "0")}-${dot[1].padStart(2, "0")}`;
  return undefined;
}

// Extracts unique ₹ amounts from a salary string to build a schema.org range.
// Uses the smallest and largest distinct values found so repeated figures
// (e.g. "₹88,635 basic … pay scale ₹88,635 — ₹1,69,025") produce a proper range.
// Returns {value} when only one distinct amount exists, null when none found.
function parseSalary(raw: string | null | undefined): Record<string, unknown> | null {
  if (!raw) return null;
  const nums = [...new Set(
    [...raw.matchAll(/₹\s*([\d,]+)/g)]
      .map((m) => parseInt(m[1].replace(/,/g, ""), 10))
      .filter((n) => !isNaN(n) && n > 0)
  )].sort((a, b) => a - b);
  if (nums.length === 0) return null;
  return {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: {
      "@type": "QuantitativeValue",
      ...(nums.length >= 2
        ? { minValue: nums[0], maxValue: nums[nums.length - 1] }
        : { value: nums[0] }),
      unitText: "MONTH",
    },
  };
}

export const revalidate = REVALIDATE_INTERVAL;

interface JobPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const jobs = await getJobPosts();
    return jobs.map((job) => ({
      slug: job.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  try {
    const job = await getJobBySlug(params.slug);
    if (!job) return { title: "Job Not Found" };

    const post = job.postName || job.title;
    const org = job.organization || "Government of India";
    const salaryPart = job.salary ? ` Salary: ${job.salary}.` : "";
    const description = `${job.title} - Apply for ${post} at ${org}.${salaryPart} Check eligibility, dates and how to apply at SarkariDarpan.`;

    return {
      title: job.title,
      description,
      alternates: {
        canonical: `${SITE_URL}/sarkari-naukri/${params.slug}`,
      },
      openGraph: {
        title: `${job.title} | ${SITE_NAME}`,
        description,
        url: `${SITE_URL}/sarkari-naukri/${params.slug}`,
        type: "article",
        publishedTime: job.publishedAt,
        modifiedTime: job.updatedAt,
        images: [{ url: job.image || `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: job.title,
        description,
      },
    };
  } catch {
    return { title: "Job Not Found" };
  }
}

export default async function JobPage({ params }: JobPageProps) {
  let job;
  try {
    job = await getJobBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!job) {
    notFound();
  }

  // Fetch related jobs from same category
  let relatedJobs: import("@/lib/types").JobPost[] = [];
  try {
    const allJobs = await getJobPosts();
    relatedJobs = allJobs
      .filter((j) => j.category === job.category && j.slug !== job.slug)
      .slice(0, 4);
  } catch {
    relatedJobs = [];
  }

  // Merge DB blog posts from static mapping with category-based hardcoded guides
  const hardcodedGuides = getRelatedGuidesForJob(job.category);
  let relatedGuides = hardcodedGuides;
  try {
    const blogSlugs = jobToBlogs[params.slug] ?? [];
    if (blogSlugs.length > 0) {
      const allDbPosts = await getPublishedDbPosts();
      const dbGuides = allDbPosts.filter((b) => blogSlugs.includes(b.slug));
      const seen = new Set(dbGuides.map((g) => g.slug));
      relatedGuides = [...dbGuides, ...hardcodedGuides.filter((g) => !seen.has(g.slug))].slice(0, 4);
    }
  } catch {
    relatedGuides = hardcodedGuides;
  }

  const breadcrumbs = [
    { label: "Sarkari Naukri", href: "/sarkari-naukri" },
    { label: job.title },
  ];

  // Prefer the importantDates.lastDate column; fall back to the top-level lastDate.
  // If no last date exists, default to 1 year from posting (Google recommends validThrough).
  const validThrough =
    toIsoDate(job.importantDates?.lastDate) ??
    toIsoDate(job.lastDate) ??
    new Date(new Date(job.publishedAt ?? Date.now()).getTime() + 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

  const baseSalary = parseSalary(job.salary);

  // addressLocality = most specific location we have (state or national capital for central govt)
  // Normalise "all-india" / "All India" / "all india" variants to New Delhi.
  const isAllIndia = !job.state || job.state.toLowerCase().replace(/-/g, " ").trim() === "all india";
  const addressLocality = isAllIndia ? "New Delhi" : job.state;

  const jobPostingSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: toIsoDate(job.publishedAt) ?? job.publishedAt,
    validThrough,
    url: `${SITE_URL}/sarkari-naukri/${params.slug}`,
    identifier: {
      "@type": "PropertyValue",
      name: job.organization || SITE_NAME,
      value: job.slug,
    },
    employmentType: job.employmentType || "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.organization || "Government of India",
      sameAs: job.officialLink || SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality,
        addressRegion: job.state || "Delhi",
        addressCountry: "IN",
      },
    },
    directApply: false,
  };

  // Only include optional fields when they have real values — schema validators
  // reject null/undefined entries for required sub-fields.
  if (baseSalary) jobPostingSchema.baseSalary = baseSalary;
  if (job.qualification) jobPostingSchema.qualifications = job.qualification;
  if (job.vacancies > 0) jobPostingSchema.totalJobOpenings = job.vacancies;
  if (job.applyLink) jobPostingSchema.applicationContact = {
    "@type": "ContactPoint",
    url: job.applyLink,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <JsonLd data={jobPostingSchema} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <JobDetail job={job} />

              {/* AI-generated article content */}
              {job.content && job.content.trim() !== "" && (
                <section className="mt-8 border-t border-gray-200 pt-8">
                  <MarkdownContent content={job.content} />
                </section>
              )}

              {/* In-Article Ad */}
              <InArticleAd className="my-8" />
            </div>
          </article>

          {/* Related Jobs */}
          {relatedJobs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Government Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedJobs.map((relJob) => (
                  <JobCard key={relJob.slug} job={relJob} />
                ))}
              </div>
            </section>
          )}

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides & Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedGuides.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <Suspense fallback={<div className="w-full animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />}>
            <Sidebar />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
