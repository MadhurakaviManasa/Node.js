// Access to the http module. It will help our server to handle http requests and responses
var http = require('http');

// Creating a variable to store the port number our server will run on
// Port number is like an address for the client requests to send to access the server
var port = 3000;

// Creating a function to handle requests from clients
var requestHandler = function(request, response){
    console.log('Request came from: ' + request.url);
    response.end('Hello, world!')
}

// Now we will create a server using http.createServer('function') method
// http.createServer('function') method expects a function to handle requests
var server = http.createServer(requestHandler);

// Instructing the server to listen requests on the port we defined
// A call-back function is also provided which will be run after the server begins listening on the port
server.listen(port, function(){
    console.log('Listening on port: ' + port);
})