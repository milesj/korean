// https://github.com/e-/Hangul.js/blob/master/hangul.js

type CharacterSpecification = string | { char: string; parts: string[] };

function getSpecParts(spec: CharacterSpecification): string[] {
	return typeof spec === 'object' ? spec.parts : [spec];
}

function searchAndBuildCache(
	specs: CharacterSpecification[],
	cache: Record<number, number>,
	code: number,
): boolean {
	if (typeof cache[code] === 'undefined') {
		specs.some((spec, index) => {
			const specCode = (typeof spec === 'object' ? spec.char : spec).charCodeAt(
				0,
			);

			if (specCode === code) {
				cache[code] = index;
				return true;
			}

			cache[code] = -1;
			return false;
		});
	}

	return cache[code] !== -1;
}

// 초성 - Initial consonants (onset)
const CHO: CharacterSpecification[] = [
	'ㄱ',
	'ㄲ',
	'ㄴ',
	'ㄷ',
	'ㄸ',
	'ㄹ',
	'ㅁ',
	'ㅂ',
	'ㅃ',
	'ㅅ',
	'ㅆ',
	'ㅇ',
	'ㅈ',
	'ㅉ',
	'ㅊ',
	'ㅋ',
	'ㅌ',
	'ㅍ',
	'ㅎ',
];
const CHO_CACHE: Record<number, number> = {};

function isCho(code: number): boolean {
	return searchAndBuildCache(CHO, CHO_CACHE, code);
}

// 중성 - Inner vowels (nucleus)
const JUNG: CharacterSpecification[] = [
	'ㅏ',
	'ㅐ',
	'ㅑ',
	'ㅒ',
	'ㅓ',
	'ㅔ',
	'ㅕ',
	'ㅖ',
	'ㅗ',
	{ char: 'ㅘ', parts: ['ㅗ', 'ㅏ'] },
	{ char: 'ㅙ', parts: ['ㅗ', 'ㅐ'] },
	{ char: 'ㅚ', parts: ['ㅗ', 'ㅣ'] },
	'ㅛ',
	'ㅜ',
	{ char: 'ㅝ', parts: ['ㅜ', 'ㅓ'] },
	{ char: 'ㅞ', parts: ['ㅜ', 'ㅔ'] },
	{ char: 'ㅟ', parts: ['ㅜ', 'ㅣ'] },
	'ㅠ',
	'ㅡ',
	{ char: 'ㅢ', parts: ['ㅡ', 'ㅣ'] },
	'ㅣ',
];
const JUNG_CACHE: Record<number, number> = {};

function isJung(code: number): boolean {
	return searchAndBuildCache(JUNG, JUNG_CACHE, code);
}

// 종성 - Final consonants (coda)
const JONG = [
	'', // None
	'ㄱ',
	'ㄲ',
	{ char: 'ㄳ', parts: ['ㄱ', 'ㅅ'] },
	'ㄴ',
	{ char: 'ㄵ', parts: ['ㄴ', 'ㅈ'] },
	{ char: 'ㄶ', parts: ['ㄴ', 'ㅎ'] },
	'ㄷ',
	'ㄹ',
	{ char: 'ㄺ', parts: ['ㄹ', 'ㄱ'] },
	{ char: 'ㄻ', parts: ['ㄹ', 'ㅁ'] },
	{ char: 'ㄼ', parts: ['ㄹ', 'ㅂ'] },
	{ char: 'ㄽ', parts: ['ㄹ', 'ㅅ'] },
	{ char: 'ㄾ', parts: ['ㄹ', 'ㅌ'] },
	{ char: 'ㄿ', parts: ['ㄹ', 'ㅍ'] },
	{ char: 'ㅀ', parts: ['ㄹ', 'ㅎ'] },
	'ㅁ',
	'ㅂ',
	{ char: 'ㅄ', parts: ['ㅂ', 'ㅅ'] },
	'ㅅ',
	'ㅆ',
	'ㅇ',
	'ㅈ',
	'ㅊ',
	'ㅋ',
	'ㅌ',
	'ㅍ',
	'ㅎ',
];
const JONG_CACHE: Record<number, number> = {};

function isJong(code: number): boolean {
	return searchAndBuildCache(JONG, JONG_CACHE, code);
}

const UNICODE_OFFSET = 0xac00;

function isHangeulUnicode(code: number): boolean {
	return 0xac00 <= code && code <= 0xd7a3;
}

export function parse(value: string): (string | string[])[] {
	const result = [];
	const length = value.length;

	for (let i = 0; i < length; i++) {
		let code = value.charCodeAt(i);
		const syllable: string[] = [];

		if (isHangeulUnicode(code)) {
			code -= UNICODE_OFFSET;

			const final = code % 28;
			const vowel = ((code - final) / 28) % 21;
			const initial = Math.floor((code - final) / 28 / 21);

			// console.log(value.charAt(i), code, { final, vowel, initial });

			// Initial
			syllable.push(...getSpecParts(CHO[initial]));

			// Vowels
			syllable.push(...getSpecParts(JUNG[vowel]));

			// Final
			if (final > 0) {
				syllable.push(...getSpecParts(JONG[final]));
			}
		} else if (isCho(code)) {
			syllable.push(...getSpecParts(CHO[CHO_CACHE[code]]));
		} else if (isJung(code)) {
			syllable.push(...getSpecParts(JUNG[JUNG_CACHE[code]]));
		} else if (isJong(code)) {
			syllable.push(...getSpecParts(JONG[JONG_CACHE[code]]));
		} else {
			result.push(value.charAt(i));
			continue;
		}

		result.push(syllable);
	}

	return result;
}
