const express = require("express");

const router = express.Router();

// router
const warehouseRouter = require("./warehouse");

// controller
const AgentController = require("../../controllers/main_controller/AgentController");
const checkAndGetIdAgent = require("../../controllers/middleware/checkAndGetIdAgent");
const SluckRouteController = require("../../controllers/utilities_controller/SluckRouteController");
// Nested route
// base-url: agent/
router.use("/:id_agent/warehouse", checkAndGetIdAgent, warehouseRouter);

// Access
router.get("/get_all", AgentController.get_all);
router.post("/add", AgentController.add);
router.get("/id_agent/getInfor", AgentController.getInfor);
router.post("/:id_agent/update", AgentController.update);
router.delete("/:id_agent/delete", AgentController.delete);

router.get("/", SluckRouteController.index);

module.exports = router;
