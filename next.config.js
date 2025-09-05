/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache images for 1 year
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    scrollRestoration: true,
  },
  
  // Enable compression
  compress: true,
  
  // PoweredByHeader
  poweredByHeader: false,
  
  // Generate static pages at build time
  generateBuildId: async () => {
    return 'stryveahead-build-' + Date.now()
  },
}

module.exports = nextConfig
