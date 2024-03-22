import fs from 'node:fs';
import { INTERJECTIONS_MAP } from '../data/interjections';
import { createFileName, genPage } from './helpers';

if (fs.existsSync('src/content/docs/interjections')) {
	fs.rmSync('src/content/docs/interjections', { recursive: true });
}

fs.mkdirSync('src/content/docs/interjections', { recursive: true });

Object.entries(INTERJECTIONS_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	fs.writeFileSync(
		`src/content/docs/interjections/${createFileName(key)}.mdx`,
		genPage(entry),
		'utf8',
	);
});
