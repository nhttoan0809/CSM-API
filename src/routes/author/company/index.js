const express = require('express');
const SluckRouteController = require('../../../controllers/utilities_controller/SluckRouteController');
const router = express.Router()

// router

// controller

router.post('/update', ()=> {console.log('url here: /auth/company/update');})

router.get('/', SluckRouteController.index);

module.exports = router