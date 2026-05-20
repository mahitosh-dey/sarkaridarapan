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
import { getJobPosts, getJobBySlug } from "@/lib/content";
import { SITE_NAME, SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";

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
        images: job.image ? [{ url: job.image }] : [],
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

  const breadcrumbs = [
    { label: "Sarkari Naukri", href: "/sarkari-naukri" },
    { label: job.title },
  ];

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.publishedAt,
    validThrough: job.lastDate,
    employmentType: job.employmentType || "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.organization || SITE_NAME,
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: job.state || "India",
        addressCountry: "IN",
      },
    },
    baseSalary: job.salary
      ? {
          "@type": "MonetaryAmount",
          currency: "INR",
          value: {
            "@type": "QuantitativeValue",
            value: job.salary,
            unitText: "MONTH",
          },
        }
      : undefined,
    qualifications: job.qualification,
    totalJobOpenings: job.vacancies,
    applicationContact: {
      "@type": "ContactPoint",
      url: job.applyLink || `${SITE_URL}/sarkari-naukri/${params.slug}`,
    },
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
