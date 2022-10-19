const Pallet_templateModel = require('./../../models/Pallet_template.model')

class Pallet_templateController{

    // [GET] pallet_template/get_all
    getAllPalletTemplate = (req,res) =>{
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }

}

module.exports = new Pallet_templateController