//Readable stream = allow node js to read data from a stream
//writeable stream = allow node js to write data from a stream
//duplex = both 

const https = require("http");
//fs module = file system 
const fs = require("fs");
//creating a read stream
//utf will give us the text
const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//createReadStream has a event "data" on it."data" allow us to listen any data.
//we read the file the buffer gets the chunk and gives out the chunk
myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
})