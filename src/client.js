const net = require('net');
const stdin = process.stdin;

const socket = net.connect(3000,'localhost',()=>{
    console.log('connected!');
});
socket.setEncoding('utf8');

socket.on('data',(data)=>{
    process.stdout.write(data);
});

stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', data =>{
    socket.write(data+'\n\r');
});