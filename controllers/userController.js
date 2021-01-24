const express = require('express');
var router = express.Router();

var { User } = require('../models/user');

router.post('/',(req,res) => {
    var newuser = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        });    
        newuser.save((err,docs) => {
            if (!err) { 
                res.send(docs); }
            else { console.log('Error in storing users'+JSON.stringify(err,undefined,2)); } 
        });    
});

module.exports = router;