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
router.get('/logout', AuthorController.logout)
router.post('/register', AuthorController.register)
router.post('/update', () => {console.log('url here: /auth/udpate');})

router.get('/', SluckRouteController.index);

module.exports = router