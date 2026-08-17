/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  serverExternalPackages: ['cheerio'],
  experimental: {},
  // Compress responses for faster loading (helps Core Web Vitals)
  compress: true,
  // Powered by header removed for cleaner responses
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache Next.js static chunks (JS/CSS) — hashed filenames make them safe to cache forever
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Allow search engines to access sitemap and feeds without restriction
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=600',
          },
        ],
      },
      {
        source: '/feed.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=600',
          },
        ],
      },
      // Noindex filtered/parameterized listing URLs  (defence-in-depth alongside
      // the robots meta tag set in each page's generateMetadata).
      {
        source: '/sarkari-yojana',
        has: [{ type: 'query', key: 'category' }],
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/sarkari-naukri',
        has: [{ type: 'query', key: 'category' }],
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/entrance-exams',
        has: [{ type: 'query', key: 'category' }],
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Common misspellings and old URL patterns
      {
        source: '/sarkari-naukri.html',
        destination: '/sarkari-naukri',
        permanent: true,
      },
      {
        source: '/sarkari-yojana.html',
        destination: '/sarkari-yojana',
        permanent: true,
      },
      {
        source: '/jobs/:slug',
        destination: '/sarkari-naukri/:slug',
        permanent: true,
      },
      {
        source: '/schemes/:slug',
        destination: '/sarkari-yojana/:slug',
        permanent: true,
      },
      // Cannibalisation fix 2026-08-04: four slugs were live at BOTH /entrance-exams/ and
      // /sarkari-naukri/, both indexable and both in the sitemap, splitting ranking signals
      // on banking keywords. Taxonomy rule: recruitment exams live under /sarkari-naukri/,
      // /entrance-exams/ is for genuine entrance exams (NEET, JEE, CAT, CLAT, GATE, CUET).
      // The job page was longer in every case, so it is canonical; exam rows deactivated.
      {
        source: '/entrance-exams/sbi-po-2026',
        destination: '/sarkari-naukri/sbi-po-2026',
        permanent: true,
      },
      {
        source: '/entrance-exams/ibps-clerk-2026',
        destination: '/sarkari-naukri/ibps-clerk-2026',
        permanent: true,
      },
      {
        source: '/entrance-exams/ibps-po-2026',
        destination: '/sarkari-naukri/ibps-po-2026',
        permanent: true,
      },
      {
        source: '/entrance-exams/ibps-rrb-2026',
        destination: '/sarkari-naukri/ibps-rrb-2026',
        permanent: true,
      },
      // Cannibalisation fix 2026-08-03: two RRB ALP pages existed. The long-slug one held
      // stale CEN 01/2024 content (18,799 vacancies) and was the one serving publicly,
      // while the correct CEN 01/2026 page (11,127 posts) sat deactivated. Canonical is
      // now /sarkari-naukri/rrb-alp-2026; the stale row is also set is_active=false.
      {
        source: '/sarkari-naukri/rrb-alp-railway-recruitment-board-assistant-loco-pilot-2026',
        destination: '/sarkari-naukri/rrb-alp-2026',
        permanent: true,
      },
      {
        source: '/blog/rn-ntpc-2026-posts-eligibility-exam-pattern-preparation-guide',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/best-government-jobs-for-women-in-india-2026-career-guide',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/upsc-mains-2026-preparation-strategy-8-week-plan',
        destination: '/blog',
        permanent: true,
      },
      // Cannibalization fix (2026-08-15, batch 5): PM-KISAN cluster. Three
      // blogs all served intent the scheme page covers in more depth and keeps
      // current. Held back until the scheme was deepened 2503w -> 3122w.
      {
        source: '/blog/complete-guide-to-pm-kisan-yojana',
        destination: '/sarkari-yojana/pm-kisan-samman-nidhi-pm-kisan-2026',
        permanent: true,
      },
      {
        source: '/blog/pm-kisan-samman-nidhi-2026-status-check',
        destination: '/sarkari-yojana/pm-kisan-samman-nidhi-pm-kisan-2026',
        permanent: true,
      },
      {
        source: '/blog/pm-kisan-samman-nidhi-apply-check-status-fix-errors',
        destination: '/sarkari-yojana/pm-kisan-samman-nidhi-pm-kisan-2026',
        permanent: true,
      },
      // Cannibalization fix (2026-08-15, batch 4): UPSC cluster. Held back
      // until /entrance-exams/upsc-cse-2026 was deepened 1128w -> 3026w, since
      // redirecting into a thin destination just moves the problem.
      {
        source: '/blog/upsc-cse-2026-notification-dates-eligibility-apply-online',
        destination: '/entrance-exams/upsc-cse-2026',
        permanent: true,
      },
      {
        source: '/blog/upsc-eligibility-2026-age-limit-qualification-attempts',
        destination: '/entrance-exams/upsc-cse-2026',
        permanent: true,
      },
      // Cannibalization fix (2026-08-15, batch 3): three more thin blogs whose
      // canonical target was already well past 3000w, so no deepening was
      // needed first. Same rule as batch 1 and 2: only redirect when the
      // destination is genuinely stronger, never thin-into-thin.
      {
        source: '/blog/ssc-cgl-syllabus-2026-complete-topic-wise-breakdown',
        destination: '/blog/ssc-cgl-2026-syllabus-preparation-guide',
        permanent: true,
      },
      {
        source: '/blog/rrb-ntpc-2026-posts-eligibility-exam-pattern-preparation-guide',
        destination: '/sarkari-naukri/rrb-ntpc-2026',
        permanent: true,
      },
      {
        source: '/blog/railway-group-d-2026-notification-dates-apply-online',
        destination: '/entrance-exams/rrb-group-d-2026',
        permanent: true,
      },
      // Cannibalization fix (2026-08-14): thin blogs competing with a much
      // stronger page on the same query. Each source was ~1000w while its
      // destination is 3000w+, so these were splitting signals against our own
      // best pages rather than adding coverage. The source rows are also set
      // is_active=false so they leave the sitemap.
      //
      // The two overlaps held back in the first pass are now redirected: both
      // destinations were deepened the same day and crossed 3000w, so they no
      // longer move the problem into a thin page.
      //   ssc-chsl-2026  1102w -> 3016w, now covers admit card and city slip
      //   ibps-po-2026   1234w -> 3008w, now carries the PO/Clerk/SBI PO
      //                  comparison table the blog existed to serve
      {
        source: '/blog/ssc-chsl-2026-admit-card-download-hall-ticket',
        destination: '/sarkari-naukri/ssc-chsl-2026',
        permanent: true,
      },
      {
        source: '/blog/ibps-po-vs-sbi-po-2026-comparison',
        destination: '/sarkari-naukri/ibps-po-2026',
        permanent: true,
      },
      {
        source: '/blog/how-to-prepare-for-ssc-cgl',
        destination: '/blog/ssc-cgl-2026-syllabus-preparation-guide',
        permanent: true,
      },
      {
        source: '/blog/sbi-po-2026-preparation-guide',
        destination: '/sarkari-naukri/sbi-po-2026',
        permanent: true,
      },
      {
        source: '/blog/wb-gram-panchayat-recruitment-2026-complete-guide',
        destination: '/sarkari-naukri/wb-gram-panchayat-recruitment-2026',
        permanent: true,
      },
      // Cannibalization fix (2026-07-23): 3 posts targeted the same query
      // "government jobs after 12th". Canonical is
      // top-10-government-jobs-after-12th-india-2026 (Day 6, 5152w).
      {
        source: '/blog/top-10-govt-jobs-after-12th-2026',
        destination: '/blog/top-10-government-jobs-after-12th-india-2026',
        permanent: true,
      },
      {
        source: '/blog/government-jobs-after-12th-in-india-2026',
        destination: '/blog/top-10-government-jobs-after-12th-india-2026',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
