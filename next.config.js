/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  }
}

module.exports = nextConfig