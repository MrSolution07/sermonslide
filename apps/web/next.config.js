/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sermonslide/slide-schema', '@sermonslide/design-system', '@sermonslide/rendering-engine'],
};

module.exports = nextConfig;
