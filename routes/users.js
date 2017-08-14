var express = require('express');
var router = express.Router();

// const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', { 
        title: 'Users',
      message: 'Hello User!' 
    });
});

module.exports = router;
