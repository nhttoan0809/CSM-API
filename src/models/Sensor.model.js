const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Sensor = new Schema({
    sensor_id: {type: mongoose.Types.ObjectId},
    data: {type: mongoose.Types.Decimal128},
    is_activated: {type: Boolean},
    position: {type: String},
    warehouse_id: {type: mongoose.Types.ObjectId},
})

module.exports = mongoose.Model('Sensor', Sensor)