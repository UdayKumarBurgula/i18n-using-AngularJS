var loginService = require('../service/loginService.js');

exports.validateUser = function(req, res) {

    var reqData = {
        user: req.data.user,
        pass: req.data.pass
    };

    loginService.validateUser(reqData, function(errors, data) {

        if (errors) {
            res.jsonp({
                status: 'faliure',
                error: errors
            });
        } else {
            res.jsonp({
                status: 'success',
                data: data
            });
        }
    });
}
