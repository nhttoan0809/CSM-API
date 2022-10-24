const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IotAccount = new Schema({
  iotAccount_id: { type: mongoose.Types.ObjectId },
  warehouse_id: { ype: mongoose.Types.ObjectId },
  iot_username: { type: String },
  iot_password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("IotAccount", IotAccount);
