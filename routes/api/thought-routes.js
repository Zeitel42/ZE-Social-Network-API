const thought = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

thought.route("/").get(getAllThoughts);
thought.route("/:id").get(getThoughtById).put(updateThought);

// /api/thoughts/<userId>
thought.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
thought.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
thought.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = thought;
