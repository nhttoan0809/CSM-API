module.exports = (req, res, next) => {
  req.id_warehouse = req.params["id_warehouse"];
  next();
};
