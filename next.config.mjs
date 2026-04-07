/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/png_ideathon_next",
  assetPrefix: "/png_ideathon_next",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
