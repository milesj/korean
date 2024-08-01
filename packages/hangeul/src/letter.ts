export type Letterkind =
	| 'consonant'
	| 'dipthong'
	| 'double-consonant'
	| 'vowel';

export const CONSONANTS = [
	'ㅂ',
	'ㅈ',
	'ㄷ',
	'ㄱ',
	'ㅅ',
	'ㅁ',
	'ㄴ',
	'ㅇ',
	'ㄹ',
	'ㅎ',
	'ㅋ',
	'ㅌ',
	'ㅊ',
	'ㅍ',
];

export const DOUBLE_CONSONANTS = ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ'];

export const VOWELS = [
	'ㅏ',
	'ㅑ',
	'ㅓ',
	'ㅕ',
	'ㅗ',
	'ㅛ',
	'ㅜ',
	'ㅠ',
	'ㅔ',
	'ㅖ',
	'ㅐ',
	'ㅒ',
	'ㅡ',
	'ㅣ',
];

export const DIPTHONGS = ['ㅘ', 'ㅙ', 'ㅚ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅢ'];

export const DIPTHONG_PAIRS = [
	['ㅗ', 'ㅏ'],
	['ㅗ', 'ㅐ'],
	['ㅗ', 'ㅣ'],
	['ㅜ', 'ㅓ'],
	['ㅜ', 'ㅔ'],
	['ㅜ', 'ㅣ'],
	['ㅡ', 'ㅣ'],
];

const LETTER_CACHE: Record<string, Letterkind> = {};

function buildCache(letters: string[], kind: Letterkind) {
	for (const letter of letters) {
		LETTER_CACHE[letter] = kind;
	}
}

buildCache(CONSONANTS, 'consonant');
buildCache(DOUBLE_CONSONANTS, 'double-consonant');
buildCache(DIPTHONGS, 'dipthong');
buildCache(VOWELS, 'vowel');

export function isSingleConsonant(value: string): boolean {
	return LETTER_CACHE[value] === 'consonant';
}

export function isDoubleConsonant(value: string): boolean {
	return LETTER_CACHE[value] === 'double-consonant';
}

export function isConsonant(value: string): boolean {
	return isSingleConsonant(value) || isDoubleConsonant(value);
}

export function isDipthong(value: string): boolean {
	return LETTER_CACHE[value] === 'dipthong';
}

export function isVowel(value: string): boolean {
	return LETTER_CACHE[value] === 'vowel';
}

export function createDipthong(left: string, right: string) {
	for (const [index, parts] of DIPTHONG_PAIRS.entries()) {
		if (parts[0] === left && parts[1] === right) {
			return DIPTHONGS[index];
		}
	}

	throw new Error(
		`Unable to create dipthong, invalid vowel pair "${left}" + "${right}".`,
	);
}

export class Letter {
	value: string;
	kind: Letterkind;

	// Position within the syllable
	index = 0;
	first = false;
	last = false;

	// Links to other syllables
	previous?: Letter;
	next?: Letter;

	constructor(value: string) {
		this.kind = LETTER_CACHE[value];
		this.value = value;
	}

	isConsonant(): boolean {
		return this.kind === 'consonant' || this.kind === 'double-consonant';
	}

	isDipthong(): boolean {
		return this.kind === 'dipthong';
	}

	isVowel(): boolean {
		return this.kind === 'vowel';
	}
}
