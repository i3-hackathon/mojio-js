// Generated by CoffeeScript 1.6.3
(function() {
  var App, MojioModel,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MojioModel = require('./MojioModel');

  module.exports = App = (function(_super) {
    __extends(App, _super);

    App.prototype._schema = {
      "Type": "Integer",
      "Name": "String",
      "Description": "String",
      "CreationDate": "String",
      "Downloads": "Integer",
      "RedirectUris": "String",
      "ApplicationType": "String",
      "_id": "String",
      "_deleted": "Boolean"
    };

    App.prototype._resource = 'Apps';

    App.prototype._model = 'App';

    function App(json) {
      App.__super__.constructor.call(this, json);
    }

    App.prototype.observe = function(children, callback) {
      if (children == null) {
        children = null;
      }
      return callback(null, null);
    };

    App.prototype.storage = function(property, value, callback) {
      return callback(null, null);
    };

    App.prototype.statistic = function(expression, callback) {
      return callback(null, null);
    };

    App._resource = 'Apps';

    App._model = 'App';

    App.resource = function() {
      return App._resource;
    };

    App.model = function() {
      return App._model;
    };

    return App;

  })(MojioModel);

}).call(this);

/*
//@ sourceMappingURL=App_save.map
*/