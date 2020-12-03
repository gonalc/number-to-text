import { convertNumberToEnglishText } from '.';

describe('Number to English converter test suite', () => {
    it('should print zero for 0', () => {
        expect(convertNumberToEnglishText(0)).toBe('zero');
    });

    it('should print zero for 0', () => {
        expect(convertNumberToEnglishText(-0)).toBe('zero');
    });

    it('should print negative one for -1', () => {
        expect(convertNumberToEnglishText(-1)).toBe('negative one');
    });

    it('should print nineteen for 19', () => {
        expect(convertNumberToEnglishText(19)).toBe('nineteen');
    });

    it('should print twenty for 20', () => {
        expect(convertNumberToEnglishText(20)).toBe('twenty');
    });

    it('should print correctly for 41', () => {
        expect(convertNumberToEnglishText(41)).toBe('forty one');
    });

    it('should print correctly for 100', () => {
        expect(convertNumberToEnglishText(100)).toBe('one hundred');
    });

    it('should print correctly for 101', () => {
        expect(convertNumberToEnglishText(101)).toBe('one hundred one');
    });

    it('should print correctly for 739', () => {
        expect(convertNumberToEnglishText(739)).toBe('seven hundred thirty nine');
    });

    it('should print correctly for 1234', () => {
        expect(convertNumberToEnglishText(1234)).toBe('one thousand two hundred thirty four');
    });

    it('should print correctly for 10000', () => {
        expect(convertNumberToEnglishText(10000)).toBe('ten thousand');
    });

    it('should print correctly for 60019', () => {
        expect(convertNumberToEnglishText(60019)).toBe('sixty thousand nineteen');
    });

    it('should print correctly for 67567', () => {
        expect(convertNumberToEnglishText(67567)).toBe('sixty seven thousand five hundred sixty seven');
    });

    it('should print correctly for 99999', () => {
        expect(convertNumberToEnglishText(99999)).toBe('ninety nine thousand nine hundred ninety nine');
    });
});
