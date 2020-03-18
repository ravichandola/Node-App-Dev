const http = require('http');
const port = 8084;

const server = http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers);

    const url = req.url;

    if(url === '/'){
         //setting the headers
    res.setHeader('Content-Type','text/html');

    // Write in a response we need to show in a browser

    res.write('<html>');
    res.write('<head><title>Enter Your Message</title></head> ');
    res.write('<body><form action="/message" method="POST"><input type="text" name="ravi"><button type="submit">Submit</button></form></body>');
    res.write('</html>');

    //End of response

    return res.end();
     
    }

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

