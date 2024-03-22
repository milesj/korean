import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// site: '',
	integrations: [
		starlight({
			title: 'Korean 101',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			sidebar: [
				{
					label: 'Adjectives',
					collapsed: true,
					autogenerate: { directory: 'adjectives' },
				},
				{
					label: 'Adverbs',
					collapsed: true,
					autogenerate: { directory: 'adverbs' },
				},
				{
					label: 'Conjunctions',
					collapsed: true,
					autogenerate: { directory: 'conjunctions' },
				},
				{
					label: 'Interjections',
					collapsed: true,
					autogenerate: { directory: 'interjections' },
				},
				{
					label: 'Nouns',
					collapsed: true,
					autogenerate: { directory: 'nouns' },
				},
				{
					label: 'Particles',
					collapsed: true,
					autogenerate: { directory: 'particles' },
				},
				{
					label: 'Pronouns',
					collapsed: true,
					autogenerate: { directory: 'pronouns' },
				},
				{
					label: 'Verbs',
					collapsed: true,
					autogenerate: { directory: 'verbs' },
				},
			],
		}),
	],
});
