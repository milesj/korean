import { expandMap, type Word } from './common';

export type ParticleType = 'topic' | 'object' | 'plural';

export interface Particle extends Word {
	type?: ParticleType;
}

export const PARTICLES = {
	also: {
		meaning: ['also', 'too'],
		word: '도',
	},
	as_for: {
		meaning: 'as for',
		word: ['은', '는'],
		type: 'topic',
	},
	object: {
		meaning: ['(object marker)'],
		word: ['을', '를'],
		type: 'object',
	},
	plural: {
		meaning: ['(plural marker)'],
		word: '들',
		type: 'plural',
	},
	too: 'also',
} satisfies Record<string, Particle | string>;

export type ParticleKey = keyof typeof PARTICLES;

export const PARTICLES_MAP: Record<string, Particle> = {};

expandMap(PARTICLES as Record<string, Particle | string>, PARTICLES_MAP);
