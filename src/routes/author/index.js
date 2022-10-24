const express = require("express");
const router = express.Router();

// router
const companyRouter = require("./company");

// controller
const validateToken = require("../../controllers/middleware/validateToken");
const SluckRouteController = require("../../controllers/utilities_controller/SluckRouteController");
const AuthorController = require("../../controllers/main_controller/AuthorController");
const getUserByToken = require("../../controllers/middleware/getUserByToken");

// Nested route
// base-url: auth
router.use("/company", getUserByToken, companyRouter);

router.post("/login", AuthorController.login);
router.get("/reLogin", getUserByToken, AuthorController.reLogin);
router.get("/logout", getUserByToken, AuthorController.logout);
router.post("/register", AuthorController.register);
router.get("/getInfor", getUserByToken, AuthorController.getInformation);
router.post("/updateInfor", getUserByToken, AuthorController.updateInfor);

router.get("/", SluckRouteController.index);

module.exports = router;
