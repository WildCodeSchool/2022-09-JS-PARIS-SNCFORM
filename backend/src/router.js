const express = require("express");
const multer = require("multer");
const authMiddlewares = require("./middlewares/auth");

const upload = multer({ dest: "public/assets/images/" });

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const jobTypeControllers = require("./controllers/jobTypeControllers");
const gradeControllers = require("./controllers/gradeControllers");
const categoryControllers = require("./controllers/categoryControllers");
const learningControllers = require("./controllers/learningControllers");
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

router.put(
  "/api/users/:id",
  // authMiddlewares.verifyNewPassword,
  // authMiddlewares.hashPassword,
  upload.single("avatar")
  // userControllers.editUser
  // (req, res) => {
  // console.log("&&&&&&&&", req);
  // }
);
// Authentification wall
router.use(
  authMiddlewares.verifyToken,
  blackListTokenControllers.isTokenBlackListed
);

router.post("/api/logout", blackListTokenControllers.blackListToken);

// *Routes User
router.get("/api/users", userControllers.getAllUser);
router.get("/api/users/:id/profil", userControllers.getUserWhithHashedPassword);
router.get("/api/users/role/:role", userControllers.getUserByRole);

router.delete("/api/users/:id", userControllers.destroyUser);

// *Routes Job Type
router.post("/api/jobs", jobTypeControllers.addJobType);
router.delete("/api/jobs/:id", jobTypeControllers.destroyJobType);

// *Routes Grade

// *Routes Category
router.get("/api/categories", categoryControllers.getAllCategory);

// *Routes Learning
router.get(
  "/api/learnings/:categoryId/:gradeId",
  learningControllers.getByCatAndUserGrade
);

router.get("/api/user-learnings/:userId", learningControllers.getUserLearnings);

module.exports = router;
