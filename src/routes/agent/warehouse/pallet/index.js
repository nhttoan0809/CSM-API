const express = require('express')
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController')
const router = express.Router()

// router

// controller
const PalletController = require('../../../../controllers/main_controller/PalletController')
// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/pallet

// Access
router.get('/get_all', PalletController.get_all_pallet_information )
router.post('/import', PalletController.import_pallet)
router.delete('/:id_pallet/delete', PalletController.delete_pallet)
router.post('/:id_pallet/add_to_warehouse', PalletController.add_pallet_to_warehouse)
router.post('/:id_pallet/remove_from_warehouse', PalletController.remove_pallet_form_warehouse)
router.post('/:id_pallet/update_information', PalletController.update_pallet_information)
router.post('/:id_pallet/update_position', PalletController.update_pallet_position)

router.get('/', SluckRouteController.index);

module.exports = router