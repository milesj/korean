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
		related: ['my'],
	},
	my: {
		class: '101-4.2',
		meaning: 'my',
		word: '제',
		forms: {
			humble: '제',
			plain: '내',
		},
		related: ['i'],
	},
	our: 'we',
	this_thing: {
		class: '101-4.2',
		meaning: 'this thing',
		word: ['이것', '이거'],
	},
	us: 'we',
	we: {
		class: '101-4.2',
		meaning: ['we', 'us', 'our'],
		word: '저희',
		forms: {
			humble: '저희',
			plain: '우리',
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
} satisfies Record<string, Pronoun | string>;

export type PronounKey = keyof typeof PRONOUNS;

export const PRONOUNS_MAP: Record<string, Pronoun> = {};

expandMap(PRONOUNS as Record<string, Pronoun | string>, PRONOUNS_MAP);
