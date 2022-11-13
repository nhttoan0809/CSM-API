const express = require("express");
const router = express.Router();

// router
const sensorRouter = require("./sensor");

// controller
const SluckRouteController = require("../../../../../controllers/utilities_controller/SluckRouteController");
const StationController = require("../../../../../controllers/main_controller/StationController");
const checkAndGetIdStation = require("../../../../../controllers/middleware/checkAndGetIdStation");

// Nested route
// base-url: /agent/:id_agent/warehouse/:id_warehouse/iot_account/:id_iot_account/station
router.use("/:id_station/sensor", checkAndGetIdStation, sensorRouter);

// access
router.get("/get_all", StationController.get_all);

router.get("/", SluckRouteController.index);

module.exports = router;
