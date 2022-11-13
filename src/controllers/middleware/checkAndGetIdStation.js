module.exports = (req, res, next) => {
  req.id_station = req.params["id_station"];
  next();
};
