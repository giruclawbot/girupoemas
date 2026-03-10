import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/girupoemas',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
