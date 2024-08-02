import { describe, expect, it } from 'vitest';
import { Letter } from '../src/letter';

describe('Letter', () => {
	it('detects single consonant', () => {
		expect(new Letter('ㅂ').kind).toBe('consonant');
	});

	it('detects double consonant', () => {
		expect(new Letter('ㅃ').kind).toBe('double-consonant');
	});

	it('detects vowel', () => {
		expect(new Letter('ㅏ').kind).toBe('vowel');
	});

	it('detects dipthong', () => {
		expect(new Letter('ㅘ').kind).toBe('dipthong');
	});
});
