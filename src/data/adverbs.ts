import { generateMap, type Word } from './common';

export interface Adverb extends Word {}

export const ADVERBS: Adverb[] = [
	// a
	{
		meaning: 'a little',
		word: ['조금', '좀'],
		description:
			'The form `좀` is a contraction of `조금`, both of which mean "a little" of something.',
	},
	{
		meaning: 'again',
		word: '또',
	},
	// c
	{
		meaning: 'cannot',
		word: '못',
	},
	// d
	{
		meaning: 'diligently',
		word: '열심히',
	},
	{
		meaning: 'do not',
		word: '안',
	},
	// e
	{
		meaning: 'every day',
		word: '매일',
	},
	// h
	{
		meaning: 'how',
		word: '어떻게',
		wordPronounced: '어떠케',
	},
	{
		meaning: ['how long', 'how much'],
		word: ['얼마나', '얼마'],
	},
	// n
	{
		meaning: 'no',
		word: '아니요',
	},
	{
		meaning: 'now',
		word: '지금',
	},
	// o
	{
		meaning: ['often', 'frequently'],
		word: '자주',
	},
	// p
	{
		meaning: ['perhaps', 'probably'],
		word: '아마',
	},
	// r
	{
		meaning: ['really'],
		word: ['진짜', '정말'],
	},
	// t
	{
		meaning: 'these days',
		word: '요즘',
	},
	{
		meaning: 'together',
		word: '같이',
		wordPronounced: '가치',
		description:
			'The adverd `같이` means "together" or "with". It is used to describe an action that is done with someone else, or some thing.',
	},
	{
		meaning: 'too much',
		word: '너무',
	},
	// u
	{
		meaning: 'usually',
		word: '보통',
	},
	// v
	{
		meaning: ['very', 'really'],
		word: '아주',
	},
	{
		meaning: ['very', 'truly'],
		word: '참',
	},
	// w
	{
		meaning: 'when',
		word: '언제',
	},
	{
		meaning: 'well',
		word: '잘',
	},
	{
		meaning: 'why',
		word: '왜',
	},
	// y
	{
		meaning: 'yes',
		word: ['네', '예'],
	},
];

export const ADVERBS_MAP: Record<string, Adverb> = {};

generateMap(ADVERBS, ADVERBS_MAP);
