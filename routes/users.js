const express = require('express');
const router = express.Router();

const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
     db.any(`
        select * from cd.members;
    `).then( (result) => {
        // .then gets results of db.one after data comes back from database
        // how have res.render within this anonymous function?  SCOPE!
        // within render is the template (HBS) file name
        res.render('users', { 
            title: "The Swan House",
            message: "Choose a member to see their status.",
            // member is how call member.memid in user hbs file
            member: result,
            memid: result.memid,
            firstname: result.firstname,
            surname: result.surname,
            address: result.address,
            zipcode: result.zipcode,
            joindate: result.joindate,
        });
    });  
});

module.exports = router;
