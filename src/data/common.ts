export function generateMap<
	T extends { meaning: string | string[]; keys?: string[]; related?: string[] },
>(data: T[], map: Record<string, T>) {
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
