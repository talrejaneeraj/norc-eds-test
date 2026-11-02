# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--norc-eds-test--talrejaneeraj.aem.page/
- Live: https://main--norc-eds-test--talrejaneeraj.aem.live/

## Documentation

Before using the aem-boilerplate, we recommend you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Install the dependencies: `npm i`
1. Start the local EDS proxy against the project preview origin:
   ```sh
   npm run start
   ```
   This runs:
   ```sh
   npx -y @adobe/aem-cli up --url https://main--norc-eds-test--talrejaneeraj.aem.page --no-open --port 3000
   ```
1. If you are pointing at a different upstream site or a custom domain, replace the URL in the command with your actual `--url` / `--pages-url` value.
1. Open http://localhost:3000 to preview the site.

## Header / footer shared fragments in EDS

The `header` and `footer` blocks resolve to `/nav` and `/footer` by default. If those URLs return `404`, the upstream site does not have those shared-content pages published or configured for the current origin.

Typical fix:
- ensure `/nav` and `/footer` exist in the source project and are published;
- confirm the local proxy is pointed at the right upstream origin with `--url` / `--pages-url`;
- keep the common experience in a single shared fragment document, then reuse it across pages instead of duplicating markup.

This project already contains `nav.html` and `footer.html` at the repo root, so the remaining issue is the upstream origin/configuration, not the block logic itself.
