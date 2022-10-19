const express = require('express')
const router = express.Router()
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController');

// router

// controller
const StationController = require('../../../../controllers/main_controller/StationController')
// Nested route
// base-url: /agent/:id_agent/warehouse/:id_warehouse/station

// access
router.get('/connect', StationController.station_connect)
router.delete('/:id_staion/disconnect', StationController.station_disconnect)

router.get('/', SluckRouteController.index);

module.exports = router
