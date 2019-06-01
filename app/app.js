var fs = require('fs');
// Sync we are blocking the code 
// ther is async function to it.
 fs.readFile('readme.txt', 'utf8', function(err,data) {
    fs.writeFile('writeMe.txt', data);
 });


// write to the file
