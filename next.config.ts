import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'app')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
