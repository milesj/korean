import { expandMap, type Word } from './common';

export type PronounForm = 'humble' | 'plain';

export interface Pronoun extends Word {
	forms: Partial<Record<PronounForm, string>>;
}

export const PRONOUNS = {
	i: {
		class: 101.1,
		meaning: 'I',
		word: '저',
		forms: {
			humble: '저',
			plain: '나',
		},
	},
} satisfies Record<string, Pronoun>;

export type PronounKey = keyof typeof PRONOUNS;

export const PRONOUNS_MAP: Record<string, Pronoun> = {};

expandMap(PRONOUNS as Record<string, Pronoun>, PRONOUNS_MAP);
