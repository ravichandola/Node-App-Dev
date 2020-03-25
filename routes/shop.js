const express  = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('In  middleware 2');
    res.send('<h1>Hello from Express!</h1>'); //Send the body
});

module.exports = router;