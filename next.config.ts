import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      images: { unoptimized: true },
      turbopack: { root: process.cwd() },
    }
  : {
      turbopack: { root: process.cwd() },
    };

export default nextConfig;
