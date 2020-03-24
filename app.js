const http = require('http');
const routes = require('./routes');
const port = 8084;

const server = http.createServer(routes.handler);  // Execute the function that stored in routesfor incoming request

server.listen(port);
