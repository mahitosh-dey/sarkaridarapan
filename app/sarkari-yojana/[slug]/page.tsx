import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import SchemeDetail from "@/components/content/SchemeDetail";
import SchemeCard from "@/components/ui/SchemeCard";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const Sidebar = dynamic(() => import("@/components/layout/Sidebar"), {
  loading: () => <div className="w-full lg:w-80 animate-pulse bg-gray-100 rounded-lg min-h-[400px]" />,
});
import InArticleAd from "@/components/ads/InArticleAd";
import JsonLd from "@/components/seo/JsonLd";
import { getSchemePosts, getSchemeBySlug } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

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
        images: scheme.image ? [{ url: scheme.image }] : [],
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

  // Fetch related schemes from same category
  let relatedSchemes: import("@/lib/types").SchemePost[] = [];
  try {
    const allSchemes = await getSchemePosts();
    relatedSchemes = allSchemes
      .filter((s) => s.category === scheme.category && s.slug !== scheme.slug)
      .slice(0, 4);
  } catch {
    relatedSchemes = [];
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: scheme.title,
    description: scheme.description,
    datePublished: scheme.publishedAt,
    dateModified: scheme.updatedAt || scheme.publishedAt,
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

      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <article className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <SchemeDetail scheme={scheme} />

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
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
