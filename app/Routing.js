const http = require('http');
const fs = require('fs');

//sending the data from the server to the client
const server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url)
    if(req.url === '/home' || req.url ==='/'){
        res.writeHead(200,{'Content-Type': 'text:html'})
        fs.createReadStream(__dirname +'/index.html').pipe(res);
    } else if(req.url === '/contact') {
        res.writeHead(200,{'Content-Type': 'text:html'})
        fs.createReadStream(__dirname +'/contact.html').pipe(res);       
    } else if(req.url === '/api/ninjas') {
        const ninjas =[{name:'Pratik', age:19}, {name: 'Chetan', age:22}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
        res.writeHead(404,{'Content-Type': 'text:html'})
        fs.createReadStream(__dirname +'/404.html').pipe(res);       
    

    }
})

server.listen(8080, '127.0.0.1');
console.log('server has being started at port 8080');