//this program read the file 'readMe.txt' and then 
//Create a dir 'stuff' and paste the containt in the writeMe.txt file


var fs = require('fs');
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data, function(err, result){
            if(err) console.log('error', err)
        });
    })
} )