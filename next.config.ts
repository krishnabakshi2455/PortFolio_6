import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/admin',
      },
    ];
  },
};

export default nextConfig;

