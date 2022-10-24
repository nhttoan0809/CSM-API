const ProductModel = require("../../models/Product.model");
const PalletModel = require("./../../models/Pallet.model");
const convertTime = require("./../utilities_func/convertTime")

class PalletController {
  // [GET] agent/:id_agent/warehouse/:id_warehouse/pallet/get_all
  get_all_pallet_information = (req, res) => {
    // get params
    const id_warehouse = req.id_warehouse;

    PalletModel.find(
      {
        warehouse_id: id_warehouse,
      },
      (err, pallets) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Get pallet failure",
          });
        } else {
          const palletsCustomize = pallets.map(pallet => {
            let newPallet = { ...pallet._doc }
            if (newPallet.import_date) {
              newPallet['import_date'] = convertTime(newPallet.import_date)
            }
            if (newPallet.storage_start_date) {
              newPallet['storage_start_date'] = convertTime(newPallet.storage_start_date)
            }
            return newPallet;
          })
          // console.log('palletsCustomize: ', palletsCustomize)
          return res.json({
            status: "Successfully",
            data: palletsCustomize
          });
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/import
  import_pallet = (req, res) => {
    // Get data from params
    const id_warehouse = req.id_warehouse;

    // Get data from body
    const pallet_template_id = req.body.pallet_template_id;
    const description = req.body.description;

    const pallet = new PalletModel({
      pallet_template_id,
      warehouse_id: id_warehouse,
      description,
      import_date: new Date(),
    });

    pallet.save((err) => {
      if (err) {
        return res.json({
          status: "Failure",
          message: "Import pallet failure",
        });
      } else {
        return res.json({
          status: "Successfully",
          message: "Import pallet successfully",
        });
      }
    });
  };

  // [DELETE] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/delete
  delete_pallet = (req, res) => {
    // Get data from params
    const id_warehouse = req.id_warehouse;

    // Update any product are assign to this pallet (product will be delete pallet_id and position field)
    ProductModel.updateMany(
      {
        pallet_id: id_pallet,
      },
      {
        $unset: { pallet_id: "", position: "" },
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to remove product from pallet",
          });
        } else {
          console.log(docs);
          if (docs.matchedCount > 0) {
            console.log("message: Remove product successfully");
          } else {
            console.log(
              "message: Don't have any product are assign to this pallet to remove"
            );
          }
          PalletModel.deleteOne(
            {
              _id: id_pallet,
            },
            (err, docs) => {
              if (err) {
                return res.json({
                  status: "Failure",
                  message: "Can't connect to db to delete pallet",
                });
              } else {
                if (docs.deletedCount > 0) {
                  return res.json({
                    status: "Successfully",
                    message: "Delete pallet successfully",
                  });
                } else {
                  return res.json({
                    status: "Failure",
                    message: "Don't any pallet match with this id to delete",
                  });
                }
              }
            }
          );
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/add_to_warehouse
  add_pallet_to_warehouse = (req, res) => {
    // Get params
    const id_pallet = req.params["id_pallet"];

    // Get data from body
    const position = req.body.position;

    PalletModel.updateOne(
      {
        _id: id_pallet,
      },
      {
        position,
        is_used: true,
        storage_start_date: new Date(),
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to add pallet to warehouse",
          });
        } else {
          console.log(docs);
          if (docs.matchedCount > 0) {
            return res.json({
              status: "Successfully",
              message: "Add pallet to warehouse successfully",
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't match with any pallet to add to warehouse",
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/remove_from_warehouse
  remove_pallet_form_warehouse = (req, res) => {
    // Get params
    const id_pallet = req.params["id_pallet"];

    PalletModel.updateOne(
      {
        _id: id_pallet,
      },
      {
        $unset: { position: "" },
        is_used: false,
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't to connect to db to remove pallet from warehouse",
          });
        } else {
          console.log(docs);
          if (docs.modifiedCount > 0) {
            return res.json({
              status: "Successfully",
              message: "Remove pallet from warehouse successfully",
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't match with any pallet to remove them",
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_information
  update_pallet_information = (req, res) => {
    // Get params
    const id_pallet = req.params["id_pallet"];

    // Get data from body
    const description = req.body.description;

    PalletModel.findOneAndUpdate(
      {
        _id: id_pallet,
      },
      {
        description,
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message:
              "Can't connect to db to update pallet information of pallet",
          });
        } else {
          if (docs) {
            return res.json({
              status: "Successfully",
              message: "Update pallet information successfully",
            });
          } else {
            return res.json({
              status: "Successfully",
              message: "Don't match with any pallet to update",
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/pallet/:id_pallet/update_position
  update_pallet_position = (req, res) => {
    // Get params
    const id_pallet = req.params["id_pallet"];

    // Get data from body
    const position = req.body.position;

    PalletModel.findOneAndUpdate(
      {
        _id: id_pallet,
      },
      {
        position,
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to update pallet position of pallet",
          });
        } else {
          if (docs) {
            return res.json({
              status: "Successfully",
              message: "Update pallet position successfully",
            });
          } else {
            return res.json({
              status: "Successfully",
              message: "Don't match with any pallet to update",
            });
          }
        }
      }
    );
  };
}

module.exports = new PalletController();
