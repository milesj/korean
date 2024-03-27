export type ClassChapter = 101.1 | 101.2 | 101.3;

export interface Word {
	class: ClassChapter;
	description?: string;
	guidelines?: string[];
	meaning: string | string[];
	related?: string[];
	word: string | string[];
	wordPronounced?: string;

	// internal
	duplicate?: boolean;
	keys?: string[];
}

export function generateMap<T extends Word>(data: T[], map: Record<string, T>) {
	data.forEach((item) => {
		const meanings = Array.isArray(item.meaning) ? item.meaning : [item.meaning];

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
				throw new Error(`Key "${key}" cannot reference "${item}" because it is a string`);
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
					throw new Error(`Related word "${rel}" does not exist for key "${key}"`);
				}
			});
		}
	});
}
