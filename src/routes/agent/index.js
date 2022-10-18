const express = require('express');
const SluckRouteController = require('../../controllers/utilities_controller/SluckRouteController');

const router = express.Router()

// router
const warehouseRouter = require('./warehouse')

// controller
const agentController = require('./../../controllers/main_controller/AgentController')

// Nested route
// base-url: agent/
router.use('/:id_agent/warehouse', warehouseRouter)

// Access
router.post('/add', agentController.add)
router.post('/:id_agent/update', agentController.update)
router.delete('/:id_agent/delete', agentController.delete)

router.get('/', SluckRouteController.index);

module.exports = router