/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [],
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig
