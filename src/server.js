/**
 *  The TCP chat server implementation.
 * 
 *      Dependency
 *  The node net api
 *  
 *      Comment
 *  This demonstrates Node's single threading and shared state nature.
 */

let connections = 0, users={};

const net = require('net');

const server = net.createServer( socket =>{
    socket.setEncoding('utf8');
    socket.write('> Welcome to \033[92mnode-tcp-chat\033[39m!'
        +'\n\r> '+connections+' other people are connected at this time.'
        +'\n\r> please write your name and press enter:'
    );
    
    // handle any possible error, log the error and remove the user that caused the error.
    socket.on('error',(err)=>{
        console.log(err);
        connections--;
        delete users[nickName];
    });

    // remove the user that closed their connection without error
    socket.on('close',()=>{
        connections--;
        delete users[nickName];
    });

    // read user inputs are gathered from the network stream
    let inpuData='';
    let nickName='';
    socket.on('data',(data)=>{
        inpuData+=data;
        // new line (\n) is used to detect when the user press enter.
        if(inpuData.includes('\n')){
            inpuData=inpuData.trim();
            // the first input is taken as the user's name
            if(!nickName){
                nickName=inpuData;
                if(users[nickName]){
                    inpuData='';
                    nickName='';
                    socket.write('\033[93m> Nickname already in use. try again:\033[39m');
                    return;
                }
                else {
                    users[nickName]=socket;
                    for (const key in users) {
                        users[key].write('\033[90m '+nickName+' joined the room\033[39m\n\r');
                    }
                }
            }else{
                for (const key in users) {
                    if(key != nickName)
                        users[key].write('\033[93m'+`${nickName}`+'\033[39m'+`: ${inpuData}`+'\n\r');
                }
            }
            inpuData='';
            socket.write('\n\r>');
        }

    });
    connections++;
});

server.listen(3000, ()=>{
    console.log('\033[96m server is listening on *:3000\033[39m');
});