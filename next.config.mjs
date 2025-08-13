/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  trailingSlash: true, // Helps avoid 404s for static export on some hosts
};

export default nextConfig;
