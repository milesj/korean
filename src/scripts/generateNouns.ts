import fs from 'node:fs';
import upperFirst from 'lodash/upperFirst';
import { NOUNS_MAP, type Noun } from '../data/nouns';

function genNounPage(category: string, entries: Record<string, Noun>) {
	let content = `---
title: ${upperFirst(category)}
---

import KoreanWords from '@components/KoreanWords.astro';

<KoreanWords sort words={${JSON.stringify(Object.values(entries))}} />`;

	if (!content.endsWith('\n')) {
		content += '\n';
	}

	return content;
}

const categories: Record<string, Record<string, Noun>> = {};

Object.entries(NOUNS_MAP).forEach(([key, entry]) => {
	(Array.isArray(entry.category) ? entry.category : [entry.category]).forEach((category) => {
		categories[category] ||= {};
		categories[category][key] = entry;
	});
});

Object.entries(categories).forEach(([category, entries]) => {
	fs.writeFileSync(`src/content/docs/nouns/${category}.mdx`, genNounPage(category, entries));
});
