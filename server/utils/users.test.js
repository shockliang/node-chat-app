const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'shock',
            room: 'show room'
        }, {
            id: '2',
            name: 'neil',
            room: 'bet room'
        }, {
            id: '2',
            name: 'will',
            room: 'show room'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The office fans'
        };
        
        var actualUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var removedUser = users.removeUser(userId);
        expect(removedUser.id).toEqual(userId);
        expect(users.users.length).toEqual(2);
    });

    it('should not remove user', () => {
        var removedUser = users.removeUser('100');
        expect(removedUser).toNotExist();
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        var userId = '1';
        var user = users.getUser(userId);
        expect(user.id).toEqual(users.users[0].id);
    });

    it('should not find user', () => {
        var user = users.getUser('100');
        expect(user).toNotExist();
    });

    it('should return names of show room', () => {
        var userList = users.getUserList('show room');

        expect(userList).toEqual(['shock', 'will']);
    });
});