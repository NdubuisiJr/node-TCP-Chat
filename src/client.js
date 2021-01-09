/**
 *  The TCP Chat Client Implementation
 * 
 *     Dependency
 *  The node net api
 * 
 *      comment
 *  This is a simple CLI application that connects to the server
 */

const net = require('net');
const stdin = process.stdin;

// connect to the chat server using the host name and port.
const socket = net.connect(3000,'localhost',()=>{
    console.log('connected!');
});

// encoding for better character reading
socket.setEncoding('utf8');

// write received messages to the console (standout out)
socket.on('data',(data)=>{
    process.stdout.write(data);
});

// read input from the keyboard (standard in)
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', data =>{
    // write/send input from keyboard to the server.
    socket.write(data+'\n\r');
});