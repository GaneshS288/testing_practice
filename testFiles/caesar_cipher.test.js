import caesarCipher from "../codeFiles/caesar_cipher.js";

describe('caesar cipher', () => {
    test('cipher encryption normal', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    })

    test('case preservation', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    })

    test('punctuation preservation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })

    test('works with shift factor greater than 26', () => {
        expect(caesarCipher('Hello, World!', 29)).toBe('Khoor, Zruog!');
    })
})