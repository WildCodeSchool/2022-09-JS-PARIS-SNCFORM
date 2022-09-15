const models = require("../models");

const getAllJobType = (_, res) => {
  models.job_type
    .findAll()
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in job_type getAllJobType request");
    });
};

const addJobType = (req, res) => {
  const jobType = req.body;

  models.job_type
    .add(jobType)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in job_type addJobType request ");
    });
};

const destroyJobType = (req, res) => {
  const { id } = req.params;

  models.job_type
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in job_type destroyJobType request ");
    });
};

module.exports = {
  getAllJobType,
  addJobType,
  destroyJobType,
};
