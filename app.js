var http = require('http');
var handle = require('./handle');

var events = require('events');
var emiter = new events.EventEmitter();
require('console-log-hello-world');

// emiter.on('say12', say);

// function say() {
//     console.log('Im saying...');
// }

// emiter.emit('say12')

// var s   = require('./name');

// function handle(request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     response.write('<!DOCTYPE "html">');
//     response.write('<html>');
//     response.write('<head><title>Http Module</title></head>');
//     response.write('<body>');
//     response.write('<h1>Hello from http module SON</h1>')
//     response.write('</body>');
//     response.write('</html>');

//     response.end();
// }
// console.log(s.name());
// console.log(handle)
var server = http.createServer(handle.fn);

server.listen(3000, function() {
    console.log('Server is listening at port 3000');
});

server.on('request', function() {
    console.log('a new request...');
})