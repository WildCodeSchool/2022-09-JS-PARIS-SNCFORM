const models = require("../models");
const { createToken } = require("../middlewares/auth");

const getAllUser = (_, res) => {
  models.user
    .findAll()
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user getAllUser request");
    });
};

const getUserWhithHashedPassword = (req, res) => {
  const { id } = req.params;

  models.user
    .find(id)
    .then(([result]) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user getUser request");
    });
};

const getUserByRole = (req, res) => {
  const { role } = req.params;

  models.user
    .findByRole(role)
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user getUserByRole request");
    });
};

const getUserByCp = (req, res) => {
  const { cpNumber } = req.body;

  models.user
    .findByCp(cpNumber)
    .then(([result]) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user getUserByCp request");
    });
};

const signup = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return false;
      }
      return result.insertId;
    })
    .then((insertId) => {
      if (!insertId) {
        res.status(400).json({ message: "User not created" });
      }
      const token = createToken(insertId);
      res
        .location(`api/users/${insertId}`)
        .status(201)
        .json({ message: "User created", token });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user signup request");
    });
};

const login = (req, res, next) => {
  const { cpNumber } = req.body;
  models.user
    .findByCp(cpNumber)
    .then(([data]) => {
      if (!data) {
        res.sendStatus(401);
      }
      [req.user] = data;
      next();
    })
    .catch((err) => {
      console.error("ERROR IN LOGIN", err);
      res.sendStatus(400);
    });
};

const editUser = (req, res) => {
  // console.log("&&&&&&file", req.file);
  // console.log("######body", req.body);
  const user = req.body;
  user.id = req.params.id;
  user.avatar = req.file.path;

  user.hashedPassword = req.body.hashedPassword;

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        const { id, first_name, last_name, email } = user;
        const userToken = {
          id,
          first_name,
          last_name,
          email,
        };
        const token = createToken(user.id, userToken);
        res.status(200).json({ message: "User updated", token });
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
      res.status(500).send("Error in user destroy request");
    });
};

module.exports = {
  getAllUser,
  getUserWhithHashedPassword,
  signup,
  editUser,
  destroyUser,
  getUserByRole,
  getUserByCp,
  login,
};
