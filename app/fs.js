//this is how you unlink or remove a file
var fs = require('fs');

fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff',function(err, result){
        if(err) console.log('error', err);
    });
})