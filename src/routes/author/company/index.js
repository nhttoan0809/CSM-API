const express = require('express');
const SluckRouteController = require('../../../controllers/utilities_controller/SluckRouteController');
const router = express.Router()

// router

// controller
const companyController = require('../../../controllers/main_controller/CompanyController')
router.post('/update', companyController.updateCompanyInfomation)

router.get('/', SluckRouteController.index);

module.exports = router