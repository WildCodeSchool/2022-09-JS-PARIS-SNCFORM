const { body, validationResult } = require("express-validator");

const validateUser = [
  body("firstName").exists().notEmpty().isLength({ max: 150 }),
  body("lastName").exists().notEmpty().isLength({ max: 150 }),
  body("cpNumber").exists().notEmpty().isLength({ max: 8 }),
  body("email").exists().notEmpty().isEmail().isLength({ max: 255 }),
  body("genre").exists().notEmpty().isLength({ max: 20 }),
  body("password").exists().notEmpty().isLength({ max: 255 }),
  body("jobType").exists().notEmpty().isInt(),
  body("grade").exists().notEmpty().isInt(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = {
  validateUser,
};
