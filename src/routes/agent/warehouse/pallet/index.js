const express = require('express')
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController')
const router = express.Router()

// router

// controller

// Nested route
// Base url: agent/:id_agent/warehouse/:id_warehouse/pallet

// Access
router.get('/get_all', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/pallet/get_all');})
router.get('/import', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/pallet/import');})
router.delete('/:id_pallet/delete', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/delete');})
router.post('/:id_pallet/add_to_warehouse', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/add_to_warehouse');})
router.post('/:id_pallet/remove_from_warehouse', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/remove_from_warehouse');})
router.post('/:id_pallet/update_information', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_information');})
router.post('/:id_pallet/update_position', () => {console.log('url here: agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_position');})

router.get('/', SluckRouteController.index);

module.exports = router