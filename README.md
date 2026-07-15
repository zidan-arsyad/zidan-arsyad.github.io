# Muhammad Zidan Arsyad

**ML Engineer · AI Master's Student · LLM Systems**

Live site: **[zidan-arsyad.github.io](https://zidan-arsyad.github.io)**

I build and deploy end-to-end LLM pipelines — RAG, SFT, and CPT — for production use in government intelligence workflows. Most recently I led a four-person AI team at the Artificial Intelligence Talent Factory (AITF), a joint program between BPSDM Komdigi and Gadjah Mada University, delivering a **legal document intelligence system** for Indonesia's Ministry of Communication and Digital Affairs: a RAG pipeline over Indonesian legal corpora (Qdrant), a Qwen3 model fine-tuned via SFT on a CPT-adapted base, served with vLLM and observable end-to-end with LangSmith — producing structured daily briefs that inform policy responses.

**Currently:** Master of Computer Science (Artificial Intelligence) at Gadjah Mada University.
**Previously:** B.Eng. Computer Engineering, University of Indonesia (GPA 3.71/4.00).

**What I work with:** Python · FastAPI · RAG (Qdrant, dense retrieval) · SFT/CPT fine-tuning · vLLM · HuggingFace Hub · LangSmith · classical ML & NLP · AWS/Azure/VPS deployment.

### Contact

- 📧 [zidarsyad@gmail.com](mailto:zidarsyad@gmail.com)
- 💼 [linkedin.com/in/zidan-arsyad](https://www.linkedin.com/in/zidan-arsyad)
- 🐙 [github.com/zidan-arsyad](https://github.com/zidan-arsyad)
- 📄 Resume: downloadable on the [site](https://zidan-arsyad.github.io/#resume)

---

## Development

This repo is the site's source. Built with [Astro](https://astro.build): a fully static single page, plain CSS custom properties, and near-zero client-side JavaScript.

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built site locally
```

### Editing content

| Task | Where |
|---|---|
| Add a project | Create a new `.md` file in `src/content/projects/` (frontmatter schema in `src/content.config.ts`) |
| Change the featured project | Flip `featured: true`/`false` in project frontmatter — only one `true` at a time |
| Update the resume | Replace the file(s) in `src/assets/resume/` — download buttons are generated per file found, no code changes |
| Bio, contact links, education, hero line, focus areas | `src/site.config.ts` |
| Headshot | `public/images/headshot.jpeg` |
| Social preview image (og-image) | `public/images/og-image.jpeg` (1200×630px recommended) |
| Design tokens (color, type, spacing) | `src/styles/tokens.css` |

### Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (repo setting: Pages → Source → GitHub Actions).
