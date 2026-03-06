/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // Exclude Sanity studio from the main Next.js bundle
  // Studio is served by Sanity's own server or at sanity.io/manage
  webpack: (config, { isServer }) => {
    // Ignore studio page during webpack compilation
    config.resolve.fallback = { ...config.resolve.fallback, fs: false }
    return config
  },
}

module.exports = nextConfig
