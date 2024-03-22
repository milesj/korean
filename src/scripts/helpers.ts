import upperFirst from 'lodash/upperFirst';
import type { Word } from '../data/common';
import kebabCase from 'lodash/kebabCase';

export function createFileName(key: string) {
	return kebabCase(key);
}

export function genPage(entry: Word) {
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
