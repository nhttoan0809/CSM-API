const CompanyModel = require('./../../models/Company.model')

class CompanyController{

    // [POST] auth/company/update
    updateCompanyInfomation = (req, res) => {
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }

}

module.exports = new CompanyController