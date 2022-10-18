const express = require('express')
const router = express.Router()

// router

// controller
const validateToken = require('../../controllers/middleware/validateToken')
const SluckRouteController = require('../../controllers/utilities_controller/SluckRouteController')
const Pallet_templateController = require('../../controllers/main_controller/Pallet_templateController')
// Nested route
// base-url: pallet_template

router.get('/get_all', Pallet_templateController.getAllPalletTemplate)

router.get('/', SluckRouteController.index);

module.exports = router