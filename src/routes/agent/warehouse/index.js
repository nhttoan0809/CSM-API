const express = require('express')
const SluckRouteController = require('../../../controllers/utilities_controller/SluckRouteController')
const router = express.Router()

// router
const sensorRouter = require('./sensor')
const palletRouter = require('./pallet')
const productRouter = require('./product')
const stationRouter = require('./station')

// controller

// Nested route
// Base url: agent/:id_agent/warehouse
router.use('/:id_warehouse/station', stationRouter)
router.use('/:id_warehouse/sensor', sensorRouter)
router.use('/:id_warehouse/pallet', palletRouter)
router.use('/:id_warehouse/product', productRouter)

// Access
router.get('/get_all', () => {console.log('base-url: /agent/:id_agent/warehouse/get_all');})
router.get('/add', () => {console.log('base-url: /agent/:id_agent/warehouse/add');})
router.post('/:id_warehouse/update', () => {console.log('base-url: /agent/:id_agent/warehouse/:id_warehouse/update');})
router.post('/:id_warehouse/import', () => {console.log('base-url: /agent/:id_agent/warehouse/:id_warehouse/import');})
router.delete('/:id_warehouse/export', () => {console.log('base-url: /agent/:id_agent/warehouse/:id_warehouse/export');})
router.delete('/:id_warehouse/delete', () => {console.log('base-url: /agent/:id_agent/warehouse/:id_warehouse/delete');})

router.get('/', SluckRouteController.index);

module.exports = router
