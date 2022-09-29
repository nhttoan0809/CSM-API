const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Product = new Schema({
    product_id: {type: mongoose.Types.ObjectId},
    warehouse_id: {type: mongoose.Types.ObjectId},
    description: {type: String},
    pallet_id: {type: mongoose.Types.ObjectId},
    position: {type: String},
    storage_time: {type: Number},
    width: {type: Number},
    length: {type: Number},
    height: {type: Number},
})

module.exports = mongoose.Model('Product', Product)