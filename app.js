const http = require('http');
const port = 8084;

const server = http.createServer((req,res)=>{
    console.log(req);
});

server.listen(port);

