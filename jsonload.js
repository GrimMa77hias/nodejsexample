//Matthew Grimes 01/17/13

// Heavily based on an example taken from 
//http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/
// Include http module.
var http = require("http");
// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
http.createServer(function (request, response) {
	// Attach listener on end event.
	// This event is called when client sent all data and is waiting for response.
	request.on("end", function () {
		// Write headers to the response.
		// 200 is HTTP status code (this one means success)
		// Second parameter holds header fields in object
		// We are sending plain text, so Content-Type should be text/plain
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		// Send data and end response.
		response.end("<html><title>Form</title><form name=\"submit\" action=\"jsonload.js\" method=\"post\"><input type=\"text\" name=\"headTitle\"><input type=\"text\" name=\"text\"></form></html>");
	});
// Listen on the 1337 port.
}).listen(1337);