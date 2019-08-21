const express = require('express');
const {MiddlewareGeneral} = require('./src/Middleware');
const routes = require('./src/Routes/routes');

const server = express();

server.use(express.json());
server.use(MiddlewareGeneral);
server.use(routes);


server.listen(3000);