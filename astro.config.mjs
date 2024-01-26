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
					label: 'Adverbs',
					autogenerate: { directory: 'adverbs' },
				},
				{
					label: 'Conjunctions',
					autogenerate: { directory: 'conjunctions' },
				},
				{
					label: 'Particles',
					autogenerate: { directory: 'particles' },
				},
				{
					label: 'Pronouns',
					autogenerate: { directory: 'pronouns' },
				},
			],
		}),
	],
});
