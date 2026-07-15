import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One .md file per project — adding a project is just adding a file here.
// Schema mirrors design.md Section 6.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    org: z.string(),
    date: z.coerce.date(), // sort order — most recent first
    featured: z.boolean().default(false), // only one project should be true at a time
    summary: z.string(),
    // Optional — powers the expandable brief body. If omitted, no expand control renders.
    details: z
      .object({
        background: z.string(),
        approach: z.string(),
        outcome: z.string(),
      })
      .optional(),
    stack: z.array(z.string()).default([]),
    // Optional — drives the "View project ↗" redirect. If empty, no link renders.
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

export const collections = { projects };
