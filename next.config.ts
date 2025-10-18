/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '', // leave empty
        pathname: '/**', // allow all paths
      },
    ],
  },
};

module.exports = nextConfig;
