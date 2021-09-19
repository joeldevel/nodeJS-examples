const http = require('http');

// create a server
/*
const server = http.createServer();

// register a listener
// using a socket
server.on('connection', (socket) => {
	console.log("connection established");		
});
*/
// or like this
const server = http.createServer((req, res) => {
		if (req.url === '/') res.end("Hello");
		
		if (req.url === '/api') {
			res.write(JSON.stringify(['a', 'b', 'z']));
			res.end();
		}
});
server.listen(9001);

console.log('server is listening on port: 9001');
