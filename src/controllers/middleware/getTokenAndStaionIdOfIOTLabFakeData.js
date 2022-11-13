const IotAccountModel = require("./../../models/IotAccount.model");
const StationModel = require("./../../models/Station.model");

module.exports = async (req, res, next) => {
  const iotAccount = await IotAccountModel.findOne({
    _id: req.id_iot_account,
  });

  const iotStation = await StationModel.findOne({
    _id: req.id_station,
  });

  req.iotAccountToken = iotAccount.token;
  req.linkedStationId = iotStation.linked_station_id;

  next();
};
