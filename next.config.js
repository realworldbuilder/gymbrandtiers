/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.google.com'],
    dangerouslyAllowSVG: true,
    unoptimized: true, // Required for static export
  },
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/product-tiers/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/product-tiers' : '',
}

module.exports = nextConfig