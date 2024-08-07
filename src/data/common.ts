export type ClassChapter =
	| '101-1.1'
	| '101-1.2'
	| '101-2.1'
	| '101-2.2'
	| '101-3.1'
	| '101-3.2'
	| '101-4.1'
	| '101-4.2'
	| '102-5.1'
	| '102-5.2'
	| '102-6.1'
	| '102-6.2'
	| '102-7.1'
	| '102-7.2'
	| '103-8.1'
	| '103-8.2'
	| '103-9.1'
	| '103-9.2'
	| '103-10.1'
	| '103-10.2'
	| '103-11.1'
	| '103-11.2'
	| '103-12.1'
	| '103-12.2'
	| 'other';

export type GrammarType =
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

export interface NativeWord {
	honorific?: boolean;
	humble?: boolean;
	note?: string;
	word: string;
}

export interface Word {
	class: ClassChapter | ClassChapter[];
	description?: string;
	guidelines?: string[];
	meaning: string | string[];
	related?: string[];
	word: string | NativeWord | (string | NativeWord)[];
	wordPronounced?: string;
	type?: GrammarType;

	// internal
	duplicate?: boolean;
	keys?: string[];
}

export function generateMap<T extends Word>(data: T[], map: Record<string, T>) {
	data.forEach((item) => {
		const meanings = Array.isArray(item.meaning)
			? item.meaning
			: [item.meaning];

		meanings.forEach((meaning) => {
			const key = meaning.toLowerCase().replace(' ', '-');

			// Add the key to the item
			item.keys ||= [];
			item.keys.push(key);

			// If the value already exists, then we have a word
			// with multiple meanings. We need to keep a reference to them all
			if (map[key]) {
				map[key].related ||= [];
				map[key].related?.push(...item.keys);

				item.related ||= [];
				item.related.push(...map[key].keys!);
			} else {
				map[key] = {
					...item,
					meaning,
				};
			}
		});
	});
}

export function expandMap<T extends Word>(
	data: Record<string, T | string>,
	map: Record<string, T>,
) {
	Object.entries(data).forEach(([key, item]) => {
		if (typeof item === 'string') {
			if (!data[item]) {
				throw new Error(`Base word "${item}" does not exist for key "${key}"`);
			} else if (typeof data[item] === 'string') {
				throw new Error(
					`Key "${key}" cannot reference "${item}" because it is a string`,
				);
			}

			map[key] = {
				...(data[item] as T),
				duplicate: true,
			};

			return;
		}

		map[key] = item;
	});

	// Verify related
	Object.entries(map).forEach(([key, item]) => {
		if (item.related) {
			item.related.forEach((rel) => {
				if (!map[rel]) {
					throw new Error(
						`Related word "${rel}" does not exist for key "${key}"`,
					);
				}
			});
		}
	});
}
