const http = require('http');
//const routes = require('./routes');
const express = require(express);
const port = 8084;

const app = express();
const server = http.createServer();  

server.listen(port);
