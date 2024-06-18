import type { Word as WordShape } from '../../data/common';
import { Word } from '@hangeul';

export interface FlashWordProps {
	word: WordShape['word'];
}

export function FlashWord({ word }: FlashWordProps) {
	if (Array.isArray(word)) {
		let total = word.length - 1;

		return (
			<>
				{word.map((inner, i) => (
					<>
						<FlashWord word={inner} />
						{i != total && <hr />}
					</>
				))}
			</>
		);
	}

	if (typeof word === 'object') {
		const inst = new Word(word.word);

		return (
			<div className="flash-word">
				<h1>{word.word}</h1>
				<div>
					{inst.translate()}
					{word.honorific && <>(honorific)</>}
					{word.humble && <>(humble)</>}
				</div>
			</div>
		);
	}

	const inst = new Word(word);

	return (
		<div className="flash-word">
			<h1>{word}</h1>
			<h4>{inst.translate()}</h4>
		</div>
	);
}
