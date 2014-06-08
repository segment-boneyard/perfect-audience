
var debug = require('debug')('perfect-audience');
var request = require('superagent');

/**
 * Expose `PA`.
 */

module.exports = PA;

/**
 * Perfect Audience API endpoing.
 * @type {String}
 */

var host = 'https://api.perfectaudience.com';

/**
 * Initialize a new Perfect Audience client with an `email`
 * and `password`.
 *
 * @param {String} email
 * @param {String} password
 */

function PA (email, password) {
  if (!(this instanceof PA)) return new PA(email, password);
  if (!email) throw new Error('PA requires an email.');
  if (!password) throw new Error('PA requires a password.');
  this.email = email;
  this.password = password;
}

/**
 * Log into Perfect Audience.
 *
 * @param {Function} callback
 */

PA.prototype.login = function (callback) {
  var self = this;
  debug('logging in %s ..', this.email);
  request
    .post(host+'/auth')
    .send({ email: this.email, password: this.password })
    .end(function (err, res) {
      if (err) {
        debug('login failed: %s', err);
        return callback(err);
      } else {
        var token = self.token = res.body.token;
        debug('logged in: %s', token);
        callback(null, token);
      }
    });
};

/**
 * Query Perfect Audience campaigns.
 *
 * @returns {Object} options
 * @param {Function} callback
 */

PA.prototype.campaigns = function (options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  var self = this;
  options = options || {};
  this.login(function (err, token) {
    if (err) return callback(err);
    debug('querying campaigns ..');
    request
      .get(host+'/reports/campaign_report')
      .set('Authorization', token)
      .query(options)
      .end(function (err, res) {
        if (err) return callback(err);
        debug('received campaign report');
        var campaigns = res.body.report;
        callback(null, campaigns);
      });
  });
};


