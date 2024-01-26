import { type Letter, LETTERS, isVowel, createDipthong, type TranslateOptions } from './letters';
import { type Punctuation, PUNCTUATION } from './punctuation';

export class Character {
	letter?: Letter;
	punctuation?: Punctuation;
	text: string;

	constructor(text: string) {
		this.letter = LETTERS[text];
		this.punctuation = PUNCTUATION[text];
		this.text = text;
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

		return pronounceAs(options);
	}

	translate(options: TranslateOptions): string {
		if (!this.letter || this.punctuation) {
			return this.text;
		}

		const { translateAs } = this.letter;

		if (typeof translateAs === 'string') {
			return translateAs;
		}

		return translateAs(options);
	}

	toString(): string {
		return this.text;
	}
}

export class Syllable {
	rawParts: string[];
	parts: string[];
	characters: Character[] = [];

	// Positions in the word
	first: boolean = false;
	last: boolean = false;

	// Links to other syllables
	previous?: Syllable;
	next?: Syllable;

	constructor(text: string) {
		const parts = Array.from(text.normalize('NFD')).map((part) => part.trim());

		// 1 is always a vowel, so if 2 is also a vowel,
		// then we need to create a dipthong
		if (isVowel(parts[2])) {
			this.parts = [parts[0], createDipthong(parts[1], parts[2]), ...parts.slice(3)];
		} else {
			this.parts = parts;
		}

		this.rawParts = parts;
		this.characters = this.parts.map((part) => new Character(part));
	}

	options(index: number): TranslateOptions {
		const startOfSyllable = index === 0;
		const endOfSyllable = index === this.characters.length - 1;

		return {
			// next: this.next?.characters[0]?.letter,
			// prev: this.previous?.characters[this.previous?.characters.length - 1]?.letter,
			startOfSyllable,
			startOfWord: startOfSyllable && this.first && !this.previous,
			endOfSyllable,
			endOfWord: endOfSyllable && this.last && !this.next,
		};
	}

	pronounce(): string {
		return this.characters
			.map((character, index) => character.pronounce(this.options(index)))
			.join('');
	}

	translate(): string {
		return this.characters
			.map((character, index) => character.translate(this.options(index)))
			.join('');
	}
}

export class Word {
	syllables: Syllable[] = [];

	constructor(text: string) {
		const syllables = text.split('');

		syllables.forEach((syllable, index) => {
			const inst = new Syllable(syllable);

			inst.first = index === 0;
			inst.last = index === syllables.length - 1;

			if (index > 0) {
				inst.previous = this.syllables[index - 1];
			}

			if (index < syllables.length) {
				inst.next = this.syllables[index + 1];
			}

			this.syllables.push(inst);
		});
	}

	pronounce(): string {
		return this.syllables.map((syllable) => syllable.pronounce()).join('-');
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

	constructor(text: string) {
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
