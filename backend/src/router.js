const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const jobTypeControllers = require("./controllers/jobTypeControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// * Routes User
router.get("/api/users", userControllers.getAllUser);
router.get("/api/users/:id", userControllers.getUser);
router.post("/api/users", userControllers.addUser);
router.put("/api/users/:id", userControllers.editUser);
router.delete("/api/users/:id", userControllers.destroyUser);

// * Routes Job Type
router.get("/api/jobs", jobTypeControllers.getAllJobType);
router.post("/api/jobs", jobTypeControllers.addJobType);
router.delete("/api/jobs/:id", jobTypeControllers.destroyJobType);

module.exports = router;
