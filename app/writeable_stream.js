//Writeable streams 
//Buffer--->data-->listen-->client
//Readable stream = allow node js to read data from a stream
//writeable stream = allow node js to write data from a stream
//duplex = both 

const https = require("http");
//fs module = file system 
const fs = require("fs");
//creating a read stream
//utf will give us the text
const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt')
//send out the data"chunk" we just collected to the 'writeMe.txt'
//createReadStream has a event "data" on it."data" allow us to listen any data.
//we read the file the buffer gets the chunk and gives out the chunk
//everytime we get the data we fire the function and send the data
//.write : write it to the file directory
//difference from the fs.read is that we are having a continuous process
//in which we are reading the chunk of data at the same time sending it out to the clients

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
    myWriteStream.write(chunk);
})