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

const WORDS: Word[] = [
	...Object.values(ADJECTIVES_MAP),
	...Object.values(ADVERBS_MAP),
	...Object.values(CONJUNCTIONS_MAP),
	...Object.values(INTERJECTIONS_MAP),
	...Object.values(NOUNS_MAP),
	...Object.values(NUMBERS_MAP),
	...Object.values(PARTICLES_MAP),
	...Object.values(PRONOUNS_MAP),
	...Object.values(VERBS_MAP),
];

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
	// TODO
];

function FlashChapters({
	chapters,
	isChecked,
	onChange,
}: {
	chapters: ClassChapter[];
	isChecked: (chapter: ClassChapter) => boolean;
	onChange: (chapter: ClassChapter) => void;
}) {
	return (
		<ul>
			{chapters.map((chapter) => (
				<li key={chapter}>
					<label htmlFor={chapter}>
						<input
							id={chapter}
							type="checkbox"
							checked={isChecked(chapter)}
							onChange={() => onChange(chapter)}
						/>{' '}
						{chapter.replace(/^\d+-/, '')}
					</label>
				</li>
			))}
		</ul>
	);
}

export function Flash() {
	const [chapters, setChapters] = useState<Set<ClassChapter>>(new Set());

	function isChecked(value: ClassChapter) {
		return chapters.has(value);
	}

	function handleChange(value: ClassChapter) {
		setChapters((prev) => {
			if (prev.has(value)) {
				prev.delete(value);
			} else {
				prev.add(value);
			}
			return new Set(prev);
		});
	}

	return (
		<div>
			<div>
				<h3>Chapters to study</h3>

				<div className="flash-cols">
					<div>
						<h5>101</h5>
						<FlashChapters chapters={TERM_101} isChecked={isChecked} onChange={handleChange} />
					</div>

					<div>
						<h5>102</h5>
						<FlashChapters chapters={TERM_102} isChecked={isChecked} onChange={handleChange} />
					</div>

					<div>
						<h5>103</h5>
						<FlashChapters chapters={TERM_103} isChecked={isChecked} onChange={handleChange} />
					</div>
				</div>
			</div>
		</div>
	);
}
