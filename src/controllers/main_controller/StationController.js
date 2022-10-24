const StationModel = require("./../../models/Station.model");

class StationController {
  // [GET] agent/:id_agent/warehouse/:id_warehouse/station/connect
  station_connect = (req, res) => {

    const data_iot_api = req.data_get_token

    console.log('data_iot_api: ', data_iot_api);

    return res.json({
      status: "Successfully",
      data: data_iot_api,
    });
  };

  // [DELETE] agent/:id_agent/warehouse/:id_warehouse/station/:id_station/disconnect
  station_disconnect = (req, res) => {
    const body = req.body;
    return res.json({
      status: "Successfully",
      data: {
        body: body,
      },
    });
  };
}

module.exports = new StationController();
