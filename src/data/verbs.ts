import { expandMap, type Word } from './common';
import type { NounKey } from './nouns';

export interface Verb extends Word {
	opposite?: string;
	noun?: NounKey;
}

export const VERBS: Record<string, Verb> = {
	// a
	to_answer: {
		class: '102-6.2',
		meaning: 'to answer',
		word: '대답하다',
	},
	// b
	to_buy: {
		class: '102-5.1',
		meaning: 'to buy',
		word: '사다',
	},
	// c
	to_call_phone: {
		class: '102-5.1',
		meaning: 'to make a phone call',
		word: '전화하다',
		noun: 'phone_call',
	},
	to_come: {
		class: '101-4.2',
		meaning: 'to come',
		word: '오다',
	},
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
	to_drink: {
		class: '101-4.2',
		meaning: 'to drink',
		word: '마시다',
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
	to_exercise: {
		class: '102-5.1',
		meaning: 'to exercise',
		word: '운동하다',
		noun: 'exercise',
	},
	// g
	to_get_along: {
		class: '101-2.2',
		meaning: 'to get along',
		word: '지내다',
	},
	to_get_up: {
		class: '102-6.2',
		meaning: 'to get up',
		word: '일어나다',
	},
	to_gift: {
		class: '102-5.1',
		meaning: 'to gift',
		word: '선물하다',
		noun: 'present',
	},
	to_give: {
		class: '101-4.2',
		meaning: 'to give',
		word: '주다',
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
		opposite: 'to_not_know',
	},
	to_not_know: {
		class: '102-6.2',
		meaning: 'to not know',
		word: '모르다',
		opposite: 'to_know',
	},
	// l
	to_learn: {
		class: '101-4.2',
		meaning: 'to learn',
		word: '배우다',
	},
	to_like: {
		class: '102-5.2',
		meaning: 'to like',
		word: '좋아하다',
	},
	to_listen: {
		class: '102-5.2',
		meaning: ['to listen', 'to take (a course)'],
		word: '듣다',
	},
	to_live: {
		class: '102-6.1',
		meaning: 'to live',
		word: '살다',
	},
	// m
	to_meet: {
		class: '101-2.2',
		meaning: 'to meet',
		word: '만나다',
	},
	// p
	to_play: {
		class: '102-5.1',
		meaning: 'to play (a sport)',
		word: '치다',
	},
	to_play_soccer: {
		class: '102-6.2',
		meaning: 'to play soccer',
		word: '축구하다',
	},
	to_practice: {
		class: '102-5.1',
		meaning: 'to practice',
		word: '연습하다',
		noun: 'practice',
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
	to_shop: {
		class: '102-5.1',
		meaning: 'to shop',
		word: '쇼핑하다',
		noun: 'shopping',
	},
	to_sleep: {
		class: '101-4.2',
		meaning: 'to sleep',
		word: '자다',
	},
	to_sit: {
		class: '101-2.1',
		meaning: 'to sit',
		word: '앉다',
	},
	to_speak: {
		class: '102-6.1',
		meaning: 'to speak',
		word: '말하다',
		noun: 'speech',
	},
	to_stay: 'to_exist',
	to_study: {
		meaning: 'to study',
		noun: 'study',
		word: '공부하다',
	},
	to_swim: {
		class: '102-6.2',
		meaning: 'to swim',
		word: '수영하다',
	},
	// t
	to_take_a_course: 'to_listen',
	to_take_time: {
		class: '102-6.1',
		meaning: 'to take time',
		word: '걸리다',
	},
	to_teach: {
		class: '102-5.1',
		meaning: 'to teach',
		word: '가르치다',
	},
	to_travel: {
		meaning: 'to travel',
		noun: 'travel',
		word: '여행하다',
	},
	// w
	to_walk: {
		class: '102-5.2',
		meaning: 'to walk',
		word: '걷다',
	},
	to_work: {
		class: '102-5.1',
		meaning: 'to work',
		word: '일하다',
		noun: 'work',
	},
	to_write: {
		class: '101-2.2',
		meaning: 'to write',
		word: '쓰다',
	},
} satisfies Record<string, Verb | string>;

export type PronounKey = keyof typeof VERBS;

export const VERBS_MAP: Record<string, Verb> = {};

expandMap(VERBS as Record<string, Verb | string>, VERBS_MAP);
