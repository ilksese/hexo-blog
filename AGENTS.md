# AGENTS.md — hexo-blog

## First-time setup

```sh
git submodule update --init --recursive   # fetch Butterfly theme (required before build)
npm install                                # install dependencies
```

## Dev commands

| Command          | Action                              |
|------------------|-------------------------------------|
| `npm run build`  | `hexo generate`                     |
| `npm run clean`  | `hexo clean`                        |
| `npm run server` | `hexo server` (local preview)       |
| `npm run deploy` | `hexo deploy`                       |

Package manager is **npm** (v11). `package.json` declares yarn but only npm is available in this environment. No test, lint, or formatter tooling exists.

## Hexo CLI

The `hexo` binary is at `node_modules/.bin/hexo` but its shebang (`#!/usr/bin/env`) may not work in all environments. Use `node node_modules/.bin/hexo <command>` to invoke it directly.

## Architecture

- **Hexo v7** static site generator. Theme: **Butterfly** (Git submodule at `themes/butterfly/`).
- Entrypoints: `_config.yml` (site config), `_config.butterfly.yml` (~1k lines, theme config).
- `skip_render: ["html/**", "image/*"]` — files under `source/html/` and `source/image/` are served as-is (not processed by Hexo).
- `scripts/inject.js` — injects jQuery + Velocity.js + home-page animations on every page via Hexo's injector API.
- `source/_posts/` — 10 markdown blog posts. Scaffolds in `scaffolds/`.
- No CI/CD config in-repo; deployment target is Netlify (https://liudingchao.netlify.app/).

## Conventions

- New posts: `hexo new post <title>` (uses `scaffolds/post.md`).
- Static HTML demos live under `source/html/` (not processed by Hexo).
- Images for posts go in `source/image/`.
- Blog is in English (`language: en`). Categories used: `杂记` (notes), `前端` (frontend).
- Default `syntax_highlighter: highlight.js`. No codegen or migrations.