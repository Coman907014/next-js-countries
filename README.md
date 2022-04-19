## Getting Started

```
npm i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

Merges into [main] branch generate a new deployment

# Storybook

Storybook docs here.

# Cypress

data-test attributes denomination: element:component:unique-identifier
"title:card:0". Title element, inside card component, which has index 0.
(We presume it's an element mapping and that's the index)

Cypress docs here

# Needed Updates & Improvements

Search for @TODO

# TODO

1. Mobile Landing Page - DONE
  1.a. Search & Filter - DONE
  1.b. Extract new Intl.NumberFormat into a number formatting service
2. Mobile Details - DONE
  2.a. Details Page Back Button - DONE
3. Cypress Coverage
4. Add all components to Storybook
5. Add Chromatic for Visual Regression testing
6. Audit packages and remove high & mid severity vulnerabilities. Security++!
7. Add translations library
8. For better SEO we should replace country code to country name in URL
9. Loaders are inexistent and calls might take a bit too long. Should be added.
10. Accessibility testing lib for Cypress should be added -> https://www.npmjs.com/package/cypress-axe. This could be a good one.
11. Filter, then Search functionality is not working, should be added.
12. Debouncer on search input should be added

# Known BE Issues
Czech Republic has no border countries

