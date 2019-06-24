const http = require('http');
const fs = require('fs');

//sending the data from the server to the client
const server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url)
    res.writeHead(200, {'Content-Type': 'text/html'});
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
})

server.listen(8080);
console.log('server has being started at port 8080');