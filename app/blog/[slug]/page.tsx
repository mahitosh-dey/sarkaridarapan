import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MarkdownContent from "@/components/content/MarkdownContent";
import TableOfContents from "@/components/ui/TableOfContents";
import GuideCard from "@/components/GuideCard";
import EntranceExamCard from "@/components/ui/EntranceExamCard";
import JobCard from "@/components/ui/JobCard";
import SchemeCard from "@/components/ui/SchemeCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Sidebar from "@/components/layout/Sidebar";
import InArticleAd from "@/components/ads/InArticleAd";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getAllGuides, getGuideBySlug, extractTocItems } from "@/lib/guides";
import { getDbPostBySlug, getPublishedDbPosts } from "@/lib/blog-db";
import { getEntranceExamPosts, getJobsByCategory, getSchemePosts } from "@/lib/content";
import { blogToExams, blogToSchemes } from "@/lib/related-links";
import { SITE_NAME, SITE_URL, REVALIDATE_INTERVAL } from "@/lib/constants";
import { parseFaqsFromMarkdown } from "@/lib/faq-parser";

export const revalidate = REVALIDATE_INTERVAL;

interface GuidePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const [dbPosts, hardcoded] = await Promise.all([
    getPublishedDbPosts(),
    Promise.resolve(getAllGuides()),
  ]);
  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  return [
    ...dbPosts.map((p) => ({ slug: p.slug })),
    ...hardcoded.filter((g) => !dbSlugs.has(g.slug)).map((g) => ({ slug: g.slug })),
  ];
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = (await getDbPostBySlug(params.slug)) || getGuideBySlug(params.slug);
  if (!guide) return { title: "Guide Not Found" };

  // Trust the DB title verbatim — it's validated to 50-65 chars at write time
  // and already follows the "{main keyword}: {what user gets} [{year}]" pattern.
  // Google auto-appends the site name in SERPs, so dropping it here buys back
  // characters for the keyword-rich portion that actually drives CTR.
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      url: `${SITE_URL}/blog/${guide.slug}`,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      images: [{ url: guide.image || `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = (await getDbPostBySlug(params.slug)) || getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const tocItems = extractTocItems(guide.content);

  // Fetch all related content in parallel
  const examSlugs = blogToExams[guide.slug] ?? [];
  const schemeSlugs = blogToSchemes[guide.slug] ?? [];

  const [dbPosts, hardcoded, categoryJobs, allExams, allSchemes] = await Promise.all([
    getPublishedDbPosts(),
    Promise.resolve(getAllGuides()),
    getJobsByCategory(guide.category).catch(() => []),
    examSlugs.length > 0 ? getEntranceExamPosts().catch(() => []) : Promise.resolve([]),
    schemeSlugs.length > 0 ? getSchemePosts().catch(() => []) : Promise.resolve([]),
  ]);

  const dbSlugs = new Set(dbPosts.map((p) => p.slug));
  const allGuides = [...dbPosts, ...hardcoded.filter((g) => !dbSlugs.has(g.slug))];
  const relatedGuides = allGuides
    .filter((g) => g.category === guide.category && g.slug !== guide.slug)
    .slice(0, 3);

  const relatedJobs = categoryJobs.slice(0, 3);
  const relatedExams = (allExams as import("@/lib/types").EntranceExamPost[]).filter((e) => examSlugs.includes(e.slug));
  const relatedSchemes = (allSchemes as import("@/lib/types").SchemePost[]).filter((s) => schemeSlugs.includes(s.slug));

  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: guide.title },
  ];

  const formattedPublishDate = new Date(guide.publishedAt).toLocaleDateString(
    "en-IN",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const formattedUpdateDate = new Date(guide.updatedAt).toLocaleDateString(
    "en-IN",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title.slice(0, 110),
    description: guide.description,
    image: {
      "@type": "ImageObject",
      url: guide.image || `${SITE_URL}/images/og-default.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: "Mahitosh Dey",
      url: `${SITE_URL}/about`,
      sameAs: "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
        width: 200,
        height: 60,
      },
    },
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${params.slug}`,
    },
    articleSection: guide.category,
    inLanguage: "en-IN",
  };

  const effectiveGuideFaqs = guide.faqs?.length
    ? guide.faqs
    : parseFaqsFromMarkdown(guide.content);
  const faqSchema = effectiveGuideFaqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: effectiveGuideFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: guide.title, url: `${SITE_URL}/blog/${params.slug}` },
        ]}
      />
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* TOC Sidebar (left on desktop, top on mobile) */}
        <aside className="w-full lg:w-56 shrink-0 lg:order-1">
          <TableOfContents items={tocItems} />
        </aside>

        {/* Main Article Content */}
        <div className="flex-1 min-w-0 lg:order-2">
          <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                    {guide.category}
                  </span>
                  {guide.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                  {guide.title}
                </h1>

                <p className="text-gray-600 text-base mb-4">
                  {guide.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  {/* Author with photo */}
                  <Link
                    href="/about/mahitosh-dey"
                    className="flex items-center gap-2 group"
                  >
                    <Image
                      src="/images/mahitosh-dey.jpeg"
                      alt="Mahitosh Dey"
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-full object-cover ring-2 ring-indigo-100"
                    />
                    <span className="font-semibold text-indigo-700 group-hover:underline transition-colors">
                      Mahitosh Dey
                    </span>
                  </Link>

                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Published {formattedPublishDate}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H4.28a.75.75 0 0 0-.75.75v3.955a.75.75 0 0 0 1.5 0v-2.134l.235.234a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0-.218-.873A6.98 6.98 0 0 0 10 4.5c-2.344 0-4.413 1.16-5.678 2.935l-.235.329V5.75a.75.75 0 0 0-1.5 0v3.955a.75.75 0 0 0 .75.75h3.955a.75.75 0 0 0 0-1.5H5.166l.31-.432A5.48 5.48 0 0 1 10 6c1.68 0 3.19.756 4.197 1.947a.75.75 0 0 0 1.345-.246Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Updated {formattedUpdateDate}</span>
                  </div>
                </div>
              </header>

              {/* Article Body */}
              <MarkdownContent content={guide.content} />

              {/* In-Article Ad */}
              <InArticleAd className="my-8" />

              {/* Share Footer */}
              <footer className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    Share this guide:
                  </span>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(guide.title + " " + SITE_URL + "/blog/" + guide.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-green-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(SITE_URL + "/blog/" + guide.slug)}&text=${encodeURIComponent(guide.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
                  >
                    Telegram
                  </a>
                </div>
              </footer>
            </div>
          </article>

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedGuides.map((relGuide) => (
                  <GuideCard key={relGuide.slug} guide={relGuide} />
                ))}
              </div>
            </section>
          )}

          {/* Apply for These Jobs — category-matched job openings */}
          {relatedJobs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Apply for these jobs
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Government vacancies matching this guide&apos;s category — check last dates before applying.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedJobs.map((job) => (
                  <JobCard key={job.slug} job={job} />
                ))}
              </div>
            </section>
          )}

          {/* Related Schemes — internal links from static mapping */}
          {relatedSchemes.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Related Government Schemes
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                These schemes are relevant to the topic covered in this guide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedSchemes.map((scheme) => (
                  <SchemeCard key={scheme.slug} scheme={scheme} />
                ))}
              </div>
            </section>
          )}

          {/* Related Entrance Exams — internal links from static mapping */}
          {relatedExams.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Upcoming Entrance Exams
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                These exams are relevant to the career path discussed in this guide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedExams.map((exam) => (
                  <EntranceExamCard key={exam.slug} exam={exam} />
                ))}
              </div>
            </section>
          )}

          {/* Back to All Guides */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-80 shrink-0 lg:order-3">
          <Suspense
            fallback={
              <div className="w-full animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />
            }
          >
            <Sidebar />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
