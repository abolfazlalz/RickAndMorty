let mysql = require('mysql');

let connections = [];

connections.createConnection = function() {
    return  mysql.createConnection({
        host: "localhost",
        user: "abolfa18_RickSanchez",
        password: "RickSanchez",
        database: "abolfa18_rick_morty"
    });
}

exports.connections = connections;