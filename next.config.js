/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.blackdice.ir",
      },
    ],
  },
};

module.exports = nextConfig;
