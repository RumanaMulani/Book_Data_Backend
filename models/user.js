const mongoose = require('mongoose');

var User = mongoose.model('User', {
name: { type: String },
email: { type: String },
address: { type: String },
password:{ type:String},
});

module.exports = { User };