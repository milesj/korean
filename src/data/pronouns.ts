import { expandMap, type Word } from './common';

export type PronounForm = 'subject' | 'topic' | 'object';

export interface Pronoun extends Word {
	forms?: Partial<Record<PronounForm, string | string[]>>;
}

export const PRONOUNS = {
	here: {
		class: '103-8.1',
		meaning: 'here',
		word: '여기',
		related: ['there', 'over_there'],
	},
	i: {
		class: '101-1.1',
		meaning: 'I',
		word: ['나', { word: '저', humble: true }],
		related: ['my'],
	},
	my: {
		class: '101-4.2',
		meaning: 'my',
		word: ['내', { word: '제', humble: true }],
		related: ['i'],
	},
	our: 'we',
	over_there: {
		class: '103-8.1',
		meaning: 'over there',
		word: '저기',
		related: ['here', 'there'],
	},
	that_thing: {
		class: '103-8.1',
		meaning: 'that thing',
		word: ['그것', '그거'],
		forms: {
			topic: ['그것은', '그건'],
			subject: ['그것이', '그게'],
			object: ['그것을', '그걸'],
		},
	},
	that_thing_over_there: {
		class: '103-8.1',
		meaning: 'that thing (over there)',
		word: ['저것', '저거'],
		forms: {
			topic: ['저것은', '저건'],
			subject: ['저것이', '저게'],
			object: ['저것을', '저걸'],
		},
	},
	there: {
		class: '103-8.1',
		meaning: 'there',
		word: '거기',
		related: ['here', 'over_there'],
	},
	this_thing: {
		class: ['101-4.2', '103-8.1'],
		meaning: 'this thing',
		word: ['이것', '이거'],
		forms: {
			topic: ['이것은', '이건'],
			subject: ['이것이', '이게'],
			object: ['이것을', '이걸'],
		},
	},
	us: 'we',
	we: {
		class: '101-4.2',
		meaning: ['we', 'us', 'our'],
		word: ['우리', { word: '저희', humble: true }],
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
