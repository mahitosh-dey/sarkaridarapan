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
    ];
  },
};

module.exports = nextConfig;
