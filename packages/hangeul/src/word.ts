import { parse } from './parser';
import { Syllable } from './syllable';

export class Word {
	syllables: Syllable[];

	constructor(syllables: string[][]) {
		this.syllables = syllables.map((value, index) => {
			const syllable = new Syllable(value);
			syllable.index = index;
			syllable.first = index === 0;
			syllable.last = index === syllables.length - 1;

			return syllable;
		});

		// Link previous and next
		this.syllables.forEach((syllable, index) => {
			syllable.previous = this.syllables[index - 1];
			syllable.next = this.syllables[index + 1];
		});
	}

	static parse(value: string): Word {
		const syllables = [];

		for (const parts of parse(value)) {
			if (typeof parts === 'string') {
				throw new Error(
					`Unable to parse word, received a non-syllable character "${parts}".`,
				);
			}

			syllables.push(parts);
		}

		return new Word(syllables);
	}
}
