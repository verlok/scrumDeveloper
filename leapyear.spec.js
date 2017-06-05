const leapyear = require('./leapyear');

describe('Before Julian calendar (-infinite:3)', () => {
    test('-2000 is not leap', () => {
        expect(leapyear(-2000)).toBe(false);
    });

    test('-4 is not leap', () => {
        expect(leapyear(-4)).toBe(false);
    });

    test('0 is not leap', () => {
         expect(leapyear(0)).toBe(false);
    });

    test('3 is not leap', () => {
        expect(leapyear(3)).toBe(false);
    });
});

describe('Julian calendar (4:1582)', () => {
    test('4 is leap', () => {
        expect(leapyear(4)).toBe(true);
    });
    test('5 is not leap', () => {
        expect(leapyear(5)).toBe(false);
    });
    test('100 is leap', () => {
        expect(leapyear(100)).toBe(true);
    });
});


describe('Gregorian calendar (1582:+infinite)', () => {
    test('1900 is not leap', () => {
        expect(leapyear(1900)).toBe(false);
    });
    test('2000 is leap', () => {
        expect(leapyear(2000)).toBe(true);
    });
    test('2100 is not leap', () => {
        expect(leapyear(2100)).toBe(false);
    });
});
