const models = require("../models");

const getAllCategory = (_, res) => {
  models.category
    .findAll()
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in getAllCategory request");
    });
};

const getByJob = (req, res) => {
  const { jobId } = req.params;

  models.category
    .findByjob(jobId)
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in category getByJobAndGrade request");
    });
};

module.exports = {
  getAllCategory,
  getByJob,
};
