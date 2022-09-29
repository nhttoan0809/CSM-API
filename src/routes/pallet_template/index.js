const express = require('express')
const router = express.Router()

// router

// controller
const validateToken = require('../../controllers/middleware/validateToken')
const SluckRouteController = require('../../controllers/utilities_controller/SluckRouteController')

// Nested route
// base-url: pallet_template

router.get('/get_all', () => {console.log('base-url: /pallet_template/get_all');})

router.get('/', SluckRouteController.index);

module.exports = router