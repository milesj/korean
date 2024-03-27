import { expandMap, type Word } from './common';

export type NounCategory =
	| 'activity'
	| 'action'
	| 'classification'
	| 'counter'
	| 'country'
	| 'datetime'
	| 'direction'
	| 'education'
	| 'entertainment'
	| 'food-drink'
	| 'human'
	| 'leisure'
	| 'nature'
	| 'object'
	| 'place'
	| 'weather'
	| 'w4';

export interface Noun extends Word {
	category: NounCategory | NounCategory[];
}

export const NOUNS = {
	// a
	above: {
		class: '101-3.1',
		category: 'direction',
		meaning: ['above', 'top'],
		word: '위',
	},
	action_movie: {
		category: ['entertainment', 'object'],
		meaning: 'action movie',
		word: '액션 영화',
		related: ['movie'],
	},
	america: {
		class: '101-1.1',
		category: 'country',
		meaning: 'United States of America',
		word: '미국',
	},
	// b
	back: {
		class: '101-3.1',
		category: 'direction',
		meaning: ['back', 'behind'],
		word: '뒤',
	},
	bag: {
		class: '101-3.1',
		category: 'object',
		meaning: 'bag',
		word: '가방',
	},
	behind: 'back',
	below: 'bottom',
	beside: {
		class: '101-3.1',
		category: 'direction',
		meaning: ['beside', 'side'],
		word: '옆',
	},
	book: {
		class: '101-3.1',
		category: 'object',
		meaning: 'book',
		word: '책',
	},
	bookstore: {
		class: '101-3.1',
		category: 'place',
		meaning: 'bookstore',
		word: '서점',
	},
	bottom: {
		class: '101-3.1',
		category: 'direction',
		meaning: ['bottom', 'below'],
		word: ['아래', '밑'],
	},
	breakfast: {
		class: '101-2.1',
		category: ['datetime', 'food-drink'],
		meaning: ['breakfast', 'morning'],
		word: '아침',
	},
	building: {
		class: '101-3.1',
		category: 'place',
		meaning: 'building',
		word: '빌딩',
	},
	// c
	campus: {
		class: '101-3.1',
		category: 'place',
		meaning: 'campus',
		word: '캠퍼스',
	},
	chapter: 'lesson',
	chair: {
		class: '101-3.1',
		category: 'object',
		meaning: 'chair',
		word: '의자',
	},
	china: {
		class: '101-1.1',
		category: 'country',
		meaning: 'China',
		word: '중국',
	},
	class: {
		class: '101-2.1',
		category: 'education',
		meaning: ['class', 'course'],
		word: ['수업'],
	},
	clock: {
		class: '101-3.1',
		category: ['datetime', 'object'],
		meaning: ['clock', 'watch'],
		word: '시계',
	},
	coffee: {
		class: '101-2.1',
		category: ['food-drink', 'object'],
		meaning: 'coffee',
		word: '커피',
	},
	college: {
		class: '101-3.1',
		category: ['education', 'place'],
		meaning: 'college',
		word: '대학교',
	},
	college_student: {
		class: '101-1.1',
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
	// d
	desk: {
		class: '101-3.1',
		category: 'object',
		meaning: 'desk',
		word: '책상',
	},
	dormitory: {
		class: '101-3.1',
		category: ['education', 'place'],
		meaning: 'dormitory',
		word: '기숙사',
	},
	// e
	english: {
		class: '101-1.2',
		category: 'education',
		meaning: 'English',
		word: '영어',
	},
	exam: 'test',
	// f
	floor: {
		class: '101-3.1',
		category: 'counter',
		meaning: ['floor', 'layer'],
		word: '층',
	},
	flower: {
		category: 'nature',
		meaning: 'flower',
		word: '꽃',
	},
	food: {
		class: '101-2.2',
		category: ['food-drink', 'object'],
		meaning: 'food',
		word: '음식',
	},
	freshman: {
		class: '101-1.1',
		category: 'education',
		meaning: 'freshman',
		word: '일학년',
		wordPronounced: '일한년',
	},
	friend: {
		class: '101-2.1',
		category: 'human',
		meaning: 'friend',
		word: '친구',
	},
	front: {
		class: '101-3.1',
		category: 'direction',
		meaning: 'front',
		word: '앞',
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
		class: '101-1.1',
		category: 'action',
		meaning: 'greeting',
		word: '인사',
	},
	// h
	homework: {
		class: '101-2.1',
		category: 'education',
		meaning: 'homework',
		word: '숙제',
	},
	history: {
		class: '101-2.2',
		category: 'education',
		meaning: 'history',
		word: '역사',
	},
	// i
	inside: {
		class: '101-3.1',
		category: 'direction',
		meaning: 'inside',
		word: '안',
	},
	// j
	japan: {
		class: '101-1.1',
		category: 'country',
		meaning: 'Japan',
		word: '일본',
	},
	juice: {
		class: '101-2.2',
		category: ['food-drink', 'object'],
		meaning: 'juice',
		word: '주스',
	},
	junior: {
		class: '101-1.1',
		category: 'education',
		meaning: 'junior',
		word: '삼학년',
		wordPronounced: '삼한년',
	},
	// k
	korea: {
		class: '101-1.1',
		category: 'country',
		meaning: 'Korea',
		word: '한국',
	},
	korean: {
		class: '101-1.2',
		category: 'education',
		meaning: 'Korean',
		word: ['한국어', '한국말'],
	},
	// l
	layer: 'floor',
	lesson: {
		class: '101-1.1',
		category: 'counter',
		meaning: 'lesson',
		word: '과',
	},
	library: {
		class: '101-2.1',
		category: ['education', 'place'],
		meaning: 'library',
		word: '도서관',
	},
	// m
	man: {
		class: '101-2.2',
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
	name: {
		category: 'human',
		meaning: 'name',
		word: '이름',
	},
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
	post_office: {
		class: 101.2,
		category: 'place',
		meaning: 'post office',
		word: '우체국',
	},
	// r
	restaurant: {
		class: '101-2.1',
		category: ['food-drink', 'place'],
		meaning: 'restaurant',
		word: '식당',
	},
	// s
	school: {
		class: '101-2.1',
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
		class: '101-1.1',
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
		class: '101-1.1',
		category: 'education',
		meaning: 'senior',
		word: '사학년',
		wordPronounced: '사한년',
	},
	side: 'beside',
	sophomore: {
		class: '101-1.1',
		category: 'education',
		meaning: 'sophomore',
		word: '이학년',
		wordPronounced: '이한년',
	},
	student: {
		class: '101-1.1',
		category: 'education',
		meaning: 'student',
		word: '학생',
	},
	student_center: {
		class: '101-3.1',
		category: ['education', 'place'],
		meaning: 'student center',
		word: '학생회관',
	},
	study: {
		class: '101-2.2',
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
	teacher: {
		class: '101-1.2',
		category: ['education', 'human'],
		meaning: 'teacher',
		word: '선생님',
	},
	television: {
		class: '101-2.2',
		category: ['entertainment', 'object'],
		meaning: 'television',
		word: ['텔레비전', '티비'],
	},
	test: {
		class: '101-2.2',
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
		class: '101-2.2',
		category: 'datetime',
		meaning: 'today',
		word: '오늘',
	},
	tomorrow: {
		class: '101-2.2',
		category: 'datetime',
		meaning: 'tomorrow',
		word: '내일',
	},
	travel: {
		category: ['activity', 'leisure'],
		meaning: 'travel',
		word: '여행',
	},
	// u
	university: 'college',
	united_kingdom: {
		class: '101-1.2',
		category: 'country',
		meaning: 'United Kingdom',
		word: '영국',
	},
	united_states: 'america',
	// w
	watch: 'clock',
	where: {
		class: '101-3.1',
		category: ['direction', 'w4'],
		meaning: 'where',
		word: '어디',
	},
} satisfies Record<string, Noun | string>;

export type NounKey = keyof typeof NOUNS;

export const NOUNS_MAP: Record<string, Noun> = {};

expandMap(NOUNS as Record<string, Noun | string>, NOUNS_MAP);
