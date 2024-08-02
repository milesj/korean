import { describe, expect, it } from 'vitest';
import { Syllable } from '../src/syllable';

describe('Syllable', () => {
	it('combines vowel pairs into a dipthong', () => {
		const syl = new Syllable(['ㄱ', 'ㅗ', 'ㅐ', 'ㄴ']);

		expect(syl.letters.length).toBe(3);
		expect(syl.letters[1].value).toBe('ㅙ');
	});

	it('doesnt combine existing dipthong', () => {
		const syl = new Syllable(['ㄱ', 'ㅙ', 'ㄴ']);

		expect(syl.letters.length).toBe(3);
		expect(syl.letters[1].value).toBe('ㅙ');
	});

	it('doesnt combine single vowel into a dipthong', () => {
		const syl = new Syllable(['ㅁ', 'ㅏ', 'ㅅ']);

		expect(syl.letters.length).toBe(3);
		expect(syl.letters[1].value).toBe('ㅏ');
	});

	it('sets letter positions', () => {
		const syl = new Syllable(['ㄱ', 'ㅗ', 'ㅐ', 'ㄴ']);
		const ls = syl.letters;

		expect(ls[0].index).toBe(0);
		expect(ls[0].first).toBe(true);
		expect(ls[0].last).toBe(false);
		expect(ls[0].previous).toBeUndefined();
		expect(ls[0].next).toBe(ls[1]);

		expect(ls[1].index).toBe(1);
		expect(ls[1].first).toBe(false);
		expect(ls[1].last).toBe(false);
		expect(ls[1].previous).toBe(ls[0]);
		expect(ls[1].next).toBe(ls[2]);

		expect(ls[2].index).toBe(2);
		expect(ls[2].first).toBe(false);
		expect(ls[2].last).toBe(true);
		expect(ls[2].previous).toBe(ls[1]);
		expect(ls[2].next).toBeUndefined();
	});
});
