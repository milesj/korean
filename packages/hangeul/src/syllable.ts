import { Letter, createDipthong, isVowel } from './letter';

export class Syllable {
	letters: Letter[];

	// Positions in the word
	index = 0;
	first = false;
	last = false;

	// Links to other syllables
	previous?: Syllable;
	next?: Syllable;

	constructor(letters: string[]) {
		// If we find 2 vowels, combine them into a dipthong
		if (letters.length >= 3 && isVowel(letters[1]) && isVowel(letters[2])) {
			letters.splice(1, 2, createDipthong(letters[1], letters[2]));
		}

		this.letters = letters.map((value, index) => {
			const letter = new Letter(value);
			letter.index = index;
			letter.first = index === 0;
			letter.last = index === letters.length - 1;

			return letter;
		});

		// Link previous and next
		this.letters.forEach((letter, index) => {
			letter.previous = this.letters[index - 1];
			letter.next = this.letters[index + 1];
		});
	}
}
