import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SarkariDarapan for queries about government jobs, Sarkari Naukri, government schemes, exam results, admit cards, content corrections, or feedback. We respond within 24-48 hours.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      "Contact SarkariDarapan for queries about government jobs, government schemes, exam results, admit cards, content corrections, or feedback.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
