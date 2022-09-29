const models = require("../models");

const addUserLearning = (req, res) => {
  const { userId, learningId } = req.params;

  models.user_learning
    .insert(userId, learningId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return false;
      }
      return result.insertId;
    })
    .then((insertId) => {
      if (!insertId) {
        res.status(400).json({ message: "UserLearning not created" });
      }
      res.status(201).json({ message: "UserLearning created" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in UserLearning addUserLearning request");
    });
};

module.exports = {
  addUserLearning,
};
