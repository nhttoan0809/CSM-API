const jwt = require('jsonwebtoken');
const UserModel = require('../../models/User.model');
const dotenv = require('dotenv').config();

class AuthorController{
    
    // [POST] auth/login
    login = (req, res) => {

        // Get data from body
        const username = req.body.username
        const password = req.body.password

        // Connect to db to get data
        UserModel.find({usr:username, pwd:password}, (err, docs) => {
            if(!err){
                
                let data = null

                if(docs[0]){
                    data = docs[0]
                }
                if(data&&username===data.username&&password===data.password){
                    // generate access token
                    const body = req.body
                    const accessToken = jwt.sign({body}, process.env.SECRET_KEY);

                    return res.json({
                        status: 'Successfully',
                        access_token: accessToken
                    })
                }
                else{
                    return res.json({
                        status: 'failure',
                        message: 'Username or password is not valid.'
                    })
                }
            }
            else{
                return res.json({
                    status: 'failure',
                    message: 'Some thing went wrong on db...'
                })
            }
        })
    }

    // [GET] auth/logout
    logout = (req, res) => {

    }

    // [POST] auth/register
    register = (req, res) => {

    }

    // [POST] auth/update
    udpate = (req, res) => {

    }
}

module.exports = new AuthorController
