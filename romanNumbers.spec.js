const roman = require('./romanNumbers');

test('Function exists', () => {
    expect(typeof roman).toBe("function");
});

describe('Roman numbers', () => {
    test("1 -> I", () => {
        expect(roman(1)).toBe("I");
    });
    test("2 -> II", () => {
        expect(roman(2)).toBe("II");
    });
    test("3 -> III", () => {
        expect(roman(3)).toBe("III");
    });
    test("4 -> IV", () => {
        expect(roman(4)).toBe("IV");
    });
});
