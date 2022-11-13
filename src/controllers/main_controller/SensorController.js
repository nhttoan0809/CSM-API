const iotlabFakedata = require("../utilities_func/iotlab-fakedata");
const SensorModel = require("./../../models/Sensor.model");

class SensorController {
  // [GET] agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/station/:id_station/sensor/get_all
  get_all = async (req, res) => {
    const id_station = req.id_station;

    const sensorList = await SensorModel.find({
      station_id: id_station,
    });

    return res.json({
      status: "Successfully",
      data: sensorList,
    });
  };

  // [GET] agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/station/:id_station/sensor/:id_sensor/get_data
  get_data = async (req, res) => {
    //   get data from params
    const id_sensor = req.params["id_sensor"];

    try {
      const sensor = await SensorModel.findOne({ _id: id_sensor });

      const iotAccountToken = req.iotAccountToken;
      const linkedStationId = req.linkedStationId;
      const linked_sensor_id = sensor.linked_sensor_id;

      const responseData = await iotlabFakedata.getData(
        iotAccountToken,
        linkedStationId,
        linked_sensor_id
      );

      if (responseData.status !== "Successfully") {
        return res.json({
          status: "Failure",
        });
      }

      if (sensor) {
        return res.json({
          status: "Successfully",
          data: responseData.data,
        });
      }
    } catch (error) {
      return res.json({
        status: "Failure",
      });
    }
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/station/:id_station/sensor/:id_sensor/set_status
  set_status = async (req, res) => {
    // Get data from params
    const id_sensor = req.params["id_sensor"];

    // Get data from body
    let status = req.body.status;
    status = status == 1 ? true : false;

    try {
      if (!status) {
        // If status is 0 then set status of this sensor is 0
        await SensorModel.findOneAndUpdate(
          {
            _id: id_sensor,
          },
          {
            status: false,
          }
        );
      } else if (status) {
        // If status is 1 then set status of this sensor is 1
        await SensorModel.findOneAndUpdate(
          {
            _id: id_sensor,
          },
          {
            status: true,
          }
        );
        // Then set status of remaning sensor is 0
        await SensorModel.findOneAndUpdate(
          {
            _id: {
              $ne: id_sensor,
            },
            status: true,
          },
          {
            status: false,
          }
        );
      } else {
        return res.json({
          status: "Failure",
          message: "Data is not valid",
        });
      }
      return res.json({
        status: "Successfully",
        message: "Change status of the sensor successfully",
      });
    } catch (error) {
      return res.json({
        status: "Failure",
      });
    }
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/station/:id_station/sensor/:id_sensor/set_position
  set_position = async (req, res) => {
    // Get data from params
    const id_sensor = req.params["id_sensor"];

    // Get data from body
    const position = req.body.position;

    console.log("id_sensor: ", id_sensor);
    console.log("position: ", position);

    try {
      await SensorModel.findOneAndUpdate(
        {
          _id: id_sensor,
        },
        position === "-1"
          ? {
              $unset: {
                position: 1,
              },
            }
          : { position }
      );

      return res.json({
        status: "Successfully",
        message: "Set position successfully",
      });
    } catch (error) {
      return res.json({
        status: "Failure",
        message: "Set position failure",
      });
    }
  };
}

module.exports = new SensorController();
