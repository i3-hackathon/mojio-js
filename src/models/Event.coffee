MojioModel = require('./MojioModel')

module.exports = class Event extends MojioModel
    # instance variables
    _schema:             {
                "Type": "Integer",
                "MojioId": "String",
                "VehicleId": "String",
                "OwnerId": "String",
                "EventType": "Integer",
                "Time": "String",
                "Location": "Object",
                "TimeIsApprox": "Boolean",
                "BatteryVoltage": "Float",
                "ConnectionLost": "Boolean",
                "_id": "String",
                "_deleted": "Boolean",
                "TripId": "String",
                "Altitude": "Float",
                "Heading": "Integer",
                "Distance": "Float",
                "FuelLevel": "Float",
                "FuelEfficiency": "Float",
                "Speed": "Float",
                "Acceleration": "Float",
                "Deceleration": "Float",
                "Odometer": "Float",
                "RPM": "Integer",
                "DTCs": "Array",
                "MilStatus": "Boolean",
                "Force": "Float"
            }


    _resource: 'Events'
    _model: 'Event'

    constructor: (json) ->
        super(json)

    observe: (children=null, callback) ->
        callback(null,null)

    storage: (property, value, callback) ->
        callback(null,null)

    statistic: (expression, callback) ->
        callback(null,null)

    # class variables and functions
    @_resource: 'Events'
    @_model: 'Event'

    @resource: () ->
        return Event._resource

    @model: () ->
        return Event._model

