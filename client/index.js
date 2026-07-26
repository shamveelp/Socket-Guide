const socket = io('http://localhost:3000');

socket.on('connect', (response) => {
    console.log('Response is ', response)
});


socket.on('message', (data) => {
    console.log(data)

    socket.emit('message', "Hello from client")
})


