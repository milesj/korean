import { expandMap, type Word } from './common';

export interface Adjective extends Word {
	opposite?: string;
	phrases?: string[];
}

export const ADJECTIVES = {
	to_be: {
		meaning: 'to be',
		opposite: 'to_not_be',
		word: '이다',
	},
	to_not_be: {
		meaning: 'to not be',
		opposite: 'to_be',
		word: '아니다',
	},
	// c
	to_be_cheap: {
		meaning: 'to be cheap',
		word: '싸다',
	},
	// b
	to_be_big: {
		meaning: 'to be big',
		word: '크다',
	},
	// d
	to_be_delicious: {
		meaning: 'to be delicious',
		opposite: 'to_not_be_delicious',
		word: '맛있다',
	},
	to_not_be_delicious: {
		meaning: 'to not be delicious / tasteless',
		opposite: 'to_be_delicious',
		word: '맛없다',
	},
	// g
	to_be_good: {
		meaning: 'to be good, nice',
		word: '좋다',
	},
	// h
	to_be_how: {
		meaning: 'to be how',
		word: '어떻다',
	},
	// i
	to_be_interesting: {
		meaning: 'to be interesting / fun',
		opposite: 'to_not_be_interesting',
		word: '재미있다',
	},
	to_not_be_interesting: {
		meaning: 'to not be interesting / to be uninteresting',
		opposite: 'to_be_interesting',
		word: '재미없다',
	},
	// m
	to_be_many: {
		meaning: 'to be many, much',
		word: '많다',
	},
	// o
	to_be_okay: {
		meaning: 'to be okay, all right',
		word: '괜찮다',
	},
	// s
	to_be_spacious: {
		meaning: 'to be spacious, wide',
		word: '넓다',
	},
	// w
	to_be_well: {
		meaning: 'to be well',
		word: '안녱하다',
		phrases: ['Hi', 'Hello', 'How are you?'],
	},
} satisfies Record<string, Adjective>;

export type AdjectiveKey = keyof typeof ADJECTIVES;

export const ADJECTIVES_MAP: Record<string, Adjective> = {};

expandMap(ADJECTIVES as Record<string, Adjective>, ADJECTIVES_MAP);
