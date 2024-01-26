// https://www.loc.gov/marc/specifications/specchareacc/KoreanHangul.html

export interface TranslateOptions {
	next?: Letter;
	prev?: Letter;
	startOfSyllable: boolean;
	startOfWord: boolean;
	endOfSyllable: boolean;
	endOfWord: boolean;
}

export type LetterType = 'vowel' | 'dipthong' | 'consonant' | 'double-consonant';

export interface Letter {
	char: string | string[];
	type: LetterType;
	translateAs: string | ((options: TranslateOptions) => string);
	pronounceAs?: string | ((options: TranslateOptions) => string);
}

export const VOWELS: Letter[] = [
	{
		char: 'ᅡ',
		type: 'vowel',
		translateAs: 'a',
		pronounceAs: 'ah',
	},
	{
		char: 'ᅣ',
		type: 'vowel',
		translateAs: 'ya',
		pronounceAs: 'yah',
	},
	{
		char: 'ᅥ',
		type: 'vowel',
		translateAs: 'eo',
		pronounceAs: 'uh',
	},
	{
		char: 'ᅧ',
		type: 'vowel',
		translateAs: 'yeo',
		pronounceAs: 'yuh',
	},
	{
		char: 'ᅩ',
		type: 'vowel',
		translateAs: 'o',
		pronounceAs: 'oh',
	},
	{
		char: 'ᅭ',
		type: 'vowel',
		translateAs: 'yo',
		pronounceAs: 'yoh',
	},
	{
		char: 'ᅮ',
		type: 'vowel',
		translateAs: 'u',
		pronounceAs: 'oo',
	},
	{
		char: 'ᅲ',
		type: 'vowel',
		translateAs: 'yu',
		pronounceAs: 'yoo',
	},
	{
		char: 'ᅳ',
		type: 'vowel',
		translateAs: 'eu',
		pronounceAs: 'eu',
	},
	{
		char: 'ᅵ',
		type: 'vowel',
		translateAs: 'i',
		pronounceAs: 'ee',
	},
	{
		char: 'ᅢ',
		type: 'vowel',
		translateAs: 'ae',
		pronounceAs: 'ay',
	},
	{
		char: 'ᅤ',
		type: 'vowel',
		translateAs: 'yae',
		pronounceAs: 'yay',
	},
	{
		char: 'ᅦ',
		type: 'vowel',
		translateAs: 'e',
		pronounceAs: 'ey',
	},
	{
		char: 'ᅨ',
		type: 'vowel',
		translateAs: 'ye',
		pronounceAs: 'yey',
	},
];

export function isVowel(letter: string): boolean {
	return VOWELS.some((vowel) => vowel.char === letter);
}

export const DIPTHONGS: Letter[] = [
	{
		char: 'ᅱ',
		type: 'dipthong',
		translateAs: 'wi',
		pronounceAs: 'wee',
	},
	{
		char: 'ᅯ',
		type: 'dipthong',
		translateAs: 'weo',
		pronounceAs: 'woh',
	},
	{
		char: 'ᅬ',
		type: 'dipthong',
		translateAs: 'oe',
		pronounceAs: 'weh',
	},
	{
		char: 'ᅪ',
		type: 'dipthong',
		translateAs: 'wa',
		pronounceAs: 'wah',
	},
	{
		char: 'ᅴ',
		type: 'dipthong',
		translateAs: 'ui',
		pronounceAs: 'eui',
	},
	{
		char: 'ᅫ',
		type: 'dipthong',
		translateAs: 'wae',
		pronounceAs: 'way',
	},
	{
		char: 'ᅰ',
		type: 'dipthong',
		translateAs: 'we',
		pronounceAs: 'wey',
	},
];

