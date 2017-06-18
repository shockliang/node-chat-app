var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Admin';
        var text = 'test';

        var actualMessage = generateMessage(from,text);

        expect(actualMessage).toInclude({from, text});
        expect(actualMessage.createAt).toBeA('number');
    });
});