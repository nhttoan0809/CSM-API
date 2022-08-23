const express = require('express');
const sampleAnalyticsController = require('../controllers/SampleAnalyticsController');
const router = express.Router()

router.use('/', sampleAnalyticsController.index)

module.exports = router;