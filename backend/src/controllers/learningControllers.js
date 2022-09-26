const models = require("../models");

const getByCatAndUserGrade = (req, res) => {
  const { categoryId, gradeId } = req.params;

  models.learning
    .findByCatAndUserGrade(categoryId, gradeId)
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in learning getByCatAndUserGrade request");
    });
};

module.exports = {
  getByCatAndUserGrade,
};
