/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // GitHub Pages deployment config
  env: {
    NEXT_PUBLIC_URL: `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}`,
  },
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    domains: ['github.com']
  },
  trailingSlash: true,
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')]
  }
}

module.exports = nextConfig