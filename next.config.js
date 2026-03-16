/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ''
const nextConfig = {
  ...(basePath && { basePath, assetPrefix: `${basePath}/` }),
  output: 'export',
  images: {
    domains: [],
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig
