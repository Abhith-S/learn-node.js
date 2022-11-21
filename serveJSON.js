//get the http functionality
var http = require('http');

//just to show server started on terminal
console.log("sever listening at localhost:3000");

//creating server usinng http module, function is createServer, its inbuilt
//createServer() takes 2 arguements request,response and uses arrow function
http.createServer( (req,res) => {

    //writeHead sends a status code (200 means 'OK') and MIME type to client
    //to set what kind of content we want to send the client as response
    res.writeHead( 200, {'Content-Type' : 'application/JSON'});

    //create a json file with any data
    let json_response = {
        status : 'success',
        code : 200,
        result : ['mustang', 'farrari', 'lamborgini'],
        verified : "Yes"
    };  

    //just to see on terminal that server is running
    console.log("server running");

    //JSON.stringify() method converts a JavaScript value to a JSON string
    res.end(JSON.stringify(json_response));

}).listen(3000);
