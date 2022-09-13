const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// * Routes User
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getUser);
router.post("/users", userControllers.addUser);
router.put("/users/:id", userControllers.editUser);
router.delete("/users/:id", userControllers.destroyUser);

module.exports = router;
