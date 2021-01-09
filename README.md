# Node-TCP-Chat
Implementation of a Chart server and Client using pure Node TCP API. No Packages.json, No NPM, Just Node!
A project to practice in depth understanding of Node's networking abilities. The reason Node is Node! 😄

## Server Side
The server implementation is a simple tcp server designed to send messages from one user to other users. In order for a client to be considered as a user, the client has to enter (send) their nickname to the server. The server then tracks that client's connection and subsequently sends messages to it and also allow it to send messages to others.

## Client Side
The Client is a simple CLI application that connects to the tcp server. It utilizes Node's Node's CLI API to read inputs from the user.

## Chat Room
<img src="https://github.com/NdubuisiJr/node-TCP-Chat/blob/main/res/chat.PNG"> 

## Installation
* Clone the repo.
* Start the server with `node src/server.js`
* Launch the client CLI app (as many as you want) with `node src/client.js`
* Type the nickname for each client.
* Start Chatting with your different thoughts 😄

## Contributing
You're free to mess around with this project. If I like the mess, I'll merge it 😄...
