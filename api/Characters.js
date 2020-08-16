let mysql = require('./Clasess/MySqlHelper');
const EventEmitter = require('events');
const con = require("mysql");

const characters = [];

characters.CharacterEmitter = class CharactersEmitter extends EventEmitter {}

characters.getCharacters = function (res, charactersEmitter) {
    let list = [];
    let con = mysql.connections.createConnection();
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM characters", function (err, result, fields) {
            if (err) throw err;
            charactersEmitter.emit("characters", result);
        });
    });
    return list;
};

exports.characters = characters;