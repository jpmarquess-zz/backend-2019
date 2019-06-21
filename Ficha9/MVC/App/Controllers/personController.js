var mysql        = require('mysql');
const express    = require('express');
const bodyParser = require('body-parser');

const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'persons'
});

connection.connect();

// show all persons
exports.person_index = function (request, response) {
    connection.query("SELECT * FROM persons", function(error, results, fields) {
        if (error) throw error;

        response.render("person", {title: "Person Detail", person: result[0]});

        response.send(results);
    });
}

// Get Person
exports.person_detail = function (request, response) {
    connection.query("SELECT * FROM persons WHERE id = ?", function(error, results, fields) {
        if (error) throw error;

        response.render("person", {title: "Person Detail", person: result[0]});

        response.send(results);
    });
}