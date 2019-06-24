//http is module in nodejs
const http = require('http');
//we are creating a server
//200 status of the code
// req = request send from the client
// res = response we want to send

const server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hey ninjas');

});
//We are listening the server at the port:3000
//
server.listen(3000);
console.log('server has stared at port:3000')