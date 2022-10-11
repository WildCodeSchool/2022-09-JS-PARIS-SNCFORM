const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    req.hashedPassword = req.body.hashedPassword;
    next();
  } else {
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
        req.hashedPassword = hashedPassword;
        delete req.body.password;
        next();
      })
      .catch((err) => {
        console.error(`Error in hashPassword ${err}`);
        res.sendStatus(500);
      });
  }
};

const createToken = (id) => {
  const token = jwt.sign({ sub: id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const verifyPassword = (req, res) => {
  const { password } = req.body;
  const { hashedPassword, id: userId } = req.user;

  argon2.verify(hashedPassword, password).then((isVerified) => {
    if (!isVerified) {
      return res.sendStatus(401);
    }
    delete req.user.hashedPassword;
    const token = createToken(userId);
    return res.send({ token, user: req.user });
  });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: err.message });
  }
};

const verifyNewPassword = (req, res, next) => {
  const { newPassword, oldPassword, hashedPassword } = req.body;

  return argon2.verify(hashedPassword, oldPassword).then((isVerified) => {
    if (!isVerified) {
      res.sendStatus(401);
    } else {
      if (newPassword) req.body.password = newPassword;
      next();
    }
  });
};

module.exports = {
  hashPassword,
  createToken,
  verifyToken,
  verifyPassword,
  verifyNewPassword,
};
