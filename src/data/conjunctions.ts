import { expandMap, type Word } from './common';

export interface Conjunction extends Word {}

export const CONJUNCTIONS = {
	and: {
		class: 101.2,
		meaning: 'and',
		word: '그리고',
	},
} satisfies Record<string, Conjunction>;

export type ConjunctionKey = keyof typeof CONJUNCTIONS;

export const CONJUNCTIONS_MAP: Record<string, Conjunction> = {};

expandMap(CONJUNCTIONS as Record<string, Conjunction>, CONJUNCTIONS_MAP);
