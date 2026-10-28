# ✈️ Travel App

[![ci](https://github.com/jennifershih/travel-app/actions/workflows/ci.yml/badge.svg)](https://github.com/jennifershih/travel-app/actions/workflows/ci.yml)
[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![Ignite UI](https://img.shields.io/badge/Ignite%20UI-22-0099ff)](https://www.infragistics.com/products/ignite-ui-angular)

A travel inspiration app: sign-in and sign-up screens, a dashboard of destinations and an articles page.

Originally generated in 2021 with [Infragistics App Builder](https://www.infragistics.com/products/appbuilder), then upgraded in 2026 from Angular 12 to Angular 22.

## Pages

- Login, sign-up, reset and set-new-password screens
- Dashboard with destination cards and a data grid
- Articles page

## Built with

- Angular 22 and Ignite UI for Angular 22
- Built-in control flow (`@if` / `@for`) and `inject()`
- Vitest with a smoke test that opens every route
- ESLint (angular-eslint) and Prettier

## Getting started

Requires Node.js 22+.

```bash
npm install
npm start          # opens http://localhost:4200
```

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server |
| `npm run build` | Production build |
| `npm run test:ci` | Unit tests (Vitest) |
| `npm run lint` | ESLint |
