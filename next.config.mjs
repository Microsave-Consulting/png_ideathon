/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/png_ideathon",
  assetPrefix: "/png_ideathon",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
