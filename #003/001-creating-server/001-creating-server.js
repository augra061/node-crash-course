const http = require('http');

server = http.createServer((req, res) => {
    return console.log('request made');
});

server.listen(3000, 'localhost', () => {
    return console.log('listening for requests on port 3000');
});