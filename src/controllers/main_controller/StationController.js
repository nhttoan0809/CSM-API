const StationModel = require("./../../models/Station.model");

class StationController {
  // [GET] agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/station/get_all
  get_all = async (req, res) => {
    // Get params

    const id_iot_account = req.id_iot_account;

    console.log("id_iot_account: ", id_iot_account);

    try {
      const stationList = await StationModel.find({
        iotAccount_id: id_iot_account,
      });

      return res.json({
        status: "Successfully",
        data: stationList,
      });
    } catch (error) {
      return res.json({
        status: "Failure",
        message: "Get all station failure",
      });
    }
  };
}

module.exports = new StationController();
