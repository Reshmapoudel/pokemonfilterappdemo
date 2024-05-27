/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
    domains: ["raw.githubusercontent.com"],
  },
  output: "export",
};

export default nextConfig;
