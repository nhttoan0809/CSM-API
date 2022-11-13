const express = require('express')
const router = express.Router()

// router
const palletRouter = require('./pallet')
const productRouter = require('./product')
const iot_accountRouter = require('./iot_account')

// controller
const WarehouseController = require('../../../controllers/main_controller/WarehouseController')
const checkAndGetIdWarehouse = require('../../../controllers/middleware/checkAndGetIdWarehouse')
const SluckRouteController = require('../../../controllers/utilities_controller/SluckRouteController')

// Nested route
// Base url: agent/:id_agent/warehouse
router.use('/:id_warehouse/iot_account', checkAndGetIdWarehouse, iot_accountRouter)
router.use('/:id_warehouse/pallet', checkAndGetIdWarehouse, palletRouter)
router.use('/:id_warehouse/product', checkAndGetIdWarehouse, productRouter)

// Access
router.get('/get_all', WarehouseController.get_all)
router.post('/add', WarehouseController.add)
router.get('/:id_warehouse/get_infor', WarehouseController.get_infor)
router.post('/:id_warehouse/update', WarehouseController.update)
router.post('/:id_warehouse/import', WarehouseController.import)
router.delete('/:id_warehouse/export', WarehouseController.export)
router.delete('/:id_warehouse/delete', WarehouseController.delete)

router.get('/', SluckRouteController.index);

module.exports = router
