import type { Word as WordShape } from '../../data/common';

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
						<FlashWord key={String(inner)} word={inner} />
						{i != total && <hr />}
					</>
				))}
			</>
		);
	}

	if (typeof word === 'object') {
		return (
			<div className="flash-word">
				<h1>{word.word}</h1>
				<div>
					{word.honorific && <>(honorific)</>}
					{word.humble && <>(humble)</>}
				</div>
			</div>
		);
	}

	return (
		<div className="flash-word">
			<h1>{word}</h1>
		</div>
	);
}
