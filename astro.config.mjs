// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://mykytashaban.dev',
	integrations: [mdx(), sitemap()],
	markdown: { shikiConfig: { theme: 'github-dark' } },
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Geist',
			cssVariable: '--font-geist-sans',
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			fallbacks: ['ui-monospace', 'monospace'],
		},
	],
});
