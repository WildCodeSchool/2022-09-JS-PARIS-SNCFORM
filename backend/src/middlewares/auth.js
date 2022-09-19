const argon2 = require("argon2");

const hashPassword = (req, res, next) => {
  const { password } = req.body;

  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };
  argon2
    .hash(password, hashingOptions)

    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(`Error in hashPassword ${err}`);
      res.sendStatus(500);
    });
};

module.exports = {
  hashPassword,
};
