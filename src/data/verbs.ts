import { generateMap, type Word } from './common';

export type VerbCategory = 'todo';

export interface Verb extends Word {
	// category: VerbCategory | VerbCategory[];
	noun?: string;
}

export const VERBS: Verb[] = [
	// c
	{
		meaning: 'to congratulate',
		noun: 'celebration',
		word: '축하하다',
	},
	// r
	{
		meaning: 'to receive',
		word: '받다',
	},
	// t
	{
		meaning: 'to travel',
		noun: 'travel',
		word: '여행하다',
	},
];

export const VERBS_MAP = {};

generateMap(VERBS, VERBS_MAP);
