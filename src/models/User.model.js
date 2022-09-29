const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
    user_id: {type: mongoose.Types.ObjectId},
    username: {type: String},
    password: {type: String},
    name: {type: String},
    email: {type: String},
    access_token: {type: Array}
})

module.exports = mongoose.model('User', User)