/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sermonslide/slide-schema', '@sermonslide/design-system', '@sermonslide/rendering-engine'],
  output: 'export',
  basePath: '/sermonslide',
  assetPrefix: '/sermonslide',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
