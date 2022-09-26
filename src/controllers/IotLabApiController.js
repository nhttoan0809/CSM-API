class IotLabApiController{

    // [GET] iotlabapi/login
    login = (req, res) => {
        res.json({
            'discription': `this api to login to 'iot lab API' system and return token`,
            'data': 'wait for execute after write all api'
        })
    }

    // [GET] iotlabapi/stations-list
    getListOfStation = (req, res) => {
        res.json({
            'discription': 'This api will return a list containing all the stations',
            'data': 'wait for execute after write all api'
        })
    }
}

module.exports = new IotLabApiController