import fs from 'node:fs';
import upperFirst from 'lodash/upperFirst';
import { NOUNS_MAP, type Noun, type NounCategory } from '../data/nouns';

const CATEGORIES: Record<NounCategory, string> = {
	object: 'Objects & items',
	activity: 'Activities',
	action: 'Actions',
	animal: 'Animals',
	classification: 'Classification',
	counter: 'Counters',
	country: 'Countries',
	datetime: 'Date & time',
	direction: 'Directions',
	education: 'Education',
	entertainment: 'Entertainment',
	family: 'Family',
	finance: 'Finance',
	'food-drink': 'Food & drink',
	human: 'Human',
	language: 'Language & grammar',
	leisure: 'Leisure',
	nature: 'Nature',
	place: 'Places',
	sport: 'Sports',
	vehicle: 'Vehicles',
	weather: 'Weather',
};

function genNounPage(category: NounCategory, entries: Record<string, Noun>) {
	let content = `---
title: ${CATEGORIES[category] || upperFirst(category)}
---

import KoreanWords from '@components/KoreanWords.astro';

<KoreanWords sort words={${JSON.stringify(Object.values(entries))}} />`;

	if (!content.endsWith('\n')) {
		content += '\n';
	}

	return content;
}

const categories: { [K in NounCategory]?: Record<string, Noun> } = {};

Object.entries(NOUNS_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	(Array.isArray(entry.category) ? entry.category : [entry.category]).forEach((category) => {
		categories[category] ||= {};
		categories[category]![key] = entry;
	});
});

Object.entries(categories).forEach(([category, entries]) => {
	fs.writeFileSync(
		`src/content/docs/nouns/${category}.mdx`,
		genNounPage(category as NounCategory, entries),
	);
});
