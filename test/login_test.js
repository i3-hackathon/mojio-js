// Generated by CoffeeScript 1.6.3
(function() {
  var Mojio, assert, config, mojio, should, testdata;

  Mojio = require('../dist/nodejs/Mojio.js');

  config = require('../config/mojio-config.coffee');

  mojio = new Mojio(config);

  assert = require("assert");

  testdata = require('./data/mojio-test-data');

  should = require('should');

  describe('Login', function() {
    return it('can login', function(done) {
      return mojio.login(testdata.username, testdata.password, function(error, result) {
        (error === null).should.be["true"];
        mojio.should.be.an.instanceOf(Mojio);
        mojio.token.should.be.ok;
        result.should.be.an.instanceOf(Object);
        result._id.should.be.an.instanceOf(String);
        return done();
      });
    });
  });

  describe('Logout', function() {
    return it('can logout', function(done) {
      return mojio.login(testdata.username, testdata.password, function(error, result) {
        return mojio.logout(function(error, result) {
          (error === null).should.be["true"];
          mojio.should.be.an.instanceOf(Mojio);
          (mojio.token === null).should.be["true"];
          return done();
        });
      });
    });
  });

}).call(this);

/*
//@ sourceMappingURL=login_test.map
*/
