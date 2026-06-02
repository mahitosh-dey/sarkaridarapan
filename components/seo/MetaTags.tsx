import type { Metadata } from "next";

const SITE_NAME = "SarkariDarapan";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sarkaridarapan.com";
const DEFAULT_OG_IMAGE = "/images/og-default.png";

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
}: PageMetadataParams): Metadata {
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${BASE_URL}${ogImage}`
    : `${BASE_URL}${DEFAULT_OG_IMAGE}`;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
