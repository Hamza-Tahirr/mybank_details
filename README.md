# My Bank Details

A small SAPUI5 freestyle app that shows a bank account summary and opens a dialog with more account details. It is a portfolio project for practising XML views, fragments and dialogs in SAP Fiori development. All values shown in the app are hardcoded sample data; there is no backend or OData service.

## Features

- Account summary (masked account number, account holder, IFSC code) rendered from an XML fragment embedded in the main view
- "Find more Details" button that opens a dialog with the full account details, including address, city and postal code
- The dialog fragment is loaded lazily with `loadFragment` on the first click and reused afterwards
- Runs inside a local SAP Fiori launchpad sandbox or as a standalone page
- QUnit unit test and OPA5 integration test setup

## Tech stack

- SAPUI5 1.122 (`sap.m`), XML views and fragments, theme `sap_horizon`
- UI5 Tooling (`@ui5/cli` v3)
- SAP Fiori tools (`@sap/ux-ui5-tooling`), project started from the basic freestyle template

## Project structure

```
webapp/
  Component.js                              UI component, starts the router
  manifest.json                             app descriptor (models, routing, libraries)
  controller/App.controller.js              opens and closes the details dialog
  view/App.view.xml                         main page
  view/fragments/BankDetails.fragment.xml   account summary
  view/fragments/MoreDetails.fragment.xml   "more details" dialog
  model/models.js                           device model
  i18n/i18n.properties                      app texts
  css/style.css                             custom styles
  test/                                     launchpad sandbox, unit and integration tests
ui5.yaml                                    UI5 Tooling config, SAPUI5 served from ui5.sap.com
ui5-local.yaml                              UI5 Tooling config using a local SAPUI5 framework
```

## Getting started

Requirements: Node.js LTS with npm.

```bash
npm install
npm start
```

`npm start` runs the Fiori tools dev server and opens the app in the launchpad sandbox (`test/flpSandbox.html#comsapmybankdetails-display`). SAPUI5 resources are proxied from `https://ui5.sap.com`, so an internet connection is needed. No environment variables are required.

On Windows with a recent Node.js release, the Fiori tools version locked in `package-lock.json` can stop with `spawn EINVAL`. In that case `npx ui5 serve --open "test/flpSandbox.html#comsapmybankdetails-display"` starts the same dev server through UI5 Tooling directly.

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run start-local` | Same as `start`, but uses `ui5-local.yaml` so UI5 Tooling downloads SAPUI5 1.122.2 locally |
| `npm run start-noflp` | Opens `index.html` without the launchpad sandbox |
| `npm run unit-tests` | Opens the QUnit unit tests in the browser |
| `npm run int-tests` | Opens the OPA5 integration tests in the browser |
| `npm run build` | Builds the app into `dist/` |

## License

MIT, see [LICENSE](LICENSE).
