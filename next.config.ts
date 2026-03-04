import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          { 
            key: "Content-Security-Policy", 
            value: `
              default-src 'self';
              script-src 'self';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              connect-src 'self';
            `.replace(/\s+/g, " ")
          },
        ],
      },
    ];
  },
};

export default nextConfig;