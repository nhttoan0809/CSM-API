const express = require('express');
const SluckRouteController = require('../../controllers/utilities_controller/SluckRouteController');

const router = express.Router()

// router
const warehouseRouter = require('./warehouse')

// controller

// Nested route
// base-url: agent/
router.use('/:id_agent/warehouse', warehouseRouter)

// Access
router.get('/add', () => {console.log('url here: /agent/add');})
router.post('/:id_agent/update', () => {console.log('url here: /agent/:id_agent/update');})
router.delete('/:id_agent/delete', () => {console.log('url here: /agent/:id_agent/delete');})

router.get('/', SluckRouteController.index);

module.exports = router