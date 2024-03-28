import { expandMap, type Word } from './common';

export type PronounForm = 'humble' | 'plain' | 'subject';

export interface Pronoun extends Word {
	forms?: Partial<Record<PronounForm, string>>;
}

export const PRONOUNS = {
	i: {
		class: '101-1.1',
		meaning: 'I',
		word: '저',
		forms: {
			humble: '저',
			plain: '나',
		},
	},
	what: {
		class: '101-1.2',
		meaning: 'what',
		word: ['뭐', '무엇'],
	},
	who: {
		class: '101-3.2',
		meaning: 'who',
		word: '누구',
		forms: {
			subject: '누가',
		},
	},
} satisfies Record<string, Pronoun>;

export type PronounKey = keyof typeof PRONOUNS;

export const PRONOUNS_MAP: Record<string, Pronoun> = {};

expandMap(PRONOUNS as Record<string, Pronoun>, PRONOUNS_MAP);
