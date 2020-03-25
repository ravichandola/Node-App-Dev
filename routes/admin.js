const express  = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log('In middleware 1');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product </button></form>'); //Send the body
   // Allows the request to continue to the next middleware in line
   
  });
  
  router.post('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
  });
  
  module.exports = router;