var user = require('./models/user');
var path = require('path');
var signupController = require('./controllers/signupController.js');
var loginController = require('./controllers/loginController.js');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.post('/v1/addUser', function (req, res) {
        signupController.addUser(req, res);
    });

    app.post('/v1/login', function (req, res) {
        loginController.validateUser(req, res);
    });
};
