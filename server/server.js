require('./config/config');
const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const prot = process.env.PORT;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage("Admin", "Welcome to chat app"));

    socket.broadcast.emit('newMessage', generateMessage("Admin", "Welcome new user join chat app"));

    socket.on('createMessage', (message, callback) => {
        console.log('user send new message.', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from user');
    });
});

server.listen(prot, () => {
    console.log(`Server started on port ${prot}`);
});

module.exports = {app};

