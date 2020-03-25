const http = require('http');
const port = 3000;
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req, res, next) => {
  console.log('In middleware 1');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product </button></form>'); //Send the body
 // Allows the request to continue to the next middleware in line
 
});

app.use('/product',(req,res,next) =>{
  console.log(req.body);
  res.redirect('/');
});

app.use('/',(req, res, next) => {
    console.log('In middleware 2');
    res.send('<h1>Product has been added!</h1>'); //Send the body
   
});

app.use((req, res, next) => {
    console.log('In  middleware 2');
    res.send('<h1>Hello from Express!</h1>'); //Send the body
});

app.listen(port);
