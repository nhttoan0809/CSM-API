const SensorModel = require('./../../models/Sensor.model')

class SensorController{

    // [GET] agent/:id_agent/warehouse/:id_warehouse/sensor/get_all
        get_all_sensor_information = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/assign
        sensor_assign = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }

    // [POST] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/update_posotion
        sensor_update_position = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/sensor/:id_sensor/remove
        sensor_remove = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }

}

module.exports = new SensorController