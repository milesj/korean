import { expandMap, type Word } from './common';

export type NounCategory =
	| 'activity'
	| 'action'
	| 'animal'
	| 'classification'
	| 'counter'
	| 'country'
	| 'datetime'
	| 'direction'
	| 'education'
	| 'entertainment'
	| 'family'
	| 'finance'
	| 'food-drink'
	| 'human'
	| 'language'
	| 'leisure'
	| 'nature'
	| 'object'
	| 'place'
	| 'weather';

export interface Noun extends Word {
	category: NounCategory | NounCategory[];
	prenoun?: boolean;
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
	animal: {
		class: '101-4.1',
		category: ['animal', 'counter'],
		meaning: 'animal',
		word: '마리',
	},
	apartment: {
		class: '101-4.2',
		category: 'place',
		meaning: 'apartment',
		word: '아파트',
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
	between: {
		class: '101-4.2',
		category: 'classification',
		meaning: ['between', 'relationship'],
		word: '사이',
	},
	biology: {
		class: '101-4.2',
		category: 'education',
		meaning: 'biology',
		word: '생물학',
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
	boston: {
		class: '101-4.1',
		category: 'place',
		meaning: 'Boston',
		word: '보스턴',
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
		word: ['수업', '반'],
	},
	classroom: {
		class: '101-3.2',
		category: ['education', 'place'],
		meaning: 'classroom',
		word: '교실',
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
	computer: {
		class: '101-3.2',
		category: ['entertainment', 'object'],
		meaning: 'computer',
		word: '컴퓨터',
	},
	course: 'class',
	// d
	dad: {
		class: '101-4.1',
		category: 'family',
		meaning: 'father',
		word: '아빠',
	},
	day: {
		class: '101-4.1',
		category: ['datetime', 'counter'],
		meaning: 'day',
		word: '일',
	},
	desk: {
		class: '101-3.1',
		category: 'object',
		meaning: 'desk',
		word: '책상',
	},
	dictionary: {
		class: '101-3.2',
		category: ['education', 'object'],
		meaning: 'dictionary',
		word: '사전',
	},
	dog: {
		class: '101-4.1',
		category: 'animal',
		meaning: 'dog',
		word: '개',
	},
	dollar: {
		class: '101-4.1',
		category: ['finance', 'counter'],
		meaning: 'dollar',
		word: ['달러', '불'],
	},
	dormitory: {
		class: '101-3.1',
		category: ['education', 'place'],
		meaning: 'dormitory',
		word: '기숙사',
	},
	// e
	economics: {
		class: '101-3.2',
		category: 'education',
		meaning: 'economics',
		word: '경제학',
	},
	english: {
		class: '101-1.2',
		category: ['education', 'language'],
		meaning: 'English',
		word: '영어',
	},
	exam: 'test',
	// f
	father: {
		class: '101-4.1',
		category: 'family',
		meaning: 'father',
		word: '아버지',
	},
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
	graduate_student: {
		class: '101-4.1',
		category: 'education',
		meaning: 'graduate student',
		word: '대학원생',
	},
	greeting: {
		class: '101-1.1',
		category: 'action',
		meaning: 'greeting',
		word: '인사',
	},
	// h
	hall: {
		class: '101-3.2',
		category: 'place',
		meaning: 'hall',
		word: '홀',
	},
	hawaii: {
		class: '101-4.2',
		category: 'place',
		meaning: 'Hawaii',
		word: '하와이',
	},
	high_school_student: {
		class: '101-4.1',
		category: 'education',
		meaning: 'high school student',
		word: '고등학생',
	},
	history: {
		class: '101-2.2',
		category: 'education',
		meaning: 'history',
		word: '역사',
	},
	home: {
		class: '101-3.2',
		category: 'place',
		meaning: ['home', 'house'],
		word: '집',
	},
	homework: {
		class: '101-2.1',
		category: 'education',
		meaning: 'homework',
		word: '숙제',
	},
	hong_kong: {
		class: '101-4.1',
		category: 'place',
		meaning: 'Hong Kong',
		word: '홍콩',
	},
	hour_duration: {
		class: '101-4.1',
		category: ['datetime', 'counter'],
		meaning: 'hour',
		word: '시간',
	},
	house: 'home',
	how_many: {
		class: '101-4.1',
		category: ['language', 'counter'],
		meaning: 'how many',
		word: '몇',
		prenoun: true,
	},
	// i
	inside: {
		class: '101-3.1',
		category: 'direction',
		meaning: 'inside',
		word: '안',
	},
	item: {
		class: '101-4.1',
		category: ['object', 'counter'],
		meaning: 'item',
		word: '개',
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
		category: ['education', 'language'],
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
	los_angeles: {
		class: '101-4.2',
		category: 'place',
		meaning: 'Los Angeles',
		word: '로스앤젤레스',
	},
	// m
	man: {
		class: '101-2.2',
		category: ['human', 'classification'],
		meaning: ['man', 'male'],
		word: '남자',
	},
	mom: {
		class: '101-4.1',
		category: 'family',
		meaning: 'mom',
		word: '엄마',
	},
	month: {
		class: '101-4.1',
		category: ['datetime', 'counter'],
		meaning: 'month',
		word: ['달', '월'],
	},
	mother: {
		class: '101-4.1',
		category: 'family',
		meaning: 'mother',
		word: '어머니',
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
	new_york: {
		class: '101-4.2',
		category: 'place',
		meaning: 'New York',
		word: '뉴욕',
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
	// o
	older_brother_boy: {
		class: '101-4.1',
		category: 'family',
		meaning: 'older brother (for boy)',
		word: '형',
	},
	older_brother_girl: {
		class: '101-4.1',
		category: 'family',
		meaning: 'older brother (for girl)',
		word: '오빠',
	},
	older_sister_boy: {
		class: '101-4.2',
		category: 'family',
		meaning: 'older sister (for boy)',
		word: '누나',
	},
	older_sister_girl: {
		class: '101-4.2',
		category: 'family',
		meaning: 'older sister (for girl)',
		word: '언니',
	},
	// p
	parents: {
		class: '101-4.1',
		category: 'family',
		meaning: 'parents',
		word: '부모님',
	},
	piano: {
		category: ['entertainment', 'object'],
		meaning: 'piano',
		word: '피아노',
	},
	people: 'person',
	people_counter: {
		class: '101-4.1',
		category: ['human', 'counter'],
		meaning: 'people',
		word: '명',
	},
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
	// q
	question: {
		class: '101-3.2',
		category: 'language',
		meaning: 'question',
		word: '질문',
	},
	// r
	relationship: 'between',
	restaurant: {
		class: '101-2.1',
		category: ['food-drink', 'place'],
		meaning: 'restaurant',
		word: '식당',
	},
	room: {
		class: '101-4.2',
		category: 'place',
		meaning: 'room',
		word: '방',
	},
	roommate: {
		class: '101-4.2',
		category: 'human',
		meaning: 'roommate',
		word: '룸메이트',
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
	textbook: {
		class: '101-3.2',
		category: ['education', 'object'],
		meaning: 'textbook',
		word: '교과서',
	},
	theater: {
		category: 'place',
		meaning: 'theater',
		word: '극장',
	},
	thing: {
		class: '101-4.2',
		category: 'classification',
		meaning: 'thing',
		word: ['것', '거'],
	},
	time: {
		class: '101-3.2',
		category: 'datetime',
		meaning: 'time',
		word: '시간',
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
	umbrella: {
		class: '101-3.2',
		category: 'object',
		meaning: 'umbrella',
		word: '우산',
	},
	university: 'college',
	united_kingdom: {
		class: '101-1.2',
		category: 'country',
		meaning: 'United Kingdom',
		word: '영국',
	},
	united_states: 'america',
	// v
	volume: {
		class: '101-4.1',
		category: 'counter',
		meaning: 'volume',
		word: '권',
	},
	// w
	watch: 'clock',
	where: {
		class: '101-3.1',
		category: ['direction', 'language'],
		meaning: 'where',
		word: '어디',
	},
	woman: {
		class: '101-3.2',
		category: ['human', 'classification'],
		meaning: 'woman',
		word: '여자',
	},
	won_currency: {
		class: '101-4.1',
		category: ['finance', 'counter'],
		meaning: 'won (currency)',
		word: '원',
	},
	// y
	year: {
		class: '101-4.1',
		category: ['datetime', 'counter'],
		meaning: 'year',
		word: '년',
	},
	younger_brother: {
		class: '101-4.1',
		category: 'family',
		meaning: 'younger brother',
		word: '남동생',
	},
	younger_sister: {
		class: '101-4.1',
		category: 'family',
		meaning: 'younger sister',
		word: '여동생',
	},
	younger_sibling: {
		class: '101-4.1',
		category: 'family',
		meaning: 'younger sibling',
		word: '동생',
	},
} satisfies Record<string, Noun | string>;

export type NounKey = keyof typeof NOUNS;

export const NOUNS_MAP: Record<string, Noun> = {};

expandMap(NOUNS as Record<string, Noun | string>, NOUNS_MAP);
