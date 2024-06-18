import { ADJECTIVES_MAP } from '../../data/adjectives';
import { ADVERBS_MAP } from '../../data/adverbs';
import { CONJUNCTIONS_MAP } from '../../data/conjunctions';
import { INTERJECTIONS_MAP } from '../../data/interjections';
import { NOUNS_MAP } from '../../data/nouns';
import { NUMBERS_MAP } from '../../data/numbers';
import { PARTICLES_MAP } from '../../data/particles';
import { PRONOUNS_MAP } from '../../data/pronouns';
import { VERBS_MAP } from '../../data/verbs';
import type { ClassChapter, Word } from '../../data/common';
import { useState, type ChangeEvent } from 'react';
import shuffle from 'lodash/shuffle';
import { FlashWord } from './FlashWord';

type GrammarType =
	| 'adjectives'
	| 'adverbs'
	| 'conjunctions'
	| 'interjections'
	| 'nouns'
	| 'numbers'
	| 'particles'
	| 'pronouns'
	| 'suffixes'
	| 'verbs';

type Step = 'config' | 'question' | 'answer';

const TERM_101: ClassChapter[] = [
	'101-1.1',
	'101-1.2',
	'101-2.1',
	'101-2.2',
	'101-3.1',
	'101-3.2',
	'101-4.1',
	'101-4.2',
];

const TERM_102: ClassChapter[] = ['102-5.1', '102-5.2', '102-6.1', '102-6.2', '102-7.1', '102-7.2'];

const TERM_103: ClassChapter[] = [
	'103-8.1',
	'103-8.2',
	'103-9.1',
	'103-9.2',
	'103-10.1',
	'103-10.2',
	'103-11.1',
	'103-11.2',
	'103-12.1',
	// TODO 12.2
];

function filterWords(words: Word[], chapters: Set<ClassChapter>): Word[] {
	return words.filter((word) =>
		Array.isArray(word.class)
			? word.class.some((chapter) => chapters.has(chapter))
			: chapters.has(word.class),
	);
}

function FlashCheckboxes<T extends string>({
	values,
	isChecked,
	onChange,
}: {
	values: T[];
	isChecked: (chapter: T) => boolean;
	onChange: (chapter: T) => void;
}) {
	return (
		<ul>
			{values.map((value) => (
				<li key={value}>
					<label htmlFor={value}>
						<input
							id={value}
							type="checkbox"
							checked={isChecked(value)}
							onChange={() => onChange(value)}
						/>{' '}
						{value.replace(/^\d+-/, '')}
					</label>
				</li>
			))}
		</ul>
	);
}

