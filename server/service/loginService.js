var userModel = require('../models/user.js');

exports.validateUser = function(reqData, callback) {

    userModel.User.findOne({"user.userName": reqData.user, "user.password": reqData.pass},
    function (err, data) {
        if (err) {
            callback('not a validUser', null);
        } else {
            callback(null, data);
        }
    });
}
