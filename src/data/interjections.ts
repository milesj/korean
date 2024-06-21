import { expandMap, type Word } from './common';

export interface Interjection extends Word {}

export const INTERJECTIONS = {
	oh: {
		class: '101-2.1',
		meaning: 'oh',
		word: '어',
	},
	oh_my: {
		class: '103-12.2',
		meaning: ['oh my', 'dear me'],
		word: '어머',
	},
	uh: {
		class: '101-3.1',
		meaning: 'uh',
		word: '저',
	},
} satisfies Record<string, Interjection>;

export type InterjectionKey = keyof typeof INTERJECTIONS;

export const INTERJECTIONS_MAP: Record<string, Interjection> = {};

expandMap(INTERJECTIONS as Record<string, Interjection>, INTERJECTIONS_MAP);
