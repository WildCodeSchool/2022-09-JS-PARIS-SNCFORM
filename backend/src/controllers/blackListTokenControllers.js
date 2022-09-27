const models = require("../models");

const blackListToken = (req, res) => {
  const authorizationHeader = req.get("Authorization");

  if (authorizationHeader == null) {
    throw new Error("Authorization header is missing");
  }
  const [, token] = authorizationHeader.split(" ");

  models.token_blacklist
    .insert(token)
    .then(([insertedToken]) => {
      console.warn("TOKEN ID", insertedToken.insertId);
      res.send({ message: "USER LOGGED OUT" });
    })
    .catch((err) => {
      console.warn("ERROR IN blackListToken", err);
      res.sendStatus(400);
    });
};

const isTokenBlackListed = (req, res, next) => {
  const authorizationHeader = req.get("Authorization");
  if (authorizationHeader == null) {
    throw new Error("Authorization header is missing");
  }
  const [, token] = authorizationHeader.split(" ");
  models.token_blacklist
    .findByToken(token)
    .then(([result]) => {
      if (result[0] != null) {
        return res.send({ message: "Token expired" });
      }
      return next();
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Error in blackListToken in isTokenBlackListed request");
    });
};

module.exports = {
  blackListToken,
  isTokenBlackListed,
};
