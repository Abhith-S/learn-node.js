//get the http functionality
var http = require('http');

//set port and host
var port = 3000;
var host = '127.0.0.1';

//creating server usinng http module, function is createServer, its inbuilt
//createServer() takes 2 arguements request,response and uses arrow function
var server = http.createServer((request,response) => {

    //writeHead sends a status code (200 means 'OK') and MIME type to client
    //MIME type is send as an object and is to set what kind of content we want to send the client as response. Here we are sending plain text.
    response.writeHead(200, {"Content-Type" : "text/plain"});

    //just to show server is up and running
    console.log("server running");

    //to alert server that request has been fulfilled and to send client the content of response
    //we can see it on the browser at localhost:3000
    response.end("Server working successfully");

});

//start listening for incoming requests
//listen() takes 2 parameters port and host and has an error function
server.listen(port,host,(error) =>{
    if(error) {
        return console.log("error");
    }

    //just to show where server is listening for requests
    console.log('server is listening on '+host+':'+port);

});


//To start server (on terminal) : node simpleServer.js

//Then on browser go to 127.0.0.1:3000 or localhost:3000.
