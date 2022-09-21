const express = require('express')

// router
const authRouter = require('./author')
const agentRouter = require('./agent')

// controller
const sluckRouteController = require('../controllers/utilities_controller/SluckRouteController')

const route = (app) => {

    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    app.use('/auth', authRouter)
    app.use('/agent', agentRouter)

    app.use('/', sluckRouteController.index);
}

module.exports = route