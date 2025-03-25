import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';
import remarkMermaid from 'remark-mermaidjs';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://vertexclique.github.io',
  output: 'static',
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'vertexclique',
      openGraph: {
        home: {
          title: 'Vertexclique - Blog',
          description: 'Ideas and thoughts in a sink.'
        },
        blog: {
          title: 'Blog',
          description: 'Braindumps here...'
        },
        projects: {
          title: 'Projects'
        }
      },
      // giscus: {
      //   repository: 'louisescher/spectre',
      //   repositoryId: 'R_kgDONjm3ig',
      //   category: 'General',
      //   categoryId: 'DIC_kwDONjm3is4ClmBF',
      //   mapping: 'pathname',
      //   strict: true,
      //   reactionsEnabled: true,
      //   emitMetadata: false,
      //   lang: 'en',
      // }
    })
  ],
  // adapter: node({
  //   mode: 'standalone'
  // })
});