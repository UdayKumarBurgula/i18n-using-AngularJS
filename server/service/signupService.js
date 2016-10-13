var User = require('../models/user.js');
var hash = require('../utils/passwordHashUtil.js');

exports.addUser = function(reqData, callback) {

    User.findOne({userName: reqData.user}, function (err, existingUser) {
        if (err) {
            callback('Error while adding the user', null);
        } else if (existingUser) {
            callback('UserName Is Already Exists', null);
        } else {

            console.log(reqData.user, reqData.pass);

            var hashValue = hash.generateHash(reqData.pass);

            var newUser = new User();
            newUser.user.userName = reqData.user;
            newUser.user.password = hashValue;

            newUser.save(function (errors, data) {
                if (errors) {
                    callback('Error adding user', null);
                    return;
                }
                callback(null, data);
            });
        }
    });
};
