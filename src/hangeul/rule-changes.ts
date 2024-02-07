// Sound change rules:
//  - https://www.youtube.com/watch?v=VbOWbrPoW00
//  - https://dohgyuhwang.com/uploads/1/2/2/4/122422350/korean_pronunciation_rules___more.pdf

import type { TranslateOptions } from './letters';

export function inList(char: string | string[], allowed: string[]): boolean {
	const chars = Array.isArray(char) ? char : [char];

	return allowed.some((item) => chars.includes(item));
}

export function isRule1(opts: TranslateOptions) {
	return opts.endOfWord;
}

export function isRule2(opts: TranslateOptions) {
	return opts.endOfSyllable;
}

export function isRule3(opts: TranslateOptions) {
	return (
		opts.startOfSyllable &&
		opts.prevLetter &&
		opts.prevLetter.type === 'consonant' &&
		!inList(opts.prevLetter.char, ['ㅁ', 'ㄴ', 'ㄹ'])
	);
}
