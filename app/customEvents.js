
var events = require('events');

// event module is emitter
//module utility is that we can inherit that are built in node.js
var util = require('util');
//object constructor
//when we will have a person we will create a name
var Person = function(name) {
    this.name = name;
};
// By doing this we are attaching event to each and every object Person we are creating

util.inherits(Person, events.EventEmitter);


var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + 'said:' +mssg)
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want to eat')
