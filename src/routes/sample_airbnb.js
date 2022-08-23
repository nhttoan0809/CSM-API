const express = require('express')
const sampleAirbnbController = require('../controllers/SampleAirbnbController')
const router = express.Router()

router.use('/', sampleAirbnbController.index)

module.exports = router