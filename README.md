# WDD 331R Practice Site

**Student:** Nathan Escujuri
**Semester:** 9th Semester, Senior
**Live Site:** https://nathaneksy.github.io/wdd331-practice/

# CSS Architecture
css/
├── base/
│   ├── elements.css
│   └── reset.css
├── components/
│   └── card.css
├── layout/
│   └── home.css
├── tokens/
│   ├── colors.css
│   └── variables.css
├── utilities/
│   └── utilities.css
└── main.css

# Build Tool

This project uses Lightning CSS for:
- CSS bundling
- minification
- import processing
- watch mode development

# Build CSS

Generate the production stylesheet:

```bash
npm run build
```

## About

This repository is my Practice Site for WDD 331R: Advanced CSS.
Each week I add new pages and styles as I work through the course
assignments. The site deploys automatically to GitHub Pages on
every push to main.

This site also supports light and dark mode as well as a browser default. The color tokens are inside css/tokens/colors.css

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
- [Visual Effects](unit-3/visual-effects/index.html)
- [Grid Layouts](unit-4/grid-layouts/editorial.html)
- [Container Demo](unit-4/advanced/container-demo.html)
- [Sticky Demo](unit-4/advanced/sticky-demo.html)
