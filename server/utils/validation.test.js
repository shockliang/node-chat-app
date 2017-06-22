const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var input = 123;
        var actual = isRealString(input);

        expect(actual).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var input = '          ';
        var actual = isRealString(input);

        expect(actual).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var input = '  test  ';
        var actual = isRealString(input);

        expect(actual).toBe(true);
    });
});