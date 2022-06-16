const user = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");
const User = require("../../models");

// /api/users
user.route("/").get(getAllUser).post(createUser);

// /api/users/:id
user.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
user.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = user;
