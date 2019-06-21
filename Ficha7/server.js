var mysql        = require('mysql');
const express    = require('express');
const bodyParser = require('body-parser');

const app  = express();
const port = 3306;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'persons'
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

connection.connect();

app.get("/persons", function(request, response) {
    connection.query("SELECT * FROM persons", function(error, results, fields) {
        if (error) throw error;
        response.send(results);
    });
});

app.post("/persons", function(request, response) {
    var insert = "INSERT INTO persons SET ?";
    var body = request.body;

    connection.query(insert, body, function(error, results, fields) {
        if (error) {
            console.log("error: ", error);
            response.send(error);
        } else {
            console.log("id -> ", results.insertId);
            response.send("" + results.insertId);
        }
    });
});

app.delete("/persons", function(request, response) {
    var del = "DELETE FROM persons WHERE ?";
    var body = request.body;

    connection.query(del, body, function(error, results, fields) {
        if (error) {
            console.log("error: ", error);
            response.send(error);
        } else {
            console.log("Deleted " + results.affectedRows + " row");
            response.send("Deleted " + results.affectedRows + " row");
        }
    });
});

app.get("/persons/:id", function(request, response) {
    var select = "SELECT * FROM persons WHERE idPerson = ?";
    var id = request.params.id;

    connection.query(select, id, function(error, results, fields) {
        if (error) {
            console.log("error: ", error);
            response.send(error);
        } else {
            console.log(results);
            response.send(results);
        }
    });
});

app.get("/persons/:age/:profession", function(request, response) {
    var select = "SELECT * FROM persons WHERE age = ? AND profession = ?";
    var age = request.params.age;
    var profession = request.params.profession;

    connection.query(select, [age, profession], function(error, results, fields) {
        if (error) {
            console.log("error: ", error);
            response.send(error);
        } else {
            console.log(results);
            response.send(results);
        }
    });
});

//connection.end();