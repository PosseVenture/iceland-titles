import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // This allows production builds to succeed even if there are TypeScript errors.
    // We can remove this later once all types are fixed.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;