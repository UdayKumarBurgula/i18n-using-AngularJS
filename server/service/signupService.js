var User = require('../models/user.js');

exports.addUser = function(reqData, callback) {

    User.findOne({userName: reqData.user}, function (err, existingUser) {
        if (err) {
            callback('Error while adding the user', null);
        } else if (existingUser) {
            callback('UserName Is Already Exists', null);
        } else {
            var newUser = new User();
            newUser.user.userName = reqData.user;
            newUser.user.password = reqData.pass;

            console.log(reqData.user, reqData.pass);

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
