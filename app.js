const http = require('http');
const port = 3000;
const bodyParser = require('body-parser');

const express = require('express');
const app = express();


// Importing Routes
const adminRoutes = require('./routes/admin');  //importing admin.js route
const shopRoutes = require('./routes/shop'); // importing shop.js route

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes); // calling admin.js by using middleware
app.use(shopRoutes); // calling the above imported shopRoutes (shop.js in routes).

app.listen(port);
