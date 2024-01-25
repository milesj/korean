export type PunctuationType = 'comma' | 'period' | 'quote' | 'range';

export interface Punctuation {
	char: string | string[];
	type: PunctuationType;
}

export const COMMAS: Punctuation[] = [
	{
		char: [',', '，'],
		type: 'comma',
	},
	{
		char: ['·', 'ㆍ', '、'],
		type: 'comma',
	},
];

export const PERIODS: Punctuation[] = [
	{
		char: '.',
		type: 'period',
	},
	{
		char: '。',
		type: 'period',
	},
];

export const QUOTES: Punctuation[] = [
	{
		char: ["'", '"', '“', '”', '‘', '‘'],
		type: 'quote',
	},
	{
		char: ['『', '』', '『', '』', '「', '」', '《', '》'],
		type: 'quote',
	},
];

export const RANGES: Punctuation[] = [
	{
		char: ['-', '–', '—'],
		type: 'range',
	},
	{
		char: ['~', '～'],
		type: 'range',
	},
];

export const PUNCTUATION: Record<string, Punctuation> = {};

function mapPunctuation(list: Punctuation[]) {
	for (const punctuation of list) {
		if (Array.isArray(punctuation.char)) {
			for (const char of punctuation.char) {
				PUNCTUATION[char] = punctuation;
			}
		} else {
			PUNCTUATION[punctuation.char] = punctuation;
		}
	}
}

mapPunctuation(COMMAS);
mapPunctuation(PERIODS);
mapPunctuation(QUOTES);
mapPunctuation(RANGES);
