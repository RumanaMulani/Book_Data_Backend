const express = require('express');
var router = express.Router();

var { Book } = require('../models/book');

router.get('/',(req,res) => {
    Book.find(((err,docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retriving books'+JSON.stringify(err,undefined,2)); } 
    }))
});

router.post('/',(req,res) => {
    var newbook = new Book({
        name: req.body.name,
        author: req.body.author,
        edition: req.body.edition,
        copy: req.body.copy,
        });    
        newbook.save((err,docs) => {
            if (!err) { 
                res.send(docs); }
            else { console.log('Error in storing books'+JSON.stringify(err,undefined,2)); } 
        });    
});

module.exports = router;