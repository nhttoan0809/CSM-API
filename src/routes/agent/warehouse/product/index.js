const express = require('express')
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController')
const router = express.Router()

// router

// controller
const ProductController = require('../../../../controllers/main_controller/ProductController')
const PalletController = require('../../../../controllers/main_controller/PalletController')
// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/product

// Access
router.get('/get_all', ProductController.get_all_product_information)
router.post('/:id_product/add_to_pallet', ProductController.add_product_to_pallet)
router.post('/:id_product/remove_from_pallet', ProductController.remove_product_from_pallet)
router.post('/:id_product/update_information', ProductController.update_product_information)
router.post('/:id_product/update_position', ProductController.update_product_position)

router.get('/', SluckRouteController.index);

module.exports = router