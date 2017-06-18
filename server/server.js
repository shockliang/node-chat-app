require('./config/config');
const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const prot = process.env.PORT;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (message) => {
        console.log('user send new message.', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from user');
    })
});

server.listen(prot, () => {
    console.log(`Server started on port ${prot}`);
});

module.exports = {app};

