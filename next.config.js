/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  experimental: {
    images: {
        unoptimized: true
    }
}
}

module.exports = nextConfig
