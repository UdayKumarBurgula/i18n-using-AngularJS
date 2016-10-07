var userModel = require('../models/user.js');

exports.function = function(reqData, callback) {

    userModel.User.findOne({userName: reqData.userName}, function (err, existingUser) {
        if (err) {
            callback('Error while adding the user', null);
        } else if (existingUser) {
            callback('UserName Is Already Exists', null);
        } else {
            var userSchema = new userModel.userSchema();
            userSchema.userName = reqData.userName;
            userSchema.password = reqData.password;

            userSchema.save(function (errors, data) {
                if (errors) {
                    callback('Error adding user', null);
                    return;
                }

                callback(null, data);
            });
        }
    });
};
