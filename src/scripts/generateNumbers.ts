import fs from 'node:fs';
import { Word } from '@hangeul';
import { NUMBERS_MAP } from '../data/numbers';
import { extractWord } from './helpers';

let content = `---
title: Numbers
---

import KoreanWord from '@components/KoreanWord.astro';

<table>
	<thead>
		<tr>
			<th>Number</th>
			<th colspan="3">Sino</th>
			<th colspan="3">Native</th>
		</tr>
	</thead>
	<tbody>`;

const numbers = Object.values(NUMBERS_MAP);

numbers.sort((a, b) => a.number - b.number);

numbers.forEach((entry) => {
	if (entry.duplicate) {
		return;
	}

	content += `
	<tr>
		<td>${entry.meaning}</td>`;

	if (Array.isArray(entry.word)) {
		const insts = entry.word.map((w) => new Word(extractWord(w)));

		content += `
		<td>${entry.word.map((w) => `<code>${w}</code>`).join(' / ')}</td>
		<td>${insts.map((i) => i.translate()).join(' / ')}</td>
		<td>${insts.map((i) => i.pronounce()).join(' / ')}</td>`;
	} else {
		const inst = new Word(extractWord(entry.word));

		content += `
		<td><code>${entry.word}</code></td>
		<td>${inst.translate()}</td>
		<td>${inst.pronounce()}</td>`;
	}

	if (Array.isArray(entry.native)) {
		const insts = entry.native.map((w) => new Word(w));

		content += `
		<td>${entry.native.map((w) => `<code>${w}</code>`).join(' / ')}</td>
		<td>${insts.map((i) => i.translate()).join(' / ')}</td>
		<td>${insts.map((i) => i.pronounce()).join(' / ')}</td>`;
	} else if (entry.native) {
		const inst = new Word(entry.native);

		content += `
		<td><code>${entry.native}</code></td>
		<td>${inst.translate()}</td>
		<td>${inst.pronounce()}</td>`;
	} else {
		content += `
		<td colspan="3"></td>`;
	}

	content += `
	</tr>`;
});

content += `
	</tbody>
</table>`;

fs.writeFileSync('src/content/docs/numbers.mdx', content, 'utf8');
