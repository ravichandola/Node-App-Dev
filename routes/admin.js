const path = require('path');

const express = require('express');

const productController = require('../controllers/products'); //import the controller file

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',productController.getAddProduct); //Pass the rreference of the controller and call getAddProduct.

// whenever we need this route, we call getAddProduct method


// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;

