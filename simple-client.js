var socket = io('http://localhost:8080');

socket.on('connect', function () {
    console.log('connected');
    socket.emit('hello');
});

socket.on('hello back', function (msg) {
    console.log('he said hello back!');
});