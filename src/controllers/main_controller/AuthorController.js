const jwt = require('jsonwebtoken');
const { Model } = require('mongoose');
const UserModel = require('../../models/User.model');
const dotenv = require('dotenv').config();

class AuthorController {

    // [POST] auth/login
    login = async (req, res) => {

        // Get data from body
        const username = req.body.username
        const password = req.body.password

        // Connect to db to get data
        UserModel.findOne({ username, password }, (err, user) => {
            if (!err) {

                if (!user) {
                    return res.json({
                        status: 'Failure',
                        message: 'username or password is not valid'
                    })
                }

                // generate access token
                const body = req.body
                const accessToken = jwt.sign({ body }, process.env.SECRET_KEY);

                // save token to db
                const user_id = `${user._id.toString()}`
                const new_access_token = [...user.access_token]
                new_access_token.push(accessToken)

                UserModel.findOneAndUpdate(
                    { '_id': user_id },
                    { access_token: new_access_token },
                    (err) => {
                        if(err){
                            console.log('---> SAVE TOKEN FAILURE');
                            return res.json({
                                status: 'Failure',
                                message: "Can't save token to db"
                            })
                        }

                        console.log('---> SAVE TOKEN SUCCESSFULLY');
                        return res.json({
                            status: 'Successfully',
                            access_token: accessToken
                        })
                    }
                )
                    
            }
            else {
                return res.json({
                    status: 'Failure',
                    message: 'Some thing went wrong on db!'
                })
            }
        })
    }

    //[GET] auth/logout
    logout = (req, res) => {
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }

    // [POST] auth/register
    register = (req, res) => {
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }

    // [POST] auth/update
    updateInformation = (req, res) => {
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
}

module.exports = new AuthorController