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

// get all thoughts
thought.route("/").get(getAllThoughts);

// get , update , delete thought by id
thought
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// add thought /api/thoughts/<userId>
thought.route("/:userId").post(addThought);

// add reaction /api/thoughts/:userId/:thoughtId
thought.route("/:userId/:thoughtId").put(addReaction);

// remove reaction /api/thoughts/:userId/:thoughtId/:reactionId
thought.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = thought;
