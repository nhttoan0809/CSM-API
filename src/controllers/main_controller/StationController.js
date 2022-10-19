const StationModel = require('./../../models/Station.model')

class StationController{

    // [GET] agent/_id_agent/warehouse/:id_warehouse/station/connect
    station_connect = (req,res) =>{                
        //const body = req.body
        const params = req.query
        return res.json({
            status: "Successfully",
            data: {
                body: params
            }
        })
    }
    // [DELETE] agent/_id_agent/warehouse/:id_warehouse/station/:id_station/disconnect
    station_disconnect = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }

}

module.exports = new StationController