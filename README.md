# zidan-arsyad.github.io

Personal portfolio of **Muhammad Zidan Arsyad** — AI Master's student, applied ML & LLM systems. Live at [zidan-arsyad.github.io](https://zidan-arsyad.github.io).

Built with [Astro](https://astro.build): a fully static single page, plain CSS custom properties, and near-zero client-side JavaScript. Project entries are laid out like the intelligence briefing documents behind the featured Komdigi project — structured summary, expandable BACKGROUND / APPROACH / OUTCOME detail, and an external link when one exists.

## Development

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built site locally
```

## Editing content

| Task | Where |
|---|---|
| Add a project | Create a new `.md` file in `src/content/projects/` (frontmatter schema in `src/content.config.ts`) |
| Change the featured project | Flip `featured: true`/`false` in project frontmatter — only one `true` at a time |
| Update the resume | Replace the file(s) in `src/assets/resume/` — download buttons are generated per file found, no code changes |
| Bio, contact links, education | `src/site.config.ts` |
| Headshot | `public/images/headshot.png` |
| Design tokens (color, type, spacing) | `src/styles/tokens.css` |

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (repo setting: Pages → Source → GitHub Actions).