export function createDipthong(a: string, b: string) {
	if (a === 'ㅜ') {
		if (b === 'ㅣ') {
			return 'ㅟ';
		} else if (b === 'ㅓ') {
			return 'ㅝ';
		} else if (b === 'ㅔ') {
			return 'ㅞ';
		}
	} else if (a === 'ㅗ') {
		if (b === 'ㅣ') {
			return 'ㅚ';
		} else if (b === 'ㅏ') {
			return 'ㅘ';
		} else if (b === 'ㅐ') {
			return 'ㅙ';
		}
	} else if (a === 'ㅡ') {
		if (b === 'ㅣ') {
			return 'ㅢ';
		}
	}

	throw new Error(`Unknown dipthong: ${a} + ${b}`);
}

export const CONSONANTS: Letter[] = [
	{
		char: 'ᄇ',
		type: 'consonant',
		translateAs: 'b',
		pronounceAs: (opts) => (opts.startOfWord ? 'p' : 'b'),
	},
	{
		char: 'ᄌ',
		type: 'consonant',
		translateAs: 'j',
		pronounceAs: (opts) => (opts.startOfWord ? 'ch' : 'j'),
	},
	{
		char: 'ᄃ',
		type: 'consonant',
		translateAs: 'd',
		pronounceAs: (opts) => (opts.startOfWord ? 't' : 'd'),
	},
	{
		char: 'ᄀ',
		type: 'consonant',
		translateAs: (opts) => (opts.endOfSyllable ? 'k' : 'g'),
		pronounceAs: (opts) => (opts.startOfWord || opts.endOfSyllable ? 'k' : 'g'),
	},
	{
		char: ['ᄉ', 'ᆺ'],
		type: 'consonant',
		translateAs: (opts) => {
			console.log(opts);
			return opts.endOfSyllable || opts.endOfWord ? 't' : 's';
		},
	},
	{
		char: ['ᄒ', 'ᇂ'],
		type: 'consonant',
		translateAs: 'h',
	},
	{
		char: ['ᄅ', 'ᆯ'],
		type: 'consonant',
		translateAs: 'l',
		pronounceAs: 'hl',
	},
	{
		char: 'ᄋ',
		type: 'consonant',
		translateAs: (opts) => (opts.endOfSyllable ? 'ng' : ''),
	},
	{
		char: ['ᆫ', 'ᄂ'],
		type: 'consonant',
		translateAs: 'n',
	},
	{
		char: ['ᆷ', 'ᄆ'],
		type: 'consonant',
		translateAs: 'm',
	},
	{
		char: 'ᄏ',
		type: 'consonant',
		translateAs: 'k',
		pronounceAs: 'K',
	},
	{
		char: 'ᄐ',
		type: 'consonant',
		translateAs: 't',
		pronounceAs: 'T',
	},
	{
		char: 'ᄎ',
		type: 'consonant',
		translateAs: 'ch',
		pronounceAs: 'ch',
	},
	{
		char: 'ᄑ',
		type: 'consonant',
		translateAs: 'p',
		pronounceAs: 'P',
	},
];

export const DOUBLE_CONSONANTS: Letter[] = [
	{
		char: 'ᄈ',
		type: 'double-consonant',
		translateAs: 'bb',
		pronounceAs: 'B',
	},
	{
		char: 'ᄍ',
		type: 'double-consonant',
		translateAs: 'jj',
		pronounceAs: 'J',
	},
	{
		char: 'ᄄ',
		type: 'double-consonant',
		translateAs: 'dd',
		pronounceAs: 'D',
	},
	{
		char: 'ᄁ',
		type: 'double-consonant',
		translateAs: 'gg',
		pronounceAs: 'G',
	},
	{
		char: 'ᄊ',
		type: 'double-consonant',
		translateAs: 'ss',
		pronounceAs: 'S',
	},
];

export const LETTERS: Record<string, Letter> = {};

function mapLetters(letters: Letter[]) {
	for (const letter of letters) {
		if (Array.isArray(letter.char)) {
			for (const char of letter.char) {
				LETTERS[char] = letter;
			}
		} else {
			LETTERS[letter.char] = letter;
		}
	}
}

mapLetters(VOWELS);
mapLetters(DIPTHONGS);
mapLetters(CONSONANTS);
mapLetters(DOUBLE_CONSONANTS);
