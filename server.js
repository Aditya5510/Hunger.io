const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(express.static(__dirname + '/public'));

const socketio = require('socket.io');

const expressServer = app.listen(8080);

const io = socketio(expressServer);
app.use(helmet());

// console.log("server listening on port " + "8000");

module.exports = {
    app, io
}
