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
