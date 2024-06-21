import { ADJECTIVES_MAP } from '../../data/adjectives';
import { ADVERBS_MAP } from '../../data/adverbs';
import { CONJUNCTIONS_MAP } from '../../data/conjunctions';
import { INTERJECTIONS_MAP } from '../../data/interjections';
import { NOUNS_MAP } from '../../data/nouns';
import { NUMBERS_MAP } from '../../data/numbers';
import { PARTICLES_MAP } from '../../data/particles';
import { PRONOUNS_MAP } from '../../data/pronouns';
import { VERBS_MAP } from '../../data/verbs';
import type { ClassChapter, Word, GrammarType } from '../../data/common';
import { useCallback, useState, type ChangeEvent } from 'react';
import shuffle from 'lodash/shuffle';
import { FlashWord } from './FlashWord';
import { FlashTips } from './FlashTips';

type Step = 'config' | 'question' | 'answer' | 'results';

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
	'103-12.2',
];

function filterWords(grammar: GrammarType, words: Word[], chapters: Set<ClassChapter>): Word[] {
	return words.filter((word) => {
		// Force the type for future use
		word.type = grammar;

		return Array.isArray(word.class)
			? word.class.some((chapter) => chapters.has(chapter))
			: chapters.has(word.class);
	});
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
	const [unknownCount, setUnknownCount] = useState(0);
	const [showTips, setShowTips] = useState(false);

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

	function handleK101ChaptersChange(event: ChangeEvent<HTMLInputElement>) {
		setChapters((prev) => {
			if (event.target.checked) {
				return new Set([...prev, ...TERM_101]);
			} else {
				return new Set([...prev].filter((chapter) => !chapter.startsWith('101')));
			}
		});
	}

	function handleK102ChaptersChange(event: ChangeEvent<HTMLInputElement>) {
		setChapters((prev) => {
			if (event.target.checked) {
				return new Set([...prev, ...TERM_102]);
			} else {
				return new Set([...prev].filter((chapter) => !chapter.startsWith('102')));
			}
		});
	}

	function handleK103ChaptersChange(event: ChangeEvent<HTMLInputElement>) {
		setChapters((prev) => {
			if (event.target.checked) {
				return new Set([...prev, ...TERM_103]);
			} else {
				return new Set([...prev].filter((chapter) => !chapter.startsWith('103')));
			}
		});
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
			words.push(...filterWords('adjectives', Object.values(ADJECTIVES_MAP), chapters));
		}

		if (grammars.has('adverbs')) {
			words.push(...filterWords('adverbs', Object.values(ADVERBS_MAP), chapters));
		}

		if (grammars.has('adjectives')) {
			words.push(...filterWords('adjectives', Object.values(ADJECTIVES_MAP), chapters));
		}

		if (grammars.has('conjunctions')) {
			words.push(...filterWords('conjunctions', Object.values(CONJUNCTIONS_MAP), chapters));
		}

		if (grammars.has('interjections')) {
			words.push(...filterWords('interjections', Object.values(INTERJECTIONS_MAP), chapters));
		}

		if (grammars.has('nouns')) {
			words.push(...filterWords('nouns', Object.values(NOUNS_MAP), chapters));
		}

		if (grammars.has('numbers')) {
			words.push(...filterWords('numbers', Object.values(NUMBERS_MAP), chapters));
		}

		if (grammars.has('particles')) {
			words.push(...filterWords('particles', Object.values(PARTICLES_MAP), chapters));
		}

		if (grammars.has('pronouns')) {
			words.push(...filterWords('pronouns', Object.values(PRONOUNS_MAP), chapters));
		}

		if (grammars.has('verbs')) {
			words.push(...filterWords('verbs', Object.values(VERBS_MAP), chapters));
		}

		if (grammars.has('suffixes')) {
			// TODO
			// words.push(...filterWords('suffixes', Object.values(VERBS_MAP), chapters));
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

	function didntGuess() {
		setUnknownCount((count) => count + 1);
		nextWord();
	}

	const nextWord = useCallback(() => {
		let nextIndex = index + 1;

		if (nextIndex >= words.length) {
			alert('Finished!');
			return;
		}

		setShowTips(false);
		setIndex(nextIndex);
		setWord(words[nextIndex]);
		setStep('question');
	}, [index, words]);

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
								<h5>
									<label htmlFor="all-k101">
										<input
											id="all-k101"
											type="checkbox"
											checked={
												Array.from(chapters).filter((chapter) => chapter.startsWith('101'))
													.length === TERM_101.length
											}
											onChange={handleK101ChaptersChange}
										/>{' '}
										K101
									</label>
								</h5>

								<FlashCheckboxes
									values={TERM_101}
									isChecked={isChapterChecked}
									onChange={handleChapterChange}
								/>
							</div>

							<div>
								<h5>
									<label htmlFor="all-k102">
										<input
											id="all-k102"
											type="checkbox"
											checked={
												Array.from(chapters).filter((chapter) => chapter.startsWith('102'))
													.length === TERM_102.length
											}
											onChange={handleK102ChaptersChange}
										/>{' '}
										K102
									</label>
								</h5>

								<FlashCheckboxes
									values={TERM_102}
									isChecked={isChapterChecked}
									onChange={handleChapterChange}
								/>
							</div>

							<div>
								<h5>
									<label htmlFor="all-k103">
										<input
											id="all-k103"
											type="checkbox"
											checked={
												Array.from(chapters).filter((chapter) => chapter.startsWith('103'))
													.length === TERM_103.length
											}
											onChange={handleK103ChaptersChange}
										/>{' '}
										K103
									</label>
								</h5>

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
							<FlashCheckboxes
								values={[
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
								]}
								isChecked={isGrammarChecked}
								onChange={handleGrammarChange}
							/>
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

					{showTips && (
						<div className="flash-actions">
							<header className="flash-card-header">Tips</header>
							<FlashTips word={word!} />
						</div>
					)}

					<div className="flash-actions">
						<button onClick={guessAnswer}>Guess meaning</button>

						<button
							onClick={() => setShowTips(true)}
							style={{ marginLeft: '1rem' }}
							disabled={showTips}
						>
							Show tips
						</button>
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
							<button onClick={guessedCorrect}>Correct</button>

							<button onClick={guessedIncorrect} style={{ marginLeft: '1rem' }}>
								Incorrect
							</button>

							<button onClick={didntGuess} style={{ marginLeft: '1rem' }}>
								Didn't guess
							</button>
						</div>
					</div>

					<div className="flash-actions">
						<header className="flash-card-header">Stats</header>
						<div>
							Card {index + 1} of {words.length}
						</div>
						<div className="flash-cols">
							<div>Correct guesses: {correctCount}</div>
							<div>Incorrect guesses: {wrongCount}</div>
							<div>Didn't guess: {unknownCount}</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
