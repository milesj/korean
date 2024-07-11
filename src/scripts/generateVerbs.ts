import fs from 'node:fs';
import { VERBS_MAP } from '../data/verbs';
import { createFileName, genPage } from './helpers';

if (fs.existsSync('src/content/docs/verbs')) {
	fs.rmSync('src/content/docs/verbs', { recursive: true });
}

fs.mkdirSync('src/content/docs/verbs', { recursive: true });

Object.entries(VERBS_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	fs.writeFileSync(
		`src/content/docs/verbs/${createFileName(key)}.mdx`,
		genPage(entry),
		'utf8',
	);
});
