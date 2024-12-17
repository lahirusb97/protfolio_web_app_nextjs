# Base Path Configuration for GitHub Pages

The current setup for your Next.js application's base path is now correct:

1. In `.env`:
```
NEXT_PUBLIC_BASE_PATH=/protfolio_web_app_nextjs
```

2. In `next.config.js`, the configuration automatically uses this environment variable:
```js
basePath: process.env.NEXT_PUBLIC_BASE_PATH || ''
```

## Why this is correct

- When deploying to GitHub Pages, you need to set the base path to match your repository name
- The previous value `https://github.com/lahirusb97/protfolio_web_app_nextjs` was incorrect because:
  - It included the full GitHub URL, which is not needed
  - The base path should only be the path segment that comes after your GitHub Pages domain

## How it works

- Your site will be hosted at: `https://lahirusb97.github.io/protfolio_web_app_nextjs/`
- The base path `/protfolio_web_app_nextjs` ensures all assets and links are correctly prefixed
- Next.js will automatically handle this prefixing for all internal links and assets

## Testing

You can verify this works by:
1. Running the build: `npm run build`
2. The exported files will have the correct paths
3. All links and assets will be prefixed with `/protfolio_web_app_nextjs`