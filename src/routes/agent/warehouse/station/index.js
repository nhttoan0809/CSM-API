const express = require('express')
const router = express.Router()
const SluckRouteController = require('../../../../controllers/utilities_controller/SluckRouteController');

// router

// controller

// Nested route
// base-url: /agent/:id_agent/warehouse/:id_warehouse/station

// access
router.get('/connect', ()=> {console.log('url-here: /agent/_id_agent/warehouse/:id_warehouse/station/connect');})
router.delete('/:id_staion/disconnect', ()=> {console.log('url-here: /agent/_id_agent/warehouse/:id_warehouse/station/:id_staion/disconnect');})

router.get('/', SluckRouteController.index);

module.exports = router