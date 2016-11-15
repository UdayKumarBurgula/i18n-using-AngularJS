var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var config = require('./config/db.js');

mongoose.connect(config.url);

app.use(morgan('dev'));

app.use(express.static('./src'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'bilingualdemo' }));

require('./server/routes.js')(app);

app.listen(port);
console.log('App is listening on port ' + port);
