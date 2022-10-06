const models = require("../models");

const getLearningsById = (req, res) => {
  const { id } = req.params;
  models.learning
    .find(id)
    .then(([result]) => res.status(200).json(result[0]))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in learnings getAllLearnings request");
    });
};

const getLearningsByIdAndUserId = (req, res) => {
  const { id, userId } = req.params;
  models.learning
    .findByIdAndUserId(id, userId)
    .then(([result]) => res.status(200).json(result[0]))
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Error in learnings getLearningsByIdAndUserId request");
    });
};

const getByCatAndUserGrade = (req, res) => {
  const { categoryId, gradeId, userId } = req.params;

  models.learning
    .findByCatAndUserGrade(categoryId, gradeId, userId)
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
  getLearningsById,
  getLearningsByIdAndUserId,
  getByCatAndUserGrade,
  getUserLearnings,
  getByJobAndGrade,
};
