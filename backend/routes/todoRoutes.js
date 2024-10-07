const express = require("express");
const Todo = require("../models/todo"); // Ensure this path is correct based on your project structure
const router = express.Router();

// Create a new ToDo
router.post("/", async (req, res) => {
  const {
    title,
    completed,
    description,
    dueDate,
    priority,
    tags,

    //userId,
  } = req.body;

  /*
   * Creating a temporarary id until the user id login part is resolved....
   *
   */

  const userId = "1";
  const newTodo = new Todo({
    title,
    completed,
    description,
    dueDate,
    priority,
    tags,
    userId,
  });
  try {
    await newTodo.save();
    console.log(`Pushed value into database: ${newTodo.toJSON()}`);
    return res
      .status(201)
      .json({ message: "ToDo created successfully", todo: newTodo });
  } catch (error) {
    console.error("Error creating ToDo:", error);
    return res
      .status(500)
      .json({ message: "Failed to create ToDo", error: error.message });
  }
});

// Fetch all ToDos for a user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const todos = await Todo.find({ userId });
    if (!todos.length) {
      return res.status(404).json({ message: "No ToDos found for this user." });
    }
    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching ToDos:", error);
    return res
      .status(500)
      .json({ message: "Failed to fetch ToDos", error: error.message });
  }
});

// You can add more ToDo-related routes here (e.g., update, delete, etc.)

module.exports = router;
