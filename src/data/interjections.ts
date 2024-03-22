import { expandMap, type Word } from './common';

export interface Interjection extends Word {}

export const INTERJECTIONS = {
	oh: {
		meaning: 'oh',
		word: '어',
	},
} satisfies Record<string, Interjection>;

export type InterjectionKey = keyof typeof INTERJECTIONS;

export const INTERJECTIONS_MAP: Record<string, Interjection> = {};

expandMap(INTERJECTIONS as Record<string, Interjection>, INTERJECTIONS_MAP);
