process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");
var User = require('../server/models/user.js');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('User', function () {

    /*
    * Test the api/addUser route
    */
    describe('addUser', function () {
        it('it should not POST a user without name, password field', function (done) {
            var user = {
                name: "test",
                pass: "test"
            };
            chai.request('http://localhost:8080')
                .post('/api/addUser')
                .send(user)
                .end(function (err, res) {
                    res.should.have.status(200);
                  done();
                });
        });
    });
});
