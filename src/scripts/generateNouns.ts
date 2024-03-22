import fs from 'node:fs';
import upperFirst from 'lodash/upperFirst';
import { NOUNS_MAP, type Noun, type NounCategory } from '../data/nouns';

const CATEGORIES: Record<NounCategory, string> = {
	object: 'Objects & items',
	activity: 'Activities',
	action: 'Actions',
	classification: 'Classification',
	counter: 'Counters',
	country: 'Countries',
	datetime: 'Date & time',
	education: 'Education',
	entertainment: 'Entertainment',
	'food-drink': 'Food & drink',
	human: 'Human',
	leisure: 'Leisure',
	nature: 'Nature',
	place: 'Places',
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
