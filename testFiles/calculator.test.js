import calculator from "../codeFiles/calculator.js";

describe('calculator tests', () => {
    test('addition', () => {
        expect(calculator.add(10, 22)).toEqual(32);
    })

    test('subtraction', () => {
        expect(calculator.subtract(33, 15)).toEqual(18);
    })

    test('multiplication', () => {
        expect(calculator.multiply(33, 15)).toEqual(495);
    })

    test('division', () => {
        expect(calculator.divide(120, 15)).toEqual(8);
    })
})