import { expandMap, type Word } from './common';

export type ParticleType =
	| 'topic'
	| 'object'
	| 'subject'
	| 'plural'
	| 'static-location'
	| 'dynamic-location';

export interface Particle extends Word {
	forms?: Partial<Record<ParticleType, string>>;
	type?: ParticleType;
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
		type: 'topic',
	},
	at: 'location',
	by_means_of: {
		class: ['102-6.1', '103-8.2'],
		meaning: ['(by means of)', 'toward to'],
		word: ['으로', '로'],
	},
	from_location: {
		class: '102-6.1',
		meaning: 'from (location)',
		word: '에서',
	},
	from_person: {
		class: '103-9.1',
		meaning: 'from (person)',
		word: ['한테서', '께'],
	},
	from_time: {
		class: '102-6.1',
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
		type: 'static-location',
		related: ['location_dynamic'],
	},
	location_dynamic: {
		class: '102-5.1',
		meaning: ['at', 'in'],
		word: '에서',
		type: 'dynamic-location',
		related: ['location'],
	},
	noun_modifier: {
		class: '103-9.1',
		meaning: '(noun modifier)',
		word: ['으ㄴ', 'ㄴ'],
	},
	object: {
		class: '101-2.2',
		meaning: '(object marker)',
		word: ['을', '를'],
		type: 'object',
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
	plural: {
		class: '101-2.1',
		meaning: '(plural marker)',
		word: '들',
		type: 'plural',
	},
	subject: {
		class: '101-1.2',
		meaning: '(subject marker)',
		word: ['이', '가'],
		type: 'subject',
	},
	to_location: 'location',
	to_person: {
		class: '103-9.1',
		meaning: 'to (person)',
		word: ['한테', '께'],
	},
	too: 'also',
	toward_to: 'by_means_of',
	up_to: {
		class: '102-6.1',
		meaning: 'to (location)',
		word: '까지',
	},
	with: 'and',
} satisfies Record<string, Particle | string>;

export type ParticleKey = keyof typeof PARTICLES;

export const PARTICLES_MAP: Record<string, Particle> = {};

expandMap(PARTICLES as Record<string, Particle | string>, PARTICLES_MAP);
