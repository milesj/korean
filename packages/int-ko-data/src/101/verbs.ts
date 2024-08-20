import type { WordDefinition } from 'hangeul';

const data: WordDefinition[] = [
	// 1.1
	{
		chapter: '101-1.1',
		word: {
			korean: '이다',
			conjugate: {
				consonant: '이에요',
				vowel: '예요',
			},
		},
		meaning: 'to be',
	},
	// 1.2
	{
		chapter: '101-1.2',
		word: '아니다',
		meaning: 'to not be',
	},
	// 2.1
	{
		chapter: '101-2.1',
		word: '먹다',
		meaning: 'to eat',
	},
	{
		chapter: '101-2.1',
		word: '앉다',
		meaning: 'to sit',
	},
	{
		chapter: '101-2.1',
		word: '알다',
		meaning: 'to know',
	},
];

export default data;
