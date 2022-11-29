const jwt = require("jsonwebtoken");
const { Model } = require("mongoose");
const UserModel = require("../../models/User.model");
const dotenv = require("dotenv").config();

class AuthorController {
  // [POST] auth/login
  login = async (req, res) => {
    // Get data from body
    const username = req.body.username;
    const password = req.body.password;

    // Connect to db to get data
    UserModel.findOne({ username, password }, (err, user) => {
      if (!err) {
        if (!user) {
          return res.json({
            status: "Failure",
            message: "username or password is not valid",
          });
        }

        // generate access token
        const body = req.body;
        const accessToken = jwt.sign({ body }, process.env.SECRET_KEY);

        // save token to db
        const id_user = `${user._id.toString()}`;
        const new_access_token = [...user.access_token];
        new_access_token.push(accessToken);

        UserModel.findOneAndUpdate(
          { _id: id_user },
          { access_token: new_access_token },
          (err) => {
            if (err) {
              console.log("---> SAVE TOKEN FAILURE");
              return res.json({
                status: "Failure",
                message: "Can't save token to db",
              });
            }

            console.log("---> SAVE TOKEN SUCCESSFULLY");
            return res.json({
              status: "Successfully",
              data: {
                id_user,
                access_token: accessToken,
              },
            });
          }
        );
      } else {
        return res.json({
          status: "Failure",
          message: `Can't access to db!!!`,
        });
      }
    });
  };

  // [GET] auth/reLogin
  reLogin = async (req, res) => {
    const accessToken = req.headers["authorization"];
    const id_user = req.id_user;

    return res.json({
      status: "Successfully",
      data: {
        id_user,
        access_token: accessToken,
      },
    });
  };

  // [GET] auth/logout
  logout = (req, res) => {
    const accesToken = req.headers["authorization"];
    const id_user = req.id_user;

    console.log(`id_user: ${id_user}`);
    console.log(`accessToken: ${accesToken}`);

    UserModel.findOne({ _id: id_user }, (err, user) => {
      if (!err) {
        if (user) {
          const new_access_token = user.access_token.filter(
            (token) => token !== accesToken
          );
          UserModel.findOneAndUpdate(
            { _id: user._id },
            { access_token: new_access_token },
            (err) => {
              if (!err) {
                console.log("Message: Logout Successfully\n\n\n");
                return res.json({
                  status: "Successfully",
                  message: "Sign out successfully",
                });
              }
            }
          );
        }
      } else {
        console.log(`Message: Logout failure. Can't remove token.\n\n\n`);
        return res.json({
          status: "Failure",
          message: "Can't access to db to remove token",
        });
      }
    });
  };

  // [POST] auth/register
  register = (req, res) => {
    // Get data from body
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    const companyName = req.body.companyName;

    // Check account already exist
    UserModel.findOne({ username }, (err, user) => {
      if (!err) {
        if (user) {
          return res.json({
            status: "Failure",
            message: "Account already exists",
          });
        } else {
          const user = new UserModel({
            username,
            password,
            name,
            email,
            access_token: [],
          });

          user.save((err) => {
            if (err) {
              return res.json({
                status: "Failure",
                message: "Can't create account on db.",
              });
            } else {
              return res.json({
                status: "Successfully",
                message: "Sign up successfully.",
              });
            }
          });
        }
      } else {
        return res.json({
          status: "Failure",
          message: "Sign up failure",
        });
      }
    });
  };

  // [GET] auth/getInfor
  getInformation = (req, res) => {
    const id_user = req.id_user;

    UserModel.findOne({ _id: id_user }, (err, user) => {
      if (!err) {
        if (user) {
          return res.json({
            status: "Successfully",
            data: {
              user_id: user._id,
              username: user.username,
              name: user.name,
              email: user.email,
            },
          });
        }
      } else {
        console.log(`Get personal information failure\n\n\n`);
        return res.json({
          status: "Failure",
          message: "Can't get personal information",
        });
      }
    });
  };

  // [POST] auth/updateInfor
  updateInfor = (req, res) => {
    const id_user = req.id_user;
    // get data from body
    const name = req.body.name;
    const email = req.body.email;

    UserModel.findOneAndUpdate(
      {
        _id: id_user,
      },
      {
        name,
        email,
      },
      (err) => {
        if (!err) {
          return res.json({
            status: "Successfully",
            message: "Update successfully",
          });
        } else {
          return res.json({
            status: "Failure",
            message: "Update failure",
          });
        }
      }
    );
  };

  // [POST] auth/updatePwd
  updatePwd = (req, res) => {
    const id_user = req.id_user;

    // Get data from body
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    UserModel.findOne({ _id: id_user, password: oldPassword }, (err, user) => {
      if (!err) {
        if (user) {
          return res.json({
            status: "Successfully",
            data: {
              user_id: user._id,
              name: user.username,
              email: user.email,
            },
          });
        }
      } else {
        console.log(`Get personal information failure\n\n\n`);
        return res.json({
          status: "Failure",
          message: "Can't get personal information",
        });
      }
    });
  };
}

module.exports = new AuthorController();
