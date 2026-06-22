import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import SchemeDetail from "@/components/content/SchemeDetail";
import MarkdownContent from "@/components/content/MarkdownContent";
import SchemeCard from "@/components/ui/SchemeCard";
import JobCard from "@/components/ui/JobCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Sidebar from "@/components/layout/Sidebar";
import InArticleAd from "@/components/ads/InArticleAd";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import GuideCard from "@/components/GuideCard";
import { getSchemePosts, getSchemeBySlug, getJobsByState } from "@/lib/content";
import { getPublishedDbPosts } from "@/lib/blog-db";
import { schemeToBlogs } from "@/lib/related-links";
import { SITE_NAME, SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";

export const revalidate = REVALIDATE_INTERVAL;

interface SchemePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const schemes = await getSchemePosts();
    return schemes.map((scheme) => ({
      slug: scheme.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: SchemePageProps): Promise<Metadata> {
  try {
    const scheme = await getSchemeBySlug(params.slug);
    if (!scheme) return { title: "Scheme Not Found" };

    return {
      title: scheme.title,
      description: scheme.description || `${scheme.title} - Complete details about this government scheme including eligibility, benefits, and application process.`,
      alternates: {
        canonical: `${SITE_URL}/sarkari-yojana/${params.slug}`,
      },
      openGraph: {
        title: `${scheme.title} | ${SITE_NAME}`,
        description: scheme.description || `${scheme.title} - Eligibility, benefits, and how to apply.`,
        url: `${SITE_URL}/sarkari-yojana/${params.slug}`,
        type: "article",
        publishedTime: scheme.publishedAt,
        modifiedTime: scheme.updatedAt,
        images: [{ url: scheme.image || `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: scheme.title,
        description: scheme.description,
      },
    };
  } catch {
    return { title: "Scheme Not Found" };
  }
}

export default async function SchemePage({ params }: SchemePageProps) {
  let scheme;
  try {
    scheme = await getSchemeBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!scheme) {
    notFound();
  }

  // Determine state for job lookup before parallel fetch
  const isAllIndia =
    !scheme.state ||
    scheme.state.toLowerCase().replace(/-/g, " ").trim() === "all india";
  const jobsState = isAllIndia ? "all-india" : scheme.state;
  const blogSlugs = schemeToBlogs[params.slug] ?? [];

  // Fetch all related content in parallel
  const [allSchemes, allBlogs, stateJobs] = await Promise.all([
    getSchemePosts().catch(() => []),
    blogSlugs.length > 0 ? getPublishedDbPosts().catch(() => []) : Promise.resolve([]),
    getJobsByState(jobsState).catch(() => []),
  ]);

  const relatedSchemes = (allSchemes as import("@/lib/types").SchemePost[])
    .filter((s) => s.category === scheme.category && s.slug !== scheme.slug)
    .slice(0, 4);

  const relatedBlogs = (allBlogs as import("@/lib/guides").Guide[])
    .filter((b) => blogSlugs.includes(b.slug));

  const stateJobsList = (stateJobs as import("@/lib/types").JobPost[]).slice(0, 3);

  const breadcrumbs = [
    { label: "Sarkari Yojana", href: "/sarkari-yojana" },
    { label: scheme.title },
  ];

  // Build FAQPage schema if FAQs exist
  const faqSchema =
    scheme.faqs && scheme.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: scheme.faqs.map((faq: { question: string; answer: string }) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const govtServiceSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: scheme.title,
    description: scheme.objective || scheme.description,
    serviceType: "Government Welfare Scheme",
    provider: {
      "@type": "GovernmentOrganization",
      name: scheme.ministry || "Government of India",
    },
    areaServed: isAllIndia ? "India" : scheme.state,
    url: `${SITE_URL}/sarkari-yojana/${params.slug}`,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: scheme.title,
    description: scheme.description,
    datePublished: scheme.publishedAt,
    dateModified: scheme.verifiedAt || scheme.updatedAt || scheme.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/sarkari-yojana/${params.slug}`,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Sarkari Yojana", url: `${SITE_URL}/sarkari-yojana` },
          { name: scheme.title, url: `${SITE_URL}/sarkari-yojana/${params.slug}` },
        ]}
      />
      <JsonLd data={govtServiceSchema} />
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <SchemeDetail scheme={scheme} />

              {/* AI-generated article content */}
              {scheme.content && scheme.content.trim() !== "" && (
                <section className="mt-8 border-t border-gray-200 pt-8">
                  <MarkdownContent content={scheme.content} />
                </section>
              )}

              {/* In-Article Ad */}
              <InArticleAd className="my-8" />
            </div>
          </article>

          {/* Related Schemes */}
          {relatedSchemes.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Government Schemes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedSchemes.map((relScheme) => (
                  <SchemeCard key={relScheme.slug} scheme={relScheme} />
                ))}
              </div>
            </section>
          )}

          {/* Jobs in [State] / All-India Jobs */}
          {stateJobsList.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isAllIndia ? "All-India government jobs" : `Jobs in ${scheme.state}`}
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                {isAllIndia
                  ? "Central government vacancies open to candidates from all states."
                  : `Government job vacancies currently available in ${scheme.state}.`}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stateJobsList.map((job) => (
                  <JobCard key={job.slug} job={job} />
                ))}
              </div>
            </section>
          )}

          {/* Helpful Guides — links to related DB blog posts */}
          {relatedBlogs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Helpful articles</h2>
              <p className="text-sm text-gray-500 mb-6">
                Step-by-step guides related to this scheme.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedBlogs.map((guide) => (
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
