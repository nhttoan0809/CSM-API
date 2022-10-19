const PalletModel = require('./../../models/Pallet.model')

class PalletController{

    // [GET] agent/:id_agent/warehouse/:id_warehouse/pallet/get_all
    get_all_pallet_information = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/import
    import_pallet = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }

    // [DELETE] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/delete
    delete_pallet = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/add_to_warehouse
    add_pallet_to_warehouse = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/remove_from_warehouse
    remove_pallet_form_warehouse = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_information
    update_pallet_information = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_position
    update_pallet_position = (req,res) =>{                
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }

}

module.exports = new PalletController