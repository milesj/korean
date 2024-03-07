import { expandMap, type Word } from './common';

export interface Adverb extends Word {}

export const ADVERBS = {
	// a
	a_little: {
		meaning: 'a little',
		word: ['조금', '좀'],
		description:
			'The form `좀` is a contraction of `조금`, both of which mean "a little" of something.',
	},
	again: {
		meaning: 'again',
		word: '또',
	},
	// c
	cannot: {
		meaning: 'cannot',
		word: '못',
	},
	// d
	diligently: {
		meaning: 'diligently',
		word: '열심히',
	},
	do_not: {
		meaning: 'do not',
		word: '안',
	},
	// e
	each_other: {
		meaning: 'each other',
		word: '서로',
	},
	every_day: {
		meaning: 'every day',
		word: '매일',
	},
	// f
	frequently: 'often',
	// h
	how: {
		meaning: 'how',
		word: '어떻게',
		wordPronounced: '어떠케',
	},
	how_long: {
		meaning: ['how long', 'how much'],
		word: ['얼마나', '얼마'],
	},
	how_much: 'how_long',
	// m
	many: {
		meaning: ['many', 'much'],
		word: '많이',
	},
	much: 'many',
	// n
	no: {
		meaning: 'no',
		word: '아니요',
	},
	now: {
		meaning: 'now',
		word: '지금',
	},
	// o
	occasionally: {
		meaning: ['occasionally', 'sometimes'],
		word: '가끔',
	},
	often: {
		meaning: ['often', 'frequently'],
		word: '자주',
	},
	// p
	particularly: {
		meaning: 'particularly',
		word: '특히',
	},
	perhaps: {
		meaning: ['perhaps', 'probably'],
		word: '아마',
	},
	probably: 'perhaps',
	// r
	really: {
		meaning: 'really',
		word: ['진짜', '정말'],
		related: ['very', 'truly'],
	},
	// s
	sometimes: 'occasionally',
	// t
	these_days: {
		meaning: 'these days',
		word: '요즘',
	},
	together: {
		meaning: 'together',
		word: '같이',
		wordPronounced: '가치',
		description:
			'The adverd `같이` means "together" or "with". It is used to describe an action that is done with someone else, or some thing.',
	},
	too_much: {
		meaning: 'too much',
		word: '너무',
	},
	truly: {
		meaning: 'truly',
		word: '참',
		related: ['really', 'very'],
	},
	// u
	usually: {
		meaning: 'usually',
		word: '보통',
	},
	// v
	very: {
		meaning: 'very',
		word: '아주',
		related: ['really', 'truly'],
	},
	// w
	when: {
		meaning: 'when',
		word: '언제',
	},
	well: {
		meaning: 'well',
		word: '잘',
	},
	why: {
		meaning: 'why',
		word: '왜',
	},
	// y
	yes: {
		meaning: 'yes',
		word: ['네', '예'],
	},
} satisfies Record<string, Adverb | string>;

export type AdverbKey = keyof typeof ADVERBS;

export const ADVERBS_MAP: Record<string, Adverb> = {};

expandMap(ADVERBS as Record<string, Adverb | string>, ADVERBS_MAP);
