const express = require("express");
const router = express.Router();

// router
const stationRouter = require("./station");

// controller
const SluckRouteController = require("../../../../controllers/utilities_controller/SluckRouteController");
const IotAccountController = require("../../../../controllers/main_controller/IotAccountController");
const checkAndGetIdIotAccount = require("../../../../controllers/middleware/checkAndGetIdIotAccount");

// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/iot_account
router.use("/:id_iot_account/station", checkAndGetIdIotAccount, stationRouter);

// Access
router.post("/add", IotAccountController.add);
router.get("/get_all", IotAccountController.get_all);
router.delete("/:id_iot_account/remove", IotAccountController.delete);

router.get("/", SluckRouteController.index);

module.exports = router;
