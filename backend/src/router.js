const express = require("express");
const multer = require("multer");
const authMiddlewares = require("./middlewares/auth");
const { validateUser } = require("./middlewares/validator");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/assets/images/");
  },
  filename: (req, file, callback) => {
    const name = file.fieldname;
    const extension = MIME_TYPES[file.mimetype];
    callback(null, `${name + Date.now()}.${extension}`);
  },
});

const upload = multer({ storage }).fields([
  { name: "avatar", maxCount: 1 },
  { name: "background_profil", maxCount: 1 },
]);

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const jobTypeControllers = require("./controllers/jobTypeControllers");
const gradeControllers = require("./controllers/gradeControllers");
const categoryControllers = require("./controllers/categoryControllers");
const learningControllers = require("./controllers/learningControllers");
const blackListTokenControllers = require("./controllers/blackListTokenControllers");
const userLearningControllers = require("./controllers/userLearningControllers");

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

// *Authentification wall
router.use(
  authMiddlewares.verifyToken,
  blackListTokenControllers.isTokenBlackListed
);

router.post("/api/logout", blackListTokenControllers.blackListToken);

// *Routes User
router.get("/api/users", userControllers.getAllUser);
router.get("/api/users/:id/profil", userControllers.getUserWhithHashedPassword);
router.get("/api/users/role/:role", userControllers.getUserByRole);
router.put(
  "/api/users/:userId",
  userControllers.getUserHashedPassword,
  authMiddlewares.verifyNewPassword,
  authMiddlewares.hashPassword,
  upload,
  userControllers.editUser
);
router.delete("/api/users/:id", userControllers.destroyUser);

// *Routes Job Type
router.post("/api/jobs", jobTypeControllers.addJobType);
router.delete("/api/jobs/:id", jobTypeControllers.destroyJobType);

// *Routes Category
router.get("/api/categories", categoryControllers.getAllCategory);
router.get("/api/categories/job/:jobId", categoryControllers.getByJob);

// *Routes Learning
router.get("/api/learnings/:id", learningControllers.getLearningsById);
router.get(
  "/api/learnings/:id/user/:userId",
  learningControllers.getLearningsByIdAndUserId
);
router.get(
  "/api/learnings/:categoryId/:gradeId/user/:userId",
  learningControllers.getByCatAndUserGrade
);

router.get(
  "/api/learnings/job/:jobId/grade/:gradeId",
  learningControllers.getByJobAndGrade
);

router.get("/api/user-learnings/:userId", learningControllers.getUserLearnings);

// *Routes UserLearning
router.get(
  "/api/user-learnings/:userId/:learningId",
  userLearningControllers.addUserLearning
);
router.delete(
  "/api/user-learnings/:userLearningId",
  userLearningControllers.destroyUserLearning
);
router.put(
  "/api/user-learnings/:userLearningId",
  userLearningControllers.updateUserLearning
);

module.exports = router;
