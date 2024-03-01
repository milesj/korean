import fs from 'node:fs';
import upperFirst from 'lodash/upperFirst';
import { ADVERBS_MAP, type Adverb } from '../data/adverbs';

function genAdverbPage(entry: Adverb) {
	const meanings = Array.isArray(entry.meaning) ? entry.meaning : [entry.meaning];
	const words = Array.isArray(entry.word) ? entry.word : [entry.word];

	let content = `---
title: ${meanings.map(upperFirst).join(', ')}
---

import KoreanWord from '@components/KoreanWord.astro';`;

	words.forEach((word) => {
		content += '\n\n';
		content += `<KoreanWord word="${word}" />`;
	});

	if (entry.description) {
		content += '\n\n';
		content += entry.description;
	}

	if (entry.guidelines) {
		content += '\n\n';
		content += '## Guidelines\n\n';

		entry.guidelines.forEach((guideline) => {
			content += `- ${guideline}\n`;
		});
	}

	if (entry.wordPronounced) {
		content += '\n\n';
		content += `## Pronunciation\n\n`;
		content += `<KoreanWord word="${entry.wordPronounced}" />`;
	}

	if (!content.endsWith('\n')) {
		content += '\n';
	}

	return content;
}

Object.entries(ADVERBS_MAP).forEach(([key, entry]) => {
	fs.writeFileSync(`src/content/docs/adverbs/${key}.mdx`, genAdverbPage(entry));
});
