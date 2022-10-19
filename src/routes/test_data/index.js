const express = require("express");
const router = express.Router();

class test_data {
  // author
  author = {
    logintoThanhToanAccount: (req, res) => {
      return res.json({
        status: "Successfully",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7InVzZXJuYW1lIjoidGhhbmh0b2FuIiwicGFzc3dvcmQiOiJ0aGFuaHRvYW4xMjMifSwiaWF0IjoxNjY0OTA0NjYzfQ.9CgQSfgyh4xuE2V82-TR5XG7WHe9qNuCEXwN-d2YBEc"
      });
    },

    reLogin: (req, res) => {
      return res.json({
        status: "Successfully",
        data: {
          user_id: `userid123abc`,
          name: `Nguyen Hoang Thanh Toan`,
          email: "toan123@gmail.com",
          company_id: "comid123",
          company_name: `Cong ty A`,
          compnny_address: "com111, Nguyen Van Cu",
        },
      });
    },

    getInformation: (req, res) => {
      return res.json({
        status: "Successfully",
        data: {
          user_id: `userid123abc`,
          name: `Nguyen Hoang Thanh Toan`,
          email: "toan123@gmail.com",
          company_id: "comid123",
          company_name: `Cong ty A`,
          compnny_address: "com111, Nguyen Van Cu",
        },
      })
    }
  };

  // company

  // agent
  agent = {
    getAllAgent: (req, res) => {
      return res.json({
        status: "Successfully",
        data: [
          {
            agent_id: "agentid123",
            agent_name: "Dai ly E",
            agent_owner: "Tran Huu Tri",
          },
          {
            agent_id: "agentid456",
            agent_name: "Dai ly F",
            agent_owner: "Phan Quang Huy Vu",
          },
        ],
      });
    },
  };

  // warehosue
  warehosue = {
    getAllWarehouse: (req, res) => {
      return res.json({
        status: "Successfully",
        data: [
          {
            warehosue_id: "warehouse123",
            warehosue_name: "Kho 1",
            warehosue_address: "Kho1 Duong 30/4",
            length: 8,
            width: 4,
            height: 4,
          },
          {
            warehosue_id: "warehouse456",
            warehosue_name: "Kho 2",
            warehosue_address: "Kho2 Ly Tu Trong",
            length: 8,
            width: 4,
            height: 4,
          },
        ],
      });
    },
  };

  // station

  // palelt
  pallet = {
    getAllPallet: (req, res) => {
      return res.json({
        status: "Successfully",
        data: [
          {
            pallet_id: "palletId23",
            pallet_template_id: "PalletTemplateId1",
            warehouse_id: "warehouse123",
            description: "",
            is_used: false,
            import_data: "8/9/2000",
            storage_start_data: "8/10/2000",
            position: "",
          },
          {
            pallet_id: "palletId456",
            pallet_template_id: "PalletTemplateId2",
            warehouse_id: "warehouse456",
            description: "",
            is_used: false,
            import_data: "8/9/2000",
            storage_start_data: "8/10/2000",
            position: "",
          },
        ],
      });
    },
  };

  // product
  product = {
    getAllProduct: (req, res) => {
      return res.json({
        status: "Successfully",
        data: [
          {
            product_id: "productId123",
            warehouse_id: "warehouse123",
            description: "",
            pallet_id: "PalletTemplateId1",
            position: "",
            storage_time: "",
            width: 4,
            length: 4,
            height: 4,
          },
          {
            product_id: "productId124",
            warehouse_id: "warehouse456",
            description: "",
            pallet_id: "PalletTemplateId2",
            position: "",
            storage_time: "",
            width: 4,
            length: 4,
            height: 4,
          },
        ],
      });
    },
  };

  // sensor
  sensor = {
    getAllSensor: (req, res) => {
      return res.json({
        status: "Successfully",
        data: [
          {
            sensor_id: "sensorId123",
            data: "99do",
            is_activated: false,
            position: -1,
          },
          {
            sensor_id: "sensorId456",
            data: "99do",
            is_activated: false,
            position: -1,
          },
        ],
      });
    },
  };
}

const test = new test_data();

router.get("/loginTT", test.author.logintoThanhToanAccount);
router.get("/reLogin", test.author.reLogin);
router.get("/getInformation", test.author.getInformation);
router.get("/getAllAgent", test.agent.getAllAgent);
router.get("/getAllWarehouse", test.warehosue.getAllWarehouse);
router.get("/getAllPallet", test.pallet.getAllPallet);
router.get("/getAllProduct", test.product.getAllProduct);
router.get("/getAllSensor", test.sensor.getAllSensor);

module.exports = router;
