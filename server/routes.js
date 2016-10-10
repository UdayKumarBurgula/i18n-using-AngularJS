var user = require('./models/user');
var path = require('path');
var signupController = require('./controllers/signupController.js');
var loginController = require('./controllers/loginController.js');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.post('/v1/addUser', function (req, res) {
        signupController.addUser();
    });

    app.post('/v1/login', function (req, res) {
        console.log('reached the service layer');
        var user = req.body.user;
        console.log(user);
        loginController.validateUser(req, res);
    });
};
