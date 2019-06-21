var obj = {
    name: "Anne",
    age: "16",
    gender: "Female"
}

console.log(JSON.stringify(obj));

var obj1 = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
console.log(obj1.name);


// Ex.5
var Emitter = require("./emitter");
var emtr = new Emitter();

emtr.on('start', function() {
    console.log("teste");
});

emtr.emit('start');

