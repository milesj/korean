export interface TranslateOptions {
	startOfSyllable: boolean;
	startOfWord: boolean;
	endOfSyllable: boolean;
	endOfWord: boolean;
}

export interface Letter {
	char: string;
	translateAs: (options: TranslateOptions) => string;
	pronounceAs?: (options: TranslateOptions) => string;
}

export const VOWELS: Letter[] = [
	{
		char: 'ㅏ',
		translateAs: () => 'a',
		pronounceAs: () => 'ah',
	},
	{
		char: 'ㅑ',
		translateAs: () => 'ya',
		pronounceAs: () => 'yah',
	},
	{
		char: 'ㅓ',
		translateAs: () => 'eo',
		pronounceAs: () => 'uh',
	},
	{
		char: 'ㅕ',
		translateAs: () => 'yeo',
		pronounceAs: () => 'yuh',
	},
	{
		char: 'ㅗ',
		translateAs: () => 'o',
		pronounceAs: () => 'oh',
	},
	{
		char: 'ㅛ',
		translateAs: () => 'yo',
		pronounceAs: () => 'yoh',
	},
	{
		char: 'ㅜ',
		translateAs: () => 'u',
		pronounceAs: () => 'oo',
	},
	{
		char: 'ㅠ',
		translateAs: () => 'yu',
		pronounceAs: () => 'yoo',
	},
	{
		char: 'ㅡ',
		translateAs: () => 'eu',
		pronounceAs: () => 'eu',
	},
	{
		char: 'ㅣ',
		translateAs: () => 'i',
		pronounceAs: () => 'ee',
	},
	{
		char: 'ㅐ',
		translateAs: () => 'ae',
		pronounceAs: () => 'ay',
	},
	{
		char: 'ㅒ',
		translateAs: () => 'yae',
		pronounceAs: () => 'yay',
	},
	{
		char: 'ㅔ',
		translateAs: () => 'e',
		pronounceAs: () => 'ey',
	},
	{
		char: 'ㅖ',
		translateAs: () => 'ye',
		pronounceAs: () => 'yey',
	},
];

export const DIPTHONGS: Letter[] = [
	{
		char: 'ㅟ',
		translateAs: () => 'wi',
		pronounceAs: () => 'wee',
	},
	{
		char: 'ㅝ',
		translateAs: () => 'weo',
		pronounceAs: () => 'woh',
	},
	{
		char: 'ㅚ',
		translateAs: () => 'oe',
		pronounceAs: () => 'weh',
	},
	{
		char: 'ㅘ',
		translateAs: () => 'wa',
		pronounceAs: () => 'wah',
	},
	{
		char: 'ㅢ',
		translateAs: () => 'ui',
		pronounceAs: () => 'ooi',
	},
	{
		char: 'ㅙ',
		translateAs: () => 'wae',
		pronounceAs: () => 'way',
	},
	{
		char: 'ㅞ',
		translateAs: () => 'we',
		pronounceAs: () => 'wey',
	},
];

export const CONSONANTS: Letter[] = [
	{
		char: 'ㅂ',
		translateAs: () => 'b',
		pronounceAs: (opts) => (opts.startOfWord ? 'p' : 'b'),
	},
	{
		char: 'ㅈ',
		translateAs: () => 'j',
		pronounceAs: (opts) => (opts.startOfWord ? 'ch' : 'j'),
	},
	{
		char: 'ㄷ',
		translateAs: () => 'd',
		pronounceAs: (opts) => (opts.startOfWord ? 't' : 'd'),
	},
	{
		char: 'ㄱ',
		translateAs: (opts) => (opts.endOfSyllable ? 'k' : 'g'),
		pronounceAs: (opts) => (opts.startOfWord || opts.endOfSyllable ? 'k' : 'g'),
	},
	{
		char: 'ㅅ',
		translateAs: () => 's',
		pronounceAs: (opts) => (opts.endOfSyllable ? 't' : 's'),
	},
	{
		char: 'ㅎ',
		translateAs: () => 'h',
	},
	{
		char: 'ㄹ',
		translateAs: (opts) => (opts.endOfSyllable ? 'r' : 'l'),
	},
	{
		char: 'ㅇ',
		translateAs: (opts) => (opts.startOfSyllable ? '' : 'ng'),
	},
	{
		char: 'ㄴ',
		translateAs: () => 'n',
	},
	{
		char: 'ㅁ',
		translateAs: () => 'm',
	},
	{
		char: 'ㅋ',
		translateAs: () => 'k',
		pronounceAs: () => 'K',
	},
	{
		char: 'ㅌ',
		translateAs: () => 't',
		pronounceAs: () => 'T',
	},
	{
		char: 'ㅊ',
		translateAs: () => 'ch',
		pronounceAs: () => 'ch',
	},
	{
		char: 'ㅍ',
		translateAs: () => 'p',
		pronounceAs: () => 'P',
	},
];

export const DOUBLE_CONSONANTS: Letter[] = [
	{
		char: 'ㅃ',
		translateAs: () => 'bb',
		pronounceAs: () => 'B',
	},
	{
		char: 'ㅉ',
		translateAs: () => 'jj',
		pronounceAs: () => 'J',
	},
	{
		char: 'ㄸ',
		translateAs: () => 'dd',
		pronounceAs: () => 'D',
	},
	{
		char: 'ㄲ',
		translateAs: () => 'gg',
		pronounceAs: () => 'G',
	},
	{
		char: 'ㅆ',
		translateAs: () => 'ss',
		pronounceAs: () => 'S',
	},
];

export const LETTERS: Record<string, Letter> = {};
