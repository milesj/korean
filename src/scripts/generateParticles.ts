import fs from 'node:fs';
import { PARTICLES_MAP } from '../data/particles';
import { createFileName, genPage } from './helpers';

if (fs.existsSync('src/content/docs/particles')) {
	fs.rmSync('src/content/docs/particles', { recursive: true });
}

fs.mkdirSync('src/content/docs/particles', { recursive: true });

Object.entries(PARTICLES_MAP).forEach(([key, entry]) => {
	if (entry.duplicate) {
		return;
	}

	fs.writeFileSync(`src/content/docs/particles/${createFileName(key)}.mdx`, genPage(entry), 'utf8');
});
