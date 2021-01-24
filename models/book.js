const mongoose = require('mongoose');

var Book = mongoose.model('Book', {
name: { type: String },
author: { type: String },
edition: { type: Number },
copy: { type: Number }
});

module.exports = { Book };