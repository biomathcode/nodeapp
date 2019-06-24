const express = require('express');

const app = express();

app.get('/',function(req, res){
    res.send('This is the home page');
})
app.get('/contact',function(req, res){
    res.send('This is the contact page');
})
app.listen(8080);
