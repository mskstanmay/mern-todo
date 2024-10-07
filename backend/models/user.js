const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, default: "John Doe" },
  emailId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  nickname: {type: String, required:false},
});

module.exports = mongoose.model("user", userSchema);