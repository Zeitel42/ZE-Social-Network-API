const user = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");
const User = require("../../models");

// /api/Users
user.route("/").get(getAllUser).post(createUser);

// /api/Users/:id
user.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = user;
