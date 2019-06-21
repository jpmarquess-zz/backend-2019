const express = require('express');
const app = express();
const fs = require('fs');

var server = app.listen(4000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host,port);
    fs.open("log.txt", "a", function(err, fd) {
        console.log(fd);
    })
});

function writeLog(request, response) {
    var log = request.path + ", " + request.method + ", " + new Date + "\n";
    fs.appendFile("log.txt", log, function(err) {
        if (err) throw err;
        console.log("Saved");
    });
}

app.get("/", function(request, response){
    writeLog(request, response);    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World");
});

app.get("/index", function(request, response){
    writeLog(request, response);    
    response.writeHead(200, {"Content-Type": "text/html"});

    var html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("Message", new Date());

    response.end(html);
});

app.get("/users/:name", function(request, response){
    writeLog(request, response);    
    response.writeHead(200, {"Content-Type": "text/html"});
    
    var name = request.params.name;
    var html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("Message", "Welcome " + name + " !!!!");

    response.end(html);
});

app.get("/log", function(request, response){
    writeLog(request, response);
    response.writeHead(200, {"Content-Type": "text/plain"});

    var log = fs.readFileSync("log.txt");

    response.end(log);
});

app.get("/download", function(request, response) {
    writeLog(request, response);

    var log = "log.txt";

    response.download(log);
});

app.get("/clear", function(request, response) {
    writeLog(request, response);
    response.writeHead(200, {"Content-Type": "text/html"});

    var html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("Message", "Clear efetuado com sucesso !");

    var clear = fs.truncate("log.txt", 0, function() {console.log("Clear")});

    response.end(html,clear);
});