const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

module.exports = (req, res, next) => {

    // Get token
    const accesToken = req.headers['authorization']

    if(!accesToken) return res.sendStatus(401)

    // verify token
    jwt.verify(accesToken, process.env.SECRET_KEY, (error, data) => {
        if(error){
            res.sendStatus(401)
        }
        else next()
    })

}