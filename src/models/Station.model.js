const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Station = new Schema({
    station_id: {type: mongoose.Types.ObjectId},
    warehouse_id: {type: mongoose.Types.ObjectId},
    iot_username: {type: String},
    iot_password: {type: String},
    iot_access_token: {type: String},
    linked_station_id: {type: Number}
})

module.exports = mongoose.model('Station', Station)