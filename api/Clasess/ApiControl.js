http = require("http");
let emitter = require('events');

let functions = [];
let result;
let eventHandler = new emitter.EventEmitter();

function setup()
{
    result = {'data': {'result': 'not defined'}, 'about': {'time': Date.now().toString()}}
}

functions.createApi = function getData(res, data) {
    setup();
    let parameters = {'response': res, 'data': data}
    eventHandler.emit('result', parameters);
}

eventHandler.on('result', function(parameters) {
    result.data.result = parameters.data;
    parameters.response.end(JSON.stringify(result));
});

exports.function = functions;