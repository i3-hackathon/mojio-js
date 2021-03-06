// Generated by CoffeeScript 1.8.0
(function() {
  var BatteryVoltageObserver, MojioModel,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MojioModel = require('./MojioModel');

  module.exports = BatteryVoltageObserver = (function(_super) {
    __extends(BatteryVoltageObserver, _super);

    BatteryVoltageObserver.prototype._schema = {
      "BatteryVoltageLow": "Float",
      "BatteryVoltageHigh": "Float",
      "Timing": "Integer",
      "Type": "Integer",
      "Name": "String",
      "ObserverType": "Integer",
      "AppId": "String",
      "OwnerId": "String",
      "Parent": "String",
      "ParentId": "String",
      "Subject": "String",
      "SubjectId": "String",
      "Transports": "Integer",
      "Status": "Integer",
      "Tokens": "Array",
      "_id": "String",
      "_deleted": "Boolean"
    };

    BatteryVoltageObserver.prototype._resource = 'BatteryVoltageObservers';

    BatteryVoltageObserver.prototype._model = 'BatteryVoltageObserver';

    function BatteryVoltageObserver(json) {
      BatteryVoltageObserver.__super__.constructor.call(this, json);
    }

    BatteryVoltageObserver._resource = 'BatteryVoltageObservers';

    BatteryVoltageObserver._model = 'BatteryVoltageObserver';

    BatteryVoltageObserver.resource = function() {
      return BatteryVoltageObserver._resource;
    };

    BatteryVoltageObserver.model = function() {
      return BatteryVoltageObserver._model;
    };

    return BatteryVoltageObserver;

  })(MojioModel);

}).call(this);
