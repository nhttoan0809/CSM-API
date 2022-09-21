const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Sensor = new Schema({
    sensor_id: {type: Number},
    date: {type: mongoose.Decimal128},
    is_activated: {type: Boolean},
    warehouse_id: {type: Number},
    x: {type: Number},
    y: {type: Number},
    z: {type: Number}
})

module.exports = mongoose.Model('Sensor', Sensor)