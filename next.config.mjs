/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure markdown files in public/ are served directly
  serverExternalPackages: ['jimp'],
};

export default nextConfig;
