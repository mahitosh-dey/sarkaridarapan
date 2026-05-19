// =============================================================================
// TypeScript Interfaces - SarkariDarapan
// =============================================================================

// -----------------------------------------------------------------------------
// Job Post
// -----------------------------------------------------------------------------

export interface JobEligibility {
  age: string;
  education: string;
}

export interface JobImportantDates {
  startDate: string;
  lastDate: string;
  examDate?: string;
}

export interface JobPost {
  slug: string;
  title: string;
  organization: string;
  postName: string;
  vacancies: number;
  eligibility: JobEligibility;
  salary: string;
  applicationFee: string | {
    general: string;
    obc?: string;
    sc_st?: string;
    women?: string;
    ph?: string;
  };
  importantDates: JobImportantDates;
  howToApply: string;
  selectionProcess: string | string[];
  officialLink: string;
  notificationLink: string;
  applyLink?: string;
  category: string;
  state: string;
  isActive: boolean;
  publishedAt: string;
  updatedAt: string;
  description: string;
  content: string;
  readingTime?: string;
  image?: string;
  lastDate?: string;
  qualification?: string;
  employmentType?: string;
}

// -----------------------------------------------------------------------------
// Scheme Post
// -----------------------------------------------------------------------------

export interface SchemePost {
  slug: string;
  title: string;
  ministry: string;
  launchedBy: string;
  objective: string;
  eligibility: string[];
  benefits: string[];
  documents: string[];
  howToApply: string;
  officialPortal: string;
  helplineNumber: string;
  category: string;
  state: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  content: string;
  readingTime?: string;
  image?: string;
  faqs?: FAQItem[];
}

// -----------------------------------------------------------------------------
// Site Metadata
// -----------------------------------------------------------------------------

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  type?: "website" | "article";
}

// -----------------------------------------------------------------------------
// Pagination
// -----------------------------------------------------------------------------

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

// -----------------------------------------------------------------------------
// Breadcrumb
// -----------------------------------------------------------------------------

export interface BreadcrumbItem {
  label: string;
  href: string;
}

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------

export interface SearchResult {
  type: "job" | "scheme";
  slug: string;
  title: string;
  description: string;
  category: string;
  state: string;
  publishedAt: string;
}

// -----------------------------------------------------------------------------
// JSON-LD Structured Data
// -----------------------------------------------------------------------------

export interface JsonLdJobPosting {
  "@context": "https://schema.org";
  "@type": "JobPosting";
  title: string;
  description: string;
  datePosted: string;
  validThrough: string;
  hiringOrganization: {
    "@type": "Organization";
    name: string;
    sameAs?: string;
  };
  jobLocation?: {
    "@type": "Place";
    address: {
      "@type": "PostalAddress";
      addressCountry: string;
      addressRegion?: string;
    };
  };
  employmentType?: string;
  baseSalary?: {
    "@type": "MonetaryAmount";
    currency: string;
    value: {
      "@type": "QuantitativeValue";
      value: string;
      unitText: string;
    };
  };
}

export interface JsonLdFAQPage {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface JsonLdBreadcrumbList {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface JsonLdOrganization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  sameAs: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    availableLanguage: string[];
  };
}

export interface JsonLdWebSite {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  potentialAction: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
}
