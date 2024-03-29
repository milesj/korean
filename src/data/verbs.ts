import { expandMap, type Word } from './common';
import type { NounKey } from './nouns';

export interface Verb extends Word {
	noun?: NounKey;
}

export const VERBS: Record<string, Verb> = {
	// c
	to_congratulate: {
		meaning: 'to congratulate',
		// noun: 'celebration',
		word: '축하하다',
	},
	// d
	to_do: {
		class: '101-2.2',
		meaning: 'to do',
		word: '하다',
	},
	// e
	to_eat: {
		class: '101-2.1',
		meaning: 'to eat',
		word: '먹다',
	},
	to_exist: {
		class: '101-4.1',
		meaning: ['to exist at', 'to stay'],
		word: '계시다',
	},
	// g
	to_get_along: {
		class: '101-2.2',
		meaning: 'to get along',
		word: '지내다',
	},
	to_go: {
		class: '101-3.2',
		meaning: 'to go',
		word: '가다',
	},
	to_greet: {
		class: '101-3.2',
		meaning: 'to greet',
		noun: 'greeting',
		word: '인사하다',
	},
	// k
	to_know: {
		class: '101-2.1',
		meaning: 'to know',
		word: '알다',
	},
	// m
	to_meet: {
		class: '101-2.2',
		meaning: 'to meet',
		word: '만나다',
	},
	// q
	to_question: {
		class: '101-3.2',
		meaning: 'to question',
		noun: 'question',
		word: '질문하다',
	},
	// r
	to_read: {
		class: '101-3.2',
		meaning: 'to read',
		word: '읽다',
	},
	to_receive: {
		meaning: 'to receive',
		word: '받다',
	},
	// s
	to_see: {
		class: '101-2.2',
		meaning: 'to see, look, watch',
		word: '보다',
	},
	to_sit: {
		class: '101-2.1',
		meaning: 'to sit',
		word: '앉다',
	},
	to_stay: 'to_exist',
	to_study: {
		meaning: 'to study',
		noun: 'study',
		word: '공부하다',
	},
	// t
	to_travel: {
		meaning: 'to travel',
		noun: 'travel',
		word: '여행하다',
	},
	// w
	to_write: {
		class: '101-2.2',
		meaning: 'to write',
		word: '쓰다',
	},
} satisfies Record<string, Verb | string>;

export type PronounKey = keyof typeof VERBS;

export const VERBS_MAP: Record<string, Verb> = {};

expandMap(VERBS as Record<string, Verb | string>, VERBS_MAP);
