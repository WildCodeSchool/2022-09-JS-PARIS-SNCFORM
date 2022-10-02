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

const getUserLearnings = (req, res) => {
  const { userId } = req.params;

  models.learning
    .findUserLearnings(parseInt(userId, 10))
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in learning getUserLearningByStatus request");
    });
};

const getByJobAndGrade = (req, res) => {
  const { jobId, gradeId } = req.params;

  models.learning
    .findByJobAndGrade(jobId, gradeId)
    .then(([result]) => res.status(200).json(result))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error in learning getByJobAndGrade request");
    });
};

module.exports = {
  getByCatAndUserGrade,
  getUserLearnings,
  getByJobAndGrade,
};
