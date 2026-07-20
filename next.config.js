/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No remote hosts. Every image is a real asset in /public per SYSTEM/08.
    remotePatterns: [],
  },
};

module.exports = nextConfig;
