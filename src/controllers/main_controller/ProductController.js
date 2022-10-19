const ProductModel = require('./../../models/Product.model')

class ProductController{

    // [GET] agent/:id_agent/warehouse/:id_warehouse/prodcut/get_all
        get_all_product_information = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/add_to_pallet
        add_product_to_pallet = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/remove_from_pallet
        remove_product_from_pallet = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_information
        update_product_information = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }
    // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_position   
        update_product_position = (req,res) =>{                
            const body = req.body
            return res.json({
                status: "Successfully",
                data: {
                    body: body
                }
            })
        }

}

module.exports = new ProductController