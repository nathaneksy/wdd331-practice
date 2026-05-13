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

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
