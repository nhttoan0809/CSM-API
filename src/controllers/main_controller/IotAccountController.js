class IotAccountController{

    // [POST] agent/:id_agent/warehouse/:id_warehouse/iot_account/connect
    connect = (req, res) => {
        // Get params
        const id_warehouse = req.params['id_warehouse']

        // Get data from body
        const username = req.body.username
        const password = req.body.password

        return res.json({
            status: "Successfully",
            message: "You are access to connect to iot lab api"
        })
    }
}

module.exports = new IotAccountController