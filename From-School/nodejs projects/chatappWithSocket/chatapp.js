const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chatapp.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle chat messages
    socket.on('chat message', (msg) => {
	io.emit('chat message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
	console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
