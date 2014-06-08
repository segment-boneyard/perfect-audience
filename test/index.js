
var assert = require('assert');
var PA = require('..');

describe('perfect-audience', function () {

  var email = 'ilya@segment.io';
  var password = 'myfavoritewrapper';

  it('should fetch a campaign report', function (done) {
    this.timeout(30000); // two api requests
    var pa = PA(email, password);
    pa.campaigns(function (err, campaigns) {
      if (err) return done(err);
      assert(campaigns);
      done();
    });
  });
});