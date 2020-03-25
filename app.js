const http = require('http');
const port = 3000;

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In middleware 1');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In  middleware 2');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(port);
