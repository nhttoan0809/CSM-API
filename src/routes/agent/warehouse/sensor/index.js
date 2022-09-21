const express = require('express');
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController');
const router = express.Router()

// router

// controller

// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/sensor

// Access
router.get('/get_all', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/sensor/get_all');})
router.post('/:id_sonsor/assign', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sonsor/assign');})
router.post('/:id_sonsor/update_position', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sonsor/update_position');})
router.delete('/:id_sensor/remove', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/remove');})

router.get('/', SluckRouteController.index);

module.exports = router