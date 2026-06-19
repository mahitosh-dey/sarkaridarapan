// =============================================================================
// Site Constants - SarkariDarapan
// =============================================================================

export const SITE_NAME = "SarkariDarapan";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarkaridarapan.com"
).trim();
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
  description?: string;
}

export const JOB_CATEGORIES: CategoryEntry[] = [
  {
    slug: "ssc",
    name: "SSC",
    icon: "\ud83d\udcdd",
    description: "Staff Selection Commission recruits for Group B and C posts across central government ministries and departments. Major exams include SSC CGL (for graduates), SSC CHSL (for 12th pass), SSC GD Constable, SSC CPO for Delhi Police SI, and SSC MTS. Candidates compete in computer-based tests; most posts carry 7th Pay Commission pay levels ranging from Level 2 to Level 8.",
  },
  {
    slug: "upsc",
    name: "UPSC",
    icon: "\ud83c\udfe9",
    description: "Union Public Service Commission is India's central recruiting authority for All India Services and Group A central government posts. The Civil Services Examination selects IAS, IPS, and IFS officers; other UPSC exams include NDA, CDS, CAPF AC, ESE, and CMS. Most UPSC exams require a bachelor's degree and have an upper age limit of 32 years for General category candidates.",
  },
  {
    slug: "railway",
    name: "Railway",
    icon: "\ud83d\ude82",
    description: "Indian Railways is one of the largest employers in the country, recruiting through 21 zonal Railway Recruitment Boards. Key exams are RRB NTPC (for 10th pass and graduates), RRB Group D (for Level 1 posts), RRB ALP (for ITI holders and diploma engineers), and RRB JE (for diploma/degree engineers). Railway jobs offer permanent central government employment with pay levels from Level 1 to Level 6 under the 7th Pay Commission.",
  },
  {
    slug: "banking",
    name: "Banking",
    icon: "\ud83c\udfe6",
    description: "Public sector bank recruitment happens through IBPS for most nationalized banks and through direct notifications for SBI, RBI, and LIC. Major exams are IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B, IBPS RRB Officer and Office Assistant, and LIC AAO. A bachelor's degree is required for most banking posts; starting in-hand salaries range from approximately Rs.24,000 for clerk posts to Rs.52,000 for probationary officers.",
  },
  {
    slug: "defence",
    name: "Defence",
    icon: "\ud83c\udf96\ufe0f",
    description: "Defence recruitment covers the Indian Army, Navy, Air Force, DRDO, and defence PSUs like BEL and BEML. Entry routes include NDA (for Class 12 students aged 16.5 to 19.5 years), CDS (for graduates), Agniveer (4-year scheme open to 10th and 12th pass candidates), and technical entries for engineering graduates. DRDO and defence PSU recruitment happens through GATE scores or separate written tests.",
  },
  {
    slug: "police",
    name: "Police",
    icon: "\ud83d\udc6e",
    description: "SSC CPO recruits Sub-Inspectors for Delhi Police and CISF through a national-level written test followed by physical and medical standards. State police departments recruit separately for Constable, SI, and Inspector posts through their respective state police recruitment boards. Physical fitness requirements \u2014 including a 1.6km run, height and chest standards \u2014 apply alongside written examinations for all central and state police posts.",
  },
  {
    slug: "teaching",
    name: "Teaching",
    icon: "\ud83d\udcda",
    description: "Central government teaching jobs are offered through Kendriya Vidyalaya Sangathan (KVS), Navodaya Vidyalaya Samiti (NVS), and Sainik School Society. Eligibility for Classes 1 to 8 requires B.Ed or D.El.Ed plus a valid CTET certificate; PGT posts for Classes 9 to 12 require a postgraduate degree in the subject plus B.Ed. State government teaching posts require the respective state TET in place of CTET.",
  },
  {
    slug: "state-psc",
    name: "State PSC",
    icon: "\ud83c\udfd7\ufe0f",
    description: "State Public Service Commissions recruit for gazetted officer posts at the state level \u2014 the state equivalent of what UPSC does nationally. UPPSC, BPSC, MPPSC, RPSC, HPSC, KPSC, and other state PSCs conduct state civil services exams selecting Deputy Collector, DSP, BDO, and similar posts. Eligibility requires graduation; upper age limits typically range from 37 to 42 years depending on the state and category.",
  },
  {
    slug: "psu",
    name: "PSU",
    icon: "\ud83c\udfed",
    description: "Public Sector Undertakings include central government companies like ONGC, NTPC, BHEL, HPCL, Coal India, SAIL, and AAI. Most PSU technical posts require a relevant engineering degree; many organizations use GATE scores for initial shortlisting of Management Trainees and Executive Engineers. Non-technical posts are recruited through management aptitude tests or direct interviews, with starting CTC typically between Rs.8 lakh and Rs.16 lakh per annum.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "\ud83c\udfe5",
    description: "Central government health sector recruitment happens through AIIMS, ESIC, CGHS, and state-level National Health Mission. Posts range from Staff Nurse (GNM or B.Sc Nursing required) and ANM (12th pass with ANM course) to Medical Officer (MBBS) and Pharmacist (B.Pharm or D.Pharm). State health departments issue separate notifications through NHM and district Chief Medical Health Officers.",
  },
  {
    slug: "engineering",
    name: "Engineering",
    icon: "\u2699\ufe0f",
    description: "Central government engineering recruitment covers departments and organizations including CPWD, BEL, DRDO, DMRC, BEML, and CWC. Posts range from Junior Engineer (diploma or B.Tech required) to Senior Engineer and Deputy Director level. Many recruitment cycles use GATE scores for shortlisting; organizations like DMRC and BEL conduct independent written tests followed by personal interviews.",
  },
  {
    slug: "entrance-exams",
    name: "Entrance Exams",
    icon: "\ud83c\udfaf",
    description: "Entrance exams are competitive tests for admission to government colleges and institutions \u2014 separate from direct job recruitment. Key exams include JEE Main and Advanced (for IITs and NITs), NEET UG (for MBBS and BDS admissions), GATE (for M.Tech and PSU shortlisting), CAT (for IIMs), CUET (for central universities), and CLAT (for National Law Universities). Qualifying these exams leads to degree programmes that are prerequisites for higher-level government job notifications.",
  },
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
