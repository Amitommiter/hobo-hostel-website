import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 85, 100],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Fix for the lockfile warning
  outputFileTracingRoot: process.cwd(),
}

export default nextConfig
