// https://www.loc.gov/marc/specifications/specchareacc/KoreanHangul.html

import * as soundChange from './rule-changes';

export const HANGEUL = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g;

export interface TranslateOptions {
	nextLetter?: Letter;
	prevLetter?: Letter;
	startOfSyllable: boolean;
	startOfWord: boolean;
	endOfSyllable: boolean;
	endOfWord: boolean;
}

export type TranslateFunc = (options: TranslateOptions) => string;

export type LetterType = 'vowel' | 'dipthong' | 'consonant' | 'double-consonant';

export interface Letter {
	char: string;
	type: LetterType;
	translateAs: string | TranslateFunc;
	pronounceAs?: string | TranslateFunc;
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
		pronounceAs: 'euh',
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
		translateAs: 'wo',
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
		char: 'ㅂ',
		type: 'consonant',
		translateAs: 'b',
		pronounceAs(opts) {
			if (soundChange.isRule3(opts)) {
				return 'B';
			}

			return opts.startOfWord ? 'p' : 'b';
		},
	},
	{
		char: 'ㅈ',
		type: 'consonant',
		translateAs: 'j',
		pronounceAs(opts) {
			if (soundChange.isRule3(opts)) {
				return 'J';
			}

			if (soundChange.isRule1(opts)) {
				return 't';
			}

			return opts.startOfWord ? 'ch' : 'j';
		},
	},
	{
		char: 'ㄷ',
		type: 'consonant',
		translateAs: 'd',
		pronounceAs(opts) {
			if (soundChange.isRule3(opts)) {
				return 'D';
			}

			return opts.startOfWord ? 't' : 'd';
		},
	},
	{
		char: 'ㄱ',
		type: 'consonant',
		translateAs: (opts) => (opts.endOfSyllable ? 'k' : 'g'),
		pronounceAs(opts) {
			if (soundChange.isRule3(opts)) {
				return 'G';
			}

			return opts.startOfWord || opts.endOfSyllable ? 'k' : 'g';
		},
	},
	{
		char: 'ㅅ',
		type: 'consonant',
		translateAs(opts) {
			if (soundChange.isRule3(opts)) {
				return 'S';
			}

			if (soundChange.isRule1(opts)) {
				return 't';
			}

			return opts.endOfSyllable || opts.endOfWord ? 't' : 's';
		},
		pronounceAs(opts) {
			const out = (this.translateAs as TranslateFunc)(opts);

			// TODO
			if (opts.nextLetter?.type === 'vowel') {
				return `${out}h`;
			}

			return out;
		},
	},
	{
		char: 'ㅎ',
		type: 'consonant',
		translateAs: 'h',
		pronounceAs(opts) {
			if (soundChange.isRule1(opts)) {
				return 't';
			}

			return 'h';
		},
	},
	{
		char: 'ㄹ',
		type: 'consonant',
		translateAs: 'l',
		pronounceAs: 'hl',
	},
	{
		char: 'ㅇ',
		type: 'consonant',
		translateAs(opts) {
			if (opts.endOfSyllable) {
				return 'ng';
			}

			return '';
		},
	},
	{
		char: 'ㄴ',
		type: 'consonant',
		translateAs: 'n',
	},
	{
		char: 'ㅁ',
		type: 'consonant',
		translateAs: 'm',
	},
	{
		char: 'ㅋ',
		type: 'consonant',
		translateAs: 'k',
		pronounceAs(opts) {
			if (soundChange.isRule2(opts)) {
				return 'k';
			}

			return 'K';
		},
	},
	{
		char: 'ㅌ',
		type: 'consonant',
		translateAs: 't',
		pronounceAs(opts) {
			if (soundChange.isRule1(opts)) {
				return 't';
			}

			return 'T';
		},
	},
	{
		char: 'ㅊ',
		type: 'consonant',
		translateAs: 'ch',
		pronounceAs(opts) {
			if (soundChange.isRule1(opts)) {
				return 't';
			}

			return 'ch';
		},
	},
	{
		char: 'ㅍ',
		type: 'consonant',
		translateAs: 'p',
		pronounceAs(opts) {
			if (soundChange.isRule2(opts)) {
				return 'p';
			}

			return 'P';
		},
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
		pronounceAs(opts) {
			if (soundChange.isRule2(opts)) {
				return 'k';
			}

			return 'G';
		},
	},
	{
		char: 'ᄊ',
		type: 'double-consonant',
		translateAs(opts) {
			if (soundChange.isRule1(opts)) {
				return 't';
			}

			return 'ss';
		},
		pronounceAs(opts) {
			if (soundChange.isRule1(opts)) {
				return 't';
			}

			return 'S';
		},
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

// Normalize returns different characters than what my
// macbook keyboard produces, so this maps the normalized
// form to the macbook ones. I'm assuming this is an NFC/NFD
// related problem.
export const NORMALIZE: Record<string, string> = {
	ᄀ: 'ㄱ',
	ᆫ: 'ㄴ',
	ᄂ: 'ㄴ',
	ᄋ: 'ㅇ',
	ᆯ: 'ㄹ',
	ᄅ: 'ㄹ',
	ᄉ: 'ㅅ',
	ᆺ: 'ㅅ',
	ᄌ: 'ㅈ',
	ᄎ: 'ㅊ',
	ᆷ: 'ㅁ',
	ᄆ: 'ㅁ',
	ᄃ: 'ㄷ',
	ᄒ: 'ㅎ',
	ᇂ: 'ㅎ',
};
