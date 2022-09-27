const express = require("express");
const authMiddlewares = require("./middlewares/auth");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const jobTypeControllers = require("./controllers/jobTypeControllers");
const gradeControllers = require("./controllers/gradeControllers");
const categoryControllers = require("./controllers/categoryControllers");
const { validateUser } = require("./middlewares/validator");
const blackListTokenControllers = require("./controllers/blackListTokenControllers");

router.post(
  "/api/signup",
  validateUser,
  authMiddlewares.hashPassword,
  userControllers.signup
);
router.post(
  "/api/login",
  userControllers.login,
  authMiddlewares.verifyPassword
);

router.get("/api/users/role/:role", userControllers.getUserByRole);
router.get("/api/jobs", jobTypeControllers.getAllJobType);
router.get("/api/grades", gradeControllers.getAllGrade);

// Authentification wall
router.use(
  authMiddlewares.verifyToken,
  blackListTokenControllers.isTokenBlackListed
);

router.post("/api/logout", blackListTokenControllers.blackListToken);

// *Routes User
router.get("/api/users", userControllers.getAllUser);
router.get("/api/users/:id", userControllers.getUser);

// *Routes User
router.get("/api/users", userControllers.getAllUser);
router.get("/api/users/:id", userControllers.getUser);
router.get("/api/users/role/:role", userControllers.getUserByRole);
router.put(
  "/api/users/:id",
  authMiddlewares.verifyNewPassword,
  authMiddlewares.hashPassword,
  userControllers.editUser
);

router.delete("/api/users/:id", userControllers.destroyUser);

// *Routes Job Type
router.post("/api/jobs", jobTypeControllers.addJobType);
router.delete("/api/jobs/:id", jobTypeControllers.destroyJobType);

// *Routes Grade

// *Routes Category
router.get("/api/categories", categoryControllers.getAllCategory);

module.exports = router;
