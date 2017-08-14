const express = require('express');
const router = express.Router();

const db = require('../db');

/* GET home page. */
// only put '/' because if put /facilities  we would technically have to call  /facilities/facilities
router.get('/', function(req, res, next) {
    db.one(`
        select * from cd.facilities where facid=7;
    `).then( (result) => {
        // .then gets results of db.one after data comes back from database
        // how have res.render within this anonymous function?  SCOPE!
        res.render('facilities', { 
            facility: result,
            id: result.facid,
            name: result.name,
            membercost: result.membercost,
            guestcost: result.guestcost
        });
    });


    
});



module.exports = router;
