const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Sensor = new Schema({
    linked_sensor_id: {type: mongoose.Types.ObjectId},
    // data: {type: String},
    station_id: {type: mongoose.Types.ObjectId},
    position: {type: String},
    status: {type: Boolean},
})

module.exports = mongoose.model('Sensor', Sensor)