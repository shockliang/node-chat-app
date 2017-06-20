var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Admin';
        var text = 'test';

        var actualMessage = generateMessage(from,text);

        expect(actualMessage).toInclude({from, text});
        expect(actualMessage.createAt).toBeA('number');
    });

});

describe('generateLocationMessage', () => {
    it('should generate corrent location message object', () => {
        var from = 'Admin';
        var latitude = 10.000;
        var longitude = 10.000;
        var url =`https://www.google.com/maps?q=${latitude},${longitude}`;
        var actualMessage = generateLocationMessage(from, latitude, longitude);

        expect(actualMessage).toInclude({from, url});
        expect(actualMessage.url).toBe(url);
    });
});