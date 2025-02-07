
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",  // Add protocol
        hostname: "cdn.sanity.io"
      }
    ]
    
  }
};

export default nextConfig;
