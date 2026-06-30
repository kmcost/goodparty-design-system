# GoodParty Design System

A React component library and design token system built for [GoodParty.org](https://goodparty.org), extracted from their `omni` monorepo (`packages/styleguide`) with commit history preserved.

Components are built on [Radix UI](https://www.radix-ui.com/) primitives with [Tailwind CSS v4](https://tailwindcss.com/) tokens, documented and previewable in [Storybook](https://storybook.js.org/).

## Run locally

```bash
npm install
npm run storybook
```

## Build a static export

```bash
npm run build-storybook
```

## Structure

```
src/
  components/ui/   # React components (Radix-based)
  hooks/
  lib/utils.ts      # cn() utility
  stories/          # Storybook stories
  design-tokens.css
  tailwind-theme.css
  styleguide-scope.css
  typography.css
```
