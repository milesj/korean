import type { Word as WordShape } from '../../data/common';
import { Word } from '@hangeul';
import { extractWord } from '../../scripts/helpers';
import type { Noun } from '../../data/nouns';

export interface FlashTipsProps {
	word: WordShape;
}

export function FlashTips({ word }: FlashTipsProps) {
	const tips = [];

	tips.push(
		<>
			Translated to:{' '}
			{(Array.isArray(word.word) ? word.word : [word.word])
				.map((val) => {
					return new Word(extractWord(val)).translate();
				})
				.join(' / ')}
		</>,
	);

	if (word.wordPronounced) {
		tips.push(<>Pronounced as: {word.wordPronounced}</>);
	}

	tips.push(<>Grammar type: {word.type}</>);

	if (word.type === 'nouns') {
		const noun = word as Noun;

		tips.push(
			<>
				Noun categories:{' '}
				{(Array.isArray(noun.category) ? noun.category : [noun.category]).join(' / ')}
			</>,
		);
	}

	return (
		<>
			{tips.map((tip) => (
				<div>{tip}</div>
			))}
		</>
	);
}
