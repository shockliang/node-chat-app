var socket = io();

socket.on('connect', function() {
    console.log('Connect to server');

    socket.emit('createMessage', {
        from: "shock.client@123.com",
        text: "Hey server!"
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('new message:', message);
});

