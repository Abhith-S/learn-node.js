//Serve an html file

//get the http functionality
var http = require('http');

//get the filesystem methods and all
var fs = require('fs');

//just to show server started on terminal
console.log("server started at 127.0.0.1:3000");

//creating server usinng http module, function is createServer, its inbuilt
//createServer() takes 2 arguements request,response and uses arrow function
http.createServer((req,res) => {

    //writeHead sends a status code (200 means 'OK') and MIME type to client
    //to set what kind of content we want to send the client as response
    res.writeHead(200,{"Content-Type": "text/html" });

    //to read from file system 
    //readFile takes to arguements a path and a function 
    //here the function takes 2 arguements error(err) and data, these are inbuilt
    fs.readFile("Path of html file",(err,data) => {
        
        //if error occurs throw error
        if(err)
            throw err;
        console.log("success");

        //to alert server that request has been fulfilled and to send client the content of response
        //we can see it on the browser at localhost:3000
        res.end(data);
    });

    //listen at localhost:3000
}).listen(3000);
