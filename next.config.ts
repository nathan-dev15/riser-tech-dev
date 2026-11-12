import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    unoptimized: false,
    remotePatterns: [],
  },

  // Performance Optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // swcMinify is enabled by default in Next.js 16+

  // Security + Cache Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      // Long-term cache for static images (1 year, immutable)
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Long-term cache for other static assets
      {
        source: '/:path*\\.(:ext(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|otf))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // JS/CSS chunks — versioned by Next.js, safe to cache long-term
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
