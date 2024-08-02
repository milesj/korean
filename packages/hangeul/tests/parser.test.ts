import { describe, expect, it } from 'vitest';
import { parse } from '../src/parser';

describe('parse()', () => {
	// it('1 char', () => {
	// 	expect(parse('ㅏ')).toEqual([['ㅏ']]);
	// });

	describe('words', () => {
		it('no', () => {
			expect(parse('아니요')).toEqual([
				['ㅇ', 'ㅏ'],
				['ㄴ', 'ㅣ'],
				['ㅇ', 'ㅛ'],
			]);
		});

		it('hello', () => {
			expect(parse('안녕하세요')).toEqual([
				['ㅇ', 'ㅏ', 'ㄴ'],
				['ㄴ', 'ㅕ', 'ㅇ'],
				['ㅎ', 'ㅏ'],
				['ㅅ', 'ㅔ'],
				['ㅇ', 'ㅛ'],
			]);
		});

		it('many, much', () => {
			expect(parse('많이')).toEqual([
				['ㅁ', 'ㅏ', 'ㄴ', 'ㅎ'],
				['ㅇ', 'ㅣ'],
			]);
		});

		it('delicious', () => {
			expect(parse('맛있다')).toEqual([
				['ㅁ', 'ㅏ', 'ㅅ'],
				['ㅇ', 'ㅣ', 'ㅆ'],
				['ㄷ', 'ㅏ'],
			]);
		});

		it('expensive', () => {
			expect(parse('비싸다')).toEqual([
				['ㅂ', 'ㅣ'],
				['ㅆ', 'ㅏ'],
				['ㄷ', 'ㅏ'],
			]);
		});

		it('interesting', () => {
			expect(parse('재미있다')).toEqual([
				['ㅈ', 'ㅐ'],
				['ㅁ', 'ㅣ'],
				['ㅇ', 'ㅣ', 'ㅆ'],
				['ㄷ', 'ㅏ'],
			]);
		});

		it('okay', () => {
			expect(parse('괜찮다')).toEqual([
				['ㄱ', 'ㅗ', 'ㅐ', 'ㄴ'],
				['ㅊ', 'ㅏ', 'ㄴ', 'ㅎ'],
				['ㄷ', 'ㅏ'],
			]);
		});
	});
});
