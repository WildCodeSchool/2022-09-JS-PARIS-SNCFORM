const models = require("../models");

const getAllUser = (_, res) => {
  models.user
    .findAll()
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user getAllUser resquest");
    });
};

const getUser = (req, res) => {
  const { id } = req.params;

  models.user
    .find(id)
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user getUser resquest");
    });
};

const addUser = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user addUser resquest");
    });
};

const editUser = (req, res) => {
  const user = req.body;

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user update request");
    });
};

const destroyUser = (req, res) => {
  const { id } = req.params;

  models.user
    .destroy(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user destroy request");
    });
};

module.exports = {
  getAllUser,
  getUser,
  addUser,
  editUser,
  destroyUser,
};
