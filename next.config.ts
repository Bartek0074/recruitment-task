import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'app')],
  },
};

export default nextConfig;
