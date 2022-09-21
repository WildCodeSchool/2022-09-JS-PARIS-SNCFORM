const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

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
      res.sendStatus(401);
    }
    const token = createToken(userId);
    delete req.user.hashedPassword;
    res.send({ token, user: req.user });
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
    res.sendStatus(401);
  }
};

// token
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE5LCJpYXQiOjE2NjM2NjcwMTAsImV4cCI6MTY2MzY3MDYxMH0.POnKeNTDh1DuiY9Jx25KyPBP_QFe97GB1VPDdrLuxiM"

module.exports = {
  hashPassword,
  createToken,
  verifyToken,
  verifyPassword,
};
