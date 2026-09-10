/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // Ensure proper output for Vercel
  output: 'standalone'
};

export default nextConfig;
