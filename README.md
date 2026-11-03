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

## Sites

Each site lives in its own folder with its own header and footer fragments:

| Site | Folder | Local URL |
|---|---|---|
| Amplify AAPI | `amplifyaapi/` | http://localhost:3000/amplifyaapi/ |
| NORC | `norc/` | http://localhost:3000/norc/ |
| AmeriSpeak | `amerispeak/` | http://localhost:3000/amerispeak/ |

Each folder contains the page (`index.html` or `index.plain.html`), `nav.plain.html`, `footer.plain.html` and an `images/` folder.

## Local development

1. Install the dependencies: `npm i`
1. Start the local EDS dev server for all site folders:
   ```sh
   npm run start
   ```
   This runs:
   ```sh
   npx -y @adobe/aem-cli up --url https://main--norc-eds-test--talrejaneeraj.aem.page --html-folder . --html-mount / --no-open --port 3000
   ```
   `--html-folder . --html-mount /` serves the local site folders at `/<folder>/`.
1. If you are pointing at a different upstream site or a custom domain, replace the URL in the command with your actual `--url` / `--pages-url` value.
1. Open one of the local URLs above.

## Header / footer shared fragments in EDS

The `header` and `footer` blocks load `/nav` and `/footer` unless the page sets `nav` / `footer` metadata. Each site points to its own fragments:

- Amplify AAPI: `<meta name="nav" content="/amplifyaapi/nav">` and `<meta name="footer" content="/amplifyaapi/footer">` in `amplifyaapi/index.html`
- NORC and AmeriSpeak: `nav` and `footer` rows in the page `metadata` block (`/norc/nav`, `/norc/footer`, `/amerispeak/nav`, `/amerispeak/footer`)

Images inside nav/footer fragments use site-absolute paths (`/<folder>/images/...`) so they resolve the same on every page.
