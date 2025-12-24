import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  poweredByHeader: false,
};

export default nextConfig;
