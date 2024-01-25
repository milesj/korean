class Letter {}

class Syllable {
	letters: Letter[] = [];
}

class Word {
	syllables: Syllable[] = [];
}

class Sentence {
	words: Word[] = [];
}

class Paragraph {
	sentences: Sentence[] = [];
}
