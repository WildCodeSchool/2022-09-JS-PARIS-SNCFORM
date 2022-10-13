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
      const user = result[0];
      delete user.hashedPassword;
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Error in user getUserWhithHashedPasswordUser request");
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

const getUserHashedPassword = (req, res, next) => {
  const { userId } = req.params;

  models.user
    .findHashedPasswordById(userId)
    .then(([data]) => {
      if (!data) {
        if (!data) {
          res.sendStatus(401);
        }
      }
      req.body.hashedPassword = data[0].hashedPassword;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error in user getUserHashedPassword request");
    });
};

const login = (req, res, next) => {
  const { cpNumber } = req.body;
  models.user
    .findByCp(cpNumber)
    .then(([data]) => {
      if (!data.length) {
        res.status(401).json({
          message: { status: "error", message: "Utilisateur non trouvée" },
        });
      } else {
        [req.user] = data;
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error in user login request");
    });
};

const editUser = (req, res) => {
  const user = req.body;
  user.id = req.params.userId;
  user.hashedPassword = req.hashedPassword;
  const { avatar, background_profil } = req.files;

  if (avatar) user.avatar = avatar[0].path.replace("public", "");

  if (background_profil)
    user.background_profil = background_profil[0].path.replace("public", "");

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        const token = createToken(user.id);
        res.status(200).json({
          message: "User updated",
          messageSuccess: { status: "success", message: "Profil mis à jour" },
          token,
        });
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
  getUserHashedPassword,
};
