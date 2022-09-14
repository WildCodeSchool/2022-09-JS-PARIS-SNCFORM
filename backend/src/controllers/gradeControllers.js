const models = require("../models");

const getAllGrade = (_, res) => {
  models.grade
    .findAll()
    .then(([result]) => res.status(200).send(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in grade getAllGrade request");
    });
};

module.exports = {
  getAllGrade,
};
