const express = require('express');
const router = express.Router()

// router

// controller
const CompanyController = require('../../../controllers/main_controller/CompanyController');
const SluckRouteController = require('../../../controllers/utilities_controller/SluckRouteController');

// Access
router.get('/getInfor', CompanyController.getInfor)
router.post('/update', CompanyController.update)

router.get('/', SluckRouteController.index);

module.exports = router