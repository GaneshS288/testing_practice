import capitalize from "../codeFiles/capitalize.js"

describe("capitalize", () => {
    test("capitalize a sting", () => expect(capitalize("ganesh")).toBe("Ganesh"));
    test("capitalize a string with one one letter", () => {
        expect(capitalize("g")).toBe("G");
    })
    test("capitalizing an already capitalized string", () => {
        expect(capitalize("Ganesh")).toBe("Ganesh")
    })
}
)