import { type Word, expandMap } from './common';

export type ParticleMarker =
	| 'topic'
	| 'object'
	| 'subject'
	| 'plural'
	| 'static-location'
	| 'dynamic-location';

export interface Particle extends Word {
	forms?: Partial<Record<ParticleMarker, string>>;
	marker?: ParticleMarker;
}

export const PARTICLES = {
	about: {
		class: '102-6.1',
		meaning: ['about', 'around'],
		word: '쯤',
	},
	also: {
		class: '101-1.1',
		meaning: ['also', 'too'],
		word: '도',
	},
	and: {
		class: '101-4.1',
		meaning: ['and (with nouns)', 'with'],
		word: '하고',
	},
	and_connective: {
		class: '102-7.2',
		meaning: 'and (clausal connective)',
		word: '고',
	},
	and_join: {
		class: '103-9.1',
		meaning: 'and (joins nouns)',
		word: ['와', '과'],
	},
	around: 'about',
	as_for: {
		class: '101-1.1',
		meaning: ['(topic marker)', 'as for'],
		word: ['은', '는'],
		marker: 'topic',
	},
	as_much: {
		class: '103-11.2',
		meaning: ['as much', 'many as'],
		word: ['이나', '나'],
	},
	at: 'location',
	but_connective: {
		class: '103-9.2',
		meaning: 'but (clausal connective)',
		word: '지만',
	},
	by_means_of: {
		class: ['102-6.1', '103-8.2'],
		meaning: ['(by means of)', 'toward to'],
		word: ['으로', '로'],
	},
	clause_connective: {
		class: '103-10.1',
		meaning: [
			'(explicit background info)',
			'(contrasts clauses)',
			'(justifies requests)',
		],
		word: ['은데', '는데'],
	},
	clause_connective_clause: {
		class: ['103-10.2', '103-12.1'],
		meaning: ['(cause)', '(sequential)'],
		word: ['어서', '아서'],
	},
	clause_connective_ending: {
		class: '103-10.1',
		meaning: ['(implicit background info)'],
		word: ['은데요', '는데요'],
	},
	continue_action: {
		class: '103-11.1',
		meaning: ['am...', 'are...', 'is...'],
		word: '고 있다',
	},
	from_location: {
		class: '102-6.1',
		meaning: 'from (location)',
		word: '에서',
	},
	from_person: {
		class: '103-9.1',
		meaning: 'from (person)',
		word: ['한테서', { word: '께', honorific: true }],
	},
	from_time: {
		class: ['102-6.1', '103-11.2'],
		meaning: 'from (time)',
		word: '부터',
	},
	in: 'location',
	in_order_to: {
		class: '102-5.2',
		meaning: '(in order to)',
		word: ['으러', '러'],
	},
	location: {
		class: '101-3.1',
		meaning: ['at', 'in', 'on', 'to'],
		word: '에',
		marker: 'static-location',
		related: ['location_dynamic'],
	},
	location_dynamic: {
		class: '102-5.1',
		meaning: ['at', 'in'],
		word: '에서',
		marker: 'dynamic-location',
		related: ['location'],
	},
	may: {
		class: '103-12.1',
		meaning: ['may', 'will (conjecture)'],
		word: '겠',
	},
	noun_modifier_adj: {
		class: '103-9.1',
		meaning: '(adj noun modifier)',
		word: ['으ㄴ', 'ㄴ'],
	},
	noun_modifier_verb: {
		class: '103-10.1',
		meaning: '(verb noun modifier)',
		word: '는',
	},
	noun_modifier_past: {
		class: '103-12.2',
		meaning: '(noun modifier - past)',
		word: ['으ㄴ', 'ㄴ'],
	},
	object: {
		class: '101-2.2',
		meaning: '(object marker)',
		word: ['을', '를'],
		marker: 'object',
	},
	of: {
		class: '101-4.2',
		meaning: 'of',
		word: '의',
		wordPronounced: '에',
	},
	on: 'location',
	only: {
		class: '101-4.2',
		meaning: 'only',
		word: '만',
	},
	only_nothing: {
		class: '103-11.2',
		meaning: ['only', 'nothing but'],
		word: '밖에',
	},
	opinion: {
		class: '103-11.2',
		meaning: ['shall we...', 'do you think...?'],
		word: ['을까요', 'ㄹ까요'],
	},
	plural: {
		class: '101-2.1',
		meaning: '(plural marker)',
		word: '들',
		marker: 'plural',
	},
	reaction: {
		class: '103-12.2',
		meaning: '(surprise reaction)',
		word: '네요',
	},
	subject: {
		class: ['101-1.2', '103-9.2'],
		meaning: '(subject marker)',
		word: ['이', '가', { word: '께서', honorific: true }],
		marker: 'subject',
	},
	suffix_honorifc: {
		class: '103-9.2',
		meaning: '(honorific suffix)',
		word: ['으시', '시'],
	},
	to_location: 'location',
	to_person: {
		class: '103-9.1',
		meaning: 'to (person)',
		word: ['한테', { word: '께', honorific: true }],
	},
	to_time: {
		class: '103-11.2',
		meaning: ['to (time)', 'until', 'through', 'including'],
		word: '까지',
	},
	too: 'also',
	toward_to: 'by_means_of',
	up_to: {
		class: '102-6.1',
		meaning: 'to (location)',
		word: '까지',
	},
	well: {
		class: '103-11.2',
		meaning: ['well', "it's hard to say"],
		word: '글쎄요',
	},
	will: 'may',
	with: 'and',
	with2: {
		class: '103-12.2',
		meaning: ['with', 'and'],
		word: ['이랑', '랑'],
	},
	would_like_to: {
		class: '103-11.1',
		meaning: ['would you like to ...', 'I would like to ...'],
		word: ['을래요', 'ㄹ래요'],
	},
} satisfies Record<string, Particle | string>;

export type ParticleKey = keyof typeof PARTICLES;

export const PARTICLES_MAP: Record<string, Particle> = {};

expandMap(PARTICLES as Record<string, Particle | string>, PARTICLES_MAP);
