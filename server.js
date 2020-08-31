// Defining node dependencies to initialize the server
const http = require('http');
// Calling main file of the server
const app = require('./app');


// Defining the port of the server
const port = process.env.PORT || 4000;


// Initializing the server with the method createServer() from http library
const server = http.createServer(app);


// Defining the server to be listen on the correct port
server.listen(port);