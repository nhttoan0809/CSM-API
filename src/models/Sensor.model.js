const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Sensor = new Schema({
    sensor_id: {type: mongoose.Types.ObjectId},
    data_id: {type: String},
    station_id: {type: mongoose.Types.ObjectId},
    position: {type: String},
    status: {type: Boolean},
})

module.exports = mongoose.model('Sensor', Sensor)