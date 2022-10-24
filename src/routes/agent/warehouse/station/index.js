const express = require('express')
const router = express.Router()

// router

// controller
const connectIotApi = require('../../../../controllers/middleware/iot_api/connectIotApi')
const StationController = require('../../../../controllers/main_controller/StationController')
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController');

// Nested route
// base-url: /agent/:id_agent/warehouse/:id_warehouse/station

// access
router.get('/connect', connectIotApi, StationController.station_connect)
router.delete('/:id_staion/disconnect', StationController.station_disconnect)

router.get('/', SluckRouteController.index);

module.exports = router
