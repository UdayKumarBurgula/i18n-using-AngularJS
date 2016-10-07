var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    user            : {
        userName     : String,
        password     : String
    }
});

module.exports = mongoose.model('User', userSchema);
