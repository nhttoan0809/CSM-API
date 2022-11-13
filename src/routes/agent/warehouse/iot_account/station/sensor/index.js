const express = require("express");
const SensorController = require("../../../../../../controllers/main_controller/SensorController");
const SluckRouteController = require("../../../../../../controllers/utilities_controller/SluckRouteController");
const router = express.Router();

// router

// controller
const getTokenAndStaionIdOfIOTLabFakeData = require("../../../../../../controllers/middleware/getTokenAndStaionIdOfIOTLabFakeData");

// Nested route
// Base url: /agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/station/:id_station/sensor

// Access
router.get("/get_all", SensorController.get_all);
router.get(
  "/:id_sensor/get_data",
  getTokenAndStaionIdOfIOTLabFakeData,
  SensorController.get_data
);
router.post("/:id_sensor/set_status", SensorController.set_status);
router.post("/:id_sensor/set_position", SensorController.set_position);

router.get("/", SluckRouteController.index);

module.exports = router;
