class LoginController{

    // [GET] /logout
    index = (req, res) => {
        res.json({
            'discription': `this api to sign out of warehouse management system`,
            'data': 'wait for execute after write all api'
        })
    }

}

module.exports = new LoginController