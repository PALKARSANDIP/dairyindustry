/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Old indexed URLs → redirect to correct pages (301 = permanent, tells Google to update)
      {
        source: '/visitor-profile-dairy-industry-in-expo-pune',
        destination: '/visitors',
        permanent: true,
      },
    ]
  },
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
