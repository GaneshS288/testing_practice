import analyzeArray from "../codeFiles/analyzeArray.js";

describe('analysing an array', () => {
    test('return correct average, min, max and length', () => {
        expect(analyzeArray([1,8,3,4,2,6,11]).average).toBe(5);
        expect(analyzeArray([1,8,3,4,2,6,11]).min).toBe(1);
        expect(analyzeArray([1,8,3,4,2,6,11]).max).toBe(11);
        expect(analyzeArray([1,8,3,4,2,6,11]).length).toBe(7);
    })
})