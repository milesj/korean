import {
	LETTERS,
	type Letter,
	NORMALIZE,
	type TranslateOptions,
	createDipthong,
	isVowel,
} from './letters';
import { PUNCTUATION, type Punctuation } from './punctuation';

export class Character {
	letter?: Letter;
	punctuation?: Punctuation;
	text: string;

	// Position within the syllable
	index = 0;

	constructor(text: string, index: number) {
		this.letter = LETTERS[text];
		this.punctuation = PUNCTUATION[text];
		this.text = text;
		this.index = index;
	}

	isConsonant(): boolean {
		return this.letter?.type === 'consonant';
	}

	isDipthong(): boolean {
		return this.letter?.type === 'dipthong';
	}

	isSilent(): boolean {
		return this.index === 0 && this.letter?.char === 'ㅇ';
	}

	isVowel(): boolean {
		return this.letter?.type === 'vowel';
	}

	pronounce(options: TranslateOptions): string {
		if (!this.letter || this.punctuation) {
			return this.text;
		}

		const { pronounceAs } = this.letter;

		if (typeof pronounceAs === 'string') {
			return pronounceAs;
		} else if (typeof pronounceAs === 'undefined') {
			return this.translate(options);
		}

		return pronounceAs.call(this.letter, options);
	}

	translate(options: TranslateOptions): string {
		if (!this.letter || this.punctuation) {
			return this.text;
		}

		const { translateAs } = this.letter;

		if (typeof translateAs === 'string') {
			return translateAs;
		}

		return translateAs.call(this.letter, options);
	}

	toString(): string {
		return this.text;
	}
}

export class Syllable {
	rawParts: string[] = [];
	parts: string[] = [];
	characters?: Character[];
	text: string;

	// Positions in the word
	first = false;
	last = false;

	// Links to other syllables
	previous?: Syllable;
	next?: Syllable;

	constructor(text: string) {
		this.text = text;

		// if (HANGEUL.test(text)) {
		const parts = Array.from(text.normalize('NFD')).map(
			(char) => NORMALIZE[char] || char,
		);

		// 1 is always a vowel, so if 2 is also a vowel,
		// then we need to create a dipthong
		if (isVowel(parts[1]) && isVowel(parts[2])) {
			this.parts = [
				parts[0],
				createDipthong(parts[1], parts[2]),
				...parts.slice(3),
			];
		} else {
			this.parts = parts;
		}

		this.rawParts = parts;
		this.characters = this.parts.map(
			(part, index) => new Character(part, index),
		);
		// }
	}

	options(index: number): TranslateOptions {
		const startOfSyllable = index === 0;
		const endOfSyllable = index === this.characters!.length - 1;

		return {
			nextLetter:
				this.characters?.[index + 1]?.letter ??
				this.next?.characters?.[0]?.letter,
			prevLetter:
				this.characters?.[index - 1]?.letter ??
				this.previous?.characters?.[this.previous?.characters.length - 1]
					?.letter,
			startOfSyllable,
			startOfWord: startOfSyllable && this.first && !this.previous,
			endOfSyllable,
			endOfWord: endOfSyllable && this.last && !this.next,
		};
	}

	pronounce(): string | string[] {
		if (!this.characters) {
			return this.text;
		}

		return this.characters.map((character, index) =>
			character.pronounce(this.options(index)),
		);
	}

	translate(): string {
		if (!this.characters) {
			return this.text;
		}

		return this.characters
			.map((character, index) => character.translate(this.options(index)))
			.join('');
	}
}

export class Word {
	syllables: Syllable[] = [];
	text: string;

	constructor(text: string) {
		this.text = text;

		const syllables = text.split('');

		// Create syllables
		this.syllables = syllables.map((syllable, index) => {
			const inst = new Syllable(syllable);
			inst.first = index === 0;
			inst.last = index === syllables.length - 1;

			return inst;
		});

		// Link previous and next syllables
		this.syllables.forEach((syllable, index) => {
			syllable.previous = this.syllables[index - 1];
			syllable.next = this.syllables[index + 1];
		});
	}

	getVerbStem(): string {
		return this.text.replace(/다$/u, '');
	}

	isDictionaryVerb(): boolean {
		return this.syllables[this.syllables.length - 1].text === '다';
	}

	pronounce(): string {
		let result = '';
		const lastIndex = this.syllables.length - 1;

		this.syllables.forEach((syllable, index) => {
			const parts = syllable.pronounce();

			if (typeof parts === 'string') {
				result += parts;
				return;
			}

			const nextSyllable = this.syllables[index + 1];
			let movedOver = false;

			if (
				// Current syllable ends in a consonant
				syllable.characters?.[syllable.characters.length - 1].isConsonant() &&
				// Next syllable starts with a silent ㅇ character
				nextSyllable?.characters?.[0]?.isSilent() &&
				// And also isn't followed by a dipthong
				!nextSyllable?.characters?.[1]?.isDipthong()
			) {
				parts.splice(parts.length - 1, 0, '-');
				movedOver = true;
			}

			result += parts.join('');

			if (!movedOver && index !== lastIndex) {
				result += '-';
			}
		});

		result += '';

		return result;
	}

	translate(): string {
		return this.syllables.map((syllable) => syllable.translate()).join('');
	}

	toString(): string {
		return this.syllables.join('');
	}
}

export class Sentence {
	words: Word[] = [];
	text: string;

	constructor(text: string) {
		this.text = text;
		this.words = text.split(' ').map((word) => new Word(word));
	}

	pronounce(): string {
		return this.words.map((word) => word.pronounce()).join(' ');
	}

	translate(): string {
		return this.words.map((word) => word.translate()).join(' ');
	}

	toString(): string {
		return this.words.join(' ');
	}
}
