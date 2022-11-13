const express = require("express");

// middle ware
const validateToken = require("./../controllers/middleware/validateToken");

// router
const authRouter = require("./author");
const agentRouter = require("./agent");
const pallet_templateRouter = require("./pallet_template");

// controller
const sluckRouteController = require("../controllers/utilities_controller/SluckRouteController");
const getUserByToken = require("../controllers/middleware/getUserByToken");

const route = (app) => {
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.use("/auth", validateToken, authRouter);
  app.use("/agent", validateToken, getUserByToken, agentRouter);
  app.use("/pallet_template", pallet_templateRouter);

  app.use("/", sluckRouteController.index);
};

module.exports = route;
