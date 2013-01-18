//Matthew Grimes 01/17/13

// Heavily based on an example taken from 
//http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/
// Include http module.
var http = require("http");
// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.

//get the webpage from a file
page = require("fs");

http.createServer(function (request, response) {
	// Attach listener on end event.
	// This event is called when client sent all data and is waiting for response.
	request.on("end", function () {
		page.readFile("form.html", 'utf-8', function (error, data){		
		response.writeHead(200, {'Content-Type': 'text/html'});		
		// Send data and end response.
		response.end(data);
		});
	});
// Listen on the 1337 port.
}).listen(1337);