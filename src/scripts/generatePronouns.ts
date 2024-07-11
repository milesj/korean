import fs from 'node:fs';
import { PRONOUNS_MAP } from '../data/pronouns';
import { createFileName, genPage } from './helpers';

if (fs.existsSync('src/content/docs/pronouns')) {
	fs.rmSync('src/content/docs/pronouns', { recursive: true });
}

fs.mkdirSync('src/content/docs/pronouns', { recursive: true });

Object.entries(PRONOUNS_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	fs.writeFileSync(
		`src/content/docs/pronouns/${createFileName(key)}.mdx`,
		genPage(entry),
		'utf8',
	);
});
