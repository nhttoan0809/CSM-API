const CompanyModel = require('./../../models/Company.model')

class CompanyController{

    // [GET] auth/company/getInfor
    getInfor = (req, res) => {

        const id_user = req.id_user;

        CompanyModel.findOne({owner_id: id_user}, (err, company) => {
            if(!err){
                if(company){
                    return res.json({
                        status: "Successfully",
                        data: {
                            company_id: company._id,
                            company_name: company.company_name,
                            company_address: company.company_address,
                        }
                    })
                }else{
                    return res.json({
                        tatus: "Failure",
                        message: "Don't have any company match with this user."
                    })
                }
            }
            else{
                return res.json({
                    tatus: "Failure",
                    message: "Can't read data from db"
                })
            }
        })

        // return res.json({
        //     status: "Successfully",
        //     data: {
        //         company_id: '632c374cf870b9ba19a49fd4',
        //         company_name: 'Quang Minh',
        //         company_address: '123/tt, Nguyễn Văn Cừ, P. An Khánh, Q. Ninh Kiều'
        //     }
        // })
    }

    // [POST] auth/company/update
    update = (req, res) => {
        const id_user = req.id_user;

        // Get data from body
        const company_name = req.body.company_name
        const company_address = req.body.company_address

        CompanyModel.findOneAndUpdate({
            owner_id: id_user
        },{
            company_name,
            company_address
        }, (err) => {
            if(!err){
                return res.json({
                    status: "Successfully",
                    message: "Update company information successfully"
                })
            }else{
                return res.json({
                    status: "Failure",
                    message: "Update company information failure"
                })
            }
        })
    }

}

module.exports = new CompanyController