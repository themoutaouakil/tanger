/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker/Dokploy
  output: 'standalone',
  
  // Disable image optimization for Dokploy (optional)
  images: {
    unoptimized: true,
  },
  
  // Optional: Add custom headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
