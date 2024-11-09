require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

const { corsOptions } = require("./config");

const PORT = process.env.PORT;

const app = express();


// Middleware
app.use(express.json());
app.use(cors(corsOptions));


// Mongo Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});
app.use("/api/todos", todoRoutes);

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
