// =============================================================================
// SEO Helpers - SarkariDarapan
// Generates metadata, JSON-LD structured data for Next.js App Router
// =============================================================================

import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SOCIAL_LINKS } from "./constants";
import type {
  JobPost,
  SchemePost,
  SiteMetadata,
  FAQItem,
  BreadcrumbItem,
  JsonLdJobPosting,
  JsonLdFAQPage,
  JsonLdBreadcrumbList,
  JsonLdOrganization,
  JsonLdWebSite,
} from "./types";

// -----------------------------------------------------------------------------
// Next.js Metadata Generator
// -----------------------------------------------------------------------------

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Generates a complete Next.js Metadata object with OpenGraph, Twitter,
 * robots, and alternates configured.
 */
export function generateMetadata(params: GenerateMetadataParams): Metadata {
  const {
    title,
    description = SITE_DESCRIPTION,
    url = SITE_URL,
    ogImage = `${SITE_URL}/og-default.png`,
    type = "website",
    publishedAt,
    updatedAt,
    noIndex = false,
    keywords = [],
  } = params;

  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;

  const defaultKeywords = [
    "sarkari naukri",
    "government jobs",
    "sarkari yojana",
    "government schemes",
    "sarkari result",
    "admit card",
    "latest govt jobs",
    "india government jobs",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),

    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: type === "article" ? "article" : "website",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(type === "article" && publishedAt
        ? {
            publishedTime: publishedAt,
            modifiedTime: updatedAt || publishedAt,
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@sarkaridarapan",
    },

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

// -----------------------------------------------------------------------------
// JSON-LD: JobPosting
// -----------------------------------------------------------------------------

/**
 * Generates JSON-LD JobPosting structured data from a JobPost.
 * Conforms to https://schema.org/JobPosting
 */
export function generateJobPostingSchema(job: JobPost): JsonLdJobPosting {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.postName,
    description: job.description,
    datePosted: job.publishedAt,
    validThrough: job.importantDates.lastDate,
    hiringOrganization: {
      "@type": "Organization",
      name: job.organization,
      sameAs: job.officialLink || undefined,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: job.state || undefined,
      },
    },
    employmentType: "FULL_TIME",
    ...(job.salary
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              value: job.salary,
              unitText: "MONTH",
            },
          },
        }
      : {}),
  };
}

// -----------------------------------------------------------------------------
// JSON-LD: FAQPage
// -----------------------------------------------------------------------------

/**
 * Generates JSON-LD FAQPage structured data from an array of FAQ items.
 * Conforms to https://schema.org/FAQPage
 */
export function generateFAQSchema(faqs: FAQItem[]): JsonLdFAQPage {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// -----------------------------------------------------------------------------
// JSON-LD: BreadcrumbList
// -----------------------------------------------------------------------------

/**
 * Generates JSON-LD BreadcrumbList structured data.
 * Conforms to https://schema.org/BreadcrumbList
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): JsonLdBreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
    })),
  };
}

// -----------------------------------------------------------------------------
// JSON-LD: Organization
// -----------------------------------------------------------------------------

/**
 * Generates JSON-LD Organization structured data for the site.
 * Conforms to https://schema.org/Organization
 */
export function generateOrganizationSchema(): JsonLdOrganization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.telegram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

// -----------------------------------------------------------------------------
// JSON-LD: WebSite with SearchAction
// -----------------------------------------------------------------------------

/**
 * Generates JSON-LD WebSite structured data with a SearchAction.
 * Enables the site search box in Google Search results.
 * Conforms to https://schema.org/WebSite
 */
export function generateWebsiteSchema(): JsonLdWebSite {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// -----------------------------------------------------------------------------
// Helper: Render JSON-LD Script Tag
// -----------------------------------------------------------------------------

/**
 * Returns a JSON-LD string ready to be embedded in a <script> tag.
 * Usage in Next.js App Router:
 *
 * ```tsx
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: jsonLdString(schema) }}
 * />
 * ```
 */
export function jsonLdString(data: Record<string, unknown>): string {
  return JSON.stringify(data, null, 0);
}
