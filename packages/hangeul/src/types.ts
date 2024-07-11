export type CourseChapter =
	| '101-1.1'
	| '101-1.2'
	| '101-2.1'
	| '101-2.2'
	| '101-3.1'
	| '101-3.2'
	| '101-4.1'
	| '101-4.2'
	| '102-5.1'
	| '102-5.2'
	| '102-6.1'
	| '102-6.2'
	| '102-7.1'
	| '102-7.2'
	| '103-8.1'
	| '103-8.2'
	| '103-9.1'
	| '103-9.2'
	| '103-10.1'
	| '103-10.2'
	| '103-11.1'
	| '103-11.2'
	| '103-12.1'
	| '103-12.2'
	| 'other';

export type SpeechLevel =
	| 'deferential' // 습니다
	| 'polite' // 어요/아요
	| 'blunt' // 소/오 (rare)
	| 'familiar' // 네 (rare)
	| 'intimate' // 어/아
	| 'plain'; // 다

export type SpeechForm = 'honorific' | 'humble' | 'plain';

export type WordClass =
	| 'adjective'
	| 'adverb'
	| 'conjunction'
	| 'copula'
	| 'noun'
	| 'numeral'
	| 'particle'
	| 'prenoun'
	| 'pronoun'
	| 'suffix'
	| 'verb';
