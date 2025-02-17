import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unijywgetgmmouifnrhj.supabase.co',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
