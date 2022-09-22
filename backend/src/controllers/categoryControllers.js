const models = require("../models");

const getAllCategory = (_, res) => {
  models.category
    .findAll()
    .then(([result]) => res.status(200).send(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in getAllCategory request");
    });
};

module.exports = {
  getAllCategory,
};
