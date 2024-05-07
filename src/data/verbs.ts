import { expandMap, type Word } from './common';
import type { NounKey } from './nouns';

export interface Verb extends Word {
	opposite?: string;
	noun?: NounKey;
}

export const VERBS: Record<string, Verb | string> = {
	// a
	to_answer: {
		class: '102-6.2',
		meaning: 'to answer',
		word: '대답하다',
	},
	to_ask: {
		class: '103-8.2',
		meaning: 'to ask',
		word: '묻다',
	},
	// b
	to_begin: {
		class: '103-10.1',
		meaning: 'to begin',
		word: '시작하다',
	},
	to_buy: {
		class: '102-5.1',
		meaning: 'to buy',
		word: '사다',
	},
	to_buy_groceries: {
		class: '102-7.2',
		meaning: "to buy one's groceries",
		word: '장보다',
	},
	// c
	to_call_phone: {
		class: '102-5.1',
		meaning: 'to make a phone call',
		word: '전화하다',
		noun: 'phone_call',
	},
	to_clean: {
		class: '102-7.2',
		meaning: 'to clean',
		word: '청소하다',
		noun: 'cleaning',
	},
	to_come: {
		class: '101-4.2',
		meaning: 'to come',
		word: '오다',
	},
	to_come_in: {
		class: '103-10.2',
		meaning: 'to come in',
		word: '들어오다',
	},
	to_congratulate: {
		class: '102-7.1',
		meaning: 'to congratulate',
		word: '축하하다',
	},
	// d
	to_die: {
		class: '103-9.2',
		meaning: 'to die',
		word: '죽다',
		related: ['to_pass_away'],
	},
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
		class: ['101-2.1', '103-9.2'],
		meaning: 'to eat',
		word: ['먹다', { word: '드시다', honorific: true }],
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
	to_get_off: {
		class: '103-8.1',
		meaning: 'to get off, out of',
		word: '내리다',
		opposite: 'to_get_on',
	},
	to_get_on: {
		class: '103-8.1',
		meaning: ['to get on, in', 'to ride'],
		word: '타다',
		opposite: 'to_get_off',
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
		class: ['101-4.2', '103-9.2'],
		meaning: 'to give',
		word: ['주다', { word: '드리다', humble: true }],
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
	to_be_late: {
		class: '103-10.2',
		meaning: 'to be late',
		word: '늦다',
	},
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
	to_make: {
		class: '102-7.2',
		meaning: 'to make',
		word: '만들다',
	},
	to_meet: {
		class: '101-2.2',
		meaning: 'to meet',
		word: '만나다',
	},
	to_move: {
		class: '103-10.2',
		meaning: 'to move',
		word: '이사하다',
	},
	// p
	to_pass_away: {
		class: '103-9.2',
		meaning: 'to pass away',
		word: { word: '돌아가시다', honorific: true },
		related: ['to_die'],
	},
	to_play: {
		class: '103-10.1',
		meaning: ['to play (with friends)', 'to not work'],
		word: '놀다',
	},
	to_play_a_sport: {
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
	to_prepare: {
		class: '102-7.2',
		meaning: 'to prepare',
		word: '준비하다',
		noun: 'preparation',
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
		class: '102-7.1',
		meaning: 'to receive',
		word: '받다',
	},
	// s
	to_see: {
		class: ['101-2.2', '103-8.2'],
		meaning: 'to see, look, watch',
		word: ['보다', '뵙다'],
	},
	to_be_seen: {
		class: '103-8.2',
		meaning: 'to be seen, visible',
		word: '보이다',
	},
	to_sell: {
		class: '103-8.2',
		meaning: 'to sell',
		word: '팔다',
	},
	to_send: 'to_spend_time',
	to_shop: {
		class: '102-5.1',
		meaning: 'to shop',
		word: '쇼핑하다',
		noun: 'shopping',
	},
	to_sleep: {
		class: ['101-4.2', '103-9.2'],
		meaning: 'to sleep',
		word: ['자다', { word: '주무시다', honorific: true }],
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
	to_spend_time: {
		class: ['102-7.2', '103-9.1'],
		meaning: ['to spend time', 'to send'],
		word: '보내다',
	},
	to_stay: 'to_exist',
	to_study: {
		class: '101-2.2',
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
	to_take_a_major: {
		class: '102-7.2',
		meaning: 'to take a major',
		word: '전공하다',
		noun: 'major',
	},
	to_take_a_photo: {
		class: '103-9.2',
		meaning: 'to take a photo',
		word: '찍다',
	},
	to_take_time: {
		class: '102-6.1',
		meaning: 'to take time',
		word: '걸리다',
	},
	to_talk: {
		class: '102-7.2',
		meaning: 'to talk / chat',
		word: '이야기하다',
		noun: 'talk',
	},
	to_teach: {
		class: '102-5.1',
		meaning: 'to teach',
		word: '가르치다',
	},
	to_travel: {
		class: '102-7.1',
		meaning: 'to travel',
		noun: 'travel',
		word: '여행하다',
	},
	to_turn: {
		class: '103-8.2',
		meaning: 'to turn',
		word: '돌다',
	},
	// w
	to_walk: {
		class: '102-5.2',
		meaning: 'to walk',
		word: '걷다',
	},
	to_wash_dishes: {
		class: '102-7.2',
		meaning: 'to wash dishes',
		word: '설거지하다',
		noun: 'dishwashing',
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
