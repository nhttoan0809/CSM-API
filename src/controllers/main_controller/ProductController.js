const { default: mongoose } = require("mongoose");
const ProductModel = require("./../../models/Product.model");

class ProductController {
  // [GET] agent/:id_agent/warehouse/:id_warehouse/product/get_all
  get_all_product_information = (req, res) => {
    ProductModel.find({}, (err, pallets) => {
      if (err) {
        return res.json({
          status: "Failure",
          message: "Can't connect to db to get all product",
        });
      } else {
        if (pallets) {
          return res.json({
            status: "Successfully",
            data: pallets,
          });
        } else {
          return res.json({
            status: "Failure",
            message: "Don't have any product",
          });
        }
      }
    });
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/add_to_pallet
  add_product_to_pallet = (req, res) => {
    // Get params
    const id_product = req.params["id_product"];

    // Get data from body
    const pallet_id = req.body.pallet_id;
    const position = req.body.position;

    ProductModel.findOneAndUpdate(
      {
        _id: id_product,
      },
      {
        pallet_id,
        position,
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to add product to pallet",
          });
        } else {
          console.log(docs);
          if (docs) {
            return res.json({
              status: "Successfully",
              message: "Add product to pallet successfully",
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't match with any product to assign to a pallet",
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/remove_from_pallet
  remove_product_from_pallet = (req, res) => {
    // Get params
    const id_product = req.params["id_product"];

    ProductModel.findOneAndUpdate(
      {
        _id: id_product,
        pallet_id: { $exists: true },
      },
      {
        $unset: {
          pallet_id: "",
          position: "",
        },
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to remove product from pallet",
          });
        } else {
          if (docs) {
            return res.json({
              status: "Successfully",
              message: "Remove product from pallet successfully",
            });
          } else {
            return res.json({
              status: "Successfully",
              message: "Don't match with any product to remove them",
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_information
  update_product_information = (req, res) => {
    // Get params
    const id_product = req.params["id_product"];

    // Get data from body
    const { description, width, length, height } = req.body;

    ProductModel.updateOne(
      {
        _id: id_product,
      },
      {
        description,
        length,
        width,
        height,
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to update product information",
          });
        } else {
          if (docs) {
            return res.json({
              status: "Successfully",
              message: "Update product information successfully",
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't match to any product to update them",
            });
          }
        }
      }
    );
  };

  // [POST] agent/:id_agent/warehouse/:id_warehouse/product/:id_product/update_position
  update_product_position = (req, res) => {
    // Get params
    const id_product = req.params["id_product"];

    // Get data from body
    const { position } = req.body;

    ProductModel.updateOne(
      {
        _id: id_product,
      },
      {
        position,
      },
      (err, docs) => {
        if (err) {
          return res.json({
            status: "Failure",
            message: "Can't connect to db to update product position",
          });
        } else {
          if (docs) {
            return res.json({
              status: "Successfully",
              message: "Update product position successfully",
            });
          } else {
            return res.json({
              status: "Failure",
              message: "Don't match to any product to update them",
            });
          }
        }
      }
    );
  };
}

module.exports = new ProductController();
