import { generateMap, type Word } from './common';

export type NounCategory =
	| 'activity'
	| 'datetime'
	| 'education'
	| 'entertainment'
	| 'leisure'
	| 'nature'
	| 'object'
	| 'place'
	| 'weather';

export interface Noun extends Word {
	category: NounCategory | NounCategory[];
}

export const NOUNS: Noun[] = [
	// a
	{
		category: ['entertainment', 'object'],
		meaning: 'action movie',
		word: '액션 영화',
	},
	// c
	{
		category: ['activity', 'entertainment'],
		meaning: 'comedy',
		word: '코미디',
	},
	// f
	{
		category: 'nature',
		meaning: 'flower',
		word: '꽃',
	},
	// g
	{
		category: 'education',
		meaning: 'grade',
		word: '학년',
	},
	{
		category: 'education',
		meaning: 'graduate school',
		word: '대학원',
	},
	// m
	{
		category: ['entertainment', 'object'],
		meaning: 'movie',
		word: '영화',
	},
	{
		category: ['entertainment', 'place'],
		meaning: 'movie theatre',
		word: '영화관',
	},
	{
		category: ['entertainment', 'object'],
		meaning: 'musical instrument',
		word: '악기',
	},
	// n
	{
		category: 'datetime',
		meaning: 'next year',
		word: '내년',
	},
	{
		category: 'datetime',
		meaning: 'night',
		word: '밤',
	},
	{
		category: 'datetime',
		meaning: 'noon',
		word: '낮',
	},
	// p
	{
		category: ['entertainment', 'object'],
		meaning: 'piano',
		word: '피아노',
	},
	// s
	{
		category: ['education', 'leisure'],
		meaning: 'school vacation',
		word: '방학',
	},
	{
		category: ['weather', 'datetime'],
		meaning: 'season',
		word: '계절',
	},
	{
		category: ['weather', 'datetime'],
		meaning: 'summer',
		word: '여름',
	},
	// t
	{
		category: 'place',
		meaning: 'theater',
		word: '극장',
	},
	{
		category: ['activity', 'leisure'],
		meaning: 'travel',
		word: '여행',
	},
];

export const NOUNS_MAP: Record<string, Noun> = {};

generateMap(NOUNS, NOUNS_MAP);
