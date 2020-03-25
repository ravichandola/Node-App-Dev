const express  = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product',(req, res, next) => {
    console.log('In middleware 1');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
   // Allows the request to continue to the next middleware in line
   
  });
  
  router.post('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
  });
  
  module.exports = router;