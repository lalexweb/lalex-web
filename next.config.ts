import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,
  typedRoutes: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  poweredByHeader: false,
};

export default nextConfig;
