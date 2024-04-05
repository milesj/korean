import { expandMap, type Word } from './common';

export interface Adjective extends Word {
	opposite?: string;
	phrases?: string[];
}

export const ADJECTIVES = {
	to_be: {
		class: '101-1.1',
		meaning: 'to be',
		opposite: 'to_not_be',
		word: '이다',
	},
	to_not_be: {
		class: '101-1.2',
		meaning: 'to not be',
		opposite: 'to_be',
		word: '아니다',
	},
	// b
	to_be_bad: {
		class: '101-4.2',
		meaning: 'to be bad',
		word: '나쁘다',
	},
	to_be_big: {
		class: '101-2.2',
		meaning: 'to be big',
		word: '크다',
	},
	to_be_busy: {
		class: '102-6.2',
		meaning: 'to be busy',
		word: '바쁘다',
	},
	// c
	to_be_cheap: {
		class: '101-2.2',
		meaning: 'to be cheap',
		word: '싸다',
	},
	to_be_clean: {
		class: '103-8.1',
		meaning: 'to be clean',
		word: '깨끗하다',
	},
	to_be_close: {
		class: '102-6.1',
		meaning: 'to be close, near',
		word: '가깝다',
	},
	to_be_cloudy: {
		class: '102-7.2',
		meaning: 'to be cloudy',
		word: '흐리다',
	},
	to_be_cold: {
		class: '102-6.1',
		meaning: 'to be cold',
		word: '춥다',
	},
	// d
	to_be_delicious: {
		class: '101-2.1',
		meaning: 'to be delicious',
		opposite: 'to_not_be_delicious',
		word: '맛있다',
	},
	to_not_be_delicious: {
		class: '101-2.2',
		meaning: 'to not be delicious / tasteless',
		opposite: 'to_be_delicious',
		word: '맛없다',
	},
	to_be_difficult: {
		class: '102-6.1',
		meaning: 'to be difficult',
		word: '어렵다',
	},
	// e
	to_be_easy: {
		class: '102-6.1',
		meaning: 'to be easy',
		word: '쉽다',
	},
	to_exist: {
		class: '101-3.1',
		meaning: ['to exist', 'to have'],
		opposite: 'to_not_exist',
		word: '있다',
	},
	to_be_expensive: {
		class: '101-4.2',
		meaning: 'to be expensive',
		word: '비싸다',
	},
	to_not_exist: {
		class: '101-3.2',
		meaning: ['to not exist', 'to not have'],
		opposite: 'to_exist',
		word: '없다',
	},
	// f
	to_be_far: {
		class: '102-6.1',
		meaning: 'to be far',
		word: '멀다',
	},
	// g
	to_be_glad: {
		class: '101-1.2',
		meaning: 'to be glad',
		word: '반갑다',
		phrases: ['Glad to meet you'],
	},
	to_be_good: {
		class: '101-2.1',
		meaning: 'to be good, nice',
		word: '좋다',
	},
	// h
	to_have: 'to_exist',
	to_not_have: 'to_not_exist',
	to_be_hot: {
		class: '102-6.1',
		meaning: 'to be hot',
		word: '덥다',
	},
	to_be_how: {
		class: '101-2.1',
		meaning: 'to be how',
		word: '어떻다',
	},
	// i
	to_be_interesting: {
		class: '101-2.1',
		meaning: 'to be interesting / fun',
		opposite: 'to_not_be_interesting',
		word: '재미있다',
	},
	to_not_be_interesting: {
		class: '101-2.2',
		meaning: 'to not be interesting / uninteresting',
		opposite: 'to_be_interesting',
		word: '재미없다',
	},
	// m
	to_be_many: {
		class: '101-2.1',
		meaning: 'to be many, much',
		word: '많다',
	},
	to_be_narrow: {
		class: '102-6.1',
		meaning: 'to be narrow',
		word: '좁다',
	},
	// o
	to_be_okay: {
		class: '101-2.1',
		meaning: 'to be okay, all right',
		word: '괜찮다',
	},
	// p
	to_be_pretty: {
		class: '101-4.2',
		meaning: 'to be pretty',
		word: '예쁘다',
	},
	// q
	to_be_quiet: {
		class: ['102-7.2', '103-8.1'],
		meaning: 'to be quiet',
		word: '조용하다',
	},
	// s
	to_be_small: {
		class: '101-4.2',
		meaning: 'to be small (in size)',
		word: '작다',
	},
	to_be_so: {
		class: '101-1.2',
		meaning: 'to be so',
		word: '그렇다',
		phrases: ['Is that right?', 'Really?'],
	},
	to_be_spacious: {
		class: '101-2.1',
		meaning: 'to be spacious / wide',
		word: '넓다',
	},
	// t
	to_be_thankful: {
		class: '101-4.2',
		meaning: 'to be thankful',
		word: '고맙다',
	},
	// w
	to_be_warm: {
		class: '103-8.1',
		meaning: 'to be warm',
		word: '따뜻하다',
	},
	to_be_well: {
		class: '101-1.1',
		meaning: 'to be well',
		word: '안녱하다',
		phrases: ['Hi', 'Hello', 'How are you?'],
	},
} satisfies Record<string, Adjective | string>;

export type AdjectiveKey = keyof typeof ADJECTIVES;

export const ADJECTIVES_MAP: Record<string, Adjective> = {};

expandMap(ADJECTIVES as Record<string, Adjective | string>, ADJECTIVES_MAP);
