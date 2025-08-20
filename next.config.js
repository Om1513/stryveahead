/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['api.builder.io'], // Add external domains if needed
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
