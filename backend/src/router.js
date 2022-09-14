const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const jobTypeControllers = require("./controllers/jobTypeControllers");
const gradeControllers = require("./controllers/gradeControllers");

// *Routes User
router.get("/api/users", userControllers.getAllUser);
router.get("/api/users/:id", userControllers.getUser);
router.post("/api/users", userControllers.addUser);
router.put("/api/users/:id", userControllers.editUser);
router.delete("/api/users/:id", userControllers.destroyUser);

// *Routes Job Type
router.get("/api/jobs", jobTypeControllers.getAllJobType);
router.post("/api/jobs", jobTypeControllers.addJobType);
router.delete("/api/jobs/:id", jobTypeControllers.destroyJobType);

// *Routes Grade
router.get("/api/grades", gradeControllers.getAllGrade);

module.exports = router;
