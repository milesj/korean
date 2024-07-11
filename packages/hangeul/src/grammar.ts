import type {
	CourseChapter,
	SpeechForm,
	SpeechLevel,
	WordClass,
} from './types';

export interface WordSource {
	chapter?: CourseChapter;
	conjugations?: string[]; // Temporary!
	form?: SpeechForm;
	korean: string;
	note?: string;
	speech?: SpeechLevel;
}

export interface WordTranslation {
	chapter?: CourseChapter;
	english: string;
	note?: string;
}

export interface WordDefinition<
	S extends WordSource = WordSource,
	T extends WordTranslation = WordTranslation,
> {
	chapter?: CourseChapter;
	class?: WordClass;
	examples?: string[];
	meaning: string | T | (string | T)[];
	word: string | S | (string | S)[];
}

// NOUNS

export type NounCategory = 'country' | 'datetime' | 'education';

export interface NounSource extends WordSource {
	counter?: boolean;
}

export interface NounTranslation extends WordTranslation {
	category?: NounCategory | NounCategory[];
}

export interface NounDefinition
	extends WordDefinition<NounSource, NounTranslation> {}

// NUMBERS

export interface NumberSource extends WordSource {
	native?: boolean;
}

export interface NumberDefinition extends WordDefinition<NumberSource> {}

// PARTICLES

export interface ParticleSource extends WordSource {
	consonant: string;
	vowel: string;
}

export interface ParticleDefinition extends WordDefinition<ParticleSource> {}
