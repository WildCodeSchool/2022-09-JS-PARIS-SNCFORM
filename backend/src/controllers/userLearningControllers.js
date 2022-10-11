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

const destroyUserLearning = (req, res) => {
  const { userLearningId } = req.params;

  models.user_learning
    .delete(userLearningId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user_learning dstroyUserLearning request");
    });
};

const updateUserLearning = (req, res) => {
  const { userLearningId } = req.params;
  const { statusLearning, startLearning } = req.body;

  models.user_learning
    .update(statusLearning, startLearning, userLearningId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).json({
          message: "User_Learning updated",
          messageSuccess: {
            status: "success",
            message: "Tu commence ta formation",
          },
        });
      }
    });
};
module.exports = {
  addUserLearning,
  destroyUserLearning,
  updateUserLearning,
};
