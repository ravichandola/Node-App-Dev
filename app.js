const http = require('http');
const port = 8084;

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    //setting the headers
    res.setHeader('Content-Type','text/html');

    // Write in a response we need to show in a browser

    res.write('<html>');
    res.write('<head><title>Home Page</title></head> ');
    res.write('<body><h1>Welcome to HomePage</h1></body>');
    res.write('</html>');

    //End of response
    
    res.end();

    // After the end of response if we want to write anything , it will throw an error; 
    // res.write(); 

});

server.listen(port);

