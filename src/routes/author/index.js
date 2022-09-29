const express = require('express')
const router = express.Router()

// router
const companyRouter = require('./company')

// controller
const validateToken = require('../../controllers/middleware/validateToken')
const SluckRouteController = require('../../controllers/utilities_controller/SluckRouteController')
const AuthorController = require('../../controllers/main_controller/AuthorController')

// Nested route
// base-url: auth
router.use('/company', companyRouter)

router.post('/login' , AuthorController.login)
router.get('/logout', () => {console.log('url here: /auth/lgout');})
router.post('/register', () => {console.log('url here: /auth/register');})
router.post('/update', () => {console.log('url here: /auth/udpate');})

router.get('/', SluckRouteController.index);

module.exports = router