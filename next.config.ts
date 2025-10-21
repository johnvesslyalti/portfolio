/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // GitHub contributions chart (SVG)
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
        port: "",        // leave empty
        pathname: "/**", // allow all paths
      },
      // Spotify album images
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
