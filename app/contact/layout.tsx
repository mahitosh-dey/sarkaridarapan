import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact SarkariDarapan: Corrections, Feedback & Queries",
  description:
    "Contact SarkariDarapan for corrections, feedback, government job queries, scheme questions, or partnership requests. We respond within 24 to 48 hours by email.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact SarkariDarapan: Corrections, Feedback & Queries`,
    description:
      "Contact SarkariDarapan for corrections, feedback, government job queries, scheme questions, or partnership requests. We respond within 24 to 48 hours by email.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
