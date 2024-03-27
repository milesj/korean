import { expandMap, type Word } from './common';

export interface Interjection extends Word {}

export const INTERJECTIONS = {
	oh: {
		meaning: 'oh',
		word: '어',
	},
	uh: {
		class: 101.3,
		meaning: 'uh',
		word: '저',
	},
} satisfies Record<string, Interjection>;

export type InterjectionKey = keyof typeof INTERJECTIONS;

export const INTERJECTIONS_MAP: Record<string, Interjection> = {};

expandMap(INTERJECTIONS as Record<string, Interjection>, INTERJECTIONS_MAP);
