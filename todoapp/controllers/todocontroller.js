const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

const data = [{item: 'get milk'},{item: 'walk dog'}, {item:'kick some coding ass.'}]
module.exports = function(app) {
//all the request handlers
//for get the info
app.get('/todo', function(req, res) {
    res.render('todo', {todos: data});

});
//for posting the info
app.post('/todo',urlencodedParser, function(req, res) {
    data.push(req.body);
    res.json(data);
    
});
//for deleting staff
app.delete('/todo/:item', function(req, res) {
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);


});

};