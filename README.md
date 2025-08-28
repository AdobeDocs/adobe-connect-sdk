# Adobe Connect SDK Documentation

This repository contains the documentation site for the Adobe Connect SDK. The site is deployed to EDS for Adobe Developer documentation.

## 🚀 Quick Start

### Development
Start the local development server:
```bash
npm run dev
```
This runs a custom Express server on port 3003 (or the port specified in `DEV_PORT` environment variable) that serves static files from `src/pages/`.

## 📁 Project Structure

```
src/pages/          # Documentation content in Markdown
static/            # Static assets (images, downloads, etc.)
.github/workflows/ # CI/CD workflows for linting and deployment
```

## 🛠️ Available Commands

This project includes several utility commands for content management and validation:

### Development
- **`npm run dev`** - Start local development server using the custom Express server

### Content Management
- **`npm run buildNavigation`** - Generate navigation structure from directory hierarchy
- **`npm run buildRedirections`** - Build URL redirections based on content changes
- **`npm run renameFiles`** - Rename files according to Adobe Developer site conventions
- **`npm run normalizeLinks`** - Normalize internal and external links throughout the documentation

### Content Validation
- **`npm run lint`** - Run comprehensive linting checks on documentation content

### Site Features
- **`npm run buildSiteWideBanner`** - Generate site-wide banner content for announcements

All utility commands use the `@AdobeDocs/adp-devsite-utils` package, which provides standardized tooling across Adobe Developer documentation sites.

## ✅ Linting & Quality Assurance

### Automated Linting
The project includes automated linting that runs on every pull request targeting the `main` branch. The linting process:

- **Triggers**: Automatically runs on PRs when files in `src/pages/**` are modified
- **Tools**: Uses the standardized Adobe Developer site linting rules via `adp-devsite-utils`
- **Scope**: Validates markdown syntax, link integrity, content structure, and Adobe style guidelines

### Manual Linting
You can run linting manually at any time:
```bash
npm run lint
```

The linting covers:
- Markdown syntax and formatting
- Link validation (internal and external)
- Content structure and hierarchy
- Adobe Developer documentation standards
- Accessibility guidelines

## 📝 Navigation Setup

To configure the site navigation:
1. Edit the directory hierarchy in `src/pages/`
2. Update navigation configuration in `src/pages/config.md`
3. Run `npm run buildNavigation` to generate the navigation structure
4. The navigation will automatically reflect your content organization

## 🚢 Deployment

### Staging Deployment
1. Go to **Actions > Deployment > Run workflow** in the GitHub repository
2. The site deploys to: `developer-stage.adobe.com/{path-prefix}/{relative-path-to-file}`

### Production Deployment
Production deployments follow the Adobe Developer site deployment process and are typically managed through the main Adobe Developer site infrastructure.

## 📂 Content Guidelines

- Place all documentation content in `src/pages/`
- Use Markdown format for all documentation
- Follow the Adobe Developer documentation style guide
- Include proper front matter in Markdown files
- Use relative links for internal navigation

## 🆘 Support

**Primary Support Channel**: `#adobe-developer-website` Slack channel

Feel free to join the channel for:
- Technical questions about the documentation site
- Content review and feedback
- Deployment assistance
- Tool and workflow support

## 🔧 Technical Details

- **Framework**: Gatsby 4.22.0 with Adobe AIO Theme
- **Node.js**: Uses ES modules (dev.mjs)
- **Package Manager**: npm
- **CI/CD**: GitHub Actions for automated linting and deployment
- **Hosting**: Adobe Edge Delivery Services (EDS)
