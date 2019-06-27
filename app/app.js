const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParse = bodyParser.urlencoded({extended:false});
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));


app.get('/',function(req, res){
    res.render('index');
});
app.get('/contact',function(req, res){
    res.render('contact', {qs :req.query});
});
app.post('/contact', urlencodedParse, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});

})

app.get('/profile/:name',function(req, res){
    const data= {age: 19, job:'student', hobbies:['eating', 'fighting','fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000
    );
