import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://milesj.github.io',
	base: '/korean',
	integrations: [
		react(),
		starlight({
			title: 'Korean',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			customCss: ['./src/styles/flash.css'],
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
					label: 'Numbers',
					link: 'numbers',
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
				{
					label: 'Study',
					collapsed: true,
					items: [{ label: 'Flash cards', link: '/study/flash' }],
				},
			],
		}),
	],
});
