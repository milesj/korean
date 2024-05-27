import { expandMap, type Word } from './common';

export interface Adverb extends Word {}

export const ADVERBS = {
	// a
	a_little: {
		class: '102-6.1',
		meaning: 'a little',
		word: ['조금', '좀'],
		description:
			'The form `좀` is a contraction of `조금`, both of which mean "a little" of something.',
	},
	again: {
		class: '102-5.1',
		meaning: 'again',
		word: '또',
	},
	all: {
		class: ['103-9.2', '103-11.2'],
		meaning: 'all',
		word: '다',
	},
	already: {
		class: '103-11.2',
		meaning: 'already',
		word: '벌써',
	},
	// c
	cannot: {
		class: '102-6.2',
		meaning: 'cannot',
		word: '못',
	},
	// d
	diligently: {
		class: '101-3.2',
		meaning: 'diligently',
		word: '열심히',
	},
	directly: {
		class: '103-10.2',
		meaning: 'directly',
		word: '직접',
	},
	do_not: {
		class: '102-6.2',
		meaning: 'do not',
		word: '안',
	},
	// e
	each_other: {
		class: '102-7.2',
		meaning: 'each other',
		word: '서로',
	},
	early: {
		class: '103-10.1',
		meaning: 'early',
		word: '일찍',
	},
	every_day: {
		class: '101-3.2',
		meaning: 'every day',
		word: '매일',
	},
	// f
	frequently: 'often',
	from_next_time: {
		class: '103-10.2',
		meaning: 'from next time',
		word: '다음부터',
	},
	// h
	how: {
		class: '101-2.2',
		meaning: 'how',
		word: '어떻게',
		wordPronounced: '어떠케',
	},
	how_long: {
		class: '102-6.1',
		meaning: ['how long', 'how much'],
		word: ['얼마나', '얼마'],
	},
	how_much: 'how_long',
	// j
	just: {
		class: '103-10.1',
		meaning: ['just because', 'without any reason'],
		word: '그냥',
	},
	// m
	many: {
		class: '102-7.2',
		meaning: ['many', 'much'],
		word: '많이',
	},
	much: 'many',
	// n
	no: {
		class: '101-1.2',
		meaning: 'no',
		word: '아니요',
	},
	now: {
		class: '101-2.2',
		meaning: 'now',
		word: '지금',
	},
	// o
	occasionally: {
		class: '102-7.2',
		meaning: ['occasionally', 'sometimes'],
		word: '가끔',
	},
	often: {
		class: '102-6.2',
		meaning: ['often', 'frequently'],
		word: '자주',
	},
	// p
	particularly: {
		class: '102-7.2',
		meaning: 'particularly',
		word: '특히',
	},
	perhaps: {
		class: '102-7.1',
		meaning: ['perhaps', 'probably'],
		word: '아마',
	},
	probably: 'perhaps',
	// r
	really: {
		class: '102-7.1',
		meaning: 'really',
		word: ['진짜', '정말'],
		related: ['very', 'truly'],
	},
	// s
	sometimes: 'occasionally',
	straight: {
		class: '103-8.2',
		meaning: 'straight',
		word: '쭉',
	},
	// t
	these_days: {
		class: '101-2.2',
		meaning: 'these days',
		word: '요즘',
	},
	together: {
		class: '102-5.2',
		meaning: 'together',
		word: '같이',
		wordPronounced: '가치',
		description:
			'The adverd `같이` means "together" or "with". It is used to describe an action that is done with someone else, or some thing.',
	},
	too_much: {
		class: '102-6.2',
		meaning: 'too much',
		word: '너무',
	},
	truly: {
		class: '101-4.2',
		meaning: 'truly',
		word: '참',
		related: ['really', 'very'],
	},
	// u
	usually: {
		class: '102-6.1',
		meaning: 'usually',
		word: '보통',
	},
	// v
	very: {
		class: '101-2.1',
		meaning: 'very',
		word: '아주',
		related: ['really', 'truly'],
	},
	very_much: {
		class: ['103-10.1', '103-10.2'],
		meaning: 'very much',
		word: ['굉장히', '무척'],
	},
	// w
	when: {
		class: '102-5.2',
		meaning: 'when',
		word: '언제',
	},
	well: {
		class: '101-2.2',
		meaning: 'well',
		word: '잘',
	},
	why: {
		class: '102-6.2',
		meaning: 'why',
		word: '왜',
	},
	// y
	yes: {
		class: '101-1.2',
		meaning: 'yes',
		word: ['네', '예'],
	},
} satisfies Record<string, Adverb | string>;

export type AdverbKey = keyof typeof ADVERBS;

export const ADVERBS_MAP: Record<string, Adverb> = {};

expandMap(ADVERBS as Record<string, Adverb | string>, ADVERBS_MAP);
