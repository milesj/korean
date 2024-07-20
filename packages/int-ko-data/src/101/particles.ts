import type { WordDefinition } from 'hangeul';

const data: WordDefinition[] = [
	// 1.1
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
	// 1.2
	{
		chapter: '101-1.2',
		word: {
			korean: '이/가',
			conjugate: {
				consonant: '이',
				vowel: '가',
			},
		},
		meaning: {
			english: '(subject)',
			note: 'subject particle',
		},
	},
];

export default data;
