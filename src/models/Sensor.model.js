const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Float = require('mongoose-float').loadType(mongoose);

const Sensor = new Schema({
    sensor_id: {type: Number},
    date: {type: Float},
    is_activated: {type: Boolean},
    warehouse_id: {type: Number},
    x: {type: Number},
    y: {type: Number},
    z: {type: Number}
})

module.exports = mongoose.Model('Sensor', Sensor)