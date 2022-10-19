const express = require('express');
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController');
const router = express.Router()

// router

// controller
const SensorController = require('../../../../controllers/main_controller/SensorController')
// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/sensor

// Access
router.get('/get_all', SensorController.get_all_sensor_information)
router.post('/:id_sensor/assign', SensorController.sensor_assign)
router.post('/:id_sensor/update_position', SensorController.sensor_update_position)
router.delete('/:id_sensor/remove', SensorController.sensor_remove)

router.get('/', SluckRouteController.index);

module.exports = router