const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Station = new Schema({
  station_id: { type: mongoose.Types.ObjectId },
  iotAccount_id: { type: mongoose.Types.ObjectId },
  linked_station_id: { type: Number },
});

module.exports = mongoose.model("Station", Station);