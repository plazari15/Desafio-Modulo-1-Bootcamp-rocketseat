const express = require('express');
const routes = require('./src/Routes/routes');

const server = express();

server.use(express.json());
server.use(routes);


server.listen(3000);