import { type Word, expandMap } from './common';

export interface Number extends Word {
	native?: string | string[];
	number: number;
}

export const NUMBERS = {
	one: {
		class: '101-4.1',
		meaning: 'one',
		word: '일',
		native: ['하나', '한'],
		number: 1,
	},
	two: {
		class: '101-4.1',
		meaning: 'two',
		word: '이',
		native: ['둘', '두'],
		number: 2,
	},
	three: {
		class: '101-4.1',
		meaning: 'three',
		word: '삼',
		native: ['셋', '세'],
		number: 3,
	},
	four: {
		class: '101-4.1',
		meaning: 'four',
		word: '사',
		native: ['넷', '네'],
		number: 4,
	},
	five: {
		class: '101-4.1',
		meaning: 'five',
		word: '오',
		native: '다섯',
		number: 5,
	},
	six: {
		class: '101-4.1',
		meaning: 'six',
		word: '육',
		native: '여섯',
		number: 6,
	},
	seven: {
		class: '101-4.1',
		meaning: 'seven',
		word: '칠',
		native: '일곱',
		number: 7,
	},
	eight: {
		class: '101-4.1',
		meaning: 'eight',
		word: '팔',
		native: ['여덟', '여덜'],
		number: 8,
	},
	nine: {
		class: '101-4.1',
		meaning: 'nine',
		word: '구',
		native: '아홉',
		number: 9,
	},
	ten: {
		class: '101-4.1',
		meaning: 'ten',
		word: '십',
		native: '열',
		number: 10,
	},
	twenty: {
		class: '101-4.1',
		meaning: 'twenty',
		word: '이십',
		native: ['스물', '스무'],
		number: 20,
	},
	thirty: {
		class: '101-4.1',
		meaning: 'thirty',
		word: '삼십',
		native: '서른',
		number: 30,
	},
	fourty: {
		class: '101-4.1',
		meaning: 'fourty',
		word: '사십',
		native: '마흔',
		number: 40,
	},
	fifty: {
		class: '101-4.1',
		meaning: 'fifty',
		word: '오십',
		native: '쉰',
		number: 50,
	},
	sixty: {
		class: '101-4.1',
		meaning: 'sixty',
		word: '육십',
		native: '예순',
		number: 60,
	},
	seventy: {
		class: '101-4.1',
		meaning: 'seventy',
		word: '칠십',
		native: '일흔',
		number: 70,
	},
	eighty: {
		class: '101-4.1',
		meaning: 'eighty',
		word: '팔십',
		native: '여든',
		number: 80,
	},
	ninety: {
		class: '101-4.1',
		meaning: 'ninety',
		word: '구십',
		native: '아흔',
		number: 90,
	},
	hundred: {
		class: '101-4.1',
		meaning: 'hundred',
		word: '백',
		number: 100,
	},
	thousand: {
		class: '101-4.1',
		meaning: 'thousand',
		word: '천',
		number: 1000,
	},
	ten_thousand: {
		class: '101-4.1',
		meaning: 'ten thousand',
		word: '만',
		number: 10000,
	},
	million: {
		class: '101-4.1',
		meaning: 'million',
		word: '백만',
		number: 1000000,
	},
	billion: {
		class: '101-4.1',
		meaning: 'billion',
		word: '십억',
		number: 1000000000,
	},
} satisfies Record<string, Number>;

export type NumberKey = keyof typeof NUMBERS;

export const NUMBERS_MAP: Record<string, Number> = {};

expandMap(NUMBERS as Record<string, Number>, NUMBERS_MAP);
