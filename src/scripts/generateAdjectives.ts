import fs from 'node:fs';
import { ADJECTIVES_MAP } from '../data/adjectives';
import { createFileName, genPage } from './helpers';

if (fs.existsSync('src/content/docs/adjectives')) {
	fs.rmSync('src/content/docs/adjectives', { recursive: true });
}

fs.mkdirSync('src/content/docs/adjectives', { recursive: true });

Object.entries(ADJECTIVES_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	fs.writeFileSync(
		`src/content/docs/adjectives/${createFileName(key)}.mdx`,
		genPage(entry),
		'utf8',
	);
});
