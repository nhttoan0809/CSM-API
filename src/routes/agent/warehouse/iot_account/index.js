const express = require('express');
const router = express.Router()

// router

// controller
const IotAccountController = require('../../../../controllers/main_controller/IotAccountController');
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController')

// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/iot_account

// Access
router.post('/connect', IotAccountController.connect)

router.get('/', SluckRouteController.index);

module.exports = router