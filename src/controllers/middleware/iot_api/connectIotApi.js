const utilities_func = require('./utilities_func')

module.exports = async (req, res, next) => {
  console.log("\n\nCONNECT TO IOT LAB API HERE...\n");

  // Get data from query param
  const iot_username = req.query["iot_username"];
  const iot_password = req.query["iot_password"];

  if (!iot_username && !iot_password) {
    return res.json({
      status: "Failure",
      message: "iot_username and iot_password is required",
    });
  } else {
    console.log("iot_username: ", iot_username);
    console.log("iot_password: ", iot_password);

    const data = await utilities_func.get_token(iot_username, iot_password)

    // console.log('response here: ', response);
    if(data){
      console.log("\nEND OF CONNECT TO IOT LAB API...\n\n\n");
      req.data_get_token = data
      next();
    }else{
      console.log("\nEND OF CONNECT TO IOT LAB API...\n\n\n");
      return res.json({
        status: "Failure",
        message: "Can't connect to iot lab api with this account"
      })
    }
  }
};
