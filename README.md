# Next.js Portfolio - GitHub Pages Deployment

This project is configured to deploy to GitHub Pages automatically when changes are pushed to the main branch.

## Deployment Setup

1. Ensure your GitHub repository has Pages enabled:
   - Go to repository Settings
   - Navigate to Pages section
   - Select 'Deploy from a branch'
   - Choose 'gh-pages' branch and '/ (root)' folder
   - Save the settings

2. Repository should have the following secrets set up:
   - `GITHUB_TOKEN` (automatically provided by GitHub)

3. Set the base path in your repository settings:
   - Create a repository secret named `NEXT_PUBLIC_BASE_PATH`
   - Set its value to your repository name (e.g., `/your-repo-name`)

The GitHub Actions workflow will automatically:
- Build the Next.js application
- Export static files
- Deploy to the gh-pages branch