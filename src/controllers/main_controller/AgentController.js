const AgentModel = require('./../../models/Agent.model')

class AgentController{

    // [POST] agent/add
    add = (req,res) =>{
        const body = req.body
        
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
    // [POST] agent/:id_agent/update
    update = (req,res) =>{
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
    // [DELETE] agent/:id_agent/delete
    delete = (req,res) =>{
        const body = req.body
        return res.json({
            status: "Successfully",
            data: {
                body: body
            }
        })
    }
}

module.exports = new AgentController