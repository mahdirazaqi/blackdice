/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.blackdice.ir",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3001",
      },
    ],
  },
};

module.exports = nextConfig;
