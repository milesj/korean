import { expandMap, type Word } from './common';

export type ParticleType = 'topic' | 'object' | 'plural' | 'static-location';

export interface Particle extends Word {
	type?: ParticleType;
}

export const PARTICLES = {
	also: {
		class: 101.1,
		meaning: ['also', 'too'],
		word: '도',
	},
	as_for: {
		class: 101.1,
		meaning: 'as for',
		word: ['은', '는'],
		type: 'topic',
	},
	at: 'location',
	location: {
		class: 101.3,
		meaning: ['at', 'in', 'on'],
		word: '에',
		type: 'static-location',
	},
	in: 'location',
	object: {
		class: 101.2,
		meaning: '(object marker)',
		word: ['을', '를'],
		type: 'object',
	},
	on: 'location',
	plural: {
		meaning: '(plural marker)',
		word: '들',
		type: 'plural',
	},
	too: 'also',
} satisfies Record<string, Particle | string>;

export type ParticleKey = keyof typeof PARTICLES;

export const PARTICLES_MAP: Record<string, Particle> = {};

expandMap(PARTICLES as Record<string, Particle | string>, PARTICLES_MAP);
