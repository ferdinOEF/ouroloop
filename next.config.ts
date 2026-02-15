import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    turbopackUseSystemTlsCerts: true
  }
};

export default nextConfig;
