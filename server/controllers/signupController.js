var signupService = require('../service/signupService.js');

exports.addUser = function (req, res) {

    var reqData = req.data;
    signupService.addUser(reqData, function (errors, data) {
        if (errors) {
            res.jsonp({
                status: 'failure',
                error: errors
            });
        } else {
            res.jsonp({
                status: 'success',
                data: data
            });
        }
    });
};
