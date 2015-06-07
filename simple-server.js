var io = require('socket.io')(8080);
io.on('connection', function (socket) {
    console.log('connection');
    socket.on('hello', function (msg) {
        console.log('somebody else is saying hello ... *eyeroll*');
        socket.emit('hello back', {
            some: 'payload'
        });
    });
});