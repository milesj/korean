import fs from 'node:fs';
import { ADVERBS_MAP } from '../data/adverbs';
import { createFileName, genPage } from './helpers';

if (fs.existsSync('src/content/docs/adverbs')) {
	fs.rmSync('src/content/docs/adverbs', { recursive: true });
}

fs.mkdirSync('src/content/docs/adverbs', { recursive: true });

Object.entries(ADVERBS_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	fs.writeFileSync(`src/content/docs/adverbs/${createFileName(key)}.mdx`, genPage(entry), 'utf8');
});
