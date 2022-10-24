const ProductModel = require("../../models/Product.model");
const WarehouseModel = require("./../../models/Warehouse.model");
const PalletModel = require("./../../models/Pallet.model");
const StationModel = require("./../../models/Station.model");

class WarehouseController {
  // [GET] agent/:id_agent/warehouse/get_all
  get_all = (req, res) => {
    const id_agent = req.id_agent;

    WarehouseModel.find(
      {
        agent_id: id_agent,
      },
      (err, warehouses) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Get all warehouse failure",
          });
        } else {
          const data = warehouses.map((wh) => ({
            warehouse_id: wh._id,
            name: wh.warehouse_name,
            address: wh.address,
            length: wh.length,
            width: wh.width,
            height: wh.height,
          }));

          return res.json({
            status: "Successfully",
            data,
          });
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/add
  add = (req, res) => {
    const id_agent = req.id_agent;

    // Get data from body
    const warehouse_name = req.body.warehouse_name;
    const address = req.body.address;
    const length = req.body.length;
    const width = req.body.width;
    const height = req.body.height;

    WarehouseModel.findOne(
      {
        address,
      },
      (err, warehouse) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't access to db to add warehouse",
          });
        } else {
          if (warehouse) {
            return res.json({
              status: "Failure",
              message:
                "You can't add a new warehouse with duplicate address with another one",
            });
          } else {
            const warehouse = WarehouseModel({
              warehouse_name,
              address,
              length,
              width,
              height,
              agent_id: id_agent,
            });

            warehouse.save((err) => {
              if (err) {
                return res.json({
                  status: "Failure",
                  message: "Add warehouse failure",
                });
              } else {
                return res.json({
                  status: "Successfully",
                  message: "Add warehouse successfully",
                });
              }
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/update
  update = (req, res) => {
    // Get param
    const id_warehouse = req.params["id_warehouse"];

    // Get data from body
    const warehouse_name = req.body.warehouse_name;
    const address = req.body.address;
    const length = req.body.length;
    const width = req.body.width;
    const height = req.body.height;

    WarehouseModel.findOneAndUpdate(
      {
        _id: id_warehouse,
      },
      {
        warehouse_name,
        address,
        length,
        width,
        height,
      },
      (err, warehouse) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Update warehouse failure",
          });
        } else {
          if (warehouse) {
            return res.json({
              status: "Successfully",
              message: "Update warehouse successfully",
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't have any warehouse match with this id to update",
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/import
  import = (req, res) => {
    // Get params
    const id_warehouse = req.params["id_warehouse"];

    // Get data from body
    const description = req.body.description;
    const width = req.body.width;
    const length = req.body.length;
    const height = req.body.height;

    WarehouseModel.findOne(
      {
        _id: id_warehouse,
      },
      (err, warehouse) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't access to db to import product to warehouse",
          });
        } else {
          if (!warehouse) {
            return res.json({
              status: "Failure",
              message: "Can't find warehouse to match with this id",
            });
          } else {
            const product = ProductModel({
              warehouse_id: id_warehouse,
              description,
              width,
              length,
              height,
            });
            product.save((err) => {
              if (err) {
                return res.json({
                  status: "Failure",
                  message: "Can't import product to db",
                });
              } else {
                return res.json({
                  status: "Successfully",
                  message: "Import product successfully",
                });
              }
            });
          }
        }
      }
    );
  };

  // [DELETE] agent/:id_agent/warehouse/:id_warehouse/export
  export = (req, res) => {
    // Get params
    const id_warehouse = req.params["id_warehouse"];

    // Get data from body
    const id_product = req.body.id_product;

    ProductModel.findOneAndDelete(
      {
        _id: id_product,
      },
      (err, product) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't access to db to export product",
          });
        } else {
          if (!product) {
            return res.json({
              status: "Failure",
              message: "Can't find product to export",
            });
          } else {
            return res.json({
              status: "Successfully",
              message: "Export product successfully",
            });
          }
        }
      }
    );
  };

  // [DELETE] agent/:id_agent/warehouse/:id_warehouse/delete
  delete = async (req, res) => {
    // Get params
    const id_warehouse = req.params["id_warehouse"];

    const pallet = await PalletModel.deleteMany({
      warehouse_id: id_warehouse,
    }).exec();
    const product = await ProductModel.deleteMany({
      warehouse_id: id_warehouse,
    }).exec();
    const station = await StationModel.deleteMany({
      warehouse_id: id_warehouse,
    }).exec();

    const palletDeleted = pallet.deletedCount;
    const productDeleted = product.deletedCount;
    const stationDeleted = station.deletedCount;

    if (palletDeleted > 0 || productDeleted > 0 || stationDeleted > 0) {
      return res.json({
        status: "Successfully",
        message: "success access",
      });
    } else {
      return res.json({
        status: "Successfully",
        message: "success access",
      });
    }
  };
}

module.exports = new WarehouseController();
