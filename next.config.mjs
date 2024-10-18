/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == 'production';

const nextConfig = {
  basePath: isProd ? '/helper-feature' : '',
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
