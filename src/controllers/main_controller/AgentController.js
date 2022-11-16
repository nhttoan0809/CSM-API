const CompanyModel = require("../../models/Company.model");
const AgentModel = require("./../../models/Agent.model");

class AgentController {
  // [GET] agent:id_agent/getInfor
  getInfor = (req, res) => {
    // Get params
    const id_agent = req.params;
    AgentModel.findOne(
      {
        agent_id: id_agent,
      },
      (err, agent) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to get information of an agent",
          });
        } else {
          if (agent) {
            return res.json({
              status: "Successfully",
              data: agent,
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't have any agent to match with this id",
            });
          }
        }
      }
    );
  };

  // [GET] agent/get_all
  get_all = (req, res) => {
    const id_user = req.id_user;

    CompanyModel.findOne(
      {
        owner_id: id_user,
      },
      (err, company) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Don't have any company match with this account",
          });
        } else {
          if (!company) {
            return res.json({
              status: "Failure",
              message: "Company does not exist",
            });
          } else {
            const id_company = company._id;
            // Main Execute
            AgentModel.find({ id_company }, (err, agents) => {
              if (err) {
                return res.json({
                  status: "Failure",
                  message: "Get all agent failure",
                });
              } else {
                if (agents) {
                  return res.json({
                    status: "Successfully",
                    data: agents,
                  });
                } else {
                  return res.json({
                    status: "Successfully",
                    message: "Empty agent list",
                    data: [],
                  });
                }
              }
            });
          }
        }
      }
    );
  };

  // [GET] agent/add
  add = (req, res) => {
    const id_user = req.id_user;

    // get data from body
    const agent_name = req.body.agent_name;
    const agent_owner = req.body.agent_owner;

    CompanyModel.findOne(
      {
        owner_id: id_user,
      },
      (err, company) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Don't have any company match with this account",
          });
        } else {
          if (!company) {
            return res.json({
              status: "Failure",
              message: "Company does not exist",
            });
          } else {
            const id_company = company._id;
            // Main Execute
            AgentModel.findOne(
              {
                agent_name,
              },
              (err, agent) => {
                if (err) {
                  return res.json({
                    status: "Failure",
                    message: "Add agent failure",
                  });
                } else {
                  if (agent) {
                    return res.json({
                      status: "Failure",
                      message: "Agent has already exist",
                    });
                  } else {
                    // Add agent
                    const agent = new AgentModel({
                      agent_name,
                      agent_owner,
                      id_company,
                    });

                    agent.save((err) => {
                      if (err) {
                        return res.json({
                          status: "Failure",
                          message: "Can't add agent to db",
                        });
                      } else {
                        return res.json({
                          status: "Successfully",
                          message: "Add agent successfully",
                        });
                      }
                    });
                  }
                }
              }
            );
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/update
  update = (req, res) => {
    // Param [id_agent]
    const id_agent = req.params["id_agent"];

    // Get data from body
    const agent_name = req.body.agent_name;
    const agent_owner = req.body.agent_owner;

    AgentModel.findOneAndUpdate(
      {
        _id: id_agent,
      },
      {
        agent_name,
        agent_owner,
      },
      { new: true },
      (err, agent) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Update agent failure",
          });
        } else {
          if (agent) {
            return res.json({
              status: "Successfully",
              message: "Update agent successfully",
            });
          }
          return res.json({
            status: "Failure",
            message: "Don't have any agent match with this id",
          });
        }
      }
    );
  };

  // [DELETE] agent/:id_agent/delete
  delete = (req, res) => {
    // Param [id_agent]
    const id_agent = req.params["id_agent"];

    AgentModel.findOneAndDelete(
      {
        _id: id_agent,
      },
      (err, agent) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Delete agent failure",
          });
        } else {
          if (agent) {
            return res.json({
              status: "Successfully",
              message: "Delete agent successfully",
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't have any agent match with id to delete",
            });
          }
        }
      }
    );
  };
}

module.exports = new AgentController();
