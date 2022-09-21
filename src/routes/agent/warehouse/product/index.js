const express = require('express')
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController')
const router = express.Router()

// router

// controller

// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/product

// Access
router.get('/get_all', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/product/get_all');})
router.post('/:id_product/add_to_pallet', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/product/:id_product/add_to_pallet');})
router.post('/:id_product/remove_from_pallet', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/product/:id_product/remove_from_pallet');})
router.post('/:id_product/udpate_information', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/product/:id_product/udpate_information');})
router.post('/:id_product/update_position', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_position');})

router.get('/', SluckRouteController.index);

module.exports = router