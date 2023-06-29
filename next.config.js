/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["fs.chomchob.com"],
  },
  experimental: {
    images: {
        unoptimized: true
    }
}
}

module.exports = nextConfig
