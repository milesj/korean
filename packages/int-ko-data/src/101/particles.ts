import type { WordDefinition } from 'hangeul';

const data: WordDefinition[] = [
	{
		chapter: '101-1.1',
		word: '도',
		meaning: ['also', 'too'],
	},
	{
		chapter: '101-1.1',
		word: {
			korean: '은/는',
			conjugate: {
				consonant: '은',
				vowel: '는',
			},
		},
		meaning: {
			english: 'as for me',
			note: 'topic particle',
		},
	},
];

export default data;
