/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://images.unsplash.com/",
  },
};

module.exports = nextConfig;
