import { expandMap, type Word } from './common';

export type NounCategory =
	| 'activity'
	| 'action'
	| 'classification'
	| 'counter'
	| 'country'
	| 'datetime'
	| 'education'
	| 'entertainment'
	| 'food-drink'
	| 'human'
	| 'leisure'
	| 'nature'
	| 'object'
	| 'place'
	| 'weather';

export interface Noun extends Word {
	category: NounCategory | NounCategory[];
}

export const NOUNS = {
	// a
	action_move: {
		category: ['entertainment', 'object'],
		meaning: 'action movie',
		word: '액션 영화',
		related: ['movie'],
	},
	america: {
		category: 'country',
		meaning: 'United States of America',
		word: '미국',
	},
	// b
	breakfast: {
		category: ['datetime', 'food-drink'],
		meaning: ['breakfast', 'morning'],
		word: '아침',
	},
	// c
	chapter: 'lesson',
	class: {
		category: 'education',
		meaning: ['class', 'course'],
		word: '수업',
	},
	coffee: {
		category: ['food-drink', 'object'],
		meaning: 'coffee',
		word: '커피',
	},
	college_student: {
		category: 'education',
		meaning: 'college student',
		word: '대학생',
	},
	comedy: {
		category: ['activity', 'entertainment'],
		meaning: 'comedy',
		word: '코미디',
	},
	course: 'class',
	// e
	exam: 'test',
	// f
	flower: {
		category: 'nature',
		meaning: 'flower',
		word: '꽃',
	},
	food: {
		category: ['food-drink', 'object'],
		meaning: 'food',
		word: '음식',
	},
	freshman: {
		category: 'education',
		meaning: 'freshman',
		word: '1학년',
	},
	friend: {
		category: 'human',
		meaning: 'friend',
		word: '친구',
	},
	// g
	grade: {
		category: 'education',
		meaning: 'grade',
		word: '학년',
	},
	graduate_school: {
		category: 'education',
		meaning: 'graduate school',
		word: '대학원',
	},
	greeting: {
		category: 'action',
		meaning: 'greeting',
		word: '인사',
	},
	// h
	homework: {
		category: 'education',
		meaning: 'homework',
		word: '숙제',
	},
	history: {
		category: 'education',
		meaning: 'history',
		word: '역사',
	},
	// j
	juice: {
		category: ['food-drink', 'object'],
		meaning: 'juice',
		word: '주스',
	},
	junior: {
		category: 'education',
		meaning: 'junior',
		word: '3학년',
	},
	// k
	korea: {
		category: 'country',
		meaning: 'Korea',
		word: '한국',
	},
	// l
	lesson: {
		category: 'counter',
		meaning: 'lesson',
		word: '과',
	},
	library: {
		category: ['education', 'place'],
		meaning: 'library',
		word: '도서관',
	},
	// m
	man: {
		category: ['human', 'classification'],
		meaning: ['man', 'male'],
		word: '남자',
	},
	morning: 'breakfast',
	movie: {
		category: ['entertainment', 'object'],
		meaning: 'movie',
		word: '영화',
	},
	movie_theatre: {
		category: ['entertainment', 'place'],
		meaning: 'movie theatre',
		word: '영화관',
	},
	musical_instrument: {
		category: ['entertainment', 'object'],
		meaning: 'musical instrument',
		word: '악기',
	},
	// n
	next_year: {
		category: 'datetime',
		meaning: 'next year',
		word: '내년',
	},
	night: {
		category: 'datetime',
		meaning: 'night',
		word: '밤',
	},
	noon: {
		category: 'datetime',
		meaning: 'noon',
		word: '낮',
	},
	// p
	piano: {
		category: ['entertainment', 'object'],
		meaning: 'piano',
		word: '피아노',
	},
	people: 'person',
	person: {
		category: 'human',
		meaning: ['person', 'people'],
		word: '사람',
	},
	// r
	restaurant: {
		category: ['food-drink', 'place'],
		meaning: 'restaurant',
		word: '식당',
	},
	// s
	school: {
		category: ['education', 'place'],
		meaning: 'school',
		word: '학교',
	},
	school_vacation: {
		category: ['education', 'leisure'],
		meaning: 'school vacation',
		word: '방학',
	},
	school_year: {
		category: ['education', 'datetime'],
		meaning: 'school year',
		word: '학년',
	},
	season: {
		category: ['weather', 'datetime'],
		meaning: 'season',
		word: '계절',
	},
	senior: {
		category: 'education',
		meaning: 'senior',
		word: '4학년',
	},
	sophomore: {
		category: 'education',
		meaning: 'sophomore',
		word: '2학년',
	},
	student: {
		category: 'education',
		meaning: 'student',
		word: '학생',
	},
	study: {
		category: ['education', 'action'],
		meaning: 'study',
		word: '공부',
	},
	summer: {
		category: ['weather', 'datetime'],
		meaning: 'summer',
		word: '여름',
	},
	// t
	television: {
		category: ['entertainment', 'object'],
		meaning: 'television',
		word: ['텔레비전', '티비'],
	},
	test: {
		category: ['education', 'object'],
		meaning: ['test', 'exam'],
		word: '시험',
	},
	theater: {
		category: 'place',
		meaning: 'theater',
		word: '극장',
	},
	today: {
		category: 'datetime',
		meaning: 'today',
		word: '오늘',
	},
	tomorrow: {
		category: 'datetime',
		meaning: 'tomorrow',
		word: '내일',
	},
	travel: {
		category: ['activity', 'leisure'],
		meaning: 'travel',
		word: '여행',
	},
} satisfies Record<string, Noun | string>;

export type NounKey = keyof typeof NOUNS;

export const NOUNS_MAP: Record<string, Noun> = {};

expandMap(NOUNS as Record<string, Noun | string>, NOUNS_MAP);
