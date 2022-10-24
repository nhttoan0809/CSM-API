module.exports = (req, res, next) => {
  req.id_agent = req.params["id_agent"];
  next();
};
