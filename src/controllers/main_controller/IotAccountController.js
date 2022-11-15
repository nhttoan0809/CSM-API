const { findOneAndDelete } = require("../../models/IotAccount.model");
const IotAccountModel = require("../../models/IotAccount.model");
const SensorModel = require("../../models/Sensor.model");
const StationModel = require("../../models/Station.model");
const iotlabFakedata = require("../utilities_func/iotlab-fakedata");

class IotAccountController {
  // [POST] agent/:id_agent/warehouse/:id_warehouse/iot_account/add
  add = async (req, res) => {
    const id_warehouse = req.id_warehouse;

    // Get data from body
    const username = req.body.username;
    const password = req.body.password;

    try {
      // Check account is already exist?
      const account = await IotAccountModel.findOne({
        iot_username: username,
        iot_password: password,
      });
      if (account) {
        return res.json({
          status: "Failure",
          message: "Tài khoản đã tồn tại",
        });
      }

      // Login to iotlab-fakedata to get token
      const dataToken = await iotlabFakedata.getToken(username, password);
      if (dataToken.status !== "Successfully")
        return res.json({
          status: "Failure",
          message: "Tài khoản hoặc mật khẩu không hợp lệ",
        });

      const token = dataToken.data.token;
      // Save iot account to DB
      const iot_account = new IotAccountModel({
        warehouse_id: id_warehouse,
        iot_username: username,
        iot_password: password,
        token: token,
      });

      const resultIotAccount = await iot_account.save();

      // Get all station from iot account
      const dataStation = await iotlabFakedata.getAllStation(token);
      if (dataStation.status !== "Successfully")
        return res.json({
          status: "Failure",
          message: `Can't get all station of user: ${username}`,
        });

      let stationList = dataStation.data;
      let stationList_save = stationList.map(
        (station) =>
          new StationModel({
            iotAccount_id: resultIotAccount._id,
            linked_station_id: station.station_id,
          })
      );

      const stationListSavePromises = stationList_save.map(async (station) => {
        return await station.save();
      });

      const stationList_saved = await Promise.all(stationListSavePromises);

      // Get all sensor from every station
      const idStationList = stationList_saved.map((station) => ({
        station_id: station._id,
        linked_station_id: station.linked_station_id,
      }));

      const getAllSensorPromises = idStationList.map(async (station) => {
        const { station_id, linked_station_id } = station;

        const data = await iotlabFakedata
          .getAllSensor(token, `${linked_station_id}`)
          .then((res) => res.data);
        // console.log("data: ", data.data);
        return {
          id_station: station_id,
          sensorList: data,
        };
      });

      const resultGetallSensor = await Promise.all(getAllSensorPromises);

      // Generate sensor list
      let allSensorList = [];
      resultGetallSensor.forEach((station) => {
        const id_station = station.id_station;
        const sensorList = station.sensorList.map((sensor) => {
          return new SensorModel({
            linked_sensor_id: sensor.sensor_id,
            station_id: id_station,
            // data: sensor.data,
            status: false,
          });
        });

        allSensorList = [...allSensorList, ...sensorList];
      });

      // Insert all sensor to db
      await SensorModel.collection.insertMany(allSensorList);

      return res.json({
        status: "Successfully",
      });
    } catch (error) {
      return res.json({
        status: "Failure",
        message: `Lỗi xác thực: ${error}`,
      });
    }
  };

  // [DELETE] agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/remove
  delete = async (req, res) => {
    const id_warehouse = req.id_warehouse;

    // Get params
    const id_iot_account = req.params["id_iot_account"];

    try {
      // const stationList = await StationModel.find({
      //   iotAccount_id: id_iot_account,
      // });

      // const deleteSensorListPromises = stationList.map(async (station) => {
      //   return await SensorModel.deleteMany({
      //     station_id: station._id,
      //   });
      // });

      // await Promise.all(deleteSensorListPromises);

      // const deleteStationListPromises = stationList.map(async (station) => {
      //   return await StationModel.findOneAndDelete({
      //     _id: station._id,
      //   });
      // });

      // await Promise.all(deleteStationListPromises);

      await IotAccountModel.deleteOne({ _id: id_iot_account });

      return res.json({
        status: "Successfully",
        message: "Delete iot account successfully",
      });
    } catch (error) {
      return res.json({
        status: "Failure",
        message: "Delete iot account failure",
      });
    }
  };

  // [GET] agent/:id_agent/warehouse/:id_warehouse/iot_account/get_all
  get_all = async (req, res) => {
    const id_warehouse = req.id_warehouse;

    try {
      const accounts = await IotAccountModel.find({
        warehouse_id: id_warehouse,
      });

      if (accounts) {
        return res.json({
          status: "Successfully",
          data: accounts.map((account) => ({
            iotAccount_id: account._id,
            iot_username: account.iot_username,
          })),
        });
      }
    } catch (error) {
      return res.json({
        status: "Failure",
        message: "Get iot account failure",
      });
    }
  };
}

module.exports = new IotAccountController();
