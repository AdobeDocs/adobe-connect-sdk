# Adobe Connect SDK Documentation

Adobe Connect SDK documentation site deployed to EDS.
The production address is https://developer.adobe.com/adobe-connect-sdk/

## Quick Start

Start development server:
```bash
npm run dev
```
Runs Express server on port 3003 serving files from `src/pages/`.

## Commands

**Development**
- `npm run dev` - Start local server

**Content Management**
- `npm run buildNavigation` - Generate navigation structure
- `npm run buildRedirections` - Build URL redirections  
- `npm run renameFiles` - Rename files to Adobe conventions
- `npm run normalizeLinks` - Normalize internal/external links

**Validation**
- `npm run lint` - Run linting checks

**Site Features**
- `npm run buildSiteWideBanner` - Generate site-wide banner

*All commands use `@AdobeDocs/adp-devsite-utils` for standardized tooling.*

## Linting

**Automated**: Runs on PRs when `src/pages/**` files change
**Manual**: `npm run lint`

Validates markdown syntax, links, content structure, and Adobe style guidelines.

## Navigation

1. Edit directory hierarchy in `src/pages/`
2. Update `src/pages/config.md` 
3. Run `npm run buildNavigation`

## Deployment

**Staging**: Actions > Deployment > Run workflow  
**URL**: `developer-stage.adobe.com/adobe-connect-sdk/`

## Support

Join `#adobe-developer-website` Slack channel for help.

## Tech Stack

- Gatsby 4.22.0 with Adobe AIO Theme
- Node.js ES modules  
- npm
- GitHub Actions CI/CD
- Adobe EDS hosting
