// =============================================================================
// Site Constants - SarkariDarapan
// =============================================================================

export const SITE_NAME = "SarkariDarapan";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarkaridarapan.info";
export const SITE_DESCRIPTION =
  "Latest Government Jobs, Sarkari Naukri, Government Schemes, Results, Admit Cards and more across India";

// -----------------------------------------------------------------------------
// Indian States and Union Territories
// -----------------------------------------------------------------------------

export interface StateEntry {
  slug: string;
  name: string;
}

export const STATES: StateEntry[] = [
  // States (28)
  { slug: "andhra-pradesh", name: "Andhra Pradesh" },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh" },
  { slug: "assam", name: "Assam" },
  { slug: "bihar", name: "Bihar" },
  { slug: "chhattisgarh", name: "Chhattisgarh" },
  { slug: "goa", name: "Goa" },
  { slug: "gujarat", name: "Gujarat" },
  { slug: "haryana", name: "Haryana" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh" },
  { slug: "jharkhand", name: "Jharkhand" },
  { slug: "karnataka", name: "Karnataka" },
  { slug: "kerala", name: "Kerala" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh" },
  { slug: "maharashtra", name: "Maharashtra" },
  { slug: "manipur", name: "Manipur" },
  { slug: "meghalaya", name: "Meghalaya" },
  { slug: "mizoram", name: "Mizoram" },
  { slug: "nagaland", name: "Nagaland" },
  { slug: "odisha", name: "Odisha" },
  { slug: "punjab", name: "Punjab" },
  { slug: "rajasthan", name: "Rajasthan" },
  { slug: "sikkim", name: "Sikkim" },
  { slug: "tamil-nadu", name: "Tamil Nadu" },
  { slug: "telangana", name: "Telangana" },
  { slug: "tripura", name: "Tripura" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh" },
  { slug: "uttarakhand", name: "Uttarakhand" },
  { slug: "west-bengal", name: "West Bengal" },

  // Union Territories (8)
  { slug: "andaman-and-nicobar-islands", name: "Andaman and Nicobar Islands" },
  { slug: "chandigarh", name: "Chandigarh" },
  { slug: "dadra-and-nagar-haveli-and-daman-and-diu", name: "Dadra and Nagar Haveli and Daman and Diu" },
  { slug: "delhi", name: "Delhi" },
  { slug: "jammu-and-kashmir", name: "Jammu and Kashmir" },
  { slug: "ladakh", name: "Ladakh" },
  { slug: "lakshadweep", name: "Lakshadweep" },
  { slug: "puducherry", name: "Puducherry" },
];

// -----------------------------------------------------------------------------
// Job Categories
// -----------------------------------------------------------------------------

export interface CategoryEntry {
  slug: string;
  name: string;
  icon?: string;
}

export const JOB_CATEGORIES: CategoryEntry[] = [
  { slug: "ssc", name: "SSC", icon: "\ud83d\udcdd" },
  { slug: "upsc", name: "UPSC", icon: "\ud83c\udfe9" },
  { slug: "railway", name: "Railway", icon: "\ud83d\ude82" },
  { slug: "banking", name: "Banking", icon: "\ud83c\udfe6" },
  { slug: "defence", name: "Defence", icon: "\ud83c\udf96\ufe0f" },
  { slug: "police", name: "Police", icon: "\ud83d\udc6e" },
  { slug: "teaching", name: "Teaching", icon: "\ud83d\udcda" },
  { slug: "state-psc", name: "State PSC", icon: "\ud83c\udfd7\ufe0f" },
  { slug: "psu", name: "PSU", icon: "\ud83c\udfed" },
  { slug: "healthcare", name: "Healthcare", icon: "\ud83c\udfe5" },
  { slug: "engineering", name: "Engineering", icon: "\u2699\ufe0f" },
  { slug: "entrance-exams", name: "Entrance Exams", icon: "\ud83c\udfaf" },
];

// -----------------------------------------------------------------------------
// Scheme Categories
// -----------------------------------------------------------------------------

export const SCHEME_CATEGORIES: CategoryEntry[] = [
  { slug: "agriculture", name: "Agriculture" },
  { slug: "education", name: "Education" },
  { slug: "health", name: "Health" },
  { slug: "housing", name: "Housing" },
  { slug: "women-and-child", name: "Women & Child" },
  { slug: "employment", name: "Employment" },
  { slug: "senior-citizen", name: "Senior Citizen" },
  { slug: "startup", name: "Startup" },
  { slug: "financial-inclusion", name: "Financial Inclusion" },
  { slug: "rural-development", name: "Rural Development" },
];

// -----------------------------------------------------------------------------
// Entrance Exam Categories
// -----------------------------------------------------------------------------

export const ENTRANCE_EXAM_CATEGORIES: CategoryEntry[] = [
  { slug: "engineering", name: "Engineering" },
  { slug: "medical", name: "Medical" },
  { slug: "management", name: "Management" },
  { slug: "law", name: "Law" },
  { slug: "science", name: "Science" },
  { slug: "arts-humanities", name: "Arts & Humanities" },
  { slug: "agriculture", name: "Agriculture" },
  { slug: "defence", name: "Defence" },
  { slug: "banking-finance", name: "Banking & Finance" },
  { slug: "teaching", name: "Teaching" },
];

// -----------------------------------------------------------------------------
// Navigation Links
// -----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Sarkari Naukri",
    href: "/sarkari-naukri",
    children: JOB_CATEGORIES.map((cat) => ({
      label: cat.name,
      href: `/category/${cat.slug}`,
    })),
  },
  {
    label: "Sarkari Yojana",
    href: "/sarkari-yojana",
    children: SCHEME_CATEGORIES.map((cat) => ({
      label: cat.name,
      href: `/sarkari-yojana?category=${cat.slug}`,
    })),
  },
  {
    label: "Entrance Exams",
    href: "/entrance-exams",
    children: ENTRANCE_EXAM_CATEGORIES.map((cat) => ({
      label: cat.name,
      href: `/entrance-exams?category=${cat.slug}`,
    })),
  },
  {
    label: "States",
    href: "#",
    children: STATES.filter((s) =>
      [
        "uttar-pradesh",
        "bihar",
        "rajasthan",
        "madhya-pradesh",
        "maharashtra",
        "delhi",
        "haryana",
        "punjab",
        "gujarat",
        "tamil-nadu",
        "karnataka",
        "west-bengal",
      ].includes(s.slug)
    ).map((s) => ({
      label: s.name,
      href: `/state/${s.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// -----------------------------------------------------------------------------
// Social Links
// -----------------------------------------------------------------------------

export interface SocialLinks {
  telegram: string;
  twitter: string;
  facebook: string;
  youtube: string;
  instagram: string;
  whatsapp: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  telegram: "https://t.me/sarkaridarapaninfo",
  twitter: "https://twitter.com/sarkaridarapan",
  facebook: "https://www.facebook.com/sarkaridarapaninfo",
  youtube: "https://www.youtube.com/@sarkaridarapaninfo",
  instagram: "https://www.instagram.com/sarkaridarapaninfo",
  whatsapp: "https://whatsapp.com/channel/sarkaridarapaninfo",
};

// -----------------------------------------------------------------------------
// Pagination
// -----------------------------------------------------------------------------

export const POSTS_PER_PAGE = 12;

// -----------------------------------------------------------------------------
// Revalidation Interval (ISR) - in seconds
// -----------------------------------------------------------------------------

export const REVALIDATE_INTERVAL = 3600; // 1 hour
