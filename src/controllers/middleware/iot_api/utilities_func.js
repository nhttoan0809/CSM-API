var axios = require("axios");
var qs = require("qs");

module.exports = {
  get_token: async (username, password) => {
    var data = qs.stringify({
      grant_type: "password",
      username: username,
      password: password,
    });
    var config = {
      method: "post",
      url: "http://iotlab.net.vn:3000/api/auth/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    const response = await axios(config)
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          return data;
        }
      })
      .catch(() => null);

    return response;
  },
};
