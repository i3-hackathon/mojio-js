// Generated by CoffeeScript 1.6.3
(function() {
  var Mojio, http;

  http = require('http');

  module.exports = Mojio = (function() {
    var defaults;

    defaults = {
      hostname: 'sandbox.api.moj.io',
      port: '80',
      version: 'v1'
    };

    function Mojio(options) {
      var _base, _base1, _base2;
      this.options = options;
      if (this.options == null) {
        this.options = {
          hostname: defaults.hostname,
          port: this.defaults.port,
          version: this.defaults.version
        };
      }
      if ((_base = this.options).hostname == null) {
        _base.hostname = defaults.hostname;
      }
      if ((_base1 = this.options).port == null) {
        _base1.port = defaults.port;
      }
      if ((_base2 = this.options).version == null) {
        _base2.version = defaults.version;
      }
      this.options.application = this.options.application;
      this.options.secret = this.options.secret;
    }

    /*
        Helpers
    */


    Mojio.prototype._makeParameters = function(params) {
      var property, query, value;
      if (params.length === 0) {
        '';
      }
      query = '?';
      for (property in params) {
        value = params[property];
        query += "" + property + "=" + value + "&";
      }
      return query.slice(0, -1);
    };

    Mojio.prototype.request = function(request, callback) {
      var action, parts;
      parts = {
        hostname: this.options.hostname,
        host: this.options.hostname,
        port: this.options.port,
        path: '/' + this.options.version,
        method: request.method,
        withCredentials: false
      };
      if ((request.resource != null)) {
        parts.path += '/' + request.resource;
      }
      if (request.id !== '') {
        parts.path += '/' + request.id;
      }
      if ((request.parameters != null) && Object.keys(request.parameters).length > 0) {
        parts.path += this._makeParameters(request.parameters);
      }
      parts.headers = {};
      if (this.token != null) {
        parts.headers["MojioAPIToken"] = this.token;
      }
      if ((request.headers != null)) {
        parts.headers += request.headers;
      }
      if (request.body) {
        parts.body = request.body;
      }
      action = http.request(parts, function(result) {
        if (result.statusCode > 299) {
          return callback(result, null);
        } else if (result.statusCode !== 204) {
          if (typeof window === "undefined" || window === null) {
            result.setEncoding('utf8');
          }
          return result.on('data', function(data) {
            if (data instanceof Object) {
              return callback(data, null);
            } else {
              return callback(null, JSON.parse(data));
            }
          });
        } else {
          return callback(null, result);
        }
      });
      action.on('error', function(error) {
        return callback(error, null);
      });
      return action.end();
    };

    /*
        Login
    */


    Mojio.prototype.login_resource = 'Login';

    Mojio.prototype._login = function(username, password, callback) {
      return this.request({
        method: 'POST',
        resource: this.login_resource,
        id: this.options.application,
        parameters: {
          userOrEmail: username,
          password: password,
          secretKey: this.options.secret
        }
      }, callback);
    };

    Mojio.prototype.login = function(username, password, callback) {
      var _this = this;
      return this._login(username, password, function(error, result) {
        if ((result != null)) {
          _this.token = result._id;
        }
        return callback(error, result);
      });
    };

    Mojio.prototype._logout = function(callback) {
      return this.request({
        method: 'DELETE',
        resource: this.login_resource,
        id: typeof mojio_token !== "undefined" && mojio_token !== null ? mojio_token : this.token
      }, callback);
    };

    Mojio.prototype.logout = function(callback) {
      var _this = this;
      return this._logout(function(error, result) {
        _this.token = null;
        return callback(error, result);
      });
    };

    /*
        CRUD
    */


    Mojio.prototype.get = function(request, callback) {
      return this.request(request, callback);
    };

    Mojio.prototype.post = function(request, callback) {
      return this.request(request, callback);
    };

    Mojio.prototype.put = function(request, callback) {
      return this.request(request, callback);
    };

    Mojio.prototype["delete"] = function(request, callback) {
      return this.request(request, callback);
    };

    /*
        Applications
    */


    Mojio.prototype.apps_resource = 'Apps';

    Mojio.prototype._applications = function(callback) {
      return this.request({
        method: 'GET',
        resource: this.apps_resource,
        id: this.options.application
      }, callback);
    };

    Mojio.prototype.applications = function(callback) {
      var _this = this;
      return this._applications(function(error, result) {
        return callback(error, result);
      });
    };

    /*
        Events
    */


    Mojio.prototype.events_resource = 'Events';

    Mojio.prototype._events = function(callback) {
      return this.Request({
        method: 'GET',
        resource: this.events_resource
      }, callback);
    };

    Mojio.prototype.events = function(callback) {
      var _this = this;
      return this._events(function(error, result) {
        return callback(error, result);
      });
    };

    return Mojio;

  })();

}).call(this);

/*
//@ sourceMappingURL=Mojio.map
*/