export function Flash() {
	const [chapters, setChapters] = useState<Set<ClassChapter>>(new Set());
	const [grammars, setGrammars] = useState<Set<GrammarType>>(new Set());
	const [step, setStep] = useState<Step>('config');
	const [words, setWords] = useState<Word[]>([]);
	const [word, setWord] = useState<Word>();
	const [index, setIndex] = useState(0);
	const [correctCount, setCorrentCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);

	function isChapterChecked(value: ClassChapter) {
		return chapters.has(value);
	}

	function handleAllChaptersChange(event: ChangeEvent<HTMLInputElement>) {
		if (event.target.checked) {
			setChapters(new Set([...TERM_101, ...TERM_102, ...TERM_103]));
		} else {
			setChapters(new Set());
		}
	}

	function handleChapterChange(value: ClassChapter) {
		setChapters((prev) => {
			if (prev.has(value)) {
				prev.delete(value);
			} else {
				prev.add(value);
			}
			return new Set(prev);
		});
	}

	function isGrammarChecked(value: GrammarType) {
		return grammars.has(value);
	}

	function handleAllGrammarsChange(event: ChangeEvent<HTMLInputElement>) {
		if (event.target.checked) {
			setGrammars(
				new Set([
					'adjectives',
					'adverbs',
					'conjunctions',
					'interjections',
					'nouns',
					'numbers',
					'particles',
					'pronouns',
					'suffixes',
					'verbs',
				]),
			);
		} else {
			setGrammars(new Set());
		}
	}

	function handleGrammarChange(value: GrammarType) {
		setGrammars((prev) => {
			if (prev.has(value)) {
				prev.delete(value);
			} else {
				prev.add(value);
			}
			return new Set(prev);
		});
	}

	function beginStudying() {
		const words: Word[] = [];

		if (grammars.has('adjectives')) {
			words.push(...filterWords(Object.values(ADJECTIVES_MAP), chapters));
		}

		if (grammars.has('adverbs')) {
			words.push(...filterWords(Object.values(ADVERBS_MAP), chapters));
		}

		if (grammars.has('adjectives')) {
			words.push(...filterWords(Object.values(ADJECTIVES_MAP), chapters));
		}

		if (grammars.has('conjunctions')) {
			words.push(...filterWords(Object.values(CONJUNCTIONS_MAP), chapters));
		}

		if (grammars.has('interjections')) {
			words.push(...filterWords(Object.values(INTERJECTIONS_MAP), chapters));
		}

		if (grammars.has('nouns')) {
			words.push(...filterWords(Object.values(NOUNS_MAP), chapters));
		}

		if (grammars.has('numbers')) {
			words.push(...filterWords(Object.values(NUMBERS_MAP), chapters));
		}

		if (grammars.has('particles')) {
			words.push(...filterWords(Object.values(PARTICLES_MAP), chapters));
		}

		if (grammars.has('pronouns')) {
			words.push(...filterWords(Object.values(PRONOUNS_MAP), chapters));
		}

		if (grammars.has('verbs')) {
			words.push(...filterWords(Object.values(VERBS_MAP), chapters));
		}

		if (grammars.has('suffixes')) {
			// TODO
			// words.push(...filterWords(Object.values(VERBS_MAP), chapters));
		}

		let shuffledWords = shuffle(words);

		setIndex(0);
		setWord(shuffledWords[0]);
		setWords(shuffledWords);
		setStep('question');
	}

	function guessAnswer() {
		setStep('answer');
	}

	function guessedCorrect() {
		setCorrentCount((count) => count + 1);
		nextWord();
	}

	function guessedIncorrect() {
		setWrongCount((count) => count + 1);
		nextWord();
	}

	function nextWord() {
		let nextIndex = index + 1;

		if (nextIndex > words.length) {
			alert('Finished!');
			return;
		}

		setIndex(nextIndex);
		setWord(words[nextIndex]);
		setStep('question');
	}

	return (
		<div>
			{step === 'config' && (
				<>
					<div className="flash-section">
						<div className="flash-all">
							<label htmlFor="all-chapters">
								<input
									id="all-chapters"
									type="checkbox"
									checked={chapters.size === TERM_101.length + TERM_102.length + TERM_103.length}
									onChange={handleAllChaptersChange}
								/>{' '}
								Select all
							</label>
						</div>

						<h3>Class chapters</h3>

						<div className="flash-cols">
							<div>
								<h5>101</h5>
								<FlashCheckboxes
									values={TERM_101}
									isChecked={isChapterChecked}
									onChange={handleChapterChange}
								/>
							</div>

							<div>
								<h5>102</h5>
								<FlashCheckboxes
									values={TERM_102}
									isChecked={isChapterChecked}
									onChange={handleChapterChange}
								/>
							</div>

							<div>
								<h5>103</h5>
								<FlashCheckboxes
									values={TERM_103}
									isChecked={isChapterChecked}
									onChange={handleChapterChange}
								/>
							</div>
						</div>
					</div>

					<div className="flash-section">
						<div className="flash-all">
							<label htmlFor="all-grammars">
								<input
									id="all-grammars"
									type="checkbox"
									checked={grammars.size === 10}
									onChange={handleAllGrammarsChange}
								/>{' '}
								Select all
							</label>
						</div>

						<h3>Grammar types</h3>

						<div className="flash-cols">
							<div>
								<FlashCheckboxes
									values={['adjectives', 'adverbs', 'verbs']}
									isChecked={isGrammarChecked}
									onChange={handleGrammarChange}
								/>
							</div>

							<div>
								<FlashCheckboxes
									values={['nouns', 'pronouns', 'numbers']}
									isChecked={isGrammarChecked}
									onChange={handleGrammarChange}
								/>
							</div>

							<div>
								<FlashCheckboxes
									values={['conjunctions', 'interjections', 'particles', 'suffixes']}
									isChecked={isGrammarChecked}
									onChange={handleGrammarChange}
								/>
							</div>
						</div>
					</div>

					<div className="flash-actions">
						<button disabled={grammars.size === 0 || chapters.size === 0} onClick={beginStudying}>
							Begin studying
						</button>
					</div>
				</>
			)}

			{step === 'question' && (
				<>
					<div className="flash-card">
						<FlashWord word={word!.word} />
					</div>

					<div className="flash-actions">
						<button onClick={guessAnswer}>View meaning</button>
					</div>
				</>
			)}

			{step === 'answer' && (
				<>
					<div className="flash-card">
						<header className="flash-card-header">Meaning</header>
						<h1>{Array.isArray(word?.meaning) ? word.meaning.join(' / ') : word?.meaning}</h1>
					</div>

					<div className="flash-actions">
						<header className="flash-card-header">Guessed</header>
						<div style={{ margin: 0 }}>
							<button onClick={guessedCorrect}>Correct</button>{' '}
							<button onClick={guessedIncorrect}>Incorrect</button>
						</div>
					</div>

					<div className="flash-actions">
						<header className="flash-card-header">Stats</header>
						<div className="flash-cols">
							<div>
								Card {index + 1} of {words.length}
							</div>
							<div>Correct guesses: {correctCount}</div>
							<div>Incorrect guesses: {wrongCount}</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
