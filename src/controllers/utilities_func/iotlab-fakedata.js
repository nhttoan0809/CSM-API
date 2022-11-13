var axios = require("axios");
var qs = require("qs");

const baseUrl = `https://iotlab-fakedata.herokuapp.com/api`;

module.exports = {
  getToken: async (username, password) => {
    var data = qs.stringify({
      username,
      password,
    });
    var config = {
      method: "post",
      url: `${baseUrl}/authen/token`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    return await axios(config)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return {
          status: "Failure",
        };
      });
  },

  // Get all staion
  getAllStation: async (token) => {
    var data = qs.stringify({});
    var config = {
      method: "get",
      url: `${baseUrl}/station/get_all`,
      headers: {
        Authorization: token,
      },
      data: data,
    };

    return await axios(config)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return {
          status: "Failure",
        };
      });
  },

  // Get all sensor
  getAllSensor: async (token, id_station) => {
    var data = qs.stringify({});
    var config = {
      method: "get",
      url: `${baseUrl}/station/${id_station}/sensor/get_all`,
      headers: {
        Authorization: token,
      },
      data: data,
    };

    return await axios(config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("Loi roi");
        return {
          status: "Failure",
        };
      });
  },

  // Get data from specific sensor
  getData: async (token, id_station, id_sensor) => {
    var data = qs.stringify({});
    var config = {
      method: "get",
      url: `${baseUrl}/station/${id_station}/sensor/${id_sensor}/get_data`,
      headers: {
        Authorization: token,
      },
      data: data,
    };

    return await axios(config)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return {
          status: "Failure",
        };
      });
  },
};
