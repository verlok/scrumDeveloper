const roman = require('./romanNumbers');

test('Function exists', () => {
    expect(typeof roman).toBe("function");
});

describe('Roman numbers until 3', () => {
    test("1 -> I", () => {
        expect(roman(1)).toBe("I");
    });
    test("2 -> II", () => {
        expect(roman(1)).toBe("I");
    });
    test("3 -> III", () => {
        expect(roman(1)).toBe("I");
    });
});

/*
describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});


describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});


describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});

describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});

describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});

describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});

describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});

describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});

describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});

describe('', () => {
    test("", () => {

    });
    test("", () => {

    });
    test("", () => {

    });
});
*/