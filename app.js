const http = require('http');
const fs = require('fs');

const port = 8084;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {       // 1- Register the event listener for Storing body data by pushing chunks 
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {   // 2- This will be fired once its done parsing the incoming data or request
      const parsedBody = Buffer.concat(body).toString(); // create buffer and add all chunks from inside body (it is only for text - toString())
      const message = parsedBody.split('=')[1];
   
      //  fs.writeFileSync('message.txt', message); //Block the execution until the file is created.

    fs.writeFile('message.txt', message, err =>{
        
        // Non-Blocking or Async 
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();    
      });
    });
    
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(port);
