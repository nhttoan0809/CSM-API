const express = require('express')
const SluckRouteController = require('../../../controllers/utilities_controller/SluckRouteController')
const router = express.Router()

// router
const sensorRouter = require('./sensor')
const palletRouter = require('./pallet')
const productRouter = require('./product')
const stationRouter = require('./station')

// controller
const WarehouseController = require('../../../controllers/main_controller/WarehouseController')
// Nested route
// Base url: agent/:id_agent/warehouse
router.use('/:id_warehouse/station', stationRouter)
router.use('/:id_warehouse/sensor', sensorRouter)
router.use('/:id_warehouse/pallet', palletRouter)
router.use('/:id_warehouse/product', productRouter)

// Access
router.get('/get_all', WarehouseController.get_allwarehouse_information)
router.post('/add', WarehouseController.add_warehouse)
router.post('/:id_warehouse/update', WarehouseController.update_warehouse_information)
router.post('/:id_warehouse/import', WarehouseController.import_warehouse)
router.delete('/:id_warehouse/export', WarehouseController.export_warehouse)
router.delete('/:id_warehouse/delete', WarehouseController.delete_warehouse)

router.get('/', SluckRouteController.index);

module.exports = router
