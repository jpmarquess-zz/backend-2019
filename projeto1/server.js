const express    = require('express');
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1'); // universal unique identifier

const app  = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const fs = require('fs');

function readFile(fileName) {
    var file = fs.readFileSync(fileName, 'utf-8');
    return file;
}

// a) Listar todas as fotos existentes
app.get('/', function(request, response) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file); // conteudo do ficheiro
    response.send(jsonData);
});

// b) Adiciona fotos ao ficheiro photos.json
app.post('/addphoto', function(request, response) {
    var file = readFile('./photos.json');
    var jsonData = JSON.parse(file);

    var uuid = uuidv1(); // universal unique identifier

    var keys = Object.keys(jsonData);
    var obj_length = keys.length;
    obj_length++;

    jsonData['photo' + obj_length] = request.body; 

    jsonData['photo' + obj_length].id = uuid;

    fs.writeFile("photos.json", JSON.stringify(jsonData, null , 4), function(err) { // Guarda uma foto no ficheiro photos.json
        if (err) {
            console.log("Error, Try Again!!!");
            console.log(err);
        } else {
            console.log("Photo Saved Successfully!!!");
        }
    });

    response.send(jsonData);
});

// c) Seleciona todas as fotos pertencentes a um certo uploader
app.get('/uploader/:uploader',function(request, response){
    var file = JSON.parse(readFile("./photos.json"));
    var photoorder = Object.keys(file);

    var photonum = photoorder.length;
    var result = [];

    for (var i=1; i <= photonum; i++){ 
        if (file['photo' + i].uploader == request.params.uploader){ // Verifica totas as fotos que pertencema um certo Uploader
            result.push(file['photo' + i]);
        }
    }

    response.send(result);
});

// d) Incrementar o valor de Likes numa foto
app.post("/likes/:id", function(request, response) {
    var file = readFile("./photos.json");
    var jsonData = JSON.parse(file);

    var id = request.params.id;

    var photo = jsonData["photo" + id];
    photo.likes++;

    fs.writeFileSync("photos.json", JSON.stringify(jsonData, null , 4)); 
    response.send(photo);
});

// e) Listar todas as fotos com uma certa tag
app.get('/tags/:tag',function(request, response){
    var file = JSON.parse(readFile("./photos.json"));
    var photoKeys = Object.keys(file);

    var photoLength = photoKeys.length;
    var result = [];

    for (var i = 1; i <= photoLength; i++){
        for( var j = 0; j <= file['photo' + i]['tags'].length; j++) {
            if (file['photo' + i]['tags'][j] == request.params.tag) {
                result.push(file['photo' + i]);
            };
        };    
    };

    var resultFin = result.filter(function (photo, index) {
        return result.indexOf(photo) === index;
    });

    response.send(resultFin);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
