import { expandMap, type Word } from './common';

export interface Conjunction extends Word {}

export const CONJUNCTIONS = {
	and: {
		class: '101-2.2',
		meaning: 'and',
		word: '그리고',
	},
	but: {
		class: '101-3.2',
		meaning: ['but', 'however'],
		word: ['그런데', '하지만'],
	},
	however: 'but',
	so: {
		class: '101-3.2',
		meaning: ['so', 'therefore'],
		word: '그래서',
	},
	therefore: 'so',
} satisfies Record<string, Conjunction | string>;

export type ConjunctionKey = keyof typeof CONJUNCTIONS;

export const CONJUNCTIONS_MAP: Record<string, Conjunction> = {};

expandMap(CONJUNCTIONS as Record<string, Conjunction | string>, CONJUNCTIONS_MAP);
