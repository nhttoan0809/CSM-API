const Pallet_templateModel = require('./../../models/Pallet_template.model')

class Pallet_templateController{

    // [GET] pallet_template/get_all
    getAllPalletTemplate = (req,res) =>{
        Pallet_templateModel.find({}, (err, pallets) => {
            if(err){
                return res.json({
                    status: "Failure",
                    message: "Get pallet template failure"
                })
            }else{
                const customize_data = [...pallets].map((pallet) => ({
                    ...pallet._doc,
                    length: parseFloat(pallet.length),
                    width: parseFloat(pallet.width),
                    height: parseFloat(pallet.height)
                }))
                return res.json({
                    status: "Successfully",
                    data: customize_data
                })
            }
        })
    }

}

module.exports = new Pallet_templateController