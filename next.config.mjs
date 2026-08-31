/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  trailingSlash: true, // Helps avoid 404s for static export on some hosts
};

export default nextConfig;
