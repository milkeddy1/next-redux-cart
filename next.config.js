/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com", "fakestoreapi.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
