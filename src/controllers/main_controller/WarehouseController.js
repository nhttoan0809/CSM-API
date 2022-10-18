const WarehouseModel = require('./../../models/Warehouse.model')

class WarehouseController{

    // [GET] agent/:id_agent/warehouse/get_all
        get_allwarehouse_information = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/add
        add_warehouse = (req,res) =>{                
            const body = req.body
            console.log('asdas: ',body)
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/update
        update_warehouse_information = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/import
        import_warehouse = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
        
    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/export
        export_warehouse = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/delete
        delete_warehouse = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }

}

module.exports = new WarehouseController