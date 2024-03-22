import fs from 'node:fs';
import { CONJUNCTIONS_MAP } from '../data/conjunctions';
import { createFileName, genPage } from './helpers';

if (fs.existsSync('src/content/docs/conjunctions')) {
	fs.rmSync('src/content/docs/conjunctions', { recursive: true });
}

fs.mkdirSync('src/content/docs/conjunctions', { recursive: true });

Object.entries(CONJUNCTIONS_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	fs.writeFileSync(
		`src/content/docs/conjunctions/${createFileName(key)}.mdx`,
		genPage(entry),
		'utf8',
	);
});
