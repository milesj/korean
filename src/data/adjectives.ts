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
	// c
	to_be_cheap: {
		class: '101-2.2',
		meaning: 'to be cheap',
		word: '싸다',
	},
	// b
	to_be_big: {
		class: '101-2.2',
		meaning: 'to be big',
		word: '크다',
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
	// e
	to_exist: {
		class: '101-3.1',
		meaning: ['to exist', 'to have'],
		opposite: 'to_not_exist',
		word: '있다',
	},
	to_not_exist: {
		class: '101-3.2',
		meaning: ['to not exist', 'to not have'],
		opposite: 'to_exist',
		word: '없다',
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
	// o
	to_be_okay: {
		class: '101-2.1',
		meaning: 'to be okay, all right',
		word: '괜찮다',
	},
	// s
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
	// w
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
