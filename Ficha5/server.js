const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', function(request, response) {
    var file = readFile('./users.json');
    response.send(file);
});

app.post('/users', function(request, response) {
    var file = readFile('./users.json');
    var jsonData = JSON.parse(file);

    var keys = Object.keys(jsonData);
    var obj_length = keys.length;
    obj_length++;

    jsonData['user' + obj_length] = request.body;

    response.send(jsonData);
});

app.delete('/users/:id', function(request, response) {
    var file = readFile('./users.json');
    var jsonData = JSON.parse(file);

    var id = request.params.id;
    delete jsonData['user' + id];
    response.send(jsonData);
});

app.get('/users/:id', function(request, response) {
    var file = readFile('./users.json');
    var jsonData = JSON.parse(file);

    var id = request.params.id;
    var user = jsonData['user' + id];

    response.send(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
