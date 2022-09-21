const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const user = new Schema({
    user_id: {type: Number},
    usr: {type: String},
    pwd: {type: String},
    name: {type: String},
    email: {type: String},
    access_token: {type: Array}
})

module.exports = mongoose.model('User', user)