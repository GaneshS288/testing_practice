import reverseStr from "../codeFiles/reverseString.js";


describe("Reversing a string", () => {
    test("reverse a string", () => {
        expect(reverseStr("Ganesh")).toBe("hsenaG");
    })

    test("reverse a string with only one letter", () => {
        expect(reverseStr("G")).toBe("G");
    })

    test("reverse a string with spaces", () => {
        expect(reverseStr("Ganesh Swami is the best Guy")).toBe("yuG tseb eht si imawS hsenaG");
    })
})