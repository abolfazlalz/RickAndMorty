const http = require('http');
const characters = require('./Characters.js');
const apiControl = require('./Clasess/ApiControl');
const emitter = require('events');

http.createServer((request, response) => {
    let emitter = new characters.characters.CharacterEmitter();
    let url = request.url.replace("/api/", "").split('/');
    if (url.length > 0) {
        if (url[0] === 'characters') {
            characters.characters.getCharacters(response, emitter);
            emitter.on("characters", function (result) {
                apiControl.function.createApi(response, result);
            });
        } else {
            apiControl.function.createApi(response, 'invalid command');
        }
    } else {
        apiControl.function.createApi(response, 'enter your request');
    }

    emitter.on('response', function (data) {
    });

}).listen(8080);