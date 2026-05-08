import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/~lunacal-proxy/:path*",
        destination: "https://app.lunacal.ai/:path*",
      },
    ];
  },
};

export default nextConfig;
