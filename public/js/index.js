var socket = io();

socket.on('connect', function() {
    console.log('Connect to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('new message:', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Shock',
//     text: 'Hi'
// }, function(data) {
//     console.log('Got it', data);
// })

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'Shock',
        text: jQuery('[name=message]').val()
    }, function() {

    });
});

